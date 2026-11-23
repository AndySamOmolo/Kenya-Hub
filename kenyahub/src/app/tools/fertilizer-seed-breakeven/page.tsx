"use client";

import { useState, useMemo } from "react";
import { Sprout, ShoppingBag, TrendingUp, AlertTriangle, Info } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import CustomSelect from "@/components/ui/CustomSelect";
import { getToolBySlug } from "@/lib/tools-registry";
import everydayData from "@/data/kenya-everyday-tools-2026.json";

const tool = getToolBySlug("fertilizer-seed-breakeven")!;
const fertData = everydayData.fertilizerSeed;

const ACREAGE_PRESETS = ["0.25", "0.5", "1", "2", "5", "10"];

function getCommercialFertPrice(fertType: string): number {
  if (fertType === "DAP") return fertData.fertilizerPrices50kgKes.commercialDap;
  if (fertType === "CAN") return fertData.fertilizerPrices50kgKes.commercialCan;
  if (fertType === "NPK") return fertData.fertilizerPrices50kgKes.commercialNpk;
  return 0;
}

export default function FertilizerSeedBreakevenPage() {
  const [cropId, setCropId] = useState(fertData.crops[0].id);
  const [acreageStr, setAcreageStr] = useState("1");
  const [pricingMode, setPricingMode] = useState<"evoucher" | "commercial">("evoucher");
  const [otherCostsPerAcreStr, setOtherCostsPerAcreStr] = useState(
    String(fertData.crops[0].otherCostsPerAcreKes)
  );
  const [farmgatePriceStr, setFarmgatePriceStr] = useState(
    String(fertData.crops[0].defaultFarmgatePriceKes)
  );

  const handleCropChange = (newId: string) => {
    setCropId(newId);
    const nextCrop = fertData.crops.find((c) => c.id === newId) || fertData.crops[0];
    setOtherCostsPerAcreStr(String(nextCrop.otherCostsPerAcreKes));
    setFarmgatePriceStr(String(nextCrop.defaultFarmgatePriceKes));
  };

  const calc = useMemo(() => {
    const crop = fertData.crops.find((c) => c.id === cropId) || fertData.crops[0];
    const acres = Math.max(0.25, Number(acreageStr) || 0.25);
    const otherPerAcre = Math.max(0, Number(otherCostsPerAcreStr.replace(/,/g, "")) || 0);
    const farmgatePrice = Math.max(1, Number(farmgatePriceStr.replace(/,/g, "")) || crop.defaultFarmgatePriceKes);

    const seedKg = Math.round(crop.seedKgPerAcre * acres * 10) / 10;
    const seedCost = Math.round(seedKg * crop.seedPricePerKgKes);

    const plantingBags = Math.round(crop.plantingBagsPerAcre * acres * 100) / 100;
    const topDressBags = Math.round(crop.topDressBagsPerAcre * acres * 100) / 100;
    const totalFertBags = Math.round((plantingBags + topDressBags) * 100) / 100;

    const commercialPlantingUnit = getCommercialFertPrice(crop.plantingFertType);
    const commercialTopDressUnit = getCommercialFertPrice(crop.topDressFertType);

    const activePlantingUnit =
      pricingMode === "evoucher"
        ? fertData.fertilizerPrices50kgKes.evoucher
        : commercialPlantingUnit;
    const activeTopDressUnit =
      pricingMode === "evoucher"
        ? fertData.fertilizerPrices50kgKes.evoucher
        : commercialTopDressUnit;

    const plantingFertCost = Math.round(plantingBags * activePlantingUnit);
    const topDressFertCost = Math.round(topDressBags * activeTopDressUnit);
    const totalFertCost = plantingFertCost + topDressFertCost;

    const commercialTotalFertCost = Math.round(
      plantingBags * commercialPlantingUnit + topDressBags * commercialTopDressUnit
    );
    const evoucherTotalFertCost = Math.round(
      totalFertBags * fertData.fertilizerPrices50kgKes.evoucher
    );
    const subsidySavings = Math.max(0, commercialTotalFertCost - evoucherTotalFertCost);

    const otherCostsTotal = Math.round(otherPerAcre * acres);
    const grandTotalCost = seedCost + totalFertCost + otherCostsTotal;

    const tiers = (
      [
        { key: "low", label: "Low Yield", perAcre: crop.yieldRange.low },
        { key: "avg", label: "Medium Yield", perAcre: crop.yieldRange.avg },
        { key: "high", label: "High Yield", perAcre: crop.yieldRange.high },
      ] as const
    ).map((t) => {
      const totalUnits = Math.round(t.perAcre * acres);
      const breakevenPerUnit = totalUnits > 0 ? Math.ceil(grandTotalCost / totalUnits) : 0;
      const grossRevenue = totalUnits * farmgatePrice;
      const netProfit = grossRevenue - grandTotalCost;
      const marginVsNcpb =
        crop.id === "maize" ? fertData.ncpbMaizeFloor90kgKes - breakevenPerUnit : null;
      return {
        ...t,
        totalUnits,
        breakevenPerUnit,
        grossRevenue,
        netProfit,
        marginVsNcpb,
      };
    });

    return {
      crop,
      acres,
      farmgatePrice,
      seedKg,
      seedCost,
      plantingBags,
      topDressBags,
      totalFertBags,
      plantingFertCost,
      topDressFertCost,
      totalFertCost,
      subsidySavings,
      otherCostsTotal,
      grandTotalCost,
      tiers,
    };
  }, [cropId, acreageStr, pricingMode, otherCostsPerAcreStr, farmgatePriceStr]);

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">
          {/* Fertilizer Pricing Toggle */}
          <div className="flex flex-wrap gap-2 mb-5">
            <button
              type="button"
              aria-pressed={pricingMode === "evoucher"}
              onClick={() => setPricingMode("evoucher")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold border cursor-pointer ${
                pricingMode === "evoucher"
                  ? "bg-gold text-kenya-black border-gold"
                  : "bg-bg-elevated text-text-secondary border-border"
              }`}
            >
              NFSP e-Voucher (KES {fertData.fertilizerPrices50kgKes.evoucher.toLocaleString("en-KE")}/bag)
            </button>
            <button
              type="button"
              aria-pressed={pricingMode === "commercial"}
              onClick={() => setPricingMode("commercial")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold border cursor-pointer ${
                pricingMode === "commercial"
                  ? "bg-gold text-kenya-black border-gold"
                  : "bg-bg-elevated text-text-secondary border-border"
              }`}
            >
              Commercial Agrovet Retail
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            <div className="sm:col-span-2">
              <label
                htmlFor="fert-crop"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Crop Variety (KALRO)
              </label>
              <CustomSelect
                id="fert-crop"
                value={cropId}
                onChange={(e) => handleCropChange(e.target.value)}
                className="input-field w-full text-xs"
              >
                {fertData.crops.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </CustomSelect>
            </div>

            <div>
              <label
                htmlFor="fert-acreage"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Shamba Size (Acres)
              </label>
              <input
                id="fert-acreage"
                type="number"
                min="0.25"
                max="100"
                step="0.25"
                value={acreageStr}
                onChange={(e) => setAcreageStr(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>

            <div>
              <label
                htmlFor="fert-other"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Land Prep &amp; Labour / Acre (KES)
              </label>
              <input
                id="fert-other"
                type="text"
                inputMode="numeric"
                value={otherCostsPerAcreStr ? Number(otherCostsPerAcreStr).toLocaleString("en-KE") : ""}
                onChange={(e) => setOtherCostsPerAcreStr(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>
          </div>

          {/* Quick Acreage Presets & Selling Price */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 min-w-0">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[0.7rem] font-semibold text-text-muted uppercase mr-1">
                Quick Acres:
              </span>
              {ACREAGE_PRESETS.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setAcreageStr(a)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold border cursor-pointer tabular-nums ${
                    acreageStr === a
                      ? "bg-gold/20 border-gold text-gold"
                      : "bg-bg-elevated border-border text-text-secondary"
                  }`}
                >
                  {a} ac
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2 min-w-0">
              <label
                htmlFor="fert-farmgate"
                className="text-xs font-semibold text-text-muted uppercase"
              >
                Expected Price / {calc.crop.unitLabel} (KES):
              </label>
              <input
                id="fert-farmgate"
                type="text"
                inputMode="numeric"
                value={farmgatePriceStr ? Number(farmgatePriceStr).toLocaleString("en-KE") : ""}
                onChange={(e) => setFarmgatePriceStr(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-28 px-2.5 py-1.5 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary tabular-nums"
              />
            </div>
          </div>

          <div role="status" aria-live="polite" aria-atomic="true" className="space-y-6">
            {/* Summary KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
                <span className="text-[0.68rem] font-bold text-text-muted uppercase flex items-center gap-1">
                  <ShoppingBag className="w-3.5 h-3.5" /> Total Season Cost
                </span>
                <p className="text-2xl font-black text-text-primary mt-1 tabular-nums">
                  KES {calc.grandTotalCost.toLocaleString("en-KE")}
                </p>
                <p className="text-[0.72rem] text-text-muted mt-1 tabular-nums">
                  KES {Math.round(calc.grandTotalCost / calc.acres).toLocaleString("en-KE")} per acre
                </p>
              </div>

              <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4">
                <span className="text-[0.68rem] font-bold text-emerald-700 dark:text-emerald-400 uppercase flex items-center gap-1">
                  <Sprout className="w-3.5 h-3.5" /> KALRO Spacing &amp; Seed
                </span>
                <p className="text-2xl font-black text-emerald-700 dark:text-emerald-400 mt-1 tabular-nums">
                  {calc.crop.spacing}
                </p>
                <p className="text-[0.72rem] text-text-secondary mt-1 tabular-nums">
                  {calc.seedKg.toLocaleString("en-KE")} kg certified seed &bull; {calc.totalFertBags} bags fert
                </p>
              </div>

              <div className="rounded-xl border border-amber-500/45 bg-amber-500/[0.04] p-4">
                <span className="text-[0.68rem] font-bold text-gold uppercase flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" /> Medium-Yield Break-Even
                </span>
                <p className="text-2xl font-black text-gold mt-1 tabular-nums">
                  KES {calc.tiers[1].breakevenPerUnit.toLocaleString("en-KE")}
                </p>
                <p className="text-[0.72rem] text-text-secondary mt-1 tabular-nums">
                  per {calc.crop.unitLabel} ({calc.tiers[1].totalUnits.toLocaleString("en-KE")} {calc.crop.unitLabel}s)
                </p>
              </div>
            </div>

            {/* Agrovet Shopping List */}
            <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 text-xs space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 min-w-0 mb-1">
                <h2 className="font-bold text-text-primary">
                  Agrovet Shopping List ({calc.acres} {calc.acres === 1 ? "Acre" : "Acres"})
                </h2>
                <span className="text-[0.68rem] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400">
                  {pricingMode === "evoucher"
                    ? `Saves KES ${calc.subsidySavings.toLocaleString("en-KE")} via e-Voucher`
                    : `e-Voucher would save KES ${calc.subsidySavings.toLocaleString("en-KE")}`}
                </span>
              </div>

              <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0">
                <span className="text-text-secondary">
                  Certified Seed — {calc.seedKg.toLocaleString("en-KE")} kg @ KES{" "}
                  {calc.crop.seedPricePerKgKes.toLocaleString("en-KE")}/kg
                </span>
                <span className="font-bold text-text-primary tabular-nums whitespace-nowrap">
                  KES {calc.seedCost.toLocaleString("en-KE")}
                </span>
              </div>

              <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0">
                <span className="text-text-secondary">
                  Planting Fertilizer ({calc.crop.plantingFertType}) — {calc.plantingBags} × 50kg bag
                  {calc.plantingBags === 1 ? "" : "s"}
                </span>
                <span className="font-bold text-text-primary tabular-nums whitespace-nowrap">
                  KES {calc.plantingFertCost.toLocaleString("en-KE")}
                </span>
              </div>

              {calc.topDressBags > 0 && (
                <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0">
                  <span className="text-text-secondary">
                    Top-Dressing ({calc.crop.topDressFertType}) — {calc.topDressBags} × 50kg bag
                    {calc.topDressBags === 1 ? "" : "s"}
                  </span>
                  <span className="font-bold text-text-primary tabular-nums whitespace-nowrap">
                    KES {calc.topDressFertCost.toLocaleString("en-KE")}
                  </span>
                </div>
              )}

              <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0">
                <span className="text-text-secondary">
                  Land Prep, Weeding, Chemicals &amp; Harvesting
                </span>
                <span className="font-bold text-text-primary tabular-nums whitespace-nowrap">
                  KES {calc.otherCostsTotal.toLocaleString("en-KE")}
                </span>
              </div>
            </div>

            {/* Break-Even Yield Matrix */}
            <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 min-w-0">
                <h2 className="text-xs font-bold text-text-primary uppercase">
                  Break-Even Price &amp; Profit Scenarios
                </h2>
                {calc.crop.id === "maize" && (
                  <span className="text-[0.7rem] font-bold px-2.5 py-0.5 rounded-full bg-gold/15 text-gold">
                    NCPB Floor: KES {fertData.ncpbMaizeFloor90kgKes.toLocaleString("en-KE")} / 90 kg bag
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {calc.tiers.map((t) => {
                  const profitable = t.netProfit >= 0;
                  return (
                    <div
                      key={t.key}
                      className={`rounded-xl border p-3.5 text-xs space-y-1.5 ${
                        profitable
                          ? "border-emerald-500/35 bg-emerald-500/[0.06]"
                          : "border-rose-500/40 bg-rose-500/10"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 min-w-0">
                        <span className="font-bold text-text-primary">{t.label}</span>
                        <span className="text-[0.68rem] font-semibold text-text-muted tabular-nums">
                          {t.totalUnits.toLocaleString("en-KE")} {calc.crop.unitLabel}s
                        </span>
                      </div>
                      <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0">
                        <span className="text-text-secondary">Break-Even</span>
                        <span className="font-black text-text-primary tabular-nums">
                          KES {t.breakevenPerUnit.toLocaleString("en-KE")} / {calc.crop.unitLabel}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0">
                        <span className="text-text-secondary">Net Profit</span>
                        <span
                          className={`font-black tabular-nums ${
                            profitable
                              ? "text-emerald-700 dark:text-emerald-400"
                              : "text-rose-600 dark:text-rose-400"
                          }`}
                        >
                          {profitable ? "+" : "-"}KES {Math.abs(t.netProfit).toLocaleString("en-KE")}
                        </span>
                      </div>
                      {t.marginVsNcpb !== null && (
                        <div className="pt-1 border-t border-border/60 text-[0.68rem] text-text-secondary flex items-center gap-1">
                          {t.marginVsNcpb < 0 && (
                            <AlertTriangle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                          )}
                          <span>
                            {t.marginVsNcpb >= 0
                              ? `KES ${t.marginVsNcpb.toLocaleString("en-KE")}/bag buffer below NCPB floor`
                              : `Exceeds NCPB KES 4,000 floor by KES ${Math.abs(t.marginVsNcpb).toLocaleString("en-KE")}/bag`}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <p className="text-[0.7rem] text-text-muted flex items-start gap-1.5 pt-1">
                <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>
                  Source: {fertData.source}. Commercial agrovet averages: DAP KES{" "}
                  {fertData.fertilizerPrices50kgKes.commercialDap.toLocaleString("en-KE")}, CAN KES{" "}
                  {fertData.fertilizerPrices50kgKes.commercialCan.toLocaleString("en-KE")}, NPK KES{" "}
                  {fertData.fertilizerPrices50kgKes.commercialNpk.toLocaleString("en-KE")} per 50 kg bag.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
