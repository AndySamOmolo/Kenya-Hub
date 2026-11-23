"use client";

import { useState, useMemo } from "react";
import { X } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import tariffData from "@/data/kplc-tariff.json";
import solarIrradianceData from "@/data/solar-irradiance.json";

const tool = TOOLS.find((t) => t.slug === "kplc-token-calculator")!;

interface BandBreakdown {
  band: string;
  units: number;
  rate: number;
  cost: number;
}

function calculateTokens(amountPaid: number, tariffMode: "lifeline" | "ordinary" | "commercial" = "lifeline") {
  const fixedCharge = tariffData.fixedCharge;
  const fccPerUnit = tariffData.fuelCostCharge.rate;
  const ferfa = tariffData.forexAdjustment.rate;
  const iaPerUnit = tariffData.levies.refLevy || 0;
  const epraLevy = tariffData.levies.epraLevy || 0;
  const wraLevy = tariffData.levies.warcLevy || 0;
  const repRate = (tariffData.levies as any).repLevyRate ?? 0.05;
  const vatRate = tariffData.levies.vat / 100;

  const fixedChargeWithVat = fixedCharge * (1 + vatRate);
  const amountForUnits = Math.max(0, amountPaid - fixedChargeWithVat);

  if (amountForUnits <= 0) {
    return {
      totalUnits: 0,
      fixedCharge,
      fixedChargeVat: Math.round(fixedCharge * vatRate * 100) / 100,
      amountForUnits: 0,
      breakdown: [],
      totalEnergyCost: 0,
      totalLevies: 0,
      totalFCC: 0,
      totalVAT: 0,
    };
  }

  // EPRA 2025/26 flat rolling-average tariff category:
  // DC1 Lifeline (<=30 kWh/mo), DC2/DC3 Ordinary Domestic, SC1 Small Commercial
  const bandIdx = tariffMode === "lifeline" ? 0 : tariffMode === "ordinary" ? 1 : 2;
  const selectedBand = tariffData.energyBands[bandIdx] || tariffData.energyBands[0];
  const baseRate = selectedBand.rate;
  const repPerUnit = baseRate * repRate;

  // 16% VAT applies ONLY to Base Energy + FCC + FERFA + Inflation Adjustment (REP, EPRA, WRA are VAT-exempt)
  const vatablePerUnit = baseRate + fccPerUnit + ferfa + iaPerUnit;
  const vatPerUnit = vatablePerUnit * vatRate;
  const exemptLeviesPerUnit = repPerUnit + epraLevy + wraLevy;
  const totalCostPerUnit = vatablePerUnit + vatPerUnit + exemptLeviesPerUnit;

  const rawUnits = totalCostPerUnit > 0 ? amountForUnits / totalCostPerUnit : 0;
  const totalUnits = Math.round(rawUnits * 100) / 100;
  const breakdown: BandBreakdown[] = [
    {
      band: selectedBand.label,
      units: totalUnits,
      rate: baseRate,
      cost: Math.round(amountForUnits * 100) / 100,
    },
  ];

  const totalEnergyCost = rawUnits * baseRate;
  const totalLevies = rawUnits * (exemptLeviesPerUnit + iaPerUnit);
  const totalFCC = rawUnits * (fccPerUnit + ferfa);
  const totalVAT = rawUnits * vatPerUnit;

  return {
    totalUnits,
    fixedCharge,
    fixedChargeVat: Math.round(fixedCharge * vatRate * 100) / 100,
    amountForUnits: Math.round(amountForUnits * 100) / 100,
    breakdown,
    totalEnergyCost: Math.round(totalEnergyCost * 100) / 100,
    totalLevies: Math.round(totalLevies * 100) / 100,
    totalFCC: Math.round(totalFCC * 100) / 100,
    totalVAT: Math.round(totalVAT * 100) / 100,
  };
}


