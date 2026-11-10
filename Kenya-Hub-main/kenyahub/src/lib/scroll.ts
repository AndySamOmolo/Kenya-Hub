/**
 * Shared scroll helpers:
 * - `scrollToPageTop()`: Used ONLY on actual route transitions (`ScrollReset.tsx`)
 *   or fullscreen lesson resets.
 * - `scrollToTopIfScrolled()`: Smart scroll clamp for in-page filters, tabs,
 *   and category pills. NEVER yanks the user to the top of the page (y = 0)
 *   when clicking controls in-place. Only adjusts scroll if the content height
 *   shrank so much that the interactive content is now above the viewport
 *   (preventing the user from being stranded down in the FAQ / Related Tools / Footer).
 * - `scrollToSectionIfNeeded(sectionId, offset)`: Smoothly aligns a specific
 *   in-page section (such as the dictionary category browser or paginated table)
 *   into view without jumping to the top of the page.
 */

export function scrollToPageTop(): void {
  if (typeof window === "undefined") return;

  const reset = () => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.scrollBehavior;
    const prevBody = body.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    body.style.scrollBehavior = "auto";

    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    html.scrollTop = 0;
    body.scrollTop = 0;

    const main = document.getElementById("main-content");
    if (main) main.scrollTop = 0;

    html.style.scrollBehavior = prevHtml;
    body.style.scrollBehavior = prevBody;
  };

  reset();
  requestAnimationFrame(reset);
  setTimeout(reset, 50);
}

export function scrollToTopIfScrolled(_threshold = 220): void {
  if (typeof window === "undefined") return;

  const clampIfStrandedBelowContent = () => {
    const container =
      document.getElementById("tool-interactive-content") ||
      document.getElementById("main-content");
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const navbarOffset = 76;

    // Only adjust scroll if the bottom of the interactive tool content has
    // collapsed above the upper viewport (meaning the user would otherwise be
    // stranded below the tool content in the FAQ / Related Tools / Footer).
    if (rect.bottom < Math.min(240, window.innerHeight * 0.4)) {
      const targetTop = Math.max(0, window.scrollY + rect.top - navbarOffset);
      window.scrollTo({ top: targetTop, behavior: "smooth" });
    }
  };

  requestAnimationFrame(() => {
    requestAnimationFrame(clampIfStrandedBelowContent);
  });
}

export function scrollToSectionIfNeeded(sectionId: string, offset = 80): void {
  if (typeof window === "undefined") return;

  const alignSection = () => {
    const el = document.getElementById(sectionId);
    if (!el) {
      scrollToTopIfScrolled();
      return;
    }
    const rect = el.getBoundingClientRect();
    // Scroll to the section header if it is scrolled off-screen above the navbar
    // or far below the current viewport (e.g. when switching from the bottom of
    // Browse Dictionaries into a specific language dictionary).
    if (rect.top < offset - 24 || rect.top > window.innerHeight * 0.75) {
      const targetY = Math.max(0, window.scrollY + rect.top - offset);
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  requestAnimationFrame(() => {
    requestAnimationFrame(alignSection);
  });
}
