import type { Guide } from './types';

/**
 * Facts below were checked against components/tools/DocxToMarkdownTool.tsx and
 * the toolPages dictionary entry — keep them in sync.
 */
export const howToConvertDocxToMarkdown: Guide = {
  slug: 'how-to-convert-docx-to-markdown',
  toolSlug: 'docx-to-markdown',
  title: 'How to Convert Word (DOCX) to Markdown — Free, Local',
  description:
    'Step-by-step: convert .docx to clean Markdown — headings, lists, tables, bold and italic preserved — locally in your browser. Free, no upload, no sign-up.',
  intro:
    'The easiest way to convert a Word document to Markdown is to do it locally in your browser: open the free [CoolPDF Word to Markdown tool](/docx-to-markdown/), drop in a .docx file, click Convert to Markdown, and download the result as download.md. Headings, lists, tables, bold, italic, and links are preserved as their Markdown equivalents, and everything runs on your own device — the document is never uploaded, and no account is needed.',
  quickSteps: [
    'Open the Word to Markdown tool and drop in a .docx file (older .doc files must be saved as .docx first).',
    'Click "Convert to Markdown" — the document is parsed and rebuilt locally in your browser, usually in seconds.',
    'Click Download on the result card to save the file as download.md.',
    'Paste it into Obsidian, a wiki, a GitHub README, or your AI assistant.',
  ],
  sections: [
    {
      heading: 'Step-by-step: converting with CoolPDF',
      paragraphs: [
        'Open the [Word to Markdown tool](/docx-to-markdown/) — nothing to install, no account to create. Drag a .docx file onto the upload area, or click it to pick one from a file dialog.',
        'Click "Convert to Markdown". The document is read and restructured right in your browser tab — how long it takes depends on the document, not your connection.',
        'When the download card appears, click Download. The result is saved as download.md, and the original .docx is never modified.',
      ],
      bullets: [
        'One .docx file per conversion',
        'Legacy .doc is not supported — save as .docx first',
        'Output is always saved as download.md',
        'The original document is never modified',
      ],
    },
    {
      heading: 'What survives the conversion — and what gets simplified',
      paragraphs: [
        'The converter maps Word structure to Markdown structure: headings keep their levels (#, ##, ###), bullet and numbered lists stay lists, tables become GitHub-flavored Markdown tables, and bold, italic, and links carry over directly.',
        'Word features that have no Markdown equivalent are simplified, not lost: text boxes, multi-column layouts, and floating images are flattened into plain reading order, so the text always arrives in a sensible sequence. One deliberate limit: embedded images are not extracted — the .md file is text only.',
      ],
    },
    {
      heading: 'Why Markdown — and why locally',
      paragraphs: [
        'Markdown is the common tongue of modern writing tools: Obsidian vaults, Notion imports, wikis, GitHub READMEs, static site generators. It is also the format AI assistants read best — pasting Markdown into ChatGPT or Claude preserves the document’s structure instead of handing over a wall of unformatted text.',
        'And those are exactly the files you least want on a random server: internal reports, draft contracts, meeting notes, unpublished manuscripts. CoolPDF does the conversion where the file already is — your browser reads the .docx and writes the .md to disk, with nothing transmitted in between. Close the tab and no trace remains.',
      ],
    },
    {
      heading: 'Combining the conversion with other tools',
      paragraphs: [
        'Need the same treatment for a spreadsheet? [Excel to Markdown](/xlsx-to-markdown/) turns every sheet into a Markdown table. Working from a PDF instead of Word? [PDF to Markdown](/pdf-to-markdown/) extracts and structures its text layer the same way.',
        'If your source is a Google Doc, export it first (File → Download → Microsoft Word .docx), then convert the downloaded file here.',
      ],
    },
  ],
  alternatives: [
    {
      heading: 'Save as plain text from Word or LibreOffice',
      paragraphs: [
        'Every word processor can save a document as a .txt file. It is free and offline, but the output is structureless: headings, lists, and tables all become flat text that you rebuild by hand. Fine for a paragraph; for a whole document, CoolPDF’s structure preservation saves real time.',
      ],
    },
    {
      heading: 'Pandoc on the command line',
      paragraphs: [
        'Pandoc converts .docx to Markdown natively (`pandoc report.docx -o report.md`) and is the right tool if you are scripting batch conversions. The trade-offs are the install, the command line, and occasional quirks with complex tables. For a one-off conversion in the browser, CoolPDF needs nothing but the file.',
      ],
    },
    {
      heading: 'Online converters and AI assistants',
      paragraphs: [
        'Cloud converters and chat-based assistants will turn an uploaded .docx into Markdown, sometimes with heavy cleanup. The costs are the upload itself, free-tier size caps, and accounts or daily quotas. For a public document that may be fine; for anything confidential, a local tool that never transmits the file is the safer default.',
      ],
    },
  ],
  edgeCases: [
    {
      heading: 'Your file is .doc, not .docx',
      paragraphs: [
        'The tool reads only the modern .docx format. Open older .doc files in Word or LibreOffice and use Save As → .docx, then convert the new file.',
      ],
    },
    {
      heading: 'Tracked changes and comments',
      paragraphs: [
        'The converter reads the document text as stored in the file. For the cleanest output from a heavily reviewed document, accept or reject tracked changes and resolve comments in Word first, then convert.',
      ],
    },
    {
      heading: 'Complex layouts come out simplified',
      paragraphs: [
        'Magazine-style pages with text boxes, columns, and floating images are flattened into plain reading order. The wording is all there; if the order matters, give the output a quick skim and move the occasional paragraph.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is converting Word to Markdown with CoolPDF free?',
      a: 'Yes — every CoolPDF tool is free forever, with no watermarks, daily quotas, or premium tier. The conversion runs on your own device, so there is no server bill to pass on.',
    },
    {
      q: 'What formatting is preserved?',
      a: 'Headings, bullet and numbered lists, tables, bold, italic, and links are converted to their Markdown equivalents. Complex layout (text boxes, columns, floating images) is simplified to reading order, and embedded images are not extracted.',
    },
    {
      q: 'Does it work with .doc files?',
      a: 'No — only the modern .docx format is supported. Open older .doc files in Word or LibreOffice and save them as .docx first.',
    },
    {
      q: 'What can I use the Markdown for?',
      a: 'Obsidian, Notion, wikis, GitHub READMEs, static site generators, and as clean input for ChatGPT, Claude, and other AI tools — Markdown is the format they read best.',
    },
    {
      q: 'Is it safe to convert confidential documents here?',
      a: 'Yes. The file is read and converted entirely in your browser and never uploaded anywhere. Disconnect from the internet after the page loads and it still works; closing the tab removes every trace.',
    },
  ],
  related: ['how-to-convert-xlsx-to-markdown', 'how-to-convert-pdf-to-markdown', 'how-to-merge-pdf'],
};
