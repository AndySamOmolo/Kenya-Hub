"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import insuranceData from "@/data/vehicle-insurance-rates.json";

const tool = TOOLS.find((t) => t.slug === "vehicle-insurance-calculator")!;

const faq = [
  {
    question: "Is vehicle insurance mandatory in Kenya?",
    answer: "Yes. Third Party Only insurance is the minimum legal requirement under the Insurance (Motor Vehicle Third Party Risks) Act (Cap 405). Driving without valid insurance is a criminal offence with a fine of up to KES 100,000 or imprisonment.",
  },
  {
    question: "What is the minimum car insurance cost in Kenya?",
    answer: "The minimum Third Party Only insurance for a private vehicle is KES 7,500 per year. This covers injury/death to third parties and damage to third party property, but does not cover your own vehicle.",
  },
  {
    question: "What is the difference between Third Party and Comprehensive insurance?",
    answer: "Third Party Only covers damage to other people and their property. Comprehensive cover additionally protects your own vehicle against damage, theft, fire, and windscreen breakage. Comprehensive premiums are typically 4–6% of your vehicle's value.",
  },
  {
    question: "Who sets minimum insurance premiums in Kenya?",
    answer: "The Insurance Regulatory Authority (IRA) sets minimum premium rates for all motor insurance categories. Actual premiums from insurance companies may be higher based on the insurer's risk assessment and your driving history.",
  },
  {
    question: "Do boda bodas need insurance?",
    answer: "Yes. Motorcycles (including boda bodas) require at least Third Party Only insurance with a minimum premium of KES 4,000/year. This is enforced by NTSA and traffic police.",
  },
];

export default function VehicleInsuranceCalculatorPage() {
  const [vehicleClass, setVehicleClass] = useState("private");
  const [vehicleValue, setVehicleValue] = useState<number>(1500000);

  const selectedClass = insuranceData.vehicleClasses.find((c) => c.id === vehicleClass)!;

  const results = useMemo(() => {
    const thirdPartyMin = selectedClass.thirdParty.minimumPremium;
    const compRateMin = selectedClass.comprehensive.rateMin;
    const compRateMax = selectedClass.comprehensive.rateMax;
    const compMin = Math.max(
      selectedClass.comprehensive.minimumPremium,
      Math.round(vehicleValue * (compRateMin / 100))
    );
    const compMax = Math.max(
      selectedClass.comprehensive.minimumPremium,
      Math.round(vehicleValue * (compRateMax / 100))
    );

    return {
      thirdPartyMin,
      comprehensiveMin: compMin,
      comprehensiveMax: compMax,
      comprehensiveRateMin: compRateMin,
      comprehensiveRateMax: compRateMax,
      savings: compMin - thirdPartyMin,
    };
  }, [vehicleClass, vehicleValue, selectedClass]);

  const fmt = (n: number) =>
    `KES ${n.toLocaleString("en-KE", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Vehicle Class */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <label className="block text-sm font-medium text-text-secondary mb-3">
            Vehicle Class
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {insuranceData.vehicleClasses.map((vc) => (
              <button
                key={vc.id}
                onClick={() => setVehicleClass(vc.id)}
                className={`px-3 py-3 rounded-lg text-sm font-medium transition-all text-center ${
                  vehicleClass === vc.id
                    ? "bg-gold text-kenya-black"
                    : "bg-bg-elevated border border-border text-text-secondary hover:text-gold"
                }`}
              >
                {vc.name}
              </button>
            ))}
          </div>
          <p className="text-xs text-text-muted mt-2">{selectedClass.description}</p>
        </div>

        {/* Vehicle Value (for comprehensive) */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Vehicle Value (KES) — for comprehensive quote
          </label>
          <input
            type="number"
            value={vehicleValue}
            onChange={(e) => setVehicleValue(Math.max(0, Number(e.target.value)))}
            className="input-field text-xl font-bold font-[family-name:var(--font-outfit)]"
            min={0}
            step={100000}
            id="vehicle-value-input"
          />
          <input
            type="range"
            min={100000}
            max={10000000}
            step={100000}
            value={vehicleValue}
            onChange={(e) => setVehicleValue(Number(e.target.value))}
            className="w-full mt-3 accent-gold"
          />
          <div className="flex justify-between text-xs text-text-muted mt-1">
            <span>KES 100K</span>
            <span>KES 10M</span>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="result-box">
            <p className="text-xs text-text-muted mb-1">Third Party Only (Minimum)</p>
            <p className="text-2xl sm:text-3xl font-extrabold font-[family-name:var(--font-outfit)] text-kenya-green-light">
              {fmt(results.thirdPartyMin)}
            </p>
            <p className="text-[0.625rem] text-text-muted mt-1">/year — minimum legal requirement</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-text-muted mb-1">Comprehensive (Estimate Range)</p>
            <p className="text-2xl sm:text-3xl font-extrabold font-[family-name:var(--font-outfit)] text-gold">
              {fmt(results.comprehensiveMin)} – {fmt(results.comprehensiveMax)}
            </p>
            <p className="text-[0.625rem] text-text-muted mt-1">
              /year — {results.comprehensiveRateMin}%–{results.comprehensiveRateMax}% of vehicle value
            </p>
          </div>
        </div>

        {/* Coverage Comparison */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              Coverage Comparison
            </h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Coverage</th>
                <th className="text-center">Third Party</th>
                <th className="text-center">Comprehensive</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-text-secondary">Third party injury/death</td>
                <td className="text-center text-kenya-green-light">✓</td>
                <td className="text-center text-kenya-green-light">✓</td>
              </tr>
              <tr>
                <td className="text-text-secondary">Third party property damage</td>
                <td className="text-center text-kenya-green-light">✓</td>
                <td className="text-center text-kenya-green-light">✓</td>
              </tr>
              <tr>
                <td className="text-text-secondary">Own vehicle damage</td>
                <td className="text-center text-kenya-red-light">✗</td>
                <td className="text-center text-kenya-green-light">✓</td>
              </tr>
              <tr>
                <td className="text-text-secondary">Theft protection</td>
                <td className="text-center text-kenya-red-light">✗</td>
                <td className="text-center text-kenya-green-light">✓</td>
              </tr>
              <tr>
                <td className="text-text-secondary">Fire damage</td>
                <td className="text-center text-kenya-red-light">✗</td>
                <td className="text-center text-kenya-green-light">✓</td>
              </tr>
              <tr>
                <td className="text-text-secondary">Windscreen cover</td>
                <td className="text-center text-kenya-red-light">✗</td>
                <td className="text-center text-kenya-green-light">✓</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Additional Covers */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            Optional Add-On Covers
          </h3>
          <div className="space-y-3">
            {insuranceData.additionalCovers.map((cover, i) => (
              <div key={i} className="flex items-start justify-between gap-4 text-xs">
                <div>
                  <p className="text-text-primary font-medium">{cover.name}</p>
                  <p className="text-text-muted">{cover.description}</p>
                </div>
                <span className="text-gold font-medium whitespace-nowrap">{cover.premium}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            Important Notes
          </h3>
          <ul className="space-y-2">
            {insuranceData.notes.map((note, i) => (
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
