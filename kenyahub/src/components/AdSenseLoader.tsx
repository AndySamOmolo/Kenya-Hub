"use client";

import { useEffect } from "react";
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
 * Program Policies ("Google-served ads on screens without publisher-content"):
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

function setAdSensePausedState(paused: boolean) {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  window.adsbygoogle = window.adsbygoogle || [];
  window.adsbygoogle.push({ pauseAdRequests: paused ? 1 : 0 });
  document.documentElement.setAttribute(
    "data-adsense-state",
    paused ? "paused" : "active"
  );
}

export default function AdSenseLoader() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const evaluatePageCompliance = () => {
      // 1. Block non-content, admin, legal, contact, and 404 routes
      if (isBlockedRoute(pathname)) {
        setAdSensePausedState(true);
        return;
      }

      // 2. Block any screen marked as an error, empty state, or active quiz/game screen without publisher text
      if (
        document.querySelector('[data-error-page="true"]') ||
        document.querySelector('[data-adsense-pause="true"]')
      ) {
        setAdSensePausedState(true);
        return;
      }

      // 3. Verify substantial visible publisher text in <main> before loading or resuming ads
      const mainEl =
        document.getElementById("main-content") ||
        document.querySelector("main");
      const visibleTextLength = (
        mainEl?.innerText ||
        mainEl?.textContent ||
        ""
      )
        .replace(/\s+/g, " ")
        .trim().length;

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

    evaluatePageCompliance();

    // Re-evaluate if DOM state changes (e.g. entering/exiting an interactive lesson or game modal)
    const mainEl =
      document.getElementById("main-content") || document.querySelector("main");
    if (!mainEl) return;

    const observer = new MutationObserver(() => {
      evaluatePageCompliance();
    });
    observer.observe(mainEl, {
      attributes: true,
      subtree: true,
      attributeFilter: ["data-error-page", "data-adsense-pause"],
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
