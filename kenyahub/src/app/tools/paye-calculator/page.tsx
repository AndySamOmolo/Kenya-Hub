"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import payeData from "@/data/paye-bands.json";

const tool = TOOLS.find((t) => t.slug === "paye-calculator")!;

function calculatePAYE(taxableIncome: number, insurancePremium: number = 0) {
  const bands = payeData.payeBands;
  let totalPAYE = 0;

  for (const band of bands) {
    const max = band.max ?? Infinity;
    if (taxableIncome <= 0) break;

    const taxableInBand =
      Math.min(taxableIncome, max) - (band.min > 0 ? band.min - 1 : 0);
    if (taxableInBand > 0) {
      totalPAYE += taxableInBand * (band.rate / 100);
    }
    if (taxableIncome <= max) break;
  }

  const insuranceRelief = Math.min(5000, insurancePremium * 0.15);
  return Math.max(0, totalPAYE - payeData.personalRelief - insuranceRelief);
}

function calculateSHA(grossSalary: number) {
  if (grossSalary <= 0) return 0;
  return Math.max(
    300,
    Math.round(grossSalary * (payeData.sha.rate / 100) * 100) / 100
  );
}

function calculateNSSF(grossSalary: number, tier1Only: boolean = false) {
  const tier1 =
    Math.min(grossSalary, payeData.nssf.tier1Limit) * (payeData.nssf.rate / 100);
  if (tier1Only) return Math.round(tier1 * 100) / 100;
  const tier2 =
    grossSalary > payeData.nssf.tier1Limit
      ? Math.min(
          grossSalary - payeData.nssf.tier1Limit,
          payeData.nssf.tier2Limit - payeData.nssf.tier1Limit
        ) *
        (payeData.nssf.rate / 100)
      : 0;
  return Math.round((tier1 + tier2) * 100) / 100;
}

function calculateHousingLevy(grossSalary: number) {
  return (
    Math.round(grossSalary * (payeData.housingLevy.employeeRate / 100) * 100) /
    100
  );
}

function computePayslip(
  gross: number,
  pensionContribution: number,
  mortgageInterest: number,
  insurancePremium: number,
  nssfTier1Only: boolean
) {
  const housingLevy = calculateHousingLevy(gross);
  const nssfEmployee = calculateNSSF(gross, nssfTier1Only);
  const sha = calculateSHA(gross);

  // Under the Tax Laws (Amendment) Act 2024:
  // Allowable pre-tax deductions: NSSF + SHA + Housing Levy + Pension (combined NSSF+Pension capped at 30,000/mo) + Mortgage Interest (capped at 30,000/mo)
  const allowablePension = Math.max(
    0,
    Math.min(30000 - nssfEmployee, pensionContribution)
  );
  const allowableMortgage = Math.min(30000, Math.max(0, mortgageInterest));

  const taxableIncome = Math.max(
    0,
    gross -
      nssfEmployee -
      sha -
      housingLevy -
      allowablePension -
      allowableMortgage
  );
  const paye = calculatePAYE(taxableIncome, insurancePremium);
  const statutoryDeductions = paye + sha + nssfEmployee + housingLevy;
  const netPay = gross - statutoryDeductions - pensionContribution;

  const employerNSSF = nssfEmployee;
  const employerHousing =
    Math.round(gross * (payeData.housingLevy.employerRate / 100) * 100) / 100;
  const totalEmployerCost = gross + employerNSSF + employerHousing;

  return {
    gross: Math.round(gross),
    taxableIncome: Math.round(taxableIncome),
    paye: Math.round(paye),
    sha: Math.round(sha),
    nssf: Math.round(nssfEmployee),
    housingLevy: Math.round(housingLevy),
    allowablePension: Math.round(allowablePension),
    allowableMortgage: Math.round(allowableMortgage),
    totalDeductions: Math.round(statutoryDeductions + pensionContribution),
    netPay: Math.round(netPay),
    employerNSSF: Math.round(employerNSSF),
    employerHousing: Math.round(employerHousing),
    totalEmployerCost: Math.round(totalEmployerCost),
    effectiveTaxRate:
      gross > 0 ? Math.round((paye / gross) * 10000) / 100 : 0,
  };
}

// Binary search to solve Reverse Net-to-Gross salary negotiation
function solveGrossForTargetNet(
  targetNet: number,
  pensionContribution: number,
  mortgageInterest: number,
  insurancePremium: number,
  nssfTier1Only: boolean
): number {
  if (targetNet <= 0) return 0;
  let low = targetNet;
  let high = targetNet * 2.2 + 50000;
  for (let i = 0; i < 40; i++) {
    const mid = (low + high) / 2;
    const res = computePayslip(
      mid,
      pensionContribution,
      mortgageInterest,
      insurancePremium,
      nssfTier1Only
    );
    if (res.netPay < targetNet) {
      low = mid;
    } else {
      high = mid;
    }
  }
  return Math.round((low + high) / 2);
}

