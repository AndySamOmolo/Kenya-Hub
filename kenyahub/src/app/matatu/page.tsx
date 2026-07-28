"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import matatuData from "@/data/matatu-routes.json";

interface RouteItem {
  routeNumber: string;
  slug: string;
  name: string;
  terminusA: string;
  terminusB: string;
  fareMin: number;
  fareMax: number;
  operatingHours: string;
  saccoName: string;
  verified: boolean;
  townSlug: string;
  townName: string;
  stages: { name: string; lat: number; lng: number; order: number }[];
}

export default function MatatuPage() {
  const [search, setSearch] = useState("");

  // Flatten all routes from all active towns
  const allRoutes = useMemo(() => {
    const routesList: RouteItem[] = [];
    matatuData.towns
      .filter((t) => t.isActive)
      .forEach((town) => {
        const townRoutes = (matatuData.routes as Record<string, typeof matatuData.routes.nairobi>)[town.slug] || [];
        townRoutes.forEach((r) => {
          routesList.push({
            ...r,
            townSlug: town.slug,
            townName: town.name,
          });
        });
      });
    return routesList;
  }, []);

  const totalStages = useMemo(() => {
    return allRoutes.reduce((sum, r) => sum + r.stages.length, 0);
  }, [allRoutes]);

  const totalSaccos = useMemo(() => {
    return new Set(allRoutes.map((r) => r.saccoName)).size;
  }, [allRoutes]);

  const activeTownsCount = useMemo(() => {
    return matatuData.towns.filter((t) => t.isActive).length;
  }, []);

  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return allRoutes.filter((r) =>
      r.name.toLowerCase().includes(q) ||
      r.routeNumber.toLowerCase().includes(q) ||
      r.terminusA.toLowerCase().includes(q) ||
      r.terminusB.toLowerCase().includes(q) ||
      r.saccoName.toLowerCase().includes(q) ||
      r.townName.toLowerCase().includes(q) ||
      r.stages.some((s) => s.name.toLowerCase().includes(q))
    ).slice(0, 10);
  }, [search, allRoutes]);

  // Featured routes mix across towns
  const featuredRoutes = useMemo(() => {
    return allRoutes.slice(0, 12);
  }, [allRoutes]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Hero */}
      <div className="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-br from-gold/10 via-kenya-green/5 to-kenya-red/5 border border-border p-8 sm:p-12">
        <div className="absolute top-4 right-4 text-7xl opacity-10 rotate-12 select-none">🚌</div>
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-outfit)] mb-3 gradient-text-kenya tracking-tight">
            Kenya Matatu Routes & Stages
          </h1>
          <p className="text-text-secondary max-w-lg text-sm sm:text-base leading-relaxed mb-6">
            Find matatu routes across Kenya — Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and Thika. Search by destination, view stages on interactive Leaflet maps, check fares and SACCO details.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
            <div className="bg-bg-card/60 backdrop-blur border border-border rounded-xl px-4 py-2.5">
              <span className="text-lg font-bold text-gold">{activeTownsCount}</span>
              <span className="text-xs text-text-muted ml-1.5">Cities Covered</span>
            </div>
            <div className="bg-bg-card/60 backdrop-blur border border-border rounded-xl px-4 py-2.5">
              <span className="text-lg font-bold text-gold">{allRoutes.length}</span>
              <span className="text-xs text-text-muted ml-1.5">Verified Routes</span>
            </div>
            <div className="bg-bg-card/60 backdrop-blur border border-border rounded-xl px-4 py-2.5">
              <span className="text-lg font-bold text-gold">{totalStages}</span>
              <span className="text-xs text-text-muted ml-1.5">Total Stages</span>
            </div>
            <div className="bg-bg-card/60 backdrop-blur border border-border rounded-xl px-4 py-2.5">
              <span className="text-lg font-bold text-gold">{totalSaccos}</span>
              <span className="text-xs text-text-muted ml-1.5">SACCOs</span>
            </div>
          </div>

          {/* Search */}
          <div className="relative max-w-lg">
            <div className="flex items-center gap-2 bg-bg-card border border-border rounded-xl px-4 py-3 focus-within:border-gold/50 transition-colors">
              <svg className="w-5 h-5 text-text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search routes... e.g. 'Karen', 'Nyali', 'Kondele', 'Langas'"
                className="flex-1 bg-transparent text-sm text-text-primary placeholder-text-muted outline-none"
                id="matatu-search"
              />
              {search && (
                <button onClick={() => setSearch("")} className="text-xs text-text-muted hover:text-text-primary">
                  Clear
                </button>
              )}
            </div>

            {/* Search results dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-bg-card/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl shadow-black/30 z-50 overflow-hidden max-h-[380px] overflow-y-auto">
                {searchResults.map((r) => (
                  <Link
                    key={`${r.townSlug}-${r.slug}`}
                    href={`/matatu/${r.townSlug}/${r.slug}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-bg-elevated transition-colors border-b border-border/50 last:border-0"
                  >
                    <span className="text-lg">🚌</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-text-primary truncate">Route {r.routeNumber}: {r.name}</span>
                        <span className="text-[0.55rem] bg-gold/15 text-gold px-1.5 py-0.5 rounded font-medium">{r.townName}</span>
                      </div>
                      <p className="text-[0.65rem] text-text-muted">{r.terminusA} → {r.terminusB} · KES {r.fareMin}–{r.fareMax}</p>
                    </div>
                    <svg className="w-4 h-4 text-text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Town selector */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">Explore Routes by City</h2>
        <span className="text-xs text-text-muted">{activeTownsCount} active cities</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
        {matatuData.towns.map((town) => (
          town.isActive ? (
            <Link key={town.slug} href={`/matatu/${town.slug}`} className="bg-bg-card border border-gold/30 rounded-xl p-4 text-center group hover:border-gold transition-all hover:shadow-lg hover:shadow-gold/5">
              <span className="text-3xl block mb-2">🚌</span>
              <p className="text-sm font-bold text-text-primary group-hover:text-gold transition-colors">{town.name}</p>
              <p className="text-[0.6rem] text-gold mt-1 font-semibold">{town.routeCount} routes</p>
            </Link>
          ) : (
            <div key={town.slug} className="bg-bg-card border border-border rounded-xl p-4 text-center opacity-50">
              <span className="text-3xl block mb-2 grayscale">🚌</span>
              <p className="text-sm font-bold text-text-muted">{town.name}</p>
              <p className="text-[0.6rem] text-text-muted mt-1">Coming soon</p>
            </div>
          )
        ))}
      </div>

      {/* Featured routes preview */}
      <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-4">Featured Verified Routes Across Kenya</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {featuredRoutes.map((route) => (
          <Link key={`${route.townSlug}-${route.slug}`} href={`/matatu/${route.townSlug}/${route.slug}`} className="bg-bg-card border border-border rounded-xl p-4 group hover:border-gold/50 transition-all">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-gold">{route.routeNumber}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-semibold text-text-primary group-hover:text-gold transition-colors truncate">{route.name}</h3>
                  <span className="text-[0.55rem] bg-bg-elevated border border-border px-1.5 py-0.5 rounded text-text-muted flex-shrink-0">{route.townName}</span>
                </div>
                <p className="text-[0.65rem] text-text-muted mt-0.5">{route.stages.length} stages · {route.saccoName}</p>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="text-[0.6rem] text-kenya-green-light font-bold">KES {route.fareMin}–{route.fareMax}</span>
                  <span className="text-[0.6rem] text-text-muted">{route.operatingHours}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* SEO content */}
      <div className="mt-12 bg-bg-card border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-3">About Kenya Matatu Routes & Public Transport</h2>
        <div className="space-y-3 text-xs text-text-secondary leading-relaxed">
          <p>Matatus are the heart of Kenya&apos;s public transport ecosystem. These 14-seater minibuses and 33+ seater buses connect Central Business Districts to suburbs, satellite towns, and rural markets in Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, Thika, and beyond.</p>
          <p>Every matatu route in Kenya is operated under SACCOs (Savings and Credit Co-operatives) licensed by NTSA (National Transport and Safety Authority). Fares are market-driven and fluctuate based on peak rush hours (morning/evening), weather conditions, and fuel price adjustments.</p>
          <p>KenyaHub provides interactive maps with step-by-step stage breakdowns, operating SACCO details, fare expectations, and operating hours for commuters, students, and visitors travelling across Kenya.</p>
        </div>
      </div>
    </div>
  );
}
