import { test, expect } from "./fixtures/base";

test("PAYE Calculator stays interactive offline and under 500 API errors", async ({ page, context }) => {
  await page.route("**/api/**", (route) => route.fulfill({ status: 500, body: "{}" }));

  const res = await page.goto("/tools/paye-calculator/", { waitUntil: "domcontentloaded" });
  expect(res?.status()).toBe(200);

  await context.setOffline(true);
  const input = page.locator('main input[type="number"]').first();
  await expect(input).toBeVisible();
  await input.fill("150000");
  await input.blur();

  await expect(page.locator("main")).toContainText(/KES\s*[\d,]+/);
  await expect(page.locator("main")).not.toContainText(/\bNaN\b|\bInfinity\b/i);
  await context.setOffline(false);
});
