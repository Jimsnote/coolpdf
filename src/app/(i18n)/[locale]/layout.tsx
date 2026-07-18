import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { isLocale, prefixedLocales } from '@/i18n/config';
import { SITE_NAME } from '@/lib/site';
import { AnalyticsScript } from '@/components/layout/AnalyticsScript';
import '../../globals.css';

export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://getcoolpdf.com',
  ),
  title: {
    default: `Free PDF Tools That Respect Your Privacy | ${SITE_NAME}`,
    template: `%s`,
  },
  description: 'Free PDF tools that respect your privacy',
};

/**
 * Root layout of the (i18n) route group: every locale-prefixed page. This is
 * where the localized <html lang> attribute is set.
 */
export default async function LocaleRootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale}>
      <body>
        {children}
        <AnalyticsScript />
      </body>
    </html>
  );
}
