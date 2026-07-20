import type { Guide } from './types';

/**
 * Facts below were checked against components/tools/WatermarkPdfTool.tsx and
 * lib/pdf/watermark.ts — keep them in sync.
 */
export const howToAddWatermarkToPdf: Guide = {
  slug: 'how-to-add-watermark-to-pdf',
  toolSlug: 'watermark-pdf',
  title: 'How to Add a Watermark to a PDF Document',
  description:
    'Add a text or image watermark to every page of your PDF — tiled or centered, with size, color, and opacity controls — right in your browser. Free, no upload.',
  intro:
    'The fastest way to add a watermark to a PDF is to stamp it right in your browser: open the free [CoolPDF Watermark PDF tool](/watermark-pdf/), drop in your document, type a wording like CONFIDENTIAL or upload a logo, choose tiled or centered placement, click Add Watermark, and download the result as watermarked.pdf. Because CoolPDF processes the file locally on your device, the unwatermarked original is never uploaded anywhere — no account, no queue, no waiting.',
  quickSteps: [
    'Open the [Watermark PDF tool](/watermark-pdf/) and drag your PDF onto the upload area, or click to browse — one file at a time, up to 100 MB on desktop (50 MB on mobile).',
    'Keep the type on "Text" and enter your wording (up to 100 characters), or switch to "Image (PNG or JPG)" and upload a logo.',
    'Set the font size and color (or the image size), pick an opacity, choose Tiled or Centered placement, then click "Add Watermark".',
    'Click "Download" to save the result as watermarked.pdf. Every page is stamped, and your original file stays untouched.',
  ],
  sections: [
    {
      heading: 'Step-by-step: adding a text watermark',
      paragraphs: [
        'Open the [Watermark PDF tool](/watermark-pdf/) and add your PDF — drag it onto the upload area, or click to browse. With the type set to Text, enter the wording (up to 100 characters; the placeholder suggests CONFIDENTIAL). The font size slider runs 16–96 pt, and the text is drawn with your device\u2019s own fonts, so Chinese, Arabic, or emoji wording works exactly like English.',
        'Opacity runs 5–50% — the 20% default keeps body text legible — and Placement offers Tiled, repeated diagonally so the mark cannot be cropped out, or Centered, a single 45° stamp in the middle. Click "Add Watermark"; the download card appears with the file, always named watermarked.pdf.',
      ],
      bullets: [
        'One PDF at a time, up to 100 MB on desktop (50 MB on mobile)',
        'Text up to 100 characters, font size 16–96 pt',
        'Opacity 5–50%; tiled or centered at a fixed 45° diagonal',
      ],
      image: {
        src: '/guides/how-to-add-watermark-to-pdf/step-1.png',
        alt: 'The CoolPDF text watermark options with CONFIDENTIAL typed, font size at 48 pt, a gray color swatch, opacity 20%, and the Tiled placement selected.',
      },
    },
    {
      heading: 'Stamping a logo or image instead',
      paragraphs: [
        'Switch the type to "Image (PNG or JPG)" and a second upload area appears — only PNG and JPG files are accepted. For logos, PNG is the right choice: its transparency is preserved, so the page content stays visible around your mark instead of sitting behind a white box.',
        'The "Image size (relative to page width)" slider scales the stamp from 10% to 100% of the page width, starting at 40%; the aspect ratio is kept, and oversized stamps are shrunk to fit. Centered at low opacity reads like a letterhead logo, Tiled at 30–40% covers the page for drafts.',
      ],
      image: {
        src: '/guides/how-to-add-watermark-to-pdf/step-2.png',
        alt: 'The image watermark options with a logo.png added, size at 40% of page width, opacity 20%, and the Centered placement selected.',
      },
    },
    {
      heading: 'Watermark sensitive documents without uploading them',
      paragraphs: [
        'A watermark is usually the last step before a document leaves your hands: a draft contract marked CONFIDENTIAL, an ID copy stamped "for the May rental application only". With a conventional online tool, the unprotected original — the most sensitive version — is uploaded to a server before the watermark touches it.',
        'CoolPDF stamps the watermark where the file already is: the wording is rendered with your device\u2019s fonts and drawn onto the pages in the browser tab — nothing is transmitted or stored anywhere else. The Network tab in DevTools shows zero uploads, and closing the tab removes every trace.',
      ],
    },
    {
      heading: 'Finishing the document: protect, number, and shrink it',
      paragraphs: [
        'Watermarking rarely happens in isolation. A document confidential enough to stamp usually deserves a password too — [Password Protect PDF](/protect-pdf/) encrypts the watermarked file. For multi-page reports, [Page Numbers](/page-numbers/) adds consistent numbering.',
        'The stamp adds almost nothing to the file size — the same image is embedded once and reused on every page. If the result still needs to fit an email limit, [Compress PDF](/compress-pdf/) brings it back under the limit with the stamp intact.',
      ],
    },
  ],
  alternatives: [
    {
      heading: 'Microsoft Word or Google Docs (before the PDF exists)',
      paragraphs: [
        'If you still have the source document, watermark it there: Word has Design → Watermark with custom text and pictures, and Google Docs offers Insert → Watermark. It costs nothing extra, but only works for documents you authored — a scan or a contract received as a PDF has no source file. CoolPDF stamps the document you actually have.',
      ],
    },
    {
      heading: 'Adobe Acrobat (paid)',
      paragraphs: [
        'Acrobat Pro has the most complete watermark feature — text or image, rotation, opacity, page ranges — under Edit PDF → Watermark → Add. It needs a paid subscription, and the web version uploads your file to Adobe\u2019s servers. If Acrobat is already installed it is excellent; otherwise a free browser tool covers the everyday CONFIDENTIAL stamp.',
      ],
    },
  ],
  edgeCases: [
    {
      heading: 'The PDF is password-protected',
      paragraphs: [
        'An encrypted PDF cannot be opened for stamping — the tool answers "This PDF is password-protected and cannot be processed here." If you know the password, save an unprotected copy with [Unlock PDF](/unlock-pdf/), watermark that copy, and re-protect it afterwards. Without the password, ask the sender for an open version.',
      ],
    },
    {
      heading: 'The file is too large',
      paragraphs: [
        'The limit is 100 MB per file on desktop, 50 MB on mobile — the whole document is held in memory while it is stamped, and oversized files are refused at the upload area. Shrink the document with [Compress PDF](/compress-pdf/) first, then watermark the compressed version; the stamp is drawn afterwards, so it stays crisp.',
      ],
    },
    {
      heading: 'Your logo is not a PNG or JPG',
      paragraphs: [
        'Only PNG and JPG are accepted — drop a GIF, SVG, or WebP and the tool answers "Only JPG and PNG images are supported." Export the artwork to PNG first — transparency survives, which is what you want for a logo — and rasterize SVG at a generous resolution so the stamp stays sharp.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is adding a watermark with CoolPDF really free?',
      a: 'Yes — free forever, with no daily quotas and no premium tier. CoolPDF never adds its own branding: the only watermark is the one you put there.',
    },
    {
      q: 'What are the limits when watermarking?',
      a: 'One PDF at a time, up to 100 MB on desktop (50 MB on mobile). Text allows up to 100 characters at 16–96 pt, opacity runs 5–50%, and image stamps scale from 10% to 100% of the page width.',
    },
    {
      q: 'Is it safe to watermark confidential documents here?',
      a: 'Yes. The file is processed locally in your browser and never uploaded — disconnect from the internet after the page loads and stamping still works. Closing the tab removes every trace.',
    },
    {
      q: 'Do I need to sign up or install anything?',
      a: 'No. There is no account, no email address, and nothing to install — open the tool page, drop in your PDF, and stamp it, in any modern browser on desktop or mobile.',
    },
    {
      q: 'Can I watermark only some pages?',
      a: 'Not directly — the stamp is applied to every page of the document. To watermark one section only, extract those pages with [Split PDF](/split-pdf/), stamp the extracted file, then put everything back together with [Merge PDF](/merge-pdf/).',
    },
    {
      q: 'Will the watermark look blurry when people zoom in?',
      a: 'No. Text watermarks are rendered at four times their final size, so wording stays sharp under zoom, and image stamps keep your image\u2019s resolution. The page content underneath is never re-rendered.',
    },
  ],
  related: ['how-to-password-protect-pdf', 'how-to-add-page-numbers-to-pdf', 'how-to-compress-pdf'],
};
