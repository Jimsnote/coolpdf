export const locales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'zh'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

/** Locales that live under a path prefix (everything except the default). */
export const prefixedLocales = locales.filter((l) => l !== defaultLocale) as Exclude<
  Locale,
  typeof defaultLocale
>[];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Human-readable native names, used by the language switcher. */
export const localeLabels: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
  es: 'Español',
  pt: 'Português',
  zh: '中文',
};

/** Open Graph locale values (og:locale). */
export const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  de: 'de_DE',
  fr: 'fr_FR',
  it: 'it_IT',
  es: 'es_ES',
  pt: 'pt_PT',
  zh: 'zh_CN',
};
