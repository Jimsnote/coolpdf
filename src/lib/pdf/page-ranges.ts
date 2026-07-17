import { PdfToolError } from './errors';

export type RangeErrorCode = 'invalidRange' | 'rangeOutOfBounds';

const SEGMENT_RE = /^(\d+)(?:-(\d+))?$/;

/**
 * Parses a page-range expression like `1-3, 5` into segments of 0-based page
 * indices, one segment per comma-separated part. Pages are deduplicated
 * within each segment and checked against the document's page count.
 *
 * Throws `PdfToolError` with code 'invalidRange' (bad syntax, reversed or
 * empty range) or 'rangeOutOfBounds' (page beyond the document length).
 */
export function parseRangeSegments(input: string, pageCount: number): number[][] {
  const segments: number[][] = [];
  const parts = input.split(',');
  for (const rawPart of parts) {
    const part = rawPart.trim();
    const match = SEGMENT_RE.exec(part);
    if (!match) {
      throw new PdfToolError('invalidRange', `Invalid page range: "${part}"`);
    }
    const start = Number(match[1]);
    const end = match[2] !== undefined ? Number(match[2]) : start;
    if (start < 1 || end < start) {
      throw new PdfToolError('invalidRange', `Invalid page range: "${part}"`);
    }
    if (end > pageCount) {
      throw new PdfToolError(
        'rangeOutOfBounds',
        `Page range "${part}" exceeds the document length (${pageCount} pages)`,
      );
    }
    const segment: number[] = [];
    for (let page = start; page <= end; page += 1) {
      segment.push(page - 1);
    }
    segments.push(segment);
  }
  if (segments.length === 0) {
    throw new PdfToolError('invalidRange', 'Empty page range');
  }
  return segments;
}

/**
 * Parses a page-range expression into a flat, deduplicated, ascending list
 * of 0-based page indices (used e.g. by rotate).
 */
export function parsePageRanges(input: string, pageCount: number): number[] {
  const segments = parseRangeSegments(input, pageCount);
  const indices = new Set<number>();
  for (const segment of segments) {
    for (const index of segment) indices.add(index);
  }
  return [...indices].sort((a, b) => a - b);
}
