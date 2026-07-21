import type { Guide } from './types';

export const howToRemovePagesFromPdf: Guide = {
  slug: 'how-to-remove-pages-from-pdf',
  toolSlug: 'remove-pages',
  title: 'How to Remove (Delete) Pages from a PDF — Free, No Upload',
  description:
    'Delete unwanted pages from a PDF with a visual page picker — mark pages, remove them, download. Free, no uploads, no sign-up, files never leave your device.',
  intro:
    'The fastest way to remove pages from a PDF is to delete them right in your browser: open the free [CoolPDF Remove Pages tool](/remove-pages/), drop in your file, click the trash icon on every page you want gone, and download the cleaned document. Unlike classic online tools, nothing is uploaded — the file is rebuilt locally on your device, and the original stays untouched.',
  quickSteps: [
    'Open the Remove Pages tool and drop in your PDF — a live preview of every page appears.',
    'Click the trash icon on each page you want to delete, or select several pages and use "Delete selected".',
    'Check the counter to confirm how many pages will be kept.',
    'Click "Remove pages & download" to save the cleaned file as removed.pdf.',
  ],
  sections: [
    {
      heading: 'Step-by-step: deleting PDF pages with CoolPDF',
      paragraphs: [
        'Open the [Remove Pages tool](/remove-pages/) — nothing to install, no account. Add your PDF and every page shows up as a thumbnail with a live preview, so you never delete the wrong one.',
        'To delete a single page, click its trash icon. For a batch, click pages to select them (they get a highlighted border) and press "Delete selected". Deleted pages are only marked — dimmed with a red badge — and one more click on the restore button brings them back if you change your mind.',
        'The counter in the toolbar always shows how many of the total pages will be kept. When it looks right, click "Remove pages & download" and the cleaned document is assembled locally and saved as removed.pdf.',
      ],
      bullets: [
        'Files up to 100 MB (50 MB on mobile), no page limit',
        'Deleted pages are restorable until you download',
        'Original file on your disk stays unchanged',
        'Output is saved as removed.pdf',
      ],
    },
    {
      heading: 'Why deleting pages locally matters',
      paragraphs: [
        'The pages people remove are usually the sensitive ones: a signature page, a salary figure, an attachment that was meant for someone else. Uploading the whole document to a server just to cut one page out of it is exactly backwards.',
        'CoolPDF renders the previews and rebuilds the document entirely in your browser. Nothing is transmitted or stored anywhere else — safe for contracts, medical records, and HR paperwork, even on public Wi-Fi. Close the tab and no trace remains.',
      ],
    },
    {
      heading: 'Remove vs extract: which one do you need?',
      paragraphs: [
        'Removing is what you want when most of the document stays: cut a few bad pages out of many. If you want the opposite — keep only a few pages out of a long document — [Extract Pages](/extract-pages/) is faster: click the pages you want and download just those.',
        'Both tools share the same visual page picker, so you can drag pages into a new order while you are at it, or rotate the sideways ones with one click.',
      ],
    },
  ],
  alternatives: [
    {
      heading: 'macOS Preview',
      paragraphs: [
        'On a Mac, open the PDF in Preview, show the thumbnail sidebar, select the pages to delete, and press Delete. Free and offline, but macOS-only, and selecting many pages one by one gets tedious. CoolPDF gives the same local privacy in any browser, on any OS, with batch selection built in.',
      ],
    },
    {
      heading: 'Print to PDF (page range workaround)',
      paragraphs: [
        'A common trick is to "print" only the pages you want to keep into a new PDF. It works, but printing re-renders the document — links, form fields, and bookmarks are flattened. A proper page remover like CoolPDF copies the remaining pages losslessly, exactly as they were.',
      ],
    },
  ],
  edgeCases: [
    {
      heading: 'The PDF is password-protected',
      paragraphs: [
        'An encrypted PDF cannot be opened here until its protection is removed. If you know the password, run it through [Unlock PDF](/unlock-pdf/) first, then remove pages from the unlocked copy. Restriction-only PDFs (no open password) usually unlock with an empty password.',
      ],
    },
    {
      heading: 'You deleted a page by mistake',
      paragraphs: [
        'No problem — deletions are only marks until you download. Click the restore button on the dimmed thumbnail (or press Reset to start over), and the page is back. Even after downloading, your original file on disk was never modified.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is removing pages from a PDF free?',
      a: 'Yes — every CoolPDF tool is free forever, with no task limits, no watermarks, and no sign-up. The processing runs on your own device, so there is no server bill to pass on to you.',
    },
    {
      q: 'Can I undo a deleted page?',
      a: 'Yes, any time before downloading. Removed pages are only marked and can be restored with one click. After downloading, your original file on disk is still unchanged.',
    },
    {
      q: 'Does removing pages reduce quality?',
      a: 'No. The remaining pages are copied into the new document exactly as they are — no re-rendering and no recompression. Text stays selectable and images keep their original resolution.',
    },
    {
      q: 'Is it safe to delete pages from confidential documents here?',
      a: 'Yes. Your file is processed locally in your browser and never uploaded. You can even disconnect from the internet after the page loads and everything still works.',
    },
  ],
  related: ['how-to-extract-pages-from-pdf', 'how-to-organize-pdf-pages', 'how-to-split-pdf'],
};
