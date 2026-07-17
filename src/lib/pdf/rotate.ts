import { degrees, PDFDocument } from '@cantoo/pdf-lib';

export type RotationAngle = 90 | 180 | 270;

/**
 * Rotates pages clockwise by the given angle, added on top of each page's
 * existing rotation. When `pageIndices` is omitted, every page is rotated;
 * otherwise only the given 0-based indices are.
 */
export async function rotatePdf(
  bytes: Uint8Array,
  angle: RotationAngle,
  pageIndices?: number[],
): Promise<Uint8Array> {
  const doc = await PDFDocument.load(bytes);
  const pages = doc.getPages();
  const targets = pageIndices ?? pages.map((_, i) => i);
  for (const index of targets) {
    const page = pages[index];
    if (!page) continue;
    const current = page.getRotation().angle;
    page.setRotation(degrees((current + angle) % 360));
  }
  return doc.save();
}
