/**
 * Lazy loader for @cantoo/pdf-lib (~584 KB raw). The tool modules used to
 * import it statically, which pulled the whole library into the first-load
 * bundle of every tool page. Loading it on first use keeps the initial
 * download lean; the module-level promise dedupes repeated calls and the
 * browser fetches the chunk only once.
 */
export type PdfLib = typeof import('@cantoo/pdf-lib');

let pending: Promise<PdfLib> | null = null;

export function getPdfLib(): Promise<PdfLib> {
  if (!pending) {
    pending = import('@cantoo/pdf-lib');
  }
  return pending;
}
