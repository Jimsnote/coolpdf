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
};

export type Dictionary = typeof en;
