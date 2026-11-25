import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import {
  attachRuntimeMonitor,
  captureAuditScreenshot,
  applyTheme,
  assertNoHorizontalOverflow,
  assertNoCopyOrMarkdownLeaks,
} from "./helpers/ux-assertions";

const metaSrc = fs.readFileSync(
  path.resolve(__dirname, "../../src/data/courses/metadata.ts"),
  "utf8"
);
const ALL_23_LANGUAGES = [...new Set([...metaSrc.matchAll(/"([a-z]+)"/g)].map((m) => m[1]))];

test.describe("All 23 Language Courses Complete Live Audit", () => {
  test.beforeEach(async ({ page }, testInfo) => {
    const mode = testInfo.project.name.includes("light") ? "light" : "dark";
    await applyTheme(page, mode);
  });

  for (const langId of ALL_23_LANGUAGES) {
    test(`/tools/learn/${langId}/ renders course, units, flashcards, games, grammar & proverbs cleanly`, async ({
      page,
    }, testInfo) => {
      const monitor = attachRuntimeMonitor(page);
      const url = `/tools/learn/${langId}/`;
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await captureAuditScreenshot(page, testInfo, `course-${langId}`);

      await expect.soft(page.locator("h1").first()).toBeVisible();
      await assertNoHorizontalOverflow(page, url);
      await assertNoCopyOrMarkdownLeaks(page, url);

      // Verify Reference Table 3rd column does not leak raw language-family fallback ("Nilotic" / "Bantu" / "Cushitic") as usage context
      const refTable = page.locator('section:has(h2:has-text("Core Vocabulary")) table tbody tr');
      if ((await refTable.count()) > 0) {
        const thirdCellTexts = await refTable.locator("td:nth-child(3)").allInnerTexts();
        const familyLeaks = thirdCellTexts.filter((t) => /^(Nilotic|Bantu|Cushitic)$/i.test(t.trim()));
        expect.soft(familyLeaks.length, `${url}: 3rd column leaked language family fallback`).toBe(0);
      }

      // Switch through Flashcards, Mini-Games, Grammar, and Proverbs tabs
      for (const tabLabel of ["Flashcards", "Mini-Games", "Grammar", "Proverbs"]) {
        const tabBtn = page.locator(`button:has-text("${tabLabel}")`).first();
        if ((await tabBtn.count()) > 0 && (await tabBtn.isVisible())) {
          await tabBtn.click();
          await page.waitForTimeout(150);
          if (tabLabel === "Mini-Games") {
            expect.soft(
              await page.locator('h2:has-text("Core Vocabulary & Expressions Reference Table")').count(),
              `${url}: Reference table must be hidden in Mini-Games`
            ).toBe(0);
          }
        }
      }

      monitor.assertClean();
    });
  }
});
