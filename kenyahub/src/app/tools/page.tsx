/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import { useState, useMemo, useEffect, useRef } from "react";
import { scrollToTopIfScrolled } from "@/lib/scroll";
import Link from "next/link";
import { TOOLS, TOOL_CATEGORIES, getCategoryInfo, getToolUsageScore } from "@/lib/tools-registry";
import { getToolVisitCounts, hasAnyVisits } from "@/lib/tool-usage";
import { ArrowDownAZ, LayoutList, Pin, TrendingUp, Wrench } from "lucide-react";
import DynamicIcon from "@/components/ui/DynamicIcon";
import SearchInput from "@/components/ui/SearchInput";
import CustomSelect from "@/components/ui/CustomSelect";
import { useMounted } from "@/lib/useMounted";

export default function ToolsHubPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const _scrollMountRef = useRef(false);
  useEffect(() => {
    if (!_scrollMountRef.current) { _scrollMountRef.current = true; return; }
    scrollToTopIfScrolled();
  }, [selectedCategory]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"popular" | "alphabetical" | "category">("popular");
  const [pinnedToolSlugs, setPinnedToolSlugs] = useState<string[]>([]);
  const [visitCounts, setVisitCounts] = useState<Record<string, number>>({});
  const mounted = useMounted();

  useEffect(() => {
    const syncFromUrl = () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const cat = params.get("category");
        const q = params.get("q");
        if (cat) setSelectedCategory(cat);
        if (q) setSearchQuery(q);
      } catch {
        // ignore
      }
    };

    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, []);

  useEffect(() => {
    const loadPinned = () => {
      try {
        const saved = localStorage.getItem("kh-pinned-tools");
        if (saved) {
          setPinnedToolSlugs(JSON.parse(saved));
        } else {
          setPinnedToolSlugs([]);
        }
      } catch {
        // ignore
      }
    };

    const loadVisits = () => {
      setVisitCounts(getToolVisitCounts());
    };

    loadPinned();
    loadVisits();

    window.addEventListener("kh-pinned-tools-updated", loadPinned);
    window.addEventListener("kh-tool-visits-updated", loadVisits);
    return () => {
      window.removeEventListener("kh-pinned-tools-updated", loadPinned);
      window.removeEventListener("kh-tool-visits-updated", loadVisits);
    };
  }, []);

  const filteredTools = useMemo(() => {
    let tools = TOOLS;

    if (selectedCategory !== "all") {
      tools = tools.filter((t) => t.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      tools = tools.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.shortTitle.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.keywords.some((k) => k.toLowerCase().includes(q))
      );
    }

    return [...tools].sort((a, b) => {
      const labelComparison = a.shortTitle.localeCompare(b.shortTitle, undefined, {
        numeric: true,
        sensitivity: "base",
      });
      if (sortBy === "alphabetical") return labelComparison;
      if (sortBy === "category") return a.category.localeCompare(b.category) || labelComparison;

      if (mounted && hasAnyVisits()) {
        const aVisits = visitCounts[a.slug] ?? 0;
        const bVisits = visitCounts[b.slug] ?? 0;
        return bVisits - aVisits || labelComparison;
      }
      return getToolUsageScore(b) - getToolUsageScore(a) || labelComparison;
    });
  }, [selectedCategory, searchQuery, sortBy, visitCounts, mounted]);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "KenyaHub Free Online Tools & Calculators for Kenya",
    numberOfItems: TOOLS.length,
    itemListElement: TOOLS.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.title,
      url: `https://kenyahub.me/tools/${tool.slug}/`,
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-4 sm:py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {/* Header */}
      <div className="mb-4 sm:mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold font-[family-name:var(--font-outfit)] mb-1 sm:mb-2">
          <Wrench className="w-[0.9em] h-[0.9em] inline-block mb-1 text-gold mr-2" />All Tools &amp; Calculators
        </h1>
        <p className="text-xs sm:text-base text-text-secondary max-w-3xl leading-relaxed">
          Explore {TOOLS.length} free digital calculators, directories, and verified public data utilities built for Kenya — covering 2026 KRA PAYE taxes, Safaricom M-Pesa tariffs, KPLC electricity tokens, KUCCPS &amp; CBC education, NTSA transport, SHA hospitals, and 22 Kenyan language courses.
        </p>
      </div>

      {/* Pinned Tools */}
      {mounted && pinnedToolSlugs.length > 0 && searchQuery === "" && selectedCategory === "all" && (
        <div className="mb-6 sm:mb-10">
          <h2 className="flex items-center gap-2 text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-2.5 sm:mb-4">
            <Pin className="h-4 w-4 text-gold" /> Pinned Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
            {pinnedToolSlugs.map((slug) => {
              const tool = TOOLS.find((t) => t.slug === slug);
              if (!tool) return null;
              const cat = getCategoryInfo(tool.category);
              return (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}/`}
                  className="tool-card bg-bg-card border border-gold/40 shadow-[0_0_15px_rgba(200,150,30,0.05)] rounded-xl p-3.5 sm:p-5 block group"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="text-2xl tool-icon flex-shrink-0">
                      <DynamicIcon emoji={tool.icon} className="w-[1em] h-[1em]" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between mb-0.5 sm:mb-1">
                        <h3 className="text-sm font-semibold text-text-primary group-hover:text-gold transition-colors break-words">
                          {tool.shortTitle}
                        </h3>
                      </div>
                      <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">
                        {tool.description}
                      </p>
                      {cat && (
                        <span className={`badge ${cat.badgeClass} mt-1.5 sm:mt-2`}>
                          <DynamicIcon emoji={cat.icon} className="w-[1em] h-[1em] inline-block mb-[0.1em]" /> {cat.name}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Search, Mobile Category Dropdown, and Sort */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-2.5 items-stretch sm:items-center justify-between mb-2.5 sm:mb-3">
        <div className="flex-1 max-w-lg">
          <SearchInput
            type="text"
            placeholder="Search tools — e.g. 'PAYE', 'matatu', 'CBC', 'M-Pesa'..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field w-full text-sm"
            id="tools-search"
            onClear={() => setSearchQuery("")}
          />
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <label htmlFor="tools-sort" className="hidden sm:inline text-xs font-semibold uppercase tracking-wider text-text-muted shrink-0">
              Sort:
            </label>
            <div className="relative inline-flex items-center w-full sm:w-auto">
              {sortBy === "popular" ? (
                <TrendingUp className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gold z-10" />
              ) : sortBy === "category" ? (
                <LayoutList className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gold z-10" />
              ) : (
                <ArrowDownAZ className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gold z-10" />
              )}
              <CustomSelect
                id="tools-sort"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value as typeof sortBy)}
                options={[
                  { value: "popular", label: "Most used" },
                  { value: "alphabetical", label: "A-Z" },
                  { value: "category", label: "Category" },
                ]}
                className="w-full sm:min-w-[9rem] has-leading-icon text-xs"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <ExpandablePillRow className="mb-3 sm:mb-3.5">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1 sm:px-3.5 text-xs font-medium border transition-all ${
            selectedCategory === "all"
              ? "border-gold/50 bg-gold/15 text-gold font-semibold"
              : "border-border bg-bg-card text-text-secondary hover:text-text-primary hover:border-border-light"
          }`}
        >
          All ({TOOLS.length})
        </button>
        {TOOL_CATEGORIES.map((cat) => {
          const count = TOOLS.filter((t) => t.category === cat.id).length;
          const active = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1 sm:px-3.5 text-xs font-medium border transition-all ${
                active
                  ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                  : "border-border bg-bg-card text-text-secondary hover:text-text-primary hover:border-border-light"
              }`}
            >
              {cat.name} ({count})
            </button>
          );
        })}
      </ExpandablePillRow>

      {/* Results count */}
      {(searchQuery || selectedCategory !== "all") && filteredTools.length > 0 && (
        <p className="text-xs text-text-muted mb-3 sm:mb-4">
          Showing {filteredTools.length} of {TOOLS.length} tools
          {searchQuery && <> matching &quot;{searchQuery}&quot;</>}
          {selectedCategory !== "all" && (
            <button
              onClick={() => setSelectedCategory("all")}
              className="ml-2 text-gold hover:underline font-medium"
            >
              Clear filter
            </button>
          )}
        </p>
      )}

      {/* Tools Grid */}
      {filteredTools.length === 0 ? (
        <div className="text-center py-8 sm:py-16">
          <div className="flex justify-center mb-3"><DynamicIcon emoji="🔍" className="w-10 h-10 text-text-muted" /></div>
          <p className="text-text-secondary text-sm mb-3">
            No tools found matching &quot;{searchQuery}&quot;
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="text-xs text-gold hover:underline font-medium"
          >
            Clear search &amp; filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
          {filteredTools.map((tool) => {
            const cat = getCategoryInfo(tool.category);
            return (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}/`}
                className="tool-card bg-bg-card border border-border rounded-xl p-3.5 sm:p-5 block group"
              >
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-2xl tool-icon transition-transform flex-shrink-0">
                    <DynamicIcon emoji={tool.icon} className="w-[1em] h-[1em]" />
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-sm font-semibold text-text-primary mb-0.5 sm:mb-1 font-[family-name:var(--font-outfit)] group-hover:text-gold transition-colors">
                      {tool.shortTitle}
                    </h2>
                    <p className="text-xs text-text-muted line-clamp-2 leading-relaxed mb-1.5 sm:mb-2">
                      {tool.description}
                    </p>
                    {cat && (
                      <span
                        className={`badge ${cat.badgeClass} text-[0.65rem]`}
                      >
                        <DynamicIcon emoji={cat.icon} className="w-[1em] h-[1em] inline-block mb-[0.1em]" /> {cat.name}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* Editorial Directory Guide for Users & Crawlers */}
      <section className="mt-10 sm:mt-16 bg-bg-card border border-border rounded-2xl p-5 sm:p-8 space-y-4">
        <h2 className="text-base sm:text-xl font-bold font-[family-name:var(--font-outfit)] text-text-primary">
          About the KenyaHub Public Utility Directory
        </h2>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          Every calculator and reference directory on KenyaHub is engineered around official Kenyan statutory schedules, Gazette Notices, and institutional datasets—including the <strong>Kenya Revenue Authority (KRA)</strong> Income Tax Act bands, <strong>Social Health Authority (SHA/SHIF)</strong> and <strong>NSSF Tier I &amp; II</strong> schedules, <strong>Energy and Petroleum Regulatory Authority (EPRA)</strong> electricity tariffs, <strong>Kenya Institute of Curriculum Development (KICD)</strong> CBC guidelines, and <strong>KUCCPS</strong> degree placement formulas.
        </p>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          All calculations run 100% locally in your web browser without storing personal salary or financial inputs on external servers. Select any tool above to launch the interactive calculator, review step-by-step statutory methodology notes, and read answers to common Kenyan regulatory questions.
        </p>
      </section>
    </div>
  );
}
