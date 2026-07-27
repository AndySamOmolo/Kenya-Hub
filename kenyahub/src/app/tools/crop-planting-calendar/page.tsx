"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import cropData from "@/data/crop-planting-calendar.json";

const tool = TOOLS.find((t) => t.slug === "crop-planting-calendar")!;

const faq = [
  { question: "When should I plant maize in Kenya?", answer: "For the Long Rains season, plant maize in March–April in most regions. For Short Rains, plant in October (Nyanza, Coast, Eastern). Highland areas like the Rift Valley typically only have one season." },
  { question: "What is intercropping and why is it recommended?", answer: "Intercropping means growing two or more crops together in the same field. The classic Kenyan example is maize + beans. Benefits include better soil fertility (legumes fix nitrogen), reduced pest pressure, and diversified income." },
  { question: "Where can I get certified seeds in Kenya?", answer: "Buy from KEPHIS-registered seed dealers, Kenya Seed Company outlets, or licensed agrovets. Always check the KEPHIS certification label on the packet for germination guarantee." },
  { question: "What are Kenya's two farming seasons?", answer: "Kenya has two main seasons: the 'Long Rains' (March–May) and 'Short Rains' (October–December). However, highland and western regions may have slightly different timing, and some areas only support one season." },
  { question: "How do I know which crops suit my area?", answer: "Consider your altitude, annual rainfall, and soil type. Contact your local KALRO research station or county agricultural extension officer for personalized advice." },
];

const monthColors = [
  "bg-amber-900/30 text-gold", "bg-amber-900/30 text-gold",
  "bg-kenya-green/20 text-kenya-green-light", "bg-kenya-green/30 text-kenya-green-light",
  "bg-kenya-green/20 text-kenya-green-light", "bg-sky-900/30 text-sky-light",
  "bg-sky-900/20 text-sky-light", "bg-amber-900/20 text-gold",
  "bg-amber-900/30 text-gold", "bg-kenya-green/20 text-kenya-green-light",
  "bg-kenya-green/30 text-kenya-green-light", "bg-kenya-green/20 text-kenya-green-light",
];

