# CoolPDF

**Free PDF tools that respect your privacy.** CoolPDF is a privacy-first, 100% client-side PDF toolkit for the web — think ilovepdf.com, except your files never leave your device. All PDF processing runs in the browser (WebAssembly / Web Workers); there is no backend at all.

Live site: <https://getcoolpdf.com>

## The three pillars

- **No Uploads** — your files never leave your device. Every tool runs locally in your browser.
- **No Sign-Up** — no account, no email address, no personal information. Ever.
- **Free Forever** — every tool is free with no usage limits, funded by unobtrusive ads.

Don't take our word for it: disconnect from the internet after a page loads and the tools still work; watch the Network tab in DevTools and see zero file uploads; audit the source code — it's open source (AGPL-3.0).

## Tools

All twelve tools run 100% locally in your browser — no uploads, no sign-up, free forever:

- **Merge PDF** — combine multiple PDFs into a single file, in the order you want
- **Split PDF** — extract a page range or split one PDF into separate documents
- **Compress PDF** — shrink the file size while keeping the quality you need
- **Rotate PDF** — rotate single pages or an entire document in seconds
- **Organize PDF** — reorder, delete, and rearrange pages with drag and drop
- **PDF to JPG** — turn each PDF page into a high-quality JPG image
- **JPG to PDF** — convert JPG images into a clean, shareable PDF document
- **Protect PDF** — add AES-256 password encryption to keep your PDF private
- **Unlock PDF** — remove password protection from PDFs you own
- **Watermark PDF** — stamp a text or image watermark over every page, tiled or centered
- **Page Numbers** — add page numbers to your PDF, exactly where you want them
- **PDF to Markdown** — extract clean, structured Markdown from any PDF

## Tech stack

- **Next.js 15** (App Router, `output: 'export'` static export to `out/`) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS 3.4** — no UI framework, system font stack
- **lucide-react** icons
- Hand-rolled lightweight i18n (no next-intl): 7 locales — `en` (default, at the root), `de`, `fr`, `it`, `es`, `pt`, `zh` (path-prefixed)
- Zero backend: no API routes, no server code, nothing to deploy but static files

## Local development

```bash
npm install        # install dependencies
npm run dev        # dev server on http://localhost:3000
npm run build      # static export to out/
npm run lint       # ESLint (next/core-web-vitals)
npm run type-check # tsc --noEmit
```

## Deployment (Cloudflare Pages)

- **Build command:** `npm run build`
- **Build output directory:** `out`
- No environment variables are required. Optional ones (see `.env.example`):
  - `NEXT_PUBLIC_SITE_URL` — canonical URL used for metadata/hreflang/sitemap (default `https://getcoolpdf.com`)
  - `NEXT_PUBLIC_GITHUB_URL` — GitHub link target (default `https://github.com/Jimsnote/coolpdf`)
  - `NEXT_PUBLIC_CF_ANALYTICS_TOKEN` — enables the cookieless Cloudflare Web Analytics beacon
  - `NEXT_PUBLIC_ADSENSE_CLIENT` — enables the AdSense ad component

## Project structure

```
src/
├── app/                    # routes: English pages at the root, other locales under [locale]/
│   ├── page.tsx            # Home (en) — thin wrapper around components/pages/*
│   ├── about|privacy|terms|faq/page.tsx
│   ├── [locale]/           # mirrored routes for de/fr/it/es/pt/zh (generateStaticParams)
│   ├── sitemap.ts          # all pages × 7 locales with hreflang alternates
│   └── robots.ts           # allow all + explicit AI-crawler rules
├── components/
│   ├── layout/             # Header (with language switcher), Footer, SiteShell
│   ├── pages/              # HomePage, AboutPage, PrivacyPage, TermsPage, FaqPage (shared by all locales)
│   ├── seo/                # JsonLd, FactSummary (canonical GEO summary)
│   └── ads/                # AdBanner (AdSense placeholder, off unless configured)
├── i18n/
│   ├── config.ts           # locales, defaultLocale, isLocale()
│   ├── get-dictionary.ts
│   └── locales/            # en.ts defines the Dictionary type; the other 6 mirror it
└── lib/
    ├── site.ts             # SITE_URL, GITHUB_URL, tokens (env-overridable)
    ├── seo.ts              # buildAlternates() (canonical + hreflang), pageMetadata()
    └── tools.ts            # tool registry (12 tools, status flags)
public/
├── llms.txt                # site summary for LLM crawlers
└── logo.svg
```

## Contributing

Issues and pull requests are welcome on GitHub: <https://github.com/Jimsnote/coolpdf>

## License

CoolPDF is free software licensed under the **GNU Affero General Public License v3.0** (AGPL-3.0). See [LICENSE](./LICENSE).
