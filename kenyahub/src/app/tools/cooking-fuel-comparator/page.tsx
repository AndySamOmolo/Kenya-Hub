"use client";

import { useState, useMemo } from "react";
import { Flame, Zap, Clock, Sparkles, TrendingDown } from "lucide-react";
import CustomSelect from "@/components/ui/CustomSelect";
import { getToolBySlug } from "@/lib/tools-registry";
import everydayData from "@/data/kenya-everyday-tools-2026.json";

const tool = getToolBySlug("cooking-fuel-comparator")!;
const fuelData = everydayData.cookingFuel;
const WEEKS_PER_MONTH = 4.33;

function formatKes(value: number): string {
  return `KES ${Math.round(value).toLocaleString("en-KE")}`;
}

const DEFAULT_COUNTS: Record<string, number> = {
  githeri: 2,
  beans: 2,
  ugali_sukuma: 5,
  rice_stew: 3,
  chapati: 1,
};

export default function CookingFuelComparatorPage() {
  const [householdSize, setHouseholdSize] = useState<number>(4);
  const [dishCounts, setDishCounts] = useState<Record<string, number>>(DEFAULT_COUNTS);
  const [lpgCylinder, setLpgCylinder] = useState<"6kg" | "13kg">("13kg");
  const [lpg6kgStr, setLpg6kgStr] = useState<string>(String(fuelData.fuels.lpg.refill6kgKes));
  const [lpg13kgStr, setLpg13kgStr] = useState<string>(String(fuelData.fuels.lpg.refill13kgKes));
  const [charcoalDebeStr, setCharcoalDebeStr] = useState<string>(String(fuelData.fuels.charcoal.debeKes));
  const [keroseneStr, setKeroseneStr] = useState<string>(String(fuelData.fuels.kerosene.kesPerLitre));
  const [kplcStr, setKplcStr] = useState<string>(String(fuelData.fuels.electricityEpc.kesPerKwh));
  const [epcPriceStr, setEpcPriceStr] = useState<string>(String(fuelData.epcPriceBenchmarkKes));
  const [baselineFuel, setBaselineFuel] = useState<"charcoal" | "lpg" | "kerosene">("lpg");

  const calc = useMemo(() => {
    const portionScale = Math.max(0.5, householdSize / 4);
    const lpg6 = Math.max(0, Number(lpg6kgStr) || 0);
    const lpg13 = Math.max(0, Number(lpg13kgStr) || 0);
    const lpgPerKg = lpgCylinder === "6kg" ? lpg6 / 6 : lpg13 / 13;
    const charcoalPerKg = (Math.max(0, Number(charcoalDebeStr) || 0)) / fuelData.fuels.charcoal.debeKg;
    const kerosenePerL = Math.max(0, Number(keroseneStr) || 0);
    const kplcPerKwh = Math.max(0, Number(kplcStr) || 0);
    const epcPrice = Math.max(0, Number(epcPriceStr) || 0);

    const dishBreakdown = fuelData.dishes.map((dish) => {
      const count = Math.max(0, dishCounts[dish.id] ?? 0);
      const lpgDish = dish.lpgKg * lpgPerKg * portionScale;
      const charcoalDish = dish.charcoalKg * charcoalPerKg * portionScale;
      const keroseneDish = dish.keroseneL * kerosenePerL * portionScale;
      const epcDish = dish.epcKwh * kplcPerKwh * portionScale;

      // Optimal Kenyan Fuel-Stacking Plan:
      // Heavy-boil dishes (githeri, beans, rice_stew) on EPC; quick/flatbread dishes (ugali_sukuma, chapati) on LPG
      const bestFuelForStack =
        dish.id === "chapati" || dish.id === "ugali_sukuma" ? "LPG" : "EPC";

      return {
        ...dish,
        count,
        lpgDish,
        charcoalDish,
        keroseneDish,
        epcDish,
        bestFuelForStack,
      };
    });

    const weeklyTotals = dishBreakdown.reduce(
      (totals, dish) => ({
        lpg: totals.lpg + dish.lpgDish * dish.count,
        charcoal: totals.charcoal + dish.charcoalDish * dish.count,
        kerosene: totals.kerosene + dish.keroseneDish * dish.count,
        epc: totals.epc + dish.epcDish * dish.count,
        stack:
          totals.stack +
          (dish.bestFuelForStack === "LPG" ? dish.lpgDish : dish.epcDish) * dish.count,
        epcMins: totals.epcMins + dish.epcMinutes * dish.count,
        charcoalMins: totals.charcoalMins + dish.charcoalMinutes * dish.count,
      }),
      { lpg: 0, charcoal: 0, kerosene: 0, epc: 0, stack: 0, epcMins: 0, charcoalMins: 0 }
    );
    const { lpg: weeklyLpg, charcoal: weeklyCharcoal, kerosene: weeklyKerosene, epc: weeklyEpc, stack: weeklyStack, epcMins: weeklyEpcMins, charcoalMins: weeklyCharcoalMins } = weeklyTotals;

    const monthlyLpg = weeklyLpg * WEEKS_PER_MONTH;
    const monthlyCharcoal = weeklyCharcoal * WEEKS_PER_MONTH;
    const monthlyKerosene = weeklyKerosene * WEEKS_PER_MONTH;
    const monthlyEpc = weeklyEpc * WEEKS_PER_MONTH;
    const monthlyStack = weeklyStack * WEEKS_PER_MONTH;

    const options = [
      {
        id: "epc",
        label: "Electric Pressure Cooker (EPC)",
        monthlyKes: monthlyEpc,
        unitNote: `KES ${kplcPerKwh.toFixed(1)}/kWh`,
        accent: "bg-emerald-500",
      },
      {
        id: "lpg",
        label: `LPG Gas (${lpgCylinder} refill)`,
        monthlyKes: monthlyLpg,
        unitNote: `KES ${lpgPerKg.toFixed(0)}/kg`,
        accent: "bg-sky-500",
      },
      {
        id: "charcoal",
        label: "Charcoal (Debe)",
        monthlyKes: monthlyCharcoal,
        unitNote: `KES ${charcoalPerKg.toFixed(0)}/kg`,
        accent: "bg-amber-500",
      },
      {
        id: "kerosene",
        label: "Kerosene Stove",
        monthlyKes: monthlyKerosene,
        unitNote: `KES ${kerosenePerL.toFixed(1)}/L`,
        accent: "bg-red-500",
      },
    ].sort((a, b) => a.monthlyKes - b.monthlyKes);

    const maxMonthly = Math.max(...options.map((o) => o.monthlyKes), 1);

    const baselineMonthly =
      baselineFuel === "charcoal"
        ? monthlyCharcoal
        : baselineFuel === "kerosene"
        ? monthlyKerosene
        : monthlyLpg;

    const monthlySavingsVsBaseline = Math.max(0, baselineMonthly - monthlyEpc);
    const epcPaybackMonths =
      monthlySavingsVsBaseline > 0 ? epcPrice / monthlySavingsVsBaseline : null;

    const stackSavingsVsBaseline = Math.max(0, baselineMonthly - monthlyStack);
    const monthlyHoursSaved = Math.max(
      0,
      ((weeklyCharcoalMins - weeklyEpcMins) * WEEKS_PER_MONTH) / 60
    );

    return {
      portionScale,
      lpgPerKg,
      charcoalPerKg,
      options,
      maxMonthly,
      monthlyLpg,
      monthlyCharcoal,
      monthlyKerosene,
      monthlyEpc,
      monthlyStack,
      baselineMonthly,
      monthlySavingsVsBaseline,
      epcPaybackMonths,
      stackSavingsVsBaseline,
      monthlyHoursSaved,
      dishBreakdown,
    };
  }, [
    householdSize,
    dishCounts,
    lpgCylinder,
    lpg6kgStr,
    lpg13kgStr,
    charcoalDebeStr,
    keroseneStr,
    kplcStr,
    epcPriceStr,
    baselineFuel,
  ]);

  const updateDishCount = (id: string, delta: number) => {
    setDishCounts((prev) => ({
      ...prev,
      [id]: Math.max(0, Math.min(21, (prev[id] ?? 0) + delta)),
    }));
  };

  return (
    <>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs space-y-6">
          {/* Household & Cylinder Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="min-w-0">
              <label
                htmlFor="hh-size-select"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Household Size
              </label>
              <CustomSelect
                id="hh-size-select"
                value={String(householdSize)}
                onChange={(e) => setHouseholdSize(Number(e.target.value))}
                className="input-field w-full text-xs"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={String(n)}>
                    {n} {n === 1 ? "Person" : "People"} ({Math.max(0.5, n / 4).toFixed(2)}× portions)
                  </option>
                ))}
              </CustomSelect>
            </div>

            <div className="min-w-0">
              <label
                htmlFor="lpg-cylinder-select"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                LPG Cylinder Size Used
              </label>
              <CustomSelect
                id="lpg-cylinder-select"
                value={lpgCylinder}
                onChange={(e) => setLpgCylinder(e.target.value as "6kg" | "13kg")}
                className="input-field w-full text-xs"
              >
                <option value="6kg">6 kg Refill (Meko)</option>
                <option value="13kg">13 kg Refill (Standard)</option>
              </CustomSelect>
            </div>

            <div className="min-w-0">
              <label
                htmlFor="baseline-fuel-select"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Compare EPC Payback Against
              </label>
              <CustomSelect
                id="baseline-fuel-select"
                value={baselineFuel}
                onChange={(e) => setBaselineFuel(e.target.value as "charcoal" | "lpg" | "kerosene")}
                className="input-field w-full text-xs"
              >
                <option value="lpg">LPG Gas</option>
                <option value="charcoal">Charcoal</option>
                <option value="kerosene">Kerosene</option>
              </CustomSelect>
            </div>
          </div>

          {/* Weekly Kenyan Dish Counts */}
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-sm font-bold text-text-primary flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-gold shrink-0" />
                Weekly Kenyan Cooking Schedule (Times / Week)
              </h2>
              <span className="text-xs text-text-muted">
                Scaled to {householdSize} {householdSize === 1 ? "person" : "people"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {fuelData.dishes.map((dish) => {
                const count = dishCounts[dish.id] ?? 0;
                return (
                  <div
                    key={dish.id}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-border bg-bg-elevated/40 px-3.5 py-2.5"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-text-primary">{dish.label}</p>
                      <p className="text-[0.68rem] text-text-muted">
                        EPC {dish.epcMinutes}m vs Charcoal {dish.charcoalMinutes}m
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => updateDishCount(dish.id, -1)}
                        aria-label={`Decrease ${dish.label}`}
                        className="w-7 h-7 rounded-lg border border-border bg-bg-card text-text-primary font-bold hover:border-gold cursor-pointer"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm font-black text-text-primary tabular-nums">
                        {count}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateDishCount(dish.id, 1)}
                        aria-label={`Increase ${dish.label}`}
                        className="w-7 h-7 rounded-lg border border-border bg-bg-card text-text-primary font-bold hover:border-gold cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Editable Local Fuel Prices */}
          <div className="space-y-2.5">
            <h2 className="text-sm font-bold text-text-primary">
              Editable Local Prices ({fuelData.benchmarkDate} Kenya Benchmarks)
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              <div>
                <label htmlFor="price-lpg6" className="block text-[0.68rem] font-semibold text-text-muted uppercase mb-1">
                  6kg LPG (KES)
                </label>
                <input
                  id="price-lpg6"
                  type="number"
                  min="0"
                  value={lpg6kgStr}
                  onChange={(e) => setLpg6kgStr(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary tabular-nums"
                />
              </div>
              <div>
                <label htmlFor="price-lpg13" className="block text-[0.68rem] font-semibold text-text-muted uppercase mb-1">
                  13kg LPG (KES)
                </label>
                <input
                  id="price-lpg13"
                  type="number"
                  min="0"
                  value={lpg13kgStr}
                  onChange={(e) => setLpg13kgStr(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary tabular-nums"
                />
              </div>
              <div>
                <label htmlFor="price-charcoal" className="block text-[0.68rem] font-semibold text-text-muted uppercase mb-1">
                  Charcoal Debe
                </label>
                <input
                  id="price-charcoal"
                  type="number"
                  min="0"
                  value={charcoalDebeStr}
                  onChange={(e) => setCharcoalDebeStr(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary tabular-nums"
                />
              </div>
              <div>
                <label htmlFor="price-kerosene" className="block text-[0.68rem] font-semibold text-text-muted uppercase mb-1">
                  Kerosene / L
                </label>
                <input
                  id="price-kerosene"
                  type="number"
                  step="0.01"
                  min="0"
                  value={keroseneStr}
                  onChange={(e) => setKeroseneStr(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary tabular-nums"
                />
              </div>
              <div>
                <label htmlFor="price-kplc" className="block text-[0.68rem] font-semibold text-text-muted uppercase mb-1">
                  KPLC / kWh
                </label>
                <input
                  id="price-kplc"
                  type="number"
                  step="0.1"
                  min="0"
                  value={kplcStr}
                  onChange={(e) => setKplcStr(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary tabular-nums"
                />
              </div>
              <div>
                <label htmlFor="price-epc" className="block text-[0.68rem] font-semibold text-text-muted uppercase mb-1">
                  EPC Unit (KES)
                </label>
                <input
                  id="price-epc"
                  type="number"
                  min="0"
                  value={epcPriceStr}
                  onChange={(e) => setEpcPriceStr(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary tabular-nums"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div role="status" aria-live="polite" aria-atomic="true" className="space-y-5">
            {/* Monthly Cost Bars */}
            <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-sm font-bold text-text-primary">
                  Monthly Fuel Cost Comparison (Side-by-Side)
                </h2>
                <span className="text-[0.68rem] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400">
                  Cheapest: {calc.options[0]?.label}
                </span>
              </div>

              <div className="space-y-3">
                {calc.options.map((opt, idx) => {
                  const pct = Math.max(4, Math.round((opt.monthlyKes / calc.maxMonthly) * 100));
                  return (
                    <div key={opt.id} className="space-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                        <div className="flex flex-wrap items-center gap-2 min-w-0">
                          <span className="font-bold text-text-primary">{opt.label}</span>
                          <span className="text-[0.68rem] text-text-muted">({opt.unitNote})</span>
                          {idx === 0 && (
                            <span className="px-2 py-0.5 rounded-full text-[0.65rem] font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400">
                              Lowest Cost
                            </span>
                          )}
                        </div>
                        <span className="font-black text-text-primary tabular-nums whitespace-nowrap">
                          {formatKes(opt.monthlyKes)} / mo
                        </span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-bg-card border border-border/60 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${opt.accent} transition-all duration-300`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* KPI Cards: Payback, Fuel Stacking, Time Saved */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 min-w-0">
                <span className="text-[0.68rem] font-bold text-emerald-700 dark:text-emerald-400 uppercase flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 shrink-0" /> EPC Payback Period
                </span>
                <p className="text-2xl font-black text-emerald-700 dark:text-emerald-400 mt-1 tabular-nums whitespace-nowrap">
                  {calc.epcPaybackMonths !== null
                    ? `${calc.epcPaybackMonths.toFixed(1)} months`
                    : "N/A"}
                </p>
                <p className="text-[0.68rem] text-text-secondary mt-1 tabular-nums">
                  Saves {formatKes(calc.monthlySavingsVsBaseline)}/mo vs {baselineFuel.toUpperCase()}
                </p>
              </div>

              <div className="rounded-xl border border-gold/45 bg-gold/[0.06] p-4 min-w-0">
                <span className="text-[0.68rem] font-bold text-gold uppercase flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" /> Smart Fuel-Stacking Plan
                </span>
                <p className="text-2xl font-black text-gold mt-1 tabular-nums whitespace-nowrap">
                  {formatKes(calc.monthlyStack)} / mo
                </p>
                <p className="text-[0.68rem] text-text-secondary mt-1 tabular-nums">
                  EPC (boils) + LPG (ugali/chapati) — saves {formatKes(calc.stackSavingsVsBaseline)}/mo
                </p>
              </div>

              <div className="rounded-xl border border-border bg-bg-elevated/40 p-4 min-w-0">
                <span className="text-[0.68rem] font-bold text-text-muted uppercase flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 shrink-0" /> Cooking Time Saved
                </span>
                <p className="text-2xl font-black text-text-primary mt-1 tabular-nums whitespace-nowrap">
                  {calc.monthlyHoursSaved.toFixed(1)} hrs / mo
                </p>
                <p className="text-[0.68rem] text-text-muted mt-1">
                  EPC vs traditional charcoal jiko boiling times
                </p>
              </div>
            </div>

            {/* Fuel-Stacking Dish Strategy */}
            <div className="rounded-xl border border-border bg-bg-elevated/25 p-4 space-y-2.5">
              <h2 className="text-sm font-bold text-text-primary flex items-center gap-1.5">
                <TrendingDown className="w-4 h-4 text-emerald-500 shrink-0" />
                Recommended Kenyan Fuel-Stacking Breakdown (Cost per Dish)
              </h2>
              <div className="space-y-1.5 text-xs">
                {calc.dishBreakdown.map((d) => (
                  <div
                    key={d.id}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border/60 bg-bg-card px-3 py-2"
                  >
                    <div className="min-w-0">
                      <span className="font-semibold text-text-primary">{d.label}</span>
                      <span className="text-text-muted ml-1.5">({d.count}×/wk)</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 tabular-nums">
                      <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
                        EPC: {formatKes(d.epcDish)}
                      </span>
                      <span className="text-text-secondary">
                        LPG: {formatKes(d.lpgDish)}
                      </span>
                      <span className="text-text-muted">
                        Charcoal: {formatKes(d.charcoalDish)}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[0.65rem] font-bold bg-gold/15 text-gold border border-gold/30">
                        Use {d.bestFuelForStack}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
