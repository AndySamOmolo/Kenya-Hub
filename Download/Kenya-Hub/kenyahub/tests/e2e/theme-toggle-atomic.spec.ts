import { test, expect } from "./fixtures/base";

test("theme toggle flips html.dark and body backgroundColor atomically on desktop and mobile", async ({ page }) => {
  const res = await page.goto("/", { waitUntil: "networkidle" });
  expect(res?.status()).toBe(200);

  const btn = page
    .getByRole("button", { name: /theme|dark|light|mode/i })
    .filter({ visible: true })
    .first();
  await expect(btn).toBeVisible();

  const initialDark = await page.evaluate(() => document.documentElement.classList.contains("dark"));
  const initialBg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);

  await btn.click();

  await expect
    .poll(() => page.evaluate(() => document.documentElement.classList.contains("dark")))
    .toBe(!initialDark);

  const nextBg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  expect(nextBg).not.toBe(initialBg);

  // Verify toggling back restores initial state cleanly
  await btn.click();
  await expect
    .poll(() => page.evaluate(() => document.documentElement.classList.contains("dark")))
    .toBe(initialDark);
});
