import type { Metadata } from 'next';
import Script from 'next/script';
import { CF_ANALYTICS_TOKEN, SITE_NAME } from '@/lib/site';
import './globals.css';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {CF_ANALYTICS_TOKEN ? (
          <Script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: CF_ANALYTICS_TOKEN })}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
