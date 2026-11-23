"use client";

import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import { useState, useMemo } from "react";
import { X } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import CustomSelect from "@/components/ui/CustomSelect";
import { TOOLS } from "@/lib/tools-registry";
import crspData from "@/data/kra-car-import-crsp.json";
import insuranceRatesData from "@/data/vehicle-insurance-rates.json";
import customsRestrictedData from "@/data/customs-restricted-items.json";

const tool = TOOLS.find((t) => t.slug === "kra-car-import-calculator")!;

function formatKES(n: number): string {
  return Math.round(n).toLocaleString("en-KE");
}

export default function KraCarImportCalculatorPage() {
  const [selectedModelId, setSelectedModelId] = useState<string>(crspData.popularModels[0].id);
  const [customMode, setCustomMode] = useState(false);
  const [customCrsp, setCustomCrsp] = useState("2950000");
  const [customCc, setCustomCc] = useState("1496");
  const [customFuel, setCustomFuel] = useState<"petrol" | "diesel" | "electric">("petrol");
  const [ageIndex, setAgeIndex] = useState<number>(7);
  const [cifUsd, setCifUsd] = useState<string>("4600");
  const [usdRate, setUsdRate] = useState<string>("129");

  const activePreset = useMemo(
    () => crspData.popularModels.find((m) => m.id === selectedModelId) || crspData.popularModels[0],
    [selectedModelId]
  );

  const calc = useMemo(() => {
    const crsp = customMode
      ? Math.max(0, Number(customCrsp.replace(/,/g, "")) || 0)
      : activePreset.crspKes;
    const cc = customMode
      ? Math.max(0, Number(customCc.replace(/,/g, "")) || 0)
      : activePreset.cc;
    const fuel = customMode ? customFuel : (activePreset.fuel as "petrol" | "diesel" | "electric");

    const depBand = crspData.depreciationBands[ageIndex] || crspData.depreciationBands[7];
    const depRate = depBand.rate;

    let exciseRate = crspData.rates.exciseSmallPetrol;
    if (fuel === "electric") exciseRate = crspData.rates.exciseElectric;
    else if (fuel === "petrol")
      exciseRate =
        cc > 3000
          ? crspData.rates.exciseLargePetrol
          : cc > 1500
          ? ((crspData.rates as any).exciseMidPetrol ?? 0.25)
          : crspData.rates.exciseSmallPetrol;
    else if (fuel === "diesel")
      exciseRate = cc > 2500 ? crspData.rates.exciseLargeDiesel : crspData.rates.exciseSmallDiesel;

    const importDutyRate = crspData.rates.importDuty;
    const vatRate = crspData.rates.vat;
    const idfRate = crspData.rates.idf;
    const rdlRate = crspData.rates.rdl;

    // Official KRA CRSP reverse formula: strip 25% dealer margin (÷ 1.25) and Import/Excise/VAT cascade
    const taxMultiplier = (1 + importDutyRate) * (1 + exciseRate) * (1 + vatRate);
    const baseNewCustomsValue = crsp / (taxMultiplier * 1.25);
    const customsValue = Math.max(0, baseNewCustomsValue * (1 - depRate));

    const importDuty = customsValue * importDutyRate;
    const exciseValue = customsValue + importDuty;
    const exciseDuty = exciseValue * exciseRate;
    const vatValue = exciseValue + exciseDuty;
    const vat = vatValue * vatRate;
    const idf = customsValue * idfRate;
    const rdl = customsValue * rdlRate;

    const totalKraDuty = importDuty + exciseDuty + vat + idf + rdl;

    const ntsaRow =
      crspData.ntsaRegistration.find((r) => cc <= r.maxCc) ||
      crspData.ntsaRegistration[crspData.ntsaRegistration.length - 1];
    const ntsaFee = ntsaRow.fee;
    const portAndKebs = crspData.rates.kebsInspectionKes + crspData.rates.portClearingKes;

    const parsedCifUsd = cifUsd.trim() === "" ? 0 : Math.max(0, Number(cifUsd.replace(/,/g, "")) || 0);
    const parsedUsdRate = usdRate.trim() === "" ? 0 : Math.max(0, Number(usdRate.replace(/,/g, "")) || 0);
    const cifKes = parsedCifUsd * parsedUsdRate;

    const totalLandedCost = cifKes + totalKraDuty + ntsaFee + portAndKebs;

    return {
      crsp,
      cc,
      fuel,
      depBand,
      exciseRate,
      customsValue,
      importDuty,
      exciseDuty,
      vat,
      idf,
      rdl,
      totalKraDuty,
      ntsaFee,
      portAndKebs,
      cifKes,
      totalLandedCost,
    };
  }, [customMode, customCrsp, customCc, customFuel, activePreset, ageIndex, cifUsd, usdRate]);

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-sm font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                1. Choose Vehicle Model or Enter Custom CRSP
              </h2>
              <p className="text-xs text-[var(--text-muted)]">
                Select a popular Kenyan import model or enter any CRSP value from the KRA schedule.
              </p>
            </div>
            <ExpandablePillRow>
              {[
                { custom: false, label: "Popular Imports" },
                { custom: true, label: "Custom CRSP" },
              ].map((m) => {
                const active = customMode === m.custom;
                return (
                  <button
                    key={m.label}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setCustomMode(m.custom)}
                    className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium border transition-all cursor-pointer ${
                      active
                        ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                        : "border-border bg-bg-elevated text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {m.label}
                  </button>
                );
              })}
            </ExpandablePillRow>
          </div>

          {!customMode ? (
            <div className="space-y-3">
              <ExpandablePillRow>
                {crspData.popularModels.map((m) => {
                  const active = m.id === selectedModelId;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => {
                        setSelectedModelId(m.id);
                        setCifUsd(String(m.avgCifUsd));
                      }}
                      className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium border transition-all cursor-pointer ${
                        active
                          ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                          : "border-border bg-bg-elevated text-text-secondary hover:text-text-primary hover:border-border-light"
                      }`}
                    >
                      {m.model} ({m.cc}cc)
                    </button>
                  );
                })}
              </ExpandablePillRow>
              <div className="rounded-xl bg-bg-elevated/60 border border-border p-3 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-bold text-text-primary">{activePreset.make} — {activePreset.model}</span>
                <span className="text-gold font-semibold">CRSP: KES {formatKES(activePreset.crspKes)} · {activePreset.cc} cc · {activePreset.fuel.toUpperCase()}</span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-[var(--text-secondary)] mb-1">
                  KRA CRSP Value (KES)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={customCrsp}
                    placeholder="0"
                    onChange={(e) => setCustomCrsp(e.target.value.replace(/[^0-9]/g, "").replace(/^0+(?=\d)/, ""))}
                    className="w-full pl-3.5 pr-10 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] dark:border-white/15 text-sm text-[var(--text-primary)] tabular-nums"
                    style={{ paddingRight: "2.5rem" }}
                  />
                  {customCrsp && (
                    <button
                      type="button"
                      onClick={() => setCustomCrsp("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                      aria-label="Clear CRSP value"
                    >
                      <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                    </button>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-xs text-[var(--text-secondary)] mb-1">
                  Engine Capacity (CC)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={customCc}
                    placeholder="1500"
                    onChange={(e) => setCustomCc(e.target.value.replace(/[^0-9]/g, ""))}
                    className="w-full pl-3.5 pr-10 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] dark:border-white/15 text-sm text-[var(--text-primary)] tabular-nums"
                    style={{ paddingRight: "2.5rem" }}
                  />
                  {customCc && (
                    <button
                      type="button"
                      onClick={() => setCustomCc("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                      aria-label="Clear engine capacity"
                    >
                      <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                    </button>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-xs text-[var(--text-secondary)] mb-1">
                  Fuel Type
                </label>
                <CustomSelect
                  value={customFuel}
                  onValueChange={(val) => setCustomFuel(val as "petrol" | "diesel" | "electric")}
                  options={[
                    { value: "petrol", label: "Petrol / Hybrid" },
                    { value: "diesel", label: "Diesel" },
                    { value: "electric", label: "100% Electric (EV)" },
                  ]}
                  className="w-full text-sm"
                />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-[var(--border)]">
            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">
                Vehicle Age (Since First Registration)
              </label>
              <CustomSelect
                value={String(ageIndex)}
                onValueChange={(val) => setAgeIndex(Number(val))}
                options={crspData.depreciationBands.map((b, idx) => ({
                  value: String(idx),
                  label: b.label,
                }))}
                className="w-full text-xs"
              />
            </div>
            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">
                Estimated CIF Price (USD — Japan/UK/Dubai)
              </label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="numeric"
                  value={cifUsd}
                  placeholder="0"
                  onChange={(e) => setCifUsd(e.target.value.replace(/[^0-9]/g, "").replace(/^0+(?=\d)/, ""))}
                  className="w-full pl-3.5 pr-10 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] dark:border-white/15 text-sm text-[var(--text-primary)] tabular-nums"
                  style={{ paddingRight: "2.5rem" }}
                />
                {cifUsd && (
                  <button
                    type="button"
                    onClick={() => setCifUsd("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                    aria-label="Clear CIF price"
                  >
                    <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                  </button>
                )}
              </div>
            </div>
            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">
                Exchange Rate (KES per USD)
              </label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="numeric"
                  value={usdRate}
                  placeholder="129.5"
                  onChange={(e) => setUsdRate(e.target.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1"))}
                  className="w-full pl-3.5 pr-10 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] dark:border-white/15 text-sm text-[var(--text-primary)] tabular-nums"
                  style={{ paddingRight: "2.5rem" }}
                />
                {usdRate && (
                  <button
                    type="button"
                    onClick={() => setUsdRate("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                    aria-label="Clear exchange rate"
                  >
                    <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-amber-500/[0.04] border border-amber-500/45 rounded-xl p-5">
            <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">
              Total KRA Port Taxes
            </p>
            <p className="text-2xl font-extrabold text-[var(--gold)] font-[family-name:var(--font-display)]">
              KES {formatKES(calc.totalKraDuty)}
            </p>
            <p className="text-[11px] text-[var(--text-muted)] mt-1">
              After {Math.round(calc.depBand.rate * 100)}% age depreciation
            </p>
          </div>
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5">
            <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">
              Depreciated Customs Value
            </p>
            <p className="text-2xl font-extrabold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
              KES {formatKES(calc.customsValue)}
            </p>
            <p className="text-[11px] text-[var(--text-muted)] mt-1">
              CRSP: KES {formatKES(calc.crsp)}
            </p>
          </div>
          <div className="bg-[var(--bg-card)] border border-emerald-500/30 rounded-xl p-5">
            <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">
              Estimated Total on the Road
            </p>
            <p className="text-2xl font-extrabold text-emerald-400 font-[family-name:var(--font-display)]">
              KES {formatKES(calc.totalLandedCost)}
            </p>
            <p className="text-[11px] text-[var(--text-muted)] mt-1">
              CIF + KRA Taxes + Port/KEBS + NTSA Plate
            </p>
          </div>
        </div>

        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="px-5 py-3.5 border-b border-[var(--border)] flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-sm font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
              KRA Mombasa Port Duty & Landed Cost Breakdown
            </h3>
            <span className="text-xs text-[var(--text-muted)]">
              {calc.cc} cc · {calc.fuel.toUpperCase()}
            </span>
          </div>
          <div className="divide-y divide-[var(--border)] text-sm">
            <div className="px-4 sm:px-5 py-3 flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1">
              <span className="text-[var(--text-secondary)]">KRA Base CRSP (Brand New Showroom Reference)</span>
              <span className="font-semibold text-[var(--text-primary)]">KES {formatKES(calc.crsp)}</span>
            </div>
            <div className="px-4 sm:px-5 py-3 flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1">
              <span className="text-[var(--text-secondary)]">KRA Depreciated Customs Value (CRSP tax-backed value less {Math.round(calc.depBand.rate * 100)}% age depreciation)</span>
              <span className="font-semibold text-[var(--text-primary)]">KES {formatKES(calc.customsValue)}</span>
            </div>
            <div className="px-4 sm:px-5 py-3 flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1">
              <span className="text-[var(--text-secondary)]">1. Import Duty (35% of Customs Value)</span>
              <span className="text-red-400 font-medium">KES {formatKES(calc.importDuty)}</span>
            </div>
            <div className="px-4 sm:px-5 py-3 flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1">
              <span className="text-[var(--text-secondary)]">
                2. Excise Duty ({Math.round(calc.exciseRate * 100)}% of Customs Value + Import Duty)
              </span>
              <span className="text-red-400 font-medium">KES {formatKES(calc.exciseDuty)}</span>
            </div>
            <div className="px-4 sm:px-5 py-3 flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1">
              <span className="text-[var(--text-secondary)]">
                3. Value Added Tax — VAT (16% of Customs + Import + Excise)
              </span>
              <span className="text-red-400 font-medium">KES {formatKES(calc.vat)}</span>
            </div>
            <div className="px-4 sm:px-5 py-3 flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1">
              <span className="text-[var(--text-secondary)]">4. Import Declaration Fee — IDF (2.5%)</span>
              <span className="text-red-400 font-medium">KES {formatKES(calc.idf)}</span>
            </div>
            <div className="px-4 sm:px-5 py-3 flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1">
              <span className="text-[var(--text-secondary)]">5. Railway Development Levy — RDL (2.0%)</span>
              <span className="text-red-400 font-medium">KES {formatKES(calc.rdl)}</span>
            </div>
            <div className="px-4 sm:px-5 py-3.5 flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1 bg-[var(--bg-elevated)]/60 font-bold">
              <span className="text-[var(--text-primary)]">Total KRA Taxes Payable</span>
              <span className="text-[var(--gold)]">KES {formatKES(calc.totalKraDuty)}</span>
            </div>
            <div className="px-4 sm:px-5 py-3 flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1">
              <span className="text-[var(--text-secondary)]">NTSA Registration & Number Plate ({calc.cc} cc)</span>
              <span className="text-[var(--text-primary)]">KES {formatKES(calc.ntsaFee)}</span>
            </div>
            <div className="px-4 sm:px-5 py-3 flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1">
              <span className="text-[var(--text-secondary)]">KEBS JEVIC/QISJ Inspection + Port & CFS Clearing</span>
              <span className="text-[var(--text-primary)]">KES {formatKES(calc.portAndKebs)}</span>
            </div>
            <div className="px-4 sm:px-5 py-3 flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1">
              <span className="text-[var(--text-secondary)]">Vehicle CIF Cost (Shipped to Mombasa)</span>
              <span className="text-[var(--text-primary)]">KES {formatKES(calc.cifKes)}</span>
            </div>
            <div className="px-4 sm:px-5 py-4 flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1 bg-emerald-500/10 font-bold">
              <span className="text-[var(--text-primary)]">Total Estimated Landed Cost (On the Road)</span>
              <span className="text-emerald-400 text-base">KES {formatKES(calc.totalLandedCost)}</span>
            </div>
          </div>
        </div>

        {/* IRA Motor Vehicle Insurance Benchmark & KRA Customs Restricted Items Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-5 space-y-3">
            <h2 className="text-sm sm:text-base font-bold font-[family-name:var(--font-outfit)] text-[var(--text-primary)]">
              IRA Motor Vehicle Insurance Rates ({insuranceRatesData.source})
            </h2>
            <div className="space-y-2.5">
              {insuranceRatesData.vehicleClasses.map((vc) => (
                <div key={vc.id} className="rounded-xl bg-[var(--bg-elevated)]/60 border border-[var(--border)] p-3 text-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 font-bold text-[var(--text-primary)] mb-1">
                    <span>{vc.name}</span>
                    <span className="text-[var(--gold)]">TPO Min: KES {vc.thirdParty.minimumPremium.toLocaleString()}/yr</span>
                  </div>
                  <p className="text-[var(--text-secondary)]">{vc.description} — Comprehensive rate: {vc.comprehensive.rateMin}%–{vc.comprehensive.rateMax}% of insured value (min KES {vc.comprehensive.minimumPremium.toLocaleString()}).</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-5 space-y-3">
            <h2 className="text-sm sm:text-base font-bold font-[family-name:var(--font-outfit)] text-[var(--text-primary)]">
              KRA Port &amp; Customs Restricted / Prohibited Items ({customsRestrictedData.source})
            </h2>
            <div className="space-y-2.5">
              {customsRestrictedData.categories.slice(0, 3).map((cat) => (
                <div key={cat.id} className="rounded-xl bg-[var(--bg-elevated)]/60 border border-[var(--border)] p-3 text-xs">
                  <p className="font-bold text-[var(--text-primary)] mb-1">{cat.title}</p>
                  <p className="text-[var(--text-secondary)]">{cat.description}: {cat.items.slice(0, 4).map((it) => it.item).join(", ")}.</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Mobile Live-Result Pill (F-038) */}
        <div
          role="status"
          aria-live="polite"
          className="sticky bottom-3 z-30 sm:hidden rounded-full border border-amber-500/45 bg-bg-card sm:bg-bg-card/95 sm:backdrop-blur-md px-4 py-2.5 shadow-lg flex items-center justify-between gap-3"
        >
          <span className="text-xs font-semibold text-text-secondary">Est. Landed Cost</span>
          <span className="text-sm font-extrabold text-emerald-700 dark:text-emerald-400 tabular-nums whitespace-nowrap">
            KES {formatKES(calc.totalLandedCost)}
          </span>
        </div>
      </div>
    </ToolShell>
  );
}