const faq = [
  {
    question: "How does the Reverse Net-to-Gross Salary Calculator work?",
    answer:
      "When negotiating a job offer in Kenya, employers quote Gross Pay while employees care about Net Take-Home Pay. Switch to 'Target Net → Find Gross' and enter your desired bank take-home pay to see the exact Gross Salary you must negotiate for after KRA PAYE, SHA (2.75%), NSSF Year 4, and the 1.5% Housing Levy.",
  },
  {
    question: "What PAYE tax bands and pre-tax deductions apply in Kenya in 2026?",
    answer:
      "Kenya uses 5 progressive monthly bands: 10% (first KES 24,000), 25% (KES 24,001–32,333), 30% (KES 32,334–500,000), 32.5% (KES 500,001–800,000), and 35% (above KES 800,000), less KES 2,400 Personal Relief. Under the Tax Laws (Amendment) Act 2024, NSSF, SHIF/SHA (2.75%), and the 1.5% Affordable Housing Levy are full pre-tax allowable deductions, alongside registered pension contributions (up to KES 30,000/month) and mortgage interest (up to KES 30,000/month).",
  },
  {
    question: "What are the Year 4 NSSF rates effective February 2026?",
    answer:
      "Under the NSSF Act 2013 (Year 4 schedule effective February 2026), employees contribute 6% of pensionable pay: Tier I covers up to KES 9,000 (KES 540) and Tier II covers KES 9,001 to KES 108,000 (max KES 5,940; total max KES 6,480/month), matched 100% by the employer.",
  },
];

