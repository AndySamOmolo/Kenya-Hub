"use client";

import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import { useState, useMemo } from "react";
import { X } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import CustomSelect from "@/components/ui/CustomSelect";
import { TOOLS } from "@/lib/tools-registry";
import saccoData from "@/data/sacco-chama-rates.json";
import economicCalendarData from "@/data/economic-calendar.json";

const tool = TOOLS.find((t) => t.slug === "sacco-chama-calculator")!;

function formatKES(n: number): string {
  return Math.round(n).toLocaleString("en-KE");
}

export default function SaccoChamaCalculatorPage() {
  const [selectedSaccoId, setSelectedSaccoId] = useState(saccoData.topSaccos[0].id);
  const [shareCapital, setShareCapital] = useState("40000");
  const [openingDeposits, setOpeningDeposits] = useState("250000");
  const [monthlyDeposit, setMonthlyDeposit] = useState("15000");
  const [loanMonths, setLoanMonths] = useState("36");

  const activeSacco = useMemo(
    () => saccoData.topSaccos.find((s) => s.id === selectedSaccoId) || saccoData.topSaccos[0],
    [selectedSaccoId]
  );

  const calc = useMemo(() => {
    const shares = Math.max(0, Number(shareCapital.replace(/,/g, "")) || 0);
    const opening = Math.max(0, Number(openingDeposits.replace(/,/g, "")) || 0);
    const monthly = Math.max(0, Number(monthlyDeposit.replace(/,/g, "")) || 0);
    const months = Math.max(6, Math.min(84, Number(loanMonths) || 36));

    const divRate = activeSacco.dividendRate / 100;
    const rebRate = activeSacco.rebateRate / 100;
    const wht = saccoData.withholdingTaxRate;

    const grossShareDividend = shares * divRate;
    const grossDepositRebate = opening * rebRate + monthly * 12 * rebRate * (6.5 / 12);
    const totalGrossPayout = grossShareDividend + grossDepositRebate;
    const withholdingTax = totalGrossPayout * wht;
    const netAnnualPayout = totalGrossPayout - withholdingTax;

    const yearEndTotalDeposits = opening + monthly * 12;
    const maxLoanEligibility = yearEndTotalDeposits * activeSacco.loanMultiplier;

    const r = activeSacco.monthlyInterestReducing / 100;
    const monthlyRepayment =
      maxLoanEligibility > 0
        ? (maxLoanEligibility * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1)
        : 0;
    const totalLoanRepayment = monthlyRepayment * months;
    const totalLoanInterest = Math.max(0, totalLoanRepayment - maxLoanEligibility);

    return {
      shares,
      opening,
      monthly,
      months,
      grossShareDividend,
      grossDepositRebate,
      totalGrossPayout,
      withholdingTax,
      netAnnualPayout,
      yearEndTotalDeposits,
      maxLoanEligibility,
      monthlyRepayment,
      totalLoanInterest,
    };
  }, [shareCapital, openingDeposits, monthlyDeposit, loanMonths, activeSacco]);

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
              Select SASRA Regulated DT-SACCO Benchmark
            </label>
            <ExpandablePillRow>
              {saccoData.topSaccos.map((s) => {
                const active = s.id === selectedSaccoId;
                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSaccoId(s.id)}
                    className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium border transition-all cursor-pointer ${
                      active
                        ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                        : "border-border bg-bg-elevated text-text-secondary hover:text-text-primary hover:border-border-light"
                    }`}
                  >
                    {s.name} ({s.dividendRate}% Div · {s.rebateRate}% Rebate)
                  </button>
                );
              })}
            </ExpandablePillRow>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">
                Share Capital (KES)
              </label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="numeric"
                  value={shareCapital}
                  placeholder="0"
                  onChange={(e) => setShareCapital(e.target.value.replace(/[^0-9]/g, "").replace(/^0+(?=\d)/, ""))}
                  className="w-full pl-3.5 pr-10 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-sm text-[var(--text-primary)]"
                  style={{ paddingRight: "2.5rem" }}
                />
                {shareCapital && (
                  <button
                    type="button"
                    onClick={() => setShareCapital("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                    aria-label="Clear share capital"
                  >
                    <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                  </button>
                )}
              </div>
            </div>
            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">
                Opening BOSA Deposits (KES)
              </label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="numeric"
                  value={openingDeposits}
                  placeholder="0"
                  onChange={(e) => setOpeningDeposits(e.target.value.replace(/[^0-9]/g, "").replace(/^0+(?=\d)/, ""))}
                  className="w-full pl-3.5 pr-10 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-sm text-[var(--text-primary)]"
                  style={{ paddingRight: "2.5rem" }}
                />
                {openingDeposits && (
                  <button
                    type="button"
                    onClick={() => setOpeningDeposits("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                    aria-label="Clear opening deposits"
                  >
                    <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                  </button>
                )}
              </div>
            </div>
            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">
                Monthly Deposit Contribution (KES)
              </label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="numeric"
                  value={monthlyDeposit}
                  placeholder="0"
                  onChange={(e) => setMonthlyDeposit(e.target.value.replace(/[^0-9]/g, ""))}
                  className="w-full pl-3.5 pr-10 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-sm text-[var(--text-primary)]"
                  style={{ paddingRight: "2.5rem" }}
                />
                {monthlyDeposit && (
                  <button
                    type="button"
                    onClick={() => setMonthlyDeposit("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                    aria-label="Clear monthly deposit"
                  >
                    <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                  </button>
                )}
              </div>
            </div>
            <div>
              <label className="block text-xs text-[var(--text-secondary)] mb-1">
                BOSA Loan Tenor (Months)
              </label>
              <CustomSelect
                value={loanMonths}
                onValueChange={(val) => setLoanMonths(val)}
                options={[
                  { value: "12", label: "12 Months (1 Yr)" },
                  { value: "24", label: "24 Months (2 Yrs)" },
                  { value: "36", label: "36 Months (3 Yrs)" },
                  { value: "48", label: "48 Months (4 Yrs)" },
                  { value: "60", label: "60 Months (5 Yrs)" },
                ]}
                className="w-full text-sm"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-[var(--bg-card)] border border-emerald-500/30 rounded-xl p-5">
            <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">
              Net Annual Dividend + Rebate
            </p>
            <p className="text-2xl font-extrabold text-emerald-400 font-[family-name:var(--font-display)]">
              KES {formatKES(calc.netAnnualPayout)}
            </p>
            <p className="text-[11px] text-[var(--text-muted)] mt-1">
              After 5% KRA Withholding Tax (KES {formatKES(calc.withholdingTax)})
            </p>
          </div>
          <div className="bg-[var(--bg-card)] border border-[var(--gold)]/30 rounded-xl p-5">
            <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">
              Max BOSA Loan ({activeSacco.loanMultiplier}× Deposits)
            </p>
            <p className="text-2xl font-extrabold text-[var(--gold)] font-[family-name:var(--font-display)]">
              KES {formatKES(calc.maxLoanEligibility)}
            </p>
            <p className="text-[11px] text-[var(--text-muted)] mt-1">
              Year-end BOSA Savings: KES {formatKES(calc.yearEndTotalDeposits)}
            </p>
          </div>
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5">
            <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">
              Monthly Loan Repayment (1% p.m.)
            </p>
            <p className="text-2xl font-extrabold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
              KES {formatKES(calc.monthlyRepayment)}
            </p>
            <p className="text-[11px] text-[var(--text-muted)] mt-1">
              Reducing balance over {calc.months} months
            </p>
          </div>
        </div>

        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="px-5 py-3.5 border-b border-[var(--border)]">
            <h3 className="text-sm font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
              {activeSacco.name} — Annual Return & Loan Breakdown
            </h3>
          </div>
          <div className="divide-y divide-[var(--border)] text-sm">
            <div className="px-5 py-3 flex justify-between items-start gap-3">
              <span className="text-[var(--text-secondary)]">
                Gross Dividend on Share Capital ({activeSacco.dividendRate}%)
              </span>
              <span className="font-semibold text-[var(--text-primary)]">
                KES {formatKES(calc.grossShareDividend)}
              </span>
            </div>
            <div className="px-5 py-3 flex justify-between items-start gap-3">
              <span className="text-[var(--text-secondary)]">
                Gross Interest Rebate on Weighted BOSA Deposits ({activeSacco.rebateRate}%)
              </span>
              <span className="font-semibold text-[var(--text-primary)]">
                KES {formatKES(calc.grossDepositRebate)}
              </span>
            </div>
            <div className="px-5 py-3 flex justify-between items-start gap-3">
              <span className="text-[var(--text-secondary)]">Statutory Withholding Tax (5% WHT)</span>
              <span className="text-red-400 font-medium">− KES {formatKES(calc.withholdingTax)}</span>
            </div>
            <div className="px-5 py-3.5 flex justify-between bg-emerald-500/10 font-bold">
              <span className="text-[var(--text-primary)]">Net Cash Payout (FOSA Credit)</span>
              <span className="text-emerald-400">KES {formatKES(calc.netAnnualPayout)}</span>
            </div>
            <div className="px-5 py-3 flex justify-between items-start gap-3">
              <span className="text-[var(--text-secondary)]">
                Total Reducing-Balance Interest on Max Loan ({calc.months} mos @ 1%/mo)
              </span>
              <span className="text-[var(--text-primary)]">KES {formatKES(calc.totalLoanInterest)}</span>
            </div>
          </div>
        </div>

        {/* 2026 KNBS, CBK & Treasury Economic Release Calendar for SACCO / Chama Investors */}
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-5 space-y-3 mt-6">
          <h2 className="text-sm sm:text-base font-bold font-[family-name:var(--font-outfit)] text-[var(--text-primary)]">
            {economicCalendarData.year} Kenya Macroeconomic &amp; CBK Interest Rate Calendar ({economicCalendarData.source})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {economicCalendarData.events.slice(0, 6).map((ev) => (
              <div key={ev.name} className="rounded-xl bg-[var(--bg-elevated)]/60 border border-[var(--border)] p-3 text-xs space-y-1">
                <div className="flex items-center justify-between font-bold text-[var(--text-primary)]">
                  <span>{ev.name}</span>
                  <span className="text-[var(--gold)]">{ev.agency}</span>
                </div>
                <p className="text-[var(--text-secondary)]">{ev.description}</p>
                <p className="text-[var(--text-muted)] text-[0.6875rem]">{ev.frequency} • {ev.typicalDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
