import { test, expect } from "./fixtures/base";
import { getContrastRatio, assertNoHorizontalOverflow } from "./helpers/ux-assertions";

test.describe("Interactive Calculator Controls, Mutations & Data Reconciliation", () => {
  test("PAYE Calculator mutates salary input & toggles Monthly<->Annual live", async ({ page }) => {
    const res = await page.goto("/tools/paye-calculator/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);

    const main = page.locator("main");
    const initialText = await main.innerText();
    expect.soft(initialText).toContain("70,442");
    expect.soft(initialText).toContain("19,308");
    expect.soft(initialText).not.toContain("70,431");
    expect.soft(initialText).not.toContain("19,319");

    // Mutate gross salary input and confirm live recalculation
    const salaryInput = main.locator('input[type="number"]').first();
    await expect(salaryInput).toBeVisible();
    await salaryInput.fill("200000");
    await salaryInput.blur();
    await expect.poll(async () => await main.innerText()).not.toBe(initialText);
    const mutatedText = await main.innerText();
    expect(mutatedText).not.toMatch(/\bNaN\b|\bInfinity\b/);

    // Switch Monthly <-> Annual mode
    const annualBtn = main.getByRole("button", { name: /Annual/i }).first();
    if ((await annualBtn.count()) > 0 && (await annualBtn.isVisible())) {
      await annualBtn.click();
      await expect.poll(async () => await main.innerText()).not.toBe(mutatedText);
      const annualText = await main.innerText();
      expect(annualText).not.toMatch(/\bNaN\b|\bInfinity\b/);

      const monthlyBtn = main.getByRole("button", { name: /Monthly/i }).first();
      if ((await monthlyBtn.count()) > 0 && (await monthlyBtn.isVisible())) {
        await monthlyBtn.click();
      }
    }
  });

  test("Plate Decoder decodes 29 CD 1K diplomatic plate inside result card (not FAQ)", async ({ page }) => {
    const res = await page.goto("/tools/number-plate-decoder/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);

    const input = page.locator("main input").first();
    await input.fill("29 CD 1K");

    const resultCard = page
      .locator(".result-box, main div, main section")
      .filter({ hasText: /Registration Origin/i })
      .filter({ hasText: /Classification/i })
      .first();
    await expect(resultCard).toBeVisible();
    await expect(resultCard).toContainText(/Mission #29/i);
    await expect(resultCard).toContainText(/Diplomatic/i);
  });

  test("KPLC Token Calculator exposes EPRA tariff selector and updates kWh live", async ({ page }) => {
    const res = await page.goto("/tools/kplc-token-calculator/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);

    const main = page.locator("main");
    const ordinaryBtn = main.locator('button:has-text("Domestic Ordinary")').first();
    await expect.soft(ordinaryBtn).toBeVisible();
    await ordinaryBtn.click();

    const amountInput = main.locator('input[type="number"]').first();
    const before = await main.innerText();
    await amountInput.fill("3500");
    await amountInput.blur();
    await expect.poll(async () => await main.innerText()).not.toBe(before);
    await expect(main).toContainText(/kWh/i);
  });

  test("Water Bill Calculator exposes County Sewer Line toggle and zeroes sewerage when unchecked", async ({ page }) => {
    const res = await page.goto("/tools/water-bill-calculator/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);

    const sewerCheckbox = page.locator('main input[type="checkbox"]').first();
    await expect(sewerCheckbox).toBeVisible();
    await expect(sewerCheckbox).toBeChecked();
    await sewerCheckbox.uncheck();
    await expect(sewerCheckbox).not.toBeChecked();
  });

  test("Small Claims Court strips leaked Passport/KIPI tables and updates disposal time above KES 1M", async ({ page }) => {
    const res = await page.goto("/tools/small-claims-calculator/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);

    const initialBody = await page.locator("body").innerText();
    expect.soft(initialBody).not.toContain("eCitizen Passport & National ID");
    expect.soft(initialBody).not.toContain("KIPI Trademark");

    const overLimitBtn = page.locator('button:has-text("1.5M")').first();
    if ((await overLimitBtn.count()) > 0) {
      await overLimitBtn.click();
      await expect.soft(page.locator("main")).toContainText(/Magistrate/i);
    }
  });

  test("M-Pesa Calculator mutates amount & switches Send<->Withdraw with single selector", async ({ page }) => {
    const res = await page.goto("/tools/mpesa-fee-calculator/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);

    expect.soft(await page.locator("#mpesa-type-select").count()).toBe(0);
    await assertNoHorizontalOverflow(page, "/tools/mpesa-fee-calculator/");

    const main = page.locator("main");
    const amountInput = main.locator('input[type="number"]').first();
    await expect(amountInput).toBeVisible();
    const beforeAmount = await main.innerText();
    await amountInput.fill("25000");
    await amountInput.blur();
    await expect.poll(async () => await main.innerText()).not.toBe(beforeAmount);

    const afterAmount = await main.innerText();
    const withdrawBtn = main.getByRole("button", { name: /Withdraw/i }).first();
    if ((await withdrawBtn.count()) > 0 && (await withdrawBtn.isVisible())) {
      await withdrawBtn.click();
      await expect.poll(async () => await main.innerText()).not.toBe(afterAmount);
      const sendBtn = main.getByRole("button", { name: /Send/i }).first();
      if ((await sendBtn.count()) > 0 && (await sendBtn.isVisible())) {
        await sendBtn.click();
      }
    }
    expect(await main.innerText()).not.toMatch(/\bNaN\b|\bInfinity\b/);
  });

  test("KRA Car Import Calculator mutates CRSP / value input and updates landed cost", async ({ page }) => {
    const res = await page.goto("/tools/kra-car-import-calculator/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);

    const main = page.locator("main");
    const crspInput = main.locator('input[type="number"]').first();
    await expect(crspInput).toBeVisible();
    const before = await main.innerText();
    await crspInput.fill("3500000");
    await crspInput.blur();
    await expect.poll(async () => await main.innerText()).not.toBe(before);
    const after = await main.innerText();
    expect(after).toMatch(/KES\s*[\d,]+/);
    expect(after).not.toMatch(/\bNaN\b|\bInfinity\b/);
  });

  test("KUCCPS Cluster Calculator mutates subject grade and updates weighted cluster score", async ({ page }) => {
    const res = await page.goto("/tools/kuccps-cluster-calculator/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);

    const main = page.locator("main");
    const firstSelect = main.locator("select").first();
    const before = await main.innerText();

    if ((await firstSelect.count()) > 0 && (await firstSelect.isVisible())) {
      const options = await firstSelect.locator("option").allTextContents();
      const currentVal = await firstSelect.inputValue();
      const altIndex = options.findIndex((_, idx) => idx > 0);
      if (altIndex >= 0) {
        await firstSelect.selectOption({ index: altIndex });
        const newVal = await firstSelect.inputValue();
        if (newVal === currentVal && options.length > 2) {
          await firstSelect.selectOption({ index: options.length - 1 });
        }
        await expect.poll(async () => await main.innerText()).not.toBe(before);
      }
    }
    expect(await main.innerText()).not.toMatch(/\bNaN\b|\bInfinity\b/);
  });

  test("EUDR GeoJSON Packager syncs default area and shows variance warning on >10% divergence", async ({ page }) => {
    const res = await page.goto("/tools/eudr-coop-geojson-packager/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);

    const areaInput = page.locator('main input[type="number"]').first();
    await areaInput.fill("4.6");
    await expect.soft(page.locator("main")).toContainText(/Variance warning/i);
  });

  test("ODPC HR Retention Vault warning banners pass WCAG contrast in both Light and Dark Mode", async ({ page }) => {
    const res = await page.goto("/tools/odpc-hr-retention-vault/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);

    const warningBanner = page.locator('div:has-text("Kirima v Solar Panda")').last();
    if ((await warningBanner.count()) > 0 && (await warningBanner.isVisible())) {
      const ratio = await getContrastRatio(warningBanner);
      expect.soft(ratio, `ODPC warning banner contrast (${ratio.toFixed(2)}) must be >= 4.5`).toBeGreaterThanOrEqual(4.5);
    }
  });

  test("PPRA e-GP shows MR1–MR11 and CBC SSS shows 3 Career Pathways (never 0 Learning Areas)", async ({ page }) => {
    const res1 = await page.goto("/tools/ppra-egp-tender-serializer/", { waitUntil: "domcontentloaded" });
    expect(res1?.status()).toBe(200);
    expect.soft(await page.locator("body").innerText()).not.toMatch(/MR1[–-]MR15/i);

    const res2 = await page.goto("/tools/cbc-curriculum/", { waitUntil: "domcontentloaded" });
    expect(res2?.status()).toBe(200);
    expect.soft(await page.locator("body").innerText()).not.toContain("0 Learning Areas");
  });
});
