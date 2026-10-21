"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import crspData from "@/data/kra-car-import-crsp.json";

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
      exciseRate = cc > 1500 ? crspData.rates.exciseLargePetrol : crspData.rates.exciseSmallPetrol;
    else if (fuel === "diesel")
      exciseRate = cc > 2500 ? crspData.rates.exciseLargeDiesel : crspData.rates.exciseSmallDiesel;

    const importDutyRate = crspData.rates.importDuty;
    const vatRate = crspData.rates.vat;
    const idfRate = crspData.rates.idf;
    const rdlRate = crspData.rates.rdl;

    const taxMultiplier =
      (1 + importDutyRate) * (1 + exciseRate) * (1 + vatRate) + idfRate + rdlRate;
    const baseNewCustomsValue = crsp / (taxMultiplier * 1.08);
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

    const cifKes =
      (Math.max(0, Number(cifUsd.replace(/,/g, "")) || 0) || activePreset.avgCifUsd) *
      (Math.max(1, Number(usdRate.replace(/,/g, "")) || 129));

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
            <div className="inline-flex rounded-lg bg-[var(--bg-elevated)] p-1 border border-[var(--border)]">
              <button
                onClick={() => setCustomMode(false)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  !customMode ? "bg-[var(--gold)] text-black font-bold" : "text-[var(--text-secondary)]"
                }`}
              >
                Popular Kenyan Imports
              </button>
              <button
                onClick={() => setCustomMode(true)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  customMode ? "bg-[var(--gold)] text-black font-bold" : "text-[var(--text-secondary)]"
                }`}
              >
                Custom CRSP & Engine
              </button>
            </div>
          </div>

          {!customMode ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {crspData.popularModels.map((m) => {
                const active = m.id === selectedModelId;
                return (
                  <button
                    key={m.id}
                    onClick={() => {
                      setSelectedModelId(m.id);
                      setCifUsd(String(m.avgCifUsd));
                    }}
                    className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                      active
                        ? "bg-[var(--gold)]/15 border-[var(--gold)]/50 text-[var(--text-primary)]"
                        : "bg-[var(--bg-elevated)] border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-light)]"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-bold text-[var(--gold)] mb-0.5">
                      <span>{m.make}</span>
                      <span>{m.cc} cc · {m.fuel.toUpperCase()}</span>
                    </div>
                    <p className="text-xs font-bold text-[var(--text-primary)] break-words">{m.model}</p>
                    <p className="text-[11px] text-[var(--text-muted)] mt-1">
                      CRSP: KES {formatKES(m.crspKes)}
                    </p>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-[var(--text-secondary)] mb-1">
                  KRA CRSP Value (KES)
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={customCrsp}
                  onChange={(e) => setCustomCrsp(e.target.value.replace(/[^0-9]/g, ""))}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-sm text-[var(--text-primary)]"
                />
              </div>
              <div>
                <label className="block text-xs text-[var(--text-secondary)] mb-1">
                  Engine Capacity (CC)
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={customCc}
                  onChange={(e) => setCustomCc(e.target.value.replace(/[^0-9]/g, ""))}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-sm text-[var(--text-primary)]"
                />
              </div>
              <div>
                <label className="block text-xs text-[var(--text-secondary)] mb-1">
                  Fuel Type
                </label>
                <select
                  value={customFuel}
                  onChange={(e) => setCustomFuel(e.target.value as "petrol" | "diesel" | "electric")}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-sm text-[var(--text-primary)]"
                >
                  <option value="petrol">Petrol / Hybrid</option>
                  <option value="diesel">Diesel</option>
                  <option value="electric">100% Electric (EV)</option>
                </select>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-[var(--border)]">
            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">
                Vehicle Age (Since First Registration)
              </label>
              <select
                value={ageIndex}
                onChange={(e) => setAgeIndex(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-xs font-semibold text-[var(--text-primary)]"
              >
                {crspData.depreciationBands.map((b, idx) => (
                  <option key={b.label} value={idx}>
                    {b.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">
                Estimated CIF Price (USD — Japan/UK/Dubai)
              </label>
              <input
                type="text"
                inputMode="numeric"
                value={cifUsd}
                onChange={(e) => setCifUsd(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-sm text-[var(--text-primary)]"
              />
            </div>
            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">
                Exchange Rate (KES per USD)
              </label>
              <input
                type="text"
                inputMode="numeric"
                value={usdRate}
                onChange={(e) => setUsdRate(e.target.value.replace(/[^0-9.]/g, ""))}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-sm text-[var(--text-primary)]"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-[var(--bg-card)] border border-[var(--gold)]/30 rounded-xl p-5">
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
          <div className="px-5 py-3.5 border-b border-[var(--border)] flex items-center justify-between">
            <h3 className="text-sm font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
              KRA Mombasa Port Duty & Landed Cost Breakdown
            </h3>
            <span className="text-xs text-[var(--text-muted)]">
              {calc.cc} cc · {calc.fuel.toUpperCase()}
            </span>
          </div>
          <div className="divide-y divide-[var(--border)] text-sm">
            <div className="px-5 py-3 flex justify-between">
              <span className="text-[var(--text-secondary)]">KRA Base CRSP (Brand New Showroom Reference)</span>
              <span className="font-semibold text-[var(--text-primary)]">KES {formatKES(calc.crsp)}</span>
            </div>
            <div className="px-5 py-3 flex justify-between">
              <span className="text-[var(--text-secondary)]">Depreciated Customs Value ({Math.round(calc.depBand.rate * 100)}% Depreciation)</span>
              <span className="font-semibold text-[var(--text-primary)]">KES {formatKES(calc.customsValue)}</span>
            </div>
            <div className="px-5 py-3 flex justify-between">
              <span className="text-[var(--text-secondary)]">1. Import Duty (35% of Customs Value)</span>
              <span className="text-red-400 font-medium">KES {formatKES(calc.importDuty)}</span>
            </div>
            <div className="px-5 py-3 flex justify-between">
              <span className="text-[var(--text-secondary)]">
                2. Excise Duty ({Math.round(calc.exciseRate * 100)}% of Customs Value + Import Duty)
              </span>
              <span className="text-red-400 font-medium">KES {formatKES(calc.exciseDuty)}</span>
            </div>
            <div className="px-5 py-3 flex justify-between">
              <span className="text-[var(--text-secondary)]">
                3. Value Added Tax — VAT (16% of Customs + Import + Excise)
              </span>
              <span className="text-red-400 font-medium">KES {formatKES(calc.vat)}</span>
            </div>
            <div className="px-5 py-3 flex justify-between">
              <span className="text-[var(--text-secondary)]">4. Import Declaration Fee — IDF (2.5%)</span>
              <span className="text-red-400 font-medium">KES {formatKES(calc.idf)}</span>
            </div>
            <div className="px-5 py-3 flex justify-between">
              <span className="text-[var(--text-secondary)]">5. Railway Development Levy — RDL (2.0%)</span>
              <span className="text-red-400 font-medium">KES {formatKES(calc.rdl)}</span>
            </div>
            <div className="px-5 py-3.5 flex justify-between bg-[var(--bg-elevated)]/60 font-bold">
              <span className="text-[var(--text-primary)]">Total KRA Taxes Payable</span>
              <span className="text-[var(--gold)]">KES {formatKES(calc.totalKraDuty)}</span>
            </div>
            <div className="px-5 py-3 flex justify-between">
              <span className="text-[var(--text-secondary)]">NTSA Registration & Number Plate ({calc.cc} cc)</span>
              <span className="text-[var(--text-primary)]">KES {formatKES(calc.ntsaFee)}</span>
            </div>
            <div className="px-5 py-3 flex justify-between">
              <span className="text-[var(--text-secondary)]">KEBS JEVIC/QISJ Inspection + Port & CFS Clearing</span>
              <span className="text-[var(--text-primary)]">KES {formatKES(calc.portAndKebs)}</span>
            </div>
            <div className="px-5 py-3 flex justify-between">
              <span className="text-[var(--text-secondary)]">Vehicle CIF Cost (Shipped to Mombasa)</span>
              <span className="text-[var(--text-primary)]">KES {formatKES(calc.cifKes)}</span>
            </div>
            <div className="px-5 py-4 flex justify-between bg-emerald-500/10 font-bold">
              <span className="text-[var(--text-primary)]">Total Estimated Landed Cost (On the Road)</span>
              <span className="text-emerald-400 text-base">KES {formatKES(calc.totalLandedCost)}</span>
            </div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
