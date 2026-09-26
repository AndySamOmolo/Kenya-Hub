"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { TOOLS, TOOL_CATEGORIES } from "@/lib/tools-registry";
import { getCategoryInfo } from "@/lib/tools-registry";
import { Pin, Wrench } from "lucide-react";
import DynamicIcon from "@/components/ui/DynamicIcon";
import SearchInput from "@/components/ui/SearchInput";

function ToolsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [pinnedToolSlugs, setPinnedToolSlugs] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

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

    return tools;
  }, [selectedCategory, searchQuery]);

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

      {/* Tools Grid */}
      {filteredTools.length === 0 ? (
        <div className="text-center py-10 sm:py-16">
          <div className="flex justify-center mb-3"><DynamicIcon emoji="🔍" className="w-10 h-10 text-text-muted" /></div>
          <p className="text-text-secondary text-sm">
            No tools found matching &quot;{searchQuery}&quot;
          </p>
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
