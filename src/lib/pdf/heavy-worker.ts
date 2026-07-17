import { PdfToolError } from './errors';
import type { HeavyEvent, HeavyProgress, HeavyRequest, HeavyTask } from './heavy-protocol';

export type { HeavyProgress } from './heavy-protocol';

/**
 * Runs a heavy WASM task (compress / encrypt / decrypt) in a dedicated Web
 * Worker so the main thread stays responsive. The input bytes are transferred
 * (copied first, so the caller's buffer is never neutered) and the result is
 * transferred back. The worker is terminated as soon as the task settles.
 */
export function runHeavyTask(
  task: HeavyTask,
  pdf: Uint8Array,
  onProgress?: (progress: HeavyProgress) => void,
): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    const worker = new Worker(new URL('../../workers/pdf-heavy.worker.ts', import.meta.url), {
      type: 'module',
    });
    const settle = () => worker.terminate();

    worker.onmessage = (event: MessageEvent<HeavyEvent>) => {
      const message = event.data;
      if (message.type === 'progress') {
        const { stage } = message;
        if (stage === 'download') {
          onProgress?.({ stage, loaded: message.loaded, total: message.total });
        } else {
          onProgress?.({ stage, current: message.current, total: message.total });
        }
        return;
      }
      settle();
      if (message.type === 'done') {
        resolve(new Uint8Array(message.pdf));
      } else {
        reject(new PdfToolError(message.code, message.message));
      }
    };
    worker.onerror = () => {
      settle();
      reject(new PdfToolError('generic'));
    };

    const pdfBuffer = pdf.slice().buffer;
    const request: HeavyRequest = { task, pdf: pdfBuffer };
    worker.postMessage(request, [pdfBuffer]);
  });
}
