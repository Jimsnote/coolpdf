import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { pageMetadata } from '@/lib/seo';
import { SiteShell } from '@/components/layout/SiteShell';
import { ExtractPagesPage } from '@/components/pages/tools/ExtractPagesPage';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return pageMetadata(
    locale,
    '/extract-pages',
    dict.toolPages['extract-pages'].metaTitle,
    dict.toolPages['extract-pages'].metaDescription,
  );
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <SiteShell locale={locale} dict={dict}>
      <ExtractPagesPage locale={locale} dict={dict} />
    </SiteShell>
  );
}
