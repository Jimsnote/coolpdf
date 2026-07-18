import Link from 'next/link';

/**
 * Shared 404 content for both route groups' not-found pages. Kept in English:
 * a not-found page receives no params, so the locale is unknown here.
 */
export function NotFoundContent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <p className="text-6xl font-extrabold text-brand-600">404</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-2 text-slate-600">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
      >
        Back to CoolPDF home
      </Link>
    </div>
  );
}
