"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const ADSENSE_CLIENT = "ca-pub-5895990873842803";
const ADSENSE_SCRIPT_ID = "kh-adsense-auto-ads";
const MIN_PUBLISHER_TEXT_CHARS = 800;

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

/**
 * Routes where Google AdSense ads must NEVER be served per Google AdSense
 * Program Policies ("Google-served ads on screens without publisher-content")
 * and Google Publisher Restrictions:
 * - Admin / login / authentication / CMS screens
 * - Legal & policy disclosure screens (Privacy, Terms)
 * - Contact & support form screens
 * - Error / 404 screens
 */
const BLOCKED_PATH_PREFIXES = [
  "/admin",
  "/privacy",
  "/terms",
  "/contact",
  "/404",
  "/_not-found",
];

function isBlockedRoute(pathname: string | null): boolean {
  if (!pathname) return true;
  const clean = pathname.toLowerCase();
  return BLOCKED_PATH_PREFIXES.some(
    (prefix) => clean === prefix || clean.startsWith(`${prefix}/`)
  );
}

/**
 * Checks whether the user has rejected advertising cookies in CookieConsent.
 */
function isAdvertisingConsentDenied(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const rawPrefs = localStorage.getItem("kh-cookie-preferences");
    if (rawPrefs) {
      const parsed = JSON.parse(rawPrefs);
      if (parsed && parsed.advertising === false) {
        return true;
      }
    }
    const status = localStorage.getItem("kh-cookie-consent");
    if (status === "essential") {
      return true;
    }
  } catch {
    // Ignore storage read errors
  }
  return false;
}

/**
 * Computes visible publisher text inside <main>, excluding elements marked
 * with [data-adsense-ignore="true"] (breadcrumbs, related link blocks, etc.).
 */
function getPublisherTextLength(mainEl: HTMLElement): number {
  const clone = mainEl.cloneNode(true) as HTMLElement;
  const ignored = clone.querySelectorAll(
    '[data-adsense-ignore="true"], nav, script, style'
  );
  ignored.forEach((el) => el.remove());
  return (clone.innerText || clone.textContent || "")
    .replace(/\s+/g, " ")
    .trim().length;
}

function removeInjectedAutoAds() {
  if (typeof document === "undefined") return;
  const autoPlaced = document.querySelectorAll(
    [
      ".google-auto-placed",
      "ins.adsbygoogle[data-ad-status]",
      "ins.adsbygoogle[data-adsbygoogle-status]",
      "ins.adsbygoogle[data-anchor-status]",
      "div.google-revocation-link-placeholder",
      'iframe[id^="google_ads_frame"]',
    ].join(", ")
  );
  autoPlaced.forEach((node) => {
    node.parentElement?.removeChild(node);
  });
  if (document.body) {
    document.body.style.paddingBottom = "";
    document.body.style.paddingTop = "";
  }
}

export default function AdSenseLoader() {
  const pathname = usePathname();
  const lastPausedRef = useRef<boolean | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    let debounceTimer: ReturnType<typeof setTimeout> | null = null;

    const setAdSensePausedState = (paused: boolean) => {
      window.adsbygoogle = window.adsbygoogle || [];
      if (lastPausedRef.current !== paused) {
        window.adsbygoogle.push({ pauseAdRequests: paused ? 1 : 0 });
        lastPausedRef.current = paused;
      }
      document.documentElement.setAttribute(
        "data-adsense-state",
        paused ? "paused" : "active"
      );
      if (paused) {
        removeInjectedAutoAds();
      }
    };

    const evaluatePageCompliance = () => {
      // 0. Respect user cookie consent preferences
      if (isAdvertisingConsentDenied()) {
        setAdSensePausedState(true);
        return;
      }

      // 1. Block non-content, admin, legal, contact, and 404 routes
      if (isBlockedRoute(pathname)) {
        setAdSensePausedState(true);
        return;
      }

      // 2. Block any screen marked as an error, empty state, or active quiz/game/flashcard screen
      if (
        document.querySelector('[data-error-page="true"]') ||
        document.querySelector('[data-adsense-pause="true"]')
      ) {
        setAdSensePausedState(true);
        return;
      }

      // 3. Verify substantial visible publisher text in <main> (excluding [data-adsense-ignore="true"])
      const mainEl =
        document.getElementById("main-content") ||
        document.querySelector("main");
      if (!mainEl) {
        setAdSensePausedState(true);
        return;
      }

      const visibleTextLength = getPublisherTextLength(mainEl as HTMLElement);
      if (visibleTextLength < MIN_PUBLISHER_TEXT_CHARS) {
        setAdSensePausedState(true);
        return;
      }

      // 4. Page is verified content-rich: unpause ad requests and inject AdSense script once
      setAdSensePausedState(false);

      if (!document.getElementById(ADSENSE_SCRIPT_ID)) {
        const script = document.createElement("script");
        script.id = ADSENSE_SCRIPT_ID;
        script.async = true;
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
        script.crossOrigin = "anonymous";
        document.head.appendChild(script);
      }
    };

    const scheduleEvaluation = () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(evaluatePageCompliance, 250);
    };

    evaluatePageCompliance();

    // Re-evaluate if DOM state or async/dynamic child content changes (debounced 250ms)
    const mainEl =
      document.getElementById("main-content") || document.querySelector("main");
    if (!mainEl) return;

    const observer = new MutationObserver(() => {
      scheduleEvaluation();
    });
    observer.observe(mainEl, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ["data-error-page", "data-adsense-pause"],
    });

    const handleConsentChange = () => evaluatePageCompliance();
    window.addEventListener("kh-cookie-consent-updated", handleConsentChange);

    return () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      observer.disconnect();
      window.removeEventListener(
        "kh-cookie-consent-updated",
        handleConsentChange
      );
    };
  }, [pathname]);

  return null;
}
