import type { Guide } from './types';

/**
 * Facts below were checked against components/tools/CompressPdfTool.tsx and
 * lib/pdf/compress.ts — keep them in sync.
 */
export const howToCompressPdf: Guide = {
  slug: 'how-to-compress-pdf',
  toolSlug: 'compress-pdf',
  title: 'How to Compress a PDF to Reduce File Size',
  description:
    'Reduce PDF file size in your browser with three quality levels (72–300 DPI). No uploads, no sign-up — files never leave your device. Free step-by-step guide.',
  intro:
    'The fastest way to compress a PDF is to do it right in your browser: open the free [CoolPDF Compress PDF tool](/compress-pdf/), drop in a file up to 150 MB, pick one of three quality levels, click Compress PDF, and download the result as compressed.pdf. Unlike most online compressors, CoolPDF runs the Ghostscript engine locally on your device — your document is never uploaded, and there is no account, no queue, and no watermark.',
  quickSteps: [
    'Open the Compress PDF tool and drag your PDF onto the upload area — or click it to browse (one file at a time, up to 150 MB on desktop).',
    'Choose a compression level: Extreme for the smallest size, Recommended for a balance (the default), or Light for print quality.',
    'Click "Compress PDF" — the first run downloads the ~15 MB compression engine once, then it is cached.',
    'Click "Download" to save the result as compressed.pdf and compare the before-and-after sizes — the original file stays untouched.',
  ],
  sections: [
    {
      heading: 'Step-by-step: compressing a PDF with CoolPDF',
      paragraphs: [
        'Open the [Compress PDF tool](/compress-pdf/) and add your file: drag it onto the upload area, or click the area to browse. The row under the dropzone confirms the file name and size before anything runs.',
        'Now pick a compression level. The three cards spell out the trade-off: Extreme for the smallest possible file, Recommended — preselected — for a balance, and Light when the document will be printed. Not sure? Stay on Recommended.',
        'Click "Compress PDF". The first run downloads the compression engine — about 15 MB of Ghostscript as WebAssembly — which is cached afterwards, so later runs start instantly. You see page-by-page progress while it works; large files can take several minutes. The download card shows the before-and-after sizes and the percentage saved — click Download to save compressed.pdf.',
      ],
      bullets: [
        'One PDF at a time',
        'Up to 150 MB per file on desktop, 50 MB on mobile',
        'Three levels: Extreme (72 DPI), Recommended (150 DPI), Light (300 DPI)',
        'Output is always saved as compressed.pdf',
      ],
      image: {
        src: '/guides/how-to-compress-pdf/step-1.png',
        alt: 'The CoolPDF Compress PDF upload area with one PDF added, and the three compression level cards — Extreme, Recommended, and Light — with Recommended selected.',
      },
    },
    {
      heading: 'Choosing the right compression level',
      paragraphs: [
        'The three levels are Ghostscript\u2019s standard downsampling presets; what changes is the DPI your images end up at. Extreme drops to 72 DPI — fine on screen, soft in print. Recommended lands at 150 DPI: crisp on screen, fine for casual printouts, right for most documents. Light keeps 300 DPI, print-ready, and mainly re-encodes images more efficiently — modest savings, no visible change. Text and vector graphics stay untouched at every level.',
        'One honest caveat: compression can only shrink what is shrinkable. A text-heavy PDF exported from Word has almost no image data, so even Extreme may trim only a few percent, while a 40-page phone scan can drop to a tenth of its size.',
      ],
    },
    {
      heading: 'Compressing sensitive documents without uploading them',
      paragraphs: [
        'The PDFs that need compressing are usually on their way somewhere: a portfolio to a recruiter, bank statements to a landlord, medical reports to an insurer — and most mail servers bounce attachments over about 25 MB, so shrinking is often mandatory, not cosmetic. A conventional online compressor, meanwhile, makes you upload that very document to a stranger\u2019s server first.',
        'CoolPDF runs the same Ghostscript engine print shops have trusted for decades, compiled to WebAssembly and executed on your own machine: the file is read from disk, rebuilt smaller, and handed back — nothing is transmitted. Once the engine is cached you can even go offline and keep compressing; closing the tab leaves no trace.',
      ],
    },
    {
      heading: 'When compressing alone is not enough',
      paragraphs: [
        'If the file is still too big after Extreme, the honest fix is to shrink the content, not the pixels. Extract the pages you need with [Split PDF](/split-pdf/) — one chapter, not the whole report — or delete filler pages with [Organize PDF](/organize-pdf/), then compress the leaner document. Bundling scans instead? [Merge them into one PDF](/merge-pdf/) first and compress the bundle afterwards.',
        'If the compressed file is about to travel, lock it first: [Protect PDF](/protect-pdf/) adds a password the same browser-local way, so an intercepted attachment stays unreadable.',
      ],
      image: {
        src: '/guides/how-to-compress-pdf/step-2.png',
        alt: 'The download card shown after a successful compression, displaying the compressed.pdf file name, the original and new file sizes, the percentage saved, and the Download button.',
      },
    },
  ],
  alternatives: [
    {
      heading: 'macOS Preview',
      paragraphs: [
        'Preview on macOS shrinks PDFs without extra software: open the file, choose File → Export, and pick the "Reduce File Size" Quartz filter. Free and offline, but a single blunt setting — image quality often suffers, with no level to dial. CoolPDF gives the same offline privacy in any browser, with three explicit quality levels.',
      ],
    },
    {
      heading: 'Adobe Acrobat (paid)',
      paragraphs: [
        'Adobe\u2019s online compressor is polished, but it uploads your files to Adobe\u2019s servers and nudges you toward a paid Acrobat plan; the desktop app\u2019s Reduced Size PDF command requires that subscription too. If you already pay for Acrobat, great — otherwise a free browser tool with no upload, install, or account covers the same ground.',
      ],
    },
    {
      heading: 'The Print to PDF workaround',
      paragraphs: [
        'A common DIY trick is "printing" the PDF to a new file with Microsoft Print to PDF or the browser\u2019s print dialog. It sometimes reduces size, but re-rendering flattens the document — links, form fields, and bookmarks are lost — so it is a last resort; a dedicated compressor like CoolPDF rewrites the file without destroying its structure.',
      ],
    },
  ],
  edgeCases: [
    {
      heading: 'The PDF is password-protected',
      paragraphs: [
        'An encrypted PDF fails with "This PDF is password-protected and cannot be processed here." Know the password? Remove the protection with [Unlock PDF](/unlock-pdf/) first, then compress the unlocked copy. Without it, ask the sender for an unprotected version.',
      ],
    },
    {
      heading: 'The file is over the size limit',
      paragraphs: [
        'The dropzone rejects files above 150 MB on desktop (50 MB on mobile), because the whole document is held in your device\u2019s memory while it is rebuilt. The workaround: split the PDF with [Split PDF](/split-pdf/), compress each part, then [merge them back](/merge-pdf/). Large scans also take time — after three minutes a "Still working" note appears; let it finish.',
      ],
    },
    {
      heading: 'The result came out larger than the original',
      paragraphs: [
        'Occasionally the compressed file comes out bigger, and the tool says so, suggesting the Light level. That happens with already-optimized PDFs — output from another compressor, or pages of mostly vector graphics. Keep your original; there is nothing left to squeeze.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is compressing PDFs with CoolPDF really free?',
      a: 'Yes — every tool on CoolPDF is free forever, with no daily quotas, watermarks, or premium tiers. The compression runs on your own device, so there is no server bill to pass on to you.',
    },
    {
      q: 'What are the limits when compressing?',
      a: 'One PDF at a time, up to 150 MB on desktop or 50 MB on mobile; very large documents can take several minutes, so keep the tab open until the download card appears.',
    },
    {
      q: 'Is it safe to compress confidential documents here?',
      a: 'Yes. The engine runs locally in your browser; your file is never uploaded. Once the engine is cached you can even compress offline; closing the tab removes every trace.',
    },
    {
      q: 'Do I need to sign up or install anything?',
      a: 'No account, no email address, nothing to install. The only download is the ~15 MB compression engine on the first run, cached afterwards so it starts instantly.',
    },
    {
      q: 'Will compression reduce the quality of my PDF?',
      a: 'Text and vector graphics stay exactly as they are; only images are downsampled to the level\u2019s DPI — 72 (Extreme), 150 (Recommended), or 300 (Light). Pick Light for printing; Recommended is right for screen sharing.',
    },
  ],
  related: ['how-to-merge-pdf', 'how-to-split-pdf', 'how-to-password-protect-pdf'],
};
