/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import { Suspense, useState, useMemo, useEffect, useRef, useCallback } from "react";
import { scrollToPageTop, scrollToTopIfScrolled } from "@/lib/scroll";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { TOOLS, TOOL_CATEGORIES, getCategoryInfo, getToolUsageScore } from "@/lib/tools-registry";
import type { ToolCategory } from "@/lib/types";
import { getToolVisitCounts, hasAnyVisits } from "@/lib/tool-usage";
import { ArrowDownAZ, LayoutList, Pin, TrendingUp, Wrench } from "lucide-react";
import DynamicIcon from "@/components/ui/DynamicIcon";
import SearchInput from "@/components/ui/SearchInput";
import CustomSelect from "@/components/ui/CustomSelect";
import { useMounted } from "@/lib/useMounted";

function ToolsUrlSync({
  onSync,
}: {
  onSync: (category: string, query: string | null) => void;
}) {
  const searchParams = useSearchParams();
  useEffect(() => {
    const rawCat = searchParams.get("category");
    const validCat =
      rawCat && TOOL_CATEGORIES.some((c) => c.id === rawCat) ? rawCat : "all";
    const q = searchParams.get("q");
    onSync(validCat, q);
  }, [searchParams, onSync]);
  return null;
}

export default function ToolsHubPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const _scrollMountRef = useRef(false);
  useEffect(() => {
    if (!_scrollMountRef.current) {
      _scrollMountRef.current = true;
      return;
    }
    scrollToTopIfScrolled();
  }, [selectedCategory]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"popular" | "alphabetical" | "category">("popular");
  const [pinnedToolSlugs, setPinnedToolSlugs] = useState<string[]>([]);
  const [visitCounts, setVisitCounts] = useState<Record<string, number>>({});
  const mounted = useMounted();

  const handleUrlSync = useCallback((cat: string, q: string | null) => {
    setSelectedCategory(cat);
    if (q !== null) {
      setSearchQuery(q);
    }
  }, []);

  const handleSelectCategory = useCallback((catId: string) => {
    const nextCat =
      catId !== "all" && TOOL_CATEGORIES.some((c) => c.id === catId)
        ? catId
        : "all";
    setSelectedCategory(nextCat);
    try {
      const url = new URL(window.location.href);
      if (nextCat === "all") {
        url.searchParams.delete("category");
      } else {
        url.searchParams.set("category", nextCat);
      }
      window.history.replaceState(null, "", url.pathname + url.search);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    const syncFromWindowLocation = () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const rawCat = params.get("category");
        const validCat =
          rawCat && TOOL_CATEGORIES.some((c) => c.id === rawCat) ? rawCat : "all";
        const q = params.get("q");
        setSelectedCategory(validCat);
        if (q !== null) setSearchQuery(q);
      } catch {
        // ignore
      }
    };

    const onCustomCategorySelect = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (typeof detail === "string") {
        const validCat =
          detail !== "all" && TOOL_CATEGORIES.some((c) => c.id === detail)
            ? detail
            : "all";
        setSelectedCategory(validCat);
        scrollToPageTop();
      }
    };

    const onDocumentClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      try {
        const url = new URL(anchor.href, window.location.origin);
        if (url.origin === window.location.origin && (url.pathname === "/tools" || url.pathname === "/tools/")) {
          const rawCat = url.searchParams.get("category");
          const validCat = rawCat && TOOL_CATEGORIES.some((c) => c.id === rawCat) ? rawCat : "all";
          setSelectedCategory(validCat);
          scrollToPageTop();
        }
      } catch {
        // ignore
      }
    };

    syncFromWindowLocation();
    window.addEventListener("popstate", syncFromWindowLocation);
    window.addEventListener("kh-select-category", onCustomCategorySelect);
    document.addEventListener("click", onDocumentClick);
    return () => {
      window.removeEventListener("popstate", syncFromWindowLocation);
      window.removeEventListener("kh-select-category", onCustomCategorySelect);
      document.removeEventListener("click", onDocumentClick);
    };
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

  const activeCategoryInfo = useMemo(
    () => (selectedCategory !== "all" ? getCategoryInfo(selectedCategory as ToolCategory) : undefined),
    [selectedCategory]
  );

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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://kenyahub.me/" },
      { "@type": "ListItem", position: 2, name: "Tools", item: "https://kenyahub.me/tools/" },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "KenyaHub Free Online Tools for Kenya",
    numberOfItems: TOOLS.length,
    itemListElement: TOOLS.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.title,
      url: `https://kenyahub.me/tools/${tool.slug}/`,
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:py-10">
      <Suspense fallback={null}>
        <ToolsUrlSync onSync={handleUrlSync} />
      </Suspense>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        {activeCategoryInfo ? (
          <>
            <div className="flex items-center gap-2 text-xs text-text-muted mb-1.5">
              <button
                type="button"
                onClick={() => handleSelectCategory("all")}
                className="hover:text-gold transition-colors cursor-pointer"
              >
                All Tools
              </button>
              <span>/</span>
              <span className="text-gold font-semibold">{activeCategoryInfo.name}</span>
            </div>
            <h1 className="text-xl sm:text-3xl font-bold font-[family-name:var(--font-outfit)] mb-1 sm:mb-2 flex items-center gap-2">
              <DynamicIcon emoji={activeCategoryInfo.icon} className="w-[0.9em] h-[0.9em] text-gold shrink-0" />
              <span>{activeCategoryInfo.name}</span>
            </h1>
            <p className="text-xs sm:text-base text-text-secondary max-w-3xl leading-relaxed">
              {activeCategoryInfo.description} — {filteredTools.length} verified tool{filteredTools.length !== 1 ? "s" : ""} built for Kenya.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-outfit)] mb-3">
              <Wrench className="w-[0.9em] h-[0.9em] inline-block mb-1 text-gold mr-2" />All Tools
            </h1>
            <p className="text-sm sm:text-base text-text-secondary max-w-3xl leading-relaxed">
              Explore {TOOLS.length} free digital tools, directories, and verified public data utilities built for Kenya — covering 2026 KRA PAYE taxes, Safaricom M-Pesa tariffs, KPLC electricity tokens, KUCCPS &amp; CBC education, NTSA transport, SHA hospitals, and 22 Kenyan language courses.
            </p>
          </>
        )}
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

      {/* Unified Filter Header Card (Search, Category Pills & Single-Line Sort Bar) */}
      <div className="bg-bg-card border border-border rounded-2xl p-4 sm:p-5 mb-6 shadow-xs space-y-3.5">
        <SearchInput
          type="text"
          placeholder="Search tools (PAYE, M-Pesa, KRA)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          id="tools-search"
          onClear={() => setSearchQuery("")}
        />

        {/* Category Pills with Colored Accent Dots */}
        <ExpandablePillRow>
          <button
            type="button"
            data-active={selectedCategory === "all"}
            aria-pressed={selectedCategory === "all"}
            onClick={() => handleSelectCategory("all")}
            className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 min-h-[34px] inline-flex items-center justify-center gap-2 text-xs font-semibold border transition-all cursor-pointer ${
              selectedCategory === "all"
                ? "border-gold bg-gold/15 text-gold font-bold shadow-2xs"
                : "border-border bg-bg-elevated/60 text-text-secondary hover:text-text-primary hover:border-border-light"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
            <span className="leading-normal">All ({TOOLS.length})</span>
          </button>
          {TOOL_CATEGORIES.map((cat) => {
            const count = TOOLS.filter((t) => t.category === cat.id).length;
            const active = selectedCategory === cat.id;
            const dotColor = ({
  "language-learning": "#C75B39",
  "finance-tax": "#C8961E",
  "education-cbc": "#1A8BD1",
  "transport-travel": "#2FA463",
  "business-investment": "#B87A4B",
  "utilities-energy": "#F5A623",
  "government-legal": "#BE2126",
  "health-wellness": "#E05A5A",
  "data-reference": "#5BBFEA",
  "agriculture-environment": "#006B3F",
} as Record<string, string>)[cat.id] || "#C8961E";
            return (
              <button
                key={cat.id}
                type="button"
                data-active={active}
                aria-pressed={active}
                onClick={() => handleSelectCategory(cat.id)}
                className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 min-h-[34px] inline-flex items-center justify-center gap-2 text-xs font-semibold border transition-all cursor-pointer ${
                  active
                    ? "border-gold bg-gold/15 text-gold font-bold shadow-2xs"
                    : "border-border bg-bg-elevated/60 text-text-secondary hover:text-text-primary hover:border-border-light"
                }`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: active ? "#C8961E" : dotColor }}
                />
                <span className="leading-normal">{cat.name} ({count})</span>
              </button>
            );
          })}
        </ExpandablePillRow>

        {/* Single-Line Sort By Pill Bar */}
        <div className="flex items-center gap-2 pt-1.5 border-t border-border/50 flex-nowrap overflow-hidden">
          <span className="text-[0.7rem] font-bold uppercase tracking-wider text-text-muted shrink-0 whitespace-nowrap">
            Sort By
          </span>
          <div className="flex items-center gap-1.5 sm:gap-2 flex-nowrap overflow-x-auto no-scrollbar py-0.5 flex-1 min-w-0">
            {(
              [
                { id: "popular", label: "Most used", Icon: TrendingUp },
                { id: "alphabetical", label: "A–Z", Icon: ArrowDownAZ },
                { id: "category", label: "Category", Icon: LayoutList },
              ] as const
            ).map(({ id, label, Icon }) => {
              const active = sortBy === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSortBy(id)}
                  className={`shrink-0 whitespace-nowrap rounded-full px-2.5 sm:px-3.5 py-1.5 min-h-[32px] inline-flex items-center justify-center gap-1.5 text-xs font-bold border transition-all cursor-pointer ${
                    active
                      ? "border-gold bg-gold/15 text-gold shadow-2xs"
                      : "border-border bg-bg-elevated/60 text-text-secondary hover:text-text-primary hover:border-border-light"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span className="leading-normal">{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results count */}
      {(searchQuery || selectedCategory !== "all") && filteredTools.length > 0 && (
        <p className="text-xs text-text-muted mb-3 sm:mb-4">
          Showing {filteredTools.length} of {TOOLS.length} tools
          {activeCategoryInfo && <> in <strong className="text-text-secondary">{activeCategoryInfo.name}</strong></>}
          {searchQuery && <> matching &quot;{searchQuery}&quot;</>}
          {selectedCategory !== "all" && (
            <button
              type="button"
              onClick={() => handleSelectCategory("all")}
              className="ml-2 text-gold hover:underline font-medium"
            >
              Show all categories
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
            type="button"
            onClick={() => {
              setSearchQuery("");
              handleSelectCategory("all");
            }}
            className="text-xs text-gold hover:underline font-medium"
          >
            Clear search &amp; filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredTools.map((tool) => {
            const cat = getCategoryInfo(tool.category);
            const accentColor = ({
  "language-learning": "#C75B39",
  "finance-tax": "#C8961E",
  "education-cbc": "#1A8BD1",
  "transport-travel": "#2FA463",
  "business-investment": "#B87A4B",
  "utilities-energy": "#F5A623",
  "government-legal": "#BE2126",
  "health-wellness": "#E05A5A",
  "data-reference": "#5BBFEA",
  "agriculture-environment": "#006B3F",
} as Record<string, string>)[tool.category] || "#C8961E";
            return (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}/`}
                className="tool-card bg-bg-card border border-border rounded-2xl p-5 sm:p-5.5 block group w-full"
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div
                    className="w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                    style={{
                      backgroundColor: `${accentColor}1A`,
                      borderColor: `${accentColor}38`,
                      color: accentColor,
                    }}
                  >
                    <DynamicIcon emoji={tool.icon} className="w-5.5 h-5.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    {cat && (
                      <div className="flex items-center gap-1.5 mb-1">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: accentColor }}
                        />
                        <span
                          className="text-[0.6875rem] font-bold uppercase tracking-wider leading-snug"
                          style={{ color: accentColor }}
                        >
                          {cat.name}
                        </span>
                      </div>
                    )}
                    <h2 className="text-base sm:text-lg font-bold text-text-primary font-[family-name:var(--font-outfit)] group-hover:text-gold transition-colors leading-snug">
                      {tool.shortTitle}
                    </h2>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-bg-elevated flex items-center justify-center text-text-secondary group-hover:text-gold group-hover:bg-gold/10 transition-colors shrink-0">
                    →
                  </div>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-3.5">
                  {tool.description}
                </p>
                <div className="pt-3 border-t border-border/60 flex items-center gap-2 text-xs text-text-muted leading-snug">
                  <span className="text-kenya-green-light shrink-0">✓</span>
                  <span>{tool.dataSource}</span>
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
          Every tool and reference directory on KenyaHub is engineered around official Kenyan statutory schedules, Gazette Notices, and institutional datasets—including the <strong>Kenya Revenue Authority (KRA)</strong> Income Tax Act bands, <strong>Social Health Authority (SHA/SHIF)</strong> and <strong>NSSF Tier I &amp; II</strong> schedules, <strong>Energy and Petroleum Regulatory Authority (EPRA)</strong> electricity tariffs, <strong>Kenya Institute of Curriculum Development (KICD)</strong> CBC guidelines, and <strong>KUCCPS</strong> degree placement formulas.
        </p>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          All calculations run 100% locally in your web browser without storing personal salary or financial inputs on external servers. Select any tool above to launch the interactive calculator, review step-by-step statutory methodology notes, and read answers to common Kenyan regulatory questions.
        </p>
      </section>
    </div>
  );
}
