"use client";

import { useState } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import soilData from "@/data/soil-types.json";

const tool = TOOLS.find((t) => t.slug === "kenya-soil-types")!;

const faq = [
  { question: "What is the most fertile soil in Kenya?", answer: "Nitisols (red volcanic soils) and Andosols (volcanic ash soils) are the most fertile. Found in the Central Highlands and on the slopes of Mt. Kenya, Aberdares, and Mt. Elgon. They support tea, coffee, potatoes, and intensive horticulture." },
  { question: "What is 'black cotton soil' in Kenya?", answer: "Black cotton soil refers to Vertisols — heavy dark clay soils that swell when wet and crack when dry. Found in the Rift Valley floor, Lake Victoria basin, and parts of Eastern Kenya. They're fertile but very difficult to work." },
  { question: "How much does soil testing cost in Kenya?", answer: "KALRO offers soil testing for KES 500–1,500 per sample. You can also use private labs. The test tells you pH, nutrient levels (N, P, K), and gives fertilizer recommendations for your specific soil." },
  { question: "Why is my soil acidic?", answer: "Soil acidity in Kenya is common in high-rainfall areas (Western Kenya, tea zones). It's caused by leaching of basic cations. Apply agricultural lime (2–4 tonnes/ha) to correct acidity. Always test pH before liming." },
];

export default function KenyaSoilTypesPage() {
  const [selectedSoil, setSelectedSoil] = useState<string | null>(null);

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Soil type cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {soilData.soilTypes.map((soil) => (
            <button key={soil.id} onClick={() => setSelectedSoil(selectedSoil === soil.id ? null : soil.id)}
              className={`p-3 rounded-xl border text-left transition-all ${selectedSoil === soil.id ? "border-gold bg-gold/5 ring-1 ring-gold/30" : "border-border bg-bg-card hover:border-gold/50"}`}>
              <div className="w-8 h-8 rounded-full mb-2 border-2 border-white/10" style={{ backgroundColor: soil.color }} />
              <p className="text-xs font-semibold text-text-primary leading-tight">{soil.name.split(" (")[0]}</p>
              <p className="text-[0.6rem] text-text-muted mt-0.5">{soil.fertility} fertility</p>
            </button>
          ))}
        </div>

        {/* Detail view */}
        {soilData.soilTypes.map((soil) => (
          (selectedSoil === null || selectedSoil === soil.id) && (
            <div key={soil.id} className="bg-bg-card border border-border rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 p-5 border-b border-border">
                <div className="w-10 h-10 rounded-full flex-shrink-0 border-2 border-white/10" style={{ backgroundColor: soil.color }} />
                <div>
                  <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">{soil.name}</h3>
                  <p className="text-xs text-text-muted">{soil.texture} · pH {soil.pH}</p>
                </div>
                <span className={`ml-auto text-[0.6rem] font-bold px-2.5 py-1 rounded-full ${soil.fertility === "High" ? "bg-kenya-green/15 text-kenya-green-light" : soil.fertility === "Medium–High" ? "bg-sky/15 text-sky-light" : soil.fertility === "Low" || soil.fertility === "Very Low" ? "bg-kenya-red/15 text-kenya-red-light" : "bg-gold/15 text-gold"}`}>
                  {soil.fertility}
                </span>
              </div>

              <div className="p-5 space-y-4">
                <p className="text-xs text-text-secondary leading-relaxed">{soil.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[0.65rem] font-semibold text-text-muted mb-1.5">📍 Where Found</p>
                    <div className="flex flex-wrap gap-1">
                      {soil.counties.map((c) => (<span key={c} className="text-[0.6rem] bg-bg-elevated border border-border px-2 py-0.5 rounded text-text-secondary">{c}</span>))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[0.65rem] font-semibold text-text-muted mb-1.5">🌾 Best Crops</p>
                    <div className="flex flex-wrap gap-1">
                      {soil.bestCrops.map((c) => (<span key={c} className="text-[0.6rem] bg-kenya-green/10 text-kenya-green-light px-2 py-0.5 rounded">{c}</span>))}
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[0.65rem] font-semibold text-text-muted mb-1.5">⚠️ Common Deficiencies</p>
                  <ul className="space-y-1">
                    {soil.deficiencies.map((d, i) => (<li key={i} className="text-xs text-text-secondary flex items-start gap-2"><span className="text-kenya-red-light mt-0.5">•</span>{d}</li>))}
                  </ul>
                </div>

                <div>
                  <p className="text-[0.65rem] font-semibold text-text-muted mb-1.5">✅ How to Improve</p>
                  <ul className="space-y-1">
                    {soil.improvement.map((tip, i) => (<li key={i} className="text-xs text-text-secondary flex items-start gap-2"><span className="text-kenya-green-light mt-0.5">•</span>{tip}</li>))}
                  </ul>
                </div>
              </div>
            </div>
          )
        ))}

        {/* Notes */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">About the Data</h3>
          <ul className="space-y-2">
            {soilData.notes.map((note, i) => (<li key={i} className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>{note}</span></li>))}
          </ul>
        </div>
      </div>
    </ToolShell>
  );
}
