import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/site';
import { AnalyticsScript } from '@/components/layout/AnalyticsScript';
import '../globals.css';

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
 * Root layout of the (en) route group: every unprefixed, English page.
 */
export default function EnRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <AnalyticsScript />
      </body>
    </html>
  );
}
