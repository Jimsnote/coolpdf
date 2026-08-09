import Script from 'next/script';
import { CF_ANALYTICS_TOKEN, CLARITY_ID } from '@/lib/site';

/**
 * Analytics beacons, shared by both root layouts.
 * - Cloudflare Web Analytics: cookieless aggregate stats; renders only when
 *   NEXT_PUBLIC_CF_ANALYTICS_TOKEN is set.
 * - Microsoft Clarity: session statistics/heatmaps; active by default via the
 *   built-in project id (NEXT_PUBLIC_CLARITY_ID overrides, empty disables).
 * Neither beacon can see the files users process — file bytes never touch the
 * network by design (CSP: connect-src), so analytics only ever sees page UI.
 */
export function AnalyticsScript() {
  return (
    <>
      {CF_ANALYTICS_TOKEN ? (
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={JSON.stringify({ token: CF_ANALYTICS_TOKEN })}
          strategy="afterInteractive"
        />
      ) : null}
      {CLARITY_ID ? (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window, document, "clarity", "script", "${CLARITY_ID}");`}
        </Script>
      ) : null}
    </>
  );
}
