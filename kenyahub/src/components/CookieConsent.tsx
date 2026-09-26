"use client";

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";

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
function updateConsent(granted: boolean) {
  window.gtag?.("consent", "update", {
    ad_storage: granted ? "granted" : "denied",
    ad_user_data: granted ? "granted" : "denied",
    ad_personalization: granted ? "granted" : "denied",
    analytics_storage: granted ? "granted" : "denied",
  });
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Initialize Google tag command queue
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function (...args: unknown[]) {
        window.dataLayer!.push(args);
      };

    // Set Consent Mode v2 defaults — deny everything until user consents
    window.gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
      wait_for_update: 500,
    });

    // Check if user has already made a choice
    const stored = localStorage.getItem("kh-cookie-consent");
    if (stored === "accepted") {
      updateConsent(true);
    } else if (stored === "declined") {
      updateConsent(false);
    } else {
      // No stored preference — show the banner
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("kh-cookie-consent", "accepted");
    updateConsent(true);
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("kh-cookie-consent", "declined");
    updateConsent(false);
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
      </div>
    </div>
  );
}
