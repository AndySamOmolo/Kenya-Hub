import { defineConfig, devices } from "@playwright/test";

const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:3000";
const IS_LIVE = /^https?:\/\/(?!127\.0\.0\.1|localhost)/.test(BASE_URL);

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  maxFailures: 0, // Never stop early — collect every single audit finding across all routes
  retries: 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ["list"],
    ["html", { outputFolder: "reports/playwright-html", open: "never" }],
    ["json", { outputFile: "reports/playwright-audit.json" }],
  ],
  use: {
    baseURL: BASE_URL,
    trace: "retain-on-failure",
    screenshot: "on",
    video: "on",
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
        ...devices["iPhone 13 Mini"],
        viewport: { width: 375, height: 812 },
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
          reuseExistingServer: !process.env.CI,
          timeout: 60_000,
        },
      }),
});
