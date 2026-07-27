"use client";

import { useEffect, useRef } from "react";

interface AdUnitProps {
  client?: string;
  slot?: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical" | "fluid";
  layout?: string;
  layoutKey?: string;
  className?: string;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export default function AdUnit({
  client = "ca-pub-5895990873842803",
  slot = "1234567890",
  format = "auto",
  layout,
  layoutKey,
  className = "",
  style = { display: "block" },
}: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    // Only push ad once per component mount
    if (pushedRef.current) return;

    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushedRef.current = true;
      }
    } catch (err) {
      console.warn("AdSense push error (likely ad-blocker active):", err);
    }
  }, []);

  return (
    <div ref={adRef} className={`ad-container my-6 overflow-hidden text-center ${className}`}>
      <span className="block text-[0.6rem] uppercase tracking-wider text-text-muted mb-1">
        Advertisement
      </span>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
        {...(layout ? { "data-ad-layout": layout } : {})}
        {...(layoutKey ? { "data-ad-layout-key": layoutKey } : {})}
      />
    </div>
  );
}
