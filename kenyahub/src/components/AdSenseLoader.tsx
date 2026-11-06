"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ADSENSE_CLIENT = "ca-pub-5895990873842803";
const ADSENSE_SCRIPT_ID = "kh-adsense-auto-ads";
const MIN_PUBLISHER_TEXT_CHARS = 800;

declare global {
  interface Window {
    adsbygoogle?: unknown[] & { pauseAdRequests?: number };
  }
}

/**
 * Routes where Google AdSense ads must NEVER be served per Google AdSense
 * Program Policies ("Google-served ads on screens without publisher-content"):
 * - Admin / login / authentication / CMS screens
 * - Legal, privacy, terms & corporate disclosure screens
 * - Contact & support form screens
 * - Error / 404 screens
 */
const BLOCKED_PATH_PREFIXES = [
  "/admin",
  "/privacy",
  "/terms",
  "/contact",
  "/about",
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

function getSubstantivePublisherTextLength(): number {
  const mainEl =
    document.getElementById("main-content") || document.querySelector("main");
  if (!mainEl) return 0;
  const raw = (mainEl.innerText || mainEl.textContent || "").trim();
  return raw.replace(/\s+/g, " ").length;
}

function suppressAdSenseOnCurrentScreen() {
  document.documentElement.setAttribute("data-adsense-state", "paused");
  try {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.pauseAdRequests = 1;
  } catch {
    // ignore
  }
  const autoPlaced = document.querySelectorAll(
    ".google-auto-placed, ins.adsbygoogle"
  );
  autoPlaced.forEach((node) => {
    if (node instanceof HTMLElement) {
      node.style.display = "none";
    }
  });
}

function enableAdSenseOnCurrentScreen() {
  document.documentElement.setAttribute("data-adsense-state", "active");
  try {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.pauseAdRequests = 0;
  } catch {
    // ignore
  }
  if (!document.getElementById(ADSENSE_SCRIPT_ID)) {
    const script = document.createElement("script");
    script.id = ADSENSE_SCRIPT_ID;
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }
}

export default function AdSenseLoader() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const evaluatePageCompliance = () => {
      // 1. Block non-content, admin, legal, contact, about, and 404 routes
      if (isBlockedRoute(pathname)) {
        suppressAdSenseOnCurrentScreen();
        return;
      }

      // 2. Block any screen marked as an error, empty state, thin embed, or active interactive quiz/game
      if (
        document.querySelector('[data-error-page="true"]') ||
        document.querySelector('[data-adsense-pause="true"]')
      ) {
        suppressAdSenseOnCurrentScreen();
        return;
      }

      // 3. Verify substantial visible publisher text in <main> before allowing ads
      const visibleTextLength = getSubstantivePublisherTextLength();
      if (visibleTextLength < MIN_PUBLISHER_TEXT_CHARS) {
        suppressAdSenseOnCurrentScreen();
        return;
      }

      // 4. Page is verified content-rich publisher content: allow AdSense
      enableAdSenseOnCurrentScreen();
    };

    // Run after initial route render and observe DOM mutations in <main>
    const timer = window.setTimeout(evaluatePageCompliance, 80);

    const mainEl =
      document.getElementById("main-content") || document.querySelector("main");
    let debounceTimer: number | undefined;
    const observer =
      mainEl && typeof MutationObserver !== "undefined"
        ? new MutationObserver(() => {
            if (debounceTimer) window.clearTimeout(debounceTimer);
            debounceTimer = window.setTimeout(evaluatePageCompliance, 120);
          })
        : null;

    if (observer && mainEl) {
      observer.observe(mainEl, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["data-error-page", "data-adsense-pause"],
      });
    }

    return () => {
      window.clearTimeout(timer);
      if (debounceTimer) window.clearTimeout(debounceTimer);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
