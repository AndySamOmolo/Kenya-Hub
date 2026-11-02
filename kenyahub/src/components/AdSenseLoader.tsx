"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ADSENSE_CLIENT = "ca-pub-5895990873842803";
const ADSENSE_SCRIPT_ID = "kh-adsense-auto-ads";

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

export default function AdSenseLoader() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    // 1. Block non-content, admin, legal, contact, and 404 routes
    if (isBlockedRoute(pathname)) {
      return;
    }

    // 2. Block any screen marked as an error, empty state, or thin embed page
    if (document.querySelector('[data-error-page="true"]')) {
      return;
    }

    // 3. Verify substantial visible publisher text in <main> before loading ads
    const mainEl = document.getElementById("main-content") || document.querySelector("main");
    const visibleTextLength = (mainEl?.innerText || mainEl?.textContent || "").trim().length;
    if (visibleTextLength < 600) {
      return;
    }

    // 4. Inject AdSense script once on verified content-rich pages
    if (!document.getElementById(ADSENSE_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = ADSENSE_SCRIPT_ID;
      script.async = true;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }
  }, [pathname]);

  return null;
}
