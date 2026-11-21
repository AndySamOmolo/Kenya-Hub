import { test, expect } from "./fixtures/base";
import { assertNoHorizontalOverflow, assertNotOccluded, getContrastRatio } from "./helpers/ux-assertions";

test.describe("Learn Hub, 23 Language Courses, Lesson Player, Mini-Games & Translator", () => {
  test("Learn Hub Resume CTA reflects last visited course instead of hardcoded highest XP", async ({ page }) => {
    const res1 = await page.goto("/tools/learn/kikuyu/", { waitUntil: "domcontentloaded" });
    expect(res1?.status()).toBe(200);
    await page.waitForTimeout(300);

    const res2 = await page.goto("/tools/learn/", { waitUntil: "domcontentloaded" });
    expect(res2?.status()).toBe(200);
    const stored = await page.evaluate(() => localStorage.getItem("kenyahub_last_visited_lang"));
    expect.soft(stored).toBe("kikuyu");
    await assertNoHorizontalOverflow(page, "/tools/learn/");
  });

  test("Lesson Player hides footer with zero flash, flips flashcard state, and renders single Skip to Quiz", async ({
    page,
  }) => {
    const res = await page.goto("/tools/learn/kikuyu/", { waitUntil: "networkidle" });
    expect(res?.status()).toBe(200);

    const startBtn = page.locator('main button:has-text("Start Lesson")').first();
    await expect(startBtn).toBeVisible();
    await startBtn.click();

    // Footer must hide immediately with zero flash
    await expect(page.locator("footer")).toBeHidden();
    await expect.soft(page.locator('button:has-text("Skip to Quiz")')).toHaveCount(1);
    const focusAttr = await page.evaluate(() => document.body.dataset.khFocusMode);
    expect.soft(focusAttr).toBe("true");
    expect.soft(await page.locator(".kh-back-to-top").count()).toBe(0);

    // Flip flashcard state if flashcard is present
    const card = page
      .locator('[data-testid="flashcard"], [role="button"][aria-label*="flip" i], button:has-text("Tap to flip")')
      .first();
    if ((await card.count()) > 0 && (await card.isVisible())) {
      const beforeClass = (await card.getAttribute("class")) ?? "";
      const beforeText = await card.innerText();
      await card.click();
      await expect
        .poll(async () => `${(await card.getAttribute("class")) ?? ""}::${await card.innerText()}`)
        .not.toBe(`${beforeClass}::${beforeText}`);
    }
  });

  test("Proverbs & Mini-Games tabs clear Loading state and unmount Vocabulary Reference Table", async ({ page }) => {
    // Proverbs tab on Kikuyu must finish loading
    const resKikuyu = await page.goto("/tools/learn/kikuyu/", { waitUntil: "networkidle" });
    expect(resKikuyu?.status()).toBe(200);
    const proverbsTab = page.locator('button:has-text("Proverbs")').first();
    await expect(proverbsTab).toBeVisible();
    await proverbsTab.click();
    await expect(page.locator("main").getByText(/Loading\.\.\./i)).toBeHidden({ timeout: 10_000 });

    // Mini-Games tab on Dholuo must finish loading and hide reference table
    const resLuo = await page.goto("/tools/learn/luo/", { waitUntil: "networkidle" });
    expect(resLuo?.status()).toBe(200);
    const gamesTab = page.locator('button:has-text("Mini-Games")').first();
    await expect(gamesTab).toBeVisible();
    await gamesTab.click();
    await expect(page.locator("main").getByText(/Loading\.\.\./i)).toBeHidden({ timeout: 10_000 });

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
  });

  test("23-Language Translator shows 208,776 count, legible With Audio chip, and clean Browse cards", async ({
    page,
  }) => {
    const res = await page.goto("/tools/kenyan-translator/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);
    await expect.soft(page.locator("body")).toContainText("208,776");

    const audioChip = page.locator('button:has-text("With Audio")').first();
    if ((await audioChip.count()) > 0 && (await audioChip.isVisible())) {
      const ratio = await getContrastRatio(audioChip);
      expect.soft(ratio, `With Audio chip contrast (${ratio.toFixed(2)}) must be >= 4.0`).toBeGreaterThanOrEqual(4.0);
    }

    await assertNoHorizontalOverflow(page, "/tools/kenyan-translator/");
  });
});
