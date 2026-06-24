"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import helbData from "@/data/helb-rates.json";

const tool = TOOLS.find((t) => t.slug === "helb-calculator")!;

const currentYear = new Date().getFullYear();

const faq = [
  {
    question: "What is the HELB loan interest rate?",
    answer: "HELB charges 4% per annum simple interest on the outstanding loan balance. Interest starts accruing from the date of first disbursement, not from when you start repaying.",
  },
  {
    question: "When do I start repaying my HELB loan?",
    answer: "You get a 1-year grace period after completing your studies. After that, repayment begins. Your employer is required by law to deduct HELB payments from your salary.",
  },
  {
    question: "What is the minimum HELB monthly repayment?",
    answer: "The minimum is KES 1,500 per month or 10% of your gross salary, whichever is higher. Making higher payments reduces your total interest and shortens the repayment period.",
  },
  {
    question: "What happens if I don't repay my HELB loan?",
    answer: "HELB can list you with credit reference bureaus (CRB), preventing you from accessing other credit. A 5% late penalty is also charged on the outstanding amount. HELB can also pursue legal action.",
  },
  {
    question: "Can I make lump sum payments to HELB?",
    answer: "Yes, HELB accepts lump sum payments which reduce the principal amount. This is recommended to cut down on total interest paid and shorten the repayment period.",
  },
];

export default function HELBCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState<number>(240000);
  const [yearBorrowed, setYearBorrowed] = useState<number>(2018);
  const [grossSalary, setGrossSalary] = useState<number>(50000);

  const results = useMemo(() => {
    const yearsSinceBorrow = currentYear - yearBorrowed;
    const yearsOfInterest = Math.max(0, yearsSinceBorrow);
    const totalInterest = Math.round(loanAmount * (helbData.interestRate / 100) * yearsOfInterest);
    const currentBalance = loanAmount + totalInterest;

    const monthlyBySalary = Math.round(grossSalary * (helbData.minimumSalaryPercent / 100));
    const monthlyObligation = Math.max(helbData.minimumMonthly, monthlyBySalary);

    const monthsToRepay = monthlyObligation > 0 ? Math.ceil(currentBalance / monthlyObligation) : 0;
    const yearsToRepay = Math.round((monthsToRepay / 12) * 10) / 10;
    const completionYear = currentYear + Math.ceil(yearsToRepay);

    const totalPayment = monthlyObligation * monthsToRepay;
    const effectiveInterest = totalPayment - loanAmount;

    return {
      loanAmount,
      totalInterest,
      currentBalance,
      monthlyObligation,
      monthsToRepay,
      yearsToRepay,
      completionYear: Math.min(completionYear, currentYear + helbData.maxRepaymentYears),
      totalPayment,
      effectiveInterest,
      latePenalty: Math.round(currentBalance * (helbData.latePenaltyPercent / 100)),
    };
  }, [loanAmount, yearBorrowed, grossSalary]);

  const fmt = (n: number) =>
    `KES ${n.toLocaleString("en-KE", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Inputs */}
        <div className="bg-bg-card border border-border rounded-xl p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Total Loan Amount (KES)
            </label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Math.max(0, Number(e.target.value)))}
              className="input-field text-xl font-bold font-[family-name:var(--font-outfit)]"
              min={0}
              step={10000}
              id="loan-amount-input"
            />
            <p className="text-xs text-text-muted mt-1">Sum of all HELB disbursements over your study period</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Year First Borrowed
            </label>
            <select
              value={yearBorrowed}
              onChange={(e) => setYearBorrowed(Number(e.target.value))}
              className="input-field"
              id="year-borrowed-select"
            >
              {Array.from({ length: 25 }, (_, i) => currentYear - i).map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Current Gross Monthly Salary (KES)
            </label>
            <input
              type="number"
              value={grossSalary}
              onChange={(e) => setGrossSalary(Math.max(0, Number(e.target.value)))}
              className="input-field text-xl font-bold font-[family-name:var(--font-outfit)]"
              min={0}
              step={5000}
              id="gross-salary-input"
            />
          </div>
        </div>

        {/* Result */}
        <div className="result-box">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-text-secondary">Estimated Current Balance</span>
            <span className="text-xs text-text-muted">
              Including {helbData.interestRate}% p.a. simple interest
            </span>
          </div>
          <p className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-outfit)] text-kenya-red-light">
            {fmt(results.currentBalance)}
          </p>
          <p className="text-xs text-text-muted mt-2">
            Principal: {fmt(results.loanAmount)} + Interest: {fmt(results.totalInterest)}
          </p>
        </div>

        {/* Repayment Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-xs text-text-muted mb-1">Monthly Obligation</p>
            <p className="text-xl font-bold text-gold font-[family-name:var(--font-outfit)]">
              {fmt(results.monthlyObligation)}
            </p>
            <p className="text-[0.625rem] text-text-muted mt-1">
              {results.monthlyObligation === helbData.minimumMonthly ? "Minimum KES 1,500" : "10% of gross salary"}
            </p>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-xs text-text-muted mb-1">Time to Clear</p>
            <p className="text-xl font-bold text-text-primary font-[family-name:var(--font-outfit)]">
              {results.yearsToRepay} years
            </p>
            <p className="text-[0.625rem] text-text-muted mt-1">{results.monthsToRepay} months</p>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-xs text-text-muted mb-1">Completion Year</p>
            <p className="text-xl font-bold text-kenya-green-light font-[family-name:var(--font-outfit)]">
              {results.completionYear}
            </p>
            <p className="text-[0.625rem] text-text-muted mt-1">At current salary</p>
          </div>
        </div>

        {/* Breakdown */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              Repayment Breakdown
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
                <td className="text-text-primary">Original Loan Principal</td>
                <td className="text-right font-semibold text-text-primary">{fmt(results.loanAmount)}</td>
              </tr>
              <tr>
                <td className="text-kenya-red-light">Accrued Interest ({helbData.interestRate}% × {currentYear - yearBorrowed} yrs)</td>
                <td className="text-right text-kenya-red-light">+ {fmt(results.totalInterest)}</td>
              </tr>
              <tr className="border-t border-border">
                <td className="font-semibold text-text-primary">Estimated Current Balance</td>
                <td className="text-right font-semibold text-text-primary">{fmt(results.currentBalance)}</td>
              </tr>
              <tr>
                <td className="text-text-muted text-xs">Late payment penalty (if applicable)</td>
                <td className="text-right text-text-muted text-xs">+ {fmt(results.latePenalty)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            Key Repayment Rules
          </h3>
          <ul className="space-y-2">
            {helbData.repaymentNotes.map((note, i) => (
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
