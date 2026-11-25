"use client";

import { useState, useMemo } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Copy,
  Check,
  GraduationCap,
  Phone,
  ShieldAlert,
} from "lucide-react";
import CustomSelect from "@/components/ui/CustomSelect";
import { getToolBySlug } from "@/lib/tools-registry";
import everydayData from "@/data/kenya-everyday-tools-2026.json";

const tool = getToolBySlug("school-fee-cap-auditor")!;
const feeData = everydayData.schoolFeeCaps;

function formatKes(value: number): string {
  return `KES ${Math.round(value).toLocaleString("en-KE")}`;
}

export default function SchoolFeeCapAuditorPage() {
  const [categoryId, setCategoryId] = useState<string>(feeData.categories[1].id);
  const [schoolName, setSchoolName] = useState<string>("");
  const [term1Str, setTerm1Str] = useState<string>("32000");
  const [term2Str, setTerm2Str] = useState<string>("22000");
  const [term3Str, setTerm3Str] = useState<string>("16000");
  const [extraLeviesKesStr, setExtraLeviesKesStr] = useState<string>("5000");
  const [flaggedLevies, setFlaggedLevies] = useState<Record<number, boolean>>({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  const [copied, setCopied] = useState(false);

  const selectedCategory = useMemo(
    () => feeData.categories.find((c) => c.id === categoryId) ?? feeData.categories[1],
    [categoryId]
  );

  const calc = useMemo(() => {
    const t1 = Math.max(0, Number(term1Str.replace(/,/g, "")) || 0);
    const t2 = Math.max(0, Number(term2Str.replace(/,/g, "")) || 0);
    const t3 = Math.max(0, Number(term3Str.replace(/,/g, "")) || 0);
    const extraLevies = Math.max(0, Number(extraLeviesKesStr.replace(/,/g, "")) || 0);

    const billedTuitionTotal = t1 + t2 + t3;
    const billedGrandTotal = billedTuitionTotal + extraLevies;
    const legalCap = selectedCategory.parentCapKes;
    const overcharge = Math.max(0, billedGrandTotal - legalCap);
    const underCap = Math.max(0, legalCap - billedGrandTotal);

    const [s1, s2, s3] = feeData.termSplits;
    const termBreakdown = [
      {
        term: "Term 1",
        splitPct: Math.round(s1 * 100),
        legalCapKes: Math.round(legalCap * s1),
        billedKes: t1,
        varianceKes: t1 - Math.round(legalCap * s1),
      },
      {
        term: "Term 2",
        splitPct: Math.round(s2 * 100),
        legalCapKes: Math.round(legalCap * s2),
        billedKes: t2,
        varianceKes: t2 - Math.round(legalCap * s2),
      },
      {
        term: "Term 3",
        splitPct: Math.round(s3 * 100),
        legalCapKes: Math.round(legalCap * s3),
        billedKes: t3,
        varianceKes: t3 - Math.round(legalCap * s3),
      },
    ];

    const checkedLevyNames = feeData.illegalLevies.filter((_, idx) => flaggedLevies[idx]);
    const isCompliant = overcharge === 0 && checkedLevyNames.length === 0;

    return {
      t1,
      t2,
      t3,
      extraLevies,
      billedTuitionTotal,
      billedGrandTotal,
      legalCap,
      overcharge,
      underCap,
      termBreakdown,
      checkedLevyNames,
      isCompliant,
    };
  }, [term1Str, term2Str, term3Str, extraLeviesKesStr, selectedCategory, flaggedLevies]);

  const bomInquiryText = useMemo(() => {
    const schoolLabel = schoolName.trim() || "[School Name]";
    const leviesSection =
      calc.checkedLevyNames.length > 0
        ? `\nFlagged unauthorized/extra items on the fee structure:\n${calc.checkedLevyNames
            .map((item) => `- ${item}`)
            .join("\n")}\n`
        : "";
    return `Dear Principal / Board of Management (${schoolLabel}),

RE: REQUEST FOR CLARIFICATION ON 2026 SENIOR SCHOOL FEE STRUCTURE (${feeData.gazetteReference})

Following the Ministry of Education ${feeData.gazetteReference}, the statutory annual parent fee ceiling for "${selectedCategory.label}" is ${formatKes(
      calc.legalCap
    )} (split 50/30/20 across Terms 1, 2, and 3: ${formatKes(
      calc.termBreakdown[0].legalCapKes
    )} / ${formatKes(calc.termBreakdown[1].legalCapKes)} / ${formatKes(
      calc.termBreakdown[2].legalCapKes
    )}), alongside GoK capitation of ${formatKes(selectedCategory.gokCapitationKes)}.

Our current fee structure totals ${formatKes(calc.billedGrandTotal)} (Term 1: ${formatKes(
      calc.t1
    )}, Term 2: ${formatKes(calc.t2)}, Term 3: ${formatKes(calc.t3)}${
      calc.extraLevies > 0 ? `, Extra Levies: ${formatKes(calc.extraLevies)}` : ""
    }), which exceeds the gazetted ceiling by ${formatKes(calc.overcharge)}.${leviesSection}
Kindly provide the County Education Board (CEB) written approval authorizing any amounts above the Ministry of Education ceiling, or issue an adjusted fee statement aligned to Gazette Notice No. 1449.

Regards,
Parent / Guardian`;
  }, [schoolName, selectedCategory, calc]);

  const handleLoadLegalSplit = () => {
    const cap = selectedCategory.parentCapKes;
    setTerm1Str(String(Math.round(cap * feeData.termSplits[0])));
    setTerm2Str(String(Math.round(cap * feeData.termSplits[1])));
    setTerm3Str(String(Math.round(cap * feeData.termSplits[2])));
    setExtraLeviesKesStr("0");
  };

  const handleCopyBomNote = async () => {
    try {
      await navigator.clipboard.writeText(bomInquiryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback ignored if clipboard unavailable
    }
  };

  const toggleLevy = (idx: number) => {
    setFlaggedLevies((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="min-w-0">
              <span className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 shrink-0" />
                {feeData.gazetteReference}
              </span>
              <p className="text-xs text-text-muted mt-0.5">{feeData.authority}</p>
            </div>
            <button
              type="button"
              onClick={handleLoadLegalSplit}
              className="px-3 py-1.5 rounded-full text-xs font-bold border border-gold/40 bg-gold/10 text-gold hover:bg-gold hover:text-kenya-black transition-colors cursor-pointer shrink-0"
            >
              Load Legal 50/30/20 Cap
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="min-w-0">
              <label
                htmlFor="school-tier-select"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Public Senior School Category
              </label>
              <CustomSelect
                id="school-tier-select"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="input-field w-full text-xs"
              >
                {feeData.categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.label} — Cap {formatKes(cat.parentCapKes)}
                  </option>
                ))}
              </CustomSelect>
              <p className="text-[0.72rem] text-text-muted mt-1.5">{selectedCategory.notes}</p>
            </div>

            <div className="min-w-0">
              <label
                htmlFor="school-name-input"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                School Name (Optional — for BOM Note)
              </label>
              <input
                id="school-name-input"
                type="text"
                placeholder="e.g. Alliance / County Senior School"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm text-text-primary placeholder:text-text-muted"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div>
              <label
                htmlFor="term1-fee"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Term 1 Billed (KES)
              </label>
              <input
                id="term1-fee"
                type="text"
                inputMode="numeric"
                value={term1Str ? Number(term1Str).toLocaleString("en-KE") : ""}
                onChange={(e) => setTerm1Str(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>
            <div>
              <label
                htmlFor="term2-fee"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Term 2 Billed (KES)
              </label>
              <input
                id="term2-fee"
                type="text"
                inputMode="numeric"
                value={term2Str ? Number(term2Str).toLocaleString("en-KE") : ""}
                onChange={(e) => setTerm2Str(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>
            <div>
              <label
                htmlFor="term3-fee"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Term 3 Billed (KES)
              </label>
              <input
                id="term3-fee"
                type="text"
                inputMode="numeric"
                value={term3Str ? Number(term3Str).toLocaleString("en-KE") : ""}
                onChange={(e) => setTerm3Str(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>
            <div>
              <label
                htmlFor="extra-levies-fee"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Extra / Unlisted Levies (KES)
              </label>
              <input
                id="extra-levies-fee"
                type="text"
                inputMode="numeric"
                value={extraLeviesKesStr ? Number(extraLeviesKesStr).toLocaleString("en-KE") : ""}
                onChange={(e) => setExtraLeviesKesStr(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>
          </div>

          {/* Results */}
          <div role="status" aria-live="polite" aria-atomic="true" className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-border bg-bg-elevated/40 p-4 min-w-0">
                <span className="text-[0.68rem] font-bold text-text-muted uppercase">
                  Gazetted Parent Cap
                </span>
                <p className="text-2xl font-black text-text-primary mt-1 tabular-nums whitespace-nowrap">
                  {formatKes(calc.legalCap)}
                </p>
                <p className="text-[0.68rem] text-text-muted mt-1 tabular-nums">
                  + GoK Capitation: {formatKes(selectedCategory.gokCapitationKes)}
                </p>
              </div>

              <div className="rounded-xl border border-border bg-bg-elevated/40 p-4 min-w-0">
                <span className="text-[0.68rem] font-bold text-text-muted uppercase">
                  Total Billed to Parent
                </span>
                <p className="text-2xl font-black text-text-primary mt-1 tabular-nums whitespace-nowrap">
                  {formatKes(calc.billedGrandTotal)}
                </p>
                <p className="text-[0.68rem] text-text-muted mt-1 tabular-nums">
                  Terms: {formatKes(calc.billedTuitionTotal)}
                  {calc.extraLevies > 0 ? ` + Extra: ${formatKes(calc.extraLevies)}` : ""}
                </p>
              </div>

              <div
                className={`rounded-xl border p-4 min-w-0 ${
                  calc.overcharge > 0
                    ? "border-red-500/45 bg-red-500/10"
                    : "border-emerald-500/45 bg-emerald-500/10"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
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
                    {calc.overcharge > 0 ? "Illegal Overcharge" : "Within Legal Cap"}
                  </span>
                </div>
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
                    ? "Exceeds Gazette Notice No. 1449 ceiling"
                    : calc.checkedLevyNames.length > 0
                    ? `Fee total fits cap, but ${calc.checkedLevyNames.length} banned levy flagged`
                    : `${formatKes(calc.underCap)} below annual parent ceiling`}
                </p>
              </div>
            </div>

            {/* 50/30/20 Term Breakdown */}
            <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-sm font-bold text-text-primary">
                  Mandatory 50 / 30 / 20 Term Split Audit
                </h2>
                <span className="text-[0.68rem] font-semibold px-2.5 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/30">
                  Total Annual Cost: {formatKes(selectedCategory.totalAnnualKes)}
                </span>
              </div>

              <div className="space-y-2">
                {calc.termBreakdown.map((row) => (
                  <div
                    key={row.term}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border/70 bg-bg-card px-3 py-2.5 text-xs"
                  >
                    <div className="min-w-0">
                      <span className="font-bold text-text-primary">{row.term}</span>
                      <span className="text-text-muted ml-2">({row.splitPct}% legal share)</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 min-w-0 tabular-nums">
                      <span className="text-text-secondary">
                        Cap: <strong className="text-text-primary">{formatKes(row.legalCapKes)}</strong>
                      </span>
                      <span className="text-text-secondary">
                        Billed: <strong className="text-text-primary">{formatKes(row.billedKes)}</strong>
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full font-bold whitespace-nowrap ${
                          row.varianceKes > 0
                            ? "bg-red-500/15 text-red-700 dark:text-red-400"
                            : "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                        }`}
                      >
                        {row.varianceKes > 0
                          ? `+${formatKes(row.varianceKes)} over`
                          : row.varianceKes < 0
                          ? `${formatKes(Math.abs(row.varianceKes))} under`
                          : "Exact match"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Extra / Illegal Levies Checklist */}
          <div className="rounded-xl border border-amber-500/35 bg-amber-500/[0.06] p-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-sm font-bold text-amber-950 dark:text-amber-200 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                Banned &amp; Unauthorized Levies Checklist
              </h2>
              <span className="text-xs font-bold text-amber-950 dark:text-amber-200">
                {calc.checkedLevyNames.length} / {feeData.illegalLevies.length} flagged
              </span>
            </div>
            <p className="text-xs text-amber-950/80 dark:text-amber-200/80">
              Tick any unauthorized charges appearing on your child&apos;s fee structure to include them in your BOM inquiry note.
            </p>
            <div className="space-y-2">
              {feeData.illegalLevies.map((levy, idx) => (
                <label
                  key={levy}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg border border-border/60 bg-bg-card cursor-pointer text-xs text-text-primary"
                >
                  <input
                    type="checkbox"
                    checked={Boolean(flaggedLevies[idx])}
                    onChange={() => toggleLevy(idx)}
                    className="mt-0.5 accent-amber-500 shrink-0"
                  />
                  <span className="min-w-0 leading-relaxed">{levy}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Copyable BOM Inquiry Note */}
          <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-sm font-bold text-text-primary">
                Copyable BOM / Principal Fee Inquiry Note
              </h2>
              <button
                type="button"
                onClick={handleCopyBomNote}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-gold text-kenya-black hover:opacity-90 transition-opacity cursor-pointer shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied Note" : "Copy Inquiry Note"}
              </button>
            </div>
            <pre className="whitespace-pre-wrap break-words text-xs text-text-secondary bg-bg-card border border-border rounded-lg p-3.5 font-sans leading-relaxed">
              {bomInquiryText}
            </pre>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-text-muted">
              <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>
                MoE Toll-Free: <strong className="text-text-primary">{feeData.reportingChannels.moeHotline}</strong>
              </span>
              <span>•</span>
              <span>
                Ombudsman: <strong className="text-text-primary">{feeData.reportingChannels.ombudsman}</strong>
              </span>
              <span>•</span>
              <span>
                Escalation: <strong className="text-text-primary">{feeData.reportingChannels.countyOffice}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
