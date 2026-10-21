"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { getToolBySlug } from "@/lib/tools-registry";
import mjengoData from "@/data/mjengo-construction-rates.json";

const tool = getToolBySlug("mjengo-construction-calculator")!;

function formatKES(n: number): string {
  return Math.round(n).toLocaleString("en-KE");
}

export default function MjengoConstructionCalculatorPage() {
  const [regionId, setRegionId] = useState(mjengoData.regions[0].id);
  const [finishId, setFinishId] = useState(mjengoData.finishTiers[1].id);
  const [floorArea, setFloorArea] = useState("130");
  const [perimeterWallMeters, setPerimeterWallMeters] = useState("0");

  const region = useMemo(
    () => mjengoData.regions.find((r) => r.id === regionId) || mjengoData.regions[0],
    [regionId]
  );
  const finish = useMemo(
    () => mjengoData.finishTiers.find((f) => f.id === finishId) || mjengoData.finishTiers[1],
    [finishId]
  );

  const calc = useMemo(() => {
    const sqm = Math.max(15, Number(floorArea.replace(/,/g, "")) || 130);
    const perimMeters = Math.max(0, Number(perimeterWallMeters.replace(/,/g, "")) || 0);

    const ratePerSqm = finish.costPerSqm * region.multiplier;
    const houseCost = sqm * ratePerSqm;

    const wallAreaSqm = sqm * 2.55;
    const machineCutStones = Math.ceil(wallAreaSqm * 13.5 + perimMeters * 2.4 * 13.5);
    const cementBags = Math.ceil(sqm * 4.4 + perimMeters * 1.1);
    const sandTonnes = Math.ceil(sqm * 0.58 + perimMeters * 0.14);
    const ballastTonnes = Math.ceil(sqm * 0.48 + perimMeters * 0.12);
    const steelBarsD12 = Math.ceil(sqm * 0.85 + perimMeters * 0.35);
    const mabatiSheets3m = Math.ceil((sqm * 1.38) / 2.4);

    const perimeterCost = perimMeters * 11500 * region.multiplier;
    const totalProjectCost = houseCost + perimeterCost;
    const ncaLevy = totalProjectCost > 5000000 ? totalProjectCost * 0.005 : 0;

    const stages = mjengoData.stageBreakdownPct.map((s) => ({
      ...s,
      cost: houseCost * s.pct,
    }));

    return {
      sqm,
      perimMeters,
      ratePerSqm,
      houseCost,
      perimeterCost,
      totalProjectCost,
      ncaLevy,
      machineCutStones,
      cementBags,
      sandTonnes,
      ballastTonnes,
      steelBarsD12,
      mabatiSheets3m,
      stages,
    };
  }, [floorArea, perimeterWallMeters, region, finish]);

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
              Quick House Size Presets
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {mjengoData.housePresets.map((p) => {
                const active = Number(floorArea) === p.sqm;
                return (
                  <button
                    key={p.id}
                    onClick={() => setFloorArea(String(p.sqm))}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      active
                        ? "bg-[var(--gold)]/15 border-[var(--gold)]/50 text-[var(--text-primary)]"
                        : "bg-[var(--bg-elevated)] border-[var(--border)] text-[var(--text-secondary)]"
                    }`}
                  >
                    <p className="text-xs font-bold text-[var(--text-primary)]">{p.name}</p>
                    <p className="text-[11px] text-[var(--gold)] font-semibold mt-0.5">
                      {p.sqm} m² ({p.bedrooms} Bed · {p.bathrooms} Bath)
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">
                Plinth / Floor Area (Square Meters — m²)
              </label>
              <input
                type="text"
                inputMode="numeric"
                value={floorArea}
                onChange={(e) => setFloorArea(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-sm text-[var(--text-primary)]"
              />
            </div>
            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">
                Optional Perimeter Wall Length (Linear Meters — 0 if none)
              </label>
              <input
                type="text"
                inputMode="numeric"
                value={perimeterWallMeters}
                onChange={(e) => setPerimeterWallMeters(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-sm text-[var(--text-primary)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">
                Region & Quarry Transport Zone
              </label>
              <select
                value={regionId}
                onChange={(e) => setRegionId(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-xs font-semibold text-[var(--text-primary)]"
              >
                {mjengoData.regions.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">
                Finishing Tier (Roofing, Tiles & Joinery)
              </label>
              <select
                value={finishId}
                onChange={(e) => setFinishId(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-xs font-semibold text-[var(--text-primary)]"
              >
                {mjengoData.finishTiers.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-[var(--bg-card)] border border-[var(--gold)]/30 rounded-xl p-5">
            <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">
              Total Estimated Mjengo Cost
            </p>
            <p className="text-2xl font-extrabold text-[var(--gold)] font-[family-name:var(--font-display)]">
              KES {formatKES(calc.totalProjectCost)}
            </p>
            <p className="text-[11px] text-[var(--text-muted)] mt-1">
              KES {formatKES(calc.ratePerSqm)}/m² ({calc.sqm} m²)
            </p>
          </div>
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5">
            <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">
              9x9 Machine-Cut Stones Needed
            </p>
            <p className="text-2xl font-extrabold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
              {calc.machineCutStones.toLocaleString()} pcs
            </p>
            <p className="text-[11px] text-[var(--text-muted)] mt-1">
              ~KES {formatKES(calc.machineCutStones * region.stonePrice)} (@ KES {region.stonePrice}/pc)
            </p>
          </div>
          <div className="bg-[var(--bg-card)] border border-emerald-500/30 rounded-xl p-5">
            <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">
              50kg Cement Bags (32.5R / 42.5N)
            </p>
            <p className="text-2xl font-extrabold text-emerald-400 font-[family-name:var(--font-display)]">
              {calc.cementBags.toLocaleString()} bags
            </p>
            <p className="text-[11px] text-[var(--text-muted)] mt-1">
              ~KES {formatKES(calc.cementBags * region.cementBag)} (@ KES {region.cementBag}/bag)
            </p>
          </div>
        </div>

        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="px-5 py-3.5 border-b border-[var(--border)]">
            <h3 className="text-sm font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
              Estimated Key Materials Schedule (Bill of Quantities)
            </h3>
          </div>
          <div className="divide-y divide-[var(--border)] text-sm">
            <div className="px-5 py-3 flex justify-between">
              <span className="text-[var(--text-secondary)]">Machine-Cut Quarry Stones (9×9×18 inch)</span>
              <span className="font-bold text-[var(--text-primary)]">
                {calc.machineCutStones.toLocaleString()} pcs (KES {formatKES(calc.machineCutStones * region.stonePrice)})
              </span>
            </div>
            <div className="px-5 py-3 flex justify-between">
              <span className="text-[var(--text-secondary)]">Portland Poziolana Cement (50kg Bags)</span>
              <span className="font-bold text-[var(--text-primary)]">
                {calc.cementBags.toLocaleString()} bags (KES {formatKES(calc.cementBags * region.cementBag)})
              </span>
            </div>
            <div className="px-5 py-3 flex justify-between">
              <span className="text-[var(--text-secondary)]">Clean River Sand (Plaster & Mortar)</span>
              <span className="font-bold text-[var(--text-primary)]">
                {calc.sandTonnes} tonnes (KES {formatKES(calc.sandTonnes * region.sandTonne)})
              </span>
            </div>
            <div className="px-5 py-3 flex justify-between">
              <span className="text-[var(--text-secondary)]">Crushed Ballast (1/2” & 3/4” Aggregate)</span>
              <span className="font-bold text-[var(--text-primary)]">
                {calc.ballastTonnes} tonnes (KES {formatKES(calc.ballastTonnes * region.ballastTonne)})
              </span>
            </div>
            <div className="px-5 py-3 flex justify-between">
              <span className="text-[var(--text-secondary)]">Deformed High-Tensile Steel Bars (D12 / D16 & R8 Rings)</span>
              <span className="font-bold text-[var(--text-primary)]">
                {calc.steelBarsD12} lengths (12m full bars)
              </span>
            </div>
            <div className="px-5 py-3 flex justify-between">
              <span className="text-[var(--text-secondary)]">28-Gauge Pre-Painted Mabati Sheets (3m equiv.)</span>
              <span className="font-bold text-[var(--text-primary)]">
                {calc.mabatiSheets3m} sheets
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="px-5 py-3.5 border-b border-[var(--border)]">
            <h3 className="text-sm font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
              Stage-by-Stage Construction Cashflow Plan
            </h3>
          </div>
          <div className="divide-y divide-[var(--border)] text-sm">
            {calc.stages.map((s) => (
              <div key={s.stage} className="px-5 py-3 flex justify-between items-center gap-4">
                <span className="text-[var(--text-secondary)]">{s.stage}</span>
                <span className="font-semibold text-[var(--text-primary)] shrink-0">
                  KES {formatKES(s.cost)} ({Math.round(s.pct * 100)}%)
                </span>
              </div>
            ))}
            {calc.perimeterCost > 0 && (
              <div className="px-5 py-3 flex justify-between">
                <span className="text-[var(--text-secondary)]">
                  Perimeter Stone Wall ({calc.perimMeters}m × 2.4m high + Razor Wire)
                </span>
                <span className="font-semibold text-[var(--text-primary)]">
                  KES {formatKES(calc.perimeterCost)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
