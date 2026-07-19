import type { Guide } from './types';
import { howToMergePdf } from './how-to-merge-pdf';

/**
 * Central guide registry, in display order. Guides are English-only and are
 * rendered at /guides/<slug>/; the sitemap and both guide routes derive from
 * this list, so adding a guide here is enough to publish it.
 */
export const guides: Guide[] = [howToMergePdf];

/** Looks up a guide by its URL slug. */
export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

/** Finds the guide attached to a tool, if one has been written for it. */
export function getGuideForTool(toolSlug: string): Guide | undefined {
  return guides.find((guide) => guide.toolSlug === toolSlug);
}
