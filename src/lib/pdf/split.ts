import { PDFDocument } from '@cantoo/pdf-lib';

/** A single output file produced by splitting. */
export interface SplitOutput {
  name: string;
  bytes: Uint8Array;
}

/** Loads a document once so the UI can validate ranges against its length. */
export async function getPdfPageCount(bytes: Uint8Array): Promise<number> {
  const doc = await PDFDocument.load(bytes);
  return doc.getPageCount();
}

async function extractSegment(
  source: PDFDocument,
  indices: number[],
  name: string,
): Promise<SplitOutput> {
  const doc = await PDFDocument.create();
  const pages = await doc.copyPages(source, indices);
  for (const page of pages) {
    doc.addPage(page);
  }
  return { name, bytes: await doc.save() };
}

/** Extract all pages: every page becomes its own one-page PDF. */
export async function splitAllPages(bytes: Uint8Array): Promise<SplitOutput[]> {
  const source = await PDFDocument.load(bytes);
  const outputs: SplitOutput[] = [];
  for (let i = 0; i < source.getPageCount(); i += 1) {
    outputs.push(await extractSegment(source, [i], `page-${i + 1}.pdf`));
  }
  return outputs;
}

/**
 * Split by ranges: each segment (0-based, deduplicated page indices, e.g.
 * from `parseRangeSegments`) becomes its own PDF.
 */
export async function splitByRanges(
  bytes: Uint8Array,
  segments: number[][],
): Promise<SplitOutput[]> {
  const source = await PDFDocument.load(bytes);
  const outputs: SplitOutput[] = [];
  for (const segment of segments) {
    const first = segment[0] + 1;
    const last = segment[segment.length - 1] + 1;
    const name = first === last ? `page-${first}.pdf` : `pages-${first}-${last}.pdf`;
    outputs.push(await extractSegment(source, segment, name));
  }
  return outputs;
}

/** Split every N pages: consecutive chunks of `n` pages each become a PDF. */
export async function splitEveryNPages(bytes: Uint8Array, n: number): Promise<SplitOutput[]> {
  const source = await PDFDocument.load(bytes);
  const pageCount = source.getPageCount();
  const outputs: SplitOutput[] = [];
  for (let start = 0; start < pageCount; start += n) {
    const end = Math.min(start + n, pageCount);
    const indices: number[] = [];
    for (let i = start; i < end; i += 1) indices.push(i);
    outputs.push(await extractSegment(source, indices, `pages-${start + 1}-${end}.pdf`));
  }
  return outputs;
}
