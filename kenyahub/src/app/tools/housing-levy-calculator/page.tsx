"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import levyData from "@/data/housing-levy-rates.json";

const tool = TOOLS.find((t) => t.slug === "housing-levy-calculator")!;

const faq = [
  {
    question: "What is the Affordable Housing Levy in Kenya?",
    answer: "The Affordable Housing Levy (AHL) is a statutory deduction of 1.5% of gross salary, introduced by the Finance Act 2023. Both employer and employee each contribute 1.5%, totaling 3% of gross salary going to the Affordable Housing Programme.",
  },
  {
    question: "Is the Housing Levy mandatory?",
    answer: "Yes, it is mandatory for all employed persons. The Supreme Court of Kenya upheld its constitutionality in November 2023. Self-employed persons also contribute 1.5% of their declared income.",
  },
  {
    question: "Does the Housing Levy reduce my PAYE?",
    answer: "Yes. The employee's 1.5% contribution qualifies as a tax relief against PAYE, which means your net PAYE tax payable is reduced by the levy amount. This makes the effective cost less than the full 1.5%.",
  },
  {
    question: "When is the Housing Levy remitted?",
    answer: "Employers must remit both employee and employer contributions to KRA through the i-Tax platform by the 9th of the month following the deduction.",
  },
  {
    question: "What does the Housing Levy fund?",
    answer: "The levy funds the Affordable Housing Programme, which aims to deliver 250,000 affordable housing units across Kenya. Contributors may be eligible for affordable housing allocation.",
  },
];

export default function HousingLevyCalculatorPage() {
  const [gross, setGross] = useState<number>(100000);
  const [showAnnual, setShowAnnual] = useState(false);

  const results = useMemo(() => {
    const employeeLevy = Math.round(gross * (levyData.employeeRate / 100) * 100) / 100;
    const employerLevy = Math.round(gross * (levyData.employerRate / 100) * 100) / 100;
    const totalLevy = employeeLevy + employerLevy;
    const payeReduction = employeeLevy; // Relief equals employee contribution

    return {
      gross,
      employeeLevy,
      employerLevy,
      totalLevy,
      payeReduction,
      netCostToEmployee: Math.round((employeeLevy - payeReduction * 0.3) * 100) / 100, // Approx 30% tax band
      effectiveRate: gross > 0 ? Math.round(((employeeLevy - payeReduction * 0.3) / gross) * 10000) / 100 : 0,
    };
  }, [gross]);

  const fmt = (n: number) => {
    const multiplier = showAnnual ? 12 : 1;
    return `KES ${(n * multiplier).toLocaleString("en-KE", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Input */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Monthly Gross Salary (KES)
          </label>
          <input
            type="number"
            value={gross}
            onChange={(e) => setGross(Math.max(0, Number(e.target.value)))}
            className="input-field text-2xl font-bold font-[family-name:var(--font-outfit)]"
            min={0}
            step={5000}
            id="gross-salary-input"
          />
          <input
            type="range"
            min={0}
            max={500000}
            step={5000}
            value={gross}
            onChange={(e) => setGross(Number(e.target.value))}
            className="w-full mt-3 accent-gold"
          />
          <div className="flex justify-between text-xs text-text-muted mt-1">
            <span>KES 0</span>
            <span>KES 500,000</span>
          </div>
        </div>

        {/* Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowAnnual(false)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              !showAnnual
                ? "bg-gold text-kenya-black"
                : "bg-bg-card border border-border text-text-secondary hover:text-gold"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setShowAnnual(true)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              showAnnual
                ? "bg-gold text-kenya-black"
                : "bg-bg-card border border-border text-text-secondary hover:text-gold"
            }`}
          >
            Annual
          </button>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="result-box">
            <p className="text-xs text-text-muted mb-1">Employee Contribution (1.5%)</p>
            <p className="text-2xl font-extrabold font-[family-name:var(--font-outfit)] text-kenya-red-light">
              {fmt(results.employeeLevy)}
            </p>
            <p className="text-[0.625rem] text-text-muted mt-1">Deducted from your salary</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-text-muted mb-1">Employer Contribution (1.5%)</p>
            <p className="text-2xl font-extrabold font-[family-name:var(--font-outfit)] text-gold">
              {fmt(results.employerLevy)}
            </p>
            <p className="text-[0.625rem] text-text-muted mt-1">Paid by your employer</p>
          </div>
        </div>

        {/* Breakdown Table */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              Impact on Your Pay
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
              <tr>
                <td className="text-text-primary">Gross Salary</td>
                <td className="text-right font-semibold text-text-primary">{fmt(results.gross)}</td>
              </tr>
              <tr>
                <td className="text-kenya-red-light">Employee Levy (1.5%)</td>
                <td className="text-right text-kenya-red-light">− {fmt(results.employeeLevy)}</td>
              </tr>
              <tr>
                <td className="text-kenya-green-light">PAYE Tax Relief (from levy)</td>
                <td className="text-right text-kenya-green-light">+ {fmt(results.payeReduction)}</td>
              </tr>
              <tr className="border-t border-border">
                <td className="text-gold">Employer Levy (1.5%)</td>
                <td className="text-right text-gold">{fmt(results.employerLevy)}</td>
              </tr>
              <tr className="bg-kenya-green/10 border-t-2 border-border">
                <td className="font-bold text-text-primary">Total to Housing Fund</td>
                <td className="text-right font-bold text-text-primary">{fmt(results.totalLevy)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* About */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            About the Housing Levy
          </h3>
          <ul className="space-y-2">
            {levyData.notes.map((note, i) => (
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
