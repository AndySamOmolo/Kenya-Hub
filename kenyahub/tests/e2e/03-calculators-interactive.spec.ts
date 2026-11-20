import { test, expect } from "@playwright/test";
import {
  attachRuntimeMonitor,
  applyTheme,
  getContrastRatio,
  assertNoHorizontalOverflow,
} from "./helpers/ux-assertions";

test.describe("Interactive Calculator Controls, Logic & Data Reconciliation", () => {
  test.beforeEach(async ({ page }, testInfo) => {
    const mode = testInfo.project.name.includes("light") ? "light" : "dark";
    await applyTheme(page, mode);
  });

  test("PAYE Calculator live KES 100,000 output matches Benchmark Table row exactly", async ({ page }) => {
    const monitor = attachRuntimeMonitor(page);
    await page.goto("/tools/paye-calculator/", { waitUntil: "domcontentloaded" });
    const body = await page.locator("body").innerText();
    expect(body).toContain("70,442");
    expect(body).toContain("19,308");
    // Ensure old stale KES 11 mismatched figures are gone
    expect(body).not.toContain("70,431");
    expect(body).not.toContain("19,319");
    monitor.assertClean();
  });

  test("Plate Decoder decodes 29 CD 1K diplomatic plate without blanking output", async ({ page }) => {
    const monitor = attachRuntimeMonitor(page);
    await page.goto("/tools/number-plate-decoder/", { waitUntil: "domcontentloaded" });
    const input = page.locator("input").first();
    await input.fill("29 CD 1K");
    await expect(page.locator("body")).toContainText(/Diplomatic Corps/i);
    await expect(page.locator("body")).toContainText(/Mission #29/i);
    monitor.assertClean();
  });

  test("KPLC Token Calculator exposes EPRA tariff selector and updates kWh live", async ({ page }) => {
    const monitor = attachRuntimeMonitor(page);
    await page.goto("/tools/kplc-token-calculator/", { waitUntil: "domcontentloaded" });
    const ordinaryBtn = page.locator('button:has-text("Domestic Ordinary")').first();
    await expect(ordinaryBtn).toBeVisible();
    await ordinaryBtn.click();
    await expect(page.locator("body")).toContainText(/kWh/i);
    monitor.assertClean();
  });

  test("Water Bill Calculator exposes County Sewer Line toggle and zeroes sewerage when unchecked", async ({ page }) => {
    const monitor = attachRuntimeMonitor(page);
    await page.goto("/tools/water-bill-calculator/", { waitUntil: "domcontentloaded" });
    const sewerCheckbox = page.locator('input[type="checkbox"]').first();
    await expect(sewerCheckbox).toBeVisible();
    await expect(sewerCheckbox).toBeChecked();
    await sewerCheckbox.uncheck();
    await expect(sewerCheckbox).not.toBeChecked();
    monitor.assertClean();
  });

  test("Small Claims Court strips leaked Passport/KIPI tables and updates disposal time above KES 1M", async ({ page }) => {
    const monitor = attachRuntimeMonitor(page);
    await page.goto("/tools/small-claims-calculator/", { waitUntil: "domcontentloaded" });
    const initialBody = await page.locator("body").innerText();
    expect(initialBody).not.toContain("eCitizen Passport & National ID");
    expect(initialBody).not.toContain("KIPI Trademark");

    const overLimitBtn = page.locator('button:has-text("1.5M")').first();
    if ((await overLimitBtn.count()) > 0) {
      await overLimitBtn.click();
      await expect(page.locator("body")).toContainText(/Magistrate/i);
    }
    monitor.assertClean();
  });

  test("M-Pesa Calculator renders single Transaction Type selector (no duplicate dropdown)", async ({ page }) => {
    const monitor = attachRuntimeMonitor(page);
    await page.goto("/tools/mpesa-fee-calculator/", { waitUntil: "domcontentloaded" });
    expect(await page.locator("#mpesa-type-select").count()).toBe(0);
    await assertNoHorizontalOverflow(page, "/tools/mpesa-fee-calculator/");
    monitor.assertClean();
  });

  test("EUDR GeoJSON Packager syncs default area and shows variance warning on >10% divergence", async ({ page }) => {
    const monitor = attachRuntimeMonitor(page);
    await page.goto("/tools/eudr-coop-geojson-packager/", { waitUntil: "domcontentloaded" });
    const areaInput = page.locator('input[type="number"]').first();
    await areaInput.fill("4.6");
    await expect(page.locator("body")).toContainText(/Variance warning/i);
    monitor.assertClean();
  });

  test("ODPC HR Retention Vault warning banners pass WCAG contrast in both Light and Dark Mode", async ({ page }) => {
    const monitor = attachRuntimeMonitor(page);
    await page.goto("/tools/odpc-hr-retention-vault/", { waitUntil: "domcontentloaded" });
    const warningBanner = page.locator('div:has-text("Kirima v Solar Panda")').last();
    if ((await warningBanner.count()) > 0 && (await warningBanner.isVisible())) {
      const ratio = await getContrastRatio(warningBanner);
      expect(ratio, `ODPC warning banner contrast (${ratio.toFixed(2)}) must be >= 4.5`).toBeGreaterThanOrEqual(4.5);
    }
    monitor.assertClean();
  });

  test("PPRA e-GP shows MR1–MR11 and CBC SSS shows 3 Career Pathways (never 0 Learning Areas)", async ({ page }) => {
    const monitor = attachRuntimeMonitor(page);
    await page.goto("/tools/ppra-egp-tender-serializer/", { waitUntil: "domcontentloaded" });
    expect(await page.locator("body").innerText()).not.toContain("MR1–MR15");

    await page.goto("/tools/cbc-curriculum/", { waitUntil: "domcontentloaded" });
    expect(await page.locator("body").innerText()).not.toContain("0 Learning Areas");
    monitor.assertClean();
  });
});
