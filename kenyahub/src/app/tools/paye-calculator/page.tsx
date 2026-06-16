"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import payeData from "@/data/paye-bands.json";

const tool = TOOLS.find((t) => t.slug === "paye-calculator")!;

function calculatePAYE(grossSalary: number) {
  const bands = payeData.payeBands;
  let taxableIncome = grossSalary;
  let totalPAYE = 0;

  for (const band of bands) {
    const max = band.max ?? Infinity;
    if (taxableIncome <= 0) break;

    const taxableInBand = Math.min(taxableIncome, max) - (band.min > 0 ? band.min - 1 : 0);
    if (taxableInBand > 0) {
      totalPAYE += taxableInBand * (band.rate / 100);
    }
    if (taxableIncome <= max) break;
  }

  return Math.max(0, totalPAYE - payeData.personalRelief);
}

function calculateNHIF(grossSalary: number) {
  const bands = payeData.nhifBands;
  for (const band of bands) {
    const max = band.max ?? Infinity;
    if (grossSalary >= band.min && grossSalary <= max) {
      return band.contribution;
    }
  }
  return 1700;
}

function calculateNSSF(grossSalary: number) {
  const tier1 = Math.min(grossSalary, payeData.nssf.tier1Limit) * (payeData.nssf.rate / 100);
  const tier2 =
    grossSalary > payeData.nssf.tier1Limit
      ? Math.min(grossSalary - payeData.nssf.tier1Limit, payeData.nssf.tier2Limit - payeData.nssf.tier1Limit) *
        (payeData.nssf.rate / 100)
      : 0;
  return Math.round((tier1 + tier2) * 100) / 100;
}

function calculateHousingLevy(grossSalary: number) {
  return Math.round(grossSalary * (payeData.housingLevy.employeeRate / 100) * 100) / 100;
}

const faq = [
  {
    question: "What PAYE tax bands apply in Kenya for FY 2024/25?",
    answer:
      "Kenya uses progressive tax bands: 10% for the first KES 24,000, 25% for KES 24,001–32,333, 30% for KES 32,334–500,000, 32.5% for KES 500,001–800,000, and 35% above KES 800,000. A personal relief of KES 2,400 per month is applied.",
  },
  {
    question: "Is the Affordable Housing Levy mandatory?",
    answer:
      "Yes, since the Finance Act 2023 and the Supreme Court ruling upholding it, all employed persons pay 1.5% of gross salary as the Affordable Housing Levy. The employer also contributes 1.5%. The employee portion qualifies as a tax relief.",
  },
  {
    question: "What are the new NSSF rates in Kenya?",
    answer:
      "Under the NSSF Act 2013 (now in effect), employees contribute 6% of pensionable pay. Tier I covers up to KES 7,000 (max KES 420) and Tier II covers KES 7,001–36,000 (max KES 1,740). The employer matches these contributions.",
  },
  {
    question: "How is NHIF calculated in Kenya?",
    answer:
      "NHIF uses income-banded fixed contributions. For example, salary KES 6,000–7,999 pays KES 300/month, while salary above KES 100,000 pays KES 1,700/month. There are 17 bands in total.",
  },
  {
    question: "Does this calculator include the Housing Levy tax relief?",
    answer:
      "Yes. The employee's Housing Levy contribution qualifies as tax relief, which effectively reduces your PAYE. This calculator applies that relief automatically to give you the most accurate net pay figure.",
  },
];

