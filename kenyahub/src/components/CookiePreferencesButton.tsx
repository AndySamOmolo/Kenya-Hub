"use client";

import { useState, useEffect } from "react";
import { SlidersHorizontal, CheckCircle2, XCircle } from "lucide-react";
import { readStoredConsent, type ParsedConsentState } from "@/components/CookieConsent";

export default function CookiePreferencesButton() {
  const [consent, setConsent] = useState<ParsedConsentState | null>(null);

  useEffect(() => {
    const updateStatus = () => {
      setConsent(readStoredConsent());
    };
    updateStatus();

    window.addEventListener("storage", updateStatus);
    window.addEventListener("kh-cookie-consent-updated", updateStatus);
    return () => {
      window.removeEventListener("storage", updateStatus);
      window.removeEventListener("kh-cookie-consent-updated", updateStatus);
    };
  }, []);

  const openBanner = () => {
    const gfc = (
      window as unknown as {
        googlefc?: { showRevocationMessage?: () => void };
      }
    ).googlefc;
    if (gfc?.showRevocationMessage) {
      gfc.showRevocationMessage();
    }
    window.dispatchEvent(new CustomEvent("kh-open-cookie-banner"));
  };

  const preferenceLabel = (() => {
    if (!consent || !consent.hasDecision) {
      return "Default (Denied until consent is explicitly provided)";
    }
    const { analytics, advertising } = consent.preferences;
    if (analytics && advertising) return "Analytics & advertising enabled";
    if (analytics) return "Analytics enabled; advertising denied";
    if (advertising) return "Advertising enabled; analytics denied";
    return "Analytics & advertising denied";
  })();

  const isEnabled = preferenceLabel.includes("enabled");

  return (
    <div className="p-4 rounded-xl border border-border bg-bg-card/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 my-4">
      <div>
        <p className="text-xs font-semibold text-text-primary mb-1">
          Your Current Cookie Preference:
        </p>
        <div className="flex items-center gap-1.5 text-xs">
          {consent?.hasDecision ? (
            <span
              className={`inline-flex items-center gap-1 font-medium ${
                isEnabled
                  ? "text-emerald-700 dark:text-emerald-400"
                  : "text-amber-800 dark:text-amber-400"
              }`}
            >
              {isEnabled ? (
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              ) : (
                <XCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              )}{" "}
              {preferenceLabel}
            </span>
          ) : (
            <span className="text-text-muted">{preferenceLabel}</span>
          )}
        </div>
      </div>
      <button
        onClick={openBanner}
        type="button"
        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold bg-bg-elevated hover:bg-gold/15 hover:text-gold border border-border text-text-primary transition-all shrink-0 cursor-pointer"
      >
        <SlidersHorizontal className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
        Manage Cookie Preferences
      </button>
    </div>
  );
}
