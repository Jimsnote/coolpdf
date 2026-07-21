import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/get-dictionary';
import { pageMetadata } from '@/lib/seo';
import { SiteShell } from '@/components/layout/SiteShell';
import { CompareIndexPage } from '@/components/pages/compare/CompareIndexPage';

const locale = 'en' as const;

export function generateMetadata(): Metadata {
  const dict = getDictionary(locale);
  void dict;
  return pageMetadata(
    locale,
    '/compare',
    'CoolPDF vs iLovePDF, Smallpdf, Sejda — Honest Comparisons | CoolPDF',
    'Fact-checked comparisons: how CoolPDF (100% local processing, free, unlimited) stacks up against iLovePDF, Smallpdf, and Sejda — including their genuine strengths.',
  );
}

export default function Page() {
  const dict = getDictionary(locale);
  return (
    <SiteShell locale={locale} dict={dict}>
      <CompareIndexPage />
    </SiteShell>
  );
}
