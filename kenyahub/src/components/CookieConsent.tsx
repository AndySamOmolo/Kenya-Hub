/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import { Cookie, Settings2 } from "lucide-react";

const GA_MEASUREMENT_ID = "G-Y069879V7Y";
const GA_SCRIPT_ID = "kh-ga4-gtag";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    __khGaConfigured?: boolean;
  }
}

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  advertising: boolean;
  ads?: boolean;
}

export interface ParsedConsentState {
  hasDecision: boolean;
  preferences: CookiePreferences;
}

function isProductionAnalyticsHost(): boolean {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname;
  return host === "kenyahub.co.ke" || host === "kenyahub.me";
}

function parseJsonConsent(raw: string | null): CookiePreferences | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  if (!trimmed.startsWith("{")) return null;
  try {
    const parsed = JSON.parse(trimmed) as Record<string, unknown>;
    if (!parsed || typeof parsed !== "object") return null;
    const analytics = parsed.analytics === true;
    const advertising = parsed.advertising === true || parsed.ads === true;
    return {
      essential: true,
      analytics,
      advertising,
      ads: advertising,
    };
  } catch {
    return null;
  }
}

export function readStoredConsent(): ParsedConsentState {
  if (typeof window === "undefined") {
    return {
      hasDecision: false,
      preferences: { essential: true, analytics: false, advertising: false, ads: false },
    };
  }

  try {
    const rawPrefs = localStorage.getItem("kh-cookie-preferences");
    const rawConsent = localStorage.getItem("kh-cookie-consent");

    const fromPrefs = parseJsonConsent(rawPrefs);
    if (fromPrefs) {
      return { hasDecision: true, preferences: fromPrefs };
    }

    const fromConsentJson = parseJsonConsent(rawConsent);
    if (fromConsentJson) {
      return { hasDecision: true, preferences: fromConsentJson };
    }

    if (rawConsent === "accepted") {
      return {
        hasDecision: true,
        preferences: { essential: true, analytics: true, advertising: true, ads: true },
      };
    }

    if (rawConsent === "declined" || rawConsent === "essential" || rawConsent === "rejected") {
      return {
        hasDecision: true,
        preferences: { essential: true, analytics: false, advertising: false, ads: false },
      };
    }
  } catch {
    // ignore storage errors
  }

  return {
    hasDecision: false,
    preferences: { essential: true, analytics: false, advertising: false, ads: false },
  };
}

function expireCookieNames(names: string[]) {
  if (typeof document === "undefined" || typeof window === "undefined") return;
  const host = window.location.hostname;
  const domains = ["", `; domain=${host}`, `; domain=.${host}`, "; domain=.kenyahub.me", "; domain=.kenyahub.co.ke"];
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

function ensureGa4Loaded(prefs: CookiePreferences) {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  // Strictly gate GA4 behind explicit analytics consent AND production hostname only
  if (prefs.analytics !== true || !isProductionAnalyticsHost()) return;

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
  }

  if (!window.__khGaConfigured) {
    window.gtag("consent", "default", {
      ad_storage: prefs.advertising ? "granted" : "denied",
      ad_user_data: prefs.advertising ? "granted" : "denied",
      ad_personalization: prefs.advertising ? "granted" : "denied",
      analytics_storage: "granted",
    });
    window.gtag("set", "ads_data_redaction", !prefs.advertising);
    window.gtag("set", "url_passthrough", false);
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID);
    window.__khGaConfigured = true;
  }

  if (!document.getElementById(GA_SCRIPT_ID)) {
    const script = document.createElement("script");
    script.id = GA_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }
}

