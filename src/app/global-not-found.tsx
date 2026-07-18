import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/site';
import { AnalyticsScript } from '@/components/layout/AnalyticsScript';
import { NotFoundContent } from '@/components/layout/NotFoundContent';
import './globals.css';

export const metadata: Metadata = {
  title: `Page not found | ${SITE_NAME}`,
  robots: { index: false, follow: false },
};

/**
 * App-wide 404 document for URLs matching no route at all. With multiple
 * route-group root layouts there is no single root layout a plain
 * not-found.tsx could render into, so the custom 404 lives here (enabled via
 * `experimental.globalNotFound`). Content stays English — an unmatched URL
 * carries no reliable locale.
 */
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <NotFoundContent />
        <AnalyticsScript />
      </body>
    </html>
  );
}
