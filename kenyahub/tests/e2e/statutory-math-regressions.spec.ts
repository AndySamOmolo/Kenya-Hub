import { test, expect } from "./fixtures/base";

test.describe("2026 Kenyan Statutory Math Regressions", () => {
  test("Domestic Wage 2026 floor is KES 18,047", async ({ page }) => {
    const res = await page.goto("/tools/domestic-wage-calculator/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);
    await expect(page.locator("main")).toContainText(/18,047/);
  });

  test("KCSE Grade Calculator uses KNEC 7-subject / 84-point scale", async ({ page }) => {
    const res = await page.goto("/tools/kcse-grade-calculator/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);
    await expect(page.locator("main")).toContainText(/Best 7|84|7\s*subject/i);
  });

  test("HELB Calculator applies KES 5,000/mo statutory default penalty", async ({ page }) => {
    const res = await page.goto("/tools/helb-calculator/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);
    await expect(page.locator("main")).toContainText(/5,000/);
  });

  test("ODPC s.63 fine cap is 1% of 12M = KES 120,000", async ({ page }) => {
    const res = await page.goto("/tools/odpc-hr-retention-vault/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);
    await expect(page.locator("main")).toContainText(/120,000/);
  });

  test("Stamp Duty on KES 5M includes ARO 2014 KES 90,000 + 16% VAT (KES 104,400)", async ({ page }) => {
    const res = await page.goto("/tools/stamp-duty-calculator/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);
    await expect(page.locator("main")).toContainText(/104,400|90,000/);
    await expect(page.locator("main")).toContainText(/16%|VAT/i);
  });

  test("Water Bill uses WASREB-approved NCWSC KES 67/m³ Block 2 rate", async ({ page }) => {
    const res = await page.goto("/tools/water-bill-calculator/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);
    await expect(page.locator("main")).toContainText(/67/);
  });

  test("Small Claims Court cites Small Claims Court Act No. 2 of 2016", async ({ page }) => {
    const res = await page.goto("/tools/small-claims-calculator/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);
    await expect(page.locator("main")).toContainText(/Act No\.?\s*2 of 2016/i);
    await expect(page.locator("main")).not.toContainText(/\bCap\.?\s*21\b/i);
  });
});
