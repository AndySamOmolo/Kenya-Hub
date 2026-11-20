import { test, expect } from "@playwright/test";
import {
  attachRuntimeMonitor,
  applyTheme,
  assertNoHorizontalOverflow,
  assertNoCopyOrMarkdownLeaks,
} from "./helpers/ux-assertions";

const SAMPLE_COUNTIES = ["nairobi", "mombasa", "kisumu", "machakos", "kiambu", "nakuru"];
const ALL_6_MATATU_TOWNS = ["nairobi", "mombasa", "kisumu", "nakuru", "eldoret", "thika"];
const FLAGSHIP_BLOGS = [
  "kplc-prepaid-electricity-tokens-tariffs-kenya-2026",
  "kuccps-weighted-cluster-points-formula-guide",
];

test.describe("47 Counties, 6 Matatu Towns, Blog Guides, SEO & Accessibility", () => {
  test.beforeEach(async ({ page }, testInfo) => {
    const mode = testInfo.project.name.includes("light") ? "light" : "dark";
    await applyTheme(page, mode);
  });

  test("47 Counties Hub search, KPIs, and 6 representative county detail pages", async ({ page }) => {
    const monitor = attachRuntimeMonitor(page);
    await page.goto("/county/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("body")).toContainText(/47 Counties|Equitable Share/i);
    await assertNoHorizontalOverflow(page, "/county/");

    for (const slug of SAMPLE_COUNTIES) {
      await page.goto(`/county/${slug}/`, { waitUntil: "domcontentloaded" });
      await expect(page.locator("h1").first()).toBeVisible();
      await assertNoHorizontalOverflow(page, `/county/${slug}/`);
      await assertNoCopyOrMarkdownLeaks(page, `/county/${slug}/`);
    }
    monitor.assertClean();
  });

  test("Matatu Hub Journey Planner and all 6 Kenyan city pages render cleanly", async ({ page }) => {
    const monitor = attachRuntimeMonitor(page);
    await page.goto("/matatu/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("body")).toContainText(/Matatu Journey Planner/i);
    await assertNoCopyOrMarkdownLeaks(page, "/matatu/");

    for (const town of ALL_6_MATATU_TOWNS) {
      await page.goto(`/matatu/${town}/`, { waitUntil: "domcontentloaded" });
      await expect(page.locator("h1").first()).toBeVisible();
      await assertNoHorizontalOverflow(page, `/matatu/${town}/`);
    }
    monitor.assertClean();
  });

  test("Blog index and flagship statutory explainers render tables & metadata cleanly", async ({ page }) => {
    const monitor = attachRuntimeMonitor(page);
    await page.goto("/blog/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("h1").first()).toBeVisible();
    await assertNoHorizontalOverflow(page, "/blog/");

    for (const slug of FLAGSHIP_BLOGS) {
      await page.goto(`/blog/${slug}/`, { waitUntil: "domcontentloaded" });
      await expect(page.locator("h1").first()).toBeVisible();
      await assertNoHorizontalOverflow(page, `/blog/${slug}/`);
    }
    monitor.assertClean();
  });

  test("SEO metadata, single H1, valid JSON-LD, and live Light<->Dark theme toggle", async ({ page }) => {
    const monitor = attachRuntimeMonitor(page);
    await page.goto("/", { waitUntil: "domcontentloaded" });

    // Single H1 & non-empty title + meta description
    expect(await page.locator("h1").count()).toBe(1);
    const title = await page.title();
    expect(title.length).toBeGreaterThan(10);
    const metaDesc = await page.locator('meta[name="description"]').getAttribute("content");
    expect((metaDesc || "").length).toBeGreaterThan(30);

    // Validate every JSON-LD script block parses as valid JSON
    const ldScripts = await page.locator('script[type="application/ld+json"]').allInnerTexts();
    for (const raw of ldScripts) {
      expect(() => JSON.parse(raw)).not.toThrow();
    }

    // Live Light <-> Dark toggle without errors
    const themeBtn = page.locator('nav button[aria-label*="theme" i], nav button[aria-label*="mode" i]').first();
    if ((await themeBtn.count()) > 0 && (await themeBtn.isVisible())) {
      await themeBtn.click();
      await page.waitForTimeout(150);
      await themeBtn.click();
      await page.waitForTimeout(150);
    }

    monitor.assertClean();
  });
});
