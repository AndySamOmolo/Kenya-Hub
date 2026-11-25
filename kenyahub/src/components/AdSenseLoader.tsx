"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const MIN_PUBLISHER_TEXT_CHARS = 800;
const ADSENSE_SCRIPT_SRC =
  "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5895990873842803";

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

const BLOCKED_PATH_PREFIXES = [
  "/admin", "/account",
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

const IGNORED_SELECTOR = [
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
].join(", ");

let adSenseScriptInjected = false;

function ensureAdSenseScriptLoaded() {
  if (adSenseScriptInjected || typeof document === "undefined") return;
  if (document.querySelector(`script[src^="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]`)) {
    adSenseScriptInjected = true;
    return;
  }
  adSenseScriptInjected = true;
  const script = document.createElement("script");
  script.async = true;
  script.src = ADSENSE_SCRIPT_SRC;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
}

function getPublisherTextLength(mainEl: HTMLElement): number {
  let total = 0;
  const walker = document.createTreeWalker(
    mainEl,
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if ((node as Element).matches(IGNORED_SELECTOR)) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_SKIP;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    }
  );
  let current = walker.nextNode();
  while (current) {
    const chunk = (current.nodeValue || "").replace(/\s+/g, " ").trim();
    if (chunk) {
      total += chunk.length + 1;
      if (total >= MIN_PUBLISHER_TEXT_CHARS + 50) return total;
    }
    current = walker.nextNode();
  }
  return total;
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

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    let debounceTimer: ReturnType<typeof setTimeout> | null = null;
    let initialTimer: ReturnType<typeof setTimeout> | null = null;
    let idleCallbackId: number | null = null;
    let mutationObserver: MutationObserver | null = null;
    let cancelled = false;

    const setAdSensePausedState = (paused: boolean) => {
      try {
        const ads = (window.adsbygoogle = (window.adsbygoogle || []) as unknown as Record<string, unknown>[] & {
          pauseAdRequests?: number;
        });
        if (lastPausedRef.current !== paused) {
          ads.pauseAdRequests = paused ? 1 : 0;
          lastPausedRef.current = paused;
        }
      } catch {
        // Never allow AdSense queue state updates to crash the UI
      }
      document.documentElement.setAttribute(
        "data-adsense-state",
        paused ? "paused" : "active"
      );
    };

    const evaluatePageCompliance = (): boolean => {
      if (isBlockedRoute(pathname)) {
        setAdSensePausedState(true);
        return false;
      }

      if (
        document.querySelector('[data-error-page="true"]') ||
        document.querySelector('[data-adsense-pause="true"]')
      ) {
        setAdSensePausedState(true);
        return false;
      }

      const mainEl =
        document.getElementById("main-content") ||
        document.querySelector("main");
      if (!mainEl) {
        setAdSensePausedState(true);
        return false;
      }

      const visibleTextLength = getPublisherTextLength(mainEl as HTMLElement);
      const isCompliant = visibleTextLength >= MIN_PUBLISHER_TEXT_CHARS;
      setAdSensePausedState(!isCompliant);
      if (isCompliant) {
        ensureAdSenseScriptLoaded();
      }
      return isCompliant;
    };

    const scheduleEvaluation = () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(evaluatePageCompliance, 250);
    };

    const runInitialEvaluation = () => {
      if (cancelled) return;
      const isInitiallyCompliant = evaluatePageCompliance();

      const observeRoot = document.body;
      if (!isBlockedRoute(pathname) && observeRoot) {
        mutationObserver = new MutationObserver((mutations) => {
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
    };

    const win = window as Window & {
      requestIdleCallback?: (cb: IdleRequestCallback, opts?: IdleRequestOptions) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    setAdSensePausedState(true);
    if (isBlockedRoute(pathname)) {
      return () => { cancelled = true; };
    } else if (typeof win.requestIdleCallback === "function") {
      idleCallbackId = win.requestIdleCallback(runInitialEvaluation, { timeout: 1500 });
    } else {
      initialTimer = setTimeout(runInitialEvaluation, 1500);
    }

    return () => {
      cancelled = true;
      if (idleCallbackId !== null && typeof win.cancelIdleCallback === "function") {
        win.cancelIdleCallback(idleCallbackId);
      }
      if (initialTimer) clearTimeout(initialTimer);
      if (debounceTimer) clearTimeout(debounceTimer);
      mutationObserver?.disconnect();
    };
  }, [pathname]);

  return null;
}
