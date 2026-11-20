"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { readStoredConsent } from "@/components/CookieConsent";

const ADSENSE_CLIENT = "ca-pub-5895990873842803";
const ADSENSE_SCRIPT_ID = "kh-adsense-auto-ads";
const MIN_PUBLISHER_TEXT_CHARS = 800;

interface TcfData {
  eventStatus?: string;
  cmpStatus?: string;
  purpose?: {
    consents?: Record<string, boolean>;
    legitimateInterests?: Record<string, boolean>;
  };
}

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
    __tcfapi?: (
      command: string,
      version: number,
      callback: (tcData: TcfData, success: boolean) => void
    ) => void;
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
 * Checks whether advertising consent is denied or not yet granted.
 * Respects both Google Consent Mode v2 localStorage keys and IAB TCF v2.2 (__tcfapi)
 * if a Google-certified CMP (e.g., Google AdSense Privacy & Messaging) is active.
 */
function isAdvertisingConsentDenied(tcfDenied: boolean | null): boolean {
  if (typeof window === "undefined") return true;
  if (tcfDenied === true) return true;
  if (tcfDenied === false) return false;

  const stored = readStoredConsent();
  if (!stored.hasDecision) return true;
  return stored.preferences.advertising !== true;
}

/**
 * Computes visible publisher text inside <main>, excluding non-publisher UI chrome,
 * closed <details> accordions, <select> dropdown options, SVGs, and injected ad slots.
 */
function getPublisherTextLength(mainEl: HTMLElement): number {
  const rootCopy = mainEl.cloneNode(true) as HTMLElement;
  const ignored = rootCopy.querySelectorAll(
    [
      '[data-adsense-ignore="true"]',
      "nav",
      "script",
      "style",
      "noscript",
      "svg",
      "select",
      "option",
      "button",
      "input",
      "textarea",
      "details:not([open])",
      ".sr-only",
      "[hidden]",
      '[aria-hidden="true"]',
      ".google-auto-placed",
      "ins.adsbygoogle",
      "iframe",
    ].join(", ")
  );
  ignored.forEach((el) => el.remove());
  return (rootCopy.textContent || "").replace(/\s+/g, " ").trim().length;
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

function isAdSenseMutation(mutations: MutationRecord[]): boolean {
  return mutations.every((m) => {
    const target = m.target as HTMLElement | null;
    if (!target || typeof target.closest !== "function") return false;
    if (
      target.closest(".google-auto-placed") ||
      target.closest("ins.adsbygoogle") ||
      target.id?.startsWith("google_ads_frame")
    ) {
      return true;
    }
    const changedNodes = [
      ...Array.from(m.addedNodes),
      ...Array.from(m.removedNodes),
    ];
    if (changedNodes.length === 0) return false;
    return changedNodes.every((node) => {
      if (!(node instanceof HTMLElement)) return false;
      return (
        node.classList.contains("google-auto-placed") ||
        node.tagName === "INS" ||
        node.id?.startsWith("google_ads_frame") ||
        Boolean(node.querySelector?.("ins.adsbygoogle, .google-auto-placed"))
      );
    });
  });
}

export default function AdSenseLoader() {
  const pathname = usePathname();
  const lastPausedRef = useRef<boolean | null>(null);
  const tcfDeniedRef = useRef<boolean | null>(null);
  const scriptLoadedRef = useRef<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    let debounceTimer: ReturnType<typeof setTimeout> | null = null;
    let mutationObserver: MutationObserver | null = null;

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
      // 0. Respect user cookie consent preferences & IAB TCF v2.2
      if (isAdvertisingConsentDenied(tcfDeniedRef.current)) {
        setAdSensePausedState(true);
        return;
      }

      // 1. Block non-content, admin, legal, contact, and 404 routes
      if (isBlockedRoute(pathname)) {
        setAdSensePausedState(true);
        return;
      }

      // 2. Block any screen marked as an error, empty state, modal overlay, or active quiz/game/flashcard screen
      if (
        document.querySelector('[data-error-page="true"]') ||
        document.querySelector('[data-adsense-pause="true"]')
      ) {
        setAdSensePausedState(true);
        return;
      }

      // 3. Verify substantial visible publisher text in <main> (excluding [data-adsense-ignore="true"] & UI chrome)
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

      scriptLoadedRef.current = true;
      if (scriptLoadedRef.current && mutationObserver) {
        mutationObserver.disconnect();
      }
    };

    const scheduleEvaluation = () => {
      if (scriptLoadedRef.current) {
        mutationObserver?.disconnect();
        return;
      }
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(evaluatePageCompliance, 250);
    };

    // Bridge with IAB TCF v2.2 (__tcfapi) if Google-certified CMP is present
    if (typeof window.__tcfapi === "function") {
      try {
        window.__tcfapi("addEventListener", 2, (tcData, success) => {
          if (!success || !tcData) return;
          if (
            tcData.eventStatus === "tcloaded" ||
            tcData.eventStatus === "useractioncomplete"
          ) {
            const purpose1 = tcData.purpose?.consents?.["1"] === true;
            tcfDeniedRef.current = !purpose1;
            scheduleEvaluation();
          }
        });
      } catch {
        // Ignore TCF listener errors
      }
    }

    evaluatePageCompliance();

    // Re-evaluate if DOM state or async/dynamic child content changes before script initialization
    const observeRoot = document.body || document.getElementById("main-content");
    if (observeRoot && !scriptLoadedRef.current) {
      mutationObserver = new MutationObserver((mutations) => {
        if (scriptLoadedRef.current) {
          mutationObserver?.disconnect();
          return;
        }
        if (isAdSenseMutation(mutations)) return;
        scheduleEvaluation();
      });
      mutationObserver.observe(observeRoot, {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ["data-error-page", "data-adsense-pause", "open"],
      });
    }

    const handleConsentChange = () => evaluatePageCompliance();
    window.addEventListener("kh-cookie-consent-updated", handleConsentChange);

    return () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      mutationObserver?.disconnect();
      window.removeEventListener(
        "kh-cookie-consent-updated",
        handleConsentChange
      );
    };
  }, [pathname]);

  return null;
}
