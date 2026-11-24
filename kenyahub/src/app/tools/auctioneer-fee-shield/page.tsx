"use client";

import { useState, useMemo } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Copy,
  Check,
  Gavel,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";
import CustomSelect from "@/components/ui/CustomSelect";
import { getToolBySlug } from "@/lib/tools-registry";
import everydayData from "@/data/kenya-everyday-tools-2026.json";

const tool = getToolBySlug("auctioneer-fee-shield")!;
const cap526 = everydayData.auctioneerCap526;

type AttachmentType = "movable" | "immovable";
type StageReached = "proclamation" | "settled-before-sale" | "sold-at-auction";

function formatKes(value: number): string {
  return `KES ${Math.round(value).toLocaleString("en-KE")}`;
}

interface BandSlice {
  label: string;
  ratePct: number;
  sliceKes: number;
  feeKes: number;
}

function computeTieredCommission(
  valueKes: number,
  bands: { label: string; upToKes: number | null; rate: number }[]
): { total: number; slices: BandSlice[] } {
  let prevCap = 0;
  let total = 0;
  const slices: BandSlice[] = [];

  for (const band of bands) {
    const cap = band.upToKes === null ? Infinity : band.upToKes;
    const sliceKes = Math.max(0, Math.min(valueKes, cap) - prevCap);
    const feeKes = Math.round(sliceKes * band.rate);
    total += feeKes;
    slices.push({
      label: band.label,
      ratePct: Number((band.rate * 100).toFixed(1)),
      sliceKes,
      feeKes,
    });
    if (band.upToKes !== null) {
      prevCap = band.upToKes;
    }
  }

  return { total, slices };
}

