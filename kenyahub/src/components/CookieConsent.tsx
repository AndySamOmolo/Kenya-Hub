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

/**
 * Update Google Consent Mode v2 defaults.
 * Called before the AdSense script loads if no stored preference exists,
 * and again when the user makes a choice.
 */
interface CookiePreferences {
  analytics: boolean;
  advertising: boolean;
}

function updateConsent(preferences: CookiePreferences) {
  window.gtag?.("consent", "update", {
    ad_storage: preferences.advertising ? "granted" : "denied",
    ad_user_data: preferences.advertising ? "granted" : "denied",
    ad_personalization: preferences.advertising ? "granted" : "denied",
    analytics_storage: preferences.analytics ? "granted" : "denied",
  });
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    analytics: false,
    advertising: false,
  });

  useEffect(() => {
    // Initialize Google tag command queue
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function (...args: unknown[]) {
        window.dataLayer!.push(args);
      };

    // Check if user has already made a choice
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
        updateConsent(next);
      } catch {
        updateConsent({ analytics: false, advertising: false });
      }
    } else if (stored === "accepted") {
      const next = { analytics: true, advertising: true };
      setPreferences(next);
      updateConsent(next);
    } else if (stored === "declined") {
      updateConsent({ analytics: false, advertising: false });
    } else {
      // Set Consent Mode v2 defaults — deny everything until user consents
      window.gtag("consent", "default", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
        wait_for_update: 500,
      });
      // No stored preference — show the banner
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

  const savePreferences = (next: CookiePreferences, legacyStatus: "accepted" | "declined" | "custom" = "custom") => {
    setPreferences(next);
    localStorage.setItem("kh-cookie-preferences", JSON.stringify(next));
    localStorage.setItem("kh-cookie-consent", legacyStatus);
    updateConsent(next);
    window.dispatchEvent(new Event("kh-cookie-consent-updated"));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-[100] p-4 sm:p-6 animate-fade-in-up"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="max-w-2xl mx-auto bg-bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl shadow-black/30 p-5 sm:p-6">
        {showSettings ? (
          <>
            <div className="flex items-start gap-3 mb-4">
              <Settings2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">Manage cookie preferences</p>
                <p className="text-xs text-text-secondary mt-1">Essential storage is always active. Choose whether KenyaHub may use analytics and advertising cookies.</p>
              </div>
            </div>
            <div className="space-y-2 mb-5">
              <label className="flex items-center justify-between gap-4 rounded-xl border border-border bg-bg-elevated/50 p-3">
                <span><span className="block text-xs font-semibold text-text-primary">Essential</span><span className="block text-[0.65rem] text-text-muted mt-0.5">Required for preferences and core site features</span></span>
                <input type="checkbox" checked disabled className="accent-gold" aria-label="Essential cookies always enabled" />
              </label>
              <label className="flex items-center justify-between gap-4 rounded-xl border border-border bg-bg-elevated/50 p-3 cursor-pointer">
                <span><span className="block text-xs font-semibold text-text-primary">Analytics</span><span className="block text-[0.65rem] text-text-muted mt-0.5">Helps us understand which tools are useful</span></span>
                <input type="checkbox" checked={preferences.analytics} onChange={(event) => setPreferences((current) => ({ ...current, analytics: event.target.checked }))} className="accent-gold" aria-label="Analytics cookies" />
              </label>
              <label className="flex items-center justify-between gap-4 rounded-xl border border-border bg-bg-elevated/50 p-3 cursor-pointer">
                <span><span className="block text-xs font-semibold text-text-primary">Advertising</span><span className="block text-[0.65rem] text-text-muted mt-0.5">Supports personalised and non-personalised ads</span></span>
                <input type="checkbox" checked={preferences.advertising} onChange={(event) => setPreferences((current) => ({ ...current, advertising: event.target.checked }))} className="accent-gold" aria-label="Advertising cookies" />
              </label>
            </div>
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowSettings(false)} className="px-4 py-2 text-xs font-semibold rounded-xl border border-border text-text-secondary hover:text-text-primary transition-all">Back</button>
              <button onClick={() => savePreferences(preferences)} className="px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-gold to-gold-vivid text-black hover:opacity-90 transition-opacity">Save preferences</button>
            </div>
          </>
        ) : (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-text-primary mb-1 font-[family-name:var(--font-outfit)]">
              <Cookie className="w-4 h-4 inline-block mr-1.5 text-gold align-text-bottom" />Cookie Consent
            </p>
            <p className="text-xs text-text-secondary leading-relaxed">
              KenyaHub uses cookies for ads personalisation and site analytics.
              You can accept or decline non-essential cookies. See our{" "}
              <a
                href="/privacy/"
                className="text-gold hover:underline font-medium"
              >
                Privacy Policy
              </a>{" "}
              for details.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setShowSettings(true)}
              className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-xl text-gold hover:bg-gold/10 transition-all"
            >
              <Settings2 className="w-3.5 h-3.5" /> Manage
            </button>
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-xs font-semibold rounded-xl border border-border text-text-secondary hover:text-text-primary hover:border-text-muted transition-all"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-gold to-gold-vivid text-black hover:opacity-90 transition-opacity shadow-lg"
            >
              Accept All
            </button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}
