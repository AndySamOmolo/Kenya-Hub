"use client";

import { useState, useMemo } from "react";
import { Stethoscope, CheckCircle2, AlertTriangle, Copy, Check } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import utilData from "@/data/kenya-utility-tools-2026.json";

const tool = TOOLS.find((t) => t.slug === "sha-claim-scrubber")!;

const TRIGGERS = [
  { id: "tier", label: "Facility contract tier verified on sha.go.ke/contracted-facilities (Level 3–5 match)", weight: 25 },
  { id: "keml", label: "All billed medicines & consumables verified on Kenya Essential Medicines List (KEML)", weight: 20 },
  { id: "mpesa", label: "Beneficiary SHA active status confirmed via *147# (no Paybill 200222 M-Pesa remittance lag)", weight: 20 },
  { id: "preauth", label: "Pre-authorization code attached for inpatient / surgical / imaging procedures", weight: 15 },
  { id: "docs", label: "Signed discharge summary, itemized invoice, lab/imaging reports & biometric/OTP verification attached", weight: 15 },
  { id: "window", label: "Claim submitted within the 30-day SHA statutory submission window", weight: 5 },
];

export default function ShaClaimScrubberPage() {
  const [facilityLevel, setFacilityLevel] = useState("Level 4");
  const [claimAmount, setClaimAmount] = useState("48500");
  const [daysSinceDischarge, setDaysSinceDischarge] = useState("4");
  const [checked, setChecked] = useState<Record<string, boolean>>({
    tier: true,
    keml: true,
    mpesa: false,
    preauth: true,
    docs: false,
    window: true,
  });
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    const days = Math.max(0, Number(daysSinceDischarge) || 0);
    const amount = Math.max(0, Number(claimAmount.replace(/,/g, "")) || 0);
    let score = 0;
    const missing: string[] = [];
    for (const t of TRIGGERS) {
      const ok = t.id === "window" ? checked[t.id] && days <= utilData.sha.submissionWindowDays : checked[t.id];
      if (ok) score += t.weight;
      else missing.push(t.label);
    }
    const riskLevel = score >= 90 ? "Low Risk (Ready to Submit)" : score >= 60 ? "Medium Rejection Risk" : "High Rejection Risk";
    return { score, missing, riskLevel, amount, days };
  }, [checked, daysSinceDischarge, claimAmount]);

  const copyAppealChecklist = () => {
    const lines = [
      `SHA PRE-SUBMISSION SCRUB & APPEAL PACKET (${facilityLevel})`,
      `Claim Amount: KES ${result.amount.toLocaleString()} | Days Since Discharge: ${result.days} / ${utilData.sha.submissionWindowDays}`,
      `Readiness Score: ${result.score}/100 (${result.riskLevel})`,
      "",
      result.missing.length ? "BLOCKING GAPS TO FIX BEFORE SUBMISSION:" : "ALL 6 SHA TRIGGERS VERIFIED.",
      ...result.missing.map((m, i) => `${i + 1}. [ACTION REQUIRED] ${m}`),
    ];
    navigator.clipboard?.writeText(lines.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
            <div>
              <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Facility Contract Tier</label>
              <select
                value={facilityLevel}
                onChange={(e) => setFacilityLevel(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border bg-bg-elevated text-xs font-semibold text-text-primary"
              >
                <option value="Level 3">Level 3 (Health Centre / Clinic)</option>
                <option value="Level 4">Level 4 (Primary / Sub-County Hospital)</option>
                <option value="Level 5">Level 5 (County Referral / Private)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Claim Value (KES)</label>
              <input
                type="text"
                value={claimAmount ? Number(claimAmount).toLocaleString("en-KE") : ""}
                onChange={(e) => setClaimAmount(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-3 py-2 rounded-xl border border-border bg-bg-elevated text-sm font-bold text-text-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Days Since Discharge</label>
              <input
                type="number"
                value={daysSinceDischarge}
                onChange={(e) => setDaysSinceDischarge(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border bg-bg-elevated text-sm font-bold text-text-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div className={`rounded-xl border p-4 ${result.score >= 90 ? "border-emerald-500/40 bg-emerald-500/10" : result.score >= 60 ? "border-amber-500/40 bg-amber-500/10" : "border-red-500/40 bg-red-500/10"}`}>
              <span className="text-[0.68rem] font-bold uppercase text-text-muted">Claim Readiness Score</span>
              <p className="text-2xl font-black text-text-primary mt-1">{result.score}/100</p>
              <p className="text-[0.7rem] font-semibold mt-0.5 text-text-secondary">{result.riskLevel}</p>
            </div>
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
              <span className="text-[0.68rem] font-bold uppercase text-text-muted">Submission Window</span>
              <p className="text-xl font-bold text-text-primary mt-1">
                {Math.max(0, utilData.sha.submissionWindowDays - result.days)} days left
              </p>
              <p className="text-[0.68rem] text-text-muted mt-0.5">Paybill {utilData.sha.paybill} • USSD {utilData.sha.ussd}</p>
            </div>
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
              <span className="text-[0.68rem] font-bold uppercase text-text-muted">Revenue at Risk</span>
              <p className="text-xl font-bold text-gold mt-1">
                KES {result.missing.length > 0 ? result.amount.toLocaleString() : "0"}
              </p>
              <p className="text-[0.68rem] text-text-muted mt-0.5">{result.missing.length} unresolved trigger(s)</p>
            </div>
          </div>

          <div className="space-y-2.5 mb-5">
            {TRIGGERS.map((t) => (
              <label
                key={t.id}
                className="flex items-start gap-3 p-3 rounded-xl border border-border bg-bg-elevated/40 hover:border-gold/40 cursor-pointer text-xs"
              >
                <input
                  type="checkbox"
                  checked={!!checked[t.id]}
                  onChange={() => setChecked((prev) => ({ ...prev, [t.id]: !prev[t.id] }))}
                  className="mt-0.5 accent-gold"
                />
                <span className="flex-1 text-text-primary font-medium">{t.label}</span>
                <span className="text-[0.68rem] font-bold text-text-muted">+{t.weight} pts</span>
              </label>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            {result.missing.length === 0 ? (
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" /> All 6 pre-submission checks verified.
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                <AlertTriangle className="w-4 h-4" /> Fix {result.missing.length} trigger(s) before submitting to SHA.
              </span>
            )}
            <button
              type="button"
              onClick={copyAppealChecklist}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gold text-kenya-black text-xs font-bold cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied Packet" : "Copy Scrub / Appeal Packet"}
            </button>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
