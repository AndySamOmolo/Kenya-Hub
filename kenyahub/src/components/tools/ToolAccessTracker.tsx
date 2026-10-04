"use client";

import { useEffect, useRef } from "react";
import type { Tool } from "@/lib/types";
import { recordToolVisit } from "@/lib/tool-usage";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface ToolAccessTrackerProps {
  tool: Pick<Tool, "slug" | "shortTitle" | "category">;
}

export default function ToolAccessTracker({ tool }: ToolAccessTrackerProps) {
  const tracked = useRef(false);

  useEffect(() => {
    // Always record the visit locally (no personal data, just a counter)
    if (!tracked.current) {
      recordToolVisit(tool.slug);
    }

    const trackGA = () => {
      if (tracked.current) return;
      const storedPreferences = localStorage.getItem("kh-cookie-preferences");
      let analyticsEnabled = localStorage.getItem("kh-cookie-consent") === "accepted";
      if (storedPreferences) {
        try {
          analyticsEnabled = JSON.parse(storedPreferences).analytics === true;
        } catch {
          analyticsEnabled = false;
        }
      }
      if (!analyticsEnabled) return;

      window.gtag?.("event", "tool_access", {
        tool_slug: tool.slug,
        tool_name: tool.shortTitle,
        tool_category: tool.category,
      });
      tracked.current = true;
    };

    trackGA();
    window.addEventListener("kh-cookie-consent-updated", trackGA);
    return () => window.removeEventListener("kh-cookie-consent-updated", trackGA);
  }, [tool]);

  return null;
}