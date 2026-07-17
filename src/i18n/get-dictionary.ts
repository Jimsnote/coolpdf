import type { Locale } from './config';
import { en, type Dictionary } from './locales/en';
import { de } from './locales/de';
import { fr } from './locales/fr';
import { it } from './locales/it';
import { es } from './locales/es';
import { pt } from './locales/pt';
import { zh } from './locales/zh';

const dictionaries: Record<Locale, Dictionary> = { en, de, fr, it, es, pt, zh };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
