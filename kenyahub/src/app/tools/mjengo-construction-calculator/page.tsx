"use client";

import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import { useState, useMemo } from "react";
import { X } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import CustomSelect from "@/components/ui/CustomSelect";
import { TOOLS } from "@/lib/tools-registry";
import mjengoData from "@/data/mjengo-construction-rates.json";

const tool = TOOLS.find((t) => t.slug === "mjengo-construction-calculator")!;

function formatKES(n: number): string {
  return Math.round(n).toLocaleString("en-KE");
}

export default function MjengoConstructionCalculatorPage() {
  const [regionId, setRegionId] = useState(mjengoData.regions[0].id);
  const [finishId, setFinishId] = useState(mjengoData.finishTiers[1].id);
  const [floorArea, setFloorArea] = useState("130");
  const [perimeterWallMeters, setPerimeterWallMeters] = useState("");

  const region = useMemo(
    () => mjengoData.regions.find((r) => r.id === regionId) || mjengoData.regions[0],
    [regionId]
  );
  const finish = useMemo(
    () => mjengoData.finishTiers.find((f) => f.id === finishId) || mjengoData.finishTiers[1],
    [finishId]
  );

  const calc = useMemo(() => {
    const sqm =
      floorArea.trim() === ""
        ? 0
        : Math.max(0, Number(floorArea.replace(/,/g, "")) || 0);
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
    const subtotal = houseCost + perimeterCost;
    const ncaLevy = subtotal > 5000000 ? subtotal * 0.005 : 0;
    const grandTotal = subtotal + ncaLevy;
    const totalProjectCost = grandTotal;

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
      subtotal,
      ncaLevy,
      grandTotal,
      totalProjectCost,
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
            <ExpandablePillRow>
              {mjengoData.housePresets.map((p) => {
                const active = floorArea !== "" && Number(floorArea) === p.sqm;
                return (
                  <button
                    key={p.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFloorArea(String(p.sqm))}
                    className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium border transition-all cursor-pointer ${
                      active
                        ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                        : "border-border bg-bg-elevated text-text-secondary hover:text-text-primary hover:border-border-light"
                    }`}
                  >
                    {p.name} ({p.sqm} m² · {p.bedrooms}BR)
                  </button>
                );
              })}
            </ExpandablePillRow>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">
                Plinth / Floor Area (Square Meters — m²)
              </label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="numeric"
                  value={floorArea}
                  placeholder="0"
                  onChange={(e) =>
                    setFloorArea(e.target.value.replace(/[^0-9]/g, "").replace(/^0+(?=\d)/, ""))
                  }
                  className="w-full pl-3.5 pr-10 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] dark:border-white/15 text-sm text-[var(--text-primary)] tabular-nums"
                  style={{ paddingRight: "2.5rem" }}
                />
                {floorArea && (
                  <button
                    type="button"
                    onClick={() => setFloorArea("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                    aria-label="Clear floor area"
                  >
                    <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                  </button>
                )}
              </div>
            </div>
            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">
                Optional Perimeter Wall Length (Linear Meters — 0 if none)
              </label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="numeric"
                  value={perimeterWallMeters}
                  placeholder="0"
                  onChange={(e) =>
                    setPerimeterWallMeters(
                      e.target.value.replace(/[^0-9]/g, "").replace(/^0+(?=\d)/, "")
                    )
                  }
                  className="w-full pl-3.5 pr-10 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] dark:border-white/15 text-sm text-[var(--text-primary)] tabular-nums"
                  style={{ paddingRight: "2.5rem" }}
                />
                {perimeterWallMeters && (
                  <button
                    type="button"
                    onClick={() => setPerimeterWallMeters("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                    aria-label="Clear perimeter wall length"
                  >
                    <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">
                Region & Quarry Transport Zone
              </label>
              <CustomSelect
                value={regionId}
                onValueChange={(val) => setRegionId(val)}
                options={mjengoData.regions.map((r) => ({
                  value: r.id,
                  label: r.name,
                }))}
                className="w-full text-xs"
              />
            </div>
            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">
                Finishing Tier (Roofing, Tiles & Joinery)
              </label>
              <CustomSelect
                value={finishId}
                onValueChange={(val) => setFinishId(val)}
                options={mjengoData.finishTiers.map((f) => ({
                  value: f.id,
                  label: f.name,
                }))}
                className="w-full text-xs"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-amber-500/[0.04] border border-amber-500/45 rounded-xl p-5">
            <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">
              Total Estimated Mjengo Cost
            </p>
            <p className="text-2xl font-extrabold text-[var(--gold)] font-[family-name:var(--font-display)]">
              KES {formatKES(calc.grandTotal)}
            </p>
            <p className="text-[11px] text-[var(--text-muted)] mt-1">
              KES {formatKES(calc.ratePerSqm)}/m² ({calc.sqm} m²)
              {calc.ncaLevy > 0 ? ` · Incl. KES ${formatKES(calc.ncaLevy)} NCA Levy` : ""}
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
            <div className="px-4 sm:px-5 py-3 flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1">
              <span className="text-[var(--text-secondary)]">Machine-Cut Quarry Stones (9×9×18 inch)</span>
              <span className="font-bold text-[var(--text-primary)]">
                {calc.machineCutStones.toLocaleString()} pcs (KES {formatKES(calc.machineCutStones * region.stonePrice)})
              </span>
            </div>
            <div className="px-4 sm:px-5 py-3 flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1">
              <span className="text-[var(--text-secondary)]">Portland Pozzolana Cement (50kg Bags)</span>
              <span className="font-bold text-[var(--text-primary)]">
                {calc.cementBags.toLocaleString()} bags (KES {formatKES(calc.cementBags * region.cementBag)})
              </span>
            </div>
            <div className="px-4 sm:px-5 py-3 flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1">
              <span className="text-[var(--text-secondary)]">Clean River Sand (Plaster & Mortar)</span>
              <span className="font-bold text-[var(--text-primary)]">
                {calc.sandTonnes} tonnes (KES {formatKES(calc.sandTonnes * region.sandTonne)})
              </span>
            </div>
            <div className="px-4 sm:px-5 py-3 flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1">
              <span className="text-[var(--text-secondary)]">Crushed Ballast (1/2” & 3/4” Aggregate)</span>
              <span className="font-bold text-[var(--text-primary)]">
                {calc.ballastTonnes} tonnes (KES {formatKES(calc.ballastTonnes * region.ballastTonne)})
              </span>
            </div>
            <div className="px-4 sm:px-5 py-3 flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1">
              <span className="text-[var(--text-secondary)]">Deformed High-Tensile Steel Bars (D12 / D16 & R8 Rings)</span>
              <span className="font-bold text-[var(--text-primary)]">
                {calc.steelBarsD12} lengths (12m full bars)
              </span>
            </div>
            <div className="px-4 sm:px-5 py-3 flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1">
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
              <div key={s.stage} className="px-4 sm:px-5 py-3 flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1">
                <span className="text-[var(--text-secondary)]">{s.stage}</span>
                <span className="font-semibold text-[var(--text-primary)] shrink-0">
                  KES {formatKES(s.cost)} ({Math.round(s.pct * 100)}%)
                </span>
              </div>
            ))}
            {calc.perimeterCost > 0 && (
              <div className="px-4 sm:px-5 py-3 flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1">
                <span className="text-[var(--text-secondary)]">
                  Perimeter Stone Wall ({calc.perimMeters}m × 2.4m high + Razor Wire)
                </span>
                <span className="font-semibold text-[var(--text-primary)]">
                  KES {formatKES(calc.perimeterCost)}
                </span>
              </div>
            )}
            <div className="px-4 sm:px-5 py-3 flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1 bg-[var(--bg-elevated)]/40">
              <span className="text-[var(--text-secondary)]">Construction Subtotal</span>
              <span className="font-semibold text-[var(--text-primary)]">
                KES {formatKES(calc.subtotal)}
              </span>
            </div>
            <div className="px-4 sm:px-5 py-3 flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1">
              <span className="text-[var(--text-secondary)]">
                NCA Construction Levy (0.5% over KES 5M)
              </span>
              <span className="font-semibold text-[var(--text-primary)]">
                {calc.ncaLevy > 0 ? `KES ${formatKES(calc.ncaLevy)}` : "KES 0 (Exempt ≤ KES 5M)"}
              </span>
            </div>
            <div className="px-4 sm:px-5 py-4 flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1 bg-emerald-500/10 font-bold">
              <span className="text-[var(--text-primary)]">
                Grand Total Estimated Construction Cost (Incl. NCA Levy)
              </span>
              <span className="text-emerald-400 text-base">
                KES {formatKES(calc.grandTotal)}
              </span>
            </div>
          </div>
        </div>

        {/* Sticky Mobile Live-Result Pill (F-038) */}
        <div
          role="status"
          aria-live="polite"
          className="sticky bottom-3 z-30 sm:hidden rounded-full border border-amber-500/45 bg-bg-card sm:bg-bg-card/95 sm:backdrop-blur-md px-4 py-2.5 shadow-lg flex items-center justify-between gap-3"
        >
          <span className="text-xs font-semibold text-text-secondary">Est. Mjengo Total</span>
          <span className="text-sm font-extrabold text-gold tabular-nums whitespace-nowrap">
            KES {formatKES(calc.grandTotal)}
          </span>
        </div>
      </div>
    </ToolShell>
  );
}
