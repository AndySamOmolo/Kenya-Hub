import { test, expect } from "./fixtures/base";
import {
  captureAuditScreenshot,
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
  test("47 Counties Hub search, KPIs, and 6 representative county detail pages", async ({ page }, testInfo) => {
    const hubRes = await page.goto("/county/", { waitUntil: "domcontentloaded" });
    expect(hubRes?.status()).toBe(200);
    await expect.soft(page.locator("body")).toContainText(/47 Counties|Equitable Share/i);
    await assertNoHorizontalOverflow(page, "/county/");

    for (const slug of SAMPLE_COUNTIES) {
      const res = await page.goto(`/county/${slug}/`, { waitUntil: "domcontentloaded" });
      expect(res?.status(), `/county/${slug}/ must return HTTP 200`).toBe(200);
      await captureAuditScreenshot(page, testInfo, `county-${slug}`);
      await expect.soft(page.locator("h1").first()).toBeVisible();
      await assertNoHorizontalOverflow(page, `/county/${slug}/`);
      await assertNoCopyOrMarkdownLeaks(page, `/county/${slug}/`);
    }
  });

  test("Matatu Hub Journey Planner and all 6 Kenyan city pages render cleanly", async ({ page }, testInfo) => {
    const hubRes = await page.goto("/matatu/", { waitUntil: "domcontentloaded" });
    expect(hubRes?.status()).toBe(200);
    await expect.soft(page.locator("body")).toContainText(/Matatu Journey Planner/i);
    await assertNoCopyOrMarkdownLeaks(page, "/matatu/");

    for (const town of ALL_6_MATATU_TOWNS) {
      const res = await page.goto(`/matatu/${town}/`, { waitUntil: "domcontentloaded" });
      expect(res?.status(), `/matatu/${town}/ must return HTTP 200`).toBe(200);
      await captureAuditScreenshot(page, testInfo, `matatu-${town}`);
      await expect.soft(page.locator("h1").first()).toBeVisible();
      await assertNoHorizontalOverflow(page, `/matatu/${town}/`);
    }
  });

  test("Blog index and flagship statutory explainers return HTTP 200 and non-404 title", async ({ page }, testInfo) => {
    const indexRes = await page.goto("/blog/", { waitUntil: "domcontentloaded" });
    expect(indexRes?.status()).toBe(200);
    await expect.soft(page.locator("h1").first()).toBeVisible();
    await assertNoHorizontalOverflow(page, "/blog/");

    for (const slug of FLAGSHIP_BLOGS) {
      const res = await page.goto(`/blog/${slug}/`, { waitUntil: "domcontentloaded" });
      expect(res?.status(), `Flagship blog /blog/${slug}/ must return HTTP 200`).toBe(200);
      const title = await page.title();
      expect(title, `Flagship blog /blog/${slug}/ must not render 404 title`).not.toMatch(/404|Page Not Found/i);
      await captureAuditScreenshot(page, testInfo, `blog-${slug}`);
      await expect(page.locator("h1").first()).toBeVisible();
      await expect(page.locator("h1").first()).not.toContainText(/Page Not Found/i);
      await assertNoHorizontalOverflow(page, `/blog/${slug}/`);
    }
  });

  test("SEO metadata, single H1, valid JSON-LD, and live Light<->Dark theme toggle on desktop & mobile", async ({
    page,
  }) => {
    const res = await page.goto("/", { waitUntil: "networkidle" });
    expect(res?.status()).toBe(200);

    // Single H1 & non-empty title + meta description
    expect.soft(await page.locator("h1").count()).toBe(1);
    const title = await page.title();
    expect.soft(title.length).toBeGreaterThan(10);
    const metaDesc = await page.locator('meta[name="description"]').getAttribute("content");
    expect.soft((metaDesc || "").length).toBeGreaterThan(30);

    // Validate every JSON-LD script block parses as valid JSON
    const ldScripts = await page.locator('script[type="application/ld+json"]').allInnerTexts();
    for (const raw of ldScripts) {
      expect.soft(() => JSON.parse(raw)).not.toThrow();
    }

    // Live Light <-> Dark toggle must visibly flip html.dark and body backgroundColor on BOTH desktop and mobile
    const themeBtn = page
      .getByRole("button", { name: /theme|dark|light|mode/i })
      .filter({ visible: true })
      .first();
    await expect(themeBtn, "Visible theme toggle button must exist on both desktop and mobile").toBeVisible();

    const initialDark = await page.evaluate(() => document.documentElement.classList.contains("dark"));
    const initialBg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);

    await themeBtn.click();
    await expect
      .poll(() => page.evaluate(() => document.documentElement.classList.contains("dark")))
      .toBe(!initialDark);
    const flippedBg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    expect(flippedBg, "Body backgroundColor must flip when toggling theme").not.toBe(initialBg);

    // Toggle back and verify return to initial state
    await themeBtn.click();
    await expect
      .poll(() => page.evaluate(() => document.documentElement.classList.contains("dark")))
      .toBe(initialDark);
  });
});
