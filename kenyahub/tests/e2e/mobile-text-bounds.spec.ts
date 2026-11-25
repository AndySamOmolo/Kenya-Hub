import { test, expect } from "./fixtures/base";

const ROUTES = [
  "/",
  "/tools/",
  "/tools/learn/",
  "/tools/learn/kikuyu/",
  "/tools/kenyan-translator/",
  "/county/",
  "/county/mombasa/",
  "/matatu/",
  "/matatu/nairobi/",
  "/blog/",
];

test.describe("Mobile text stays within visible bounds", () => {
  test.beforeEach(({ isMobile }) => {
    test.skip(!isMobile, "Text bounds are checked on mobile viewports only");
  });

  for (const route of ROUTES) {
    test(`${route} has no horizontally clipped text`, async ({ page }) => {
      const response = await page.goto(route, { waitUntil: "domcontentloaded" });
      expect(response?.status(), `${route} must return HTTP 200`).toBe(200);

      const overflow = await page.evaluate(() => {
        const viewportWidth = document.documentElement.clientWidth;
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        const issues: string[] = [];
        let node: Node | null;

        while ((node = walker.nextNode())) {
          const text = node.textContent?.trim();
          const parent = node.parentElement;
          if (!text || !parent) continue;
          if (parent.closest(".sr-only, [aria-hidden='true']")) continue;

          const range = document.createRange();
          range.selectNodeContents(node);
          const rects = Array.from(range.getClientRects()).filter(
            (rect) => rect.width > 0 && rect.height > 0
          );
          if (rects.length === 0) continue;

          let horizontallyScrollable = false;
          let intentionallyTruncated = false;
          for (let ancestor = parent; ancestor && ancestor !== document.body; ancestor = ancestor.parentElement) {
            const style = getComputedStyle(ancestor);
            if (style.textOverflow === "ellipsis" || style.webkitLineClamp !== "none") {
              intentionallyTruncated = true;
            }
            if (
              (style.overflowX === "auto" || style.overflowX === "scroll") &&
              ancestor.scrollWidth > ancestor.clientWidth + 2
            ) {
              horizontallyScrollable = true;
              break;
            }
          }
          if (horizontallyScrollable || intentionallyTruncated) continue;

          for (const rect of rects) {
            if (rect.left < -1 || rect.right > viewportWidth + 1) {
              issues.push(`${JSON.stringify(text.slice(0, 60))}: ${Math.round(rect.left)}..${Math.round(rect.right)} of ${viewportWidth}px`);
              break;
            }
          }

          for (let ancestor = parent; ancestor && ancestor !== document.body; ancestor = ancestor.parentElement) {
            const style = getComputedStyle(ancestor);
            if (style.overflowX !== "hidden" && style.overflowX !== "clip") continue;
            if (style.textOverflow === "ellipsis") continue;

            const bounds = ancestor.getBoundingClientRect();
            if (rects.some((rect) => rect.left < bounds.left - 1 || rect.right > bounds.right + 1)) {
              issues.push(`${JSON.stringify(text.slice(0, 60))}: clipped by ${ancestor.tagName.toLowerCase()}.${String(ancestor.className).split(" ").slice(0, 2).join(".")}`);
              break;
            }
          }
          if (issues.length >= 12) break;
        }
        return issues;
      });

      expect(overflow, `${route} text exceeds its mobile viewport or clipping parent`).toEqual([]);
    });
  }
});
