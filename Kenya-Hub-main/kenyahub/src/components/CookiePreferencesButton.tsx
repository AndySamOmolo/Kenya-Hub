"use client";

import { useState, useEffect } from "react";
import { SlidersHorizontal, CheckCircle2, XCircle } from "lucide-react";

export default function CookiePreferencesButton() {
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const updateStatus = () => {
      const stored = localStorage.getItem("kh-cookie-consent");
      setStatus(stored);
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
    window.dispatchEvent(new CustomEvent("kh-open-cookie-banner"));
  };

  const preferenceLabel = (() => {
    if (!status) return "Default (Denied until consent is explicitly provided)";
    try {
      const preferences = JSON.parse(localStorage.getItem("kh-cookie-preferences") || "");
      if (preferences.analytics && preferences.advertising) return "Analytics & advertising enabled";
      if (preferences.analytics) return "Analytics enabled; advertising denied";
      if (preferences.advertising) return "Advertising enabled; analytics denied";
      return "Analytics & advertising denied";
    } catch {
      return status === "accepted" ? "Analytics & advertising enabled" : "Analytics & advertising denied";
    }
  })();

  return (
    <div className="p-4 rounded-xl border border-border bg-bg-card/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 my-4">
      <div>
        <p className="text-xs font-semibold text-text-primary mb-1">
          Your Current Cookie Preference:
        </p>
        <div className="flex items-center gap-1.5 text-xs">
          {status ? (
            <span className={`inline-flex items-center gap-1 font-medium ${preferenceLabel.includes("enabled") ? "text-emerald-400" : "text-amber-400"}`}>
              {preferenceLabel.includes("enabled") ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />} {preferenceLabel}
            </span>
          ) : <span className="text-text-muted">{preferenceLabel}</span>}
        </div>
      </div>
      <button
        onClick={openBanner}
        type="button"
        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold bg-bg-elevated hover:bg-gold/15 hover:text-gold border border-border text-text-primary transition-all shrink-0 cursor-pointer"
      >
        <SlidersHorizontal className="w-3.5 h-3.5 text-gold" />
        Manage Cookie Preferences
      </button>
    </div>
  );
}
