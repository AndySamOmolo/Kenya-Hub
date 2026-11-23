"use client";

import { useState, useMemo } from "react";
import { AlertTriangle, Copy, Check } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import utilData from "@/data/kenya-utility-tools-2026.json";

const tool = TOOLS.find((t) => t.slug === "odpc-hr-retention-vault")!;

export default function OdpcHrRetentionVaultPage() {
  const [staffCount, setStaffCount] = useState("18");
  const [annualTurnover, setAnnualTurnover] = useState("12000000");
  const [isThirdSchedule, setIsThirdSchedule] = useState(false);
  const [usesStaffPhotos, setUsesStaffPhotos] = useState(true);
  const [recordsExitCalls, setRecordsExitCalls] = useState(false);
  const [copied, setCopied] = useState(false);

  const audit = useMemo(() => {
    const staff = Math.max(0, Math.floor(Number(staffCount) || 0));
    const turnover = Math.max(0, Number(annualTurnover.replace(/,/g, "")) || 0);
    const mandatoryReg =
      staff >= utilData.odpc.staffThreshold ||
      turnover >= utilData.odpc.turnoverThresholdKes ||
      isThirdSchedule;
    // Statutory Data Protection Act (2019) Section 63 administrative fine cap:
    // Lower of KES 5,000,000 or 1% of annual turnover (F-008)
    const maxFineKes = Math.min(
      utilData.odpc.maxFineKes,
      Math.round(turnover * utilData.odpc.maxFineTurnoverPct)
    );
    const riskFlags: string[] = [];
    if (usesStaffPhotos) {
      riskFlags.push(
        "Staff marketing photos require explicit written/verifiable consent (ODPC precedent: Kirima v Solar Panda — KES 500,000 compensation award)."
      );
    }
    if (recordsExitCalls) {
      riskFlags.push(
        "Exit interview audio/call recordings require documented legal basis & rapid purge (ODPC precedent: Alston v Liquid Telecom — KES 700,000 compensation award)."
      );
    }
    return { staff, turnover, mandatoryReg, maxFineKes, riskFlags };
  }, [staffCount, annualTurnover, isThirdSchedule, usesStaffPhotos, recordsExitCalls]);

  const copyRopaSummary = () => {
    const lines = [
      `KENYA ODPC DUAL-STATUTE HR RETENTION & RoPA SCHEDULE`,
      `Staff Headcount: ${audit.staff} | Annual Turnover: KES ${audit.turnover.toLocaleString("en-KE")}`,
      `ODPC Registration Status: ${audit.mandatoryReg ? "MANDATORY (10+ staff or >KES 5M turnover)" : "Exempt under threshold (unless processing sensitive data)"}`,
      `Statutory DPA s.63 Max Administrative Fine Cap: KES ${audit.maxFineKes.toLocaleString("en-KE")} (min of KES 5,000,000 or 1% turnover)`,
      "",
      ...utilData.odpc.retentionRules.map(
        (r) => `- [${r.action}] ${r.record}: ${r.duration} (${r.statute})`
      ),
    ];
    navigator.clipboard?.writeText(lines.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label
                htmlFor="odpc-staff-count"
                className="block text-xs font-semibold text-text-muted uppercase mb-1.5"
              >
                Total Employees / Staff Headcount
              </label>
              <input
                id="odpc-staff-count"
                type="number"
                inputMode="numeric"
                min={1}
                value={staffCount}
                onChange={(e) => setStaffCount(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums focus:border-gold"
              />
            </div>
            <div>
              <label
                htmlFor="odpc-annual-turnover"
                className="block text-xs font-semibold text-text-muted uppercase mb-1.5"
              >
                Annual Company Turnover (KES)
              </label>
              <input
                id="odpc-annual-turnover"
                type="text"
                inputMode="numeric"
                value={annualTurnover ? Number(annualTurnover).toLocaleString("en-KE") : ""}
                onChange={(e) => setAnnualTurnover(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-3.5 py-2.5 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums focus:border-gold"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            <label className="inline-flex items-center gap-2 text-xs text-text-secondary cursor-pointer bg-bg-elevated px-3 py-2 rounded-lg border border-border">
              <input
                type="checkbox"
                checked={usesStaffPhotos}
                onChange={(e) => setUsesStaffPhotos(e.target.checked)}
                className="accent-gold"
              />
              Company uses staff photos on website / social media
            </label>
            <label className="inline-flex items-center gap-2 text-xs text-text-secondary cursor-pointer bg-bg-elevated px-3 py-2 rounded-lg border border-border">
              <input
                type="checkbox"
                checked={recordsExitCalls}
                onChange={(e) => setRecordsExitCalls(e.target.checked)}
                className="accent-gold"
              />
              HR records exit interviews / disciplinary calls
            </label>
          </div>

          <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6"
          >
            <div className="rounded-xl border border-amber-500/45 bg-amber-500/[0.04] p-4">
              <span className="text-[0.6875rem] font-bold text-gold uppercase">ODPC Registration</span>
              <p className="text-lg font-black text-text-primary mt-1">
                {audit.mandatoryReg ? "Mandatory" : "Below Threshold"}
              </p>
              <p className="text-[0.6875rem] text-text-secondary mt-1">
                Trigger: 10+ staff OR &gt;KES 5M turnover
              </p>
            </div>
            <div className="rounded-xl border border-red-500/35 bg-red-500/10 p-4">
              <span className="text-[0.6875rem] font-bold text-red-700 dark:text-red-400 uppercase">
                DPA s.63 Max Fine Cap
              </span>
              <p className="text-lg font-black text-red-700 dark:text-red-400 mt-1 tabular-nums whitespace-nowrap">
                KES {audit.maxFineKes.toLocaleString("en-KE")}
              </p>
              <p className="text-[0.6875rem] text-text-secondary mt-1">
                Lower of KES 5,000,000 or 1% of annual turnover
              </p>
            </div>
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
              <span className="text-[0.6875rem] font-bold text-text-muted uppercase">Active Risk Flags</span>
              <p className="text-lg font-black text-text-primary mt-1 tabular-nums">
                {audit.riskFlags.length} High-Priority
              </p>
              <p className="text-[0.6875rem] text-text-muted mt-1">Based on ODPC case determinations</p>
            </div>
          </div>

          {audit.riskFlags.length > 0 && (
            <div className="mb-6 space-y-2">
              {audit.riskFlags.map((flag, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl border border-amber-600/40 bg-amber-500/15 text-xs text-amber-950 dark:text-amber-200 font-medium"
                >
                  <AlertTriangle className="w-4 h-4 text-amber-800 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span>{flag}</span>
                </div>
              ))}
            </div>
          )}

          {/* Dual-Statute Retention Matrix */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <h2 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">
              Dual-Statute Retention Schedule
            </h2>
            <button
              type="button"
              onClick={copyRopaSummary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold text-kenya-black text-xs font-bold cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied RoPA Schedule" : "Copy RoPA Schedule"}
            </button>
          </div>

          {/* Mobile Stacked Cards (<md) to prevent 4th column clipping (F-008, F-030) */}
          <div className="md:hidden space-y-2.5">
            {utilData.odpc.retentionRules.map((rule, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-bg-elevated/50 p-3.5 space-y-2"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <p className="text-xs font-bold text-text-primary leading-snug min-w-0 flex-1">{rule.record}</p>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[0.65rem] font-bold shrink-0 whitespace-nowrap ${
                      rule.action === "LOCK"
                        ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                        : rule.action === "AUTO-PURGE"
                        ? "bg-red-500/15 text-red-700 dark:text-red-400"
                        : "bg-amber-500/15 text-amber-800 dark:text-amber-400"
                    }`}
                  >
                    {rule.action}
                  </span>
                </div>
                <p className="text-[0.7rem] text-text-secondary leading-relaxed">
                  <strong className="text-text-muted">Statute:</strong> {rule.statute}
                </p>
                <p className="text-xs font-semibold text-gold leading-relaxed">
                  Retention: {rule.duration}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop Table (md+) */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left text-xs">
              <thead className="bg-bg-elevated text-text-muted uppercase text-[0.65rem]">
                <tr>
                  <th className="px-3 py-2.5">HR Record Category</th>
                  <th className="px-3 py-2.5">Governing Statute</th>
                  <th className="px-3 py-2.5 whitespace-nowrap">Policy Action</th>
                  <th className="px-3 py-2.5 whitespace-nowrap">Retention Window</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {utilData.odpc.retentionRules.map((rule, i) => (
                  <tr key={i}>
                    <td className="px-3 py-2.5 font-semibold text-text-primary">{rule.record}</td>
                    <td className="px-3 py-2.5 text-text-secondary">{rule.statute}</td>
                    <td className="px-3 py-2.5 whitespace-nowrap">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[0.68rem] font-bold ${
                          rule.action === "LOCK"
                            ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                            : rule.action === "AUTO-PURGE"
                            ? "bg-red-500/15 text-red-700 dark:text-red-400"
                            : "bg-amber-500/15 text-amber-800 dark:text-amber-400"
                        }`}
                      >
                        {rule.action}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-text-primary font-medium">{rule.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
