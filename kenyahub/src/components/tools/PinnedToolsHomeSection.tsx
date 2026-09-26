"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Pin } from "lucide-react";
import { TOOLS, getCategoryInfo } from "@/lib/tools-registry";
import DynamicIcon from "@/components/ui/DynamicIcon";

export default function PinnedToolsHomeSection() {
  const [pinnedToolSlugs, setPinnedToolSlugs] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const loadPinned = () => {
      try {
        const saved = localStorage.getItem("kh-pinned-tools");
        if (saved) {
          setPinnedToolSlugs(JSON.parse(saved));
        } else {
          setPinnedToolSlugs([]);
        }
      } catch (e) {
        // ignore
      }
    };

    loadPinned();
    window.addEventListener("kh-pinned-tools-updated", loadPinned);
    return () => window.removeEventListener("kh-pinned-tools-updated", loadPinned);
  }, []);

  if (!mounted || pinnedToolSlugs.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-gold mb-2 flex items-center gap-1.5">
            <Pin className="h-3.5 w-3.5" /> Your Pins
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-outfit)] tracking-tight">
            Pinned Tools
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pinnedToolSlugs.map((slug) => {
          const tool = TOOLS.find((t) => t.slug === slug);
          if (!tool) return null;
          const cat = getCategoryInfo(tool.category);
          return (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="tool-card bg-bg-card border border-gold/40 shadow-[0_0_15px_rgba(200,150,30,0.05)] rounded-2xl p-4 sm:p-6 block group"
            >
              <div className="flex items-start gap-4">
                <span className="text-[2rem] tool-icon flex-shrink-0 leading-none">
                  <DynamicIcon emoji={tool.icon} className="w-[1em] h-[1em]" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[0.9375rem] font-semibold text-text-primary mb-1.5 font-[family-name:var(--font-outfit)] group-hover:text-gold transition-colors leading-snug truncate">
                    {tool.shortTitle}
                  </h3>
                  <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">
                    {tool.description}
                  </p>
                  {cat && (
                    <span className={`badge ${cat.badgeClass} mt-3`}>
                      <DynamicIcon emoji={cat.icon} className="w-[1em] h-[1em] inline-block mb-[0.1em]" /> {cat.name}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
