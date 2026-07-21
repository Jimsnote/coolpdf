import type { Compare } from './types';

export const coolpdfVsSejda: Compare = {
  slug: 'coolpdf-vs-sejda',
  competitor: 'Sejda',
  title: 'CoolPDF vs Sejda: Which Free PDF Tool? | CoolPDF',
  description:
    'Sejda’s web tools are free for 3 tasks per hour and upload files; CoolPDF has no hourly limit and processes everything locally in your browser.',
  verdict:
    'Sejda offers capable web PDF tools with a free allowance of three tasks per hour, plus a paid desktop application for local processing. Its web tools upload your files for processing. CoolPDF sits between the two: unlimited like a desktop app, but with nothing to install — every tool runs locally in your browser, free, with no account.',
  rows: [
    {
      feature: 'Where files are processed',
      coolpdf: 'On your device (WebAssembly in the browser)',
      them: 'Uploaded for web tools; the desktop app processes locally (paid)',
    },
    {
      feature: 'Task limit',
      coolpdf: 'None',
      them: '3 tasks per hour on the free web plan',
    },
    {
      feature: 'Price',
      coolpdf: 'Free, supported by unobtrusive ads',
      them: 'Web Week Pass around $5; desktop app around $63/year',
    },
    {
      feature: 'Account required',
      coolpdf: 'Never',
      them: 'Not for the free web tier; needed for purchases',
    },
    {
      feature: 'Privacy model',
      coolpdf: 'Files never leave your device; open source (AGPL-3.0)',
      them: 'Web uploads deleted after two hours; desktop stays on your machine',
    },
    {
      feature: 'Works offline',
      coolpdf: 'Yes — after the page loads',
      them: 'Web tools no; desktop app yes',
    },
    {
      feature: 'Notable tools',
      coolpdf: 'Organize pages visually, Office to Markdown, extract images',
      them: 'Inline PDF text editing, forms, Bates numbering',
    },
  ],
  factChecked: 'Fact checked on July 21, 2026',
  sources: [
    { label: 'Sejda pricing', url: 'https://www.sejda.com/pricing' },
    { label: 'Sejda homepage', url: 'https://www.sejda.com/' },
  ],
  theirStrengths: [
    'Real inline PDF text editing — changing existing text in a PDF — which almost no free tool, including CoolPDF, attempts.',
    'Form filling, form flattening, and Bates numbering for legal workflows.',
    'A paid desktop app for people who want Sejda’s wider toolset with local-only processing.',
  ],
  faqs: [
    {
      q: 'Sejda’s desktop app is local too — why use CoolPDF?',
      a: 'Sejda Desktop is a legitimate local option, but it is paid and requires installation on each machine. CoolPDF gives you the same “never uploaded” guarantee in any browser, on any device, free, with nothing to install — handy on a work laptop or a shared computer.',
    },
    {
      q: 'What does the 3-tasks-per-hour limit mean in practice?',
      a: 'On Sejda’s free web plan you can process up to three documents per hour; heavier use means waiting or buying a pass. CoolPDF has no hourly or daily quotas at all.',
    },
    {
      q: 'When should I pick Sejda?',
      a: 'When you need to edit the existing text inside a PDF, fill or flatten forms, or add Bates numbers — those are Sejda’s genuine strengths and CoolPDF does not cover them today.',
    },
  ],
};
