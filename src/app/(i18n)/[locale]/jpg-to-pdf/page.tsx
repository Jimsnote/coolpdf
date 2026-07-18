import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { pageMetadata } from '@/lib/seo';
import { SiteShell } from '@/components/layout/SiteShell';
import { JpgToPdfPage } from '@/components/pages/tools/JpgToPdfPage';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return pageMetadata(
    locale,
    '/jpg-to-pdf',
    dict.toolPages['jpg-to-pdf'].metaTitle,
    dict.toolPages['jpg-to-pdf'].metaDescription,
  );
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <SiteShell locale={locale} dict={dict}>
      <JpgToPdfPage locale={locale} dict={dict} />
    </SiteShell>
  );
}
