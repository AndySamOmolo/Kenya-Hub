/* eslint-disable */
import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const RESULTS_DIR = path.resolve(process.cwd(), "test-results");
const SCREENSHOT_DIR = path.join(RESULTS_DIR, "web-screenshots");
const SUMMARY_FILE = path.join(RESULTS_DIR, "web-audit-summary.json");
const REPORT_FILE = path.join(RESULTS_DIR, "web-audit-report.md");

const CORE_ROUTES = [
  { name: "core_home", path: "/" },
  { name: "core_tools", path: "/tools/" },
  { name: "core_county", path: "/county/" },
  { name: "core_county_nairobi", path: "/county/nairobi/" },
  { name: "core_county_mombasa", path: "/county/mombasa/" },
  { name: "core_matatu", path: "/matatu/" },
  { name: "core_matatu_nairobi", path: "/matatu/nairobi/" },
  { name: "core_blog", path: "/blog/" },
  { name: "core_about", path: "/about/" },
  { name: "core_contact", path: "/contact/" },
  { name: "core_privacy", path: "/privacy/" },
  { name: "core_terms", path: "/terms/" },
];

const ALL_33_TOOL_SLUGS = [
  "airtime-drain-guide",
  "ardhisasa-cad-title-auditor",
  "boma-yangu-calculator",
  "cbc-curriculum",
  "domestic-wage-calculator",
  "etims-mpesa-reconciler",
  "eudr-coop-geojson-packager",
  "helb-calculator",
  "icms-landed-cost-arbitrage",
  "kcse-grade-calculator",
  "kenyan-translator",
  "kjsea-pathway-engine",
  "kplc-token-calculator",
  "kra-car-import-calculator",
  "kuccps-cluster-calculator",
  "landlord-tenant-rights",
  "learn",
  "mjengo-construction-calculator",
  "mobile-number-prefix",
  "mpesa-fee-calculator",
  "ntsa-transfer-calculator",
  "number-plate-decoder",
  "odpc-hr-retention-vault",
  "paye-calculator",
  "ppra-egp-tender-serializer",
  "rental-tax-calculator",
  "sacco-chama-calculator",
  "sha-benefit-estimator",
  "sha-claim-scrubber",
  "small-claims-calculator",
  "stamp-duty-calculator",
  "traffic-fines",
  "water-bill-calculator",
];

const ALL_ROUTES = [
  ...CORE_ROUTES,
  ...ALL_33_TOOL_SLUGS.map((slug) => ({
    name: `tool_${slug}`,
    path: `/tools/${slug}/`,
  })),
];

const THEMES = ["light", "dark"];

function recordEntry(entry) {
  fs.mkdirSync(RESULTS_DIR, { recursive: true });
  fs.appendFileSync(`${SUMMARY_FILE}.ndjson`, `${JSON.stringify(entry)}\n`);
}

function finalizeReports() {
  const ndjsonPath = `${SUMMARY_FILE}.ndjson`;
  if (!fs.existsSync(ndjsonPath)) return;
  const entries = fs
    .readFileSync(ndjsonPath, "utf8")
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));

  fs.writeFileSync(SUMMARY_FILE, JSON.stringify(entries, null, 2));

  const failures = entries.filter((e) => e.status === "FAIL");
  const lines = [
    "# KenyaHub Web Comprehensive Audit Report",
    "",
    `- **Total checks:** ${entries.length}`,
    `- **Passed:** ${entries.length - failures.length}`,
    `- **Failed:** ${failures.length}`,
    "",
    "| Viewport | Theme | Route | Status | Overflow (px) | Page Errors | Console Errors | Broken Imgs | Unlabeled Buttons |",
    "| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: |",
    ...entries.map(
      (e) =>
        `| ${e.project} | ${e.theme} | \`${e.route}\` | ${e.status} | ${e.overflowPx} | ${e.pageErrors.length} | ${e.consoleErrors.length} | ${e.brokenImages.length} | ${e.unlabeledButtons} |`
    ),
  ];
  fs.writeFileSync(REPORT_FILE, `${lines.join("\n")}\n`);
}

