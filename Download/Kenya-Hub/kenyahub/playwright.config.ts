import { defineConfig, devices } from "@playwright/test";

const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:3000";
const IS_LIVE = /^https?:\/\/(?!127\.0\.0\.1|localhost)/.test(BASE_URL);
const isCI = Boolean(process.env.CI);

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 30_000,
  expect: { timeout: 10_000 },
  globalTimeout: isCI ? 15 * 60 * 1000 : 0,
  fullyParallel: true,
  forbidOnly: isCI,
  maxFailures: 0, // Collect every audit finding across all routes
  retries: isCI ? 1 : 0,
  workers: isCI ? 2 : undefined,
  preserveOutput: "failures-only",
  reporter: [
    ["list"],
    ["html", { outputFolder: "reports/playwright-html", open: "never" }],
    ["json", { outputFile: "reports/playwright-audit.json" }],
  ],
  use: {
    baseURL: BASE_URL,
    screenshot: 'off',
    video: 'off',
    trace: "on-first-retry",
    reducedMotion: "reduce",
    actionTimeout: 12_000,
    navigationTimeout: 25_000,
  },
  projects: [
    {
      name: "desktop-dark",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 800 },
        colorScheme: "dark",
      },
    },
    {
      name: "desktop-light",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 800 },
        colorScheme: "light",
      },
    },
    {
      name: "mobile-dark",
      use: {
        ...devices["Pixel 7"],
        viewport: { width: 390, height: 844 },
        colorScheme: "dark",
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
  ...(IS_LIVE
    ? {}
    : {
        webServer: {
          command: "npx serve out -l 3000",
          url: "http://127.0.0.1:3000",
          reuseExistingServer: !isCI,
          timeout: 60_000,
        },
      }),
});
