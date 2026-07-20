import type { Guide } from './types';

/**
 * Facts checked against components/tools/OrganizePdfTool.tsx and
 * lib/pdf/organize.ts: single PDF up to 100 MB (50 MB mobile), 30 initial
 * previews + 60 per "Load more previews" click, per-page rotate/delete with
 * restore, toolbar Select all / Delete selected / Rotate selected 90° /
 * Reset, output organized.pdf, noPages error when everything is deleted.
 */
export const howToOrganizePdfPages: Guide = {
  slug: 'how-to-organize-pdf-pages',
  toolSlug: 'organize-pdf',
  title: 'How to Rearrange, Delete, Rotate PDF Pages',
  description:
    'Rearrange PDF pages with drag and drop, rotate or delete pages, and download the result — all in your browser. Free, no uploads, no sign-up.',
  intro:
    'The fastest way to rearrange, delete, or rotate PDF pages is to do it right in your browser: open the free [CoolPDF Organize PDF tool](/organize-pdf/), drop in a file, then drag the page thumbnails into place, rotate the sideways ones, and delete what you do not need. Click "Download organized PDF" and save the result as organized.pdf. Everything runs locally on your device — the file is never uploaded, and there is no account, queue, or watermark.',
  quickSteps: [
    'Open the Organize PDF tool and drag one PDF (up to 100 MB) onto the upload area — or click it to browse.',
    'Drag the thumbnails into the order you want. The badge under each page always shows the original page number.',
    'Rotate a page 90° or mark it for deletion with the buttons on its thumbnail — the toolbar applies both to selected pages at once, and deletions are reversible.',
    'Click "Download organized PDF" and save the result as organized.pdf. Your original file is never modified.',
  ],
  sections: [
    {
      heading: 'Step-by-step: rearranging pages with CoolPDF',
      paragraphs: [
        'Open the [Organize PDF tool](/organize-pdf/) and drop in one PDF — or click the upload area to browse. The limit is 100 MB per file on desktop and 50 MB on mobile, and only PDF files are accepted. Pages appear as thumbnails in a grid; long documents render the first 30 previews immediately, with "Load more previews" fetching 60 more at a time.',
        'Reordering is literal: grab a thumbnail, drag it to its new position, and drop it. The badge under each page always shows the original page number, so you know where a page came from after you move it. There is no separate "apply" step — the grid order is the page order of the output.',
        'To handle several pages at once, click thumbnails to select them, then use the toolbar: Select all, Delete selected, Rotate selected 90°. A counter keeps the tally — "18 of 24 pages will be kept" — so you know what the output will contain.',
      ],
      bullets: [
        'One PDF at a time, up to 100 MB (50 MB on mobile)',
        'Drag-and-drop reordering with live page previews',
        'Rotate in 90° steps; deletion is reversible until you download',
        'Output is always saved as organized.pdf',
      ],
      image: {
        src: '/guides/how-to-organize-pdf-pages/step-1.png',
        alt: 'The CoolPDF Organize PDF grid showing eight page thumbnails with one being dragged to a new position, the selection toolbar above it, and the kept-pages counter on the right.',
      },
    },
    {
      heading: 'Rotating and deleting pages — and getting them back',
      paragraphs: [
        'Every thumbnail carries two buttons. "Rotate page 90°" turns the page a quarter-turn clockwise per click — twice for an upside-down scan, three times to turn the other way. The rotation is written into the output, so sideways scans stay fixed in every viewer.',
        '"Delete page" marks a page rather than removing it: the thumbnail fades to grayscale under a red "Deleted" badge, and the same spot offers "Restore page"; the Reset button undoes everything at once. And if you mark every single page, the tool refuses with "At least one page must remain in the document" instead of handing you an empty file.',
      ],
      image: {
        src: '/guides/how-to-organize-pdf-pages/step-2.png',
        alt: 'Close-up of two page thumbnails: one rotated 90 degrees, the other grayed out with a red "Deleted" badge and a restore button underneath.',
      },
    },
    {
      heading: 'Reordering confidential pages without uploading them',
      paragraphs: [
        'Organizing is usually the last step before a document leaves your hands: pulling the signed page to the front of a contract bundle, stripping blank scans out of a tax file, removing one salary page before forwarding an HR packet. These are exactly the files you least want on someone else\u2019s server.',
        'CoolPDF renders the previews and shuffles the pages entirely in your browser: the file is read from your own disk and the rebuilt PDF is saved straight back to it — no upload, no queue, no temporary copy. Load the page, disconnect from the internet, and it still works; close the tab and nothing of the document remains.',
      ],
    },
    {
      heading: 'When organizing is only half the job',
      paragraphs: [
        'If every page needs the same rotation fix, [Rotate PDF](/rotate-pdf/) turns the whole file in one pass. When you want to pull pages out rather than delete them — a chapter to share, an invoice to archive — [Split PDF](/split-pdf/) extracts a page range into its own document.',
        'A common order of operations is to [merge files first](/merge-pdf/), organize the combined pages here, then [add page numbers](/page-numbers/) so the sequence reads cleanly. Too heavy to email? Finish with [Compress PDF](/compress-pdf/).',
      ],
    },
  ],
  alternatives: [
    {
      heading: 'macOS Preview',
      paragraphs: [
        'On a Mac, Preview covers all three jobs: show View → Thumbnails, drag to reorder, select pages and press Delete, and use Tools → Rotate Left/Right. It is free and offline, but macOS-only, and edits the document in place — once you save, deletions are permanent. CoolPDF gives the same offline privacy in any browser, with a restore option that makes experimenting safe.',
      ],
    },
    {
      heading: 'Adobe Acrobat (paid)',
      paragraphs: [
        'Acrobat\u2019s Organize Pages view is the polished paid reference: drag thumbnails, rotate, delete, insert, and extract in one grid. It requires a subscription and a desktop install, and the web version uploads your file to Adobe\u2019s servers. If you already pay for Acrobat it is excellent — otherwise CoolPDF covers the same ground without the account or the upload.',
      ],
    },
    {
      heading: 'The print-a-page-range workaround',
      paragraphs: [
        'Any system with a PDF printer can "delete" pages by printing only the ranges you keep. It costs nothing, but printing re-renders the document — links, form fields, and bookmarks are flattened — and you can only omit pages, not reorder or rotate. For anything beyond a quick trim, a real organizer is cleaner and lossless.',
      ],
    },
  ],
  edgeCases: [
    {
      heading: 'The PDF is password-protected',
      paragraphs: [
        'A protected PDF cannot even be previewed without its password, so the tool stops at load with "This PDF is password-protected and cannot be processed here." If you know the password, save an unprotected copy with [Unlock PDF](/unlock-pdf/) first, then organize that copy.',
      ],
    },
    {
      heading: 'The file is too large',
      paragraphs: [
        'The 100 MB desktop limit (50 MB on mobile) exists because the whole file is held in your device\u2019s memory while you work. An oversized file is refused by name, with the limit shown. The usual fix is [Compress PDF](/compress-pdf/): shrink first, then organize the lighter copy.',
      ],
    },
    {
      heading: 'Very long documents',
      paragraphs: [
        'There is no page-count cap, but previews cost memory — so only the first 30 pages render on load and "Load more previews" adds 60 per click. If you mark every page for deletion, the tool stops you with "At least one page must remain in the document" rather than producing an empty PDF.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is organizing PDF pages with CoolPDF really free?',
      a: 'Yes — every tool is free forever, with no daily quotas, watermarks, or premium tiers. The processing runs on your own device, so there is no server bill to pass on to you.',
    },
    {
      q: 'What are the limits?',
      a: 'One PDF at a time, up to 100 MB per file on desktop (50 MB on mobile). There is no cap on the page count — previews simply render in batches to keep memory use in check.',
    },
    {
      q: 'Is it safe to reorganize confidential documents here?',
      a: 'Yes. Your file is processed locally in your browser and never uploaded to any server. You can even disconnect from the internet after the page loads and keep working; closing the tab removes every trace of it.',
    },
    {
      q: 'Do I need to sign up or install anything?',
      a: 'No. There is no account, no email address, and nothing to install. Open the tool page, drop in a PDF, and start dragging pages — it works in any modern browser, on desktop and mobile.',
    },
    {
      q: 'Does deleting or rotating pages reduce quality?',
      a: 'No. Pages are copied into the new document at the object level — no recompression, no re-rendering — and rotation just sets an orientation flag every viewer respects. One caveat: the document outline (bookmark sidebar) is not carried over, so keep the original if you rely on bookmarks.',
    },
  ],
  related: ['how-to-rotate-pdf', 'how-to-split-pdf', 'how-to-merge-pdf'],
};
