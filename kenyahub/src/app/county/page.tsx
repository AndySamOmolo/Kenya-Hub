"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import countiesData from "@/data/counties.json";

export default function CountyIndexPage() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let items = countiesData.counties;
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.governor.toLowerCase().includes(q) ||
          c.capital.toLowerCase().includes(q)
      );
    }
    return items;
  }, [search]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1.5 text-xs text-text-muted mb-8">
        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
        <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-text-secondary">Counties</span>
      </nav>

      {/* Header */}
      <header className="mb-10 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold font-[family-name:var(--font-outfit)] text-text-primary leading-tight tracking-tight mb-4">
          Kenya County Governments
        </h1>
        <p className="text-text-secondary text-base leading-relaxed">
          Explore all 47 counties of Kenya. Find your governor, county headquarters, key statistics, and links to local services.
        </p>
      </header>

      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by county, governor, or headquarters..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input-field max-w-lg text-sm"
          id="county-search"
        />
        <p className="text-xs text-text-muted mt-2">Showing {filtered.length} of 47 counties</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((county) => (
          <Link
            key={county.code}
            href={`/county/${county.slug}`}
            className="group block bg-bg-card border border-border rounded-xl p-5 hover:border-gold/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-border-accent opacity-50 group-hover:text-gold group-hover:opacity-100 transition-colors">
                {county.code.toString().padStart(2, "0")}
              </span>
              <span className="text-[0.65rem] bg-bg-elevated text-text-secondary px-2 py-0.5 rounded border border-border">
                HQ: {county.capital}
              </span>
            </div>
            
            <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-1 group-hover:text-gold transition-colors">
              {county.name} County
            </h2>
            <p className="text-xs text-text-secondary mb-4 line-clamp-1">
              Gov. {county.governor}
            </p>

            <div className="grid grid-cols-2 gap-2 pt-4 border-t border-border/50">
              <div>
                <p className="text-[0.6rem] text-text-muted uppercase tracking-wider mb-0.5">Population</p>
                <p className="text-xs font-semibold text-text-primary">{county.population.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-[0.6rem] text-text-muted uppercase tracking-wider mb-0.5">Area</p>
                <p className="text-xs font-semibold text-text-primary">{county.area.toLocaleString()} km²</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-4xl mb-3">🔍</p>
          <p className="text-text-secondary text-sm">No counties found matching "{search}"</p>
        </div>
      )}
    </div>
  );
}
