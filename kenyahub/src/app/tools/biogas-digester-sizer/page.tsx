"use client";

import { useState, useMemo } from "react";
import { Flame, Droplets, Sprout, AlertTriangle, CheckCircle2, Info } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import { getToolBySlug } from "@/lib/tools-registry";
import everydayData from "@/data/kenya-everyday-tools-2026.json";

const tool = getToolBySlug("biogas-digester-sizer")!;
const bioData = everydayData.biogas;

export default function BiogasDigesterSizerPage() {
  const [cowsStr, setCowsStr] = useState("3");
  const [grazingMode, setGrazingMode] = useState<"zero" | "semi">("zero");
  const [householdStr, setHouseholdStr] = useState("5");
  const [monthlyFuelSpendStr, setMonthlyFuelSpendStr] = useState("4500");

  const calc = useMemo(() => {
    const cows = Math.max(1, Math.min(30, Math.round(Number(cowsStr) || 1)));
    const household = Math.max(1, Math.min(25, Math.round(Number(householdStr) || 1)));
    const monthlySpendKes = Math.max(
      0,
      Number(monthlyFuelSpendStr.replace(/,/g, "")) || 0
    );

    const collectionFactor = grazingMode === "zero" ? 1.0 : 0.5;
    const effectiveCows = cows * collectionFactor;
    const dailyDungKg = Math.round(effectiveCows * bioData.dungPerCowKgPerDay * 10) / 10;
    const dailyWaterL = Math.round(dailyDungKg); // Standard 1:1 dung-to-water mixing ratio
    const dailyBiogasM3 =
      Math.round(effectiveCows * bioData.gasPerCowPerDayM3 * 100) / 100;
    const dailyBiogasLitres = Math.round(dailyBiogasM3 * 1000);

    // 3 meals per person per day
    const householdDailyDemandLitres = household * 3 * bioData.biogasLitresPerPersonPerMeal;
    const householdDailyDemandM3 = Math.round((householdDailyDemandLitres / 1000) * 100) / 100;
    const cookingCoveragePct =
      householdDailyDemandLitres > 0
        ? Math.min(100, Math.round((dailyBiogasLitres / householdDailyDemandLitres) * 100))
        : 0;

    // Select recommended prefab digester package
    const recommendedKit =
      bioData.prefabKits.find((k) => effectiveCows <= k.maxCows) ||
      bioData.prefabKits[bioData.prefabKits.length - 1];

    const insufficientDung = effectiveCows < bioData.prefabKits[0].minCows;

    // Savings & payback
    const monthlyFuelSavingsKes = Math.round(monthlySpendKes * (cookingCoveragePct / 100));
    const paybackMonths =
      monthlyFuelSavingsKes > 0
        ? Math.ceil(recommendedKit.priceKes / monthlyFuelSavingsKes)
        : null;

    // Fuel equivalents displaced per month (30 days)
    const monthlyBiogasLitres = dailyBiogasLitres * 30;
    const monthlyFirewoodKg = Math.round(
      monthlyBiogasLitres / bioData.biogasLitresPerKgFirewood
    );
    const monthlyCharcoalKg = Math.round(
      monthlyBiogasLitres / bioData.biogasLitresPerKgCharcoal
    );

    // Bioslurry output: ~1:1 dung + water input = ~2x dailyDungKg litres/day
    const dailyBioslurryL = Math.round(dailyDungKg + dailyWaterL);
    const monthlyBioslurryL = dailyBioslurryL * 30;
    // Conservative fertilizer replacement value (~KES 1.5 per litre of nutrient-rich bioslurry)
    const monthlyBioslurryValueKes = Math.round(monthlyBioslurryL * 1.5);

    return {
      cows,
      effectiveCows,
      household,
      dailyDungKg,
      dailyWaterL,
      dailyBiogasM3,
      householdDailyDemandM3,
      cookingCoveragePct,
      recommendedKit,
      insufficientDung,
      monthlyFuelSavingsKes,
      paybackMonths,
      monthlyFirewoodKg,
      monthlyCharcoalKg,
      dailyBioslurryL,
      monthlyBioslurryL,
      monthlyBioslurryValueKes,
    };
  }, [cowsStr, grazingMode, householdStr, monthlyFuelSpendStr]);

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">
          {/* Grazing System Toggle */}
          <div className="flex flex-wrap gap-2 mb-5">
            <button
              type="button"
              aria-pressed={grazingMode === "zero"}
              onClick={() => setGrazingMode("zero")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold border cursor-pointer ${
                grazingMode === "zero"
                  ? "bg-gold text-kenya-black border-gold"
                  : "bg-bg-elevated text-text-secondary border-border"
              }`}
            >
              Zero-Grazed Cows (100% Dung Collected)
            </button>
            <button
              type="button"
              aria-pressed={grazingMode === "semi"}
              onClick={() => setGrazingMode("semi")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold border cursor-pointer ${
                grazingMode === "semi"
                  ? "bg-gold text-kenya-black border-gold"
                  : "bg-bg-elevated text-text-secondary border-border"
              }`}
            >
              Semi-Grazed / Night Boma (50% Dung)
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div>
              <label
                htmlFor="bio-cows"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Number of Adult Cows
              </label>
              <input
                id="bio-cows"
                type="number"
                min="1"
                max="30"
                step="1"
                value={cowsStr}
                onChange={(e) => setCowsStr(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>

            <div>
              <label
                htmlFor="bio-household"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Household Size (People)
              </label>
              <input
                id="bio-household"
                type="number"
                min="1"
                max="25"
                step="1"
                value={householdStr}
                onChange={(e) => setHouseholdStr(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>

            <div>
              <label
                htmlFor="bio-fuel-spend"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Monthly Charcoal / Firewood / LPG (KES)
              </label>
              <input
                id="bio-fuel-spend"
                type="text"
                inputMode="numeric"
                value={
                  monthlyFuelSpendStr ? Number(monthlyFuelSpendStr).toLocaleString("en-KE") : ""
                }
                onChange={(e) => setMonthlyFuelSpendStr(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>
          </div>

          <div role="status" aria-live="polite" aria-atomic="true" className="space-y-6">
            {calc.insufficientDung && (
              <div className="rounded-xl border border-amber-500/45 bg-amber-500/10 p-4 text-xs flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div className="space-y-1 min-w-0">
                  <p className="font-bold text-gold">
                    Below Minimum Feedstock Threshold (2 Zero-Grazed Cow Equivalents)
                  </p>
                  <p className="text-text-secondary">
                    Your current herd yields {calc.dailyDungKg} kg dung/day ({calc.effectiveCows}{" "}
                    zero-grazed equivalents). Add pig/poultry manure or stall-feed cows longer to
                    sustain a 6 m³ digester reliably.
                  </p>
                </div>
              </div>
            )}

            {/* Primary KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4">
                <span className="text-[0.68rem] font-bold text-emerald-700 dark:text-emerald-400 uppercase flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5" /> Recommended Digester
                </span>
                <p className="text-2xl font-black text-emerald-700 dark:text-emerald-400 mt-1 tabular-nums">
                  {calc.recommendedKit.sizeM3} m³ Package
                </p>
                <p className="text-[0.72rem] text-text-secondary mt-1 tabular-nums">
                  Est. KES {calc.recommendedKit.priceKes.toLocaleString("en-KE")} &bull;{" "}
                  {calc.recommendedKit.householdFit}
                </p>
              </div>

              <div className="rounded-xl border border-amber-500/45 bg-amber-500/[0.04] p-4">
                <span className="text-[0.68rem] font-bold text-gold uppercase">
                  Monthly Savings &amp; Payback
                </span>
                <p className="text-2xl font-black text-gold mt-1 tabular-nums">
                  KES {calc.monthlyFuelSavingsKes.toLocaleString("en-KE")}/mo
                </p>
                <p className="text-[0.72rem] text-text-secondary mt-1 tabular-nums">
                  {calc.paybackMonths !== null
                    ? `Payback in ~${calc.paybackMonths} months (${calc.cookingCoveragePct}% fuel replaced)`
                    : "Enter monthly fuel spend for payback"}
                </p>
              </div>

              <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
                <span className="text-[0.68rem] font-bold text-text-muted uppercase flex items-center gap-1">
                  <Droplets className="w-3.5 h-3.5" /> Daily Yield &amp; Mixing
                </span>
                <p className="text-2xl font-black text-text-primary mt-1 tabular-nums">
                  {calc.dailyBiogasM3} m³ / day
                </p>
                <p className="text-[0.72rem] text-text-muted mt-1 tabular-nums">
                  Mix {calc.dailyDungKg} kg dung + {calc.dailyWaterL} L water (1:1)
                </p>
              </div>
            </div>

            {/* Digester Package Comparison */}
            <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 space-y-3">
              <h2 className="text-xs font-bold text-text-primary uppercase">
                Kenya Prefab Biogas Digester Packages (2026)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {bioData.prefabKits.map((kit) => {
                  const isSelected = kit.id === calc.recommendedKit.id;
                  return (
                    <div
                      key={kit.id}
                      className={`rounded-xl border p-3 text-xs space-y-1.5 ${
                        isSelected
                          ? "border-emerald-500/50 bg-emerald-500/10"
                          : "border-border bg-bg-card"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 min-w-0">
                        <span className="font-black text-text-primary">{kit.sizeM3} m³ Kit</span>
                        {isSelected && (
                          <span className="inline-flex items-center gap-1 text-[0.68rem] font-bold text-emerald-700 dark:text-emerald-400">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Match
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0 text-text-secondary">
                        <span>Cost</span>
                        <span className="font-bold text-text-primary tabular-nums">
                          KES {kit.priceKes.toLocaleString("en-KE")}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0 text-text-secondary">
                        <span>Cows Needed</span>
                        <span className="font-semibold text-text-primary tabular-nums">
                          {kit.minCows}–{kit.maxCows} cows
                        </span>
                      </div>
                      <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0 text-text-secondary">
                        <span>Output</span>
                        <span className="font-semibold text-gold tabular-nums">
                          ~{kit.dailyGasM3} m³/day ({kit.householdFit})
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Fuel Displacement & Bioslurry Value */}
            <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 text-xs space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 min-w-0 mb-1">
                <h2 className="font-bold text-text-primary flex items-center gap-1.5">
                  <Sprout className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  Fuel Displaced &amp; Organic Bioslurry Value
                </h2>
                <span className="text-[0.68rem] font-semibold text-text-muted tabular-nums">
                  Household demand: {calc.householdDailyDemandM3} m³/day
                </span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0">
                <span className="text-text-secondary">Equivalent Firewood Displaced / Month</span>
                <span className="font-bold text-text-primary tabular-nums whitespace-nowrap">
                  {calc.monthlyFirewoodKg.toLocaleString("en-KE")} kg / mo
                </span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0">
                <span className="text-text-secondary">Equivalent Charcoal Displaced / Month</span>
                <span className="font-bold text-text-primary tabular-nums whitespace-nowrap">
                  {calc.monthlyCharcoalKg.toLocaleString("en-KE")} kg / mo
                </span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0">
                <span className="text-text-secondary">
                  Daily Organic Bioslurry Output ({calc.monthlyBioslurryL.toLocaleString("en-KE")} L/mo)
                </span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400 tabular-nums whitespace-nowrap">
                  {calc.dailyBioslurryL.toLocaleString("en-KE")} L / day (~KES{" "}
                  {calc.monthlyBioslurryValueKes.toLocaleString("en-KE")}/mo fertilizer value)
                </span>
              </div>
              <p className="text-[0.7rem] text-text-muted flex items-start gap-1.5 pt-2">
                <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>Source: {bioData.source}.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
