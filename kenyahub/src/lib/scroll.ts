/**
 * Shared scroll-reset helpers to ensure in-page view switches, tab changes,
 * dictionary browsing, and route transitions never leave the viewport stranded
 * at the bottom of the page (e.g. on Related Tools or Footer).
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

export function scrollToTopIfScrolled(threshold = 220): void {
  if (typeof window === "undefined") return;
  const currentY =
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  if (currentY > threshold) {
    scrollToPageTop();
  }
}
