"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import solarData from "@/data/solar-irradiance.json";

const tool = TOOLS.find((t) => t.slug === "solar-roi-calculator")!;
const d = solarData.systemDefaults;

const faq = [
  { question: "Is solar worth it in Kenya?", answer: "Yes. Kenya sits on the equator with excellent year-round sunlight (5.3–6.5 kWh/m²/day). Most grid-tied solar systems pay for themselves in 3–6 years and generate free electricity for 20+ years after that." },
  { question: "How much does a solar system cost in Kenya?", answer: "The average cost is approximately KES 80,000 per kilowatt (kW) installed for a grid-tied system including panels, inverter, mounting, and installation. A typical household might need a 2–5 kW system (KES 160,000–400,000)." },
  { question: "How many solar panels do I need for my home?", answer: "It depends on your electricity consumption. A household spending KES 5,000/month on KPLC tokens typically needs a 2–3 kW system (6–10 panels of 330W each)." },
  { question: "What is the payback period for solar in Kenya?", answer: "Typically 3–6 years depending on your location, system size, and current electricity spending. After payback, you enjoy 15–20 more years of free electricity." },
  { question: "Do solar panels work during the rainy season?", answer: "Yes, but at reduced efficiency. Solar panels still generate electricity on cloudy days, typically at 10–30% of their rated capacity. Kenya's rainy seasons are relatively short (March–May and Oct–Dec)." },
];

export default function SolarROIPage() {
  const [monthlyBill, setMonthlyBill] = useState(5000);
  const [regionId, setRegionId] = useState("nairobi");
  const [systemCostPerKw, setSystemCostPerKw] = useState(d.avgCostPerKw);

  const results = useMemo(() => {
    const region = solarData.regions.find((r) => r.id === regionId)!;
    const irradiance = region.irradiance;
    const monthlyConsumption = monthlyBill / d.kplcAvgRatePerKwh;
    const dailyConsumption = monthlyConsumption / 30;
    const systemSizeKw = dailyConsumption / (irradiance * d.panelEfficiency * (1 - d.systemLosses));
    const recommendedSize = Math.ceil(systemSizeKw * 10) / 10;
    const systemCost = Math.round(recommendedSize * systemCostPerKw);
    const monthlyGeneration = Math.round(recommendedSize * irradiance * d.panelEfficiency * (1 - d.systemLosses) * 30);
    const monthlySavings = Math.round(monthlyGeneration * d.kplcAvgRatePerKwh);
    const effectiveMonthlySavings = Math.min(monthlySavings, monthlyBill);
    const paybackYears = systemCost / (effectiveMonthlySavings * 12);
    let cumulativeSavings = 0;
    for (let y = 1; y <= d.systemLifespan; y++) {
      const degradation = Math.pow(1 - d.annualDegradation, y - 1);
      cumulativeSavings += effectiveMonthlySavings * 12 * degradation;
    }
    const netProfit = Math.round(cumulativeSavings - systemCost);
    const roofArea = Math.round(recommendedSize * d.panelAreaPerKw * 10) / 10;

    return { region, irradiance, monthlyConsumption: Math.round(monthlyConsumption), recommendedSize, systemCost, monthlyGeneration, monthlySavings: effectiveMonthlySavings, paybackYears: Math.round(paybackYears * 10) / 10, cumulativeSavings: Math.round(cumulativeSavings), netProfit, roofArea };
  }, [monthlyBill, regionId, systemCostPerKw]);

  const fmt = (n: number) =>
    `KES ${n.toLocaleString("en-KE", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Monthly bill input */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Current Monthly Electricity Bill (KES)
          </label>
          <input type="number" value={monthlyBill} onChange={(e) => setMonthlyBill(Math.max(0, Number(e.target.value)))} className="input-field text-2xl font-bold font-[family-name:var(--font-outfit)]" min={0} step={500} id="monthly-bill-input" />
          <input type="range" min={0} max={30000} step={500} value={monthlyBill} onChange={(e) => setMonthlyBill(Number(e.target.value))} className="w-full mt-3 accent-gold" />
          <div className="flex justify-between text-xs text-text-muted mt-1"><span>KES 0</span><span>KES 30,000</span></div>
        </div>

        {/* Region selector */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <label className="block text-sm font-medium text-text-secondary mb-3">Your Location</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {solarData.regions.map((r) => (
              <button key={r.id} onClick={() => setRegionId(r.id)} className={`px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${regionId === r.id ? "bg-gold text-kenya-black" : "bg-bg-elevated border border-border text-text-secondary hover:text-gold"}`}>
                {r.name}
                <span className="block text-[0.6rem] mt-0.5 opacity-70">{r.irradiance} kWh/m²/day</span>
              </button>
            ))}
          </div>
        </div>

        {/* System cost override */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <label className="block text-sm font-medium text-text-secondary mb-2">
            System Cost per kW (KES) — <span className="text-text-muted">adjust if you have a quote</span>
          </label>
          <input type="number" value={systemCostPerKw} onChange={(e) => setSystemCostPerKw(Math.max(10000, Number(e.target.value)))} className="input-field text-lg font-semibold" min={10000} step={5000} id="system-cost-input" />
        </div>

        {/* Results */}
        <div className="result-box">
          <span className="text-sm text-text-secondary mb-4 block">Solar Investment Summary</span>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-text-muted mb-1">Payback Period</p>
              <p className="text-2xl sm:text-3xl font-extrabold font-[family-name:var(--font-outfit)] text-gold">{results.paybackYears} years</p>
            </div>
            <div>
              <p className="text-xs text-text-muted mb-1">Monthly Savings</p>
              <p className="text-2xl sm:text-3xl font-extrabold font-[family-name:var(--font-outfit)] text-kenya-green-light">{fmt(results.monthlySavings)}</p>
            </div>
          </div>
        </div>

        {/* Details table */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">System Details</h3>
          </div>
          <table className="data-table">
            <tbody>
              <tr><td className="text-text-secondary">Recommended System Size</td><td className="text-right font-semibold text-text-primary">{results.recommendedSize} kW</td></tr>
              <tr><td className="text-text-secondary">Estimated System Cost</td><td className="text-right font-semibold text-text-primary">{fmt(results.systemCost)}</td></tr>
              <tr><td className="text-text-secondary">Monthly Generation</td><td className="text-right font-semibold text-text-primary">{results.monthlyGeneration} kWh</td></tr>
              <tr><td className="text-text-secondary">Current Monthly Consumption</td><td className="text-right text-text-muted">{results.monthlyConsumption} kWh</td></tr>
              <tr><td className="text-text-secondary">Roof Space Needed</td><td className="text-right text-text-muted">{results.roofArea} m²</td></tr>
              <tr><td className="text-text-secondary">Solar Irradiance ({results.region.name})</td><td className="text-right text-text-muted">{results.irradiance} kWh/m²/day</td></tr>
              <tr className="border-t-2 border-border bg-kenya-green/10"><td className="font-bold text-kenya-green-light">25-Year Net Profit</td><td className="text-right font-bold text-kenya-green-light">{fmt(results.netProfit)}</td></tr>
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">Important Notes</h3>
          <ul className="space-y-2">
            {solarData.notes.map((note, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>{note}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </ToolShell>
  );
}
