import { test as base, expect } from "@playwright/test";

const BLOCKED_HOSTS =
  /(googletagmanager\.com|google-analytics\.com|googlesyndication\.com|doubleclick\.net|adservice\.google\.)/i;

export const test = base.extend<{ autoGuards: void }>({
  autoGuards: [
    async ({ page }, use, testInfo) => {
      const pageErrors: string[] = [];
      const consoleErrors: string[] = [];
      const failedRequests: string[] = [];
      const mode = testInfo.project.name.includes("light") ? "light" : "dark";

      await page.addInitScript((themeMode) => {
        try {
          window.localStorage.setItem("kh-theme", themeMode);
          const consentPayload = JSON.stringify({
            essential: true,
            analytics: false,
            ads: false,
            timestamp: Date.now(),
          });
          window.localStorage.setItem("kh-cookie-consent", consentPayload);
          window.localStorage.setItem("kh-cookie-preferences", consentPayload);
        } catch {
          // Ignore storage restrictions on opaque origins
        }
      }, mode);

      await page.route(BLOCKED_HOSTS, (route) => route.abort("blockedbyclient"));

      page.on("pageerror", (err) => {
        pageErrors.push(err.message);
      });

      page.on("console", (msg) => {
        if (msg.type() === "error") {
          const text = msg.text();
          if (/ERR_BLOCKED_BY_CLIENT|googlesyndication|doubleclick|adservice|gtag/i.test(text)) {
            return;
          }
          consoleErrors.push(text);
        }
      });

      page.on("response", (res) => {
        const url = res.url();
        if (BLOCKED_HOSTS.test(url) || url.includes("favicon")) return;
        const isFirstParty =
          url.startsWith("http://127.0.0.1") ||
          url.startsWith("http://localhost") ||
          url.startsWith("https://kenyahub.me") ||
          url.startsWith("https://kenyahub.co.ke");
        if (isFirstParty && res.status() >= 400) {
          failedRequests.push(`${res.status()} ${url}`);
        }
      });

      await use();

      expect(pageErrors, `Uncaught page errors: ${pageErrors.join(" | ")}`).toEqual([]);
      expect(consoleErrors, `Console errors: ${consoleErrors.join(" | ")}`).toEqual([]);
      expect(failedRequests, `Failed 1P HTTP responses: ${failedRequests.join(" | ")}`).toEqual([]);
    },
    { auto: true },
  ],
});

export { expect };
