import { test, expect } from "./fixtures/base";
import {
  captureAuditScreenshot,
  assertNoHorizontalOverflow,
  assertNoCopyOrMarkdownLeaks,
  assertNotOccluded,
  assertExpandedPillsLegible,
} from "./helpers/ux-assertions";

const CORE_ROUTES = [
  "/",
  "/tools/",
  "/county/",
  "/matatu/",
  "/blog/",
  "/about/",
  "/contact/",
  "/terms/",
  "/privacy/",
];

test.describe("Core Pages, Navigation, Overlays & Theme Atomicity", () => {
  for (const route of CORE_ROUTES) {
    test(`Core route ${route} renders cleanly without errors, overflow, or copy leaks`, async ({ page }, testInfo) => {
      const res = await page.goto(route, { waitUntil: "domcontentloaded" });
      expect(res?.status(), `${route} must return HTTP 200`).toBe(200);
      await captureAuditScreenshot(page, testInfo, `core-${route === "/" ? "home" : route}`);
      await expect.soft(page.locator("h1").first()).toBeVisible();
      await assertNoHorizontalOverflow(page, route);
      await assertNoCopyOrMarkdownLeaks(page, route);
    });
  }

  test("Command-K Search modal sits above hero & backdrop with ranked results", async ({ page }) => {
    const res = await page.goto("/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);

    // Filter to visible search trigger so mobile never matches hidden desktop button
    const searchTrigger = page
      .locator('[data-testid="navbar-search-trigger"], button[aria-label*="Search" i], button:has-text("Search")')
      .filter({ visible: true })
      .first();
    await expect(searchTrigger).toBeVisible();
    await assertNotOccluded(page, searchTrigger, "Navbar search button");
    await searchTrigger.click();

    const searchInput = page.locator('div[role="dialog"] input').first();
    await expect(searchInput).toBeVisible();
    await assertNotOccluded(page, searchInput, "Command-K search input (must sit above backdrop)");

    // Type "Fee" and verify M-Pesa Fee Calculator ranks ahead of unrelated guide matches
    await searchInput.fill("Fee");
    const firstResult = page.locator('div[role="dialog"] a').first();
    await expect(firstResult).toBeVisible();
    await expect.soft(firstResult).toContainText(/M-Pesa Fee Calculator/i);
    await assertNotOccluded(page, firstResult, "Command-K first search result");
    await page.keyboard.press("Escape");
    await expect(page.locator('div[role="dialog"]').first()).toBeHidden();
  });

  test("Desktop Tools mega-menu sits above hero without occlusion", async ({ page, isMobile }) => {
    test.skip(isMobile, "Desktop Tools mega-menu is desktop-only");
    const res = await page.goto("/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);

    const toolsBtn = page.locator('nav button:has-text("Tools")').filter({ visible: true }).first();
    await expect(toolsBtn).toBeVisible();
    await toolsBtn.click();
    const menuLink = page.locator('nav a[href*="/tools/"]').filter({ visible: true }).first();
    await expect(menuLink).toBeVisible();
    await assertNotOccluded(page, menuLink, "Desktop Tools mega-menu link");
  });

  test("All Tools directory expanded category pills stay legible and opaque", async ({ page }) => {
    const res = await page.goto("/tools/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);
    const expandBtn = page.locator('button[aria-label*="Expand" i]').filter({ visible: true });
    await assertExpandedPillsLegible(page, expandBtn);
    await assertNoHorizontalOverflow(page, "/tools/ expanded pills");
  });
});
