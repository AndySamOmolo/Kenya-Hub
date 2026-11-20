"use client";

import { useState, useMemo } from "react";
import { X } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import rentalData from "@/data/rental-tax-data.json";

const tool = TOOLS.find((t) => t.slug === "rental-tax-calculator")!;

// Kenya individual graduated annual income tax bands (Income Tax Act Cap 470)
function computeAnnualGraduatedTax(annualNetIncome: number): number {
  if (annualNetIncome <= 0) return 0;
  let remaining = annualNetIncome;
  let tax = 0;

  const bands = [
    { limit: 288000, rate: 0.1 },
    { limit: 100000, rate: 0.25 },
    { limit: 5612000, rate: 0.3 },
    { limit: 3600000, rate: 0.325 },
    { limit: Infinity, rate: 0.35 },
  ];

  for (const band of bands) {
    if (remaining <= 0) break;
    const taxable = Math.min(remaining, band.limit);
    tax += taxable * band.rate;
    remaining -= taxable;
  }

  // Personal relief (KES 28,800/year) applies if landlord has no other employment utilizing it
  return Math.max(0, Math.round(tax - 28800));
}

export default function RentalTaxCalculatorPage() {
  const [monthlyRent, setMonthlyRent] = useState("85000");
  const [monthlyExpenses, setMonthlyExpenses] = useState("25000");

  const calc = useMemo(() => {
    const rent = Math.max(0, Number(monthlyRent.replace(/,/g, "")) || 0);
    const expenses = Math.min(
      rent,
      Math.max(0, Number(monthlyExpenses.replace(/,/g, "")) || 0)
    );
    const annualRent = rent * 12;
    const annualExpenses = expenses * 12;
    const annualNetIncome = Math.max(0, annualRent - annualExpenses);

    const isBelowMriMin = annualRent > 0 && annualRent < 288000;
    const isAboveMriMax = annualRent > rentalData.mriThresholdAnnual;
    const isEligibleMri = annualRent >= 288000 && annualRent <= rentalData.mriThresholdAnnual;

    const mriMonthly = isBelowMriMin ? 0 : Math.round(rent * rentalData.mriRate);
    const mriAnnual = isBelowMriMin ? 0 : Math.round(annualRent * rentalData.mriRate);

    const netGraduatedAnnual = computeAnnualGraduatedTax(annualNetIncome);
    const netGraduatedMonthly = Math.round(netGraduatedAnnual / 12);

    const betterRegime = isAboveMriMax
      ? "net"
      : mriAnnual <= netGraduatedAnnual
      ? "mri"
      : "net";
    const annualSavings = Math.abs(mriAnnual - netGraduatedAnnual);

    return {
      rent,
      expenses,
      annualRent,
      annualExpenses,
      annualNetIncome,
      mriMonthly,
      mriAnnual,
      netGraduatedMonthly,
      netGraduatedAnnual,
      betterRegime,
      annualSavings,
      isBelowMriMin,
      isAboveMriMax,
      isEligibleMri,
    };
  }, [monthlyRent, monthlyExpenses]);

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label
                htmlFor="monthly-rent-input"
                className="block text-xs font-semibold text-text-muted mb-1.5 uppercase"
              >
                Gross Monthly Rent Collected (KES)
              </label>
              <div className="relative">
                <input
                  id="monthly-rent-input"
                  type="text"
                  inputMode="numeric"
                  value={monthlyRent ? Number(monthlyRent).toLocaleString("en-KE") : ""}
                  onChange={(e) => setMonthlyRent(e.target.value.replace(/[^0-9]/g, ""))}
                  placeholder="e.g. 85,000"
                  className="w-full pl-4 pr-11 py-2.5 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-base font-bold text-text-primary focus:border-gold tabular-nums"
                  style={{ paddingRight: "2.75rem" }}
                />
                {monthlyRent && (
                  <button
                    type="button"
                    onClick={() => setMonthlyRent("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                    aria-label="Clear monthly rent"
                  >
                    <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {[20000, 35000, 85000, 150000, 350000, 1300000].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setMonthlyRent(String(preset))}
                    className={`text-xs px-2.5 py-1 rounded-full border transition-colors cursor-pointer ${
                      Number(monthlyRent) === preset
                        ? "bg-gold text-kenya-black border-gold font-bold"
                        : "bg-bg-elevated border-border text-text-secondary hover:text-gold"
                    }`}
                  >
                    KES {preset >= 1000000 ? `${preset / 1000000}M` : `${preset / 1000}K`}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="monthly-expenses-input"
                className="block text-xs font-semibold text-text-muted mb-1.5 uppercase"
              >
                Allowable Monthly Expenses (KES)
              </label>
              <div className="relative">
                <input
                  id="monthly-expenses-input"
                  type="text"
                  inputMode="numeric"
                  value={monthlyExpenses ? Number(monthlyExpenses).toLocaleString("en-KE") : ""}
                  onChange={(e) => setMonthlyExpenses(e.target.value.replace(/[^0-9]/g, ""))}
                  placeholder="e.g. 25,000"
                  aria-describedby="rental-expenses-hint"
                  className="w-full pl-4 pr-11 py-2.5 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-base font-bold text-text-primary focus:border-gold tabular-nums"
                  style={{ paddingRight: "2.75rem" }}
                />
                {monthlyExpenses && (
                  <button
                    type="button"
                    onClick={() => setMonthlyExpenses("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                    aria-label="Clear monthly expenses"
                  >
                    <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                  </button>
                )}
              </div>
              <p id="rental-expenses-hint" className="text-[0.6875rem] text-text-muted mt-1.5">
                Mortgage interest, repairs, caretaker wages, insurance &amp; land rates (deductible only under Net Graduated Tax, not MRI).
              </p>
            </div>
          </div>

          <div role="status" aria-live="polite" aria-atomic="true" className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-amber-500/45 bg-amber-500/[0.04] p-4">
                <span className="text-[0.6875rem] font-bold text-gold uppercase">
                  Monthly Rental Income (7.5% MRI)
                </span>
                <p className="text-2xl font-black text-gold mt-1 tabular-nums whitespace-nowrap">
                  KES {calc.mriMonthly.toLocaleString("en-KE")}
                </p>
                <p className="text-[0.6875rem] text-text-secondary mt-1 tabular-nums">
                  {calc.isBelowMriMin
                    ? "Exempt (< KES 288,000/yr MRI floor)"
                    : `Annual: KES ${calc.mriAnnual.toLocaleString("en-KE")} · File on KRA iTax by 20th`}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
                <span className="text-[0.6875rem] font-bold text-text-muted uppercase">
                  Net Graduated Income Tax
                </span>
                <p className="text-xl font-bold text-text-primary mt-1 tabular-nums whitespace-nowrap">
                  KES {calc.netGraduatedMonthly.toLocaleString("en-KE")}/mo
                </p>
                <p className="text-[0.6875rem] text-text-secondary mt-1 tabular-nums">
                  Annual: KES {calc.netGraduatedAnnual.toLocaleString("en-KE")} on KES{" "}
                  {calc.annualNetIncome.toLocaleString("en-KE")} net profit
                </p>
              </div>
              <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
                <span className="text-[0.6875rem] font-bold text-text-muted uppercase">
                  Optimal KRA iTax Regime
                </span>
                <p className="text-lg font-bold text-kenya-green-light mt-1">
                  {calc.isAboveMriMax
                    ? "Net Graduated Tax (Mandatory)"
                    : calc.betterRegime === "mri"
                    ? "7.5% MRI Wins"
                    : "Net Graduated Tax Wins"}
                </p>
                <p className="text-[0.6875rem] text-text-secondary mt-1 tabular-nums">
                  {calc.isAboveMriMax
                    ? "Annual rent exceeds KES 15M MRI ceiling"
                    : `Saves ~KES ${calc.annualSavings.toLocaleString("en-KE")}/year`}
                </p>
              </div>
            </div>

            {/* Regime Comparison Table */}
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="px-4 py-2.5 bg-bg-elevated border-b border-border">
                <h2 className="text-xs font-bold uppercase tracking-wider text-text-primary">
                  MRI (7.5% Gross) vs. Net Graduated Income Tax Comparison (KRA iTax)
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="data-table text-xs">
                  <thead>
                    <tr>
                      <th>Tax Metric</th>
                      <th className="text-right whitespace-nowrap">7.5% MRI (Gross)</th>
                      <th className="text-right whitespace-nowrap">Net Graduated Tax</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-text-secondary">Annual Gross Rent</td>
                      <td className="text-right font-semibold tabular-nums whitespace-nowrap">
                        KES {calc.annualRent.toLocaleString("en-KE")}
                      </td>
                      <td className="text-right font-semibold tabular-nums whitespace-nowrap">
                        KES {calc.annualRent.toLocaleString("en-KE")}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-text-secondary">Allowable Deductible Expenses</td>
                      <td className="text-right text-text-muted whitespace-nowrap">Not allowed</td>
                      <td className="text-right text-kenya-green-light tabular-nums whitespace-nowrap">
                        −KES {calc.annualExpenses.toLocaleString("en-KE")}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-text-secondary">Taxable Base</td>
                      <td className="text-right tabular-nums whitespace-nowrap">
                        KES {calc.annualRent.toLocaleString("en-KE")}
                      </td>
                      <td className="text-right tabular-nums whitespace-nowrap">
                        KES {calc.annualNetIncome.toLocaleString("en-KE")}
                      </td>
                    </tr>
                    <tr className="border-t border-border bg-bg-elevated/40">
                      <td className="font-bold text-text-primary">Estimated Annual Tax Payable</td>
                      <td className="text-right font-bold text-gold tabular-nums whitespace-nowrap">
                        {calc.isAboveMriMax ? "Ineligible (>15M)" : `KES ${calc.mriAnnual.toLocaleString("en-KE")}`}
                      </td>
                      <td className="text-right font-bold text-text-primary tabular-nums whitespace-nowrap">
                        KES {calc.netGraduatedAnnual.toLocaleString("en-KE")}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xs text-text-muted">
              Note: Turnover Tax (TOT) does not apply to rental income under Section 12C of the Income Tax Act. File monthly MRI returns or annual net rental income returns via{" "}
              <a
                href="https://itax.kra.go.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline underline-offset-2 hover:text-gold-light"
              >
                itax.kra.go.ke ↗
              </a>{" "}
              (late MRI filing penalty: KES 2,000/month + 1% monthly interest).
            </p>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
