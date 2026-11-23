"use client";

import {
  BusFront,
  Home,
  Edit3,
  Landmark,
  Mail,
  Wrench,
  Info,
  Languages,
  Globe,
  Search,
  X,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { useState, useEffect, useMemo, useRef, useDeferredValue } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { TOOL_CATEGORIES, TOOLS } from "@/lib/tools-registry";
import { useTheme } from "@/components/ThemeProvider";
import DynamicIcon from "@/components/ui/DynamicIcon";

interface QuickSearchItem {
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

function buildSearchItem(raw: Omit<QuickSearchItem, "titleNorm" | "badgeNorm" | "subNorm" | "titleTokens">): QuickSearchItem {
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
        items.push(buildSearchItem({
          id: `lang-${c.config.id}`,
          title: `Learn ${c.config.name} (${c.config.nativeName})`,
          subtitle: `${c.config.family} • ${c.config.counties.slice(0, 3).join(", ")}`,
          href: `/tools/learn/${c.config.id}/`,
          badge: "Language",
          icon: "🗣️",
        }));
      }
      for (const county of countiesMod.default.counties) {
        const codeStr = String(county.code).padStart(3, "0");
        items.push(buildSearchItem({
          id: `county-${county.slug}`,
          title: `${county.name} County (#${codeStr})`,
          subtitle: `HQ: ${county.capital} • Gov. ${county.governor}`,
          href: `/county/${county.slug}/`,
          badge: "County",
          icon: "🏛️",
        }));
      }
      for (const post of blogMod.STATIC_BLOG_POST_SUMMARIES) {
        items.push(buildSearchItem({
          id: `blog-${post.slug}`,
          title: post.title,
          subtitle: post.excerpt,
          href: `/blog/${post.slug}/`,
          badge: "Guide",
          icon: "📖",
        }));
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
          items.push(buildSearchItem({
            id: `matatu-${townSlug}-${route.slug}`,
            title: `Route ${route.routeNumber}: ${route.name} (${townLabel})`,
            subtitle: `${route.terminusA} → ${route.terminusB}${route.saccoName ? ` • ${route.saccoName}` : ""}`,
            href: `/matatu/${townSlug}/${route.slug}/`,
            badge: "Matatu",
            icon: "🚌",
          }));
        }
      }
      cachedExtraSearchItems = items;
      return items;
    });
  }
  return extraSearchItemsPromise;
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [extraSearchItems, setExtraSearchItems] = useState<QuickSearchItem[]>(() => cachedExtraSearchItems ?? []);
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchDialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggle } = useTheme();

  const notifyCategorySelect = (catId: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("kh-select-category", { detail: catId }));
    }
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => {
          if (!prev) {
            previousFocusRef.current = document.activeElement as HTMLElement | null;
          }
          return !prev;
        });
        setToolsOpen(false);
        setMobileOpen(false);
      } else if (e.key === "Escape") {
        setToolsOpen(false);
        setMobileOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      const timer = setTimeout(() => searchInputRef.current?.focus(), 30);
      return () => clearTimeout(timer);
    } else {
      setSearchQuery("");
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === "function") {
        previousFocusRef.current.focus();
        previousFocusRef.current = null;
      }
    }
  }, [searchOpen]);

  // Focus trap for Command-K modal dialog (Tab / Shift+Tab)
  useEffect(() => {
    if (!searchOpen) return;
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
  }, [searchOpen]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (mobileOpen || searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, searchOpen]);

  const openSearchModal = () => {
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    setToolsOpen(false);
    setMobileOpen(false);
    setSearchOpen(true);
  };

  useEffect(() => {
    if (!searchOpen || extraSearchItems.length > 0) return;
    let cancelled = false;
    loadExtraSearchItems()
      .then((items) => {
        if (!cancelled) setExtraSearchItems(items);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [searchOpen, extraSearchItems.length]);

  const toolSearchItems = useMemo<QuickSearchItem[]>(() => {
    if (!searchOpen) return [];
    const items: QuickSearchItem[] = [];
    for (const t of TOOLS) {
      if (!t.isLive) continue;
      items.push(buildSearchItem({
        id: `tool-${t.slug}`,
        title: t.shortTitle,
        subtitle: t.description,
        href: `/tools/${t.slug}/`,
        badge: "Tool",
        icon: t.icon,
      }));
    }
    return items;
  }, [searchOpen]);

  const quickSearchItems = useMemo<QuickSearchItem[]>(() => {
    if (!searchOpen) return [];
    return extraSearchItems.length > 0 ? [...toolSearchItems, ...extraSearchItems] : toolSearchItems;
  }, [searchOpen, toolSearchItems, extraSearchItems]);

  const filteredSearchResults = useMemo(() => {
    if (!searchOpen) return [];
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
  }, [quickSearchItems, deferredSearchQuery, searchOpen]);

  const isActivePath = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    if (href === "/tools/") {
      if (
        pathname.startsWith("/tools/learn") ||
        pathname.startsWith("/tools/kenyan-translator")
      ) {
        return false;
      }
    }
    return pathname === href || pathname === href.slice(0, -1) || pathname.startsWith(href);
  };

  const navLinkClass = (href: string, extra = "") => {
    const active = isActivePath(href);
    return `h-9 lg:h-10 px-2.5 lg:px-3.5 text-[0.8125rem] font-medium transition-colors rounded-xl inline-flex items-center gap-1.5 lg:gap-2 whitespace-nowrap ${
      active
        ? "text-gold bg-gold/10 font-semibold border border-gold/25"
        : "text-text-secondary hover:text-text-primary hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
    } ${extra}`;
  };

  return (
    <>
      <header className="sticky top-0 z-[80]">
        {/* Kenyan flag stripe */}
        <div className="kenya-stripe w-full" />

        <nav aria-label="Primary navigation" className="glass">
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-3 md:gap-6 h-[54px] md:h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
                <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-kenya-green via-gold to-kenya-red opacity-20 group-hover:opacity-40 transition-opacity" />
                  <img
                    src="/kenya-flag.svg"
                    alt=""
                    aria-hidden="true"
                    decoding="async"
                    width={20}
                    height={13}
                    className="relative w-4 sm:w-5 h-auto rounded-[1px] shadow-sm"
                  />
                </div>
                <span className="text-base sm:text-lg font-extrabold font-[family-name:var(--font-outfit)] gradient-text-kenya tracking-tight">
                  KenyaHub
                </span>
              </Link>

              {/* Desktop Primary Nav Links — spaced cleanly with breathing room */}
              <div className="hidden md:flex items-center gap-1 lg:gap-2 flex-1 justify-center">
                <Link
                  href="/"
                  aria-current={isActivePath("/") ? "page" : undefined}
                  className={navLinkClass("/")}
                >
                  <Home className="w-3.5 h-3.5 stroke-[1.75] shrink-0" aria-hidden="true" />
                  <span>Home</span>
                </Link>

                <Link
                  href="/tools/learn/"
                  aria-current={isActivePath("/tools/learn/") ? "page" : undefined}
                  className={navLinkClass("/tools/learn/")}
                >
                  <Languages className="w-3.5 h-3.5 stroke-[1.75] shrink-0" aria-hidden="true" />
                  <span>Languages</span>
                  <span className="hidden xl:inline-flex items-center justify-center px-1.5 py-0.5 text-[0.65rem] font-bold rounded-full bg-gold/15 text-gold leading-none">
                    23
                  </span>
                </Link>

                <Link
                  href="/tools/kenyan-translator/"
                  aria-current={isActivePath("/tools/kenyan-translator/") ? "page" : undefined}
                  className={navLinkClass("/tools/kenyan-translator/")}
                >
                  <Globe className="w-3.5 h-3.5 stroke-[1.75] shrink-0" aria-hidden="true" />
                  <span>Translator</span>
                </Link>

                {/* Tools mega-menu */}
                <div
                  className="relative"
                  onMouseEnter={() => setToolsOpen(true)}
                  onMouseLeave={() => setToolsOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={toolsOpen}
                    aria-haspopup="true"
                    onClick={() => setToolsOpen((v) => !v)}
                    className={navLinkClass("/tools/", "cursor-pointer")}
                  >
                    <Wrench className="w-3.5 h-3.5 stroke-[1.75] shrink-0" aria-hidden="true" />
                    <span>Tools</span>
                    <svg
                      className={`w-3.5 h-3.5 leading-none shrink-0 transition-transform duration-200 ${toolsOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.25}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {toolsOpen && (
                    <div className="absolute top-full right-0 pt-2 w-[680px] z-[90]">
                      <div className="rounded-2xl border border-border bg-bg-card shadow-2xl shadow-black/30 p-6" style={{ backgroundColor: "var(--bg-card)" }}>
                        <div className="maasai-border-top rounded-2xl mb-3" />

                        <div className="grid grid-cols-3 gap-x-6 gap-y-4 pt-1 max-h-[60vh] overflow-y-auto pr-2">
                          {TOOL_CATEGORIES.map((cat) => {
                            const catTools = TOOLS.filter((t) => t.category === cat.id);
                            return (
                              <div key={cat.id}>
                                <Link
                                  href={`/tools/?category=${cat.id}`}
                                  prefetch={false}
                                  onClick={() => {
                                    setToolsOpen(false);
                                    notifyCategorySelect(cat.id);
                                  }}
                                  className="flex items-center gap-1.5 text-[0.8125rem] font-semibold text-text-primary hover:text-gold transition-colors mb-1.5"
                                >
                                  <span className="text-gold"><DynamicIcon emoji={cat.icon} className="w-4 h-4 inline-block mb-[0.1em]" /></span>
                                  {cat.name}
                                </Link>
                                <div className="space-y-1 pl-6">
                                  {catTools.map((tool) => (
                                    <Link
                                      key={tool.slug}
                                      href={`/tools/${tool.slug}/`}
                                      prefetch={false}
                                      onClick={() => setToolsOpen(false)}
                                      className="block text-xs text-text-muted hover:text-text-secondary transition-colors py-0.5"
                                    >
                                      {tool.shortTitle}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                          <Link
                            href="/tools/"
                            prefetch={false}
                            onClick={() => {
                              setToolsOpen(false);
                              notifyCategorySelect("all");
                            }}
                            className="text-sm font-semibold text-gold hover:text-gold-light transition-colors flex items-center gap-1.5"
                          >
                            Browse All {TOOLS.length} Tools
                            <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          </Link>
                          <span className="text-xs text-text-muted">
                            Official Kenya data sources
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/county/"
                  aria-current={isActivePath("/county/") ? "page" : undefined}
                  className={navLinkClass("/county/")}
                >
                  <Landmark className="w-3.5 h-3.5 stroke-[1.75] shrink-0" aria-hidden="true" />
                  <span>Counties</span>
                </Link>

                <Link
                  href="/matatu/"
                  aria-current={isActivePath("/matatu/") ? "page" : undefined}
                  className={navLinkClass("/matatu/")}
                >
                  <BusFront className="w-3.5 h-3.5 stroke-[1.75] shrink-0" aria-hidden="true" />
                  <span>Matatu</span>
                </Link>

                <Link
                  href="/blog/"
                  aria-current={isActivePath("/blog/") ? "page" : undefined}
                  className={navLinkClass("/blog/")}
                >
                  <BookOpen className="w-3.5 h-3.5 stroke-[1.75] shrink-0" aria-hidden="true" />
                  <span>Guides</span>
                </Link>

              </div>

              {/* Desktop Utility Actions (Search + Theme) */}
              <div className="hidden md:flex items-center gap-2 shrink-0 pl-3 border-l border-border/50">
                <button
                  type="button"
                  data-testid="navbar-search-trigger"
                  onClick={openSearchModal}
                  className="h-9 lg:h-10 inline-flex items-center gap-2 rounded-xl border border-border bg-bg-card/80 px-3 text-xs text-text-muted hover:border-gold/50 hover:text-text-primary transition-colors cursor-pointer"
                  aria-label="Quick search tools, languages, counties, matatu routes, and guides (Ctrl+K)"
                  title="Quick search (⌘K / Ctrl+K)"
                >
                  <Search className="w-3.5 h-3.5 text-gold shrink-0" aria-hidden="true" />
                  <span className="hidden xl:inline">Search...</span>
                  <kbd className="hidden xl:inline-block rounded bg-bg-elevated px-1.5 py-0.5 text-[0.65rem] font-mono text-text-muted border border-border">
                    ⌘K
                  </kbd>
                </button>

                <button
                  type="button"
                  onClick={toggle}
                  className="theme-toggle !h-9 !w-9 lg:!h-10 lg:!w-10 !rounded-xl inline-flex items-center justify-center"
                  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                  title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                >
                  {theme === "dark" ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Mobile: Compact right cluster (Search + Learn + Theme + Hamburger) */}
              <div className="md:hidden flex items-center gap-1.5">
                <button
                  type="button"
                  data-testid="navbar-search-trigger"
                  onClick={openSearchModal}
                  className="h-7 w-7 rounded-lg border border-border bg-bg-card/80 inline-flex items-center justify-center text-gold hover:border-gold/50 transition-colors cursor-pointer"
                  aria-label="Search tools, languages, counties, matatu routes, and guides"
                >
                  <Search className="w-3.5 h-3.5" aria-hidden="true" />
                </button>

                <Link
                  href="/tools/learn/"
                  className="h-7 px-2 text-[11px] font-bold text-gold bg-gold/15 border border-gold/30 rounded-lg inline-flex items-center justify-center gap-1"
                >
                  <Languages className="w-3 h-3 text-gold shrink-0" aria-hidden="true" />
                  <span>Learn</span>
                </Link>

                <button
                  type="button"
                  onClick={toggle}
                  className="theme-toggle !h-7 !w-7 !min-h-0 !min-w-0 !rounded-lg inline-flex items-center justify-center"
                  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                  title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                >
                  {theme === "dark" ? (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>

                <button
                  type="button"
                  className="relative h-7 w-7 inline-flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors rounded-lg cursor-pointer"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-expanded={mobileOpen}
                  aria-label="Toggle navigation menu"
                >
                  <div className="space-y-1">
                    <span className={`block w-4 h-0.5 bg-current transition-transform duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
                    <span className={`block w-4 h-0.5 bg-current transition-[opacity,transform] duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
                    <span className={`block w-4 h-0.5 bg-current transition-transform duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="md:hidden absolute left-0 right-0 top-full z-[70] h-[calc(100vh-53px)] h-[calc(100dvh-53px)] max-h-[calc(100vh-5rem)] max-h-[calc(100dvh-5rem)] border-t border-border bg-bg-card flex flex-col shadow-2xl" style={{ backgroundColor: "var(--bg-card)" }}>
              <div className="flex-1 overflow-y-auto px-4 py-4 pb-16 space-y-1">
                <Link href="/" className="group flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary rounded-xl hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors" onClick={() => setMobileOpen(false)}>
                  <span className="w-7 flex items-center justify-center shrink-0"><Home className="w-4 h-4 text-text-muted group-hover:text-gold transition-colors shrink-0" /></span> Home
                </Link>
                <Link href="/tools/learn/" className="group flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary rounded-xl hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors" onClick={() => setMobileOpen(false)}>
                  <span className="w-7 flex items-center justify-center shrink-0"><Languages className="w-4 h-4 text-gold shrink-0" /></span>
                  <span>Learn 23 Kenyan Languages</span>
                </Link>
                <Link href="/tools/kenyan-translator/" className="group flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-text-primary hover:text-gold rounded-xl hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors" onClick={() => setMobileOpen(false)}>
                  <span className="w-7 flex items-center justify-center shrink-0"><Globe className="w-4 h-4 text-kenya-green-light shrink-0" /></span> 23-Language Translator &amp; Dictionary
                </Link>
                <Link href="/county/" className="group flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary rounded-xl hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors" onClick={() => setMobileOpen(false)}>
                  <span className="w-7 flex items-center justify-center shrink-0"><Landmark className="w-4 h-4 text-text-muted group-hover:text-gold transition-colors shrink-0" /></span> 47 Counties Hub
                </Link>
                <Link href="/matatu/" className="group flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-text-secondary hover:text-gold rounded-xl hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors" onClick={() => setMobileOpen(false)}>
                  <span className="w-7 flex items-center justify-center shrink-0"><BusFront className="w-4 h-4 text-gold group-hover:text-gold-light transition-colors shrink-0" /></span> Matatu Routes
                </Link>
                <Link
                  href="/tools/"
                  className="group flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary rounded-xl hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors"
                  onClick={() => {
                    setMobileOpen(false);
                    notifyCategorySelect("all");
                  }}
                >
                  <span className="w-7 flex items-center justify-center shrink-0"><Wrench className="w-4 h-4 text-text-muted group-hover:text-gold transition-colors shrink-0" /></span> All {TOOLS.length} Tools
                </Link>
                <Link href="/blog/" className="group flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary rounded-xl hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors" onClick={() => setMobileOpen(false)}>
                  <span className="w-7 flex items-center justify-center shrink-0"><Edit3 className="w-4 h-4 text-text-muted group-hover:text-gold transition-colors shrink-0" /></span> Kenyan Guides &amp; Blog
                </Link>
                <Link href="/about/" className="group flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary rounded-xl hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors" onClick={() => setMobileOpen(false)}>
                  <span className="w-7 flex items-center justify-center shrink-0"><Info className="w-4 h-4 text-text-muted group-hover:text-gold transition-colors shrink-0" /></span> About Us
                </Link>
                <Link href="/contact/" className="group flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary rounded-xl hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors" onClick={() => setMobileOpen(false)}>
                  <span className="w-7 flex items-center justify-center shrink-0"><Mail className="w-4 h-4 text-text-muted group-hover:text-gold transition-colors shrink-0" /></span> Contact
                </Link>

                <div className="section-divider my-2.5" />

                <p className="px-3 py-1 text-xs font-bold text-text-muted uppercase tracking-[0.12em]">
                  Categories
                </p>
                {TOOL_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/tools/?category=${cat.id}`}
                    prefetch={false}
                    className="group flex items-center gap-3 px-3 py-2.5 text-sm text-text-secondary hover:text-text-primary rounded-xl hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors"
                    onClick={() => {
                      setMobileOpen(false);
                      notifyCategorySelect(cat.id);
                    }}
                  >
                    <span className="w-7 flex items-center justify-center shrink-0">
                      <DynamicIcon emoji={cat.icon} className="w-4 h-4 text-text-muted group-hover:text-gold transition-colors shrink-0" />
                    </span>
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Global Command-K Quick Search Modal */}
      {searchOpen && (
        <div
          data-adsense-pause="true"
          className="fixed inset-0 z-[120] bg-black/75 sm:bg-black/65 sm:backdrop-blur-sm flex items-start justify-center p-3 pt-14 sm:p-4 sm:pt-24"
          onClick={() => setSearchOpen(false)}
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
                    setSearchOpen(false);
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
                onClick={() => setSearchOpen(false)}
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
                    onClick={() => setSearchOpen(false)}
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
      )}
    </>
  );
}