export default function PAYECalculatorPage() {
  const [calcMode, setCalcMode] = useState<"grossToNet" | "netToGross">(
    "grossToNet"
  );
  const [grossInput, setGrossInput] = useState<number>(100000);
  const [targetNetInput, setTargetNetInput] = useState<number>(75000);
  const [showAnnual, setShowAnnual] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [pensionContribution, setPensionContribution] = useState<number>(0);
  const [mortgageInterest, setMortgageInterest] = useState<number>(0);
  const [insurancePremium, setInsurancePremium] = useState<number>(0);
  const [nssfTier1Only, setNssfTier1Only] = useState(false);

  const results = useMemo(() => {
    const effectiveGross =
      calcMode === "grossToNet"
        ? grossInput
        : solveGrossForTargetNet(
            targetNetInput,
            pensionContribution,
            mortgageInterest,
            insurancePremium,
            nssfTier1Only
          );
    return computePayslip(
      effectiveGross,
      pensionContribution,
      mortgageInterest,
      insurancePremium,
      nssfTier1Only
    );
  }, [
    calcMode,
    grossInput,
    targetNetInput,
    pensionContribution,
    mortgageInterest,
    insurancePremium,
    nssfTier1Only,
  ]);

  const fmt = (n: number) => {
    const multiplier = showAnnual ? 12 : 1;
    return `KES ${(n * multiplier).toLocaleString("en-KE", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })}`;
  };

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Calculation Direction Mode Switcher */}
        <div className="bg-bg-card border border-border rounded-xl p-6 space-y-5">
          <div className="grid grid-cols-2 sm:flex gap-2">
            <button
              onClick={() => setCalcMode("grossToNet")}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all text-center whitespace-nowrap ${
                calcMode === "grossToNet"
                  ? "bg-gold text-kenya-black"
                  : "bg-bg-elevated border border-border text-text-secondary hover:border-gold/50"
              }`}
            >
              Gross → Net Pay
            </button>
            <button
              onClick={() => setCalcMode("netToGross")}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all text-center whitespace-nowrap ${
                calcMode === "netToGross"
                  ? "bg-gold text-kenya-black"
                  : "bg-bg-elevated border border-border text-text-secondary hover:border-gold/50"
              }`}
            >
              <span className="sm:hidden">Target Net → Gross</span>
              <span className="hidden sm:inline">Target Net Pay → Required Gross (Negotiation)</span>
            </button>
          </div>

          {calcMode === "grossToNet" ? (
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Monthly Gross Salary (KES)
              </label>
              <input
                type="number"
                value={grossInput}
                onChange={(e) =>
                  setGrossInput(Math.max(0, Number(e.target.value)))
                }
                className="input-field text-xl sm:text-2xl font-bold font-[family-name:var(--font-outfit)]"
                min={0}
                step={1000}
                id="gross-salary-input"
              />
              <input
                type="range"
                min={0}
                max={500000}
                step={5000}
                value={grossInput}
                onChange={(e) => setGrossInput(Number(e.target.value))}
                className="w-full mt-3 accent-gold"
              />
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Desired Monthly Net Take-Home Pay in Bank (KES)
              </label>
              <input
                type="number"
                value={targetNetInput}
                onChange={(e) =>
                  setTargetNetInput(Math.max(0, Number(e.target.value)))
                }
                className="input-field text-xl sm:text-2xl font-bold font-[family-name:var(--font-outfit)]"
                min={0}
                step={1000}
              />
              <p className="text-xs text-gold mt-2">
                Required Gross Salary to Negotiate:{" "}
                <strong>{fmt(results.gross)}</strong> ({showAnnual ? "annual" : "monthly"})
              </p>
            </div>
          )}

          {/* Optional Reliefs & Allowable Deductions Drawer */}
          <div className="pt-2 border-t border-border">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-xs font-semibold text-gold hover:underline"
            >
              {showAdvanced
                ? "− Hide Pension, Mortgage, Insurance Relief & NSSF Tier II Options"
                : "+ Add Pension, Mortgage Interest, Insurance Relief or NSSF Tier II Opt-Out"}
            </button>

            {showAdvanced && (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-text-secondary mb-1">
                    Voluntary Pension (KES/mo, max 30k tax-free)
                  </label>
                  <input
                    type="number"
                    value={pensionContribution}
                    onChange={(e) =>
                      setPensionContribution(Math.max(0, Number(e.target.value)))
                    }
                    className="input-field text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-text-secondary mb-1">
                    Mortgage Interest (KES/mo, max 30k deductible)
                  </label>
                  <input
                    type="number"
                    value={mortgageInterest}
                    onChange={(e) =>
                      setMortgageInterest(Math.max(0, Number(e.target.value)))
                    }
                    className="input-field text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-text-secondary mb-1">
                    Life/Education Insurance Premium (15% relief)
                  </label>
                  <input
                    type="number"
                    value={insurancePremium}
                    onChange={(e) =>
                      setInsurancePremium(Math.max(0, Number(e.target.value)))
                    }
                    className="input-field text-sm"
                  />
                </div>
                <label className="sm:col-span-3 flex items-center gap-2 text-xs text-text-secondary cursor-pointer">
                  <input
                    type="checkbox"
                    checked={nssfTier1Only}
                    onChange={(e) => setNssfTier1Only(e.target.checked)}
                    className="rounded"
                  />
                  <span>
                    Contracted out of NSSF Tier II to a private RBA-registered pension scheme (deducts NSSF Tier I KES 540 only)
                  </span>
                </label>
              </div>
            )}
          </div>
        </div>

        {/* Monthly / Annual Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowAnnual(false)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              !showAnnual
                ? "bg-gold text-kenya-black font-bold"
                : "bg-bg-card border border-border text-text-secondary hover:text-gold"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setShowAnnual(true)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              showAnnual
                ? "bg-gold text-kenya-black font-bold"
                : "bg-bg-card border border-border text-text-secondary hover:text-gold"
            }`}
          >
            Annual (×12)
          </button>
        </div>

        {/* Result Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="result-box">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-text-secondary">
                {calcMode === "netToGross"
                  ? "Required Gross Salary"
                  : "Net Take-Home Pay"}
              </span>
              <span className="text-xs text-text-muted">
                Effective PAYE: {results.effectiveTaxRate}%
              </span>
            </div>
            <p className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-outfit)] text-kenya-green-light">
              {calcMode === "netToGross"
                ? fmt(results.gross)
                : fmt(results.netPay)}
            </p>
            <p className="text-xs text-text-muted mt-2">
              {calcMode === "netToGross"
                ? `Delivers ${fmt(results.netPay)} net take-home pay`
                : `From ${fmt(results.gross)} gross salary`}
            </p>
          </div>

          <div className="result-box">
            <p className="text-xs text-text-secondary mb-2">
              Total Cost to Employer (Gross + Matches)
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold font-[family-name:var(--font-outfit)] text-gold">
              {fmt(results.totalEmployerCost)}
            </p>
            <p className="text-xs text-text-muted mt-2">
              Includes Employer NSSF ({fmt(results.employerNSSF)}) + 1.5% Housing Levy ({fmt(results.employerHousing)})
            </p>
          </div>
        </div>

        {/* Deductions Breakdown */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              2026 Payslip &amp; Statutory Deductions Breakdown
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th className="text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-text-primary font-medium">Gross Salary</td>
                  <td className="text-right font-semibold text-text-primary">
                    {fmt(results.gross)}
                  </td>
                </tr>
                <tr>
                  <td>NSSF Contribution (Year 4 Tier I &amp; II, 6%)</td>
                  <td className="text-right text-kenya-red-light">
                    − {fmt(results.nssf)}
                  </td>
                </tr>
                <tr>
                  <td>SHA / SHIF Contribution (2.75% pre-tax)</td>
                  <td className="text-right text-kenya-red-light">
                    − {fmt(results.sha)}
                  </td>
                </tr>
                <tr>
                  <td>Affordable Housing Levy (1.5% pre-tax)</td>
                  <td className="text-right text-kenya-red-light">
                    − {fmt(results.housingLevy)}
                  </td>
                </tr>
                <tr className="bg-bg-elevated/40">
                  <td className="text-text-primary font-medium">
                    Taxable Income (After Allowable Deductions)
                  </td>
                  <td className="text-right font-semibold text-text-primary">
                    {fmt(results.taxableIncome)}
                  </td>
                </tr>
                <tr>
                  <td>Net PAYE Tax (After KES 2,400 Personal Relief)</td>
                  <td className="text-right text-kenya-red-light font-semibold">
                    − {fmt(results.paye)}
                  </td>
                </tr>
                <tr className="bg-kenya-green/10 border-t-2 border-border font-bold">
                  <td className="text-text-primary">Net Take-Home Pay</td>
                  <td className="text-right text-kenya-green-light text-base">
                    {fmt(results.netPay)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
