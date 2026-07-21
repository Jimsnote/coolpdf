import type { Compare } from './types';

export const coolpdfVsSmallpdf: Compare = {
  slug: 'coolpdf-vs-smallpdf',
  competitor: 'Smallpdf',
  title: 'CoolPDF vs Smallpdf: Free Limits Compared | CoolPDF',
  description:
    'Smallpdf limits free use to 2 tasks per day and uploads files; CoolPDF has no daily limit and processes everything locally in your browser — free, no account.',
  verdict:
    'Smallpdf is a polished, popular PDF tool, but its free plan allows only two tasks per day and requires uploading your documents to its servers; Pro starts at around $12 per month. CoolPDF imposes no daily task limit at all and never asks for an account, because it runs every tool locally in your browser. For high-frequency, everyday PDF work, CoolPDF is the less restricted and more private choice.',
  rows: [
    {
      feature: 'Where files are processed',
      coolpdf: 'On your device (WebAssembly in the browser)',
      them: 'Uploaded to Smallpdf servers',
    },
    {
      feature: 'Daily task limit',
      coolpdf: 'None',
      them: '2 tasks per day on the free plan',
    },
    {
      feature: 'Price',
      coolpdf: 'Free, supported by unobtrusive ads',
      them: 'Free plan + Pro from around $12/month',
    },
    {
      feature: 'Account required',
      coolpdf: 'Never',
      them: 'Needed to track your daily free usage',
    },
    {
      feature: 'Works offline',
      coolpdf: 'Yes — tools keep working after the page loads',
      them: 'No — uploads require a connection',
    },
    {
      feature: 'Privacy model',
      coolpdf: 'Files never leave your device; open source (AGPL-3.0)',
      them: 'Files deleted after a short retention window (per their policy)',
    },
    {
      feature: 'Standout extras',
      coolpdf: 'Organize pages visually, Office to Markdown, open-source code',
      them: 'E-signatures, AI document summaries, desktop and mobile apps',
    },
  ],
  factChecked: 'Fact checked on July 21, 2026',
  sources: [
    { label: 'Smallpdf Pro pricing', url: 'https://smallpdf.com/pro' },
    { label: 'Smallpdf homepage', url: 'https://smallpdf.com/' },
  ],
  theirStrengths: [
    'E-signatures with a guided signing flow, which CoolPDF does not offer.',
    'AI features like document summarization and chat-with-PDF.',
    'Native desktop and mobile apps for offline and on-the-go use.',
  ],
  faqs: [
    {
      q: 'Is the 2-tasks-per-day limit real?',
      a: 'Yes. Smallpdf’s pricing page lists the free plan as limited to two documents per day; hitting the cap means waiting until the next day or upgrading to Pro. CoolPDF has no equivalent cap — you can run the tools as many times as you like, because the work happens on your device rather than on rented servers.',
    },
    {
      q: 'Which is better for sensitive files?',
      a: 'Smallpdf states that files are transferred over TLS and deleted after a short retention window. That is reasonable for many documents — but if the file is a contract, medical record, or financial statement, the safest option is not sending it anywhere at all, which is exactly how CoolPDF works.',
    },
    {
      q: 'When is Smallpdf worth paying for?',
      a: 'If you regularly need e-signatures, AI summaries, or native apps with offline workflows, Smallpdf Pro is a fair price. If your work is mostly merging, splitting, compressing, converting, and protecting PDFs, CoolPDF covers it free without limits.',
    },
  ],
};