test.describe("KenyaHub Web Exhaustive Visual, A11y & Zero-Error Audit", () => {
  test.beforeAll(() => {
    fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
  });

  test.afterAll(() => {
    finalizeReports();
  });

  for (const theme of THEMES) {
    for (const route of ALL_ROUTES) {
      test(`[${theme}] ${route.name} (${route.path}) — zero errors, zero overflow, valid media`, async ({
        page,
      }, testInfo) => {
        const pageErrors = [];
        const consoleErrors = [];
        const failedLocalRequests = [];

        page.on("pageerror", (err) => pageErrors.push(err.message));
        page.on("console", (msg) => {
          if (msg.type() === "error") {
            const text = msg.text();
            if (
              !text.includes("ERR_NAME_NOT_RESOLVED") &&
              !text.includes("Failed to load resource: net::")
            ) {
              consoleErrors.push(text);
            }
          }
        });
        page.on("response", (res) => {
          const url = res.url();
          if (url.startsWith("http://127.0.0.1") && res.status() >= 400) {
            failedLocalRequests.push(`${res.status()} ${url}`);
          }
        });

        await page.emulateMedia({ colorScheme: theme });
        await page.addInitScript((selectedTheme) => {
          try {
            window.localStorage.setItem("theme", selectedTheme);
            window.localStorage.setItem("kenyahub-theme", selectedTheme);
            if (selectedTheme === "dark") {
              document.documentElement.classList.add("dark");
              document.documentElement.setAttribute("data-theme", "dark");
            } else {
              document.documentElement.classList.remove("dark");
              document.documentElement.setAttribute("data-theme", "light");
            }
          } catch {
            // ignore storage restrictions
          }
        }, theme);

        const response = await page.goto(route.path, { waitUntil: "networkidle" });
        expect(response?.status(), `HTTP status for ${route.path}`).toBeLessThan(400);

        await page.waitForTimeout(350);

        const metrics = await page.evaluate(() => {
          const bodyText = (document.body.innerText || "").trim();
          const brokenImages = Array.from(document.querySelectorAll("img"))
            .filter((img) => {
              const style = window.getComputedStyle(img);
              const visible = style.display !== "none" && style.visibility !== "hidden";
              return visible && (!img.complete || img.naturalWidth === 0);
            })
            .map((img) => img.getAttribute("src") || "<no-src>");

          const unlabeledButtons = Array.from(document.querySelectorAll("button")).filter((btn) => {
            const style = window.getComputedStyle(btn);
            if (style.display === "none" || style.visibility === "hidden") return false;
            const text = (btn.innerText || "").trim();
            const aria = (btn.getAttribute("aria-label") || "").trim();
            const title = (btn.getAttribute("title") || "").trim();
            const labelledBy = (btn.getAttribute("aria-labelledby") || "").trim();
            return !text && !aria && !title && !labelledBy;
          }).length;

          return {
            title: document.title,
            bodyLength: bodyText.length,
            hasNextErrorBoundary:
              /Application error: a client-side exception|This page could not be found|__next_error__/i.test(
                bodyText
              ),
            hasNaN: /\bNaN\b/.test(bodyText),
            scrollWidth: document.documentElement.scrollWidth,
            innerWidth: window.innerWidth,
            scrollHeight: document.documentElement.scrollHeight,
            brokenImages,
            unlabeledButtons,
          };
        });

        const screenshotName = `${testInfo.project.name}_${theme}_${route.name}.png`;
        await page.screenshot({
          path: path.join(SCREENSHOT_DIR, screenshotName),
          fullPage: true,
        });

        const overflowPx = Math.max(0, metrics.scrollWidth - metrics.innerWidth);
        const failed =
          pageErrors.length > 0 ||
          consoleErrors.length > 0 ||
          failedLocalRequests.length > 0 ||
          metrics.brokenImages.length > 0 ||
          metrics.hasNextErrorBoundary ||
          metrics.hasNaN ||
          metrics.bodyLength < 50 ||
          overflowPx > 2;

        recordEntry({
          project: testInfo.project.name,
          theme,
          route: route.path,
          screenshot: screenshotName,
          title: metrics.title,
          overflowPx,
          scrollHeight: metrics.scrollHeight,
          brokenImages: metrics.brokenImages,
          unlabeledButtons: metrics.unlabeledButtons,
          pageErrors,
          consoleErrors,
          failedLocalRequests,
          status: failed ? "FAIL" : "PASS",
        });

        expect(metrics.hasNextErrorBoundary, `Error boundary on ${route.path}`).toBe(false);
        expect(metrics.hasNaN, `Unexpected NaN text on ${route.path}`).toBe(false);
        expect(metrics.bodyLength, `Page body length on ${route.path}`).toBeGreaterThan(50);
        expect(metrics.title.trim().length, `Document <title> on ${route.path}`).toBeGreaterThan(0);
        expect(pageErrors, `Uncaught page errors on ${route.path}`).toEqual([]);
        expect(consoleErrors, `Console errors on ${route.path}`).toEqual([]);
        expect(failedLocalRequests, `Failed local requests on ${route.path}`).toEqual([]);
        expect(metrics.brokenImages, `Broken images on ${route.path}`).toEqual([]);
        expect(
          overflowPx,
          `Horizontal overflow (${overflowPx}px) on ${route.path} (${testInfo.project.name}, ${theme})`
        ).toBeLessThanOrEqual(2);
      });
    }
  }
});

