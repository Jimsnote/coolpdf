import type { MetadataRoute } from 'next';
import { defaultLocale, locales } from '@/i18n/config';
import { localizedUrl } from '@/lib/seo';
import { tools } from '@/lib/tools';

export const dynamic = 'force-static';

const staticPaths = ['', '/about', '/privacy', '/terms', '/faq'];

/** Live tool pages, derived from the central registry. */
const toolPaths = tools
  .filter((tool) => tool.status === 'live')
  .map((tool) => `/${tool.slug}`);

const paths = [...staticPaths, ...toolPaths];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    const languages: Record<string, string> = {};
    for (const l of locales) {
      languages[l] = localizedUrl(l, path);
    }
    languages['x-default'] = localizedUrl(defaultLocale, path);

    const isTool = toolPaths.includes(path);

    for (const locale of locales) {
      entries.push({
        url: localizedUrl(locale, path),
        lastModified: new Date(),
        changeFrequency: path === '' || isTool ? 'weekly' : 'monthly',
        priority: path === '' ? 1 : isTool ? 0.9 : 0.8,
        alternates: { languages },
      });
    }
  }

  return entries;
}
