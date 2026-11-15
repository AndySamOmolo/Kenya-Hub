"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import { scrollToPageTop } from "@/lib/scroll";

export default function ScrollReset() {
  const pathname = usePathname();
  const [showBackToTop, setShowBackToTop] = useState(false);

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

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 480);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!showBackToTop) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll back to top"
      title="Back to top"
      className="fixed bottom-16 sm:bottom-6 left-4 sm:left-6 z-40 w-10 h-10 rounded-full border border-gold/40 bg-bg-card/90 backdrop-blur-md text-gold shadow-lg shadow-black/30 hover:bg-gold hover:text-kenya-black hover:-translate-y-1 active:scale-90 flex items-center justify-center transition-all duration-200 cursor-pointer animate-fade-in-up"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