export function applyGoogleConsent(prefs: CookiePreferences) {
  if (typeof window === "undefined") return;

  if (prefs.analytics === true && isProductionAnalyticsHost()) {
    ensureGa4Loaded(prefs);
  }

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      ad_storage: prefs.advertising ? "granted" : "denied",
      ad_user_data: prefs.advertising ? "granted" : "denied",
      ad_personalization: prefs.advertising ? "granted" : "denied",
      analytics_storage: prefs.analytics ? "granted" : "denied",
    });
  }

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
    essential: true,
    analytics: false,
    advertising: false,
    ads: false,
  });

  useEffect(() => {
    // If a Google-certified IAB TCF v2.2 CMP is active, defer automatic banner display
    const hasTcfCmp = typeof window.__tcfapi === "function";
    const stored = readStoredConsent();

    if (stored.hasDecision) {
      setPreferences(stored.preferences);
      applyGoogleConsent(stored.preferences);
      setVisible(false);
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

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.classList.toggle("kh-cookie-banner-open", visible);
    return () => {
      document.body.classList.remove("kh-cookie-banner-open");
    };
  }, [visible]);

  const handleAccept = () => {
    savePreferences({ essential: true, analytics: true, advertising: true, ads: true }, "accepted");
  };

  const handleDecline = () => {
    savePreferences({ essential: true, analytics: false, advertising: false, ads: false }, "declined");
  };

  const savePreferences = (
    next: CookiePreferences,
    legacyStatus: "accepted" | "declined" | "custom" = "custom"
  ) => {
    const normalized: CookiePreferences = {
      essential: true,
      analytics: next.analytics === true,
      advertising: next.advertising === true,
      ads: next.advertising === true,
    };
    setPreferences(normalized);
    try {
      localStorage.setItem("kh-cookie-preferences", JSON.stringify(normalized));
      localStorage.setItem("kh-cookie-consent", legacyStatus);
    } catch {
      // ignore storage errors
    }
    applyGoogleConsent(normalized);
    window.dispatchEvent(new Event("kh-cookie-consent-updated"));
    setShowSettings(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      data-adsense-ignore="true"
      className="fixed bottom-0 inset-x-0 z-[95] border-t border-border bg-bg-card/98 backdrop-blur-md shadow-2xl shadow-black/30"
      style={{ backgroundColor: "var(--bg-card)" }}
      role="dialog"
      aria-label={showSettings ? "Cookie preferences" : "Cookie consent"}
    >
      {showSettings ? (
        <div className="max-w-xl mx-auto px-4 py-3.5">
          <div className="flex items-start gap-2.5 mb-2.5">
            <Settings2 className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
            <label className="flex items-center justify-between gap-2 rounded-xl border border-border bg-bg-elevated/50 px-3 py-2">
              <span>
                <span className="block text-xs font-semibold text-text-primary">Essential</span>
                <span className="block text-[0.65rem] text-text-muted">Local tools &amp; progress</span>
              </span>
              <input type="checkbox" checked disabled className="accent-gold" aria-label="Essential cookies always enabled" />
            </label>
            <label className="flex items-center justify-between gap-2 rounded-xl border border-border bg-bg-elevated/50 px-3 py-2 cursor-pointer">
              <span>
                <span className="block text-xs font-semibold text-text-primary">Analytics</span>
                <span className="block text-[0.65rem] text-text-muted">Anonymous GA4 stats</span>
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
            <label className="flex items-center justify-between gap-2 rounded-xl border border-border bg-bg-elevated/50 px-3 py-2 cursor-pointer">
              <span>
                <span className="block text-xs font-semibold text-text-primary">Advertising</span>
                <span className="block text-[0.65rem] text-text-muted">Google AdSense ads</span>
              </span>
              <input
                type="checkbox"
                checked={preferences.advertising}
                onChange={(event) =>
                  setPreferences((current) => ({
                    ...current,
                    advertising: event.target.checked,
                    ads: event.target.checked,
                  }))
                }
                className="accent-gold"
                aria-label="Advertising cookies"
              />
            </label>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowSettings(false)}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-border text-text-secondary hover:text-text-primary transition-all cursor-pointer"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => savePreferences(preferences)}
              className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-gold to-gold-vivid text-black hover:opacity-90 transition-opacity cursor-pointer"
            >
              Save Preferences
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-0 sm:h-14 sm:max-h-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <Cookie className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
            <p className="text-xs text-text-secondary leading-snug sm:truncate">
              KenyaHub uses cookies for analytics &amp; Google AdSense ads. See our{" "}
              <a href="/privacy/" className="text-gold hover:underline font-medium">
                Privacy Policy
              </a>
              .
            </p>
          </div>
          <div className="flex items-center justify-end gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => setShowSettings(true)}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg text-gold hover:bg-gold/10 transition-all cursor-pointer"
            >
              <Settings2 className="w-3.5 h-3.5" aria-hidden="true" /> Manage
            </button>
            <button
              type="button"
              onClick={handleDecline}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-border text-text-secondary hover:text-text-primary transition-all cursor-pointer"
            >
              Essential Only
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-gold to-gold-vivid text-black hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
