"use client";

import { useEffect, useRef } from "react";
import type { Tool } from "@/lib/types";

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
    const trackAccess = () => {
      if (tracked.current || localStorage.getItem("kh-cookie-consent") !== "accepted") return;

      window.gtag?.("event", "tool_access", {
        tool_slug: tool.slug,
        tool_name: tool.shortTitle,
        tool_category: tool.category,
      });
      tracked.current = true;
    };

    trackAccess();
    window.addEventListener("kh-cookie-consent-updated", trackAccess);
    return () => window.removeEventListener("kh-cookie-consent-updated", trackAccess);
  }, [tool]);

  return null;
}