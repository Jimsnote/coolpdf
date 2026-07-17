// Copies the Emscripten .wasm binaries of the jspawn packages into
// public/wasm/ with versioned file names, so the pdf-heavy worker can fetch
// them over HTTP from any (locale-prefixed) page. Runs on postinstall and
// prebuild. The versioned names must stay in sync with the constants in
// src/workers/pdf-heavy.worker.ts.
import { copyFileSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);

const packages = [
  { name: '@jspawn/ghostscript-wasm', wasm: 'gs.wasm', out: 'gs' },
  { name: '@jspawn/qpdf-wasm', wasm: 'qpdf.wasm', out: 'qpdf' },
];

const outDir = join(root, 'public', 'wasm');
mkdirSync(outDir, { recursive: true });

for (const pkg of packages) {
  const pkgJsonPath = require.resolve(`${pkg.name}/package.json`);
  const { version } = require(pkgJsonPath);
  const src = join(dirname(pkgJsonPath), pkg.wasm);
  const dest = join(outDir, `${pkg.out}-${version}.wasm`);
  copyFileSync(src, dest);
  console.log(`copied ${pkg.name}@${version} -> public/wasm/${pkg.out}-${version}.wasm`);
}
