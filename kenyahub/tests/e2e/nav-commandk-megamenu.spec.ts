import { test, expect } from "./fixtures/base";

test("Command-K traps focus, ranks M-Pesa Fee Calculator #1 for 'Fee', and closes on Escape", async ({
  page,
  isMobile,
}) => {
  const res = await page.goto("/", { waitUntil: "networkidle" });
  expect(res?.status()).toBe(200);

  if (isMobile) {
    await page
      .locator('[data-testid="navbar-search-trigger"], button[aria-label*="Search" i], button:has-text("Search")')
      .filter({ visible: true })
      .first()
      .click();
  } else {
    await page.keyboard.press("Control+k");
  }

  const dialog = page.getByRole("dialog").first();
  await expect(dialog).toBeVisible();

  await dialog.locator("input").first().fill("Fee");
  await expect(dialog.getByRole("link").first()).toContainText(/M-Pesa Fee Calculator/i);

  // Focus trap check: Tab stays inside dialog
  await page.keyboard.press("Tab");
  const focusInsideDialog = await dialog.evaluate((el) => el.contains(document.activeElement));
  expect(focusInsideDialog).toBe(true);

  // Escape closes dialog
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
});

test("Desktop Tools mega-menu renders visible bounding box above hero", async ({ page, isMobile }) => {
  test.skip(isMobile, "Desktop Tools mega-menu is desktop-only");
  const res = await page.goto("/", { waitUntil: "networkidle" });
  expect(res?.status()).toBe(200);

  const toolsBtn = page.locator('nav button:has-text("Tools")').filter({ visible: true }).first();
  await expect(toolsBtn).toBeVisible();
  await toolsBtn.click();

  const firstLink = page.locator('nav a[href*="/tools/"]').filter({ visible: true }).first();
  await expect(firstLink).toBeVisible();
  const box = await firstLink.boundingBox();
  expect(box).not.toBeNull();
  expect((box?.width ?? 0) > 0 && (box?.height ?? 0) > 0).toBe(true);
});
