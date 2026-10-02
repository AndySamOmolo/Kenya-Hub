"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { TOOLS, TOOL_CATEGORIES } from "@/lib/tools-registry";
import { getCategoryInfo, getToolUsageScore } from "@/lib/tools-registry";
import { getToolVisitCounts, hasAnyVisits } from "@/lib/tool-usage";
import { ArrowDownAZ, LayoutList, Pin, TrendingUp, Wrench } from "lucide-react";
import DynamicIcon from "@/components/ui/DynamicIcon";
import SearchInput from "@/components/ui/SearchInput";
import { useMounted } from "@/lib/useMounted";

function ToolsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"popular" | "alphabetical" | "category">("popular");
  const [pinnedToolSlugs, setPinnedToolSlugs] = useState<string[]>([]);
  const [visitCounts, setVisitCounts] = useState<Record<string, number>>({});
  const mounted = useMounted();

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    // Load pinned tools
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

    // Load visit counts
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

      // "popular" — use real visit counts if user has any, else curated baselines
      if (hasAnyVisits()) {
        const aVisits = visitCounts[a.slug] ?? 0;
        const bVisits = visitCounts[b.slug] ?? 0;
        return bVisits - aVisits || labelComparison;
      }
      return getToolUsageScore(b) - getToolUsageScore(a) || labelComparison;
    });
  }, [selectedCategory, searchQuery, sortBy, visitCounts]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-outfit)] mb-2">
          <Wrench className="w-[0.9em] h-[0.9em] inline-block mb-1 text-gold mr-2" />All Tools
        </h1>
        <p className="text-text-muted">
          {TOOLS.length} free tools built for Kenya — search or browse by
          category
        </p>
      </div>

      {/* Pinned Tools */}
      {mounted && pinnedToolSlugs.length > 0 && searchQuery === "" && selectedCategory === "all" && (
        <div className="mb-10">
          <h2 className="flex items-center gap-2 text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-4">
            <Pin className="h-4 w-4 text-gold" /> Pinned Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pinnedToolSlugs.map((slug) => {
              const tool = TOOLS.find((t) => t.slug === slug);
              if (!tool) return null;
              const cat = getCategoryInfo(tool.category);
              return (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="tool-card bg-bg-card border border-gold/40 shadow-[0_0_15px_rgba(200,150,30,0.05)] rounded-xl p-4 sm:p-5 block group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl tool-icon flex-shrink-0">
                      <DynamicIcon emoji={tool.icon} className="w-[1em] h-[1em]" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-semibold text-text-primary group-hover:text-gold transition-colors truncate">
                          {tool.shortTitle}
                        </h3>
                      </div>
                      <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">
                        {tool.description}
                      </p>
                      {cat && (
                        <span className={`badge ${cat.badgeClass} mt-2`}>
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

      {/* Search */}
      <div className="mb-6">
        <SearchInput
          type="text"
          placeholder="Search tools — e.g. 'PAYE', 'matatu', 'CBC', 'M-Pesa'..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input-field max-w-lg text-sm"
          id="tools-search"
         onClear={() => setSearchQuery("")} />
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-8">
        <label htmlFor="tools-sort" className="text-xs font-semibold uppercase tracking-wider text-text-muted">
          Sort tools
        </label>
        <div className="relative inline-block">
          {sortBy === "popular" ? (
            <TrendingUp className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
          ) : sortBy === "category" ? (
            <LayoutList className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
          ) : (
            <ArrowDownAZ className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
          )}
          <select
            id="tools-sort"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as typeof sortBy)}
            className="select-field select-field--icon-left !pl-9 sm:!pl-10 text-sm w-auto"
          >
            <option value="popular">Most used</option>
            <option value="alphabetical">A-Z</option>
            <option value="category">Category</option>
          </select>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
            selectedCategory === "all"
              ? "bg-gold text-kenya-black"
              : "bg-bg-card border border-border text-text-secondary hover:border-gold hover:text-gold"
          }`}
        >
          All ({TOOLS.length})
        </button>
        {TOOL_CATEGORIES.map((cat) => {
          const count = TOOLS.filter((t) => t.category === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-gold text-kenya-black"
                  : "bg-bg-card border border-border text-text-secondary hover:border-gold hover:text-gold"
              }`}
            >
              <DynamicIcon emoji={cat.icon} className="w-[1em] h-[1em] inline-block mb-[0.1em]" /> {cat.name} ({count})
            </button>
          );
        })}
      </div>

      {/* Results count */}
      {(searchQuery || selectedCategory !== "all") && filteredTools.length > 0 && (
        <p className="text-xs text-text-muted mb-4">
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
        <div className="text-center py-10 sm:py-16">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTools.map((tool) => {
            const cat = getCategoryInfo(tool.category);
            return (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="tool-card bg-bg-card border border-border rounded-xl p-4 sm:p-5 block group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl tool-icon transition-transform flex-shrink-0">
                    <DynamicIcon emoji={tool.icon} className="w-[1em] h-[1em]" />
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-sm font-semibold text-text-primary mb-1 font-[family-name:var(--font-outfit)] group-hover:text-gold transition-colors">
                      {tool.shortTitle}
                    </h2>
                    <p className="text-xs text-text-muted line-clamp-2 leading-relaxed mb-2">
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
    </div>
  );
}

export default function ToolsHubPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-text-muted">Loading tools...</div>}>
      <ToolsContent />
    </Suspense>
  );
}
