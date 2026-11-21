"use client";

import { useState, useMemo } from "react";
import { X } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import sccData from "@/data/small-claims-data.json";

const tool = TOOLS.find((t) => t.slug === "small-claims-calculator")!;

export default function SmallClaimsCalculatorPage() {
  const [claimAmount, setClaimAmount] = useState("75000");

  const calc = useMemo(() => {
    const amount = Math.max(0, Number(claimAmount.replace(/,/g, "")) || 0);
    const isEligible = amount > 0 && amount <= sccData.maxClaimLimit;

    if (amount <= 0) {
      return { amount: 0, isEligible: false, fee: 0 };
    }

    let fee = 200;
    for (const tier of sccData.filingFeeSchedule) {
      if (amount >= tier.min && amount <= tier.max) {
        fee = tier.fee;
        break;
      }
    }
    if (amount > sccData.maxClaimLimit) {
      fee = -1;
    }

    return { amount, isEligible, fee };
  }, [claimAmount]);

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">
          <div className="max-w-md mb-6">
            <label
              htmlFor="claim-amount-input"
              className="block text-xs font-semibold text-text-muted mb-1.5 uppercase"
            >
              Principal Claim Value (KES)
            </label>
            <div className="relative">
              <input
                id="claim-amount-input"
                type="text"
                inputMode="numeric"
                value={claimAmount ? Number(claimAmount).toLocaleString("en-KE") : ""}
                onChange={(e) => setClaimAmount(e.target.value.replace(/[^0-9]/g, ""))}
                placeholder="e.g. 75,000"
                className="w-full pl-4 pr-11 py-2.5 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-base font-bold text-text-primary focus:border-gold tabular-nums"
                style={{ paddingRight: "2.75rem" }}
              />
              {claimAmount && (
                <button
                  type="button"
                  onClick={() => setClaimAmount("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                  aria-label="Clear claim amount"
                >
                  <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {[25000, 75000, 250000, 600000, 1000000, 1500000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setClaimAmount(String(preset))}
                  className={`text-xs px-2.5 py-1 rounded-full border transition-colors cursor-pointer ${
                    Number(claimAmount) === preset
                      ? "bg-gold text-kenya-black border-gold font-bold"
                      : "bg-bg-elevated border-border text-text-secondary hover:text-gold"
                  }`}
                >
                  KES {preset >= 1000000 ? `${preset / 1000000}M` : `${preset / 1000}K`}
                </button>
              ))}
            </div>
          </div>

          <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6"
          >
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
              <span className="text-[0.6875rem] font-bold text-text-muted uppercase">Court Filing Fee</span>
              <p className="text-xl font-extrabold text-gold mt-1 tabular-nums whitespace-nowrap">
                {calc.fee < 0 ? "Ad valorem (Magistrate's Court)" : `KES ${calc.fee.toLocaleString("en-KE")}`}
              </p>
              <p className="text-[0.6875rem] text-text-secondary mt-1">Payable on Judiciary e-filing portal</p>
            </div>
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
              <span className="text-[0.6875rem] font-bold text-text-muted uppercase">Statutory Disposal Time</span>
              <p className="text-xl font-extrabold text-kenya-green-light mt-1">
                {calc.amount === 0 ? "—" : calc.amount <= sccData.maxClaimLimit ? "60 Days" : "Varies (Magistrate's Court)"}
              </p>
              <p className="text-[0.6875rem] text-text-secondary mt-1">
                {calc.amount <= 1000000
                  ? "Mandatory timeline under Small Claims Court Act (No. 2 of 2016) s.34"
                  : "Exceeds Small Claims Court KES 1M jurisdiction"}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
              <span className="text-[0.6875rem] font-bold text-text-muted uppercase">Jurisdiction Status</span>
              <p
                className={`text-base font-bold mt-1 ${
                  calc.amount === 0
                    ? "text-text-muted"
                    : calc.isEligible
                    ? "text-kenya-green-light"
                    : "text-red-400"
                }`}
              >
                {calc.amount === 0
                  ? "Enter Claim Amount"
                  : calc.isEligible
                  ? "✓ Eligible for SCC"
                  : "✕ Over KES 1M Limit"}
              </p>
              <p className="text-[0.6875rem] text-text-secondary mt-1">
                {calc.amount === 0
                  ? "Up to KES 1,000,000 max"
                  : calc.isEligible
                  ? "Fast-track adjudication"
                  : "File in Chief Magistrate's Court"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border/80 bg-bg-elevated/30 p-4">
              <h2 className="text-xs font-bold text-kenya-green-light uppercase tracking-wider mb-2">
                ✓ Claims Handled by Small Claims Court
              </h2>
              <ul className="space-y-1.5 text-xs text-text-secondary">
                {sccData.qualifyingClaimTypes.map((q, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-kenya-green-light font-bold">•</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border/80 bg-bg-elevated/30 p-4">
              <h2 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
                ✕ Excluded Claims
              </h2>
              <ul className="space-y-1.5 text-xs text-text-secondary">
                {sccData.disqualifiedClaimTypes.map((d, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-red-400 font-bold">•</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
