"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import countiesData from "@/data/counties.json";

const tool = TOOLS.find((t) => t.slug === "ward-constituency-finder")!;

const faq = [
  { question: "How many constituencies are in Kenya?", answer: "Kenya has 290 parliamentary constituencies, distributed across 47 counties. Each constituency elects one Member of Parliament (MP) to the National Assembly." },
  { question: "How many wards are in Kenya?", answer: "Kenya has 1,450 wards. Each ward elects a Member of County Assembly (MCA) who represents residents in the county assembly." },
  { question: "When is the next general election in Kenya?", answer: "The next general election in Kenya is scheduled for August 2027. The current elected officials (2022 cycle) serve a 5-year term." },
  { question: "What does an MP, Senator, and Governor do?", answer: "An MP represents a constituency in the National Assembly and makes national laws. A Senator represents a county in the Senate and protects county interests. A Governor heads the county executive and manages county services and development." },
  { question: "How do I know which constituency I belong to?", answer: "Your constituency is determined by your physical residence. Select your county from the dropdown above, and you'll see all constituencies within it. If you're unsure, check your voter registration details on the IEBC portal." },
];

export default function WardConstituencyFinderPage() {
  const [selectedCounty, setSelectedCounty] = useState("");

  const county = useMemo(
    () => countiesData.counties.find((c) => c.slug === selectedCounty),
    [selectedCounty]
  );

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* County selector */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <label className="block text-sm font-medium text-text-secondary mb-2">Select Your County</label>
          <select
            value={selectedCounty}
            onChange={(e) => setSelectedCounty(e.target.value)}
            className="input-field text-base"
            id="county-select"
          >
            <option value="">— Choose a county —</option>
            {countiesData.counties.map((c) => (
              <option key={c.code} value={c.slug}>{c.name} County</option>
            ))}
          </select>
        </div>

        {county && (
          <>
            {/* County leadership */}
            <div className="result-box">
              <h3 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-4">
                {county.name} County — Elected Officials
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-bg-elevated rounded-lg p-4">
                  <p className="text-[0.65rem] text-text-muted uppercase tracking-wider mb-1">Governor</p>
                  <p className="text-sm font-semibold text-kenya-green-light">{county.governor}</p>
                </div>
                <div className="bg-bg-elevated rounded-lg p-4">
                  <p className="text-[0.65rem] text-text-muted uppercase tracking-wider mb-1">Deputy Governor</p>
                  <p className="text-sm font-semibold text-text-primary">{county.deputyGovernor}</p>
                </div>
                <div className="bg-bg-elevated rounded-lg p-4">
                  <p className="text-[0.65rem] text-text-muted uppercase tracking-wider mb-1">Senator</p>
                  <p className="text-sm font-semibold text-text-primary">{county.senator}</p>
                </div>
                <div className="bg-bg-elevated rounded-lg p-4">
                  <p className="text-[0.65rem] text-text-muted uppercase tracking-wider mb-1">Women Representative</p>
                  <p className="text-sm font-semibold text-text-primary">{county.womenRep}</p>
                </div>
              </div>
            </div>

            {/* Constituencies */}
            <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
              <div className="px-5 py-3 border-b border-border bg-bg-elevated">
                <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
                  Constituencies in {county.name} ({county.constituencies.length})
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
                {county.constituencies.map((c, i) => (
                  <div key={i} className="px-4 py-3 bg-bg-card flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center text-[0.65rem] font-bold text-gold">{i + 1}</span>
                    <span className="text-sm text-text-primary">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* County stats */}
            <div className="bg-bg-card border border-border rounded-xl p-5">
              <h3 className="text-sm font-semibold text-text-primary mb-4 font-[family-name:var(--font-outfit)]">
                County Statistics
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div><p className="text-[0.65rem] text-text-muted mb-1">Population</p><p className="text-base font-bold text-text-primary">{county.population.toLocaleString()}</p></div>
                <div><p className="text-[0.65rem] text-text-muted mb-1">Area</p><p className="text-base font-bold text-text-primary">{county.area.toLocaleString()} km²</p></div>
                <div><p className="text-[0.65rem] text-text-muted mb-1">Density</p><p className="text-base font-bold text-text-primary">{Math.round(county.population / county.area)}/km²</p></div>
                <div><p className="text-[0.65rem] text-text-muted mb-1">HQ</p><p className="text-base font-bold text-text-primary">{county.capital}</p></div>
              </div>
            </div>
          </>
        )}

        {!selectedCounty && (
          <div className="text-center py-12">
            <p className="text-4xl mb-3">🗳️</p>
            <p className="text-text-secondary text-sm">Select a county above to see its constituencies, wards, and elected officials</p>
          </div>
        )}
      </div>
    </ToolShell>
  );
}
