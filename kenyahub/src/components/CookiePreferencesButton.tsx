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
    return () => {
      window.removeEventListener("storage", updateStatus);
    };
  }, []);

  const openBanner = () => {
    window.dispatchEvent(new CustomEvent("kh-open-cookie-banner"));
  };

  return (
    <div className="p-4 rounded-xl border border-border bg-bg-card/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 my-4">
      <div>
        <p className="text-xs font-semibold text-text-primary mb-1">
          Your Current Cookie Preference:
        </p>
        <div className="flex items-center gap-1.5 text-xs">
          {status === "accepted" ? (
            <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> All non-essential cookies accepted (Analytics & Ads enabled)
            </span>
          ) : status === "declined" ? (
            <span className="inline-flex items-center gap-1 text-amber-400 font-medium">
              <XCircle className="w-3.5 h-3.5" /> Non-essential cookies declined (Analytics & Ads denied)
            </span>
          ) : (
            <span className="text-text-muted">
              Default (Denied until consent is explicitly provided)
            </span>
          )}
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
