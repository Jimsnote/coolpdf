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
    if (err.code === 'corrupted') return errors.corrupted;
    if (err.code === 'wrong-password') return errors.wrongPassword;
    if (err.code === 'not-encrypted') return errors.notEncrypted;
    return errors.generic;
  }
  return errors[classifyPdfError(err)];
}
