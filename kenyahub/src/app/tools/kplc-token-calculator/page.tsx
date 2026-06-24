"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import tariffData from "@/data/kplc-tariff.json";

const tool = TOOLS.find((t) => t.slug === "kplc-token-calculator")!;

interface BandBreakdown {
  band: string;
  units: number;
  rate: number;
  cost: number;
}

function calculateTokens(amountPaid: number) {
  const fixedCharge = tariffData.fixedCharge;
  const levyPerUnit = tariffData.levies.repLevy + tariffData.levies.refLevy + tariffData.levies.epraLevy + tariffData.levies.warcLevy;
  const fccPerUnit = tariffData.fuelCostCharge.rate;
  const ferfa = tariffData.forexAdjustment.rate;
  const vatRate = tariffData.levies.vat / 100;

  // Fixed charge is deducted first (with VAT)
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

  // Iteratively find how many units the remaining amount buys
  // Each unit costs: energyRate + levies + FCC + FERFA, all +16% VAT
  let remainingAmount = amountForUnits;
  let totalUnits = 0;
  const breakdown: BandBreakdown[] = [];

  for (const band of tariffData.energyBands) {
    if (remainingAmount <= 0) break;
    const bandMax = band.max ?? 100000;
    const bandMin = band.min;
    const bandCapacity = bandMax - bandMin + 1;

    const unitCostBeforeVat = band.rate + levyPerUnit + fccPerUnit + ferfa;
    const unitCostWithVat = unitCostBeforeVat * (1 + vatRate);

    const maxUnitsInBand = Math.min(bandCapacity, Math.floor(remainingAmount / unitCostWithVat));
    const costForBand = maxUnitsInBand * unitCostWithVat;

    if (maxUnitsInBand > 0) {
      breakdown.push({
        band: band.label,
        units: maxUnitsInBand,
        rate: band.rate,
        cost: Math.round(costForBand * 100) / 100,
      });
      totalUnits += maxUnitsInBand;
      remainingAmount -= costForBand;
    }
  }

  const totalEnergyCost = breakdown.reduce((sum, b) => sum + b.units * b.rate, 0);
  const totalLevies = totalUnits * levyPerUnit;
  const totalFCC = totalUnits * (fccPerUnit + ferfa);
  const totalVAT = (totalEnergyCost + totalLevies + totalFCC) * vatRate;

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

const faq = [
  {
    question: "How many KPLC units will I get for KES 1,000?",
    answer: "The number of units depends on whether the fixed monthly charge (KES 150 + VAT) has been fully paid. After the fixed charge is deducted, the remaining amount buys units at the applicable tariff band rate. Use the calculator above for an exact figure.",
  },
  {
    question: "What is the KPLC fixed charge of KES 150?",
    answer: "KPLC charges a fixed monthly service fee of KES 150 (plus 16% VAT = KES 174). This is deducted from your prepaid token purchases until fully paid each month. After it's paid, all subsequent purchases go toward units.",
  },
  {
    question: "What is the lifeline tariff?",
    answer: "The first 10 kWh each month are charged at only KES 2.50/unit (the 'lifeline' rate). This is heavily subsidized for low-income households. Units 11–50 cost KES 12.75, and above 50 cost KES 15.80.",
  },
  {
    question: "What levies are included in KPLC token charges?",
    answer: "Each unit includes: Rural Electrification Levy (KES 0.12), REP Fund Levy (KES 0.03), EPRA Levy (KES 0.10), WARMA Levy (KES 0.03), Fuel Cost Charge (~KES 3.87), and Forex Adjustment (~KES 0.67). Plus 16% VAT on everything.",
  },
  {
    question: "Why do I get fewer units than expected?",
    answer: "Three main reasons: (1) the KES 150 fixed charge is deducted from early purchases each month, (2) multiple levies and surcharges are added per unit, and (3) 16% VAT applies on top of everything. The effective cost per unit is much higher than the base tariff rate.",
  },
];

export default function KPLCTokenCalculatorPage() {
  const [amount, setAmount] = useState<number>(1000);

  const results = useMemo(() => calculateTokens(amount), [amount]);

  const fmt = (n: number) =>
    `KES ${n.toLocaleString("en-KE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const fmtInt = (n: number) =>
    `KES ${n.toLocaleString("en-KE", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Input */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Amount to Purchase (KES)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
            className="input-field text-2xl font-bold font-[family-name:var(--font-outfit)]"
            min={0}
            step={100}
            id="token-amount-input"
          />
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
        <div className="result-box">
          <div className="flex items-center justify-between mb-4">
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
            For a {fmtInt(amount)} token purchase (assuming fixed charge not yet paid this month)
          </p>
        </div>

        {/* How the money is split */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              Where Your Money Goes
            </h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Component</th>
                <th className="text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-kenya-red-light">Fixed Charge (monthly)</td>
                <td className="text-right text-kenya-red-light">{fmt(results.fixedCharge)}</td>
              </tr>
              <tr>
                <td className="text-text-muted pl-8 text-xs">VAT on fixed charge</td>
                <td className="text-right text-text-muted text-xs">{fmt(results.fixedChargeVat)}</td>
              </tr>
              <tr className="border-t border-border">
                <td className="text-text-primary">Energy charges ({results.totalUnits} units)</td>
                <td className="text-right text-text-primary">{fmt(results.totalEnergyCost)}</td>
              </tr>
              <tr>
                <td className="text-text-muted pl-8 text-xs">Levies (REP + EPRA + WARMA)</td>
                <td className="text-right text-text-muted text-xs">{fmt(results.totalLevies)}</td>
              </tr>
              <tr>
                <td className="text-text-muted pl-8 text-xs">Fuel Cost + Forex Adjustment</td>
                <td className="text-right text-text-muted text-xs">{fmt(results.totalFCC)}</td>
              </tr>
              <tr>
                <td className="text-text-muted pl-8 text-xs">VAT (16%)</td>
                <td className="text-right text-text-muted text-xs">{fmt(results.totalVAT)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Band Breakdown */}
        {results.breakdown.length > 0 && (
          <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
            <div className="px-5 py-3 border-b border-border bg-bg-elevated">
              <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
                Tariff Band Breakdown
              </h3>
            </div>
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
        )}

        {/* Tariff Reference */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              KPLC Domestic Tariff Bands
            </h3>
          </div>
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
      </div>
    </ToolShell>
  );
}
