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
} from "lucide-react";
import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { TOOL_CATEGORIES, TOOLS } from "@/lib/tools-registry";
import { PUBLISHED_COURSES } from "@/data/courses/registry";
import countiesData from "@/data/counties.json";
import { useTheme } from "@/components/ThemeProvider";
import DynamicIcon from "@/components/ui/DynamicIcon";

interface QuickSearchItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  badge: string;
  icon: string;
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
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
        setSearchOpen((prev) => !prev);
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
      setTimeout(() => searchInputRef.current?.focus(), 50);
    } else {
      setSearchQuery("");
    }
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

  const quickSearchItems = useMemo<QuickSearchItem[]>(() => {
    const items: QuickSearchItem[] = [];
    for (const t of TOOLS.filter((tool) => tool.isLive)) {
      items.push({
        id: `tool-${t.slug}`,
        title: t.shortTitle,
        subtitle: t.description,
        href: `/tools/${t.slug}/`,
        badge: "Tool",
        icon: t.icon,
      });
    }
    for (const c of PUBLISHED_COURSES) {
      items.push({
        id: `lang-${c.config.id}`,
        title: `Learn ${c.config.name} (${c.config.nativeName})`,
        subtitle: `${c.config.family} • ${c.config.counties.slice(0, 3).join(", ")}`,
        href: `/tools/learn/${c.config.id}/`,
        badge: "Language",
        icon: "🗣️",
      });
    }
    for (const county of countiesData.counties) {
      const codeStr = String(county.code).padStart(3, "0");
      items.push({
        id: `county-${county.slug}`,
        title: `${county.name} County (#${codeStr})`,
        subtitle: `HQ: ${county.capital} • Gov. ${county.governor}`,
        href: `/county/${county.slug}/`,
        badge: "County",
        icon: "🏛️",
      });
    }
    return items;
  }, []);

  const filteredSearchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return quickSearchItems.slice(0, 10);
    return quickSearchItems
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.subtitle.toLowerCase().includes(q) ||
          item.badge.toLowerCase().includes(q)
      )
      .slice(0, 14);
  }, [quickSearchItems, searchQuery]);

  const isActivePath = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname === href.slice(0, -1) || pathname.startsWith(href);
  };

  const navLinkClass = (href: string, extra = "") => {
    const active = isActivePath(href);
    return `px-3 py-2 text-[0.8125rem] font-medium transition-colors rounded-lg flex items-center gap-1.5 ${
      active
        ? "text-gold bg-gold/10 font-semibold border border-gold/25"
        : "text-text-secondary hover:text-text-primary hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
    } ${extra}`;
  };

  return (
    <>
      {/* Kenyan flag stripe */}
      <div className="kenya-stripe w-full" />

      <nav className="sticky top-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-[54px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-kenya-green via-gold to-kenya-red opacity-20 group-hover:opacity-40 transition-opacity" />
                <img src="/kenya-flag.svg" alt="Kenya Flag" className="relative w-4 sm:w-5 h-auto rounded-[1px] shadow-sm" />
              </div>
              <span className="text-base sm:text-lg font-extrabold font-[family-name:var(--font-outfit)] gradient-text-kenya tracking-tight">
                KenyaHub
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              <Link
                href="/"
                aria-current={isActivePath("/") ? "page" : undefined}
                className={navLinkClass("/")}
              >
                Home
              </Link>

              <Link
                href="/tools/learn/"
                aria-current={isActivePath("/tools/learn/") ? "page" : undefined}
                className={navLinkClass("/tools/learn/")}
              >
                <Languages className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Learn Languages (23)</span>
              </Link>

              <Link
                href="/tools/kenyan-translator/"
                aria-current={isActivePath("/tools/kenyan-translator/") ? "page" : undefined}
                className={navLinkClass("/tools/kenyan-translator/")}
              >
                <Globe className="w-3.5 h-3.5 text-kenya-green-light" />
                <span>Translator</span>
              </Link>

              {/* Tools mega-menu */}
              <div
                className="relative"
                onMouseEnter={() => setToolsOpen(true)}
                onMouseLeave={() => setToolsOpen(false)}
              >
                <button
                  aria-expanded={toolsOpen}
                  aria-haspopup="true"
                  onClick={() => setToolsOpen((v) => !v)}
                  className={navLinkClass("/tools/")}
                >
                  Tools
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${toolsOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {toolsOpen && (
                  <div className="absolute top-full right-0 pt-2 w-[680px] animate-fade-in-up z-50">
                    <div className="rounded-2xl border border-border bg-bg-card/95 backdrop-blur-xl shadow-2xl shadow-black/30 p-6">
                      <div className="maasai-border-top rounded-2xl mb-3" />

                      <div className="grid grid-cols-3 gap-x-6 gap-y-4 pt-1 max-h-[60vh] overflow-y-auto pr-2">
                        {TOOL_CATEGORIES.map((cat) => {
                          const catTools = TOOLS.filter((t) => t.category === cat.id);
                          return (
                            <div key={cat.id}>
                              <Link
                                href={`/tools/?category=${cat.id}`}
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
                          onClick={() => {
                            setToolsOpen(false);
                            notifyCategorySelect("all");
                          }}
                          className="text-sm font-semibold text-gold hover:text-gold-light transition-colors flex items-center gap-1.5"
                        >
                          Browse All {TOOLS.length} Tools
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
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
                Counties
              </Link>

              <Link
                href="/matatu/"
                aria-current={isActivePath("/matatu/") ? "page" : undefined}
                className={navLinkClass("/matatu/")}
              >
                <BusFront className="w-3.5 h-3.5 text-gold inline-block mb-0.5" /> Matatu
              </Link>

              <Link
                href="/blog/"
                aria-current={isActivePath("/blog/") ? "page" : undefined}
                className={navLinkClass("/blog/")}
              >
                Guides
              </Link>

              {/* Global Command-K Search Button */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="ml-1 inline-flex items-center gap-2 rounded-xl border border-border bg-bg-card/80 px-2.5 py-1.5 text-xs text-text-muted hover:border-gold/50 hover:text-text-primary transition-colors cursor-pointer"
                aria-label="Quick search tools, languages, and counties (Ctrl+K)"
                title="Quick search (⌘K / Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-gold" />
                <span className="hidden lg:inline">Search...</span>
                <kbd className="hidden lg:inline-block rounded bg-bg-elevated px-1.5 py-0.5 text-[0.65rem] font-mono text-text-muted border border-border">
                  ⌘K
                </kbd>
              </button>

              {/* Theme toggle */}
              <button
                onClick={toggle}
                className="theme-toggle ml-1"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile: Search + Quick Learn Pill + theme + hamburger */}
            <div className="md:hidden flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="w-8 h-8 rounded-lg border border-border bg-bg-card/80 flex items-center justify-center text-gold hover:border-gold/50 transition-colors"
                aria-label="Search tools, languages, and counties"
              >
                <Search className="w-4 h-4" />
              </button>

              <Link
                href="/tools/learn/"
                className="px-2.5 py-1 text-xs font-bold text-gold bg-gold/15 border border-gold/30 rounded-full flex items-center gap-1"
              >
                <Languages className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Learn</span>
              </Link>

              <button
                onClick={toggle}
                className="theme-toggle"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              <button
                className="relative w-9 h-9 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors rounded-lg"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
                aria-label="Toggle navigation menu"
              >
                <div className="space-y-1.5">
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden absolute left-0 right-0 top-12 h-[calc(100dvh-48px)] border-t border-border bg-bg-card/98 backdrop-blur-xl animate-fade-in-up flex flex-col shadow-2xl">
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

      {/* Global Command-K Quick Search Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[110] bg-black/70 backdrop-blur-sm flex items-start justify-center p-4 pt-16 sm:pt-24"
          onClick={() => setSearchOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Quick search"
        >
          <div
            className="w-full max-w-xl rounded-2xl border border-border bg-bg-card shadow-2xl overflow-hidden animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border bg-bg-elevated/60">
              <Search className="w-4 h-4 text-gold shrink-0" />
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
                placeholder="Search 25 tools, 23 languages, or 47 counties..."
                className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-text-muted hover:text-text-primary text-xs px-1.5 py-0.5"
                >
                  Clear
                </button>
              )}
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="rounded-lg border border-border bg-bg-card p-1 text-text-muted hover:text-text-primary"
                aria-label="Close search"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto divide-y divide-border/50">
              {filteredSearchResults.length === 0 ? (
                <div className="p-8 text-center text-sm text-text-muted">
                  No matching tools, languages, or counties found for &ldquo;{searchQuery}&rdquo;.
                </div>
              ) : (
                filteredSearchResults.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
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
                    <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-gold shrink-0 transition-transform group-hover:translate-x-0.5" />
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
