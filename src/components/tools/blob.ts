/**
 * Wraps generated PDF bytes in a downloadable Blob. `bytes.slice()` copies
 * the data into a fresh, exactly-sized ArrayBuffer, which keeps the Blob
 * constructor's typing (and any underlying buffer pooling) happy.
 */
export function pdfBlob(bytes: Uint8Array): Blob {
  return new Blob([bytes.slice().buffer as ArrayBuffer], { type: 'application/pdf' });
}
