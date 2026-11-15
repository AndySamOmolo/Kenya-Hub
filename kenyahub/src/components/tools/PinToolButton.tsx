/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { Pin, PinOff } from "lucide-react";
import { useMounted } from "@/lib/useMounted";

interface PinToolButtonProps {
  toolSlug: string;
}

export default function PinToolButton({ toolSlug }: PinToolButtonProps) {
  const [isPinned, setIsPinned] = useState(false);
  const [justToggled, setJustToggled] = useState(false);
  const mounted = useMounted();

  useEffect(() => {
    const saved = localStorage.getItem("kh-pinned-tools");
    if (saved) {
      try {
        const pinned: string[] = JSON.parse(saved);
        setIsPinned(pinned.includes(toolSlug));
      } catch {
        // ignore
      }
    }
  }, [toolSlug]);

  const togglePin = () => {
    try {
      const saved = localStorage.getItem("kh-pinned-tools");
      let pinned: string[] = saved ? JSON.parse(saved) : [];

      if (isPinned) {
        pinned = pinned.filter((slug) => slug !== toolSlug);
      } else {
        if (!pinned.includes(toolSlug)) {
          pinned.push(toolSlug);
        }
      }

      localStorage.setItem("kh-pinned-tools", JSON.stringify(pinned));
      setIsPinned(!isPinned);
      setJustToggled(true);
      setTimeout(() => setJustToggled(false), 360);

      // Dispatch a custom event so the tools directory page can update instantly
      window.dispatchEvent(new Event("kh-pinned-tools-updated"));
    } catch (e) {
      console.error("Failed to save pinned tools", e);
    }
  };

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={togglePin}
      aria-pressed={isPinned}
      className={`group inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-all duration-200 active:scale-95 cursor-pointer ${
        justToggled ? "animate-pop-correct" : ""
      } ${
        isPinned
          ? "border-gold/60 bg-gold/15 text-gold shadow-[0_0_12px_rgba(200,150,30,0.22)]"
          : "border-border bg-bg-card text-text-secondary hover:border-gold/40 hover:text-gold hover:-translate-y-0.5"
      }`}
      title={isPinned ? "Unpin tool from homepage" : "Pin tool for quick access on homepage"}
    >
      {isPinned ? (
        <>
          <PinOff className="h-4 w-4 shrink-0" />
          <span className="hidden sm:inline">Pinned</span>
        </>
      ) : (
        <>
          <Pin className="h-4 w-4 shrink-0 group-hover:rotate-12 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">Pin Tool</span>
        </>
      )}
    </button>
  );
}
