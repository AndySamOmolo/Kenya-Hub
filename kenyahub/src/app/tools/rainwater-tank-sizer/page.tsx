"use client";

import { useState, useMemo } from "react";
import { CloudRain, Droplets, Sun, CheckCircle2, Info } from "lucide-react";
import CustomSelect from "@/components/ui/CustomSelect";
import { getToolBySlug } from "@/lib/tools-registry";
import everydayData from "@/data/kenya-everyday-tools-2026.json";

const tool = getToolBySlug("rainwater-tank-sizer")!;
const rainData = everydayData.rainwater;

type RoofType = keyof typeof rainData.roofRunoffCoefficients;

const ROOF_OPTIONS: { id: RoofType; label: string }[] = [
  { id: "mabati", label: "Corrugated Mabati (0.90)" },
  { id: "tile", label: "Clay / Decra Tiles (0.85)" },
  { id: "concrete", label: "Flat Concrete Slab (0.80)" },
  { id: "thatch", label: "Makuti / Thatch (0.25)" },
];

const SQM_PER_MABATI_SHEET = 2.55; // 3.0m x 0.85m effective laid width

const COUNTY_SELECT_OPTIONS = rainData.counties.map((c) => ({
  value: String(c.code),
  label: `${String(c.code).padStart(2, "0")} — ${c.name} (${c.annualMm} mm/yr)`,
}));

const ROOF_SELECT_OPTIONS = ROOF_OPTIONS.map((r) => ({
  value: r.id,
  label: r.label,
}));

