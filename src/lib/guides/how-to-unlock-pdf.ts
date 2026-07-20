import type { Guide } from './types';

/**
 * Facts below were checked against components/tools/UnlockPdfTool.tsx,
 * lib/pdf/protect.ts and workers/pdf-heavy.worker.ts — keep them in sync.
 */
export const howToUnlockPdf: Guide = {
  slug: 'how-to-unlock-pdf',
  toolSlug: 'unlock-pdf',
  title: 'How to Unlock a PDF You Have the Password To',
  description:
    'Step-by-step: remove a PDF password in your browser — the file and password never leave your device. Free, no sign-up; download the result as unlocked.pdf.',
  intro:
    'The fastest way to unlock a PDF you have the password to is to remove the protection right in your browser: open the free [CoolPDF Unlock PDF tool](/unlock-pdf/), drop in the protected file, type its password, click Unlock PDF, and download the result as unlocked.pdf. The decryption runs locally on your device — the document and the password never leave your computer, and there is no account, no queue, and no watermark.',
  quickSteps: [
    'Open the Unlock PDF tool and drag the protected PDF onto the upload area — or click it to browse. One file at a time, up to 100 MB on desktop (50 MB on mobile).',
    'Type the document\u2019s password into "Current password (if needed)". If the PDF opens without one but blocks printing or copying, leave the field blank.',
    'Click "Unlock PDF". The protection is removed locally, usually in seconds; the first run downloads a ~1.2 MB engine that is cached afterwards.',
    'Click "Download" to save the result as unlocked.pdf. It now opens in any reader without a password; the original file stays untouched.',
  ],
  sections: [
    {
      heading: 'Step-by-step: unlocking a PDF with CoolPDF',
      paragraphs: [
        'Open the [Unlock PDF tool](/unlock-pdf/) — nothing to install, no account. Drag the protected PDF onto the upload area, or click it to browse. The amber reminder is worth reading once: only unlock PDFs you own or have permission to modify.',
        'Type the password you use to open the document — or, if the file opens fine but refuses to print or copy, leave the field blank: CoolPDF tries an empty password first, which is what those restriction-only files accept. A wrong password brings up "The password is incorrect. Please try again." — retry without re-adding the file.',
        'Click "Unlock PDF". Decryption runs in a background worker, so the page stays responsive; the first use downloads about 1.2 MB of engine, cached afterwards. When the download card appears, save the result — always unlocked.pdf. The original file is never modified.',
      ],
      bullets: [
        'One PDF per run, up to 100 MB on desktop, 50 MB on mobile',
        'Password field can stay blank for restriction-only files',
        'Output is always saved as unlocked.pdf',
      ],
      image: {
        src: '/guides/how-to-unlock-pdf/step-1.png',
        alt: 'The CoolPDF Unlock PDF tool with a protected bank statement added, showing the "Current password (if needed)" field filled in and the Unlock PDF button below it.',
      },
    },
    {
      heading: 'Unlocking bank statements without handing over the password',
      paragraphs: [
        'The PDFs people unlock are usually the sensitive ones: bank statements, payslips, tax drafts. A conventional online unlocker asks you to upload the still-protected file and type its password into someone else\u2019s web form — the two things that should never travel together, sent together.',
        'CoolPDF removes protection where the file already lives: the document is read from your own disk, decrypted with the password you type locally, and saved straight back — no upload, no password log, no copy left behind. You can even disconnect after the page loads and keep unlocking. Close the tab, and no trace of the file or the password remains.',
      ],
    },
    {
      heading: 'What unlocking removes — and what it leaves alone',
      paragraphs: [
        'An encrypted PDF can carry two protections at once: an open password that gates the document, and permission flags that block printing, copying, or editing. Unlocking strips the whole encryption layer in one pass — the saved copy opens without a password and carries no restrictions.',
        'Everything else stays as it was — pages, text, images, annotations, and bookmarks are not re-rendered or recompressed, and the output opens in any reader. To protect it again later with a stronger password, run it through [Protect PDF](/protect-pdf/) and pick your own.',
      ],
    },
    {
      heading: 'What to do with the unlocked copy',
      paragraphs: [
        'A locked PDF refuses to cooperate with other tools — you cannot merge a protected statement into a tax dossier or shrink a protected scan for email. Once unlocked, those jobs open up: combine files in [Merge PDF](/merge-pdf/), or extract the pages you need with [Split PDF](/split-pdf/).',
        'If the unlocked copy is headed for an inbox, [Compress PDF](/compress-pdf/) brings it to attachment-friendly sizes. For a contract about to circulate, [Watermark PDF](/watermark-pdf/) and [Page Numbers](/page-numbers/) finish the job in the same tab.',
      ],
      image: {
        src: '/guides/how-to-unlock-pdf/step-2.png',
        alt: 'The download card shown after a successful unlock, displaying the unlocked.pdf file name, the output file size, and the Download button.',
      },
    },
  ],
  alternatives: [
    {
      heading: 'macOS Preview',
      paragraphs: [
        'On a Mac, open the locked PDF in Preview, enter the password, then File → Export as PDF saves an unprotected copy. Free, built in, and offline — but macOS-only, and the export re-saves the whole document rather than just lifting the encryption. CoolPDF gives the same offline privacy in any browser, on any OS.',
      ],
    },
    {
      heading: 'The Chrome print workaround',
      paragraphs: [
        'Open the PDF in Chrome, enter the password, press Ctrl+P (Cmd+P on a Mac), and "Save as PDF". It costs nothing, but printing re-renders the document — form fields are flattened, and links or bookmarks can be lost. CoolPDF removes only the encryption and leaves the file itself untouched.',
      ],
    },
    {
      heading: 'Adobe Acrobat (paid)',
      paragraphs: [
        'In Acrobat Pro you enter the password and set the security method to "No Security". It needs a subscription and an install or Adobe account, and the web version uploads both file and password to Adobe\u2019s servers. If you already pay for Acrobat it is excellent; otherwise a free browser tool covers the same ground with no install, account, or upload.',
      ],
    },
  ],
  edgeCases: [
    {
      heading: 'The PDF opens fine, but printing or copying is blocked',
      paragraphs: [
        'That is a restriction-only file: an owner password with no open password, so any reader can display it. Leave the password field blank and click Unlock PDF — the tool tries an empty password first, which is what these files accept — and the unlocked copy prints and copies normally. (If you see "This PDF is not password-protected, so there is nothing to unlock," the file was never encrypted.)',
      ],
    },
    {
      heading: '"The password is incorrect. Please try again."',
      paragraphs: [
        'Check the mundane culprits first: caps lock, wrong keyboard layout, or a trailing space pasted from an email. Fix it and retry — the file stays loaded. If the password is truly forgotten, there is no legitimate way back: CoolPDF is not a password cracker, and AES-256 cannot realistically be guessed. Ask the sender or your bank for an unprotected copy.',
      ],
    },
    {
      heading: 'The file is over the size limit',
      paragraphs: [
        'Unlocking holds the whole document in your device\u2019s memory, hence the 100 MB desktop / 50 MB mobile limit. For oversized files, the free qpdf command line does the same job offline with no size cap: qpdf --decrypt --password=YOURS in.pdf out.pdf — the same qpdf CoolPDF compiles to WebAssembly.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is unlocking a PDF with CoolPDF really free?',
      a: 'Yes — free forever, no daily quotas, watermarks, or premium tiers. The decryption runs on your own device, so there is no server bill to pass on.',
    },
    {
      q: 'I forgot the password. Can CoolPDF crack it?',
      a: 'No. CoolPDF removes protection only when you know the current password — it is not a cracking tool, and AES-256 cannot realistically be guessed. Ask the sender for an unprotected copy.',
    },
    {
      q: 'Is it legal to unlock a PDF?',
      a: 'Yes — for documents you own or have permission to modify, like your own archived statements. Removing protection from files you have no rights to may violate law or contracts.',
    },
    {
      q: 'Is it safe to unlock confidential documents here?',
      a: 'Yes. The file is decrypted locally in your browser; neither the document nor the password is ever sent anywhere. Disconnect after the page loads and it still works; closing the tab removes every trace.',
    },
    {
      q: 'Will unlocking change the document?',
      a: 'No. Only the encryption layer is removed — every page, image, annotation, and bookmark stays exactly as it was, and the unlocked file opens in any PDF reader.',
    },
  ],
  related: ['how-to-password-protect-pdf', 'how-to-merge-pdf', 'how-to-compress-pdf'],
};
