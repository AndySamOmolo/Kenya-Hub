"use client";

import { useState, useMemo } from "react";
import { X } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import sccData from "@/data/small-claims-data.json";
import passportIdData from "@/data/passport-id-fees.json";
import trademarkData from "@/data/trademark-fees.json";
import professionalBodiesData from "@/data/professional-bodies.json";

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
            <div className="relative">
              <input
                type="text"
                value={claimAmount ? Number(claimAmount).toLocaleString("en-KE") : ""}
                onChange={(e) => setClaimAmount(e.target.value.replace(/[^0-9]/g, ""))}
                placeholder="e.g. 75,000"
                className="w-full pl-4 pr-11 py-2.5 rounded-xl border border-border bg-bg-elevated text-base font-bold text-text-primary focus:border-gold outline-hidden"
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
              <p className={`text-base font-bold mt-1 ${
                calc.amount === 0
                  ? "text-text-muted"
                  : calc.isEligible
                  ? "text-kenya-green-light"
                  : "text-red-400"
              }`}>
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

        {/* Statutory eCitizen Civil Fees, KIPI IP Tariffs & Kenyan Professional Regulatory Bodies */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
          <div className="bg-bg-card border border-border rounded-2xl p-4 sm:p-5 space-y-2.5">
            <h2 className="text-sm font-bold font-[family-name:var(--font-outfit)] text-text-primary">
              eCitizen Passport &amp; National ID Statutory Fees
            </h2>
            <div className="space-y-1.5 text-xs">
              {passportIdData.passport.types.map((pt) => (
                <div key={pt.type} className="flex items-center justify-between py-1 border-b border-border/50">
                  <span className="text-text-secondary">{pt.type} ({pt.processingTime})</span>
                  <span className="font-bold text-gold">KES {pt.fee.toLocaleString()}</span>
                </div>
              ))}
              {passportIdData.nationalId.types.map((idType) => (
                <div key={idType.type} className="flex items-center justify-between py-1 border-b border-border/50 last:border-0">
                  <span className="text-text-secondary">ID: {idType.type}</span>
                  <span className="font-bold text-kenya-green-light">KES {idType.fee.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-bg-card border border-border rounded-2xl p-4 sm:p-5 space-y-2.5">
            <h2 className="text-sm font-bold font-[family-name:var(--font-outfit)] text-text-primary">
              KIPI Trademark &amp; Patent Filing Schedule ({trademarkData.kipiInfo.abbreviation})
            </h2>
            <div className="space-y-1.5 text-xs">
              {trademarkData.fees.trademark.steps.slice(0, 5).map((step) => (
                <div key={step.item} className="flex items-center justify-between py-1 border-b border-border/50 last:border-0">
                  <span className="text-text-secondary">{step.item} ({step.note})</span>
                  <span className="font-bold text-text-primary">KES {step.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-bg-card border border-border rounded-2xl p-4 sm:p-5 space-y-2.5">
            <h2 className="text-sm font-bold font-[family-name:var(--font-outfit)] text-text-primary">
              Kenyan Statutory Professional Regulators ({professionalBodiesData.bodies.length})
            </h2>
            <div className="space-y-1.5 text-xs max-h-52 overflow-y-auto pr-1">
              {professionalBodiesData.bodies.slice(0, 8).map((b) => (
                <div key={b.abbreviation} className="flex items-center justify-between py-1 border-b border-border/50 last:border-0">
                  <span className="text-text-secondary"><strong className="text-gold">{b.abbreviation}</strong> — {b.profession}</span>
                  <span className="text-[0.6875rem] text-text-muted">{b.renewalFee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
