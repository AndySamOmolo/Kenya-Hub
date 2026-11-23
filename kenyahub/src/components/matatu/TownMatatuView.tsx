"use client";

import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import { BusFront, Check, ChevronRight, MapPin } from "lucide-react";
import { useState, useMemo, useEffect, useRef, useDeferredValue } from "react";
import { scrollToTopIfScrolled } from "@/lib/scroll";
import Link from "next/link";
import matatuData from "@/data/matatu-routes.json";
import SearchInput from "@/components/ui/SearchInput";

interface TownMatatuViewProps {
  townSlug: string;
}

export default function TownMatatuView({ townSlug }: TownMatatuViewProps) {
  const townInfo = matatuData.towns.find((t) => t.slug === townSlug);
  const routes = (matatuData.routes as Record<string, typeof matatuData.routes.nairobi>)[townSlug] || [];

  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);
  const [saccoFilter, setSaccoFilter] = useState("all");
  const _scrollMountRef = useRef(false);
  useEffect(() => {
    if (!_scrollMountRef.current) { _scrollMountRef.current = true; return; }
    scrollToTopIfScrolled();
  }, [saccoFilter]);

  const saccos = useMemo(() => {
    return Array.from(new Set(routes.map((r) => r.saccoName))).sort();
  }, [routes]);

  const filteredRoutes = useMemo(() => {
    return routes.filter((r) => {
      if (saccoFilter !== "all" && r.saccoName !== saccoFilter) return false;

      if (deferredSearch.trim()) {
        const q = deferredSearch.toLowerCase();
        return (
          r.name.toLowerCase().includes(q) ||
          r.routeNumber.toLowerCase().includes(q) ||
          r.terminusA.toLowerCase().includes(q) ||
          r.terminusB.toLowerCase().includes(q) ||
          r.saccoName.toLowerCase().includes(q) ||
          r.stages.some((s) => s.name.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [routes, saccoFilter, deferredSearch]);

  if (!townInfo) {
    return (
      <div data-error-page="true" data-nosnippet="true" className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-text-primary mb-2">City Not Found</h1>
        <p className="text-text-muted text-sm mb-6">We don&apos;t have matatu route data for this city yet.</p>
        <Link href="/matatu/" className="text-xs font-semibold text-gold hover:underline">← Back to Matatu Hub</Link>
      </div>
    );
  }

  const minFare = routes.length > 0 ? Math.min(...routes.map((r) => r.fareMin)) : 30;
  const maxFare = routes.length > 0 ? Math.max(...routes.map((r) => r.fareMax)) : 200;

  return (
    <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-3 pb-6 sm:py-8">
      {/* Site-wide ChevronRight Breadcrumb (Single-Line Scrollable on Mobile) */}
      <nav aria-label="Breadcrumb" className="flex flex-nowrap items-center gap-1.5 overflow-x-auto no-scrollbar whitespace-nowrap text-[11px] sm:text-xs text-text-muted mb-2 sm:mb-5 micro-badge">
        <Link href="/" className="hover:text-gold transition-colors shrink-0">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-border-light shrink-0" />
        <Link href="/matatu/" className="hover:text-gold transition-colors shrink-0">Matatu Routes</Link>
        <ChevronRight className="w-3.5 h-3.5 text-border-light shrink-0" />
        <span className="text-text-secondary font-medium capitalize shrink-0">{townInfo.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-3 sm:mb-6">
        <h1 className="text-lg sm:text-3xl font-extrabold font-[family-name:var(--font-outfit)] text-text-primary leading-snug mb-1 sm:mb-2">
          <BusFront className="w-5 h-5 sm:w-8 sm:h-8 text-gold flex-shrink-0 inline-block mr-1.5 sm:mr-2 -mt-0.5" />{townInfo.name} Matatu Routes, Stages &amp; Fares
        </h1>
        <p className="text-text-secondary text-xs sm:text-sm max-w-3xl leading-relaxed">
          {townInfo.description} Browse {routes.length} PSV corridors across {townInfo.name} ({(townInfo as { county?: string }).county || townInfo.name} County), operated by {saccos.length} registered SACCOs with off-peak to peak fares from KES {minFare} to KES {maxFare}.
        </p>
      </div>

      {/* Filter panel */}
      <div className="bg-bg-card border border-border rounded-xl p-3 sm:p-5 mb-4 sm:mb-6 space-y-2.5 sm:space-y-3.5">
        <SearchInput
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search route, stage, or SACCO..."
          className="input-field !h-9 sm:!h-11 text-sm"
          id="town-matatu-search"
          onClear={() => setSearch("")}
        />

        {/* Mobile SACCO dropdown (prevents horizontal pill clipping on narrow viewports) */}
        <div className="sm:hidden">
          <label htmlFor="mobile-sacco-filter" className="sr-only">Filter by SACCO</label>
          <select
            id="mobile-sacco-filter"
            value={saccoFilter}
            onChange={(e) => setSaccoFilter(e.target.value)}
            className="select-field w-full text-xs rounded-xl"
          >
            <option value="all">All SACCOs ({saccos.length})</option>
            {saccos.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Desktop Horizontal Pill Bar for SACCO Filter */}
        <div className="hidden sm:block">
          <ExpandablePillRow className="pt-1">
            {["all", ...saccos].map((s) => {
              const active = saccoFilter === s;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSaccoFilter(s)}
                  className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium border transition-colors cursor-pointer ${
                    active
                      ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                      : "border-border bg-bg-elevated text-text-secondary hover:text-text-primary hover:border-border-light"
                  }`}
                >
                  {s === "all" ? `All SACCOs (${saccos.length})` : s}
                </button>
              );
            })}
          </ExpandablePillRow>
        </div>
      </div>

      <p className="text-xs text-text-muted mb-4">{filteredRoutes.length} routes found</p>

      {/* Routes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRoutes.map((r) => {
          const firstStage = r.stages[0];
          const mapsQuery = firstStage
            ? `${firstStage.lat},${firstStage.lng}`
            : `${r.terminusA}, ${townInfo.name}, Kenya`;
          const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;

          return (
            <div
              key={r.slug}
              className="cv-auto bg-bg-card border border-border rounded-xl p-5 hover:border-gold/50 transition-colors group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2.5 mb-3">
                  <Link
                    href={`/matatu/${townSlug}/${r.slug}/`}
                    prefetch={false}
                    className="flex items-center gap-2.5 min-w-0 flex-1"
                  >
                    <div className="min-w-[2.5rem] px-2 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-gold whitespace-nowrap">{r.routeNumber}</span>
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-sm font-bold text-text-primary group-hover:text-gold transition-colors break-words">
                        {r.name}
                      </h2>
                      <p className="text-[0.65rem] text-text-muted break-words">{r.saccoName}</p>
                    </div>
                  </Link>
                  {r.verified && (
                    <span className="text-[0.625rem] bg-kenya-green/15 text-kenya-green-light px-2.5 py-0.5 rounded-full font-semibold flex-shrink-0 inline-flex items-center gap-1">
                      <Check className="w-3 h-3" />Verified
                    </span>
                  )}
                </div>

                {/* Terminus breakdown */}
                <div className="bg-bg-elevated/60 border border-border/50 rounded-lg p-3 mb-3.5 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-text-muted shrink-0">Start:</span>
                    <span className="font-medium text-text-primary text-right break-words">{r.terminusA}</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-text-muted shrink-0">End:</span>
                    <span className="font-medium text-text-primary text-right break-words">{r.terminusB}</span>
                  </div>
                  <div className="flex items-center justify-between text-[0.65rem] text-text-muted pt-1 border-t border-border/30">
                    <span>Stages: {r.stages.length}</span>
                    <span>Hours: {r.operatingHours}</span>
                  </div>
                </div>

                {/* Split Off-Peak vs Peak/Rain fare chips */}
                <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[0.6875rem] font-semibold bg-kenya-green/15 text-kenya-green-light border border-kenya-green/25">
                    Off-Peak: KES {r.fareMin}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[0.6875rem] font-semibold bg-gold/15 text-gold border border-gold/25">
                    Peak / Rain: KES {r.fareMax}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 pt-2.5 border-t border-border/40 text-xs">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[0.7rem] font-medium text-text-secondary hover:text-gold transition-colors"
                  title={`Open ${r.terminusA} in Google Maps`}
                >
                  <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                  Stage Pin ↗
                </a>
                <Link
                  href={`/matatu/${townSlug}/${r.slug}/`}
                  prefetch={false}
                  className="text-[0.7rem] text-kenya-green-light font-semibold hover:text-gold transition-colors inline-flex items-center gap-1"
                >
                  View Map &amp; Stages →
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {filteredRoutes.length === 0 && (
        <div data-adsense-pause="true" className="text-center py-16 bg-bg-card border border-border rounded-xl">
          <div className="flex justify-center mb-4"><BusFront className="w-10 h-10 text-gold" /></div>
          <p className="text-sm font-semibold text-text-primary mb-1">No routes found</p>
          <p className="text-xs text-text-muted">Try adjusting your search query or SACCO filter.</p>
        </div>
      )}

      {/* Town Commuter Information Section */}
      <section className="mt-12 bg-bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">
          Public Transport &amp; Matatu Guide for {townInfo.name} ({(townInfo as { county?: string }).county || townInfo.name} County)
        </h2>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          Public Service Vehicles (PSVs) in <strong>{townInfo.name}</strong> operate along designated corridors regulated by the{" "}
          <strong>National Transport and Safety Authority (NTSA)</strong> and county transport directorates. Our directory tracks{" "}
          <strong>{routes.length} primary routes</strong> served by <strong>{saccos.length} registered SACCOs</strong> ({saccos.slice(0, 6).join(", ")}{saccos.length > 6 ? ", and others" : ""}).
        </p>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          Select any route card above to view its interactive stage-by-stage map, exact boarding termini with 1-tap Google Maps pins, operating hours, and off-peak versus peak fare estimates.
        </p>
      </section>
    </div>
  );
}
