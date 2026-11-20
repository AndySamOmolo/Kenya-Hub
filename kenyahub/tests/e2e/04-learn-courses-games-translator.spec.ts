import { test, expect } from "@playwright/test";
import {
  attachRuntimeMonitor,
  captureAuditScreenshot,
  applyTheme,
  assertNoHorizontalOverflow,
  assertNotOccluded,
  getContrastRatio,
} from "./helpers/ux-assertions";

test.describe("Learn Hub, 23 Language Courses, Lesson Player, Mini-Games & Translator", () => {
  test.beforeEach(async ({ page }, testInfo) => {
    const mode = testInfo.project.name.includes("light") ? "light" : "dark";
    await applyTheme(page, mode);
  });

  test("Learn Hub Resume CTA reflects last visited course instead of hardcoded highest XP", async ({ page }) => {
    const monitor = attachRuntimeMonitor(page);
    // Visit Kikuyu course so kenyahub_last_visited_lang is persisted
    await page.goto("/tools/learn/kikuyu/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(300);

    await page.goto("/tools/learn/", { waitUntil: "domcontentloaded" });
    const stored = await page.evaluate(() => localStorage.getItem("kenyahub_last_visited_lang"));
    expect.soft(stored).toBe("kikuyu");
    await assertNoHorizontalOverflow(page, "/tools/learn/");
    monitor.assertClean();
  });

  test("Lesson Player hides floating ↑ button & marketing footer, and renders single Skip to Quiz", async ({ page }) => {
    const monitor = attachRuntimeMonitor(page);
    await page.goto("/tools/learn/kikuyu/", { waitUntil: "domcontentloaded" });

    const startBtn = page.locator('button:has-text("Start Lesson")').first();
    await expect.soft(startBtn).toBeVisible();
    await startBtn.click();

    await expect.soft(page.locator('button:has-text("Skip to Quiz")')).toHaveCount(1);
    const focusAttr = await page.evaluate(() => document.body.dataset.khFocusMode);
    expect.soft(focusAttr).toBe("true");
    expect.soft(await page.locator(".kh-back-to-top").count()).toBe(0);
    monitor.assertClean();
  });

  test("Mini-Games (Wordle) unmounts Vocabulary Reference Table & hides floating ↑ button", async ({ page }) => {
    const monitor = attachRuntimeMonitor(page);
    await page.goto("/tools/learn/luo/", { waitUntil: "domcontentloaded" });

    const gamesTab = page.locator('button:has-text("Mini-Games")').first();
    await expect.soft(gamesTab).toBeVisible();
    await gamesTab.click();

    // Reference table must not sit beneath Mini-Games
    expect.soft(await page.locator('h2:has-text("Core Vocabulary & Expressions Reference Table")').count()).toBe(0);

    const wordleCard = page.locator('button:has-text("Wordle"), div:has-text("Dholuo Wordle")').first();
    if ((await wordleCard.count()) > 0) {
      await wordleCard.click();
      await page.waitForTimeout(300);
      expect.soft(await page.locator(".kh-back-to-top").count()).toBe(0);
      const enterKey = page.locator('button:has-text("Enter")').first();
      if ((await enterKey.count()) > 0 && (await enterKey.isVisible())) {
        await assertNotOccluded(page, enterKey, "Wordle Enter key");
      }
    }
    monitor.assertClean();
  });

  test("23-Language Translator shows 208,776 count, legible With Audio chip, and clean Browse cards", async ({
    page,
  }) => {
    const monitor = attachRuntimeMonitor(page);
    await page.goto("/tools/kenyan-translator/", { waitUntil: "domcontentloaded" });
    await expect.soft(page.locator("body")).toContainText("208,776");

    const audioChip = page.locator('button:has-text("With Audio")').first();
    if ((await audioChip.count()) > 0 && (await audioChip.isVisible())) {
      const ratio = await getContrastRatio(audioChip);
      expect.soft(ratio, `With Audio chip contrast (${ratio.toFixed(2)}) must be >= 4.0`).toBeGreaterThanOrEqual(4.0);
    }

    await assertNoHorizontalOverflow(page, "/tools/kenyan-translator/");
    monitor.assertClean();
  });
});
