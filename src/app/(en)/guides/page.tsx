import type { Metadata } from 'next';
import { ogLocales } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { OG_IMAGE_URL } from '@/lib/seo';
import { SITE_NAME, SITE_URL } from '@/lib/site';
import { SiteShell } from '@/components/layout/SiteShell';
import { GuidesIndexPage } from '@/components/pages/guides/GuidesIndexPage';

const locale = 'en' as const;

const title = `PDF Guides & Tutorials | ${SITE_NAME}`;
const description =
  'Step-by-step PDF tutorials: how to merge, split, compress, protect and more — free, in your browser, with no uploads and no sign-up.';
// Guides are English-only: the canonical is self-referencing and there is no
// hreflang cluster (unlike the localized tool pages).
const canonical = `${SITE_URL}/guides/`;

export function generateMetadata(): Metadata {
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: ogLocales[locale],
      type: 'website',
      images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE_URL],
    },
  };
}

export default function Page() {
  const dict = getDictionary(locale);
  return (
    <SiteShell locale={locale} dict={dict}>
      <GuidesIndexPage />
    </SiteShell>
  );
}
