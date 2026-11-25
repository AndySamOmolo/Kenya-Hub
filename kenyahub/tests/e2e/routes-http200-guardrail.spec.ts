import { test, expect } from "./fixtures/base";

test("every published /blog/ link returns HTTP 200 and non-404 <title>", async ({ page, request }) => {
  const indexRes = await page.goto("/blog/", { waitUntil: "domcontentloaded" });
  expect(indexRes?.status()).toBe(200);

  const hrefs = await page
    .locator('main a[href^="/blog/"]')
    .evaluateAll((els) =>
      Array.from(
        new Set(
          els
            .map((e) => e.getAttribute("href") || "")
            .filter((h) => h.length > 6 && h !== "/blog/")
        )
      )
    );

  expect(hrefs.length, "Expected published blog links on /blog/").toBeGreaterThan(0);

  for (const href of hrefs) {
    const res = await request.get(href);
    expect(res.status(), `Broken blog link: ${href}`).toBe(200);
    const html = await res.text();
    expect(html, `Blog route ${href} rendered 404 title`).not.toMatch(/<title>[^<]*(404|Page Not Found)/i);
  }
});
