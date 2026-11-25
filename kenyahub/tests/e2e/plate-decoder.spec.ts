import { test, expect } from "./fixtures/base";

test.describe("Number Plate Decoder — Scoped Result Card Regressions", () => {
  test("decodes 29 CD 1K diplomatic plate inside result card (not FAQ)", async ({ page }) => {
    const res = await page.goto("/tools/number-plate-decoder/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);

    await page.locator("main input").first().fill("29 CD 1K");

    const card = page
      .locator(".result-box, main div, main section")
      .filter({ hasText: /Registration Origin/i })
      .filter({ hasText: /Classification/i })
      .first();

    await expect(card).toBeVisible();
    await expect(card).toContainText(/Mission #29/i);
    await expect(card).toContainText(/Diplomatic/i);
  });

  test("decodes civilian KDU 450A and government GK B412 plates inside result card", async ({ page }) => {
    const res = await page.goto("/tools/number-plate-decoder/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);

    const input = page.locator("main input").first();
    const card = page
      .locator(".result-box, main div, main section")
      .filter({ hasText: /Registration Origin/i })
      .filter({ hasText: /Classification/i })
      .first();

    await input.fill("KDU 450A");
    await expect(card).toBeVisible();
    await expect(card).toContainText(/Private|Civilian/i);

    await input.fill("GK B412");
    await expect(card).toBeVisible();
    await expect(card).toContainText(/Government|National/i);
  });
});
