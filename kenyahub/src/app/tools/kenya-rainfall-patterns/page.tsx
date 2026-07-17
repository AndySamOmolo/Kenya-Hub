"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import rainData from "@/data/rainfall-patterns.json";

const tool = TOOLS.find((t) => t.slug === "kenya-rainfall-patterns")!;

const faq = [
  { question: "When are the rainy seasons in Kenya?", answer: "Kenya generally has two rainy seasons: the 'Long Rains' occur from March to May, and the 'Short Rains' occur from October to December. However, this varies by region (e.g., Western Kenya receives rain year-round)." },
  { question: "Which is the wettest county in Kenya?", answer: "Counties in the Lake Victoria basin and Western Highlands are the wettest. Kakamega, Vihiga, Kericho, and Kisii receive between 1,700mm and 2,000mm of rain annually." },
  { question: "Which is the driest county in Kenya?", answer: "Turkana is the driest county, receiving less than 200mm of rainfall annually. Mandera, Wajir, and Garissa are also extremely arid." },
  { question: "How does climate change affect Kenya's rainfall?", answer: "Climate change is making Kenya's rainfall patterns less predictable. The traditional 'Long Rains' have failed multiple times in recent years, leading to severe droughts, while sudden heavy downpours cause flash floods." },
];

export default function KenyaRainfallPatternsPage() {
  const [search, setSearch] = useState("");
  const [zoneFilter, setZoneFilter] = useState("all");

  const filtered = useMemo(() => {
    return rainData.counties.filter((c) => {
      if (zoneFilter !== "all" && !c.climateZone.includes(zoneFilter)) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return c.name.toLowerCase().includes(q) || c.climateZone.toLowerCase().includes(q);
      }
      return true;
    }).sort((a, b) => b.annualRainfall - a.annualRainfall);
  }, [search, zoneFilter]);

  const getRainColor = (mm: number) => {
    if (mm < 20) return "bg-red-900/40 text-kenya-red-light";
    if (mm < 50) return "bg-orange-900/40 text-gold";
    if (mm < 100) return "bg-sky-900/40 text-sky-light";
    if (mm < 150) return "bg-blue-900/60 text-blue-300";
    return "bg-blue-800 text-white font-bold";
  };

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Search & filters */}
        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-4">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search county..." className="input-field text-sm" id="rain-search" />
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setZoneFilter("all")} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${zoneFilter === "all" ? "bg-gold text-kenya-black" : "bg-bg-elevated border border-border text-text-secondary hover:text-gold"}`}>All Zones</button>
            {rainData.climateZones.map((z) => (
              <button key={z.id} onClick={() => setZoneFilter(z.id)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${zoneFilter === z.id ? "bg-gold text-kenya-black" : "bg-bg-elevated border border-border text-text-secondary hover:text-gold"}`}>{z.id}</button>
            ))}
          </div>
        </div>

        {/* Climate Zones Reference */}
        {zoneFilter !== "all" && (
          <div className="bg-bg-elevated border border-border rounded-xl p-4">
            <p className="text-sm font-semibold text-text-primary mb-1">
              {zoneFilter} Zone
            </p>
            <p className="text-xs text-text-secondary">
              {rainData.climateZones.find(z => z.id === zoneFilter)?.description}
            </p>
          </div>
        )}

        {/* Data Cards */}
        <div className="space-y-4">
          {filtered.map((county) => (
            <div key={county.code} className="bg-bg-card border border-border rounded-xl p-5">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-base font-bold text-text-primary font-[family-name:var(--font-outfit)] mb-1">{county.name}</h3>
                  <div className="flex gap-2">
                    <span className="text-[0.65rem] bg-bg-elevated border border-border px-2 py-0.5 rounded text-text-muted">{county.climateZone}</span>
                    <span className="text-[0.65rem] bg-kenya-green/10 text-kenya-green-light px-2 py-0.5 rounded font-bold">{county.annualRainfall} mm/year</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[0.65rem] text-text-muted">Long Rains: <span className="font-medium text-text-secondary">{county.longRains}</span></p>
                  <p className="text-[0.65rem] text-text-muted">Short Rains: <span className="font-medium text-text-secondary">{county.shortRains}</span></p>
                  <p className="text-[0.65rem] text-text-muted">Dry Season: <span className="font-medium text-text-secondary">{county.drySeason}</span></p>
                </div>
              </div>

              {/* Monthly calendar */}
              <div className="grid grid-cols-6 sm:grid-cols-12 gap-1">
                {rainData.months.map((m, i) => {
                  const mm = county.monthlyAvg[i];
                  return (
                    <div key={m} className={`flex flex-col items-center justify-center p-1 rounded ${getRainColor(mm)}`}>
                      <span className="text-[0.55rem] uppercase opacity-80">{m}</span>
                      <span className="text-[0.7rem]">{mm}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          
          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-4xl mb-3">🔍</p>
              <p className="text-text-secondary text-sm">No counties found</p>
            </div>
          )}
        </div>

        {/* Notes */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">About the Data</h3>
          <ul className="space-y-2">
            {rainData.notes.map((note, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>{note}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </ToolShell>
  );
}
