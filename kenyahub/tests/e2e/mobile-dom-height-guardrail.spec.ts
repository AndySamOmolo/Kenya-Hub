import { test, expect } from "./fixtures/base";

const LANGS = [
  "swahili",
  "kikuyu",
  "luo",
  "luhya",
  "kamba",
  "kalenjin",
  "kisii",
  "meru",
  "somali",
  "maasai",
  "turkana",
  "mijikenda",
  "teso",
  "embu",
  "taita",
  "taveta",
  "pokomo",
  "borana",
  "rendille",
  "samburu",
  "ilchamus",
  "pokot",
  "daasanach",
];

test.describe("Mobile GPU DOM Height Guardrail (All 23 Language Courses)", () => {
  test.beforeEach(({ isMobile }) => {
    test.skip(!isMobile, "Mobile GPU DOM height guardrail runs on mobile projects only");
  });

  for (const lang of LANGS) {
    test(`/tools/learn/${lang}/ scrollHeight < 12000px and overflow <= 2px`, async ({ page }) => {
      const res = await page.goto(`/tools/learn/${lang}/`, { waitUntil: "domcontentloaded" });
      expect(res?.status()).toBe(200);

      const { h, ox } = await page.evaluate(() => ({
        h: document.body.scrollHeight,
        ox: document.documentElement.scrollWidth - window.innerWidth,
      }));

      expect(h, `/tools/learn/${lang}/ scrollHeight (${h}px) exceeds 12000px GPU safety cap`).toBeLessThan(12_000);
      expect(ox, `/tools/learn/${lang}/ horizontal overflow (${ox}px) exceeds 2px`).toBeLessThanOrEqual(2);
    });
  }
});
