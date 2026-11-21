import { expect, type Page, type Locator, type TestInfo } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

export interface RuntimeMonitor {
  consoleErrors: string[];
  pageErrors: string[];
  failedRequests: string[];
  assertClean: () => void;
}

/**
 * Captures a full-page audit screenshot organized by project (desktop/mobile x light/dark)
 * and attaches it to the Playwright HTML report.
 */
export async function captureAuditScreenshot(
  page: Page,
  testInfo: TestInfo,
  name: string,
  fullPage = true
) {
  const safeName = name.replace(/[^a-z0-9_-]+/gi, "-").replace(/^-|-$/g, "").toLowerCase();
  const dir = path.resolve(__dirname, "../../../reports/screenshots", testInfo.project.name);
  fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, `${safeName}.png`);
  try {
    await page.screenshot({ path: filePath, fullPage, animations: "disabled" });
    await testInfo.attach(`${testInfo.project.name}-${safeName}`, {
      path: filePath,
      contentType: "image/png",
    });
  } catch {
    // Do not abort the audit if a screenshot fails on a mid-navigation page
  }
}

/**
 * Attaches console, uncaught exception, and 4xx/5xx network monitors to a Playwright page.
 * Uses expect.soft() so the audit records every issue without stopping early.
 */
export function attachRuntimeMonitor(page: Page): RuntimeMonitor {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  const failedRequests: string[] = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      const txt = msg.text();
      if (/ERR_BLOCKED_BY_CLIENT|googlesyndication|doubleclick|adservice|gtag/i.test(txt)) return;
      consoleErrors.push(txt);
    }
  });
  page.on("pageerror", (err) => {
    pageErrors.push(err.message);
  });
  page.on("response", (res) => {
    const url = res.url();
    if (/googlesyndication|doubleclick|adservice|googletagmanager|google-analytics/i.test(url)) return;
    if (res.status() >= 400 && !url.includes("favicon")) {
      failedRequests.push(`${res.status()} ${url}`);
    }
  });

  return {
    consoleErrors,
    pageErrors,
    failedRequests,
    assertClean: () => {
      expect.soft(pageErrors, `Uncaught page errors: ${pageErrors.join(" | ")}`).toEqual([]);
      expect.soft(consoleErrors, `Console errors: ${consoleErrors.join(" | ")}`).toEqual([]);
      expect.soft(failedRequests, `Failed HTTP requests: ${failedRequests.join(" | ")}`).toEqual([]);
    },
  };
}

/**
 * Applies explicit light or dark theme and seeds cookie consent keys via localStorage before load.
 */
export async function applyTheme(page: Page, mode: "light" | "dark") {
  await page.addInitScript((m) => {
    try {
      const consent = JSON.stringify({ essential: true, analytics: false, ads: false, timestamp: Date.now() });
      localStorage.setItem("kh-theme", m);
      localStorage.setItem("kh-cookie-consent", consent);
      localStorage.setItem("kh-cookie-preferences", consent);
    } catch {}
  }, mode);
}

/**
 * Soft-asserts zero horizontal overflow at current viewport width.
 */
export async function assertNoHorizontalOverflow(page: Page, contextLabel: string) {
  const metrics = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect
    .soft(
      metrics.scrollWidth,
      `${contextLabel}: horizontal overflow (${metrics.scrollWidth}px > ${metrics.clientWidth}px)`
    )
    .toBeLessThanOrEqual(metrics.clientWidth + 2);
}

/**
 * Soft-asserts no raw Markdown leaks, NaN/undefined, or banned stale copy.
 */
export async function assertNoCopyOrMarkdownLeaks(page: Page, contextLabel: string) {
  const bodyText = await page.evaluate(() => document.body.innerText || "");
  const forbiddenPatterns: [RegExp, string][] = [
    [/\bNaN\b/, "NaN leaked into rendered UI"],
    [/\bundefined\b/, "undefined leaked into rendered UI"],
    [/`EASTING,\s*NORTHING`/i, "Raw Markdown backticks leaked in UTM label"],
    [/\b22-Language\b/, "Stale '22-Language' copy found"],
    [/\b300,067\+/, "Stale '300,067+' word count found"],
    [/\binteractive Leaflet maps\b/i, "Developer jargon 'Leaflet' found in user copy"],
    [/\bTap 'Dial Now'\b/i, "Non-existent 'Dial Now' CTA referenced"],
    [/\bCalling Outside Kenya:\b/i, "Mislabeled 'Calling Outside Kenya:' heading"],
  ];
  for (const [rx, msg] of forbiddenPatterns) {
    expect.soft(rx.test(bodyText), `${contextLabel}: ${msg}`).toBe(false);
  }
}

/**
 * Soft-asserts an element is not occluded at its center point by a fixed overlay, backdrop, or floating button.
 */
export async function assertNotOccluded(page: Page, locator: Locator, label: string) {
  await locator.scrollIntoViewIfNeeded();
  const box = await locator.boundingBox();
  expect.soft(box, `${label}: element has no bounding box`).not.toBeNull();
  if (!box) return;
  const cx = box.x + box.width / 2;
  const cy = box.y + box.height / 2;
  const hitOk = await locator.evaluate(
    (el, { x, y }) => {
      const topEl = document.elementFromPoint(x, y);
      return Boolean(topEl && (el === topEl || el.contains(topEl) || topEl.contains(el)));
    },
    { x: cx, y: cy }
  );
  expect.soft(hitOk, `${label}: center (${Math.round(cx)},${Math.round(cy)}) is occluded by another overlay`).toBe(true);
}

/**
 * Computes WCAG 2.1 contrast ratio between an element's foreground color and effective background.
 */
export async function getContrastRatio(locator: Locator): Promise<number> {
  return locator.evaluate((el) => {
    const parseRgb = (str: string): [number, number, number, number] => {
      const m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
      if (!m) return [0, 0, 0, 1];
      return [Number(m[1]), Number(m[2]), Number(m[3]), m[4] === undefined ? 1 : Number(m[4])];
    };
    const lum = ([r, g, b]: [number, number, number]) => {
      const f = (c: number) => {
        const s = c / 255;
        return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
      };
      return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
    };

    const fg = parseRgb(getComputedStyle(el).color);
    let cur: Element | null = el;
    let bg: [number, number, number, number] = [255, 255, 255, 1];
    while (cur) {
      const c = parseRgb(getComputedStyle(cur).backgroundColor);
      if (c[3] > 0.2) {
        bg = c;
        break;
      }
      cur = cur.parentElement;
    }
    const l1 = lum([fg[0], fg[1], fg[2]]);
    const l2 = lum([bg[0], bg[1], bg[2]]);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  });
}

/**
 * Soft-asserts expanded pill rows do not clip or wash out pills to near-zero opacity.
 */
export async function assertExpandedPillsLegible(page: Page, expandBtn: Locator) {
  if ((await expandBtn.count()) === 0) return;
  await expandBtn.first().click();
  await page.waitForTimeout(200);
  const lowOpacityCount = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll(".pill-interactive-item"));
    return items.filter((el) => parseFloat(getComputedStyle(el).opacity) < 0.85).length;
  });
  expect.soft(lowOpacityCount, "Expanded pills must remain fully opaque (>= 0.85)").toBe(0);
}
