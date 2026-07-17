"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import waterData from "@/data/water-tariffs.json";

const tool = TOOLS.find((t) => t.slug === "water-bill-calculator")!;

function calculateWaterBill(utilityId: string, consumption: number) {
  const utility = waterData.utilities.find((u) => u.id === utilityId)!;
  let waterCharge = 0;
  const breakdown: { band: string; units: number; rate: number; amount: number }[] = [];
  let remaining = consumption;

  for (const band of utility.bands) {
    if (remaining <= 0) break;
    const bandMax = band.max ?? Infinity;
    const bandSize = bandMax - band.min + 1;
    const unitsInBand = Math.min(remaining, bandSize);
    const amount = Math.round(unitsInBand * band.rate);
    waterCharge += amount;
    breakdown.push({ band: band.label, units: unitsInBand, rate: band.rate, amount });
    remaining -= unitsInBand;
  }

  const sewerageCharge = Math.round(waterCharge * utility.sewerageRate);
  const meterRent = utility.meterRent;
  const total = waterCharge + sewerageCharge + meterRent;

  return { waterCharge, sewerageCharge, meterRent, total, breakdown, utility };
}

const faq = [
  {
    question: "How is my water bill calculated in Kenya?",
    answer:
      "Water bills in Kenya use a step-function (block) tariff. You pay a lower rate for the first few cubic metres (lifeline tariff), and the rate increases as your consumption rises. A sewerage surcharge (typically 75% of the water charge) and fixed meter rent are added.",
  },
  {
    question: "What is the lifeline tariff?",
    answer:
      "The lifeline tariff is a subsidized rate for the first 0–6 cubic metres of water consumed per month. It ensures basic water access for low-income households at a very low cost (typically KES 2–3 per m³).",
  },
  {
    question: "How much water does an average Kenyan household use?",
    answer:
      "An average household of 4–5 people in Nairobi uses approximately 10–20 cubic metres (m³) per month. This covers cooking, cleaning, bathing, and laundry. Households with gardens or larger families may use 30+ m³.",
  },
  {
    question: "Why is there a sewerage charge?",
    answer:
      "The sewerage charge covers wastewater treatment and sewer network maintenance. It's calculated as a percentage (usually 75%) of your water consumption charge. Properties not connected to the sewer network may be exempt.",
  },
  {
    question: "Which body regulates water tariffs in Kenya?",
    answer:
      "The Water Services Regulatory Board (WASREB) approves all water and sewerage tariffs in Kenya. Individual water utilities (like NCWSC for Nairobi) propose tariffs, and WASREB approves them after public consultation.",
  },
];

export default function WaterBillCalculatorPage() {
  const [utilityId, setUtilityId] = useState("ncwsc");
  const [consumption, setConsumption] = useState(15);

  const results = useMemo(() => calculateWaterBill(utilityId, consumption), [utilityId, consumption]);

  const fmt = (n: number) =>
    `KES ${n.toLocaleString("en-KE", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Utility selector */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <label className="block text-sm font-medium text-text-secondary mb-3">Water Utility</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {waterData.utilities.map((u) => (
              <button
                key={u.id}
                onClick={() => setUtilityId(u.id)}
                className={`px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                  utilityId === u.id
                    ? "bg-gold text-kenya-black"
                    : "bg-bg-elevated border border-border text-text-secondary hover:text-gold"
                }`}
              >
                {u.city}
              </button>
            ))}
          </div>
        </div>

        {/* Consumption input */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Monthly Consumption (m³)
          </label>
          <input
            type="number"
            value={consumption}
            onChange={(e) => setConsumption(Math.max(0, Number(e.target.value)))}
            className="input-field text-2xl font-bold font-[family-name:var(--font-outfit)]"
            min={0}
            step={1}
            id="consumption-input"
          />
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={consumption}
            onChange={(e) => setConsumption(Number(e.target.value))}
            className="w-full mt-3 accent-gold"
          />
          <div className="flex justify-between text-xs text-text-muted mt-1">
            <span>0 m³</span>
            <span>100 m³</span>
          </div>
        </div>

        {/* Result */}
        <div className="result-box">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-text-secondary">Estimated Monthly Bill</span>
            <span className="text-xs text-text-muted">{results.utility.name}</span>
          </div>
          <p className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-outfit)] text-kenya-green-light">
            {fmt(results.total)}
          </p>
          <p className="text-xs text-text-muted mt-2">
            For {consumption} m³ consumption in {results.utility.city}
          </p>
        </div>

        {/* Breakdown table */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              Bill Breakdown
            </h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Item</th>
                <th className="text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {results.breakdown.map((b, i) => (
                <tr key={i}>
                  <td className="text-text-muted text-xs">
                    {b.band} — {b.units} m³ × {fmt(b.rate)}/m³
                  </td>
                  <td className="text-right text-text-muted text-xs">{fmt(b.amount)}</td>
                </tr>
              ))}
              <tr>
                <td className="text-text-primary">Water Charge</td>
                <td className="text-right font-semibold text-text-primary">{fmt(results.waterCharge)}</td>
              </tr>
              <tr>
                <td className="text-text-primary">
                  Sewerage ({(results.utility.sewerageRate * 100).toFixed(0)}%)
                </td>
                <td className="text-right font-semibold text-text-primary">{fmt(results.sewerageCharge)}</td>
              </tr>
              <tr>
                <td className="text-text-muted text-xs">Meter Rent</td>
                <td className="text-right text-text-muted text-xs">{fmt(results.meterRent)}</td>
              </tr>
              <tr className="border-t-2 border-border bg-kenya-green/10">
                <td className="font-bold text-kenya-green-light text-base">Total Bill</td>
                <td className="text-right font-bold text-kenya-green-light text-base">
                  {fmt(results.total)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            Important Notes
          </h3>
          <ul className="space-y-2">
            {waterData.notes.map((note, i) => (
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
