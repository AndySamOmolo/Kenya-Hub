"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import matatuData from "@/data/matatu-routes.json";

interface TownMatatuViewProps {
  townSlug: string;
}

export default function TownMatatuView({ townSlug }: TownMatatuViewProps) {
  const townInfo = matatuData.towns.find((t) => t.slug === townSlug);
  const routes = (matatuData.routes as Record<string, typeof matatuData.routes.nairobi>)[townSlug] || [];

  const [search, setSearch] = useState("");
  const [saccoFilter, setSaccoFilter] = useState("all");
  const [fareFilter, setFareFilter] = useState("all");

  const saccos = useMemo(() => {
    return Array.from(new Set(routes.map((r) => r.saccoName))).sort();
  }, [routes]);

  const filteredRoutes = useMemo(() => {
    return routes.filter((r) => {
      if (saccoFilter !== "all" && r.saccoName !== saccoFilter) return false;
      if (fareFilter === "under50" && r.fareMax > 50) return false;
      if (fareFilter === "50to100" && (r.fareMax < 50 || r.fareMin > 100)) return false;
      if (fareFilter === "above100" && r.fareMax <= 100) return false;

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
  }, [routes, saccoFilter, fareFilter, search]);

  if (!townInfo) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-text-primary mb-2">City Not Found</h1>
        <p className="text-text-muted text-sm mb-6">We don&apos;t have matatu route data for this city yet.</p>
        <Link href="/matatu/" className="text-xs font-semibold text-gold hover:underline">← Back to Matatu Hub</Link>
      </div>
    );
  }

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
          🚌 {townInfo.name} Matatu Routes
        </h1>
        <p className="text-text-muted text-sm">
          Browse {routes.length} verified matatu routes in {townInfo.name}. View stages, fares, and SACCO details.
        </p>
      </div>

      {/* Filter panel */}
      <div className="bg-bg-card border border-border rounded-xl p-5 mb-8 space-y-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by route number, destination, stage, or SACCO (e.g. 'Route 33', 'Rongai', 'Kencom')..."
          className="input-field text-sm"
          id="town-matatu-search"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-[0.65rem] text-text-muted block mb-1">Filter by SACCO</label>
            <select
              value={saccoFilter}
              onChange={(e) => setSaccoFilter(e.target.value)}
              className="input-field text-sm"
              id="sacco-filter"
            >
              <option value="all">All SACCOs ({saccos.length})</option>
              {saccos.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-[0.65rem] text-text-muted block mb-1">Filter by Fare Range</label>
            <select
              value={fareFilter}
              onChange={(e) => setFareFilter(e.target.value)}
              className="input-field text-sm"
              id="fare-filter"
            >
              <option value="all">All Fare Ranges</option>
              <option value="under50">Under KES 50</option>
              <option value="50to100">KES 50 – KES 100</option>
              <option value="above100">Above KES 100</option>
            </select>
          </div>
        </div>
      </div>

      <p className="text-xs text-text-muted mb-4">{filteredRoutes.length} routes found</p>

      {/* Routes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRoutes.map((r) => (
          <Link
            key={r.slug}
            href={`/matatu/${townSlug}/${r.slug}`}
            className="bg-bg-card border border-border rounded-xl p-5 hover:border-gold/50 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-gold">{r.routeNumber}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text-primary group-hover:text-gold transition-colors">
                      {r.name}
                    </h3>
                    <p className="text-[0.65rem] text-text-muted">{r.saccoName}</p>
                  </div>
                </div>
                {r.verified && (
                  <span className="text-[0.6rem] bg-kenya-green/15 text-kenya-green-light px-2 py-0.5 rounded font-medium flex-shrink-0">
                    ✓ Verified
                  </span>
                )}
              </div>

              {/* Terminus breakdown */}
              <div className="bg-bg-elevated/60 border border-border/50 rounded-lg p-3 mb-4 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-text-muted">Start:</span>
                  <span className="font-medium text-text-primary truncate max-w-[180px]">{r.terminusA}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-muted">End:</span>
                  <span className="font-medium text-text-primary truncate max-w-[180px]">{r.terminusB}</span>
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
                View Map & Stages →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filteredRoutes.length === 0 && (
        <div className="text-center py-16 bg-bg-card border border-border rounded-xl">
          <p className="text-4xl mb-3">🚌</p>
          <p className="text-sm font-semibold text-text-primary mb-1">No routes found</p>
          <p className="text-xs text-text-muted">Try adjusting your search query or filters.</p>
        </div>
      )}
    </div>
  );
}
