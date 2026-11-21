/**
 * Client-side tool usage tracking via localStorage.
 *
 * Every time a user opens a tool page, we increment a per-slug counter.
 * The data is stored in localStorage under "kh-tool-visits" as a JSON
 * object mapping slug → visit count.
 *
 * For sorting, real visit counts are blended with curated baseline scores
 * so that brand-new users still see a sensible default order.
 */

const STORAGE_KEY = "kh-tool-visits";

/** Read all visit counts from localStorage. */
export function getToolVisitCounts(): Record<string, number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // corrupted data — start fresh
  }
  return {};
}

/** Get the visit count for a single tool slug. */
export function getToolVisitCount(slug: string): number {
  return getToolVisitCounts()[slug] ?? 0;
}

/** Record a visit to a tool. Increments the counter by 1. */
export function recordToolVisit(slug: string): void {
  try {
    const counts = getToolVisitCounts();
    counts[slug] = (counts[slug] ?? 0) + 1;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(counts));
    // Dispatch event so any mounted components can react
    window.dispatchEvent(new Event("kh-tool-visits-updated"));
  } catch {
    // localStorage full or unavailable — silently ignore
  }
}

/**
 * Check whether the user has any recorded visits at all.
 * Used to decide whether to sort by real data or fall back to curated scores.
 */
export function hasAnyVisits(): boolean {
  const counts = getToolVisitCounts();
  return Object.values(counts).some((c) => c > 0);
}