test.describe("KenyaHub Web Deep Interactive Functional Checks", () => {
  test("Number Plate Decoder parses diplomatic plate 29 CD 1K without errors", async ({ page }) => {
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));

    await page.goto("/tools/number-plate-decoder/", { waitUntil: "networkidle" });
    const input = page.locator("input[type='text'], input:not([type])").first();
    await expect(input).toBeVisible();
    await input.fill("29 CD 1K");
    await page.waitForTimeout(300);

    await expect(page.locator("body")).toContainText(/diplomat|embassy|corps/i);
    await expect(page.locator("body")).not.toContainText(/\bNaN\b/);
    expect(errors).toEqual([]);
  });

  test("Kenyan Translator displays With Audio filter and handles search queries", async ({ page }) => {
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));

    await page.goto("/tools/kenyan-translator/", { waitUntil: "networkidle" });
    await page.waitForTimeout(500);
    await expect(page.locator("body")).toContainText(/with audio/i);

    const searchInput = page.locator("input[type='search'], input[type='text']").first();
    if (await searchInput.isVisible()) {
      await searchInput.fill("jambo");
      await page.waitForTimeout(500);
    }
    expect(errors).toEqual([]);
  });

  test("PAYE Calculator computes valid non-NaN tax breakdown for KES 100,000", async ({ page }) => {
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));

    await page.goto("/tools/paye-calculator/", { waitUntil: "networkidle" });
    const numericInput = page
      .locator("input[type='number'], input[inputmode='numeric'], input[type='text']")
      .first();
    await expect(numericInput).toBeVisible();
    await numericInput.fill("100000");
    await page.waitForTimeout(300);

    const bodyText = await page.locator("body").innerText();
    expect(bodyText).not.toMatch(/\bNaN\b|\bInfinity\b/);
    expect(bodyText).toMatch(/PAYE|Net|NSSF|SHA/i);
    expect(errors).toEqual([]);
  });

  test("KPLC Token Calculator computes valid units for KES 1,000", async ({ page }) => {
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));

    await page.goto("/tools/kplc-token-calculator/", { waitUntil: "networkidle" });
    const input = page
      .locator("input[type='number'], input[inputmode='numeric'], input[type='text']")
      .first();
    await expect(input).toBeVisible();
    await input.fill("1000");
    await page.waitForTimeout(300);

    const bodyText = await page.locator("body").innerText();
    expect(bodyText).not.toMatch(/\bNaN\b|\bInfinity\b/);
    expect(bodyText).toMatch(/kWh|units|KES/i);
    expect(errors).toEqual([]);
  });

  test("M-Pesa Fee Calculator computes valid transaction fees for KES 5,000", async ({ page }) => {
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));

    await page.goto("/tools/mpesa-fee-calculator/", { waitUntil: "networkidle" });
    const input = page
      .locator("input[type='number'], input[inputmode='numeric'], input[type='text']")
      .first();
    await expect(input).toBeVisible();
    await input.fill("5000");
    await page.waitForTimeout(300);

    const bodyText = await page.locator("body").innerText();
    expect(bodyText).not.toMatch(/\bNaN\b|\bInfinity\b/);
    expect(bodyText).toMatch(/KES|Fee|Withdraw|Send/i);
    expect(errors).toEqual([]);
  });

  test("Water Bill Calculator computes valid charges without NaN", async ({ page }) => {
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));

    await page.goto("/tools/water-bill-calculator/", { waitUntil: "networkidle" });
    const input = page
      .locator("input[type='number'], input[inputmode='numeric'], input[type='text']")
      .first();
    await expect(input).toBeVisible();
    await input.fill("15");
    await page.waitForTimeout(300);

    const bodyText = await page.locator("body").innerText();
    expect(bodyText).not.toMatch(/\bNaN\b|\bInfinity\b/);
    expect(errors).toEqual([]);
  });

  test("Language Courses hub renders courses and opens a course without errors", async ({ page }) => {
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));

    await page.goto("/tools/learn/", { waitUntil: "networkidle" });
    await page.waitForTimeout(400);
    await expect(page.locator("body")).toContainText(/Swahili/i);

    const swahiliBtn = page.getByRole("button", { name: /Swahili/i }).first();
    if (await swahiliBtn.isVisible()) {
      await swahiliBtn.click();
      await page.waitForTimeout(500);
    }
    expect(errors).toEqual([]);
  });
});
