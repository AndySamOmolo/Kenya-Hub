"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import matatuData from "@/data/matatu-routes.json";

export default function MatatuPage() {
  const [search, setSearch] = useState("");

  const nairobiRoutes = matatuData.routes.nairobi;

  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return nairobiRoutes.filter((r) =>
      r.name.toLowerCase().includes(q) ||
      r.terminusA.toLowerCase().includes(q) ||
      r.terminusB.toLowerCase().includes(q) ||
      r.saccoName.toLowerCase().includes(q) ||
      r.stages.some((s) => s.name.toLowerCase().includes(q))
    ).slice(0, 8);
  }, [search, nairobiRoutes]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Hero */}
      <div className="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-br from-gold/10 via-kenya-green/5 to-kenya-red/5 border border-border p-8 sm:p-12">
        <div className="absolute top-4 right-4 text-7xl opacity-10 rotate-12 select-none">🚌</div>
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-outfit)] mb-3 gradient-text-kenya tracking-tight">
            Matatu Routes
          </h1>
          <p className="text-text-secondary max-w-lg text-sm sm:text-base leading-relaxed mb-6">
            Find your matatu route in Nairobi. Search by destination, view stages on an interactive map, and check fares and operating hours.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-bg-card/60 backdrop-blur border border-border rounded-xl px-4 py-2.5">
              <span className="text-lg font-bold text-gold">{nairobiRoutes.length}</span>
              <span className="text-xs text-text-muted ml-1.5">Routes</span>
            </div>
            <div className="bg-bg-card/60 backdrop-blur border border-border rounded-xl px-4 py-2.5">
              <span className="text-lg font-bold text-gold">{nairobiRoutes.reduce((s, r) => s + r.stages.length, 0)}</span>
              <span className="text-xs text-text-muted ml-1.5">Stages</span>
            </div>
            <div className="bg-bg-card/60 backdrop-blur border border-border rounded-xl px-4 py-2.5">
              <span className="text-lg font-bold text-gold">{new Set(nairobiRoutes.map((r) => r.saccoName)).size}</span>
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
                placeholder="Where are you going? Try 'Karen', 'Rongai', 'Thika'..."
                className="flex-1 bg-transparent text-sm text-text-primary placeholder-text-muted outline-none"
                id="matatu-search"
              />
            </div>

            {/* Search results dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-bg-card/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl shadow-black/30 z-50 overflow-hidden">
                {searchResults.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/matatu/nairobi/${r.slug}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-bg-elevated transition-colors border-b border-border/50 last:border-0"
                  >
                    <span className="text-lg">🚌</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-text-primary truncate">Route {r.routeNumber}: {r.name}</p>
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
      <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-4">Select a City</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
        {matatuData.towns.map((town) => (
          town.isActive ? (
            <Link key={town.slug} href={`/matatu/${town.slug}`} className="bg-bg-card border border-gold/30 rounded-xl p-4 text-center group hover:border-gold transition-all hover:shadow-lg hover:shadow-gold/5">
              <span className="text-3xl block mb-2">🚌</span>
              <p className="text-sm font-bold text-text-primary group-hover:text-gold transition-colors">{town.name}</p>
              <p className="text-[0.6rem] text-gold mt-1">{town.routeCount} routes</p>
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

      {/* Popular routes preview */}
      <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-4">Popular Nairobi Routes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {nairobiRoutes.slice(0, 9).map((route) => (
          <Link key={route.slug} href={`/matatu/nairobi/${route.slug}`} className="bg-bg-card border border-border rounded-xl p-4 group hover:border-gold/50 transition-all">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-gold">{route.routeNumber}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-text-primary group-hover:text-gold transition-colors truncate">{route.name}</h3>
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
        <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-3">About Nairobi Matatu Routes</h2>
        <div className="space-y-3 text-xs text-text-secondary leading-relaxed">
          <p>Matatus are the backbone of public transport in Nairobi, Kenya. These minibuses and buses operate on fixed routes connecting the CBD (Central Business District) to suburbs, estates, and satellite towns across the Greater Nairobi Metropolitan Area.</p>
          <p>Each matatu route is operated by a SACCO (Savings and Credit Co-operative) licensed by NTSA (National Transport and Safety Authority). Fares vary by distance and time of day — peak hour prices (7–9 AM and 5–7 PM) are typically higher.</p>
          <p>Major CBD termini include Kencom House, Railways/Country Bus Station, Tom Mboya Street, and Ronald Ngala Street. Routes heading west depart from Kencom/University Way, while eastern routes depart from Tom Mboya/Ronald Ngala.</p>
        </div>
      </div>
    </div>
  );
}
