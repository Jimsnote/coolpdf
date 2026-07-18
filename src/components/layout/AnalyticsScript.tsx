import Script from 'next/script';
import { CF_ANALYTICS_TOKEN } from '@/lib/site';

/**
 * Cloudflare Web Analytics beacon, shared by both root layouts. Renders
 * nothing unless NEXT_PUBLIC_CF_ANALYTICS_TOKEN is set.
 */
export function AnalyticsScript() {
  if (!CF_ANALYTICS_TOKEN) return null;
  return (
    <Script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token: CF_ANALYTICS_TOKEN })}
      strategy="afterInteractive"
    />
  );
}
