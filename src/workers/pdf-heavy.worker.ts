/**
 * Web Worker for the heavy, WASM-based PDF tasks (Ghostscript compression,
 * qpdf encryption/decryption). One worker instance handles exactly one task
 * and is terminated by the caller afterwards, so the Emscripten file system
 * never needs cleanup. Must not import React/Next modules.
 */
import type {
  GsPreset,
  HeavyErrorCode,
  HeavyEvent,
  HeavyRequest,
  QpdfPermissions,
} from '@/lib/pdf/heavy-protocol';

// Versioned wasm asset names, copied to public/wasm/ by scripts/copy-wasm.mjs.
// Keep in sync with the installed package versions (the script prints them).
const GS_WASM_URL = '/wasm/gs-0.0.2.wasm';
const QPDF_WASM_URL = '/wasm/qpdf-0.0.2.wasm';

/** Minimal worker-global surface (the project compiles with the DOM lib only). */
interface WorkerScope {
  onmessage: ((event: MessageEvent<HeavyRequest>) => void) | null;
  postMessage(message: HeavyEvent, transfer?: Transferable[]): void;
}
const ctx = self as unknown as WorkerScope;

class TaskError extends Error {
  constructor(public readonly code: HeavyErrorCode) {
    super(code);
    this.name = 'TaskError';
  }
}

function post(event: HeavyEvent, transfer?: Transferable[]) {
  ctx.postMessage(event, transfer);
}

/**
 * Downloads a wasm binary while reporting byte progress, so the UI can show
 * how the (large, first-use-only) download is advancing.
 */
