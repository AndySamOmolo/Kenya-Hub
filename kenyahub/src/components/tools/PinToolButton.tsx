"use client";

import { useEffect, useState } from "react";
import { Pin, PinOff } from "lucide-react";

interface PinToolButtonProps {
  toolSlug: string;
}

export default function PinToolButton({ toolSlug }: PinToolButtonProps) {
  const [isPinned, setIsPinned] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("kh-pinned-tools");
    if (saved) {
      try {
        const pinned: string[] = JSON.parse(saved);
        setIsPinned(pinned.includes(toolSlug));
      } catch (e) {
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
      
      // Dispatch a custom event so the tools directory page can update instantly
      window.dispatchEvent(new Event("kh-pinned-tools-updated"));
    } catch (e) {
      console.error("Failed to save pinned tools", e);
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={togglePin}
      className={`group flex items-center justify-center rounded-xl border p-2.5 transition-all ${
        isPinned
          ? "border-gold/50 bg-gold/10 text-gold shadow-[0_0_10px_rgba(200,150,30,0.2)]"
          : "border-border bg-bg-card text-text-muted hover:border-gold/30 hover:text-gold"
      }`}
      title={isPinned ? "Unpin tool" : "Pin tool for quick access"}
    >
      {isPinned ? (
        <PinOff className="h-5 w-5" />
      ) : (
        <Pin className="h-5 w-5 group-hover:scale-110 transition-transform" />
      )}
    </button>
  );
}
