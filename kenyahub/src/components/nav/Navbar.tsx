"use client";

import {
  BusFront,
  Home,
  Edit3,
  Landmark,
  Download,
  Mail,
  Smartphone,
  Wrench,
  Info,
  Languages,
  Globe,
  Search,
  User,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TOOL_CATEGORIES, TOOLS } from "@/lib/tools-registry";
import { GITHUB_APK_RELEASES_URL, AMAZON_APPSTORE_URL } from "@/lib/app-downloads";
import { useTheme } from "@/components/ThemeProvider";
import CategoryIcon from "@/components/ui/CategoryIcon";

// Lazy-loaded Command-K dialog (renders at z-[121] above backdrop; ranks title.startsWith(q) ahead of descriptions)
const GlobalSearchModal = dynamic(() => import("./GlobalSearchModal"), {
  ssr: false,
});

const TOOLS_BY_CATEGORY: Record<string, typeof TOOLS> = Object.fromEntries(
  TOOL_CATEGORIES.map((cat) => [cat.id, TOOLS.filter((t) => t.category === cat.id)])
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();
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
    if (!searchOpen && previousFocusRef.current && typeof previousFocusRef.current.focus === "function") {
      previousFocusRef.current.focus();
      previousFocusRef.current = null;
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

  const openSearchModal = () => {
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    setToolsOpen(false);
    setMobileOpen(false);
    setSearchOpen(true);
  };

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
                            const catTools = TOOLS_BY_CATEGORY[cat.id] ?? [];
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
                                  <span className="text-gold"><CategoryIcon emoji={cat.icon} className="w-4 h-4 inline-block mb-[0.1em]" /></span>
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
                <Link
                  href="/account/"
                  aria-current={isActivePath("/account/") ? "page" : undefined}
                  className="h-9 lg:h-10 inline-flex items-center gap-1.5 rounded-xl border border-border bg-bg-card/80 px-3 text-xs font-semibold text-text-primary hover:border-gold/50 hover:text-gold transition-colors"
                  aria-label="Account and Sign In"
                >
                  <User className="w-3.5 h-3.5 text-gold shrink-0" aria-hidden="true" />
                  <span className="hidden lg:inline">Account</span>
                </Link>

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

              {/* Mobile: Compact right cluster (Learn + Search + Account + Theme + Hamburger) */}
              <div className="md:hidden flex items-center gap-1.5">
                <Link
                  href="/tools/learn/"
                  className="h-7 px-2 text-[11px] font-bold text-gold bg-gold/15 border border-gold/30 rounded-lg inline-flex items-center justify-center gap-1"
                >
                  <Languages className="w-3 h-3 text-gold shrink-0" aria-hidden="true" />
                  <span>Learn</span>
                </Link>

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
                  href="/account/"
                  className="h-7 w-7 rounded-lg border border-border bg-bg-card/80 inline-flex items-center justify-center text-gold hover:border-gold/50 transition-colors"
                  aria-label="Account and Sign In"
                  title="Account & Sign In"
                >
                  <User className="w-3.5 h-3.5" aria-hidden="true" />
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
                <Link href="/account/" className="group flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-gold hover:text-gold-light rounded-xl bg-gold/10 border border-gold/25 transition-colors" onClick={() => setMobileOpen(false)}>
                  <span className="w-7 flex items-center justify-center shrink-0"><User className="w-4 h-4 text-gold shrink-0" /></span> Account &amp; Sign In
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
                <Link href="/contact/" prefetch={false} className="group flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary rounded-xl hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors" onClick={() => setMobileOpen(false)}>
                  <span className="w-7 flex items-center justify-center shrink-0"><Mail className="w-4 h-4 text-text-muted group-hover:text-gold transition-colors shrink-0" /></span> Contact
                </Link>

                <div className="section-divider my-2.5" />

                <p className="px-3 py-1 text-xs font-bold text-text-muted uppercase tracking-[0.12em]">
                  Android App
                </p>
                <a
                  href={AMAZON_APPSTORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-gold hover:text-gold-light rounded-xl hover:bg-gold/10 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="w-7 flex items-center justify-center shrink-0"><Smartphone className="w-4 h-4 text-gold shrink-0" /></span> Amazon Appstore
                </a>
                <a
                  href={GITHUB_APK_RELEASES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary rounded-xl hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="w-7 flex items-center justify-center shrink-0"><Download className="w-4 h-4 text-text-muted group-hover:text-gold transition-colors shrink-0" /></span> Download APK (GitHub)
                </a>

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
                      <CategoryIcon emoji={cat.icon} className="w-4 h-4 text-text-muted group-hover:text-gold transition-colors shrink-0" />
                    </span>
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Global Command-K Quick Search Modal (dynamically loaded only when opened) */}
      {searchOpen && <GlobalSearchModal onClose={() => setSearchOpen(false)} />}
    </>
  );
}