export default function RainwaterTankSizerPage() {
  const [countyCode, setCountyCode] = useState("47");
  const [roofType, setRoofType] = useState<RoofType>("mabati");
  const [inputMode, setInputMode] = useState<"sqm" | "sheets">("sqm");
  const [roofAreaSqm, setRoofAreaSqm] = useState("90");
  const [mabatiSheets, setMabatiSheets] = useState("36");
  const [householdSize, setHouseholdSize] = useState("5");
  const [litresPerPerson, setLitresPerPerson] = useState("40");

  const calc = useMemo(() => {
    const county =
      rainData.counties.find((c) => String(c.code) === countyCode) ||
      rainData.counties[rainData.counties.length - 1];

    const coeff = rainData.roofRunoffCoefficients[roofType] ?? 0.9;
    const firstFlushFactor = 1 - rainData.firstFlushLossPct / 100;
    const effectiveAreaM2 =
      inputMode === "sqm"
        ? Math.max(5, Number(roofAreaSqm) || 0)
        : Math.max(2, Number(mabatiSheets) || 0) * SQM_PER_MABATI_SHEET;

    const people = Math.max(1, Math.round(Number(householdSize) || 1));
    const lpp = Math.max(5, Number(litresPerPerson) || 20);
    const dailyDemandL = people * lpp;
    const drySpellDemandL = dailyDemandL * county.drySpellDays;

    const mamLitres = Math.round(effectiveAreaM2 * county.mamMm * coeff * firstFlushFactor);
    const ondLitres = Math.round(effectiveAreaM2 * county.ondMm * coeff * firstFlushFactor);
    const annualLitres = Math.round(effectiveAreaM2 * county.annualMm * coeff * firstFlushFactor);

    // Target storage is capped by what the long rains (MAM) can fill, aiming to cover dry-spell demand
    const targetStorageL = Math.min(Math.max(mamLitres, ondLitres), drySpellDemandL);

    let recommendedLitres = rainData.tankBenchmarks[0].litres;
    let recommendedPriceKes = rainData.tankBenchmarks[0].priceKes;
    let tankConfigLabel = "1 × 1,500 L";

    const largest = rainData.tankBenchmarks[rainData.tankBenchmarks.length - 1];
    if (targetStorageL > largest.litres) {
      const count = Math.min(4, Math.ceil(targetStorageL / largest.litres));
      recommendedLitres = count * largest.litres;
      recommendedPriceKes = count * largest.priceKes;
      tankConfigLabel = `${count} × ${largest.litres.toLocaleString("en-KE")} L`;
    } else {
      const match =
        rainData.tankBenchmarks.find((t) => t.litres >= targetStorageL) || largest;
      recommendedLitres = match.litres;
      recommendedPriceKes = match.priceKes;
      tankConfigLabel = `1 × ${match.litres.toLocaleString("en-KE")} L`;
    }

    const usableAfterMamL = Math.min(recommendedLitres, mamLitres);
    const drySpellDaysCovered =
      dailyDemandL > 0 ? Math.floor(usableAfterMamL / dailyDemandL) : 0;
    const drySpellCoveragePct =
      county.drySpellDays > 0
        ? Math.min(100, Math.round((drySpellDaysCovered / county.drySpellDays) * 100))
        : 0;

    const benchmarksWithDays = rainData.tankBenchmarks.map((t) => {
      const usable = Math.min(t.litres, mamLitres);
      const days = dailyDemandL > 0 ? Math.floor(usable / dailyDemandL) : 0;
      const fillsInMam = mamLitres >= t.litres;
      return {
        ...t,
        daysCovered: days,
        fillsInMam,
        kesPerLitre: Math.round((t.priceKes / t.litres) * 10) / 10,
      };
    });

    return {
      county,
      coeff,
      effectiveAreaM2,
      dailyDemandL,
      drySpellDemandL,
      mamLitres,
      ondLitres,
      annualLitres,
      recommendedLitres,
      recommendedPriceKes,
      tankConfigLabel,
      drySpellDaysCovered,
      drySpellCoveragePct,
      benchmarksWithDays,
    };
  }, [countyCode, roofType, inputMode, roofAreaSqm, mabatiSheets, householdSize, litresPerPerson]);

  return (
    <>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">
          {/* Roof Area Input Mode Toggle */}
          <div className="flex flex-wrap gap-2 mb-5">
            <button
              type="button"
              aria-pressed={inputMode === "sqm"}
              onClick={() => setInputMode("sqm")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold border cursor-pointer ${
                inputMode === "sqm"
                  ? "bg-gold text-kenya-black border-gold"
                  : "bg-bg-elevated text-text-secondary border-border"
              }`}
            >
              Roof Area (m²)
            </button>
            <button
              type="button"
              aria-pressed={inputMode === "sheets"}
              onClick={() => setInputMode("sheets")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold border cursor-pointer ${
                inputMode === "sheets"
                  ? "bg-gold text-kenya-black border-gold"
                  : "bg-bg-elevated text-text-secondary border-border"
              }`}
            >
              Mabati Sheet Count (3m sheets)
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            <div>
              <label
                htmlFor="rain-county"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                County (47 KMD Zones)
              </label>
              <CustomSelect
                id="rain-county"
                value={countyCode}
                onChange={(e) => setCountyCode(e.target.value)}
                options={COUNTY_SELECT_OPTIONS}
                className="input-field w-full text-xs"
              />
            </div>

            <div>
              <label
                htmlFor="rain-roof-type"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Roof Material &amp; Runoff
              </label>
              <CustomSelect
                id="rain-roof-type"
                value={roofType}
                onChange={(e) => setRoofType(e.target.value as RoofType)}
                options={ROOF_SELECT_OPTIONS}
                className="input-field w-full text-xs"
              />
            </div>

            {inputMode === "sqm" ? (
              <div>
                <label
                  htmlFor="rain-area"
                  className="block text-xs font-semibold text-text-muted uppercase mb-1"
                >
                  Roof Catchment Area (m²)
                </label>
                <input
                  id="rain-area"
                  type="number"
                  min="10"
                  max="2000"
                  step="5"
                  value={roofAreaSqm}
                  onChange={(e) => setRoofAreaSqm(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
                />
              </div>
            ) : (
              <div>
                <label
                  htmlFor="rain-sheets"
                  className="block text-xs font-semibold text-text-muted uppercase mb-1"
                >
                  3m Mabati Sheets ({Math.round(calc.effectiveAreaM2)} m²)
                </label>
                <input
                  id="rain-sheets"
                  type="number"
                  min="4"
                  max="500"
                  step="2"
                  value={mabatiSheets}
                  onChange={(e) => setMabatiSheets(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="rain-household"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Household Size (People)
              </label>
              <input
                id="rain-household"
                type="number"
                min="1"
                max="30"
                step="1"
                value={householdSize}
                onChange={(e) => setHouseholdSize(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>

            <div>
              <label
                htmlFor="rain-lpp"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Daily Use per Person (Litres)
              </label>
              <input
                id="rain-lpp"
                type="number"
                min="10"
                max="200"
                step="5"
                value={litresPerPerson}
                onChange={(e) => setLitresPerPerson(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>

            <div className="rounded-xl border border-border bg-bg-elevated/40 px-3.5 py-2 flex flex-col justify-center">
              <span className="text-[0.68rem] font-bold text-text-muted uppercase">
                Household Daily Demand
              </span>
              <span className="text-sm font-black text-text-primary tabular-nums">
                {calc.dailyDemandL.toLocaleString("en-KE")} L / day
              </span>
              <span className="text-[0.68rem] text-text-muted tabular-nums">
                {calc.county.drySpellDays}-day dry spell: {calc.drySpellDemandL.toLocaleString("en-KE")} L
              </span>
            </div>
          </div>

          <div role="status" aria-live="polite" aria-atomic="true" className="space-y-6">
            {/* Primary KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4">
                <span className="text-[0.68rem] font-bold text-emerald-700 dark:text-emerald-400 uppercase flex items-center gap-1">
                  <Droplets className="w-3.5 h-3.5" /> Recommended PVC Tank
                </span>
                <p className="text-2xl font-black text-emerald-700 dark:text-emerald-400 mt-1 tabular-nums">
                  {calc.recommendedLitres.toLocaleString("en-KE")} L
                </p>
                <p className="text-[0.72rem] text-text-secondary mt-1 tabular-nums">
                  {calc.tankConfigLabel} &bull; Est. KES {calc.recommendedPriceKes.toLocaleString("en-KE")}
                </p>
              </div>

              <div className="rounded-xl border border-amber-500/45 bg-amber-500/[0.04] p-4">
                <span className="text-[0.68rem] font-bold text-gold uppercase flex items-center gap-1">
                  <Sun className="w-3.5 h-3.5" /> Dry-Spell Coverage
                </span>
                <p className="text-2xl font-black text-gold mt-1 tabular-nums">
                  {calc.drySpellDaysCovered} days
                </p>
                <p className="text-[0.72rem] text-text-secondary mt-1 tabular-nums">
                  Covers {calc.drySpellCoveragePct}% of {calc.county.name}&apos;s {calc.county.drySpellDays}-day dry spell
                </p>
              </div>

              <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
                <span className="text-[0.68rem] font-bold text-text-muted uppercase flex items-center gap-1">
                  <CloudRain className="w-3.5 h-3.5" /> Annual Roof Harvest
                </span>
                <p className="text-2xl font-black text-text-primary mt-1 tabular-nums">
                  {calc.annualLitres.toLocaleString("en-KE")} L
                </p>
                <p className="text-[0.72rem] text-text-muted mt-1 tabular-nums">
                  Net of {rainData.firstFlushLossPct}% first-flush diversion
                </p>
              </div>
            </div>

            {/* Seasonal Harvest Breakdown */}
            <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 text-xs space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 min-w-0 mb-1">
                <h2 className="font-bold text-text-primary">
                  {calc.county.name} County Seasonal Harvest ({Math.round(calc.effectiveAreaM2)} m² roof)
                </h2>
                <span className="text-[0.68rem] font-semibold px-2 py-0.5 rounded-full bg-gold/15 text-gold">
                  Runoff {calc.coeff.toFixed(2)}
                </span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0">
                <span className="text-text-secondary">
                  Long Rains — MAM (Mar–May, {calc.county.mamMm} mm)
                </span>
                <span className="font-bold text-text-primary tabular-nums whitespace-nowrap">
                  {calc.mamLitres.toLocaleString("en-KE")} L
                </span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0">
                <span className="text-text-secondary">
                  Short Rains — OND (Oct–Dec, {calc.county.ondMm} mm)
                </span>
                <span className="font-bold text-text-primary tabular-nums whitespace-nowrap">
                  {calc.ondLitres.toLocaleString("en-KE")} L
                </span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0">
                <span className="text-text-secondary">
                  Full-Year KMD Average ({calc.county.annualMm} mm)
                </span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400 tabular-nums whitespace-nowrap">
                  {calc.annualLitres.toLocaleString("en-KE")} L
                </span>
              </div>
            </div>

            {/* PVC Tank Benchmark Comparison */}
            <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 space-y-3">
              <h2 className="text-xs font-bold text-text-primary uppercase">
                2026 Kenya PVC Tank Benchmarks &amp; Dry-Spell Days
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {calc.benchmarksWithDays.map((tank) => {
                  const isRecommended = tank.litres === calc.recommendedLitres;
                  return (
                    <div
                      key={tank.litres}
                      className={`rounded-xl border p-3 text-xs space-y-1.5 ${
                        isRecommended
                          ? "border-emerald-500/50 bg-emerald-500/10"
                          : "border-border bg-bg-card"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 min-w-0">
                        <span className="font-black text-text-primary tabular-nums">
                          {tank.litres.toLocaleString("en-KE")} Litres
                        </span>
                        {isRecommended && (
                          <span className="inline-flex items-center gap-1 text-[0.68rem] font-bold text-emerald-700 dark:text-emerald-400">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Best Fit
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0 text-text-secondary">
                        <span>Retail Benchmark</span>
                        <span className="font-bold text-text-primary tabular-nums">
                          KES {tank.priceKes.toLocaleString("en-KE")} (KES {tank.kesPerLitre}/L)
                        </span>
                      </div>
                      <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0 text-text-secondary">
                        <span>Dry-Spell Days Covered</span>
                        <span className="font-bold text-gold tabular-nums">
                          {tank.daysCovered} days {tank.fillsInMam ? "(fills in MAM)" : "(partial MAM fill)"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-[0.7rem] text-text-muted flex items-start gap-1.5 pt-1">
                <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>
                  Source: {rainData.source}. Budget an extra KES 8,000–18,000 for gutters, fascia
                  brackets, first-flush diverter, and compacted concrete plinth.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
