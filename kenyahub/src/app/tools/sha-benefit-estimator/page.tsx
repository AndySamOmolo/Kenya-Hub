"use client";

import { useState } from "react";
import { TOOLS } from "@/lib/tools-registry";
import shaData from "@/data/sha-benefit-data.json";
import vaccinationData from "@/data/vaccination-schedule.json";
import nutritionData from "@/data/kenyan-foods-nutrition.json";

const tool = TOOLS.find((t) => t.slug === "sha-benefit-estimator")!;

export default function ShaBenefitEstimatorPage() {
  const [selectedLevel, setSelectedLevel] = useState(shaData.facilityLevels[2].level);
  const [selectedPackage, setSelectedPackage] = useState(shaData.packages[0].id);

  const activeLevel = shaData.facilityLevels.find((l) => l.level === selectedLevel) || shaData.facilityLevels[0];
  const activePackage = shaData.packages.find((p) => p.id === selectedPackage) || shaData.packages[0];

  return (
    <>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">

          <div className="flex flex-wrap gap-2 mb-6">
            {shaData.facilityLevels.map((lvl) => (
              <button
                key={lvl.level}
                onClick={() => setSelectedLevel(lvl.level)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedLevel === lvl.level
                    ? "bg-gold text-kenya-black font-bold shadow-xs"
                    : "bg-bg-elevated border border-border text-text-secondary hover:text-text-primary"
                }`}
              >
                {lvl.level} — {lvl.name.split("/")[0].trim()}
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-bg-elevated/50 p-4 sm:p-5 mb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between gap-2 border-b border-border/60 pb-3">
              <div className="min-w-0">
                <span className="text-xs font-bold text-gold uppercase tracking-wider">{activeLevel.level}</span>
                <h3 className="text-base sm:text-lg font-bold text-text-primary break-words">{activeLevel.name}</h3>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-2xl text-xs font-bold bg-kenya-green/15 text-kenya-green-light border border-kenya-green/30 self-start sm:self-auto max-w-full break-words">
                {activeLevel.copay}
              </span>
            </div>
            <div>
              <p className="text-xs font-semibold text-text-muted mb-2">Standard Covered Services:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeLevel.services.map((srv, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-text-primary">
                    <span className="text-gold font-bold">•</span> {srv}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-sm font-bold text-text-primary mb-3 uppercase tracking-wider">
            Key Specialized Benefit Packages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {shaData.packages.map((pkg) => {
              const active = pkg.id === selectedPackage;
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`rounded-xl border p-4 cursor-pointer transition-all ${
                    active ? "border-gold bg-gold/10" : "border-border bg-bg-elevated/40 hover:border-gold/40"
                  }`}
                >
                  <h4 className="text-xs sm:text-sm font-bold text-text-primary mb-1">{pkg.name}</h4>
                  <p className="text-xs font-bold text-gold mb-1">{pkg.coveredAmount}</p>
                  <p className="inline-block text-[0.6875rem] font-semibold text-kenya-green-light bg-kenya-green/10 border border-kenya-green/25 rounded-md px-2 py-0.5 mb-1.5">
                    Co-pay: {pkg.copay}
                  </p>
                  <p className="text-[0.6875rem] text-text-secondary leading-snug">{pkg.notes}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOH KEPI Child Immunization Schedule & KEMRI Kenyan Foods Nutrition Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
          <div className="bg-bg-card border border-border rounded-2xl p-5 space-y-3">
            <h2 className="text-sm sm:text-base font-bold font-[family-name:var(--font-outfit)] text-text-primary">
              MOH KEPI Child Vaccination Schedule (Covered Free at Level 2–6 Facilities)
            </h2>
            <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
              {vaccinationData.vaccinationSchedule.map((stage) => (
                <div key={stage.age} className="rounded-xl bg-bg-elevated/60 border border-border p-3 text-xs">
                  <p className="font-bold text-gold mb-1">{stage.age}</p>
                  <p className="text-text-secondary">
                    {stage.vaccines.map((v) => `${v.name} (${v.protectsAgainst})`).join(" • ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-bg-card border border-border rounded-2xl p-5 space-y-3">
            <h2 className="text-sm sm:text-base font-bold font-[family-name:var(--font-outfit)] text-text-primary">
              KEMRI &amp; FAO Kenyan Staple Foods Nutrition Table (per 100g)
            </h2>
            <div className="table-responsive max-h-80 overflow-y-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Kenyan Food</th>
                    <th className="text-right">kcal</th>
                    <th className="text-right">Protein</th>
                    <th className="text-right">Carbs</th>
                    <th className="text-right">Fibre</th>
                  </tr>
                </thead>
                <tbody>
                  {nutritionData.foods.slice(0, 12).map((food) => (
                    <tr key={food.name}>
                      <td className="font-medium text-text-primary">{food.name}</td>
                      <td className="text-right">{food.calories}</td>
                      <td className="text-right">{food.protein}g</td>
                      <td className="text-right">{food.carbs}g</td>
                      <td className="text-right">{food.fibre}g</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
