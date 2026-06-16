"use client";

import { useState } from "react";
import Link from "next/link";
import { TOOL_CATEGORIES, TOOLS } from "@/lib/tools-registry";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  return (
    <>
      {/* Kenyan flag stripe at very top */}
      <div className="kenya-stripe w-full" />

      <nav className="sticky top-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[60px]">
            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              {/* Kenyan shield motif */}
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-kenya-green via-gold to-kenya-red opacity-20 group-hover:opacity-40 transition-opacity" />
                <span className="relative text-lg">🇰🇪</span>
              </div>
              <span className="text-lg font-extrabold font-[family-name:var(--font-outfit)] gradient-text-kenya tracking-tight">
                KenyaHub
              </span>
            </Link>

            {/* ── Desktop Nav ── */}
            <div className="hidden md:flex items-center gap-0.5">
              <Link
                href="/"
                className="px-3.5 py-2 text-[0.8125rem] font-medium text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-white/[0.04]"
              >
                Home
              </Link>

              {/* Tools mega-menu */}
              <div
                className="relative"
                onMouseEnter={() => setToolsOpen(true)}
                onMouseLeave={() => setToolsOpen(false)}
              >
                <button
                  className="px-3.5 py-2 text-[0.8125rem] font-medium text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-white/[0.04] flex items-center gap-1"
                >
                  Tools
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${toolsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mega-menu dropdown */}
                {toolsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] rounded-2xl border border-border bg-bg-card/95 backdrop-blur-xl shadow-2xl shadow-black/40 p-6 animate-fade-in-up">
                    {/* Maasai accent */}
                    <div className="maasai-border-top rounded-2xl" />

                    <div className="grid grid-cols-3 gap-x-6 gap-y-4 pt-1">
                      {TOOL_CATEGORIES.map((cat) => {
                        const catTools = TOOLS.filter((t) => t.category === cat.id).slice(0, 3);
                        return (
                          <div key={cat.id}>
                            <Link
                              href={`/tools?category=${cat.id}`}
                              className="flex items-center gap-1.5 text-[0.8125rem] font-semibold text-text-primary hover:text-gold transition-colors mb-1.5"
                            >
                              <span className="text-base">{cat.icon}</span>
                              {cat.name}
                            </Link>
                            <div className="space-y-0.5 pl-6">
                              {catTools.map((tool) => (
                                <Link
                                  key={tool.slug}
                                  href={`/tools/${tool.slug}`}
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
                        href="/tools"
                        className="text-sm font-semibold text-gold hover:text-gold-light transition-colors flex items-center gap-1.5"
                      >
                        Browse All {TOOLS.length} Tools
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <span className="text-[0.65rem] text-text-muted">
                        All data from official Kenya sources
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/tools"
                className="px-3.5 py-2 text-[0.8125rem] font-medium text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-white/[0.04]"
              >
                All Tools
              </Link>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-white/[0.04]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <div className="space-y-1.5">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* ── Mobile slide-in ── */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-bg-card/98 backdrop-blur-xl animate-fade-in-up">
            <div className="max-h-[70vh] overflow-y-auto px-4 py-4">
              <Link
                href="/"
                className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/[0.04] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <span className="w-8 text-center text-base">🏠</span>
                Home
              </Link>
              <Link
                href="/tools"
                className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/[0.04] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <span className="w-8 text-center text-base">🛠️</span>
                All Tools
              </Link>

              <div className="section-divider my-3" />

              <p className="px-3 py-1.5 text-[0.625rem] font-bold text-text-muted uppercase tracking-[0.12em]">
                Categories
              </p>
              {TOOL_CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/tools?category=${cat.id}`}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/[0.04] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="w-8 text-center text-base">{cat.icon}</span>
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
