'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Globe } from 'lucide-react';
import {
  localeLabels,
  locales,
  prefixedLocales,
  type Locale,
} from '@/i18n/config';
import { localizedPath } from '@/lib/seo';

/**
 * Derives the locale-independent logical path ('' for home, '/about', ...)
 * from the current pathname by stripping any locale prefix.
 */
function logicalPathFromPathname(pathname: string): string {
  let p = pathname.replace(/\/+$/, '') || '/';
  for (const l of prefixedLocales) {
    if (p === `/${l}`) {
      p = '/';
      break;
    }
    if (p.startsWith(`/${l}/`)) {
      p = p.slice(l.length + 1);
      break;
    }
  }
  return p === '/' ? '' : p;
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);

  // Close the dropdown after navigation.
  useEffect(() => {
    detailsRef.current?.removeAttribute('open');
  }, [pathname]);

  const logicalPath = logicalPathFromPathname(pathname);

  return (
    <details ref={detailsRef} className="group relative">
      <summary
        className="flex cursor-pointer list-none items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 [&::-webkit-details-marker]:hidden"
        aria-label="Language"
      >
        <Globe className="h-4 w-4" aria-hidden />
        <span>{localeLabels[locale]}</span>
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-open:rotate-180" aria-hidden />
      </summary>
      <ul className="absolute right-0 z-50 mt-1 w-40 rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
        {locales.map((l) => (
          <li key={l}>
            <Link
              href={localizedPath(l, logicalPath)}
              hrefLang={l}
              className={`block px-4 py-2 text-sm hover:bg-slate-100 ${
                l === locale ? 'font-semibold text-brand-700' : 'text-slate-700'
              }`}
              aria-current={l === locale ? 'true' : undefined}
            >
              {localeLabels[l]}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
