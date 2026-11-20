import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import {
  attachRuntimeMonitor,
  captureAuditScreenshot,
  applyTheme,
  assertNoHorizontalOverflow,
  assertNoCopyOrMarkdownLeaks,
  getContrastRatio,
} from "./helpers/ux-assertions";

const registrySrc = fs.readFileSync(
  path.resolve(__dirname, "../../src/lib/tools-registry.ts"),
  "utf8"
);
const ALL_33_SLUGS = [...new Set([...registrySrc.matchAll(/slug:\s*['"]([a-z0-9-]+)['"]/g)].map((m) => m[1]))];

test.describe("Full 33-Tool Live Matrix Audit (Desktop & Mobile, Light & Dark)", () => {
  test.beforeEach(async ({ page }, testInfo) => {
    const mode = testInfo.project.name.includes("light") ? "light" : "dark";
    await applyTheme(page, mode);
  });

  for (const slug of ALL_33_SLUGS) {
    test(`/tools/${slug}/ passes runtime, overflow, copy, FAQ & contrast audit`, async ({ page }, testInfo) => {
      const monitor = attachRuntimeMonitor(page);
      const url = `/tools/${slug}/`;
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await captureAuditScreenshot(page, testInfo, `tool-${slug}`);

      // 1. Primary heading visible
      await expect.soft(page.locator("h1").first()).toBeVisible();

      // 2. Zero horizontal overflow & zero copy/Markdown leaks
      await assertNoHorizontalOverflow(page, url);
      await assertNoCopyOrMarkdownLeaks(page, url);

      // 3. Pin Tool button meets readable contrast (>= 3.0 UI / >= 4.5 text)
      const pinBtn = page.locator('button[title*="Pin tool" i], button[title*="Unpin tool" i]').first();
      if ((await pinBtn.count()) > 0 && (await pinBtn.isVisible())) {
        const ratio = await getContrastRatio(pinBtn);
        expect.soft(ratio, `${url}: Pin Tool button contrast (${ratio.toFixed(2)}) too low`).toBeGreaterThanOrEqual(3.0);
      }

      // 4. Every tool renders FAQs with zero duplicate question headings
      const faqSummaries = await page.locator("details summary").allInnerTexts();
      const normalizedQs = faqSummaries.map((q) => q.trim().toLowerCase().replace(/\s+/g, " "));
      const uniqueQs = new Set(normalizedQs);
      expect.soft(uniqueQs.size, `${url}: duplicate FAQ questions detected`).toBe(normalizedQs.length);
      if (slug !== "learn") {
        expect.soft(uniqueQs.size, `${url}: expected >= 3 rendered FAQs`).toBeGreaterThanOrEqual(3);
      }

      monitor.assertClean();
    });
  }
});
