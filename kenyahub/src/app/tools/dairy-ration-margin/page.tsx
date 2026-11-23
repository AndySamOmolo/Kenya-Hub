"use client";

import { useState, useMemo } from "react";
import { Milk, Droplets, AlertTriangle, TrendingUp, Info } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import CustomSelect from "@/components/ui/CustomSelect";
import { getToolBySlug } from "@/lib/tools-registry";
import everydayData from "@/data/kenya-everyday-tools-2026.json";

const tool = getToolBySlug("dairy-ration-margin")!;
const dairyData = everydayData.dairyRation;

type RoughageType = "napier" | "silage" | "hay";

const ROUGHAGE_OPTIONS: {
  id: RoughageType;
  label: string;
  mealSavingsFactor: number;
  forageMultiplier: number;
  note: string;
}[] = [
  {
    id: "napier",
    label: "Fresh Napier Grass",
    mealSavingsFactor: 0,
    forageMultiplier: 1.0,
    note: "Standard chopped Napier (85% moisture); full dairy meal supplementation needed.",
  },
  {
    id: "silage",
    label: "Maize Silage (25% Meal Saving)",
    mealSavingsFactor: dairyData.silageSavingsFactor,
    forageMultiplier: 0.45,
    note: "High-energy fermented maize silage cuts concentrate demand by 25%.",
  },
  {
    id: "hay",
    label: "Rhodes Grass / Lucerne Hay",
    mealSavingsFactor: 0.1,
    forageMultiplier: 0.18,
    note: "Dry roughage (~85% DM); provide ad-lib clean water and mineral lick.",
  },
];

