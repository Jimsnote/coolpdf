import type { Guide } from './types';

/**
 * Facts below were checked against components/tools/XlsxToMarkdownTool.tsx and
 * the toolPages dictionary entry — keep them in sync.
 */
export const howToConvertXlsxToMarkdown: Guide = {
  slug: 'how-to-convert-xlsx-to-markdown',
  toolSlug: 'xlsx-to-markdown',
  title: 'How to Convert Excel to Markdown Tables — Free, Local',
  description:
    'Step-by-step: convert .xlsx/.xls workbooks to Markdown tables — one section per sheet — locally in your browser. Free, no upload, no sign-up.',
  intro:
    'The quickest way to convert an Excel workbook to Markdown is to do it locally in your browser: open the free [CoolPDF Excel to Markdown tool](/xlsx-to-markdown/), drop in a .xlsx or .xls file, click Convert to Markdown, and download the result as download.md. Every non-empty sheet becomes a "## Sheet: <name>" section with a GitHub-flavored Markdown table, and everything runs on your own device — the workbook is never uploaded, and no account is needed.',
  quickSteps: [
    'Open the Excel to Markdown tool and drop in a .xlsx or .xls workbook.',
    'Click "Convert to Markdown" — every non-empty sheet is converted locally in your browser.',
    'Click Download on the result card to save the file as download.md.',
    'Each sheet appears as a Markdown table under its own "## Sheet: <name>" heading — paste them into docs, wikis, or an AI tool.',
  ],
  sections: [
    {
      heading: 'Step-by-step: converting with CoolPDF',
      paragraphs: [
        'Open the [Excel to Markdown tool](/xlsx-to-markdown/) — nothing to install, no account to create. Drag a workbook onto the upload area, or click it to pick one from a file dialog. Both modern .xlsx and legacy .xls files work.',
        'Click "Convert to Markdown". Every non-empty sheet in the workbook is read and rebuilt as a Markdown table, right in your browser tab.',
        'When the download card appears, click Download. The result is saved as download.md, and the original workbook is never modified.',
      ],
      bullets: [
        'Both .xlsx and .xls workbooks are supported',
        'Every non-empty sheet becomes its own table section',
        'Output is always saved as download.md',
        'The original workbook is never modified',
      ],
    },
    {
      heading: 'What the Markdown output looks like',
      paragraphs: [
        'Each sheet gets a "## Sheet: <name>" heading followed by a GitHub-flavored Markdown table. The first non-empty row of the sheet becomes the table header, and the rest of the rows follow as data rows — ready to render in GitHub, GitLab, Obsidian, or any Markdown viewer.',
        'Cells are exported with their computed values as stored in the file, not the formulas behind them. Merged regions keep their value in the top-left cell and come out empty elsewhere — which is usually what you want for section header rows. Formatting like colors, borders, and number styles does not carry over: Markdown tables are plain text, values only.',
      ],
    },
    {
      heading: 'Why tables-as-Markdown — and why locally',
      paragraphs: [
        'A Markdown table travels well: paste quarterly figures into a report, drop a price list into a wiki, or hand an entire budget to ChatGPT or Claude in a form they parse reliably — far better than a screenshot and far cheaper than re-typing. It is also diff-friendly, so spreadsheet data can finally live in version control.',
        'Spreadsheets tend to hold the numbers that matter most: budgets, payroll, client lists, financial models. Upload-based converters send all of that to someone else’s infrastructure first. CoolPDF reads the workbook and builds the Markdown entirely on your device — nothing is transmitted, and closing the tab removes every trace.',
      ],
    },
    {
      heading: 'Combining the conversion with other tools',
      paragraphs: [
        'Need the same treatment for a document? [Word to Markdown](/docx-to-markdown/) preserves headings, lists, and tables from .docx files, and [PDF to Markdown](/pdf-to-markdown/) does the same for a PDF’s text layer.',
        'Only one sheet of a big workbook matters? Convert everything anyway — the sheets arrive in separate sections, so deleting the ones you do not need takes seconds.',
      ],
    },
  ],
  alternatives: [
    {
      heading: 'Copy and paste from Excel',
      paragraphs: [
        'Selecting a range and pasting it into an editor gives you tab-separated text: the values arrive, but without the | --- | table markup you still do the table formatting by hand. For a handful of cells that is fine; for a whole workbook, CoolPDF writes the tables for you.',
      ],
    },
    {
      heading: 'Save as CSV, sheet by sheet',
      paragraphs: [
        'Excel can save any sheet as a CSV file — free and offline, but one sheet at a time, with no header conventions and no way to drop the result into a document as a rendered table. Markdown tables are one conversion away instead of one formatting session per sheet.',
      ],
    },
    {
      heading: 'Online converters',
      paragraphs: [
        'Cloud converters will turn an uploaded workbook into Markdown, often with limits on file size and rows. The real cost is the upload itself: financial models, payroll, and client lists are exactly the files that should not sit in someone else’s queue. A local tool that never transmits the file is the safer default.',
      ],
    },
  ],
  edgeCases: [
    {
      heading: 'The workbook uses formulas',
      paragraphs: [
        'Cells are exported with their computed values as stored in the file, not the formulas themselves. If a sheet was recently edited, save it in Excel first so the stored results are up to date, then convert.',
      ],
    },
    {
      heading: 'Merged cells and nested headers',
      paragraphs: [
        'Merged regions keep their value in the top-left cell; the rest of the merged cells come out empty. Multi-row headers flatten into a single header row — for heavily structured reports, expect a minute of tidying rather than a perfect mirror.',
      ],
    },
    {
      heading: 'Very wide sheets',
      paragraphs: [
        'Markdown tables scale to many columns, but a 40-column sheet is unwieldy in any text format. Consider copying only the key columns into a new sheet before converting, so the output stays readable.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is converting Excel to Markdown with CoolPDF free?',
      a: 'Yes — every CoolPDF tool is free forever, with no watermarks, daily quotas, or premium tier. The conversion runs on your own device, so there is no server bill to pass on.',
    },
    {
      q: 'How are sheets handled?',
      a: 'Every non-empty sheet becomes a "## Sheet: <name>" section with a GitHub-flavored Markdown table. The first non-empty row becomes the table header.',
    },
    {
      q: 'Are formulas converted?',
      a: 'Cells are exported with their computed values as stored in the file, not the formulas themselves.',
    },
    {
      q: 'What about .xls files?',
      a: 'Both modern .xlsx and legacy .xls workbooks are supported.',
    },
    {
      q: 'Is it safe to convert confidential spreadsheets here?',
      a: 'Yes. The workbook is read and converted entirely in your browser and never uploaded anywhere. Disconnect from the internet after the page loads and it still works; closing the tab removes every trace.',
    },
  ],
  related: ['how-to-convert-docx-to-markdown', 'how-to-convert-pdf-to-markdown', 'how-to-compress-pdf'],
};
