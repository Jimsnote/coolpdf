import type { ReactNode } from 'react';
import { Lock } from 'lucide-react';

interface ToolShellProps {
  title: string;
  intro: string;
  /** Fixed privacy line shown directly under the upload area. */
  privacyNote: string;
  /** Upload area (FileDropzone plus any file list). */
  upload: ReactNode;
  /** Tool-specific options (modes, angles, selects). */
  options?: ReactNode;
  /** The process button. */
  action: ReactNode;
  /** Progress / error feedback. */
  status?: ReactNode;
  /** Result download card. */
  result?: ReactNode;
}

/**
 * Shared layout for every tool page's interactive block: H1 + intro, upload
 * area, a fixed privacy note, then slots for options, the action button,
 * status messages, and the result card.
 */
export function ToolShell({
  title,
  intro,
  privacyNote,
  upload,
  options,
  action,
  status,
  result,
}: ToolShellProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
      <p className="mt-3 leading-relaxed text-slate-600">{intro}</p>

      <div className="mt-8">{upload}</div>
      <p className="mt-4 flex items-center gap-2 text-sm text-slate-500">
        <Lock className="h-4 w-4 shrink-0 text-brand-600" aria-hidden />
        {privacyNote}
      </p>

      {options ? <div className="mt-6">{options}</div> : null}
      <div className="mt-6">{action}</div>
      {status ? <div className="mt-4">{status}</div> : null}
      {result ? <div className="mt-6">{result}</div> : null}
    </section>
  );
}
