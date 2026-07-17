import type { MetadataRoute } from 'next';
import { defaultLocale, locales } from '@/i18n/config';
import { localizedUrl } from '@/lib/seo';

export const dynamic = 'force-static';

const paths = ['', '/about', '/privacy', '/terms', '/faq'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    const languages: Record<string, string> = {};
    for (const l of locales) {
      languages[l] = localizedUrl(l, path);
    }
    languages['x-default'] = localizedUrl(defaultLocale, path);

    for (const locale of locales) {
      entries.push({
        url: localizedUrl(locale, path),
        lastModified: new Date(),
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1 : 0.8,
        alternates: { languages },
      });
    }
  }

  return entries;
}
