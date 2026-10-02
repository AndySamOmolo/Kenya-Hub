/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { TOOLS, TOOL_CATEGORIES, getPopularTools } from "@/lib/tools-registry";
import { getToolVisitCounts, hasAnyVisits } from "@/lib/tool-usage";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { useMounted } from "@/lib/useMounted";

/**
 * Popular tools section for the home page.
 *
 * - If the user has visited any tools, shows their most-visited tools.
 * - Otherwise, falls back to the curated "most popular" list.
 *
 * Renders client-side so it can read localStorage visit data.
 */
export default function PopularToolsSection() {
  const [visitCounts, setVisitCounts] = useState<Record<string, number>>({});
  const mounted = useMounted();

  useEffect(() => {
    setVisitCounts(getToolVisitCounts());

    const onUpdate = () => setVisitCounts(getToolVisitCounts());
    window.addEventListener("kh-tool-visits-updated", onUpdate);
    return () => window.removeEventListener("kh-tool-visits-updated", onUpdate);
  }, []);

  const popularTools = useMemo(() => {
    if (mounted && hasAnyVisits()) {
      // Sort by real visit counts
      return [...TOOLS]
        .sort((a, b) => {
          const aVisits = visitCounts[a.slug] ?? 0;
          const bVisits = visitCounts[b.slug] ?? 0;
          return bVisits - aVisits || a.shortTitle.localeCompare(b.shortTitle);
        })
        .slice(0, 6);
    }
    // First-time user — use curated baseline
    return getPopularTools(6);
  }, [mounted, visitCounts]);

  // Determine the heading based on whether user has usage data
  const hasUsage = mounted && hasAnyVisits();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-gold mb-2">
            {hasUsage ? "Your Most Used" : "Most Popular"}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-outfit)] tracking-tight">
            {hasUsage ? "Your go-to tools" : "Tools Kenyans love"}
          </h2>
        </div>
        <Link
          href="/tools"
          className="hidden sm:flex items-center gap-1.5 text-sm text-text-muted hover:text-gold transition-colors font-medium"
        >
          View all
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {popularTools.map((tool, i) => {
          const cat = TOOL_CATEGORIES.find((c) => c.id === tool.category);
          const visits = visitCounts[tool.slug] ?? 0;
          return (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="tool-card bg-bg-card border border-border rounded-2xl p-4 sm:p-6 block group"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <span className="text-[2rem] tool-icon flex-shrink-0 leading-none">
                  <DynamicIcon emoji={tool.icon} className="w-[1em] h-[1em]" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[0.9375rem] font-semibold text-text-primary mb-1.5 font-[family-name:var(--font-outfit)] group-hover:text-gold transition-colors leading-snug">
                    {tool.shortTitle}
                  </h3>
                  <p className="text-xs text-text-muted line-clamp-2 leading-relaxed mb-3">
                    {tool.description}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {cat && (
                      <span className={`badge ${cat.badgeClass}`}>
                        <DynamicIcon emoji={cat.icon} className="w-[1em] h-[1em] inline-block mb-[0.1em]" /> {cat.name}
                      </span>
                    )}
                    {hasUsage && visits > 0 && (
                      <span className="text-[0.6rem] text-text-muted font-medium">
                        {visits} {visits === 1 ? "visit" : "visits"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="sm:hidden mt-6 text-center">
        <Link href="/tools" className="btn-outline text-sm">
          View All Tools →
        </Link>
      </div>
    </section>
  );
}

