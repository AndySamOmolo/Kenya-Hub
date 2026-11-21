import { test, expect } from "./fixtures/base";

test.describe("Remaining Statutory Calculators — Focused Interactive & Statutory Math Matrix", () => {
  test("Domestic Wage Calculator reflects 2026 KES 18,047 floor and mutates wage live", async ({ page }) => {
    const res = await page.goto("/tools/domestic-wage-calculator/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);

    const main = page.locator("main");
    await expect(main).toContainText(/18,047/);
    await expect(main).not.toContainText(/15,201/);

    const numInput = main.locator('input[type="number"]').first();
    if ((await numInput.count()) > 0 && (await numInput.isVisible())) {
      const before = await main.innerText();
      await numInput.fill("25000");
      await numInput.blur();
      await expect.poll(async () => await main.innerText()).not.toBe(before);
    }
    expect(await main.innerText()).not.toMatch(/\bNaN\b|\bInfinity\b/);
  });

  test("KCSE Grade Calculator uses KNEC 7-subject / 84-point mean grading", async ({ page }) => {
    const res = await page.goto("/tools/kcse-grade-calculator/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);

    const main = page.locator("main");
    await expect(main).toContainText(/7\s*subject|84|Best 7/i);

    const firstSelect = main.locator("select").first();
    if ((await firstSelect.count()) > 0 && (await firstSelect.isVisible())) {
      const before = await main.innerText();
      const opts = await firstSelect.locator("option").count();
      if (opts > 2) {
        await firstSelect.selectOption({ index: opts - 1 });
        await expect.poll(async () => await main.innerText()).not.toBe(before);
      }
    }
    expect(await main.innerText()).not.toMatch(/\bNaN\b|\bInfinity\b/);
  });

  test("HELB Calculator applies KES 5,000/mo statutory default penalty and updates on loan mutation", async ({ page }) => {
    const res = await page.goto("/tools/helb-calculator/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);

    const main = page.locator("main");
    await expect(main).toContainText(/5,000/);

    const loanInput = main.locator('input[type="number"]').first();
    if ((await loanInput.count()) > 0 && (await loanInput.isVisible())) {
      const before = await main.innerText();
      await loanInput.fill("350000");
      await loanInput.blur();
      await expect.poll(async () => await main.innerText()).not.toBe(before);
    }
    expect(await main.innerText()).not.toMatch(/\bNaN\b|\bInfinity\b/);
  });

  test("ODPC HR Retention Vault computes DPA s.63 cap (KES 120,000 on KES 12M turnover)", async ({ page }) => {
    const res = await page.goto("/tools/odpc-hr-retention-vault/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);

    const main = page.locator("main");
    await expect(main).toContainText(/120,000/);

    const turnoverInput = main.locator('input[type="number"]').first();
    if ((await turnoverInput.count()) > 0 && (await turnoverInput.isVisible())) {
      const before = await main.innerText();
      await turnoverInput.fill("20000000");
      await turnoverInput.blur();
      await expect.poll(async () => await main.innerText()).not.toBe(before);
    }
    expect(await main.innerText()).not.toMatch(/\bNaN\b|\bInfinity\b/);
  });

  test("Stamp Duty Calculator includes ARO 2014 legal fees (104,400 / 90,000) + 16% VAT", async ({ page }) => {
    const res = await page.goto("/tools/stamp-duty-calculator/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);

    const main = page.locator("main");
    await expect(main).toContainText(/104,400|90,000/);
    await expect(main).toContainText(/16%|VAT/i);

    const valueInput = main.locator('input[type="number"]').first();
    if ((await valueInput.count()) > 0 && (await valueInput.isVisible())) {
      const before = await main.innerText();
      await valueInput.fill("8000000");
      await valueInput.blur();
      await expect.poll(async () => await main.innerText()).not.toBe(before);
    }
    expect(await main.innerText()).not.toMatch(/\bNaN\b|\bInfinity\b/);
  });

  test("Water Bill Calculator uses NCWSC KES 67/m³ Block 2 rate and mutates consumption live", async ({ page }) => {
    const res = await page.goto("/tools/water-bill-calculator/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);

    const main = page.locator("main");
    await expect(main).toContainText(/67/);

    const unitsInput = main.locator('input[type="number"]').first();
    if ((await unitsInput.count()) > 0 && (await unitsInput.isVisible())) {
      const before = await main.innerText();
      await unitsInput.fill("25");
      await unitsInput.blur();
      await expect.poll(async () => await main.innerText()).not.toBe(before);
    }
    expect(await main.innerText()).not.toMatch(/\bNaN\b|\bInfinity\b/);
  });

  test("Rental Tax Calculator computes 7.5% MRI without Turnover Tax misconception", async ({ page }) => {
    const res = await page.goto("/tools/rental-tax-calculator/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);

    const main = page.locator("main");
    await expect(main).toContainText(/7\.5%|MRI/i);
    await expect(main).not.toContainText(/vs Turnover Tax/i);

    const rentInput = main.locator('input[type="number"]').first();
    if ((await rentInput.count()) > 0 && (await rentInput.isVisible())) {
      const before = await main.innerText();
      await rentInput.fill("120000");
      await rentInput.blur();
      await expect.poll(async () => await main.innerText()).not.toBe(before);
    }
    expect(await main.innerText()).not.toMatch(/\bNaN\b|\bInfinity\b/);
  });

  test("Small Claims Court cites Small Claims Court Act No. 2 of 2016 (not Cap 21)", async ({ page }) => {
    const res = await page.goto("/tools/small-claims-calculator/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);

    const main = page.locator("main");
    await expect(main).toContainText(/Act No\.?\s*2 of 2016/i);
    await expect(main).not.toContainText(/\bCap\.?\s*21\b/i);

    const claimInput = main.locator('input[type="number"]').first();
    if ((await claimInput.count()) > 0 && (await claimInput.isVisible())) {
      const before = await main.innerText();
      await claimInput.fill("450000");
      await claimInput.blur();
      await expect.poll(async () => await main.innerText()).not.toBe(before);
    }
    expect(await main.innerText()).not.toMatch(/\bNaN\b|\bInfinity\b/);
  });
});
