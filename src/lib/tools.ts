import {
  FileImage,
  FileText,
  Hash,
  Lock,
  LockOpen,
  Merge,
  Minimize2,
  RotateCw,
  Scissors,
  Stamp,
  LayoutGrid,
  Image,
  type LucideIcon,
} from 'lucide-react';
import { en, type Dictionary } from '@/i18n/locales/en';

export type ToolStatus = 'live' | 'coming-soon';

export interface Tool {
  slug: string;
  icon: LucideIcon;
  i18nKey: keyof Dictionary['tools'];
  status: ToolStatus;
}

/**
 * Central tool registry. Cards on the home page render from this list;
 * flipping a status to 'live' makes the card clickable once the tool route
 * exists.
 */
export const tools: Tool[] = [
  { slug: 'merge-pdf', icon: Merge, i18nKey: 'merge-pdf', status: 'coming-soon' },
  { slug: 'split-pdf', icon: Scissors, i18nKey: 'split-pdf', status: 'coming-soon' },
  { slug: 'compress-pdf', icon: Minimize2, i18nKey: 'compress-pdf', status: 'coming-soon' },
  { slug: 'rotate-pdf', icon: RotateCw, i18nKey: 'rotate-pdf', status: 'coming-soon' },
  { slug: 'organize-pdf', icon: LayoutGrid, i18nKey: 'organize-pdf', status: 'coming-soon' },
  { slug: 'pdf-to-jpg', icon: Image, i18nKey: 'pdf-to-jpg', status: 'coming-soon' },
  { slug: 'jpg-to-pdf', icon: FileImage, i18nKey: 'jpg-to-pdf', status: 'coming-soon' },
  { slug: 'protect-pdf', icon: Lock, i18nKey: 'protect-pdf', status: 'coming-soon' },
  { slug: 'unlock-pdf', icon: LockOpen, i18nKey: 'unlock-pdf', status: 'coming-soon' },
  { slug: 'watermark-pdf', icon: Stamp, i18nKey: 'watermark-pdf', status: 'coming-soon' },
  { slug: 'page-numbers', icon: Hash, i18nKey: 'page-numbers', status: 'coming-soon' },
  { slug: 'pdf-to-markdown', icon: FileText, i18nKey: 'pdf-to-markdown', status: 'coming-soon' },
];

/** English tool names, used for JSON-LD featureList regardless of locale. */
export const toolNamesEn = tools.map((t) => en.tools[t.i18nKey].name);
