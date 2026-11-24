"use client";

import { useState, useEffect, useMemo, useRef, useDeferredValue } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight } from "lucide-react";
import { TOOLS } from "@/lib/tools-registry";
import DynamicIcon from "@/components/ui/DynamicIcon";

export interface QuickSearchItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  badge: string;
  icon: string;
  titleNorm: string;
  badgeNorm: string;
  subNorm: string;
  titleTokens: string[];
}

function stripDiacritics(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function buildSearchItem(
  raw: Omit<QuickSearchItem, "titleNorm" | "badgeNorm" | "subNorm" | "titleTokens">
): QuickSearchItem {
  const titleNorm = stripDiacritics(raw.title);
  return {
    ...raw,
    titleNorm,
    badgeNorm: stripDiacritics(raw.badge),
    subNorm: stripDiacritics(raw.subtitle),
    titleTokens: titleNorm.split(/[\s\-–—/(),.:]+/).filter(Boolean),
  };
}

let cachedExtraSearchItems: QuickSearchItem[] | null = null;
let extraSearchItemsPromise: Promise<QuickSearchItem[]> | null = null;

function loadExtraSearchItems(): Promise<QuickSearchItem[]> {
  if (cachedExtraSearchItems) return Promise.resolve(cachedExtraSearchItems);
  if (!extraSearchItemsPromise) {
    extraSearchItemsPromise = Promise.all([
      import("@/data/courses/catalog-summary"),
      import("@/data/blog-posts-summary"),
      import("@/data/counties.json"),
      import("@/data/matatu-routes.json"),
    ]).then(([coursesMod, blogMod, countiesMod, matatuMod]) => {
      const items: QuickSearchItem[] = [];
      for (const c of coursesMod.PUBLISHED_COURSE_SUMMARIES) {
        items.push(
          buildSearchItem({
            id: `lang-${c.config.id}`,
            title: `Learn ${c.config.name} (${c.config.nativeName})`,
            subtitle: `${c.config.family} • ${c.config.counties.slice(0, 3).join(", ")}`,
            href: `/tools/learn/${c.config.id}/`,
            badge: "Language",
            icon: "🗣️",
          })
        );
      }
      for (const county of countiesMod.default.counties) {
        const codeStr = String(county.code).padStart(3, "0");
        items.push(
          buildSearchItem({
            id: `county-${county.slug}`,
            title: `${county.name} County (#${codeStr})`,
            subtitle: `HQ: ${county.capital} • Gov. ${county.governor}`,
            href: `/county/${county.slug}/`,
            badge: "County",
            icon: "🏛️",
          })
        );
      }
      for (const post of blogMod.STATIC_BLOG_POST_SUMMARIES) {
        items.push(
          buildSearchItem({
            id: `blog-${post.slug}`,
            title: post.title,
            subtitle: post.excerpt,
            href: `/blog/${post.slug}/`,
            badge: "Guide",
            icon: "📖",
          })
        );
      }
      const routesByTown = (matatuMod.default.routes || {}) as Record<
        string,
        Array<{
          routeNumber: string;
          name: string;
          slug: string;
          terminusA: string;
          terminusB: string;
          saccoName?: string;
        }>
      >;
      for (const [townSlug, townRoutes] of Object.entries(routesByTown)) {
        if (!Array.isArray(townRoutes)) continue;
        const townLabel = townSlug.charAt(0).toUpperCase() + townSlug.slice(1);
        for (const route of townRoutes) {
          items.push(
            buildSearchItem({
              id: `matatu-${townSlug}-${route.slug}`,
              title: `Route ${route.routeNumber}: ${route.name} (${townLabel})`,
              subtitle: `${route.terminusA} → ${route.terminusB}${route.saccoName ? ` • ${route.saccoName}` : ""}`,
              href: `/matatu/${townSlug}/${route.slug}/`,
              badge: "Matatu",
              icon: "🚌",
            })
          );
        }
      }
      cachedExtraSearchItems = items;
      return items;
    });
  }
  return extraSearchItemsPromise;
}

const TOOL_SEARCH_ITEMS: QuickSearchItem[] = TOOLS.filter((t) => t.isLive).map((t) =>
  buildSearchItem({
    id: `tool-${t.slug}`,
    title: t.shortTitle,
    subtitle: t.description,
    href: `/tools/${t.slug}/`,
    badge: "Tool",
    icon: t.icon,
  })
);

interface GlobalSearchModalProps {
  onClose: () => void;
}

export default function GlobalSearchModal({ onClose }: GlobalSearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [extraSearchItems, setExtraSearchItems] = useState<QuickSearchItem[]>(
    () => cachedExtraSearchItems ?? []
  );
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchDialogRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => searchInputRef.current?.focus(), 30);
    return () => clearTimeout(timer);
  }, []);

  // Focus trap for Command-K modal dialog (Tab / Shift+Tab)
  useEffect(() => {
    const handleTrapKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const dialog = searchDialogRef.current;
      if (!dialog) return;
      const focusables = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.offsetParent !== null);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey) {
        if (!active || active === first || !dialog.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (!active || active === last || !dialog.contains(active)) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleTrapKeyDown);
    return () => document.removeEventListener("keydown", handleTrapKeyDown);
  }, []);

  useEffect(() => {
    if (extraSearchItems.length > 0) return;
    let cancelled = false;
    loadExtraSearchItems()
      .then((items) => {
        if (!cancelled) setExtraSearchItems(items);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [extraSearchItems.length]);

  const quickSearchItems = useMemo<QuickSearchItem[]>(() => {
    return extraSearchItems.length > 0
      ? [...TOOL_SEARCH_ITEMS, ...extraSearchItems]
      : TOOL_SEARCH_ITEMS;
  }, [extraSearchItems]);

  const filteredSearchResults = useMemo(() => {
    const q = stripDiacritics(deferredSearchQuery.trim());
    if (!q) return quickSearchItems.slice(0, 10);

    const typeTitleBoost: Record<string, number> = {
      Tool: 45,
      Language: 22,
      County: 15,
      Matatu: 10,
      Guide: 0,
    };

    const scored: { item: QuickSearchItem; score: number }[] = [];
    for (const item of quickSearchItems) {
      const title = item.titleNorm;
      const badge = item.badgeNorm;
      const sub = item.subNorm;
      const titleTokens = item.titleTokens;

      let score = 0;
      let matchedTitle = false;

      if (title === q) {
        score = 200;
        matchedTitle = true;
      } else if (title.startsWith(q)) {
        score = 130;
        matchedTitle = true;
      } else if (titleTokens.includes(q)) {
        score = 100;
        matchedTitle = true;
      } else if (titleTokens.some((w) => w.startsWith(q))) {
        score = 80;
        matchedTitle = true;
      } else if (title.includes(q)) {
        score = 55;
        matchedTitle = true;
      } else if (badge.includes(q)) {
        score = 25;
      } else if (sub.includes(q)) {
        score = 10;
      }

      if (score > 0) {
        if (matchedTitle) {
          score += typeTitleBoost[item.badge] ?? 0;
        }
        scored.push({ item, score });
      }
    }
    scored.sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title));
    return scored.slice(0, 14).map((x) => x.item);
  }, [quickSearchItems, deferredSearchQuery]);

  return (
    <div
      data-adsense-pause="true"
      className="fixed inset-0 z-[120] bg-black/75 sm:bg-black/65 sm:backdrop-blur-sm flex items-start justify-center p-3 pt-14 sm:p-4 sm:pt-24"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Site search"
    >
      <div
        ref={searchDialogRef}
        className="relative z-[121] w-full max-w-xl max-h-[calc(100vh-5rem)] max-h-[calc(100dvh-5rem)] rounded-2xl border border-border bg-bg-card shadow-2xl overflow-hidden flex flex-col"
        style={{ backgroundColor: "var(--bg-card)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-3 border-b border-border bg-bg-elevated/60 shrink-0">
          <Search className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && filteredSearchResults[0]) {
                onClose();
                router.push(filteredSearchResults[0].href);
              }
            }}
            placeholder="Search tools, languages, or counties..."
            aria-label="Search tools, languages, counties, matatu routes, and guides"
            className="flex-1 min-w-0 bg-transparent text-sm text-text-primary placeholder:text-text-muted rounded-md px-1"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                searchInputRef.current?.focus();
              }}
              className="shrink-0 text-text-muted hover:text-gold text-xs font-medium px-2 py-1 rounded-md hover:bg-bg-card transition-colors cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 w-7 h-7 rounded-lg border border-border bg-bg-card flex items-center justify-center text-text-muted hover:text-text-primary hover:border-gold/50 transition-colors cursor-pointer"
            aria-label="Close search"
          >
            <X className="w-4 h-4 shrink-0" aria-hidden="true" />
          </button>
        </div>

        <div
          role="status"
          aria-live="polite"
          className="px-4 py-1.5 text-[0.7rem] text-text-muted border-b border-border/60 bg-bg-secondary/50 shrink-0"
        >
          {searchQuery.trim()
            ? `${filteredSearchResults.length} result${filteredSearchResults.length === 1 ? "" : "s"} for "${searchQuery.trim()}"`
            : `Showing ${filteredSearchResults.length} popular tools & shortcuts`}
        </div>

        <div className="max-h-[60vh] overflow-y-auto divide-y divide-border/50 flex-1">
          {filteredSearchResults.length === 0 ? (
            <div className="p-8 text-center text-sm text-text-muted">
              No matching tools, languages, counties, matatu routes, or guides found for &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            filteredSearchResults.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                prefetch={false}
                onClick={onClose}
                className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-bg-elevated transition-colors group"
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <span className="w-8 h-8 rounded-lg bg-bg-elevated border border-border flex items-center justify-center shrink-0 text-base">
                    <DynamicIcon emoji={item.icon} className="w-4 h-4 text-gold" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-semibold text-text-primary group-hover:text-gold transition-colors truncate">
                        {item.title}
                      </span>
                      <span className="micro-badge text-[0.625rem] px-1.5 py-0.5 rounded bg-gold/15 text-gold font-semibold shrink-0">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-text-muted truncate mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-gold shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