export default function KPLCTokenCalculatorPage() {
  const [amount, setAmount] = useState<number>(1000);
  const [tariffMode, setTariffMode] = useState<"lifeline" | "ordinary" | "commercial">("lifeline");

  const results = useMemo(() => calculateTokens(amount, tariffMode), [amount, tariffMode]);

  const fmt = (n: number) =>
    `KES ${n.toLocaleString("en-KE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const fmtInt = (n: number) =>
    `KES ${n.toLocaleString("en-KE", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        {/* Input */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-text-secondary mb-2">
              EPRA Tariff Classification
            </label>
            <div className="flex flex-wrap gap-2">
              {([
                { id: "lifeline", label: "Lifeline + Domestic (DC1/DC2)" },
                { id: "ordinary", label: "Domestic Ordinary (DC2/DC3)" },
                { id: "commercial", label: "Small Commercial (SC1)" },
              ] as const).map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTariffMode(t.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                    tariffMode === t.id
                      ? "bg-gold/15 border-gold text-gold"
                      : "bg-bg-elevated border-border text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Amount to Purchase (KES)
          </label>
          <div className="relative">
            <input
              type="number"
              inputMode="numeric"
              value={amount === 0 ? "" : amount}
              onChange={(e) => {
                const raw = e.target.value.replace(/^0+(?=\d)/, "");
                setAmount(raw === "" ? 0 : Math.max(0, Number(raw)));
              }}
              placeholder="0"
              className="input-field text-xl sm:text-2xl font-bold font-[family-name:var(--font-outfit)] pr-11!"
              style={{ paddingRight: "2.75rem" }}
              min={0}
              step={100}
              id="token-amount-input"
            />
            {amount > 0 && (
              <button
                type="button"
                onClick={() => setAmount(0)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                aria-label="Clear amount"
              >
                <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
              </button>
            )}
          </div>
          <input
            type="range"
            min={0}
            max={10000}
            step={50}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full mt-3 accent-gold"
          />
          <div className="flex justify-between text-xs text-text-muted mt-1">
            <span>KES 0</span>
            <span>KES 10,000</span>
          </div>
        </div>

        {/* Result */}
        <div role="status" aria-live="polite" aria-atomic="true" className="result-box">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="text-sm text-text-secondary">Units You Will Receive</span>
            <span className="text-xs text-text-muted">
              {results.totalUnits > 0
                ? `${fmt(amount / results.totalUnits)} effective cost/unit`
                : "—"}
            </span>
          </div>
          <p className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-outfit)] text-kenya-green-light">
            {results.totalUnits.toLocaleString()} kWh
          </p>
          <p className="text-xs text-text-muted mt-2">
            For a {fmtInt(amount)} token purchase under EPRA 2023–2026 Domestic Tariffs (DC1/DC2/DC3)
          </p>
        </div>

        {/* How the money is split */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              Where Your Money Goes
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Component</th>
                  <th className="text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {results.fixedCharge > 0 && (
                  <>
                    <tr>
                      <td className="text-kenya-red-light">Fixed Charge (monthly)</td>
                      <td className="text-right text-kenya-red-light">{fmt(results.fixedCharge)}</td>
                    </tr>
                    <tr>
                      <td className="text-text-muted pl-8 text-xs">VAT on fixed charge</td>
                      <td className="text-right text-text-muted text-xs">{fmt(results.fixedChargeVat)}</td>
                    </tr>
                  </>
                )}
                <tr>
                  <td className="text-text-primary font-medium">Base Energy Charges ({results.totalUnits} kWh)</td>
                  <td className="text-right text-text-primary font-medium">{fmt(results.totalEnergyCost)}</td>
                </tr>
                <tr>
                  <td className="text-text-muted pl-8 text-xs">Fuel Cost + Forex Adjustment (FCC + FERFA)</td>
                  <td className="text-right text-text-muted text-xs">{fmt(results.totalFCC)}</td>
                </tr>
                <tr>
                  <td className="text-text-muted pl-8 text-xs">Levies &amp; Inflation Adj. (REP + IA + EPRA + WRA)</td>
                  <td className="text-right text-text-muted text-xs">{fmt(results.totalLevies)}</td>
                </tr>
                <tr>
                  <td className="text-text-muted pl-8 text-xs">VAT (16%)</td>
                  <td className="text-right text-text-muted text-xs">{fmt(results.totalVAT)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Band Breakdown */}
        {results.breakdown.length > 0 && (
          <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
            <div className="px-5 py-3 border-b border-border bg-bg-elevated">
              <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
                Tariff Band Breakdown
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Band</th>
                    <th className="text-center">Units</th>
                    <th className="text-right">Rate/kWh</th>
                  </tr>
                </thead>
                <tbody>
                  {results.breakdown.map((b, i) => (
                    <tr key={i}>
                      <td className="text-text-secondary">{b.band}</td>
                      <td className="text-center text-text-primary font-medium">{b.units} kWh</td>
                      <td className="text-right text-gold">{fmt(b.rate)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tariff Reference */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              KPLC Domestic Tariff Bands
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Band</th>
                  <th className="text-right">Rate per kWh</th>
                </tr>
              </thead>
              <tbody>
                {tariffData.energyBands.map((band, i) => (
                  <tr key={i}>
                    <td className="text-text-secondary">{band.label}</td>
                    <td className="text-right font-medium text-text-primary">{fmt(band.rate)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            Important Notes
          </h3>
          <ul className="space-y-2">
            {tariffData.notes.map((note, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                <span className="text-gold mt-0.5">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Kenya Regional Solar Irradiance & Off-Grid PV Reference */}
        <div className="bg-bg-card border border-border rounded-2xl p-5 space-y-3 mt-6">
          <h2 className="text-sm sm:text-base font-bold font-[family-name:var(--font-outfit)] text-text-primary">
            Kenya Regional Solar Irradiance (kWh/m²/day) &amp; Solar PV Payback Reference ({solarIrradianceData.source})
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 text-xs">
            {solarIrradianceData.regions.map((reg) => (
              <div key={reg.id} className="rounded-xl bg-bg-elevated/60 border border-border p-3 text-center">
                <p className="font-bold text-text-primary">{reg.name}</p>
                <p className="text-base font-extrabold text-gold mt-1">{reg.irradiance} kWh/m²</p>
                <p className="text-[0.65rem] text-text-muted mt-0.5">{reg.counties.slice(0, 2).join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
