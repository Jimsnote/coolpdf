import { ADSENSE_CLIENT } from '@/lib/site';

interface AdBannerProps {
  /** AdSense slot id, required once ads go live. */
  slot?: string;
  className?: string;
}

/**
 * Google AdSense placeholder. Renders nothing unless NEXT_PUBLIC_ADSENSE_CLIENT
 * is configured. Not placed on any page in M1 — import it where an ad unit
 * should appear once advertising is enabled.
 */
export function AdBanner({ slot, className }: AdBannerProps) {
  if (!ADSENSE_CLIENT) return null;

  return (
    <div className={className} aria-hidden={false}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
