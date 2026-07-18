// Copies the Emscripten .wasm binaries of the jspawn packages into
// public/wasm/ with versioned file names, so the pdf-heavy worker can fetch
// them over HTTP from any (locale-prefixed) page. Runs on postinstall and
// prebuild. Also writes public/wasm/manifest.json mapping each engine to its
// versioned file name — the worker resolves file names through the manifest
// at runtime, so nothing needs to stay in sync by hand.
import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);

const packages = [
  { name: '@jspawn/ghostscript-wasm', wasm: 'gs.wasm', out: 'gs', key: 'ghostscript' },
  { name: '@jspawn/qpdf-wasm', wasm: 'qpdf.wasm', out: 'qpdf', key: 'qpdf' },
];

const outDir = join(root, 'public', 'wasm');
mkdirSync(outDir, { recursive: true });

const manifest = {};
for (const pkg of packages) {
  const pkgJsonPath = require.resolve(`${pkg.name}/package.json`);
  const { version } = require(pkgJsonPath);
  const src = join(dirname(pkgJsonPath), pkg.wasm);
  const fileName = `${pkg.out}-${version}.wasm`;
  const dest = join(outDir, fileName);
  copyFileSync(src, dest);
  manifest[pkg.key] = fileName;
  console.log(`copied ${pkg.name}@${version} -> public/wasm/${fileName}`);
}

writeFileSync(join(outDir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log('wrote public/wasm/manifest.json');
