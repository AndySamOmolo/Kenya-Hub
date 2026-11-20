import { test, expect } from "@playwright/test";
import {
  attachRuntimeMonitor,
  captureAuditScreenshot,
  applyTheme,
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
  test.beforeEach(async ({ page }, testInfo) => {
    const mode = testInfo.project.name.includes("light") ? "light" : "dark";
    await applyTheme(page, mode);
  });

  for (const route of CORE_ROUTES) {
    test(`Core route ${route} renders cleanly without errors, overflow, or copy leaks`, async ({ page }, testInfo) => {
      const monitor = attachRuntimeMonitor(page);
      await page.goto(route, { waitUntil: "domcontentloaded" });
      await captureAuditScreenshot(page, testInfo, `core-${route === "/" ? "home" : route}`);
      await expect.soft(page.locator("h1").first()).toBeVisible();
      await assertNoHorizontalOverflow(page, route);
      await assertNoCopyOrMarkdownLeaks(page, route);
      monitor.assertClean();
    });
  }

  test("Desktop Tools mega-menu and Command-K Search modal sit above hero & backdrop, with ranked results", async ({
    page,
  }, testInfo) => {
    const isMobile = testInfo.project.name.includes("mobile");
    const monitor = attachRuntimeMonitor(page);
    await page.goto("/", { waitUntil: "domcontentloaded" });

    // Open global search modal
    const searchTrigger = page.locator('button[aria-label*="Search" i], button:has-text("Search")').first();
    await assertNotOccluded(page, searchTrigger, "Navbar search button");
    await searchTrigger.click();

    const searchInput = page.locator('div[role="dialog"] input').first();
    await expect.soft(searchInput).toBeVisible();
    await assertNotOccluded(page, searchInput, "Command-K search input (must sit above backdrop)");

    // Type "F" and verify title-prefix matches rank ahead of unrelated description matches
    await searchInput.fill("Fee");
    const firstResult = page.locator('div[role="dialog"] a').first();
    await expect.soft(firstResult).toBeVisible();
    await expect.soft(firstResult).toContainText(/Fee|M-Pesa/i);
    await assertNotOccluded(page, firstResult, "Command-K first search result");
    await page.keyboard.press("Escape");

    // Desktop Tools mega-menu stacking check
    if (!isMobile) {
      const toolsBtn = page.locator('nav button:has-text("Tools")').first();
      if ((await toolsBtn.count()) > 0) {
        await toolsBtn.click();
        const menuLink = page.locator('nav a[href*="/tools/"]').first();
        await expect.soft(menuLink).toBeVisible();
        await assertNotOccluded(page, menuLink, "Desktop Tools mega-menu link");
      }
    }

    monitor.assertClean();
  });

  test("All Tools directory expanded category pills stay legible and opaque", async ({ page }) => {
    const monitor = attachRuntimeMonitor(page);
    await page.goto("/tools/", { waitUntil: "domcontentloaded" });
    const expandBtn = page.locator('button[aria-label*="Expand" i]');
    await assertExpandedPillsLegible(page, expandBtn);
    await assertNoHorizontalOverflow(page, "/tools/ expanded pills");
    monitor.assertClean();
  });
});
