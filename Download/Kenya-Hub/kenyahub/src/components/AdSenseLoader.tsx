"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const MIN_PUBLISHER_TEXT_CHARS = 800;

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

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

function getPublisherTextLength(mainEl: HTMLElement): number {
  let total = 0;
  const walker = document.createTreeWalker(mainEl, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || parent.closest(IGNORED_SELECTOR)) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });
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
    };

    const evaluatePageCompliance = () => {
      if (isBlockedRoute(pathname)) {
        setAdSensePausedState(true);
        return;
      }

      if (
        document.querySelector('[data-error-page="true"]') ||
        document.querySelector('[data-adsense-pause="true"]')
      ) {
        setAdSensePausedState(true);
        return;
      }

      const mainEl =
        document.getElementById("main-content") ||
        document.querySelector("main");
      if (!mainEl) {
        setAdSensePausedState(true);
        return;
      }

      const visibleTextLength = getPublisherTextLength(mainEl as HTMLElement);
      setAdSensePausedState(visibleTextLength < MIN_PUBLISHER_TEXT_CHARS);
    };

    const scheduleEvaluation = () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(evaluatePageCompliance, 250);
    };

    evaluatePageCompliance();

    const observeRoot = document.getElementById("main-content") || document.body;
    if (observeRoot) {
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

    return () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      mutationObserver?.disconnect();
    };
  }, [pathname]);

  return null;
}
