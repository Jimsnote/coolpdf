import type { Guide } from './types';

export const pdfToolsThatDontUpload: Guide = {
  slug: '5-pdf-tools-that-dont-upload-your-files',
  toolSlug: null,
  title: '5 PDF Tools That Don’t Upload Your Files (2026) | CoolPDF',
  description:
    'A fact-checked roundup of PDF tools that process files locally on your device — no uploads, no server copies. Features, limits, and prices compared for 2026.',
  intro:
    'Most online PDF tools work by uploading your documents to someone else’s server. If your PDFs contain contracts, financial records, or medical files, that is a real exposure. The tools below all do the work locally on your own device — in the browser or as desktop software — so your files never leave your hands. Here is how the five best options compare in 2026.',
  quickSteps: [
    'Best free unlimited option: CoolPDF — 17 tools, no task limits, no account, open source.',
    'Best for visual page editing: LocalPDF — studio-style editor, freemium with page caps.',
    'Best tool variety: ToolPDFs — 57 small tools, free tier capped at 20 operations/day.',
    'Best long-standing veteran: PDF24 Tools — broad free suite with a Windows desktop app.',
    'Best paid desktop app: Sejda Desktop — full toolset including inline text editing.',
  ],
  sections: [
    {
      heading: '1. CoolPDF — free, unlimited, and open source',
      paragraphs: [
        'Our own pick, and not just out of loyalty: [CoolPDF](/) is the only option here that is completely free with **no task limits at all**, no account, and no watermarks. Seventeen tools — merge, split, compress, protect, unlock, watermark, page numbers, organize/remove/extract/reorder pages, PDF↔JPG, PDF/Word/Excel to Markdown, and image extraction — all run as WebAssembly in your browser.',
        'The code is AGPL-3.0 open source, so the "files never leave your device" claim is auditable, and the site works offline after the first load. The interface is available in 7 languages, and every tool ships with a full tutorial with real screenshots. The catch: it is ad-supported (ads are how it stays free), and there is no PDF-to-Word or OCR.',
      ],
      bullets: [
        'Price: free, ad-supported — no premium tier',
        'Limits: none on tasks; file size bounded by device memory (~100 MB desktop)',
        'Best for: everyday PDF work with zero friction and zero uploads',
      ],
    },
    {
      heading: '2. LocalPDF — the studio-style editor',
      paragraphs: [
        'LocalPDF takes a different shape: instead of one page per tool, you get a single workspace where you open PDFs side by side and drag pages between them, "like paper on a desk". It is genuinely pleasant for visual page surgery, and it also does local OCR in the browser — a rare trick.',
        'The free tier caps you at 3 workspaces and 25 pages per document; Pro is $3.99/month. It is a strong choice if your work is mostly rearranging and annotating pages rather than high-volume conversions.',
      ],
      bullets: [
        'Price: free tier + Pro $3.99/month',
        'Limits: 25 pages per document and 3 workspaces on the free tier',
        'Best for: visual page editing and local OCR',
      ],
    },
    {
      heading: '3. ToolPDFs — the Swiss-army workspace',
      paragraphs: [
        'ToolPDFs packs 57 tools into one tab: PDF basics plus image converters, text utilities, and developer helpers (JSON formatters, hash tools, and the like). Everything runs client-side, and the site is refreshingly honest about its limits.',
        'The free tier allows 20 operations per day with a 25 MB file cap; Pro starts at $3.99/month, with a limited founding lifetime deal. If you want many small utilities in one place, it is a good fit — the PDF toolset itself is solid but not the deepest.',
      ],
      bullets: [
        'Price: free tier + Pro from $3.99/month',
        'Limits: 20 operations/day and 25 MB files on the free tier',
        'Best for: one tab for PDF plus text/image/dev utilities',
      ],
    },
    {
      heading: '4. PDF24 Tools — the veteran free suite',
      paragraphs: [
        'PDF24, from the German company Geek Software, has offered free PDF tools for well over a decade: a large online suite plus PDF24 Creator, a Windows desktop app that processes files locally. The web tools are free with ads; the desktop app is free too.',
        'The desktop app is the privacy-relevant part: it covers merging, splitting, compressing, OCR, and more, entirely offline — but it is Windows-only, and the interface feels its age. The online suite, by contrast, does upload files.',
      ],
      bullets: [
        'Price: free (ad-supported web suite; free Windows desktop app)',
        'Limits: desktop app is Windows-only',
        'Best for: a no-cost, offline-capable suite on Windows',
      ],
    },
    {
      heading: '5. Sejda Desktop — the paid heavyweight',
      paragraphs: [
        'Sejda’s web tools upload files, but Sejda Desktop is a fully local application: the same broad toolset — including inline PDF text editing, forms, and Bates numbering — running on your own machine.',
        'It is the most complete local toolkit here, at around $63/year per user. Worth it if you need to edit existing PDF text or handle legal-style documents regularly; overkill if you just merge and compress.',
      ],
      bullets: [
        'Price: from around $63/year',
        'Limits: paid; web version (uploads) is a separate free tier with hourly caps',
        'Best for: heavy-duty local work including real text editing',
      ],
    },
    {
      heading: 'How to verify a "no upload" claim yourself',
      paragraphs: [
        'Do not take any site’s word for it — including ours. Open your browser’s DevTools (F12) → Network tab, then process a file. If the tool is truly local, you will see zero file uploads: only static assets and maybe analytics. A second test: load the page, disconnect from the internet, and try the tool again. If it still works, your file never went anywhere.',
      ],
    },
  ],
  alternatives: [
    {
      heading: 'When an upload-based tool is actually fine',
      paragraphs: [
        'For non-sensitive documents, upload-based giants like iLovePDF are convenient and offer things local tools often lack — PDF to Word, server-side OCR, API automation. The rule of thumb: if the file would not hurt you in public, use whatever is easiest; if it would, use one of the local options above.',
      ],
    },
  ],
  edgeCases: [
    {
      heading: 'A note on "deleted after 2 hours" promises',
      paragraphs: [
        'Many upload-based tools promise to delete your files quickly. That is better than indefinite retention, but the file still crosses the wire, sits on infrastructure you do not control, and is subject to policies you have not read. Local processing removes the question entirely.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Are browser-based tools really as safe as desktop apps?',
      a: 'When they are genuinely client-side, yes — the processing happens in your browser’s sandbox on your device, exactly like a desktop app. The key difference is delivery: browser tools need no install and work on any OS, while desktop apps are better for very large files that exceed browser memory.',
    },
    {
      q: 'Why is CoolPDF free with no limits while others cap usage?',
      a: 'Server-based tools pay for every file they process, so they cap free tiers to control costs. CoolPDF’s processing happens on your device — our marginal cost per task is zero, so there is nothing to cap. The site is funded by unobtrusive ads.',
    },
    {
      q: 'Which of these works offline?',
      a: 'CoolPDF, LocalPDF, and ToolPDFs work offline after the page loads (processing is local). PDF24 Creator and Sejda Desktop are offline by design as installed apps. The web suites of PDF24 and Sejda require a connection because they upload files.',
    },
  ],
  related: ['how-to-merge-pdf', 'how-to-compress-pdf', 'how-to-password-protect-pdf'],
};
