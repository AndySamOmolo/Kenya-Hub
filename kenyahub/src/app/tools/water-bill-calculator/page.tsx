"use client";

import { useState, useMemo } from "react";
import { X } from "lucide-react";
import { TOOLS } from "@/lib/tools-registry";
import waterData from "@/data/water-tariffs.json";

const tool = TOOLS.find((t) => t.slug === "water-bill-calculator")!;

function calculateWaterBill(utilityId: string, consumption: number, includeSewer: boolean = true) {
  const utility = waterData.utilities.find((u) => u.id === utilityId)!;
  let waterCharge = 0;
  const breakdown: { band: string; units: number; rate: number; amount: number }[] = [];
  let remaining = consumption;

  for (const band of utility.bands) {
    if (remaining <= 0) break;
    const bandMax = band.max ?? Infinity;
    const bandSize = band.max !== null ? bandMax - (band.min === 0 ? 0 : band.min - 1) : Infinity;
    const unitsInBand = Math.min(remaining, bandSize);
    const amount = Math.round(unitsInBand * band.rate);
    waterCharge += amount;
    breakdown.push({ band: band.label, units: unitsInBand, rate: band.rate, amount });
    remaining -= unitsInBand;
  }

  const sewerageCharge = includeSewer ? Math.round(waterCharge * utility.sewerageRate) : 0;
  const meterRent = utility.meterRent;
  const levyRate = waterData.wasrebLevyRate ?? 0.04;
  const wasrebLevy = Math.round((waterCharge + sewerageCharge) * levyRate);
  const total = waterCharge + sewerageCharge + meterRent + wasrebLevy;

  return { waterCharge, sewerageCharge, meterRent, wasrebLevy, levyRate, total, breakdown, utility };
}

export default function WaterBillCalculatorPage() {
  const [utilityId, setUtilityId] = useState("ncwsc");
  const [consumption, setConsumption] = useState(15);
  const [includeSewer, setIncludeSewer] = useState(true);

  const results = useMemo(
    () => calculateWaterBill(utilityId, consumption, includeSewer),
    [utilityId, consumption, includeSewer]
  );

  const fmt = (n: number) =>
    `KES ${n.toLocaleString("en-KE", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

  return (
    <>
      <div className="space-y-6">
        {/* Utility selector */}
        <div className="bg-bg-card border border-border rounded-xl p-5 sm:p-6">
          <span className="block text-sm font-medium text-text-secondary mb-3">Water Utility</span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {waterData.utilities.map((u) => (
              <button
                key={u.id}
                type="button"
                aria-pressed={utilityId === u.id}
                onClick={() => setUtilityId(u.id)}
                className={`px-3 py-2.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  utilityId === u.id
                    ? "bg-gold text-kenya-black font-bold"
                    : "bg-bg-elevated border border-border text-text-secondary hover:text-gold"
                }`}
              >
                {u.city}
              </button>
            ))}
          </div>
        </div>

        {/* Consumption input */}
        <div className="bg-bg-card border border-border rounded-xl p-5 sm:p-6">
          <label
            htmlFor="consumption-input"
            className="block text-sm font-medium text-text-secondary mb-2"
          >
            Monthly Consumption (m³)
          </label>
          <div className="relative">
            <input
              type="number"
              inputMode="numeric"
              value={consumption === 0 ? "" : consumption}
              onChange={(e) => {
                const raw = e.target.value.replace(/^0+(?=\d)/, "");
                setConsumption(raw === "" ? 0 : Math.max(0, Number(raw)));
              }}
              placeholder="e.g. 15"
              className="input-field text-xl sm:text-2xl font-bold font-[family-name:var(--font-outfit)] pr-11! border border-border dark:border-white/15 tabular-nums"
              style={{ paddingRight: "2.75rem" }}
              min={0}
              step={1}
              id="consumption-input"
            />
            {consumption > 0 && (
              <button
                type="button"
                onClick={() => setConsumption(0)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                aria-label="Clear consumption"
              >
                <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
              </button>
            )}
          </div>
          <input
            type="range"
            aria-label="Monthly water consumption slider"
            min={0}
            max={100}
            step={1}
            value={Math.min(100, consumption)}
            onChange={(e) => setConsumption(Number(e.target.value))}
            className="w-full mt-3 accent-gold"
          />
          <div className="flex justify-between text-xs text-text-muted mt-1">
            <span>0 m³</span>
            <span>100 m³</span>
          </div>
          <label className="flex items-center gap-2.5 pt-3 text-xs sm:text-sm text-text-secondary cursor-pointer select-none">
            <input
              type="checkbox"
              checked={includeSewer}
              onChange={(e) => setIncludeSewer(e.target.checked)}
              className="w-4 h-4 accent-gold rounded cursor-pointer"
            />
            <span>Connected to county sewer line (applies {Math.round(results.utility.sewerageRate * 100)}% sewerage surcharge)</span>
          </label>
        </div>

        {/* Live Result Region */}
        <div role="status" aria-live="polite" aria-atomic="true" className="space-y-6">
          <div className="result-box">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-sm text-text-secondary">Estimated Monthly Bill</span>
              <span className="text-xs text-text-muted">{results.utility.name}</span>
            </div>
            <p className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-outfit)] text-kenya-green-light tabular-nums">
              {fmt(results.total)}
            </p>
            <p className="text-xs text-text-muted mt-2 tabular-nums">
              For {consumption} m³ consumption in {results.utility.city} (incl. Meter Rent &amp; WASREB Levy)
            </p>
          </div>

          {/* Breakdown table */}
          <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
            <div className="px-5 py-3 border-b border-border bg-bg-elevated">
              <h2 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
                Bill Breakdown
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th className="text-right whitespace-nowrap">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {results.breakdown.map((b, i) => (
                    <tr key={i}>
                      <td className="text-text-muted text-xs">
                        {b.band} — {b.units} m³ × {fmt(b.rate)}/m³
                      </td>
                      <td className="text-right text-text-muted text-xs whitespace-nowrap tabular-nums">
                        {fmt(b.amount)}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="text-text-primary">Water Consumption Charge</td>
                    <td className="text-right font-semibold text-text-primary whitespace-nowrap tabular-nums">
                      {fmt(results.waterCharge)}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-text-primary">
                      Sewerage ({(results.utility.sewerageRate * 100).toFixed(0)}%)
                    </td>
                    <td className="text-right font-semibold text-text-primary whitespace-nowrap tabular-nums">
                      {fmt(results.sewerageCharge)}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-text-muted text-xs">Monthly Meter Rent (1/2-inch domestic)</td>
                    <td className="text-right text-text-muted text-xs whitespace-nowrap tabular-nums">
                      {fmt(results.meterRent)}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-text-muted text-xs">
                      WASREB Regulatory Levy ({Math.round(results.levyRate * 100)}%)
                    </td>
                    <td className="text-right text-text-muted text-xs whitespace-nowrap tabular-nums">
                      {fmt(results.wasrebLevy)}
                    </td>
                  </tr>
                  <tr className="border-t-2 border-border bg-kenya-green/10">
                    <td className="font-bold text-kenya-green-light text-base">Total Monthly Bill</td>
                    <td className="text-right font-bold text-kenya-green-light text-base whitespace-nowrap tabular-nums">
                      {fmt(results.total)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h2 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            Important Notes
          </h2>
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
    </>
  );
}