export default function PAYECalculatorPage() {
  const [gross, setGross] = useState<number>(100000);
  const [showAnnual, setShowAnnual] = useState(false);

  const results = useMemo(() => {
    const housingLevy = calculateHousingLevy(gross);
    const nssfEmployee = calculateNSSF(gross);
    const nhif = calculateNHIF(gross);

    // Housing levy relief reduces taxable income for PAYE
    const taxableAfterRelief = gross - nssfEmployee - housingLevy;
    const paye = calculatePAYE(taxableAfterRelief > 0 ? taxableAfterRelief : gross);

    const totalDeductions = paye + nhif + nssfEmployee + housingLevy;
    const netPay = gross - totalDeductions;

    const employerNSSF = nssfEmployee; // Employer matches
    const employerHousing = Math.round(gross * (payeData.housingLevy.employerRate / 100) * 100) / 100;

    return {
      gross,
      paye: Math.round(paye * 100) / 100,
      nhif,
      nssf: nssfEmployee,
      housingLevy,
      totalDeductions: Math.round(totalDeductions * 100) / 100,
      netPay: Math.round(netPay * 100) / 100,
      employerNSSF,
      employerHousing,
      effectiveTaxRate: gross > 0 ? Math.round((paye / gross) * 10000) / 100 : 0,
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
            step={1000}
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

        {/* Monthly / Annual Toggle */}
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

        {/* Result */}
        <div className="result-box">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-text-secondary">Net Take-Home Pay</span>
            <span className="text-xs text-text-muted">
              Effective tax rate: {results.effectiveTaxRate}%
            </span>
          </div>
          <p className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-outfit)] text-kenya-green-light">
            {fmt(results.netPay)}
          </p>
          <p className="text-xs text-text-muted mt-2">
            {showAnnual ? "per year" : "per month"} • After all statutory deductions
          </p>
        </div>

        {/* Deductions Breakdown */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              Deductions Breakdown
            </h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Deduction</th>
                <th className="text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-text-primary">Gross Salary</td>
                <td className="text-right font-semibold text-text-primary">{fmt(results.gross)}</td>
              </tr>
              <tr>
                <td className="text-kenya-red-light">PAYE (Income Tax)</td>
                <td className="text-right text-kenya-red-light">− {fmt(results.paye)}</td>
              </tr>
              <tr>
                <td className="text-kenya-red-light">NHIF</td>
                <td className="text-right text-kenya-red-light">− {fmt(results.nhif)}</td>
              </tr>
              <tr>
                <td className="text-kenya-red-light">NSSF (Employee)</td>
                <td className="text-right text-kenya-red-light">− {fmt(results.nssf)}</td>
              </tr>
              <tr>
                <td className="text-kenya-red-light">Housing Levy (1.5%)</td>
                <td className="text-right text-kenya-red-light">− {fmt(results.housingLevy)}</td>
              </tr>
              <tr className="border-t-2 border-border">
                <td className="font-semibold text-text-primary">Total Deductions</td>
                <td className="text-right font-semibold text-kenya-red-light">
                  − {fmt(results.totalDeductions)}
                </td>
              </tr>
              <tr className="bg-kenya-green/10">
                <td className="font-bold text-kenya-green-light text-base">Net Pay</td>
                <td className="text-right font-bold text-kenya-green-light text-base">
                  {fmt(results.netPay)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Employer Costs */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            Employer Additional Costs
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-text-muted text-xs">NSSF (Employer Match)</p>
              <p className="font-semibold text-text-primary">{fmt(results.employerNSSF)}</p>
            </div>
            <div>
              <p className="text-text-muted text-xs">Housing Levy (Employer 1.5%)</p>
              <p className="font-semibold text-text-primary">{fmt(results.employerHousing)}</p>
            </div>
          </div>
        </div>

        {/* Tax Bands Reference */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              PAYE Tax Bands — FY {payeData.fiscalYear}
            </h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Income Band</th>
                <th className="text-right">Tax Rate</th>
              </tr>
            </thead>
            <tbody>
              {payeData.payeBands.map((band, i) => (
                <tr key={i}>
                  <td className="text-text-secondary">
                    KES {band.min.toLocaleString()} –{" "}
                    {band.max ? `KES ${band.max.toLocaleString()}` : "Above"}
                  </td>
                  <td className="text-right font-medium text-text-primary">{band.rate}%</td>
                </tr>
              ))}
              <tr>
                <td className="text-kenya-green-light">Personal Relief</td>
                <td className="text-right font-medium text-kenya-green-light">
                  KES {payeData.personalRelief.toLocaleString()}/month
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ToolShell>
  );
}
