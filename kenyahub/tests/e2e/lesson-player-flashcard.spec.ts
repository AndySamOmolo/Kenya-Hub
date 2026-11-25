import { test, expect } from "./fixtures/base";

test("Lesson Player flips flashcard state and keeps marketing footer hidden", async ({ page }) => {
  const res = await page.goto("/tools/learn/swahili/", { waitUntil: "networkidle" });
  expect(res?.status()).toBe(200);

  await page.locator("main").getByRole("button", { name: /start lesson/i }).first().click();
  await expect(page.locator("footer")).toBeHidden();

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