export default function AuctioneerFeeShieldPage() {
  const [attachmentType, setAttachmentType] = useState<AttachmentType>("movable");
  const [stage, setStage] = useState<StageReached>("settled-before-sale");
  const [debtValueStr, setDebtValueStr] = useState<string>("250000");
  const [demandedFeeStr, setDemandedFeeStr] = useState<string>("65000");
  const [auctioneerName, setAuctioneerName] = useState<string>("");
  const [checkedFlags, setCheckedFlags] = useState<Record<number, boolean>>({
    0: false,
    1: false,
    2: false,
    3: true,
    4: false,
  });
  const [copied, setCopied] = useState(false);

  const calc = useMemo(() => {
    const value = Math.max(0, Number(debtValueStr.replace(/,/g, "")) || 0);
    const demanded = Math.max(0, Number(demandedFeeStr.replace(/,/g, "")) || 0);

    const bands =
      attachmentType === "movable"
        ? cap526.movableCommissionBands
        : cap526.immovableCommissionBands;

    const attendanceFee =
      attachmentType === "movable"
        ? cap526.attendanceFees.movableKes
        : cap526.attendanceFees.immovableKes;
    const proclamationFee = cap526.proclamationFeeKes;

    const { total: fullCommission, slices } = computeTieredCommission(value, bands);

    const commissionMultiplier =
      stage === "proclamation" ? 0 : stage === "settled-before-sale" ? 0.5 : 1;
    const applicableCommission = Math.round(fullCommission * commissionMultiplier);
    const statutoryCeiling =
      value === 0 ? 0 : attendanceFee + proclamationFee + applicableCommission;

    const overcharge = Math.max(0, demanded - statutoryCeiling);
    const activeRedFlags = cap526.illegalityRedFlags.filter((_, idx) => checkedFlags[idx]);

    return {
      value,
      demanded,
      attendanceFee,
      proclamationFee,
      fullCommission,
      commissionMultiplier,
      applicableCommission,
      statutoryCeiling,
      overcharge,
      slices,
      activeRedFlags,
    };
  }, [attachmentType, stage, debtValueStr, demandedFeeStr, checkedFlags]);

  const albComplaintText = useMemo(() => {
    const firm = auctioneerName.trim() || "[Auctioneer Name / Firm & Licence No.]";
    const stageLabel =
      stage === "proclamation"
        ? "Proclamation / Attachment Notice Only (No Sale)"
        : stage === "settled-before-sale"
        ? "Debt Settled After Proclamation / Before Auction"
        : "Completed Sale at Public Auction";
    const flagLines =
      calc.activeRedFlags.length > 0
        ? `\nProcedural / Statutory Violations Observed:\n${calc.activeRedFlags
            .map((f) => `- ${f}`)
            .join("\n")}\n`
        : "";

    return `TO: The Secretary, Auctioneers Licensing Board (ALB)
Milimani Commercial Courts / Judiciary of Kenya, Nairobi

RE: FORMAL COMPLAINT OF EXCESSIVE FEES & MISCONDUCT — ${firm}

Under the ${cap526.statute}, I hereby lodge a formal complaint regarding an attachment of ${
      attachmentType === "movable"
        ? "movable property / distress for rent"
        : "immovable property (land/building)"
    } valued at ${formatKes(calc.value)}.

Stage Reached: ${stageLabel}
Statutory Maximum Fee Ceiling (Fourth Schedule): ${formatKes(calc.statutoryCeiling)}
  - Attendance Fee: ${formatKes(calc.attendanceFee)}
  - Proclamation Fee: ${formatKes(calc.proclamationFee)}
  - Applicable Scale Commission (${Math.round(calc.commissionMultiplier * 100)}% of ${formatKes(
      calc.fullCommission
    )}): ${formatKes(calc.applicableCommission)}

Fee Demanded by Auctioneer: ${formatKes(calc.demanded)}
Unlawful Overcharge Above Statutory Scale: ${formatKes(calc.overcharge)}${flagLines}
I request the Board to investigate this conduct under Section 24 of the Auctioneers Act (Cap 526) and direct that any disputed charges be formally taxed by the Registrar / Magistrate under Rule 55 of the Auctioneers Rules.

Complainant: [Your Full Name & Phone Number]
Date: [Date]`;
  }, [auctioneerName, attachmentType, stage, calc]);

  const handleCopyComplaint = async () => {
    try {
      await navigator.clipboard.writeText(albComplaintText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard fallback
    }
  };

  const toggleFlag = (idx: number) => {
    setCheckedFlags((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5">
              <Gavel className="w-4 h-4 shrink-0" />
              {cap526.statute}
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                aria-pressed={attachmentType === "movable"}
                onClick={() => setAttachmentType("movable")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold border cursor-pointer ${
                  attachmentType === "movable"
                    ? "bg-gold text-kenya-black border-gold"
                    : "bg-bg-elevated text-text-secondary border-border"
                }`}
              >
                Movable / Rent Distress / Vehicle
              </button>
              <button
                type="button"
                aria-pressed={attachmentType === "immovable"}
                onClick={() => setAttachmentType("immovable")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold border cursor-pointer ${
                  attachmentType === "immovable"
                    ? "bg-gold text-kenya-black border-gold"
                    : "bg-bg-elevated text-text-secondary border-border"
                }`}
              >
                Immovable / Land &amp; Property
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div>
              <label
                htmlFor="cap526-debt-value"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Debt / Asset Value (KES)
              </label>
              <input
                id="cap526-debt-value"
                type="text"
                inputMode="numeric"
                value={debtValueStr ? Number(debtValueStr).toLocaleString("en-KE") : ""}
                onChange={(e) => setDebtValueStr(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>

            <div>
              <label
                htmlFor="cap526-demanded-fee"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Auctioneer Demanded Fee (KES)
              </label>
              <input
                id="cap526-demanded-fee"
                type="text"
                inputMode="numeric"
                value={demandedFeeStr ? Number(demandedFeeStr).toLocaleString("en-KE") : ""}
                onChange={(e) => setDemandedFeeStr(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>

            <div className="min-w-0">
              <label
                htmlFor="cap526-stage-select"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Enforcement Stage Reached
              </label>
              <CustomSelect
                id="cap526-stage-select"
                value={stage}
                onChange={(e) => setStage(e.target.value as StageReached)}
                className="input-field w-full text-xs"
              >
                <option value="proclamation">Proclamation Notice Only (0% sale comm.)</option>
                <option value="settled-before-sale">Settled After Attachment (50% comm.)</option>
                <option value="sold-at-auction">Sold at Public Auction (100% comm.)</option>
              </CustomSelect>
            </div>

            <div>
              <label
                htmlFor="cap526-firm-name"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Auctioneer Firm (Optional)
              </label>
              <input
                id="cap526-firm-name"
                type="text"
                placeholder="e.g. XYZ Auctioneers"
                value={auctioneerName}
                onChange={(e) => setAuctioneerName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm text-text-primary placeholder:text-text-muted"
              />
            </div>
          </div>

          {/* Results */}
          <div role="status" aria-live="polite" aria-atomic="true" className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 min-w-0">
                <span className="text-[0.68rem] font-bold text-emerald-700 dark:text-emerald-400 uppercase">
                  Cap 526 Statutory Ceiling
                </span>
                <p className="text-2xl font-black text-emerald-700 dark:text-emerald-400 mt-1 tabular-nums whitespace-nowrap">
                  {formatKes(calc.statutoryCeiling)}
                </p>
                <p className="text-[0.68rem] text-text-secondary mt-1 tabular-nums">
                  Attend {formatKes(calc.attendanceFee)} + Proclaim {formatKes(calc.proclamationFee)} + Comm {formatKes(calc.applicableCommission)}
                </p>
              </div>

              <div className="rounded-xl border border-border bg-bg-elevated/40 p-4 min-w-0">
                <span className="text-[0.68rem] font-bold text-text-muted uppercase">
                  Auctioneer Demanded
                </span>
                <p className="text-2xl font-black text-text-primary mt-1 tabular-nums whitespace-nowrap">
                  {formatKes(calc.demanded)}
                </p>
                <p className="text-[0.68rem] text-text-muted mt-1">
                  Must be taxed by court under Rule 55 if disputed
                </p>
              </div>

              <div
                className={`rounded-xl border p-4 min-w-0 ${
                  calc.overcharge > 0
                    ? "border-red-500/45 bg-red-500/10"
                    : "border-emerald-500/45 bg-emerald-500/10"
                }`}
              >
                <span
                  className={`text-[0.68rem] font-bold uppercase flex items-center gap-1 ${
                    calc.overcharge > 0
                      ? "text-red-700 dark:text-red-400"
                      : "text-emerald-700 dark:text-emerald-400"
                  }`}
                >
                  {calc.overcharge > 0 ? (
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  ) : (
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  )}
                  {calc.overcharge > 0 ? "Red-Flag Overcharge" : "Within Scale Ceiling"}
                </span>
                <p
                  className={`text-2xl font-black mt-1 tabular-nums whitespace-nowrap ${
                    calc.overcharge > 0
                      ? "text-red-700 dark:text-red-400"
                      : "text-emerald-700 dark:text-emerald-400"
                  }`}
                >
                  {calc.overcharge > 0 ? `+${formatKes(calc.overcharge)}` : "KES 0"}
                </p>
                <p className="text-[0.68rem] text-text-secondary mt-1">
                  {calc.overcharge > 0
                    ? "Demand formal court taxation before paying"
                    : "Verify licence & mandatory statutory notices"}
                </p>
              </div>
            </div>

            {/* Non-Cumulative Tiered Band Breakdown */}
            <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 space-y-2.5 text-xs">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-bold text-text-primary text-sm">
                  Fourth Schedule Tiered Commission Breakdown (Non-Cumulative Bands)
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-[0.68rem] font-bold bg-gold/15 text-gold border border-gold/30">
                  Full Scale: {formatKes(calc.fullCommission)}
                </span>
              </div>

              <div className="space-y-1.5">
                {calc.slices.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border/60 bg-bg-card px-3 py-2"
                  >
                    <div className="min-w-0">
                      <span className="font-semibold text-text-primary">{s.label}</span>
                      <span className="text-text-muted ml-1.5">({s.ratePct}%)</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 tabular-nums">
                      <span className="text-text-muted">Slice: {formatKes(s.sliceKes)}</span>
                      <span className="font-bold text-text-primary whitespace-nowrap">
                        {formatKes(s.feeKes)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 text-[0.72rem] text-text-muted">
                <span>
                  Mandatory Notices: <strong className="text-text-primary">{cap526.statutoryNoticeDays.movableProclamationDays} days</strong> movable proclamation
                </span>
                <span>•</span>
                <span>
                  <strong className="text-text-primary">{cap526.statutoryNoticeDays.rentDistressSaleDays} days</strong> rent distress sale
                </span>
                <span>•</span>
                <span>
                  <strong className="text-text-primary">{cap526.statutoryNoticeDays.immovableRedemptionDays} days</strong> land redemption notice
                </span>
              </div>
            </div>
          </div>

          {/* Red Flags & Exempt Property */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-xl border border-amber-500/35 bg-amber-500/[0.06] p-4 space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-sm font-bold text-amber-950 dark:text-amber-200 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  Mandatory Auctioneer ID &amp; Illegality Checklist
                </h2>
                <span className="text-xs font-bold text-amber-950 dark:text-amber-200">
                  {calc.activeRedFlags.length} flagged
                </span>
              </div>
              <div className="space-y-2">
                {cap526.illegalityRedFlags.map((flag, idx) => (
                  <label
                    key={flag}
                    className="flex items-start gap-2.5 p-2.5 rounded-lg border border-border/60 bg-bg-card cursor-pointer text-xs text-text-primary"
                  >
                    <input
                      type="checkbox"
                      checked={Boolean(checkedFlags[idx])}
                      onChange={() => toggleFlag(idx)}
                      className="mt-0.5 accent-amber-500 shrink-0"
                    />
                    <span className="min-w-0 leading-relaxed">{flag}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-emerald-500/35 bg-emerald-500/[0.06] p-4 space-y-2.5">
              <h2 className="text-sm font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                Legally Exempt Property (Cannot Be Attached)
              </h2>
              <ul className="space-y-2 text-xs text-text-primary">
                {cap526.exemptProperty.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-lg border border-border/60 bg-bg-card p-2.5 leading-relaxed"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="min-w-0">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyable ALB Complaint */}
          <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-sm font-bold text-text-primary">
                Copyable Auctioneers Licensing Board (ALB) Complaint Draft
              </h2>
              <button
                type="button"
                onClick={handleCopyComplaint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-gold text-kenya-black hover:opacity-90 transition-opacity cursor-pointer shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied Complaint" : "Copy ALB Complaint"}
              </button>
            </div>
            <pre className="whitespace-pre-wrap break-words text-xs text-text-secondary bg-bg-card border border-border rounded-lg p-3.5 font-sans leading-relaxed">
              {albComplaintText}
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}
