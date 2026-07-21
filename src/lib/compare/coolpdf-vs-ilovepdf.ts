import type { Compare } from './types';

export const coolpdfVsIlovepdf: Compare = {
  slug: 'coolpdf-vs-ilovepdf',
  competitor: 'iLovePDF',
  title: 'CoolPDF vs iLovePDF: Privacy, Limits, and Price | CoolPDF',
  description:
    'iLovePDF uploads your files to its servers and limits the free tier; CoolPDF processes everything locally in your browser — free, unlimited, no account.',
  verdict:
    'iLovePDF is the biggest name in online PDF tools, and it works by uploading your documents to its servers; the free tier caps batch sizes and Premium starts around $4 per month. CoolPDF does the same core jobs — merge, split, compress, protect — entirely inside your browser. Your files never leave your device, there is no account, no task limit, and no watermark, and the code is open source so the privacy claim is auditable.',
  rows: [
    {
      feature: 'Where files are processed',
      coolpdf: 'On your device (WebAssembly in the browser)',
      them: 'Uploaded to iLovePDF servers',
    },
    {
      feature: 'Account required',
      coolpdf: 'Never',
      them: 'Not for basic use, but needed to manage limits',
    },
    {
      feature: 'Task and file limits',
      coolpdf: 'No task limits (device memory caps file size)',
      them: 'Free tier limits batch sizes and file counts per task',
    },
    {
      feature: 'Price',
      coolpdf: 'Free, supported by unobtrusive ads',
      them: 'Free tier + Premium from around $4/month',
    },
    {
      feature: 'Works offline',
      coolpdf: 'Yes — after the page loads, tools keep working',
      them: 'No — uploads require a connection',
    },
    {
      feature: 'Privacy model',
      coolpdf: 'Files never leave your device; open source (AGPL-3.0)',
      them: 'Files deleted from servers within two hours (per their policy)',
    },
    {
      feature: 'Tool count',
      coolpdf: '17 tools, including Office-to-Markdown converters',
      them: '30+ tools, including PDF to Word, e-sign, and OCR',
    },
  ],
  factChecked: 'Fact checked on July 21, 2026',
  sources: [
    { label: 'iLovePDF Premium pricing', url: 'https://www.ilovepdf.com/premium' },
    { label: 'iLovePDF homepage', url: 'https://www.ilovepdf.com/' },
  ],
  theirStrengths: [
    'More tools overall: PDF to Word with layout reconstruction, OCR for scanned documents, and e-signatures — none of which CoolPDF currently offers.',
    'Mobile apps and a developer API for server-side automation.',
    'Server processing has no browser memory ceiling, so very large or very many files are less of an issue.',
  ],
  faqs: [
    {
      q: 'Is iLovePDF safe for confidential documents?',
      a: 'iLovePDF states that uploaded files are deleted from their servers within two hours and are not analyzed. Many people are comfortable with that — but your documents still pass through someone else’s infrastructure. CoolPDF removes the question entirely: processing happens on your own device, so nothing is transmitted in the first place.',
    },
    {
      q: 'Why is CoolPDF free when iLovePDF charges for premium?',
      a: 'Local processing costs us nothing per task — your device does the work. That removes the main reason online tools put limits behind a paywall. CoolPDF is supported by unobtrusive ads instead of subscriptions.',
    },
    {
      q: 'When should I choose iLovePDF instead?',
      a: 'If you need PDF to Word conversion, OCR for scanned documents, e-signatures, server-side automation via an API, or processing of files too large for browser memory (roughly over 100 MB), iLovePDF is the more complete option today.',
    },
  ],
};
