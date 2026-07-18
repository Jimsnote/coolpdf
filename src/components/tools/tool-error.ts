import type { Dictionary } from '@/i18n/locales/en';
import { classifyPdfError, PdfToolError } from '@/lib/pdf/errors';

/**
 * Maps any error thrown during processing to a localized, user-facing
 * message from `dict.toolUi.errors`.
 */
export function toolErrorMessage(err: unknown, dict: Dictionary): string {
  const { errors } = dict.toolUi;
  if (err instanceof PdfToolError) {
    if (err.code === 'invalidRange') return errors.invalidRange;
    if (err.code === 'rangeOutOfBounds') return errors.rangeOutOfBounds;
    if (err.code === 'noPages') return errors.noPages;
    if (err.code === 'encrypted') return errors.encrypted;
    if (err.code === 'corrupted') return errors.corrupted;
    if (err.code === 'wrong-password') return errors.wrongPassword;
    if (err.code === 'not-encrypted') return errors.notEncrypted;
    if (err.code === 'no-text') return errors.noText;
    // The limit is carried in the error message by the throwing lib.
    if (err.code === 'tooManyPages') return errors.tooManyPages.replace('{max}', err.message);
    return errors.generic;
  }
  return errors[classifyPdfError(err)];
}
