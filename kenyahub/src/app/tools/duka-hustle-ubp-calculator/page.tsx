"use client";

import { useState, useMemo } from "react";
import { Store, TrendingUp, AlertCircle, Receipt, ShieldCheck } from "lucide-react";
import CustomSelect from "@/components/ui/CustomSelect";
import { getToolBySlug } from "@/lib/tools-registry";
import everydayData from "@/data/kenya-everyday-tools-2026.json";

const tool = getToolBySlug("duka-hustle-ubp-calculator")!;
const ubpData = everydayData.dukaUbp;

function formatKes(value: number): string {
  return `KES ${Math.round(value).toLocaleString("en-KE")}`;
}

export default function DukaHustleUbpCalculatorPage() {
  const initialPreset = ubpData.hustlePresets[0];
  const [presetId, setPresetId] = useState<string>(initialPreset.id);
  const [tierId, setTierId] = useState<string>(initialPreset.defaultTierId);
  const [stockCostStr, setStockCostStr] = useState<string>(
    String(Math.round(initialPreset.dailySalesBenchmarkKes * (1 - initialPreset.grossMarginPct / 100)))
  );
  const [markupPctStr, setMarkupPctStr] = useState<string>(
    String(Math.round((initialPreset.grossMarginPct / (100 - initialPreset.grossMarginPct)) * 100))
  );
  const [spoilagePctStr, setSpoilagePctStr] = useState<string>(String(initialPreset.spoilagePct));
  const [dailyExpensesStr, setDailyExpensesStr] = useState<string>(
    String(Math.round((initialPreset.monthlyRentKes + initialPreset.monthlyUtilitiesKes) / 26))
  );
  const [batchUnitsStr, setBatchUnitsStr] = useState<string>("50");
  const [workingDaysStr, setWorkingDaysStr] = useState<string>("26");
  const [selectedAddons, setSelectedAddons] = useState<Record<number, boolean>>({
    0: true,
    1: false,
    2: false,
  });

  const handleSelectPreset = (nextId: string) => {
    setPresetId(nextId);
    const p = ubpData.hustlePresets.find((item) => item.id === nextId);
    if (!p) return;
    setTierId(p.defaultTierId);
    const estStock = Math.round(p.dailySalesBenchmarkKes * (1 - p.grossMarginPct / 100));
    const estMarkup = Math.round((p.grossMarginPct / (100 - p.grossMarginPct)) * 100);
    const estDailyExp = Math.round((p.monthlyRentKes + p.monthlyUtilitiesKes) / 26);
    setStockCostStr(String(estStock));
    setMarkupPctStr(String(estMarkup));
    setSpoilagePctStr(String(p.spoilagePct));
    setDailyExpensesStr(String(estDailyExp));
  };

  const selectedTier = useMemo(
    () => ubpData.nairobiUbpTiers.find((t) => t.id === tierId) ?? ubpData.nairobiUbpTiers[0],
    [tierId]
  );

  const calc = useMemo(() => {
    const stockCost = Math.max(0, Number(stockCostStr.replace(/,/g, "")) || 0);
    const markupPct = Math.max(0, Number(markupPctStr) || 0);
    const spoilagePct = Math.max(0, Math.min(95, Number(spoilagePctStr) || 0));
    const dailyExpenses = Math.max(0, Number(dailyExpensesStr.replace(/,/g, "")) || 0);
    const batchUnits = Math.max(1, Number(batchUnitsStr) || 1);
    const workingDays = Math.max(1, Math.min(31, Number(workingDaysStr) || 26));

    const addonsTotal = ubpData.complianceAddons.reduce(
      (sum, addon, idx) => sum + (selectedAddons[idx] ? addon.typicalKes : 0),
      0
    );
    const annualPermitTotal =
      selectedTier.defaultFeeKes + ubpData.applicationFeeKes + addonsTotal;
    const dailyPermitSinkingFund = annualPermitTotal / (workingDays * 12);

    const grossPotentialSales = stockCost * (1 + markupPct / 100);
    const shrinkageLossKes = grossPotentialSales * (spoilagePct / 100);
    const realizedSales = grossPotentialSales - shrinkageLossKes;

    const totalDailyOutflow = stockCost + dailyExpenses + dailyPermitSinkingFund;
    const trueDailyNetProfit = realizedSales - totalDailyOutflow;
    const monthlyNetProfit = trueDailyNetProfit * workingDays;

    // Effective contribution margin ratio after spoilage:
    // For every KES 1 of stock cost, realized revenue = (1 + m) * (1 - s)
    const revPerStockKes = (1 + markupPct / 100) * (1 - spoilagePct / 100);
    const effectiveGrossMarginRatio =
      revPerStockKes > 1 ? (revPerStockKes - 1) / revPerStockKes : 0;

    const dailyFixedCosts = dailyExpenses + dailyPermitSinkingFund;
    const dailyBreakEvenSales =
      effectiveGrossMarginRatio > 0
        ? dailyFixedCosts / effectiveGrossMarginRatio
        : totalDailyOutflow;

    const sellableUnits = Math.max(1, batchUnits * (1 - spoilagePct / 100));
    const perUnitPriceFloor = totalDailyOutflow / sellableUnits;
    const plannedUnitPrice = realizedSales / sellableUnits;

    return {
      stockCost,
      markupPct,
      spoilagePct,
      dailyExpenses,
      workingDays,
      addonsTotal,
      annualPermitTotal,
      dailyPermitSinkingFund,
      grossPotentialSales,
      shrinkageLossKes,
      realizedSales,
      totalDailyOutflow,
      trueDailyNetProfit,
      monthlyNetProfit,
      dailyBreakEvenSales,
      sellableUnits,
      perUnitPriceFloor,
      plannedUnitPrice,
      isProfitable: trueDailyNetProfit >= 0,
    };
  }, [
    stockCostStr,
    markupPctStr,
    spoilagePctStr,
    dailyExpensesStr,
    batchUnitsStr,
    workingDaysStr,
    selectedTier,
    selectedAddons,
  ]);

  const toggleAddon = (idx: number) => {
    setSelectedAddons((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5">
              <Store className="w-4 h-4 shrink-0" />
              {ubpData.county}
            </span>
          </div>

          {/* Preset & UBP Tier Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="min-w-0">
              <label
                htmlFor="hustle-preset-select"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Hustle / Biashara Preset
              </label>
              <CustomSelect
                id="hustle-preset-select"
                value={presetId}
                onChange={(e) => handleSelectPreset(e.target.value)}
                className="input-field w-full text-xs"
              >
                {ubpData.hustlePresets.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.label} (Typ. {p.grossMarginPct}% margin, {p.spoilagePct}% shrinkage)
                  </option>
                ))}
              </CustomSelect>
            </div>

            <div className="min-w-0">
              <label
                htmlFor="nairobi-ubp-tier"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Nairobi Unified Business Permit (UBP) Tier
              </label>
              <CustomSelect
                id="nairobi-ubp-tier"
                value={tierId}
                onChange={(e) => setTierId(e.target.value)}
                className="input-field w-full text-xs"
              >
                {ubpData.nairobiUbpTiers.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label} — {formatKes(t.defaultFeeKes)}/yr
                  </option>
                ))}
              </CustomSelect>
            </div>
          </div>

          {/* Numeric Inputs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <div>
              <label htmlFor="duka-stock" className="block text-[0.68rem] font-semibold text-text-muted uppercase mb-1">
                Daily Stock Cost (KES)
              </label>
              <input
                id="duka-stock"
                type="text"
                inputMode="numeric"
                value={stockCostStr ? Number(stockCostStr).toLocaleString("en-KE") : ""}
                onChange={(e) => setStockCostStr(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-2.5 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary tabular-nums"
              />
            </div>

            <div>
              <label htmlFor="duka-markup" className="block text-[0.68rem] font-semibold text-text-muted uppercase mb-1">
                Markup (%)
              </label>
              <input
                id="duka-markup"
                type="number"
                min="0"
                max="400"
                value={markupPctStr}
                onChange={(e) => setMarkupPctStr(e.target.value)}
                className="w-full px-2.5 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary tabular-nums"
              />
            </div>

            <div>
              <label htmlFor="duka-spoilage" className="block text-[0.68rem] font-semibold text-text-muted uppercase mb-1">
                Spoilage / Unsold (%)
              </label>
              <input
                id="duka-spoilage"
                type="number"
                min="0"
                max="95"
                value={spoilagePctStr}
                onChange={(e) => setSpoilagePctStr(e.target.value)}
                className="w-full px-2.5 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary tabular-nums"
              />
            </div>

            <div>
              <label htmlFor="duka-expenses" className="block text-[0.68rem] font-semibold text-text-muted uppercase mb-1">
                Daily Rent/Ops (KES)
              </label>
              <input
                id="duka-expenses"
                type="text"
                inputMode="numeric"
                value={dailyExpensesStr ? Number(dailyExpensesStr).toLocaleString("en-KE") : ""}
                onChange={(e) => setDailyExpensesStr(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-2.5 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary tabular-nums"
              />
            </div>

            <div>
              <label htmlFor="duka-units" className="block text-[0.68rem] font-semibold text-text-muted uppercase mb-1">
                Units in Batch
              </label>
              <input
                id="duka-units"
                type="number"
                min="1"
                value={batchUnitsStr}
                onChange={(e) => setBatchUnitsStr(e.target.value)}
                className="w-full px-2.5 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary tabular-nums"
              />
            </div>

            <div>
              <label htmlFor="duka-days" className="block text-[0.68rem] font-semibold text-text-muted uppercase mb-1">
                Open Days / Mo
              </label>
              <input
                id="duka-days"
                type="number"
                min="1"
                max="31"
                value={workingDaysStr}
                onChange={(e) => setWorkingDaysStr(e.target.value)}
                className="w-full px-2.5 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary tabular-nums"
              />
            </div>
          </div>

          {/* Results */}
          <div role="status" aria-live="polite" aria-atomic="true" className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div
                className={`rounded-xl border p-4 min-w-0 ${
                  calc.isProfitable
                    ? "border-emerald-500/40 bg-emerald-500/10"
                    : "border-red-500/45 bg-red-500/10"
                }`}
              >
                <span
                  className={`text-[0.68rem] font-bold uppercase flex items-center gap-1 ${
                    calc.isProfitable
                      ? "text-emerald-700 dark:text-emerald-400"
                      : "text-red-700 dark:text-red-400"
                  }`}
                >
                  {calc.isProfitable ? (
                    <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  )}
                  True Daily Net Profit
                </span>
                <p
                  className={`text-2xl font-black mt-1 tabular-nums whitespace-nowrap ${
                    calc.isProfitable
                      ? "text-emerald-700 dark:text-emerald-400"
                      : "text-red-700 dark:text-red-400"
                  }`}
                >
                  {calc.trueDailyNetProfit < 0 ? "−" : ""}
                  {formatKes(Math.abs(calc.trueDailyNetProfit))}
                </p>
                <p className="text-[0.68rem] text-text-secondary mt-1 tabular-nums">
                  Monthly ({calc.workingDays}d): {calc.monthlyNetProfit < 0 ? "−" : ""}
                  {formatKes(Math.abs(calc.monthlyNetProfit))}
                </p>
              </div>

              <div className="rounded-xl border border-border bg-bg-elevated/40 p-4 min-w-0">
                <span className="text-[0.68rem] font-bold text-text-muted uppercase">
                  Daily Break-Even Sales
                </span>
                <p className="text-2xl font-black text-text-primary mt-1 tabular-nums whitespace-nowrap">
                  {formatKes(calc.dailyBreakEvenSales)}
                </p>
                <p className="text-[0.68rem] text-text-muted mt-1 tabular-nums">
                  Realized sales today: {formatKes(calc.realizedSales)}
                </p>
              </div>

              <div className="rounded-xl border border-gold/45 bg-gold/[0.06] p-4 min-w-0">
                <span className="text-[0.68rem] font-bold text-gold uppercase">
                  Per-Unit Price Floor
                </span>
                <p className="text-2xl font-black text-gold mt-1 tabular-nums whitespace-nowrap">
                  {formatKes(calc.perUnitPriceFloor)}
                </p>
                <p className="text-[0.68rem] text-text-secondary mt-1 tabular-nums">
                  Your price: {formatKes(calc.plannedUnitPrice)} ({calc.sellableUnits.toFixed(0)} sellable units)
                </p>
              </div>

              <div className="rounded-xl border border-border bg-bg-elevated/40 p-4 min-w-0">
                <span className="text-[0.68rem] font-bold text-text-muted uppercase flex items-center gap-1">
                  <Receipt className="w-3.5 h-3.5 shrink-0" /> Daily Permit Sinking Fund
                </span>
                <p className="text-2xl font-black text-text-primary mt-1 tabular-nums whitespace-nowrap">
                  {formatKes(calc.dailyPermitSinkingFund)} / day
                </p>
                <p className="text-[0.68rem] text-text-muted mt-1 tabular-nums">
                  Annual UBP + add-ons: {formatKes(calc.annualPermitTotal)}
                </p>
              </div>
            </div>

            {/* Shrinkage & Daily Cashflow Breakdown */}
            <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 text-xs space-y-2">
              <h2 className="text-sm font-bold text-text-primary">
                Daily Hustle Unit Economics (After Shrinkage &amp; UBP Reserve)
              </h2>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-text-secondary">Gross Potential Sales ({calc.markupPct}% markup on stock)</span>
                <span className="font-bold text-text-primary tabular-nums whitespace-nowrap">
                  {formatKes(calc.grossPotentialSales)}
                </span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-red-600 dark:text-red-400">
                  Less Spoilage / Unsold Shrinkage ({calc.spoilagePct}%)
                </span>
                <span className="font-bold text-red-600 dark:text-red-400 tabular-nums whitespace-nowrap">
                  −{formatKes(calc.shrinkageLossKes)}
                </span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-text-secondary">Less Restocking Cost</span>
                <span className="font-semibold text-text-primary tabular-nums whitespace-nowrap">
                  −{formatKes(calc.stockCost)}
                </span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-text-secondary">Less Daily Rent, Utilities &amp; Transport</span>
                <span className="font-semibold text-text-primary tabular-nums whitespace-nowrap">
                  −{formatKes(calc.dailyExpenses)}
                </span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-text-secondary">Less Daily UBP &amp; Permit Sinking Fund</span>
                <span className="font-semibold text-text-primary tabular-nums whitespace-nowrap">
                  −{formatKes(calc.dailyPermitSinkingFund)}
                </span>
              </div>
            </div>
          </div>

          {/* Nairobi UBP Compliance Add-ons */}
          <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-sm font-bold text-text-primary flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                Nairobi UBP &amp; County Compliance Add-Ons
              </h2>
              <span className="text-xs font-bold text-gold tabular-nums">
                Base UBP {formatKes(selectedTier.defaultFeeKes)} + App {formatKes(ubpData.applicationFeeKes)} + Add-ons {formatKes(calc.addonsTotal)}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {ubpData.complianceAddons.map((addon, idx) => (
                <label
                  key={addon.name}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg border border-border/60 bg-bg-card cursor-pointer text-xs text-text-primary"
                >
                  <input
                    type="checkbox"
                    checked={Boolean(selectedAddons[idx])}
                    onChange={() => toggleAddon(idx)}
                    className="mt-0.5 accent-amber-500 shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="font-semibold leading-snug">{addon.name}</p>
                    <p className="text-[0.68rem] text-text-muted tabular-nums">
                      Typical: {formatKes(addon.typicalKes)}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