export default function CropPlantingCalendarPage() {
  const [regionFilter, setRegionFilter] = useState("highlands");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [search, setSearch] = useState("");

  const categories = useMemo(() => {
    const cats = new Set(cropData.crops.map((c) => c.category));
    return Array.from(cats);
  }, []);

  const filtered = useMemo(() => {
    return cropData.crops.filter((crop) => {
      if (categoryFilter !== "all" && crop.category !== categoryFilter) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return crop.name.toLowerCase().includes(q) || crop.category.toLowerCase().includes(q);
      }
      return true;
    });
  }, [categoryFilter, search]);

  const selectedRegion = cropData.regions.find((r) => r.id === regionFilter);

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Region selector */}
        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-4">
          <div>
            <label className="text-xs text-text-muted block mb-2">Select your farming region</label>
            <div className="flex flex-wrap gap-2">
              {cropData.regions.map((r) => (
                <button key={r.id} onClick={() => setRegionFilter(r.id)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${regionFilter === r.id ? "bg-kenya-green text-white" : "bg-bg-elevated border border-border text-text-secondary hover:text-kenya-green-light"}`}>
                  {r.name}
                </button>
              ))}
            </div>
          </div>
          {selectedRegion && (
            <p className="text-xs text-text-muted">Counties: {selectedRegion.counties.join(", ")}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-3">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search crops..." className="input-field text-sm flex-1" id="crop-search" />
            <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="input-field text-sm w-full sm:w-auto" id="crop-category">
              <option value="all">All Categories</option>
              {categories.map((c) => (<option key={c} value={c}>{c}</option>))}
            </select>
          </div>
        </div>

        {/* Crop cards */}
        <div className="space-y-4">
          {filtered.map((crop) => {
            const seasonData = crop.seasons[regionFilter as keyof typeof crop.seasons];
            return (
              <div key={crop.name} className="bg-bg-card border border-border rounded-xl overflow-hidden">
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-2xl">{crop.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-bold text-text-primary font-[family-name:var(--font-outfit)]">{crop.name}</h3>
                        <span className="text-[0.6rem] bg-bg-elevated border border-border px-2 py-0.5 rounded text-text-muted">{crop.category}</span>
                      </div>
                      <p className="text-xs text-text-secondary mt-1 leading-relaxed">{crop.description}</p>
                    </div>
                  </div>

                  {/* Planting timeline */}
                  {seasonData ? (
                    <div className="space-y-3">
                      {/* Visual month strip */}
                      <div className="grid grid-cols-6 sm:grid-cols-12 gap-1">
                        {cropData.months.map((m, i) => {
                          const lr = seasonData && 'longRains' in seasonData ? seasonData.longRains : null;
                          const sr = seasonData && 'shortRains' in seasonData ? seasonData.shortRains : null;
                          const isLRPlant = lr && lr.plant && lr.plant.toLowerCase().includes(m.toLowerCase().slice(0, 3));
                          const isLRHarvest = lr && lr.harvest && lr.harvest.toLowerCase().includes(m.toLowerCase().slice(0, 3));
                          const isSRPlant = sr && sr.plant && sr.plant.toLowerCase().includes(m.toLowerCase().slice(0, 3));
                          const isSRHarvest = sr && sr.harvest && sr.harvest.toLowerCase().includes(m.toLowerCase().slice(0, 3));
                          const isActive = isLRPlant || isLRHarvest || isSRPlant || isSRHarvest;
                          return (
                            <div key={m} className={`flex flex-col items-center justify-center p-1.5 rounded text-center ${isLRPlant || isSRPlant ? "bg-kenya-green/30 border border-kenya-green/40" : isLRHarvest || isSRHarvest ? "bg-gold/20 border border-gold/30" : monthColors[i]}`}>
                              <span className="text-[0.55rem] uppercase opacity-80">{m}</span>
                              {isActive && <span className="text-[0.6rem] mt-0.5">{(isLRPlant || isSRPlant) ? "🌱" : "🌾"}</span>}
                            </div>
                          );
                        })}
                      </div>

                      {/* Season details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {seasonData && 'longRains' in seasonData && seasonData.longRains && (
                          <div className="bg-kenya-green/5 border border-kenya-green/20 rounded-lg p-3">
                            <p className="text-[0.65rem] font-semibold text-kenya-green-light mb-1">🌧️ Long Rains (Mar–May)</p>
                            <p className="text-xs text-text-secondary">Plant: <span className="font-medium text-text-primary">{seasonData.longRains.plant}</span></p>
                            <p className="text-xs text-text-secondary">Harvest: <span className="font-medium text-text-primary">{seasonData.longRains.harvest}</span></p>
                          </div>
                        )}
                        {seasonData && 'shortRains' in seasonData && seasonData.shortRains && (
                          <div className="bg-sky/5 border border-sky/20 rounded-lg p-3">
                            <p className="text-[0.65rem] font-semibold text-sky-light mb-1">🌦️ Short Rains (Oct–Dec)</p>
                            <p className="text-xs text-text-secondary">Plant: <span className="font-medium text-text-primary">{seasonData.shortRains.plant}</span></p>
                            <p className="text-xs text-text-secondary">Harvest: <span className="font-medium text-text-primary">{seasonData.shortRains.harvest}</span></p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-bg-elevated rounded-lg p-3 text-center">
                      <p className="text-xs text-text-muted">❌ Not typically grown in this region</p>
                    </div>
                  )}

                  {/* Quick stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
                    <div className="bg-bg-elevated rounded-lg p-2 text-center">
                      <p className="text-[0.6rem] text-text-muted">Maturity</p>
                      <p className="text-xs font-medium text-text-primary">{crop.maturityDays}</p>
                    </div>
                    <div className="bg-bg-elevated rounded-lg p-2 text-center">
                      <p className="text-[0.6rem] text-text-muted">Altitude</p>
                      <p className="text-xs font-medium text-text-primary">{crop.optimalAltitude}</p>
                    </div>
                    <div className="bg-bg-elevated rounded-lg p-2 text-center">
                      <p className="text-[0.6rem] text-text-muted">Rainfall</p>
                      <p className="text-xs font-medium text-text-primary">{crop.optimalRainfall}</p>
                    </div>
                    <div className="bg-bg-elevated rounded-lg p-2 text-center">
                      <p className="text-[0.6rem] text-text-muted">Spacing</p>
                      <p className="text-xs font-medium text-text-primary">{crop.spacingCm}</p>
                    </div>
                  </div>

                  {/* Intercropping & Tips */}
                  {crop.intercropWith.length > 0 && (
                    <div className="mt-3">
                      <p className="text-[0.65rem] text-text-muted mb-1">Intercrop with:</p>
                      <div className="flex flex-wrap gap-1">
                        {crop.intercropWith.map((ic) => (
                          <span key={ic} className="text-[0.6rem] bg-kenya-green/10 text-kenya-green-light px-2 py-0.5 rounded">{ic}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  <details className="mt-3 group">
                    <summary className="text-xs font-medium text-gold cursor-pointer hover:underline">💡 Farming Tips</summary>
                    <ul className="mt-2 space-y-1">
                      {crop.tips.map((tip, i) => (
                        <li key={i} className="text-xs text-text-secondary flex items-start gap-2"><span className="text-gold mt-0.5">•</span>{tip}</li>
                      ))}
                    </ul>
                  </details>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 text-xs text-text-muted">
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-kenya-green/30 border border-kenya-green/40"></span> Planting 🌱</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-gold/20 border border-gold/30"></span> Harvesting 🌾</span>
        </div>

        {/* Notes */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">About the Data</h3>
          <ul className="space-y-2">
            {cropData.notes.map((note, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>{note}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </ToolShell>
  );
}