async function fetchWasm(url: string): Promise<ArrayBuffer> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch ${url}: HTTP ${response.status}`);
  const totalHeader = Number(response.headers.get('content-length'));
  const total = Number.isFinite(totalHeader) && totalHeader > 0 ? totalHeader : null;
  if (!response.body) return response.arrayBuffer();
  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  let loaded = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    loaded += value.byteLength;
    post({ type: 'progress', stage: 'download', loaded, total });
  }
  const bytes = new Uint8Array(loaded);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return bytes.buffer;
}

function looksLikePdf(bytes: Uint8Array): boolean {
  // '%PDF-'
  return (
    bytes.length > 5 &&
    bytes[0] === 0x25 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x44 &&
    bytes[3] === 0x46 &&
    bytes[4] === 0x2d
  );
}

function readOutput(mod: JspawnEmscriptenModule, path: string): Uint8Array {
  let out: Uint8Array;
  try {
    out = mod.FS.readFile(path);
  } catch {
    throw new TaskError('corrupted');
  }
  if (out.length === 0) throw new TaskError('corrupted');
  return out;
}

async function runCompress(pdf: ArrayBuffer, preset: GsPreset): Promise<ArrayBuffer> {
  const input = new Uint8Array(pdf);
  if (!looksLikePdf(input)) throw new TaskError('corrupted');

  const { default: createGs } = await import('@jspawn/ghostscript-wasm/gs.js');
  const wasmBinary = await fetchWasm(GS_WASM_URL);

  // Ghostscript prints "Processing pages 1 through N." then one "Page n" line
  // per page on stdout; turn that into genuine progress events.
  let totalPages: number | null = null;
  const mod = await createGs({
    noInitialRun: true,
    wasmBinary,
    print: (line: string) => {
      const range = /^Processing pages \d+ through (\d+)/.exec(line);
      if (range) {
        totalPages = Number(range[1]);
        return;
      }
      const page = /^Page (\d+)/.exec(line);
      if (page) {
        post({ type: 'progress', stage: 'process', current: Number(page[1]), total: totalPages });
      }
    },
  });

  post({ type: 'progress', stage: 'process', current: null, total: null });
  mod.FS.writeFile('input.pdf', input);
  const code = mod.callMain([
    '-sDEVICE=pdfwrite',
    '-dCompatibilityLevel=1.4',
    `-dPDFSETTINGS=${preset}`,
    '-dNOPAUSE',
    '-dBATCH',
    '-sOutputFile=output.pdf',
    'input.pdf',
  ]);
  // Ghostscript reports fatal errors on stderr but can still exit 0, so the
  // output file itself is the source of truth.
  const out = readOutput(mod, 'output.pdf');
  if (code !== 0 || !looksLikePdf(out)) throw new TaskError('corrupted');
  return out.slice().buffer;
}

async function createQpdf() {
  const { default: createQpdfModule } = await import('@jspawn/qpdf-wasm/qpdf.js');
  const wasmBinary = await fetchWasm(QPDF_WASM_URL);
  const stdout: string[] = [];
  const mod = await createQpdfModule({
    noInitialRun: true,
    wasmBinary,
    print: (line: string) => stdout.push(line),
  });
  return { mod, stdout };
}

function yn(flag: boolean): 'y' | 'n' {
  return flag ? 'y' : 'n';
}

async function runEncrypt(
  pdf: ArrayBuffer,
  userPassword: string,
  ownerPassword: string,
  permissions: QpdfPermissions,
): Promise<ArrayBuffer> {
  const input = new Uint8Array(pdf);
  if (!looksLikePdf(input)) throw new TaskError('corrupted');

  const { mod } = await createQpdf();
  post({ type: 'progress', stage: 'process', current: null, total: null });
  mod.FS.writeFile('input.pdf', input);
  const code = mod.callMain([
    '--encrypt',
    userPassword,
    ownerPassword,
    '256',
    `--print=${permissions.print}`,
    `--modify=${permissions.modify}`,
    `--extract=${yn(permissions.extract)}`,
    `--annotate=${yn(permissions.annotate)}`,
    `--assemble=${yn(permissions.assemble)}`,
    `--accessibility=${yn(permissions.accessibility)}`,
    '--',
    'input.pdf',
    'output.pdf',
  ]);
  const out = readOutput(mod, 'output.pdf');
  if (code !== 0) throw new TaskError('corrupted');
  return out.slice().buffer;
}

async function runDecrypt(pdf: ArrayBuffer, password: string): Promise<ArrayBuffer> {
  const input = new Uint8Array(pdf);
  if (!looksLikePdf(input)) throw new TaskError('corrupted');

  const { mod, stdout } = await createQpdf();
  post({ type: 'progress', stage: 'process', current: null, total: null });
  mod.FS.writeFile('input.pdf', input);

  // Probe first: qpdf reports "File is not encrypted" on stdout, and exits
  // non-zero when the supplied password is wrong.
  const probe = mod.callMain(['--show-encryption', `--password=${password}`, 'input.pdf']);
  if (probe === 0 && /not encrypted/i.test(stdout.join('\n'))) {
    throw new TaskError('not-encrypted');
  }
  if (probe !== 0) throw new TaskError('wrong-password');

  const code = mod.callMain(['--decrypt', `--password=${password}`, 'input.pdf', 'output.pdf']);
  if (code !== 0) throw new TaskError('wrong-password');
  const out = readOutput(mod, 'output.pdf');
  return out.slice().buffer;
}

ctx.onmessage = async (event: MessageEvent<HeavyRequest>) => {
  const { task, pdf } = event.data;
  try {
    let out: ArrayBuffer;
    switch (task.kind) {
      case 'compress':
        out = await runCompress(pdf, task.preset);
        break;
      case 'encrypt':
        out = await runEncrypt(pdf, task.userPassword, task.ownerPassword, task.permissions);
        break;
      case 'decrypt':
        out = await runDecrypt(pdf, task.password);
        break;
    }
    post({ type: 'done', pdf: out }, [out]);
  } catch (err) {
    const code = err instanceof TaskError ? err.code : 'generic';
    post({ type: 'error', code, message: err instanceof Error ? err.message : String(err) });
  }
};
