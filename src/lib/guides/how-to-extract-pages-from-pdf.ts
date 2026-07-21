import type { Guide } from './types';

export const howToExtractPagesFromPdf: Guide = {
  slug: 'how-to-extract-pages-from-pdf',
  toolSlug: 'extract-pages',
  title: 'How to Extract Pages from a PDF — Free, No Upload',
  description:
    'Save selected pages of a PDF as a new document — click the pages you want, extract them in your browser. Free, no uploads, no sign-up, files never leave your device.',
  intro:
    'The simplest way to extract pages from a PDF is to pick them visually in your browser: open the free [CoolPDF Extract Pages tool](/extract-pages/), drop in your file, click the thumbnails of the pages you want — a chapter, a signature page, one invoice out of many — and download just those pages as extracted.pdf. Everything runs locally; the document never leaves your device.',
  quickSteps: [
    'Open the Extract Pages tool and drop in your PDF — every page appears as a live thumbnail.',
    'Click the pages you want to extract; selected pages get a highlighted border and checkmark.',
    'Confirm the selected count in the toolbar counter.',
    'Click "Extract selected pages" to save just those pages as extracted.pdf.',
  ],
  sections: [
    {
      heading: 'Step-by-step: extracting PDF pages with CoolPDF',
      paragraphs: [
        'Open the [Extract Pages tool](/extract-pages/) and add your PDF. Every page renders as a thumbnail, so picking "page 47 of 60" is a visual task, not a counting exercise.',
        'Click each page you want — any combination, in any order. Selected pages show a highlighted border and a checkmark; click again to deselect. The counter keeps track of how many pages you have picked.',
        'Click "Extract selected pages". The picked pages are assembled into a new document locally and saved as extracted.pdf — in their original document order, with text and images untouched.',
      ],
      bullets: [
        'Files up to 100 MB (50 MB on mobile), no page limit',
        'Pick any combination of pages, in any order',
        'Output keeps the original page order and full quality',
        'Saved as extracted.pdf',
      ],
    },
    {
      heading: 'Share only the pages you mean to — privately',
      paragraphs: [
        'Extraction is how you send one chapter of a report, one page of a contract, or a single receipt out of a book-length scan — without exposing everything else. With an upload-based tool, the whole document lands on someone else’s server first, even the parts you never meant to share.',
        'CoolPDF does the selection and the rebuild entirely in your browser: the source file is read from your own disk and the new PDF is written back to it. No account, no server copy, no traces after you close the tab.',
      ],
    },
    {
      heading: 'Extract vs remove vs split: pick the right tool',
      paragraphs: [
        'Use **Extract** when you want a few pages out of many. Use [Remove Pages](/remove-pages/) when you want to delete a few pages and keep the rest. And use [Split PDF](/split-pdf/) when you want to break a document into ranges or fixed-size chunks in one go (e.g. every 10 pages).',
        'Need the pages rearranged before exporting? Drag the thumbnails into a new order right in the same grid, or use [Reorder Pages](/reorder-pages/) for a dedicated view.',
      ],
    },
  ],
  alternatives: [
    {
      heading: 'macOS Preview',
      paragraphs: [
        'On a Mac, open the PDF in Preview, show thumbnails, select the pages you want, then copy them into a new document via File → New from Clipboard (or drag them to the desktop). Free and offline, but macOS-only, and awkward for documents with many pages. CoolPDF gives the same local privacy in any browser.',
      ],
    },
    {
      heading: 'Print to PDF (page range)',
      paragraphs: [
        'Printing only a page range into a new PDF is a common workaround, but printing re-renders everything — links, form fields, and bookmarks are flattened, and quality can suffer. Extraction with CoolPDF copies the original pages losslessly, exactly as they are.',
      ],
    },
  ],
  edgeCases: [
    {
      heading: 'The PDF is password-protected',
      paragraphs: [
        'Encrypted PDFs cannot be opened until they are unlocked. If you know the password, run the file through [Unlock PDF](/unlock-pdf/) first, then extract. PDFs with only usage restrictions (no open password) usually unlock by leaving the password field empty.',
      ],
    },
    {
      heading: 'Very long documents',
      paragraphs: [
        'There is no page limit. For very long documents the previews render in batches (first 30, then 60 more per click), so the tool stays responsive even on book-length PDFs. If you need pages by number rather than visually, [Split PDF](/split-pdf/) accepts ranges like `47-52` directly.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is extracting pages from a PDF free?',
      a: 'Yes — free forever, with no task limits, no watermarks, and no sign-up. Processing happens on your own device, so there is no server cost to pass on.',
    },
    {
      q: 'Can I extract pages from different parts of the document?',
      a: 'Yes — click any combination of pages, in any order. The extracted file keeps the pages in their original document order, and you can drag thumbnails to rearrange them first.',
    },
    {
      q: 'Does extraction reduce quality?',
      a: 'No. Pages are copied into the new file at the object level — text stays selectable, links keep working, and images keep their original resolution. No re-rendering, no recompression.',
    },
    {
      q: 'Is it safe to extract pages from confidential documents?',
      a: 'Yes. Everything runs locally in your browser — the file is never uploaded. You can disconnect from the internet after the page loads and it still works; closing the tab removes every trace.',
    },
  ],
  related: ['how-to-remove-pages-from-pdf', 'how-to-split-pdf', 'how-to-organize-pdf-pages'],
};
