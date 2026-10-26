"use client";

import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import { BusFront, Check } from "lucide-react";
import { useState, useMemo } from "react";
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
  const [saccoFilter, setSaccoFilter] = useState("all");

  const saccos = useMemo(() => {
    return Array.from(new Set(routes.map((r) => r.saccoName))).sort();
  }, [routes]);

  const filteredRoutes = useMemo(() => {
    return routes.filter((r) => {
      if (saccoFilter !== "all" && r.saccoName !== saccoFilter) return false;

      if (search.trim()) {
        const q = search.toLowerCase();
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
  }, [routes, saccoFilter, search]);

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-text-muted mb-6">
        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
        <span>/</span>
        <Link href="/matatu/" className="hover:text-gold transition-colors">Matatu</Link>
        <span>/</span>
        <span className="text-text-primary capitalize">{townInfo.name}</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold font-[family-name:var(--font-outfit)] text-text-primary mb-2">
          <BusFront className="w-8 h-8 text-gold flex-shrink-0 inline-block mr-2" />{townInfo.name} Matatu Routes, Stages &amp; Fares
        </h1>
        <p className="text-text-secondary text-sm max-w-3xl leading-relaxed">
          {townInfo.description} Browse {routes.length} verified PSV corridors across {townInfo.name} ({townInfo.county} County), operated by {saccos.length} registered SACCOs with fares ranging from KES {minFare} to KES {maxFare}.
        </p>
      </div>

      {/* Filter panel */}
      <div className="bg-bg-card border border-border rounded-xl p-5 mb-8 space-y-3.5">
        <SearchInput
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by route number, destination, stage, or SACCO..."
          className="input-field text-sm"
          id="town-matatu-search"
          onClear={() => setSearch("")}
        />

        {/* Horizontal Pill Bar for SACCO Filter */}
        <ExpandablePillRow className="pt-1">
          {["all", ...saccos].map((s) => {
            const active = saccoFilter === s;
            return (
              <button
                key={s}
                onClick={() => setSaccoFilter(s)}
                className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium border transition-all cursor-pointer ${
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

      <p className="text-xs text-text-muted mb-4">{filteredRoutes.length} routes found</p>

      {/* Routes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRoutes.map((r) => (
          <Link
            key={r.slug}
            href={`/matatu/${townSlug}/${r.slug}/`}
            className="bg-bg-card border border-border rounded-xl p-5 hover:border-gold/50 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-gold">{r.routeNumber}</span>
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-text-primary group-hover:text-gold transition-colors">
                      {r.name}
                    </h2>
                    <p className="text-[0.65rem] text-text-muted">{r.saccoName}</p>
                  </div>
                </div>
                {r.verified && (
                  <span className="text-[0.6rem] bg-kenya-green/15 text-kenya-green-light px-2 py-0.5 rounded font-medium flex-shrink-0">
                    <Check className="w-3 h-3 inline-block mr-1" />Verified
                  </span>
                )}
              </div>

              {/* Terminus breakdown */}
              <div className="bg-bg-elevated/60 border border-border/50 rounded-lg p-3 mb-4 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-text-muted">Start:</span>
                  <span className="font-medium text-text-primary break-words">{r.terminusA}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-muted">End:</span>
                  <span className="font-medium text-text-primary break-words">{r.terminusB}</span>
                </div>
                <div className="flex items-center justify-between text-[0.65rem] text-text-muted pt-1 border-t border-border/30">
                  <span>Stages: {r.stages.length}</span>
                  <span>Hours: {r.operatingHours}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-border/40 text-xs">
              <span className="font-extrabold text-gold">KES {r.fareMin} – {r.fareMax}</span>
              <span className="text-[0.7rem] text-kenya-green-light font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                View Map &amp; Stages →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filteredRoutes.length === 0 && (
        <div className="text-center py-16 bg-bg-card border border-border rounded-xl">
          <div className="flex justify-center mb-4"><BusFront className="w-10 h-10 text-gold" /></div>
          <p className="text-sm font-semibold text-text-primary mb-1">No routes found</p>
          <p className="text-xs text-text-muted">Try adjusting your search query or SACCO filter.</p>
        </div>
      )}

      {/* Town Commuter Information Section */}
      <section className="mt-12 bg-bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">
          Public Transport &amp; Matatu Guide for {townInfo.name} ({townInfo.county} County)
        </h2>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          Public Service Vehicles (PSVs) in <strong>{townInfo.name}</strong> operate along designated corridors regulated by the{" "}
          <strong>National Transport and Safety Authority (NTSA)</strong> and county transport directorates. Our directory tracks{" "}
          <strong>{routes.length} primary routes</strong> served by <strong>{saccos.length} registered SACCOs</strong> ({saccos.slice(0, 6).join(", ")}{saccos.length > 6 ? ", and others" : ""}).
        </p>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          Select any route card above to view its interactive stage-by-stage map, exact boarding termini, operating hours, and off-peak versus peak fare estimates.
        </p>
      </section>
    </div>
  );
}
