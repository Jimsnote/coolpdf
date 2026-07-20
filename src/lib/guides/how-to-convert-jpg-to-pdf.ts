import type { Guide } from './types';

/**
 * Facts below were checked against components/tools/JpgToPdfTool.tsx,
 * lib/pdf/jpg-to-pdf.ts, lib/pdf/image-orientation.ts, and the
 * components/tools/FileDropzone.tsx 'images' accept path — keep them in sync.
 */
export const howToConvertJpgToPdf: Guide = {
  slug: 'how-to-convert-jpg-to-pdf',
  toolSlug: 'jpg-to-pdf',
  title: 'How to Convert JPG Images to a PDF File',
  description:
    'Turn up to 20 JPG or PNG images into one A4 PDF, right in your browser. Orientation and fit options, no uploads, no sign-up — free forever.',
  intro:
    'The fastest way to convert JPG images to a PDF is to do it right in your browser: open the free [CoolPDF JPG to PDF tool](/jpg-to-pdf/), drop in up to 20 JPG or PNG images, choose the page orientation and placement, click Convert to PDF, and download the result as images.pdf. Because the conversion runs locally on your device, your photos are never uploaded to a server — no account, no queue, no watermark.',
  quickSteps: [
    'Open the JPG to PDF tool and drag up to 20 JPG or PNG images onto the upload area — or click it to browse your device.',
    'Choose a Page orientation: Auto follows the aspect ratio of your first image, or force Portrait or Landscape.',
    'Pick an Image placement — Fit, Fill, or Original — then click "Convert to PDF". The conversion runs locally in your browser.',
    'Click "Download" on the result card to save the PDF as images.pdf — one image per A4 page, in the order you added the files.',
  ],
  sections: [
    {
      heading: 'Step-by-step: converting images with CoolPDF',
      paragraphs: [
        'Open the [JPG to PDF tool](/jpg-to-pdf/) — nothing to install, no account to create. Add images by dragging them onto the upload area, or click it to pick them from a file dialog. You can add files in several batches; each entry shows the file name and size, and a trash icon removes anything added by mistake.',
        'Decide the page order before converting: images become pages in exactly the order you added them, one per page, so add the cover photo or first scan first. There are no reorder handles here — to fix the order, remove the misplaced file and add it again.',
        'Set the two options (covered next), then click "Convert to PDF". Because the conversion runs on your device, the time depends on image sizes, not your internet connection. When the "Your file is ready" card appears, click Download — the file is always named images.pdf, and the originals are never modified.',
      ],
      bullets: [
        'Up to 20 JPG or PNG images per conversion',
        'Up to 100 MB per image on desktop, 50 MB on mobile',
        'One image per A4 page, in the order the files were added',
        'Output is always saved as images.pdf',
      ],
      image: {
        src: '/guides/how-to-convert-jpg-to-pdf/step-1.png',
        alt: 'The CoolPDF JPG to PDF upload area with four image files added, each row showing the file name, its size, and a remove button.',
      },
    },
    {
      heading: 'Orientation and placement: getting the pages to look right',
      paragraphs: [
        'Page orientation offers Auto, Portrait, and Landscape. Auto looks at the first image: wider than tall means landscape pages, otherwise portrait. The choice applies to every page, so when mixing portrait scans with wide screenshots, either force an orientation or accept generous margins on some pages.',
        'Image placement controls how each image sits on its A4 page. Fit — the default — scales the image proportionally until it is fully visible, centered with margins; nothing is cropped, which suits receipts and screenshots. Fill covers the whole page and crops what spills over the edges, for a full-bleed photo look. Original draws at natural pixel size (1 pixel = 1 point), centered — high-resolution photos overflow the page, so use it only when you know the dimensions.',
      ],
      image: {
        src: '/guides/how-to-convert-jpg-to-pdf/step-2.png',
        alt: 'The two option dropdowns of the JPG to PDF tool: Page orientation set to Auto (match the first image), and Image placement set to Fit — whole image visible, with margins.',
      },
    },
    {
      heading: 'Passport scans, receipts, whiteboards: why local conversion matters',
      paragraphs: [
        'The images people turn into PDFs are rarely casual snapshots — passport copies for a visa application, receipts for an expense report, a signed contract captured on a phone. A typical online converter uploads every image to a server, leaving your pictures on infrastructure you do not control.',
        'CoolPDF does the same job without the upload: your browser reads the images, lays them out on A4 pages, and saves the PDF to your own disk. Nothing is transmitted, so the tool is safe for identity documents and NDA material — it even works offline once loaded. Phone photos get extra care: the EXIF orientation tag is applied automatically, so portrait shots never land sideways.',
      ],
    },
    {
      heading: 'What to do with your new PDF',
      paragraphs: [
        'Converting is often one step in a larger job. If the PDF came out too heavy to email, run it through [Compress PDF](/compress-pdf/). To combine it with an existing document, such as scanned pages appended to a contract, use [Merge PDF](/merge-pdf/).',
        'If the page order is not right after all, [Organize PDF](/organize-pdf/) rearranges, rotates, or deletes pages visually instead of reconverting. And for the reverse direction — pulling the pages of a PDF back out as images — [PDF to JPG](/pdf-to-jpg/) does exactly that.',
      ],
    },
  ],
  alternatives: [
    {
      heading: 'Windows: Print to PDF',
      paragraphs: [
        'Windows converts images without extra software: select the JPGs in File Explorer, right-click, choose Print, and pick the Microsoft Print to PDF printer with a full-page photo layout. It is free and offline, but layout controls are basic and ordering follows your selection. CoolPDF gives you explicit orientation and fit controls with the same offline privacy.',
      ],
    },
    {
      heading: 'macOS Preview',
      paragraphs: [
        'On a Mac, open the images together in Preview, then File → Print → Save as PDF. It is free and offline, but macOS-only, and margin or full-bleed options are buried in the print dialog. CoolPDF does the same job in any browser, with the fit options up front.',
      ],
    },
    {
      heading: 'Adobe\u2019s online converter',
      paragraphs: [
        'Adobe\u2019s web-based JPG to PDF converter is polished: drag in images, convert, download. But images are uploaded to Adobe\u2019s servers, and heavy use pushes you toward an account with a limited free tier. A local tool covers the same ground with no upload and no quota.',
      ],
    },
  ],
  edgeCases: [
    {
      heading: 'WebP, HEIC, and GIF files are skipped',
      paragraphs: [
        'The tool accepts only JPG and PNG — anything else you drop is skipped, with a notice saying so. iPhone photos saved as HEIC are the common case: set the camera to Most Compatible in iOS settings for future shots, and export existing HEIC photos as JPEG before converting.',
      ],
    },
    {
      heading: 'Pages come out in the wrong order',
      paragraphs: [
        'Images become pages in the order you added them, and the list has no reorder buttons. The quick fix: remove the misplaced file and add it again — it lands at the end. Already converted? Open the PDF in [Organize PDF](/organize-pdf/) and drag the pages into place visually.',
      ],
    },
    {
      heading: 'An image exceeds the size limit',
      paragraphs: [
        'Each image can be up to 100 MB on desktop and 50 MB on mobile — the limit exists because every image is held in memory during conversion. Oversized files are rejected with a message naming the file and the limit. If a photo exceeds it, resize or re-save it at a lower resolution first; the PDF will be smaller as a bonus.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is converting JPG to PDF with CoolPDF really free?',
      a: 'Yes — every tool on CoolPDF is free forever, with no daily quotas, watermarks, or premium tiers. The conversion runs on your own device, so there is no server bill to pass on to you.',
    },
    {
      q: 'How many images can I convert at once, and how big can they be?',
      a: 'Up to 20 JPG or PNG images per conversion. Each image can be up to 100 MB on a desktop computer, or 50 MB on mobile devices.',
    },
    {
      q: 'Are my photos uploaded anywhere?',
      a: 'No. Your images are processed locally in your browser and never leave your device. You can even disconnect from the internet after the page loads and the conversion still works; closing the tab removes every trace of your files.',
    },
    {
      q: 'Do I need to sign up or install anything?',
      a: 'No. There is no account, no email address, and nothing to install. Open the tool page, add your images, and convert — it works in any modern browser, on desktop and mobile.',
    },
    {
      q: 'Will converting reduce the quality of my images?',
      a: 'No. Images are embedded into the PDF exactly as they are — no recompression. The one exception is a phone photo with an EXIF rotation tag: it is re-encoded once at high quality so it appears upright.',
    },
  ],
  related: ['how-to-convert-pdf-to-jpg', 'how-to-merge-pdf', 'how-to-compress-pdf'],
};
