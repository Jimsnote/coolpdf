export const en = {
  site: {
    name: 'CoolPDF',
    description: 'Free PDF tools that respect your privacy',
  },
  nav: {
    home: 'Home',
    tools: 'Tools',
    about: 'About',
    faq: 'FAQ',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  languageSwitcher: {
    label: 'Language',
  },
  footer: {
    pillars:
      '100% client-side processing · Your files never leave your device · No sign-up required',
    pagesHeading: 'Pages',
    about: 'About',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    faq: 'FAQ',
    github: 'GitHub',
    copyright: '© {year} CoolPDF. All rights reserved.',
  },
  common: {
    comingSoon: 'Coming soon',
  },
  home: {
    metaTitle: 'Free PDF Tools That Respect Your Privacy | CoolPDF',
    metaDescription:
      'Merge, split, compress, and protect PDFs right in your browser. 100% client-side processing — no uploads, no sign-up, free forever.',
    hero: {
      title: 'Free PDF Tools That Respect Your Privacy',
      subtitle:
        'Merge, split, compress, and protect PDFs right in your browser. No uploads. No sign-up. No servers. Your files are processed locally on your device — they never touch the internet.',
      cta: 'Browse the tools',
    },
    pillars: {
      heading: 'PDF tools without the privacy trade-off',
      items: [
        {
          title: 'No Uploads',
          description:
            'Your files never leave your device. Every tool runs locally in your browser, so nothing is ever sent to a server.',
        },
        {
          title: 'No Sign-Up',
          description:
            'No accounts, no email addresses, no waiting. Open the page and start working immediately.',
        },
        {
          title: 'Free Forever',
          description:
            'Every tool is completely free with no usage limits, no watermarks, and no premium tier.',
        },
      ],
    },
    toolsSection: {
      heading: 'The tools',
      subheading:
        'Twelve essential PDF tools, each one running entirely on your own device.',
    },
    why: {
      heading: 'Why local processing matters',
      paragraphs: [
        'Most online PDF tools ask you to upload your files to their servers before anything happens. That is a strange bargain when you stop to think about it: to rotate a page or merge two documents, you hand over the file itself. And PDFs are rarely trivial — they are contracts, tax returns, medical records, bank statements, and ID documents. Once a file is uploaded, it travels through infrastructure you do not control: web servers, queues, temporary storage, backups. You have no way to verify when it is really deleted, or who can access it in the meantime.',
        'CoolPDF takes the opposite approach. Instead of sending your file to the processing, we send the processing to your file. Modern browsers are remarkably powerful, and WebAssembly lets us run industrial-grade PDF engines right inside the browser tab, at near-native speed. When you use a CoolPDF tool, the document is read by your own device, transformed by code running in your own browser, and saved back to your own disk. At no point does a single byte of the file cross the network.',
        'This design is better in every dimension that matters. It is more private, because there is no upload to intercept or leak. It is faster, because there is no round trip to a server and no queue. It is more reliable, because the tools keep working even on a flaky connection. And it is cheaper to run, which is why CoolPDF can be genuinely free with no usage limits.',
        'We think this is how document tools should have worked all along. Your files belong on your device — so that is exactly where CoolPDF keeps them.',
      ],
    },
    proof: {
      heading: "Don't take our word for it",
      items: [
        {
          title: 'Go offline',
          description:
            'Disconnect from the internet after this page loads — every tool still works.',
        },
        {
          title: 'Watch the network',
          description:
            'Open DevTools (F12) → Network tab while using a tool — zero file uploads.',
        },
        {
          title: 'Audit the code',
          description:
            'Our code is open source (AGPL-3.0) — audit it yourself on GitHub.',
        },
      ],
    },
  },
  tools: {
    'merge-pdf': {
      name: 'Merge PDF',
      description: 'Combine multiple PDFs into a single file, in the order you want.',
    },
    'split-pdf': {
      name: 'Split PDF',
      description: 'Extract a page range or split one PDF into separate documents.',
    },
    'compress-pdf': {
      name: 'Compress PDF',
      description: 'Shrink the file size while keeping the quality you need.',
    },
    'rotate-pdf': {
      name: 'Rotate PDF',
      description: 'Rotate single pages or an entire document in seconds.',
    },
    'organize-pdf': {
      name: 'Organize PDF',
      description: 'Reorder, delete, and rearrange pages with drag and drop.',
    },
    'pdf-to-jpg': {
      name: 'PDF to JPG',
      description: 'Turn each PDF page into a high-quality JPG image.',
    },
    'jpg-to-pdf': {
      name: 'JPG to PDF',
      description: 'Convert JPG images into a clean, shareable PDF document.',
    },
    'protect-pdf': {
      name: 'Protect PDF',
      description: 'Add password encryption to keep your PDF private.',
    },
    'unlock-pdf': {
      name: 'Unlock PDF',
      description: 'Remove password protection from PDFs you own.',
    },
    'watermark-pdf': {
      name: 'Watermark PDF',
      description: 'Stamp text or an image over every page of your document.',
    },
    'page-numbers': {
      name: 'Page Numbers',
      description: 'Add page numbers to your PDF, exactly where you want them.',
    },
    'pdf-to-markdown': {
      name: 'PDF to Markdown',
      description: 'Extract clean, structured Markdown from any PDF.',
    },
  },
  about: {
    metaTitle: 'About Us | CoolPDF',
    metaDescription:
      'CoolPDF is a free, open-source PDF toolkit that processes every file locally in your browser. Learn why we built it this way.',
    heading: 'About CoolPDF',
    sections: [
      {
        title: 'Our mission',
        paragraphs: [
          'CoolPDF exists to make everyday PDF work — merging, splitting, compressing, protecting — free, instant, and private for everyone. We believe you should never have to trade your documents for convenience, so we built a toolkit where the files stay with you and the tools come to your browser.',
        ],
      },
      {
        title: 'Why we built it this way',
        paragraphs: [
          'Most online PDF tools require you to upload your files to a server before anything happens. That means contracts, tax returns, ID documents, and medical records pass through infrastructure you do not control — servers, queues, and backups operated by someone else, under privacy policies few people read.',
          'Modern browsers are powerful enough that none of this is necessary anymore. CoolPDF compiles industrial-grade PDF engines to WebAssembly and runs them directly on your device. The file never leaves your computer, because there is nowhere for it to go — CoolPDF has no upload servers at all.',
        ],
      },
      {
        title: "Don't take our word for it",
        paragraphs: [
          'Privacy claims are easy to make and hard to verify, so we made CoolPDF verifiable by design:',
        ],
        list: [
          'Disconnect from the internet after a page loads — every tool still works, because nothing depends on a server.',
          'Open your browser DevTools (F12), watch the Network tab while you use a tool — you will see zero file uploads.',
          'Read the source code. CoolPDF is open source under AGPL-3.0, so anyone can audit exactly what happens to a file.',
        ],
      },
      {
        title: "What we don't do",
        paragraphs: ['The list of things CoolPDF does not do is as important as what it does:'],
        list: [
          'We do not upload your files — there is no backend that could receive them.',
          'We do not store your files — closing the tab removes every trace.',
          'We do not analyze the content of your documents.',
          'We do not require an account, an email address, or any personal information.',
          'We do not impose usage limits, watermarks, or premium tiers.',
        ],
      },
      {
        title: 'Open source',
        paragraphs: [
          'CoolPDF is free software, released under the GNU Affero General Public License v3.0 (AGPL-3.0). The full source code is available on GitHub — inspect it, audit it, or contribute to it.',
        ],
      },
      {
        title: 'Contact',
        paragraphs: [
          'Questions, feedback, or bug reports? Email us at support@getcoolpdf.com. Messages are delivered via Cloudflare Email Routing.',
        ],
      },
    ],
  },
  privacy: {
    metaTitle: 'Privacy Policy | CoolPDF',
    metaDescription:
      'CoolPDF processes all files locally in your browser — we never receive, store, or access your documents. Read our privacy policy.',
    heading: 'Privacy Policy',
    lastUpdated: 'Last updated: July 2026',
    tldr: {
      title: 'TL;DR',
      items: [
        'Your files are processed 100% locally in your browser. We never receive, store, or even touch them.',
        'No account, no email address, no personal information — ever.',
        'We use Cloudflare Web Analytics, a cookieless, privacy-friendly statistics tool.',
        'We show Google AdSense ads to keep CoolPDF free. Google may use cookies for personalized ads, and you can opt out.',
      ],
    },
    sections: [
      {
        title: '1. Files You Process',
        paragraphs: [
          'This is our core promise: all processing is performed locally in your browser via WebAssembly and JavaScript. Your files are never transmitted to, stored on, or accessible by our servers. We have no technical ability to view, copy, or retain any file you process — there is no backend that could receive one. Closing the browser tab removes all traces of your documents.',
        ],
      },
      {
        title: "2. Information We Don't Collect",
        paragraphs: [
          'CoolPDF has no accounts, so we collect no email addresses, no passwords, and no profile data. We collect no file metadata and keep no processing logs — without a backend, there is simply nowhere such data could go. We do not ask for, and do not want, your personal information.',
        ],
      },
      {
        title: '3. Analytics',
        paragraphs: [
          'We use Cloudflare Web Analytics to understand aggregate traffic — for example, which pages are popular and roughly where visitors come from. It is cookieless, does not track individual users, and does not collect personal data. It cannot see the files you process, because neither can we.',
        ],
      },
      {
        title: '4. Advertising — Google AdSense',
        paragraphs: [
          'CoolPDF is funded by advertising served through Google AdSense. Google and its partners may use cookies to serve personalized ads based on your browsing history. You can opt out of personalized advertising at any time via Google Ads Settings (adssettings.google.com). Visitors from the EEA and the UK will see a consent management prompt before any personalized ads are shown. For details, see Google’s Privacy Policy at policies.google.com/privacy.',
        ],
      },
      {
        title: '5. Data Security & Retention',
        paragraphs: [
          'Because we never receive your files, a breach of our infrastructure cannot expose them — the strongest data security is data we do not have. The entire site is served over HTTPS, and all processing happens inside your browser’s sandbox.',
        ],
      },
      {
        title: '6. Changes to This Policy',
        paragraphs: [
          'If we change this policy, we will publish the updated version on this page with a revised date. Material changes will be highlighted on the site.',
        ],
      },
      {
        title: '7. Contact Us',
        paragraphs: [
          'Questions about this policy? Email support@getcoolpdf.com.',
        ],
      },
    ],
  },
  terms: {
    metaTitle: 'Terms of Service | CoolPDF',
    metaDescription:
      'The terms of service for CoolPDF — free, browser-based PDF tools with no accounts and no uploads.',
    heading: 'Terms of Service',
    lastUpdated: 'Last updated: July 2026',
    sections: [
      {
        title: '1. Acceptance of Terms',
        paragraphs: [
          'By using CoolPDF, you agree to these terms. If you do not agree, simply do not use the site.',
        ],
      },
      {
        title: '2. Service Description',
        paragraphs: [
          'CoolPDF provides free PDF tools that run entirely in your browser. The service is provided "as is" and "as available", free of charge, with no accounts and no usage limits.',
        ],
      },
      {
        title: '3. User Responsibilities',
        paragraphs: [
          'You are solely responsible for the files you process and for having the legal right to use them. You agree not to use CoolPDF for any unlawful purpose.',
        ],
      },
      {
        title: '4. Intellectual Property',
        paragraphs: [
          'The CoolPDF source code is open source under the GNU Affero General Public License v3.0 (AGPL-3.0). Your files remain entirely yours — we claim no rights over anything you process.',
        ],
      },
      {
        title: '5. Disclaimer of Warranties',
        paragraphs: [
          'CoolPDF is provided without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. Always keep a backup of important documents.',
        ],
      },
      {
        title: '6. Limitation of Liability',
        paragraphs: [
          'To the maximum extent permitted by law, CoolPDF and its contributors are not liable for any indirect, incidental, or consequential damages arising from the use of the service.',
        ],
      },
      {
        title: '7. Changes to These Terms',
        paragraphs: [
          'We may update these terms from time to time. The current version is always published on this page, and continued use of the site constitutes acceptance.',
        ],
      },
      {
        title: '8. Contact',
        paragraphs: ['Questions about these terms? Email support@getcoolpdf.com.'],
      },
    ],
  },
  faq: {
    metaTitle: 'Frequently Asked Questions | CoolPDF',
    metaDescription:
      'Is CoolPDF really free? Are files uploaded? Does it work offline? Answers to the most common questions about CoolPDF.',
    heading: 'Frequently Asked Questions',
    items: [
      {
        question: 'Is CoolPDF really free?',
        answer:
          'Yes. Every tool is completely free, with no usage limits, no watermarks, and no premium tier. Unobtrusive ads are what keep CoolPDF free for everyone.',
      },
      {
        question: 'Do I need to create an account or sign up?',
        answer:
          'No. CoolPDF never asks for an account, an email address, or any personal information. Open the site and start working — that is the entire onboarding process.',
      },
      {
        question: 'Are my files uploaded to your servers?',
        answer:
          'No. CoolPDF processes every file locally in your browser using WebAssembly. Your files never leave your device — there are no uploads at all, because there is no server that could receive them.',
      },
      {
        question: 'Can CoolPDF see, store, or access my documents?',
        answer:
          'No. There is no backend, so we have no technical ability to see, store, or access your files. You can verify this yourself: open your browser DevTools (F12) and watch the Network tab while using a tool — zero file uploads. Our code is also open source, so anyone can audit it.',
      },
      {
        question: 'Does CoolPDF work offline?',
        answer:
          'Yes. Once a page has loaded, every tool runs entirely on your device, so the tools keep working even if you disconnect from the internet. Full offline caching of the whole site via a service worker is on our roadmap.',
      },
      {
        question: 'Is it safe to process confidential documents with CoolPDF?',
        answer:
          'Yes. Because files are processed locally and never leave your device, CoolPDF is suitable for contracts, medical records, and financial statements. The entire codebase is open source under AGPL-3.0, so security researchers can audit exactly what happens to a file.',
      },
      {
        question: 'How does CoolPDF make money?',
        answer:
          'We display ads served by Google AdSense. Advertising is our only revenue source, and it is what allows every tool to stay free with no usage limits.',
      },
      {
        question: 'What browsers are supported?',
        answer:
          'CoolPDF works in current versions of Chrome, Edge, Firefox, and Safari. Any modern browser with WebAssembly support — which is effectively all of them — can run every tool.',
      },
      {
        question: 'Is CoolPDF open source?',
        answer:
          'Yes. CoolPDF is released under the GNU Affero General Public License v3.0 (AGPL-3.0). The full source code is available on GitHub, and contributions are welcome.',
      },
      {
        question: 'Which PDF tools does CoolPDF offer?',
        answer:
          'CoolPDF offers twelve tools: Merge PDF, Split PDF, Compress PDF, Rotate PDF, Organize PDF, PDF to JPG, JPG to PDF, Protect PDF, Unlock PDF, Watermark PDF, Page Numbers, and PDF to Markdown. All of them run locally in your browser.',
      },
    ],
  },
  factSummary:
    'CoolPDF is a free, browser-based PDF toolkit. Unlike traditional online PDF tools, CoolPDF processes all files locally on the user’s device using WebAssembly — files are never uploaded to any server. The tools require no account, no email, and no sign-up, and are completely free with no usage limits. This makes CoolPDF suitable for confidential documents such as contracts, medical records, and financial statements.',
  toolUi: {
    privacyNote:
      'Your files are processed locally in your browser — nothing is uploaded.',
    dropPdfs: 'Drop PDF files here, or click to browse',
    dropImages: 'Drop JPG or PNG images here, or click to browse',
    moveUp: 'Move up',
    moveDown: 'Move down',
    remove: 'Remove',
    processing: 'Processing…',
    download: 'Download',
    readyTitle: 'Your file is ready',
    errors: {
      onlyPdf: 'Only PDF files are supported.',
      onlyImages: 'Only JPG and PNG images are supported.',
      tooManyFiles: 'You can add at most {max} files.',
      fileTooLarge: '"{name}" is too large — the limit is {max} MB per file.',
      minFiles: 'Please add at least {min} files.',
      encrypted: 'This PDF is password-protected and cannot be processed here.',
      corrupted: 'This file could not be read as a valid PDF.',
      invalidRange: 'Invalid page range. Use numbers and hyphens, for example 1-3, 5.',
      rangeOutOfBounds: 'The page range exceeds the number of pages in the document.',
      noPages: 'At least one page must remain in the document.',
      generic: 'Something went wrong while processing your file. Please try again.',
    },
  },
  toolPages: {
    'merge-pdf': {
      metaTitle: 'Merge PDF Online Free — No Upload, No Sign-Up | CoolPDF',
      metaDescription:
        'Combine up to 20 PDFs into one file directly in your browser. Reorder, merge, and download — files never leave your device. Free, no sign-up.',
      heading: 'Merge PDF',
      intro:
        'Combine multiple PDF documents into a single file, in exactly the order you choose. The merge runs entirely on your own device.',
      button: 'Merge PDF',
      stepsHeading: 'How to merge PDF files',
      steps: [
        'Add two or more PDF files by dragging them onto the upload area, or click to browse your device (2–20 files).',
        'Put the files in the order you want with the up and down arrows — this becomes the page order of the final document.',
        'Click "Merge PDF". The documents are combined locally, which usually takes only a few seconds.',
        'Download your merged PDF. The original files stay untouched on your device.',
      ],
      privacyHeading: 'Merge contracts and statements without uploading them',
      privacyText:
        'PDFs worth merging are often the ones you least want to share: signed contracts, bank statements, medical reports, application documents. With a conventional online tool, every one of those files is uploaded to a remote server before the merge even starts. CoolPDF works the other way around. The merging code comes to your browser and the files stay on your device — nothing is transmitted, queued, or stored anywhere else. That makes the tool safe to use on a work laptop, on public Wi-Fi, or with documents covered by an NDA. It also means there are no artificial quotas: your computer does the work, so there is no server bill to pass on to you. Close the tab and every trace of your documents is gone.',
      faqHeading: 'Frequently asked questions',
      faq: [
        {
          question: 'Is there a limit on how many PDFs I can merge?',
          answer:
            'You can merge between 2 and 20 PDF files at once. Each file can be up to 100 MB (50 MB on mobile devices), which is far more than everyday documents need.',
        },
        {
          question: 'Will merging change the quality of my PDFs?',
          answer:
            'No. Pages are copied into the new document exactly as they are — no recompression, no rendering, no watermarks. Text stays selectable and links keep working.',
        },
        {
          question: 'Are my files uploaded to a server?',
          answer:
            'Never. The merge runs entirely in your browser. You can even disconnect from the internet after the page loads — the tool keeps working.',
        },
      ],
    },
    'split-pdf': {
      metaTitle: 'Split PDF Online Free — Extract Pages Locally | CoolPDF',
      metaDescription:
        'Extract pages, split by range, or cut a PDF every N pages — all in your browser. Files never leave your device. Free, no sign-up, no watermarks.',
      heading: 'Split PDF',
      intro:
        'Extract every page as a separate file, pull out custom ranges, or split a document into chunks of N pages. Everything happens locally in your browser.',
      button: 'Split PDF',
      modeLabel: 'Split mode',
      modeAll: 'Extract all pages',
      modeRanges: 'Split by ranges',
      modeEveryN: 'Split every N pages',
      rangesLabel: 'Page ranges',
      rangesPlaceholder: 'e.g. 1-3, 5-8',
      everyNLabel: 'Pages per file',
      stepsHeading: 'How to split a PDF',
      steps: [
        'Add the PDF you want to split by dragging it onto the upload area, or click to browse.',
        'Choose a split mode: every page separately, custom ranges like 1-3, 5-8, or a chunk every N pages.',
        'Click "Split PDF". Each part is created locally on your device in seconds.',
        'Download the result — a single PDF if only one part was produced, otherwise a ZIP archive with all parts.',
      ],
      privacyHeading: 'Split confidential documents without a detour through the cloud',
      privacyText:
        'Splitting a PDF is often about sharing just one part of it — a single invoice from a full bookkeeping export, one chapter from a scan, the relevant pages of a contract. Ironically, most online tools make you share the whole document with their servers first. CoolPDF removes that detour entirely: the splitting happens inside your browser tab, on your own machine. The document is read, divided, and saved locally, and no byte of it crosses the network. That is safe enough for tax records, HR paperwork, and legal files — and it is fast, because there is no upload queue and no processed copy to download from somewhere else. When you close the tab, nothing remains behind.',
      faqHeading: 'Frequently asked questions',
      faq: [
        {
          question: 'How do I extract only some pages?',
          answer:
            'Choose "Split by ranges" and enter the pages you need, for example 1-3, 5-8. Each range becomes its own PDF, and all parts are downloaded together in one ZIP file.',
        },
        {
          question: 'Does splitting reduce the quality of my PDF?',
          answer:
            'No. Pages are copied unchanged into the new documents — text, images, links, and forms stay exactly as they were. Nothing is recompressed or watermarked.',
        },
        {
          question: 'Is there a page or file-size limit?',
          answer:
            'Files up to 100 MB (50 MB on mobile) are supported, with no limit on page count. Because your own device does the work, very large documents simply take a little longer.',
        },
      ],
    },
    'rotate-pdf': {
      metaTitle: 'Rotate PDF Online Free — Turn Pages Locally | CoolPDF',
      metaDescription:
        'Rotate all pages or just the ones you choose by 90°, 180°, or 270° — right in your browser. No uploads, no sign-up, no watermarks.',
      heading: 'Rotate PDF',
      intro:
        'Fix sideways scans and upside-down pages in seconds. Rotate the whole document or only selected pages by 90°, 180°, or 270°.',
      button: 'Rotate PDF',
      angleLabel: 'Rotation angle (clockwise)',
      scopeLabel: 'Apply to',
      scopeAll: 'All pages',
      scopeSelected: 'Selected pages only',
      pagesLabel: 'Pages',
      pagesPlaceholder: 'e.g. 1, 3, 5-8',
      stepsHeading: 'How to rotate PDF pages',
      steps: [
        'Add the PDF you want to fix by dragging it onto the upload area, or click to browse.',
        'Pick a rotation angle — 90°, 180°, or 270° clockwise.',
        'Choose whether to rotate every page or only specific ones (for example 1, 3, 5-8), then click "Rotate PDF".',
        'Download the rotated PDF. Pages you did not select remain exactly as they were.',
      ],
      privacyHeading: 'Straighten scans without sending them anywhere',
      privacyText:
        'Rotated pages usually come from a scanner or a phone camera: signed forms, ID documents, receipts, handwritten notes. These are exactly the files that should not travel to a stranger’s server just to be turned upright. With CoolPDF, the rotation happens where the file already is — in your browser. The page orientation is adjusted locally and the result is saved straight back to your device, with no upload, no copy on a remote disk, and no retention policy you have to trust. The change is also permanent and standard-compliant, so the document opens correctly in any PDF reader, on any device, for anyone you share it with afterwards.',
      faqHeading: 'Frequently asked questions',
      faq: [
        {
          question: 'Can I rotate only some pages?',
          answer:
            'Yes. Choose "Selected pages only" and enter the pages to rotate, for example 1, 3, 5-8. All other pages keep their original orientation.',
        },
        {
          question: 'Is the rotation permanent?',
          answer:
            'Yes. The rotation is written into the PDF itself, so the pages display correctly in every PDF reader — not just in the one you used to view the file.',
        },
        {
          question: 'Will rotating affect the content of my pages?',
          answer:
            'No. Only the page orientation changes; the content itself is untouched. Text stays sharp, images keep their resolution, and nothing is recompressed.',
        },
      ],
    },
    'jpg-to-pdf': {
      metaTitle: 'JPG to PDF Converter — Free, Local, No Upload | CoolPDF',
      metaDescription:
        'Turn JPG and PNG images into a clean A4 PDF in your browser. Fit, fill, or original size — files never leave your device. Free, no sign-up.',
      heading: 'JPG to PDF',
      intro:
        'Convert up to 20 JPG or PNG images into a single A4 PDF — perfect for scans, receipts, and photo documents. The conversion runs entirely on your device.',
      button: 'Convert to PDF',
      orientationLabel: 'Page orientation',
      orientationAuto: 'Auto (match the first image)',
      orientationPortrait: 'Portrait',
      orientationLandscape: 'Landscape',
      fitLabel: 'Image placement',
      fitFit: 'Fit — whole image visible, with margins',
      fitFill: 'Fill — cover the page, crop the edges',
      fitOriginal: 'Original — natural size, centered',
      stepsHeading: 'How to convert images to PDF',
      steps: [
        'Add up to 20 JPG or PNG images by dragging them onto the upload area, or click to browse.',
        'Choose the page orientation: auto follows the aspect ratio of your first image, or force portrait or landscape.',
        'Pick how images are placed — fit with margins, fill the page, or keep the original size — then click "Convert to PDF".',
        'Download your PDF, with one image per page in A4 format.',
      ],
      privacyHeading: 'Turn photos into PDFs without uploading a single pixel',
      privacyText:
        'Photos and scans tend to be personal: passport copies, receipts for your taxes, pictures of whiteboards, handwritten letters. A typical converter uploads every image to a server, converts it there, and hands you back a download link — your pictures now live on infrastructure you do not control. CoolPDF does the same job entirely on your device. The images are read by your browser, laid out on A4 pages, and saved as a PDF on your own disk. Nothing is uploaded, so nothing can leak, be logged, or end up in a training dataset. It even works offline: load the page, switch off the Wi-Fi, and convert away.',
      faqHeading: 'Frequently asked questions',
      faq: [
        {
          question: 'Which image formats are supported?',
          answer:
            'JPG and PNG images, up to 20 at a time. Each image becomes one A4 page, in the order you added the files.',
        },
        {
          question: 'What is the difference between Fit, Fill, and Original?',
          answer:
            'Fit scales the image so it is fully visible, with margins around it. Fill scales it to cover the whole page, cropping the edges. Original keeps the image’s natural size, centered on the page.',
        },
        {
          question: 'Will my images lose quality?',
          answer:
            'No. Images are embedded exactly as they are — no recompression. The PDF simply wraps your original image data, so what you see in the image is what you get in the PDF.',
        },
      ],
    },
    'organize-pdf': {
      metaTitle: 'Organize PDF Pages Online Free — Reorder & Rotate | CoolPDF',
      metaDescription:
        'Reorder PDF pages with drag and drop, rotate or delete pages, and download a reorganized PDF — all in your browser. No uploads, no sign-up.',
      heading: 'Organize PDF',
      intro:
        'Rearrange pages with drag and drop, rotate the sideways ones, and remove the pages you do not need. A live preview of every page makes it easy — and everything happens on your device.',
      button: 'Download organized PDF',
      loadingPreviews: 'Rendering page previews…',
      loadMorePreviews: 'Load more previews',
      selectAll: 'Select all',
      clearSelection: 'Clear selection',
      deleteSelected: 'Delete selected',
      rotateSelected: 'Rotate selected 90°',
      reset: 'Reset',
      rotatePage: 'Rotate page 90°',
      deletePage: 'Delete page',
      restorePage: 'Restore page',
      deletedBadge: 'Deleted',
      pageLabel: 'Page {n}',
      keptSummary: '{kept} of {total} pages will be kept',
      stepsHeading: 'How to organize PDF pages',
      steps: [
        'Add the PDF you want to reorganize by dragging it onto the upload area, or click to browse.',
        'Drag the page thumbnails into the order you want — the number badge always shows the original page number.',
        'Rotate or delete individual pages with the buttons on each thumbnail, or select several pages and use the toolbar. Deleted pages can be restored with one click.',
        'Click "Download organized PDF". The rearranged document is assembled locally and saved to your device.',
      ],
      privacyHeading: 'Rearrange confidential documents page by page — privately',
      privacyText:
        'Reordering pages is often the last step before a document goes out: pulling the signed page to the front of a contract, removing blank scans from a tax file, moving the one chapter a client asked for to the top. These are not files that belong on a stranger’s server. CoolPDF renders the page previews and rebuilds the document entirely in your browser — the file is read from your own disk and the result is saved back to it, with no upload in between. There is no queue, no temporary copy on someone else’s storage, and no retention policy you have to trust. That makes the tool safe for legal files, medical records, and HR paperwork, even on public Wi-Fi. Close the tab and nothing of your document remains.',
      faqHeading: 'Frequently asked questions',
      faq: [
        {
          question: 'Can I undo a deleted page?',
          answer:
            'Yes. The delete button only marks the page — it appears dimmed and can be restored with one more click. Pages are only left out when you download, and even then the original file on your device stays unchanged.',
        },
        {
          question: 'Does reorganizing reduce the quality of my PDF?',
          answer:
            'No. Pages are copied into the new document exactly as they are — no re-rendering, no recompression. Text stays selectable, links keep working, and rotations are written as standard page metadata.',
        },
        {
          question: 'Is there a limit on file size or page count?',
          answer:
            'Files up to 100 MB are supported (50 MB on mobile), with no page limit. For very long documents the page previews are rendered in batches, so the tool stays responsive.',
        },
      ],
    },
    'pdf-to-jpg': {
      metaTitle: 'PDF to JPG Converter — Free, Local, No Upload | CoolPDF',
      metaDescription:
        'Turn PDF pages into JPG or PNG images at 72, 150, or 300 DPI — right in your browser. Files never leave your device. Free, no sign-up.',
      heading: 'PDF to JPG',
      intro:
        'Convert PDF pages into high-quality JPG or PNG images. Choose the resolution and the pages you need — the conversion runs entirely on your device.',
      button: 'Convert to images',
      formatLabel: 'Image format',
      formatJpg: 'JPG — smaller files',
      formatPng: 'PNG — lossless, larger files',
      dpiLabel: 'Resolution',
      dpiHint:
        '300 DPI produces very large images and can be slow and memory-hungry on long documents.',
      scopeLabel: 'Pages',
      scopeAll: 'All pages',
      scopeCustom: 'Selected pages',
      pagesPlaceholder: 'e.g. 1-3, 5',
      renderingProgress: 'Rendering page {current} of {total}…',
      stepsHeading: 'How to convert PDF to JPG',
      steps: [
        'Add the PDF you want to convert by dragging it onto the upload area, or click to browse.',
        'Choose the image format — JPG for small files, PNG for lossless quality — and the resolution: 72 DPI for screen use, 150 for documents, 300 for print.',
        'Convert all pages or enter a range like 1-3, 5, then click "Convert to images".',
        'Download the result — a single image if you converted one page, otherwise a ZIP archive with one image per page.',
      ],
      privacyHeading: 'Rasterize pages without handing over the document',
      privacyText:
        'Turning a PDF into images usually means the document is headed somewhere visual — a presentation, a messaging app, an upload form that only accepts pictures. Invoices, certificates, and official letters often take this route. With a typical online converter, the whole document is uploaded first and the images come back from a server you know nothing about. CoolPDF renders the pages right in your browser tab, using the same class of PDF engine that powers desktop readers. The file never crosses the network: it is read from your disk, rasterized by your device, and saved back to it. There is nothing to intercept, log, or leak — which also means the tool keeps working on a plane, in a factory, or anywhere else without a connection.',
      faqHeading: 'Frequently asked questions',
      faq: [
        {
          question: 'Which DPI should I choose?',
          answer:
            '72 DPI matches the PDF’s screen size and is fine for web use. 150 DPI is a good middle ground for documents. 300 DPI is print quality — sharp, but the images get large and rendering takes longer.',
        },
        {
          question: 'Why do I get a ZIP file?',
          answer:
            'Each PDF page becomes its own image. When more than one page is converted, all images are packed into a single ZIP archive so you get one tidy download.',
        },
        {
          question: 'Does converting to JPG lose quality?',
          answer:
            'JPG uses light compression (92% quality), which is visually indistinguishable from the original for documents and photos. Choose PNG if you need pixel-perfect, lossless output.',
        },
      ],
    },
  },
};

export type Dictionary = typeof en;