export default function DairyRationMarginPage() {
  const [breedId, setBreedId] = useState(dairyData.breeds[0].id);
  const [dailyMilkStr, setDailyMilkStr] = useState(String(dairyData.breeds[0].typicalYieldL));
  const [roughage, setRoughage] = useState<RoughageType>("napier");
  const [mealPriceStr, setMealPriceStr] = useState(String(dairyData.dairyMealPricePerKgKes));
  const [milkPayoutStr, setMilkPayoutStr] = useState(String(dairyData.milkPayoutBenchmarkKesPerL));
  const [actualMealFedStr, setActualMealFedStr] = useState("");

  const handleBreedChange = (id: string) => {
    setBreedId(id);
    const nextBreed = dairyData.breeds.find((b) => b.id === id) || dairyData.breeds[0];
    setDailyMilkStr(String(nextBreed.typicalYieldL));
  };

  const calc = useMemo(() => {
    const breed = dairyData.breeds.find((b) => b.id === breedId) || dairyData.breeds[0];
    const rough = ROUGHAGE_OPTIONS.find((r) => r.id === roughage) || ROUGHAGE_OPTIONS[0];
    const milkL = Math.max(1, Number(dailyMilkStr) || 1);
    const mealPrice = Math.max(10, Number(mealPriceStr) || dairyData.dairyMealPricePerKgKes);
    const milkPayout = Math.max(10, Number(milkPayoutStr) || dairyData.milkPayoutBenchmarkKesPerL);

    // KALRO rule: basal forage covers ~5 L; above 5 L feed ~0.4 kg dairy meal per extra litre (min 1 kg)
    const baseRecommendedMealKg =
      milkL <= 5 ? 1 : Math.round((1 + (milkL - 5) * 0.4) * 10) / 10;
    const recommendedMealKg =
      Math.round(baseRecommendedMealKg * (1 - rough.mealSavingsFactor) * 10) / 10;

    const customFed = actualMealFedStr.trim() !== "" ? Math.max(0, Number(actualMealFedStr) || 0) : null;
    const activeMealKg = customFed !== null ? customFed : recommendedMealKg;

    const amMealKg = Math.round((activeMealKg / 2) * 10) / 10;
    const pmMealKg = Math.round((activeMealKg - amMealKg) * 10) / 10;

    const dailyForageKg = Math.round(breed.dailyForageKg * rough.forageMultiplier);
    // Water: breed baseline + ~3L per litre of milk above 10L
    const dailyWaterL = Math.max(
      dairyData.waterBaselineLitres,
      Math.round(breed.dailyWaterL + Math.max(0, milkL - 10) * 3)
    );

    const mealCostDay = Math.round(activeMealKg * mealPrice);
    const forageCostDay = Math.round(breed.dailyForageKg * dairyData.forageCostPerKgKes * 0.5);
    const mineralCostDay = dairyData.mineralSaltCostPerDayKes;
    const totalFeedCostDay = mealCostDay + forageCostDay + mineralCostDay;

    const feedCostPerLitre = Math.round((totalFeedCostDay / milkL) * 10) / 10;
    const dailyRevenue = Math.round(milkL * milkPayout);
    const dailyNetProfit = dailyRevenue - totalFeedCostDay;
    const monthlyNetProfit = dailyNetProfit * 30;

    const isOverFeeding =
      activeMealKg > recommendedMealKg + 1 ||
      activeMealKg > 8 ||
      (customFed !== null && customFed > recommendedMealKg * 1.15);
    const isAcidosisRisk = activeMealKg > 6;

    return {
      breed,
      rough,
      milkL,
      recommendedMealKg,
      activeMealKg,
      amMealKg,
      pmMealKg,
      dailyForageKg,
      dailyWaterL,
      mealCostDay,
      forageCostDay,
      mineralCostDay,
      totalFeedCostDay,
      feedCostPerLitre,
      dailyRevenue,
      dailyNetProfit,
      monthlyNetProfit,
      isOverFeeding,
      isAcidosisRisk,
    };
  }, [breedId, dailyMilkStr, roughage, mealPriceStr, milkPayoutStr, actualMealFedStr]);

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">
          {/* Roughage Toggle */}
          <div className="flex flex-wrap gap-2 mb-5">
            {ROUGHAGE_OPTIONS.map((r) => (
              <button
                key={r.id}
                type="button"
                aria-pressed={roughage === r.id}
                onClick={() => setRoughage(r.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold border cursor-pointer ${
                  roughage === r.id
                    ? "bg-gold text-kenya-black border-gold"
                    : "bg-bg-elevated text-text-secondary border-border"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            <div>
              <label
                htmlFor="dairy-breed"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Dairy Breed
              </label>
              <CustomSelect
                id="dairy-breed"
                value={breedId}
                onChange={(e) => handleBreedChange(e.target.value)}
                className="input-field w-full text-xs"
              >
                {dairyData.breeds.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.label} (~{b.bodyWeightKg} kg LW)
                  </option>
                ))}
              </CustomSelect>
            </div>

            <div>
              <label
                htmlFor="dairy-yield"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Daily Milk Yield (Litres)
              </label>
              <input
                id="dairy-yield"
                type="number"
                min="2"
                max="50"
                step="1"
                value={dailyMilkStr}
                onChange={(e) => setDailyMilkStr(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>

            <div>
              <label
                htmlFor="dairy-meal-price"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Dairy Meal Price (KES / kg)
              </label>
              <input
                id="dairy-meal-price"
                type="number"
                min="20"
                max="150"
                step="1"
                value={mealPriceStr}
                onChange={(e) => setMealPriceStr(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>

            <div>
              <label
                htmlFor="dairy-milk-payout"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Co-op / Milk Payout (KES / L)
              </label>
              <input
                id="dairy-milk-payout"
                type="number"
                min="20"
                max="150"
                step="1"
                value={milkPayoutStr}
                onChange={(e) => setMilkPayoutStr(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="dairy-actual-meal"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Actual Dairy Meal Fed (Optional Override — Leave Blank for KALRO Target{" "}
                {calc.recommendedMealKg} kg)
              </label>
              <input
                id="dairy-actual-meal"
                type="number"
                min="0"
                max="16"
                step="0.5"
                placeholder={`Auto: ${calc.recommendedMealKg} kg/day`}
                value={actualMealFedStr}
                onChange={(e) => setActualMealFedStr(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>
          </div>

          <div role="status" aria-live="polite" aria-atomic="true" className="space-y-6">
            {/* Over-Feeding / Acidosis Alert */}
            {(calc.isOverFeeding || calc.isAcidosisRisk) && (
              <div className="rounded-xl border border-rose-500/45 bg-rose-500/10 p-4 text-xs flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div className="space-y-1 min-w-0">
                  <p className="font-bold text-rose-600 dark:text-rose-400">
                    {calc.isOverFeeding
                      ? "Over-Feeding / Margin Erosion Alert"
                      : "High Concentrate Load (> 6 kg/day) — Rumen Acidosis Precaution"}
                  </p>
                  <p className="text-text-secondary">
                    {calc.isOverFeeding
                      ? `Feeding ${calc.activeMealKg} kg/day exceeds the KALRO target (${calc.recommendedMealKg} kg/day) for ${calc.milkL} L milk. Excess concentrate inflates cost per litre without proportional milk gain.`
                      : `Split ${calc.activeMealKg} kg/day into 3 smaller feeds (AM, Midday, PM) and add rumen buffer (sodium bicarbonate) to prevent sub-acute ruminal acidosis (SARA).`}
                  </p>
                </div>
              </div>
            )}

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4">
                <span className="text-[0.68rem] font-bold text-emerald-700 dark:text-emerald-400 uppercase flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" /> Monthly Net Profit (30d)
                </span>
                <p
                  className={`text-2xl font-black mt-1 tabular-nums ${
                    calc.monthlyNetProfit >= 0
                      ? "text-emerald-700 dark:text-emerald-400"
                      : "text-rose-600 dark:text-rose-400"
                  }`}
                >
                  KES {calc.monthlyNetProfit.toLocaleString("en-KE")}
                </p>
                <p className="text-[0.72rem] text-text-secondary mt-1 tabular-nums">
                  Daily: KES {calc.dailyNetProfit.toLocaleString("en-KE")} / cow
                </p>
              </div>

              <div className="rounded-xl border border-amber-500/45 bg-amber-500/[0.04] p-4">
                <span className="text-[0.68rem] font-bold text-gold uppercase flex items-center gap-1">
                  <Milk className="w-3.5 h-3.5" /> Feed Cost per Litre
                </span>
                <p className="text-2xl font-black text-gold mt-1 tabular-nums">
                  KES {calc.feedCostPerLitre.toLocaleString("en-KE")}
                </p>
                <p className="text-[0.72rem] text-text-secondary mt-1 tabular-nums">
                  vs KES {milkPayoutStr} payout ({Math.round((calc.feedCostPerLitre / Math.max(1, Number(milkPayoutStr))) * 100)}% of revenue)
                </p>
              </div>

              <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
                <span className="text-[0.68rem] font-bold text-text-muted uppercase flex items-center gap-1">
                  <Droplets className="w-3.5 h-3.5" /> Daily Water Requirement
                </span>
                <p className="text-2xl font-black text-text-primary mt-1 tabular-nums">
                  {calc.dailyWaterL} Litres
                </p>
                <p className="text-[0.72rem] text-text-muted mt-1 tabular-nums">
                  Clean ad-lib water for {calc.breed.label} ({calc.milkL} L/day)
                </p>
              </div>
            </div>

            {/* AM / PM Feeding Schedule */}
            <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 text-xs space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2 min-w-0">
                <h2 className="font-bold text-text-primary">
                  Daily AM / PM Feeding Schedule ({calc.breed.label})
                </h2>
                <span className="text-[0.68rem] font-semibold px-2 py-0.5 rounded-full bg-gold/15 text-gold">
                  {calc.activeMealKg} kg/day dairy meal
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="rounded-xl border border-border bg-bg-card p-3 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 min-w-0">
                    <span className="font-bold text-text-primary">Morning Milking (AM)</span>
                    <span className="font-black text-emerald-700 dark:text-emerald-400 tabular-nums">
                      {calc.amMealKg} kg meal
                    </span>
                  </div>
                  <p className="text-text-secondary">
                    + {Math.round(calc.dailyForageKg / 2)} kg {calc.rough.label.toLowerCase()} &bull; 50 g dairy mineral salt
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-bg-card p-3 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 min-w-0">
                    <span className="font-bold text-text-primary">Evening Milking (PM)</span>
                    <span className="font-black text-emerald-700 dark:text-emerald-400 tabular-nums">
                      {calc.pmMealKg} kg meal
                    </span>
                  </div>
                  <p className="text-text-secondary">
                    + {calc.dailyForageKg - Math.round(calc.dailyForageKg / 2)} kg{" "}
                    {calc.rough.label.toLowerCase()} &bull; 50 g dairy mineral salt
                  </p>
                </div>
              </div>
              <p className="text-[0.7rem] text-text-muted">{calc.rough.note}</p>
            </div>

            {/* Daily Economics Breakdown */}
            <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 text-xs space-y-1.5">
              <h2 className="font-bold text-text-primary mb-2">Daily Unit Economics (Per Cow)</h2>
              <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0">
                <span className="text-text-secondary">
                  Milk Revenue ({calc.milkL} L × KES {milkPayoutStr})
                </span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400 tabular-nums whitespace-nowrap">
                  KES {calc.dailyRevenue.toLocaleString("en-KE")}
                </span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0">
                <span className="text-text-secondary">
                  Dairy Meal ({calc.activeMealKg} kg × KES {mealPriceStr})
                </span>
                <span className="font-semibold tabular-nums whitespace-nowrap">
                  -KES {calc.mealCostDay.toLocaleString("en-KE")}
                </span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0">
                <span className="text-text-secondary">
                  Basal Roughage / Forage Allocation
                </span>
                <span className="font-semibold tabular-nums whitespace-nowrap">
                  -KES {calc.forageCostDay.toLocaleString("en-KE")}
                </span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0">
                <span className="text-text-secondary">High-Phosphorus Dairy Mineral Salt</span>
                <span className="font-semibold tabular-nums whitespace-nowrap">
                  -KES {calc.mineralCostDay.toLocaleString("en-KE")}
                </span>
              </div>
              <div className="pt-2 border-t border-border/60 flex flex-wrap items-baseline justify-between gap-2 min-w-0 font-bold text-text-primary">
                <span>Daily Net Margin</span>
                <span className="tabular-nums whitespace-nowrap">
                  KES {calc.dailyNetProfit.toLocaleString("en-KE")} / day
                </span>
              </div>
              <p className="text-[0.7rem] text-text-muted flex items-start gap-1.5 pt-2">
                <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>Source: {dairyData.source}.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
