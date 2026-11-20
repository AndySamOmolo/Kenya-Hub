/* eslint-disable */
import { defineConfig, devices } from "@playwright/test";

const PORT = Number(process.env.PLAYWRIGHT_PORT || 4173);
const BASE_URL = process.env.PLAYWRIGHT_BASE_URL || `http://127.0.0.1:${PORT}`;
const isCI = Boolean(process.env.CI);

export default defineConfig({
  testDir: "./e2e",
  testMatch: "**/*.spec.mjs",
  timeout: 30_000,
  expect: {
    timeout: 10_000,
  },
  globalTimeout: isCI ? 15 * 60 * 1000 : 0,
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 1 : 0,
  workers: isCI ? 2 : undefined,
  preserveOutput: "failures-only",
  reporter: [
    ["list"],
    ["html", { outputFolder: "reports/playwright-html", open: "never" }],
  ],
  use: {
    baseURL: BASE_URL,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",
    reducedMotion: "reduce",
  },
  webServer: process.env.PLAYWRIGHT_BASE_URL
    ? undefined
    : {
        command: `node scripts/serve-out.mjs --port ${PORT}`,
        url: BASE_URL,
        reuseExistingServer: !isCI,
        timeout: 30_000,
      },
  projects: [
    {
      name: "desktop-chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 900 },
      },
    },
    {
      name: "mobile-chromium",
      use: {
        ...devices["Pixel 7"],
        viewport: { width: 390, height: 844 },
      },
    },
    {
      name: "mobile-light",
      use: {
        ...devices["iPhone 14"],
        defaultBrowserType: "chromium",
        colorScheme: "light",
      },
    },
  ],
});
