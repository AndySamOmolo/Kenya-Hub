import { test, expect } from "@playwright/test";
import {
  attachRuntimeMonitor,
  captureAuditScreenshot,
  applyTheme,
  assertNoHorizontalOverflow,
  assertExpandedPillsLegible,
} from "./helpers/ux-assertions";

const REMAINING_CALCULATOR_SCENARIOS: {
  slug: string;
  expectText: RegExp;
  forbiddenText?: RegExp;
  checkExpandPills?: boolean;
}[] = [
  { slug: "mjengo-construction-calculator", expectText: /KES|stone|cement|mabati/i },
  { slug: "kra-car-import-calculator", expectText: /CRSP|Import Duty|Excise|VAT/i, checkExpandPills: true },
  { slug: "icms-landed-cost-arbitrage", expectText: /iCMS|Consolidator|KES/i },
  { slug: "ntsa-transfer-calculator", expectText: /Logbook|KES/i, forbiddenText: /Online Search Fee \(KES 500\)/ },
  { slug: "traffic-fines", expectText: /KES|Traffic/i, forbiddenText: /\b1 pts\b/, checkExpandPills: true },
  { slug: "sacco-chama-calculator", expectText: /SACCO|BOSA|KES/i },
  { slug: "helb-calculator", expectText: /HELB|KES/i },
  { slug: "stamp-duty-calculator", expectText: /Stamp Duty|4%|2%|KES/i },
  { slug: "boma-yangu-calculator", expectText: /Boma Yangu|KES/i, forbiddenText: /1\.5% Affordable Housing Levy tax deductions/ },
  { slug: "rental-tax-calculator", expectText: /7\.5%|MRI|KES/i },
  { slug: "landlord-tenant-rights", expectText: /Deposit|Notice|Tenant/i },
  { slug: "domestic-wage-calculator", expectText: /Minimum Wage|KES/i },
  { slug: "airtime-drain-guide", expectText: /\*456\*9\*1#|Safaricom|Airtel/i, forbiddenText: /Tap 'Dial Now'/i },
  { slug: "mobile-number-prefix", expectText: /Safaricom|Airtel|Calling Kenya from Abroad/i, forbiddenText: /Calling Outside Kenya:/i },
  { slug: "kcse-grade-calculator", expectText: /KCSE|Mean Grade/i },
  { slug: "kuccps-cluster-calculator", expectText: /KUCCPS|Cluster/i },
  { slug: "kjsea-pathway-engine", expectText: /KJSEA|STEM|Pathway/i },
  { slug: "sha-benefit-estimator", expectText: /SHA|SHIF|KES/i },
  { slug: "sha-claim-scrubber", expectText: /SHA|Claim|Discharge/i },
  { slug: "etims-mpesa-reconciler", expectText: /eTIMS|30%|M-Pesa/i },
  { slug: "ardhisasa-cad-title-auditor", expectText: /Ardhisasa|UTM|Polygon/i, forbiddenText: /`EASTING, NORTHING`/ },
];

test.describe("Complete Remaining 21-Calculator Deep Functional & Copy Audit", () => {
  test.beforeEach(async ({ page }, testInfo) => {
    const mode = testInfo.project.name.includes("light") ? "light" : "dark";
    await applyTheme(page, mode);
  });

  for (const sc of REMAINING_CALCULATOR_SCENARIOS) {
    test(`/tools/${sc.slug}/ validates interactive output, pills, and zero regressions`, async ({ page }, testInfo) => {
      const monitor = attachRuntimeMonitor(page);
      const url = `/tools/${sc.slug}/`;
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await captureAuditScreenshot(page, testInfo, `calc-${sc.slug}`);

      const bodyText = await page.locator("body").innerText();
      expect.soft(bodyText).toMatch(sc.expectText);
      if (sc.forbiddenText) {
        expect.soft(bodyText).not.toMatch(sc.forbiddenText);
      }

      if (sc.checkExpandPills) {
        await assertExpandedPillsLegible(page, page.locator('button[aria-label*="Expand" i]'));
      }

      await assertNoHorizontalOverflow(page, url);
      monitor.assertClean();
    });
  }
});
