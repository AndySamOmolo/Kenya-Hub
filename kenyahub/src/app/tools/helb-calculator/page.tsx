"use client";

import { useState, useMemo } from "react";
import { X } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import helbData from "@/data/helb-rates.json";
import CustomSelect from "@/components/ui/CustomSelect";

const tool = TOOLS.find((t) => t.slug === "helb-calculator")!;

const currentYear = new Date().getFullYear();

interface AmortizationRow {
  year: number;
  calendarYear: number;
  openingBalance: number;
  annualPayment: number;
  interestCharged: number;
  ledgerFee: number;
  principalPaid: number;
  closingBalance: number;
}

export default function HELBCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState<number>(240000);
  const [yearBorrowed, setYearBorrowed] = useState<number>(2018);
  const [grossSalary, setGrossSalary] = useState<number>(50000);
  const [defaultMonths, setDefaultMonths] = useState<number>(0);

  const results = useMemo(() => {
    const yearsSinceBorrow = Math.max(0, currentYear - yearBorrowed);
    const accruedInterestToDate = Math.round(
      loanAmount * (helbData.interestRate / 100) * yearsSinceBorrow
    );
    const accruedLedgerFees = yearsSinceBorrow * helbData.annualLedgerFee;
    const accumulatedPenalty = defaultMonths * helbData.monthlyDefaultPenalty;
    const currentBalance =
      loanAmount + accruedInterestToDate + accruedLedgerFees + accumulatedPenalty;

    const monthlyBySalary = Math.round(
      grossSalary * (helbData.minimumSalaryPercent / 100)
    );
    const monthlyObligation = Math.max(helbData.minimumMonthly, monthlyBySalary);

    // Month-by-month reducing-balance amortization (4% p.a. + KES 1,000/yr ledger fee) (F-007)
    const monthlyRate = helbData.interestRate / 100 / 12;
    let balance = currentBalance;
    let totalRepayment = 0;
    let totalFutureInterest = 0;
    let totalFutureLedger = 0;
    let months = 0;
    const maxMonths = 360; // 30-year safety cap
    const schedule: AmortizationRow[] = [];

    let yrOpening = balance;
    let yrPayment = 0;
    let yrInterest = 0;
    let yrLedger = 0;
    let yrPrincipal = 0;

    while (balance > 0.5 && months < maxMonths) {
      months += 1;
      const monthInterest = balance * monthlyRate;
      const monthLedger = months % 12 === 1 ? helbData.annualLedgerFee : 0;
      const dueThisMonth = balance + monthInterest + monthLedger;

      // Guard against negative amortization if payment < interest + ledger
      const actualPayment = Math.min(dueThisMonth, monthlyObligation);
      if (actualPayment <= monthInterest && months > 12) {
        break;
      }

      const principalComponent = Math.max(0, actualPayment - monthInterest - monthLedger);
      balance = Math.max(0, dueThisMonth - actualPayment);

      totalRepayment += actualPayment;
      totalFutureInterest += monthInterest;
      totalFutureLedger += monthLedger;

      yrPayment += actualPayment;
      yrInterest += monthInterest;
      yrLedger += monthLedger;
      yrPrincipal += principalComponent;

      if (months % 12 === 0 || balance <= 0.5) {
        const yearNum = Math.ceil(months / 12);
        schedule.push({
          year: yearNum,
          calendarYear: currentYear + yearNum - 1,
          openingBalance: Math.round(yrOpening),
          annualPayment: Math.round(yrPayment),
          interestCharged: Math.round(yrInterest),
          ledgerFee: Math.round(yrLedger),
          principalPaid: Math.round(yrPrincipal),
          closingBalance: Math.round(balance),
        });
        yrOpening = balance;
        yrPayment = 0;
        yrInterest = 0;
        yrLedger = 0;
        yrPrincipal = 0;
      }
    }

    const yearsToRepay = Math.round((months / 12) * 10) / 10;
    const completionYear = currentYear + Math.ceil(months / 12);
    const cannotClear = balance > 1;

    return {
      loanAmount,
      yearsSinceBorrow,
      accruedInterestToDate,
      accruedLedgerFees,
      accumulatedPenalty,
      currentBalance,
      monthlyObligation,
      monthsToRepay: months,
      yearsToRepay,
      completionYear,
      totalRepayment: Math.round(totalRepayment),
      totalFutureInterest: Math.round(totalFutureInterest),
      totalFutureLedger: Math.round(totalFutureLedger),
      cannotClear,
      schedule,
    };
  }, [loanAmount, yearBorrowed, grossSalary, defaultMonths]);

  const fmt = (n: number) =>
    `KES ${Math.round(n).toLocaleString("en-KE", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        {/* Inputs */}
        <div className="bg-bg-card border border-border rounded-xl p-4 sm:p-6 space-y-5">
          <div>
            <label
              htmlFor="loan-amount-input"
              className="block text-sm font-medium text-text-secondary mb-2"
            >
              Total Loan Amount (KES)
            </label>
            <div className="relative">
              <input
                type="number"
                inputMode="numeric"
                value={loanAmount === 0 ? "" : loanAmount}
                onChange={(e) => {
                  const raw = e.target.value.replace(/^0+(?=\d)/, "");
                  setLoanAmount(raw === "" ? 0 : Math.max(0, Number(raw)));
                }}
                placeholder="e.g. 240000"
                className="input-field text-lg sm:text-xl font-bold font-[family-name:var(--font-outfit)] pr-11! border border-border dark:border-white/15 tabular-nums"
                style={{ paddingRight: "2.75rem" }}
                min={0}
                step={10000}
                id="loan-amount-input"
                aria-describedby="loan-amount-hint"
              />
              {loanAmount > 0 && (
                <button
                  type="button"
                  onClick={() => setLoanAmount(0)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                  aria-label="Clear loan amount"
                >
                  <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                </button>
              )}
            </div>
            <p id="loan-amount-hint" className="text-xs text-text-muted mt-1">
              Sum of all HELB disbursements over your study period
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="year-borrowed-select"
                className="block text-sm font-medium text-text-secondary mb-2"
              >
                Year First Borrowed
              </label>
              <CustomSelect
                value={yearBorrowed}
                onChange={(e) => setYearBorrowed(Number(e.target.value))}
                className="input-field"
                id="year-borrowed-select"
              >
                {Array.from({ length: 25 }, (_, i) => currentYear - i).map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </CustomSelect>
            </div>

            <div>
              <label
                htmlFor="default-months-input"
                className="block text-sm font-medium text-text-secondary mb-2"
              >
                Months in Default (KES 5,000/mo Penalty)
              </label>
              <input
                type="number"
                inputMode="numeric"
                value={defaultMonths === 0 ? "" : defaultMonths}
                onChange={(e) => {
                  const raw = e.target.value.replace(/^0+(?=\d)/, "");
                  setDefaultMonths(raw === "" ? 0 : Math.min(180, Math.max(0, Number(raw))));
                }}
                placeholder="0 months (on-time)"
                className="input-field text-sm font-semibold border border-border dark:border-white/15 tabular-nums"
                min={0}
                max={180}
                id="default-months-input"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="gross-salary-input"
              className="block text-sm font-medium text-text-secondary mb-2"
            >
              Current Gross Monthly Salary (KES)
            </label>
            <div className="relative">
              <input
                type="number"
                inputMode="numeric"
                value={grossSalary === 0 ? "" : grossSalary}
                onChange={(e) => {
                  const raw = e.target.value.replace(/^0+(?=\d)/, "");
                  setGrossSalary(raw === "" ? 0 : Math.max(0, Number(raw)));
                }}
                placeholder="e.g. 50000"
                className="input-field text-lg sm:text-xl font-bold font-[family-name:var(--font-outfit)] pr-11! border border-border dark:border-white/15 tabular-nums"
                style={{ paddingRight: "2.75rem" }}
                min={0}
                step={5000}
                id="gross-salary-input"
              />
              {grossSalary > 0 && (
                <button
                  type="button"
                  onClick={() => setGrossSalary(0)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                  aria-label="Clear gross salary"
                >
                  <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Live Result Region */}
        <div role="status" aria-live="polite" aria-atomic="true" className="space-y-6">
          <div className="result-box">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-sm text-text-secondary">Estimated Current Balance</span>
              <span className="text-xs text-text-muted">
                4% p.a. reducing-balance + KES 1,000/yr ledger fee
              </span>
            </div>
            <p className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-outfit)] text-kenya-red-light tabular-nums">
              {fmt(results.currentBalance)}
            </p>
            <p className="text-xs text-text-muted mt-2 tabular-nums">
              Principal: {fmt(results.loanAmount)} + Accrued Interest: {fmt(results.accruedInterestToDate)} + Ledger Fees: {fmt(results.accruedLedgerFees)}
              {results.accumulatedPenalty > 0 && ` + Default Penalties: ${fmt(results.accumulatedPenalty)}`}
            </p>
          </div>

          {/* Repayment Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
              <p className="text-xs text-text-muted mb-1">Monthly Obligation</p>
              <p className="text-xl font-bold text-gold font-[family-name:var(--font-outfit)] tabular-nums">
                {fmt(results.monthlyObligation)}
              </p>
              <p className="text-[0.6875rem] text-text-muted mt-1">
                {results.monthlyObligation === helbData.minimumMonthly ? "Minimum KES 1,500" : "10% of gross salary"}
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
              <p className="text-xs text-text-muted mb-1">Time to Clear (Reducing Balance)</p>
              <p className="text-xl font-bold text-text-primary font-[family-name:var(--font-outfit)] tabular-nums">
                {results.cannotClear ? "30+ yrs" : `${results.yearsToRepay} years`}
              </p>
              <p className="text-[0.6875rem] text-text-muted mt-1 tabular-nums">
                {results.cannotClear ? "Increase monthly payment" : `${results.monthsToRepay} months`}
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
              <p className="text-xs text-text-muted mb-1">Estimated Payoff Year</p>
              <p className="text-xl font-bold text-kenya-green-light font-[family-name:var(--font-outfit)] tabular-nums">
                {results.cannotClear ? "—" : results.completionYear}
              </p>
              <p className="text-[0.6875rem] text-text-muted mt-1 tabular-nums">
                Total Outflow: {fmt(results.totalRepayment)}
              </p>
            </div>
          </div>

          {/* Breakdown */}
          <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
            <div className="px-5 py-3 border-b border-border bg-bg-elevated">
              <h2 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
                Current Balance &amp; Statutory Charge Breakdown
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
                  <tr>
                    <td className="text-text-primary">Original Loan Principal</td>
                    <td className="text-right font-semibold text-text-primary whitespace-nowrap tabular-nums">{fmt(results.loanAmount)}</td>
                  </tr>
                  <tr>
                    <td className="text-kenya-red-light">Accrued Interest ({helbData.interestRate}% × {results.yearsSinceBorrow} yrs)</td>
                    <td className="text-right text-kenya-red-light whitespace-nowrap tabular-nums">+ {fmt(results.accruedInterestToDate)}</td>
                  </tr>
                  <tr>
                    <td className="text-text-secondary">Annual Ledger Maintenance Fee (KES 1,000/yr × {results.yearsSinceBorrow} yrs)</td>
                    <td className="text-right text-text-secondary whitespace-nowrap tabular-nums">+ {fmt(results.accruedLedgerFees)}</td>
                  </tr>
                  <tr>
                    <td className="text-text-secondary">
                      Statutory Default Penalty (KES 5,000/month × {defaultMonths} mo)
                    </td>
                    <td className="text-right text-text-secondary whitespace-nowrap tabular-nums">
                      + {fmt(results.accumulatedPenalty)}
                    </td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="font-semibold text-text-primary">Estimated Current Balance</td>
                    <td className="text-right font-semibold text-text-primary whitespace-nowrap tabular-nums">{fmt(results.currentBalance)}</td>
                  </tr>
                  <tr>
                    <td className="text-text-muted text-xs">Future Reducing-Balance Interest + Ledger Fees During Repayment</td>
                    <td className="text-right text-text-muted text-xs whitespace-nowrap tabular-nums">
                      + {fmt(results.totalFutureInterest + results.totalFutureLedger)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Amortization Schedule Table (F-007) */}
          {results.schedule.length > 0 && (
            <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
              <div className="px-5 py-3 border-b border-border bg-bg-elevated flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
                  Reducing-Balance Amortization Schedule (4% p.a. + KES 1,000/yr Ledger Fee)
                </h2>
                <span className="text-[0.6875rem] text-text-muted">Swipe → on mobile</span>
              </div>
              <div className="overflow-x-auto">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap">Year</th>
                      <th className="text-right whitespace-nowrap">Opening</th>
                      <th className="text-right whitespace-nowrap">Annual Paid</th>
                      <th className="text-right whitespace-nowrap">Interest (4%)</th>
                      <th className="text-right whitespace-nowrap">Ledger Fee</th>
                      <th className="text-right whitespace-nowrap">Closing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.schedule.map((row) => (
                      <tr key={row.year}>
                        <td className="font-medium text-text-primary whitespace-nowrap tabular-nums">
                          Yr {row.year} ({row.calendarYear})
                        </td>
                        <td className="text-right text-text-secondary whitespace-nowrap tabular-nums">{fmt(row.openingBalance)}</td>
                        <td className="text-right text-gold font-semibold whitespace-nowrap tabular-nums">{fmt(row.annualPayment)}</td>
                        <td className="text-right text-kenya-red-light whitespace-nowrap tabular-nums">{fmt(row.interestCharged)}</td>
                        <td className="text-right text-text-muted whitespace-nowrap tabular-nums">{fmt(row.ledgerFee)}</td>
                        <td className="text-right font-semibold text-kenya-green-light whitespace-nowrap tabular-nums">{fmt(row.closingBalance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Notes */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h2 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            Key HELB Statutory Repayment Rules
          </h2>
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
