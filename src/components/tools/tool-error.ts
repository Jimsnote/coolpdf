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
    return errors.generic;
  }
  return errors[classifyPdfError(err)];
}
