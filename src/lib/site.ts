/** Central, overridable site constants. */
export const SITE_NAME = 'CoolPDF';

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://getcoolpdf.com'
).replace(/\/$/, '');

export const GITHUB_URL =
  process.env.NEXT_PUBLIC_GITHUB_URL ?? 'https://github.com/Jimsnote/coolpdf';

export const CONTACT_EMAIL = 'support@getcoolpdf.com';

export const CF_ANALYTICS_TOKEN = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN ?? '';

// Microsoft Clarity project id. Defaults to the production id so it is active
// on the next build with zero config; set the env var to an empty string to
// disable, or to another id for a staging project.
export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID ?? 'xzj4thwgf2';

export const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? '';
