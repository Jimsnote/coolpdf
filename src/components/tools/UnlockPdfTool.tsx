'use client';

import { useEffect, useState } from 'react';
import { FileText, Loader2, ShieldAlert, Trash2 } from 'lucide-react';
import type { Dictionary } from '@/i18n/locales/en';
import { unlockPdf } from '@/lib/pdf/protect';
import type { HeavyProgress } from '@/lib/pdf/heavy-worker';
import { FileDropzone } from './FileDropzone';
import { ToolShell } from './ToolShell';
import { DownloadCard, formatBytes } from './DownloadCard';
import { EngineStatus } from './EngineStatus';
import { pdfBlob } from './blob';
import { toolErrorMessage } from './tool-error';

interface UnlockPdfToolProps {
  dict: Dictionary;
}

interface Result {
  name: string;
  size: number;
  url: string;
}

const MAX_SIZE_BYTES = 100 * 1024 * 1024;
const MOBILE_MAX_BYTES = 50 * 1024 * 1024;
/** Approximate qpdf wasm size, shown in the first-run download note. */
const ENGINE_SIZE_MB = '1.2';

export function UnlockPdfTool({ dict }: UnlockPdfToolProps) {
  const ui = dict.toolUi;
  const copy = dict.toolPages['unlock-pdf'];
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState('');
  const [maxSizeBytes, setMaxSizeBytes] = useState(MAX_SIZE_BYTES);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState<HeavyProgress | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    if (/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
      setMaxSizeBytes(MOBILE_MAX_BYTES);
    }
  }, []);

  useEffect(() => {
    if (!result) return undefined;
    return () => URL.revokeObjectURL(result.url);
  }, [result]);

  async function process() {
    if (!file || password.length === 0) return;
    setBusy(true);
    setError(null);
    setResult(null);
    setProgress(null);
    try {
      const bytes = new Uint8Array(await file.arrayBuffer());
      const output = await unlockPdf(bytes, password, setProgress);
      const blob = pdfBlob(output);
      setResult({ name: 'unlocked.pdf', size: blob.size, url: URL.createObjectURL(blob) });
    } catch (err) {
      setError(toolErrorMessage(err, dict));
    } finally {
      setBusy(false);
      setProgress(null);
    }
  }

  return (
    <ToolShell
      title={copy.heading}
      intro={copy.intro}
      privacyNote={ui.privacyNote}
      upload={
        <>
          <FileDropzone
            accept="pdf"
            multiple={false}
            maxFiles={1}
            currentCount={file ? 1 : 0}
            maxSizeBytes={maxSizeBytes}
            onFiles={(files) => {
              setError(null);
              setResult(null);
              setFile(files[0] ?? null);
            }}
            dict={dict}
          />
          {file ? (
            <div className="mt-4 flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5">
              <FileText className="h-5 w-5 shrink-0 text-brand-600" aria-hidden />
              <span className="min-w-0 flex-1 truncate text-sm text-slate-700">
                {file.name}
                <span className="ml-2 whitespace-nowrap text-xs text-slate-400">
                  {formatBytes(file.size)}
                </span>
              </span>
              <button
                type="button"
                aria-label={`${ui.remove}: ${file.name}`}
                disabled={busy}
                onClick={() => setFile(null)}
                className="rounded p-1.5 text-slate-500 hover:bg-slate-100 hover:text-red-600 disabled:opacity-30"
              >
                <Trash2 className="h-4 w-4" aria-hidden />
              </button>
            </div>
          ) : null}
        </>
      }
      options={
        <div className="space-y-4">
          <p className="flex items-start gap-2 rounded-lg bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">
            <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            {copy.legalNote}
          </p>
          <label className="block text-sm font-semibold text-slate-900">
            {copy.passwordLabel}
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="off"
              className="mt-1.5 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-normal text-slate-700 focus:border-brand-500 focus:outline-none sm:max-w-sm"
            />
          </label>
        </div>
      }
      action={
        <button
          type="button"
          onClick={process}
          disabled={busy || !file || password.length === 0}
          className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {busy ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden /> : null}
          {busy ? ui.processing : copy.button}
        </button>
      }
      status={
        <>
          {progress ? (
            <EngineStatus progress={progress} dict={dict} engineSizeMb={ENGINE_SIZE_MB} />
          ) : null}
          {error ? (
            <p role="alert" className="mt-3 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          ) : null}
        </>
      }
      result={
        result ? (
          <DownloadCard
            fileName={result.name}
            sizeBytes={result.size}
            url={result.url}
            title={ui.readyTitle}
            downloadLabel={ui.download}
          />
        ) : undefined
      }
    />
  );
}
