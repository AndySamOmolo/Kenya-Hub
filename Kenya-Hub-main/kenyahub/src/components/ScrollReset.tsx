"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToPageTop } from "@/lib/scroll";

export default function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
      const id = decodeURIComponent(hash.slice(1));
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
        });
        return;
      }
    }
    scrollToPageTop();
  }, [pathname]);

  return null;
}
