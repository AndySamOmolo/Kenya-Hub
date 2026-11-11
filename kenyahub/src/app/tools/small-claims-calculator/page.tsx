"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import sccData from "@/data/small-claims-data.json";

const tool = TOOLS.find((t) => t.slug === "small-claims-calculator")!;

export default function SmallClaimsCalculatorPage() {
  const [claimAmount, setClaimAmount] = useState("75000");

  const calc = useMemo(() => {
    const amount = Math.max(0, Number(claimAmount.replace(/,/g, "")) || 0);
    const isEligible = amount > 0 && amount <= sccData.maxClaimLimit;

    let fee = 200;
    for (const tier of sccData.filingFeeSchedule) {
      if (amount >= tier.min && amount <= tier.max) {
        fee = tier.fee;
        break;
      }
    }
    if (amount > sccData.maxClaimLimit) {
      fee = 2500;
    }

    return { amount, isEligible, fee };
  }, [claimAmount]);

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">
          <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-2">
            Small Claims Court (SCC) Jurisdiction &amp; Filing Fee Assessment
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
            Under the <strong>Small Claims Court Act 2016</strong>, proceedings are designed to resolve civil and commercial disputes under KES 1,000,000 within 60 days without requiring high-cost advocate representation.
          </p>

          <div className="max-w-md mb-6">
            <label className="block text-xs font-semibold text-text-muted mb-1.5 uppercase">
              Principal Claim Value (KES)
            </label>
            <input
              type="text"
              value={claimAmount}
              onChange={(e) => setClaimAmount(e.target.value.replace(/[^0-9]/g, ""))}
              placeholder="e.g. 75,000"
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg-elevated text-base font-bold text-text-primary focus:border-gold outline-hidden"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
              <span className="text-[0.6875rem] font-bold text-text-muted uppercase">Court Filing Fee</span>
              <p className="text-xl font-extrabold text-gold mt-1">KES {calc.fee.toLocaleString()}</p>
              <p className="text-[0.6875rem] text-text-secondary mt-1">Payable on Judiciary e-filing portal</p>
            </div>
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
              <span className="text-[0.6875rem] font-bold text-text-muted uppercase">Statutory Disposal Time</span>
              <p className="text-xl font-extrabold text-kenya-green-light mt-1">60 Days</p>
              <p className="text-[0.6875rem] text-text-secondary mt-1">Mandatory timeline under Cap 21</p>
            </div>
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
              <span className="text-[0.6875rem] font-bold text-text-muted uppercase">Jurisdiction Status</span>
              <p className={`text-base font-bold mt-1 ${calc.isEligible ? "text-kenya-green-light" : "text-red-400"}`}>
                {calc.isEligible ? "✓ Eligible for SCC" : "Over KES 1M Limit"}
              </p>
              <p className="text-[0.6875rem] text-text-secondary mt-1">
                {calc.isEligible ? "Fast-track adjudication" : "Transfer to Resident Magistrate"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border/80 bg-bg-elevated/30 p-4">
              <h3 className="text-xs font-bold text-kenya-green-light uppercase tracking-wider mb-2">
                ✓ Claims Handled by Small Claims Court
              </h3>
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
              <h3 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
                ✕ Excluded Claims
              </h3>
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
