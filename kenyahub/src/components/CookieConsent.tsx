/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import { Cookie, Settings2 } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

interface CookiePreferences {
  analytics: boolean;
  advertising: boolean;
}

function expireCookieNames(names: string[]) {
  if (typeof document === "undefined" || typeof window === "undefined") return;
  const host = window.location.hostname;
  const domains = ["", `; domain=${host}`, `; domain=.${host}`, "; domain=.kenyahub.me"];
  for (const name of names) {
    for (const domainAttr of domains) {
      document.cookie = `${name}=; Path=/; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT${domainAttr}; SameSite=Lax`;
    }
  }
  // Also expire any dynamic _ga_* measurement cookies if analytics cookies are being cleared
  if (names.includes("_ga") && document.cookie) {
    const allCookies = document.cookie.split(";");
    for (const rawCookie of allCookies) {
      const cookieName = rawCookie.split("=")[0]?.trim();
      if (cookieName && (cookieName.startsWith("_ga_") || cookieName.startsWith("_gat_"))) {
        for (const domainAttr of domains) {
          document.cookie = `${cookieName}=; Path=/; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT${domainAttr}; SameSite=Lax`;
        }
      }
    }
  }
}

export function applyGoogleConsent(prefs: CookiePreferences) {
  window.gtag?.("consent", "update", {
    ad_storage: prefs.advertising ? "granted" : "denied",
    ad_user_data: prefs.advertising ? "granted" : "denied",
    ad_personalization: prefs.advertising ? "granted" : "denied",
    analytics_storage: prefs.analytics ? "granted" : "denied",
  });

  if (!prefs.analytics) {
    expireCookieNames(["_ga", "_gid", "_gat"]);
  }
  if (!prefs.advertising) {
    expireCookieNames(["__gads", "__gpi"]);
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    analytics: true,
    advertising: true,
  });

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function (...args: unknown[]) {
        window.dataLayer!.push(arguments);
      };

    // If a Google-certified IAB TCF v2.2 CMP (e.g., Google Funding Choices / Privacy & Messaging)
    // is active on the page, defer automatic banner display to the TCF v2.2 CMP to prevent double banners.
    const hasTcfCmp = typeof window.__tcfapi === "function";

    const stored = localStorage.getItem("kh-cookie-consent");
    const storedPreferences = localStorage.getItem("kh-cookie-preferences");
    if (storedPreferences) {
      try {
        const parsed = JSON.parse(storedPreferences) as Partial<CookiePreferences>;
        const next = {
          analytics: parsed.analytics === true,
          advertising: parsed.advertising === true,
        };
        setPreferences(next);
        applyGoogleConsent(next);
      } catch {
        applyGoogleConsent({ analytics: false, advertising: false });
      }
    } else if (stored === "accepted") {
      const next = { analytics: true, advertising: true };
      setPreferences(next);
      applyGoogleConsent(next);
    } else if (stored === "declined" || stored === "essential") {
      setPreferences({ analytics: false, advertising: false });
      applyGoogleConsent({ analytics: false, advertising: false });
    } else if (!hasTcfCmp) {
      setVisible(true);
    }

    const handleOpenBanner = () => {
      setVisible(true);
    };
    window.addEventListener("kh-open-cookie-banner", handleOpenBanner);
    return () => {
      window.removeEventListener("kh-open-cookie-banner", handleOpenBanner);
    };
  }, []);

  const handleAccept = () => {
    savePreferences({ analytics: true, advertising: true }, "accepted");
  };

  const handleDecline = () => {
    savePreferences({ analytics: false, advertising: false }, "declined");
  };

  const savePreferences = (
    next: CookiePreferences,
    legacyStatus: "accepted" | "declined" | "custom" = "custom"
  ) => {
    setPreferences(next);
    localStorage.setItem("kh-cookie-preferences", JSON.stringify(next));
    localStorage.setItem("kh-cookie-consent", legacyStatus);
    applyGoogleConsent(next);
    window.dispatchEvent(new Event("kh-cookie-consent-updated"));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      data-adsense-ignore="true"
      className="fixed bottom-3 inset-x-3 sm:inset-x-auto sm:right-5 sm:bottom-5 z-[100] sm:max-w-md animate-fade-in-up"
      role="dialog"
      aria-label={showSettings ? "Cookie preferences" : "Cookie consent"}
    >
      <div className="bg-bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl shadow-black/40 p-3.5 sm:p-4">
        {showSettings ? (
          <div role="dialog" aria-label="Cookie preferences">
            <div className="flex items-start gap-2.5 mb-3">
              <Settings2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="text-xs sm:text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
                  Manage cookie preferences
                </p>
                <p className="text-[0.7rem] text-text-secondary mt-0.5 leading-relaxed">
                  Essential storage is always active. Choose analytics and Google AdSense advertising preferences.{" "}
                  <a
                    href="https://policies.google.com/technologies/partner-sites"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    How Google uses data
                  </a>
                </p>
              </div>
            </div>
            <div className="space-y-1.5 mb-3.5">
              <label className="flex items-center justify-between gap-3 rounded-xl border border-border bg-bg-elevated/50 px-3 py-2">
                <span>
                  <span className="block text-xs font-semibold text-text-primary">Essential</span>
                  <span className="block text-[0.65rem] text-text-muted">Required for local tools &amp; language progress</span>
                </span>
                <input type="checkbox" checked disabled className="accent-gold" aria-label="Essential cookies always enabled" />
              </label>
              <label className="flex items-center justify-between gap-3 rounded-xl border border-border bg-bg-elevated/50 px-3 py-2 cursor-pointer">
                <span>
                  <span className="block text-xs font-semibold text-text-primary">Analytics</span>
                  <span className="block text-[0.65rem] text-text-muted">Anonymous GA4 tool usage stats</span>
                </span>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(event) =>
                    setPreferences((current) => ({ ...current, analytics: event.target.checked }))
                  }
                  className="accent-gold"
                  aria-label="Analytics cookies"
                />
              </label>
              <label className="flex items-center justify-between gap-3 rounded-xl border border-border bg-bg-elevated/50 px-3 py-2 cursor-pointer">
                <span>
                  <span className="block text-xs font-semibold text-text-primary">Advertising</span>
                  <span className="block text-[0.65rem] text-text-muted">Google AdSense personalized &amp; non-personalized ads</span>
                </span>
                <input
                  type="checkbox"
                  checked={preferences.advertising}
                  onChange={(event) =>
                    setPreferences((current) => ({ ...current, advertising: event.target.checked }))
                  }
                  className="accent-gold"
                  aria-label="Advertising cookies"
                />
              </label>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowSettings(false)}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-border text-text-secondary hover:text-text-primary transition-all"
              >
                Back
              </button>
              <button
                onClick={() => savePreferences(preferences)}
                className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-gold to-gold-vivid text-black hover:opacity-90 transition-opacity"
              >
                Save Preferences
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-2.5">
            <div className="flex items-start gap-2.5">
              <Cookie className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <p className="text-xs text-text-secondary leading-snug">
                KenyaHub uses cookies for analytics &amp; Google AdSense ads. See our{" "}
                <a href="/privacy/" className="text-gold hover:underline font-medium">
                  Privacy Policy
                </a>{" "}
                &amp;{" "}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline font-medium"
                >
                  Google Partner Terms
                </a>.
              </p>
            </div>
            <div className="flex items-center justify-end gap-1.5">
              <button
                onClick={() => setShowSettings(true)}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg text-gold hover:bg-gold/10 transition-all cursor-pointer"
              >
                <Settings2 className="w-3.5 h-3.5" /> Manage
              </button>
              <button
                onClick={handleDecline}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-border text-text-secondary hover:text-text-primary transition-all cursor-pointer"
              >
                Essential Only
              </button>
              <button
                onClick={handleAccept}
                className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-gold to-gold-vivid text-black hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
              >
                Accept
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
