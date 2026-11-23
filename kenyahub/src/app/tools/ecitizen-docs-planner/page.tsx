"use client";

import { useState, useMemo, useEffect } from "react";
import {
  FileCheck2,
  Building2,
  Clock,
  CheckSquare,
  Square,
  RotateCcw,
  Wallet,
  Briefcase,
} from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import CustomSelect from "@/components/ui/CustomSelect";
import { getToolBySlug } from "@/lib/tools-registry";
import everydayData from "@/data/kenya-everyday-tools-2026.json";

const tool = getToolBySlug("ecitizen-docs-planner")!;
const STORAGE_KEY = "kenyahub_ecitizen_huduma_bag_v1";

type PassportVariant = "standard" | "lost" | "mutilated";
type BirthCertVariant = "current" | "late";

export default function EcitizenDocsPlannerPage() {
  const docs = everydayData.ecitizenDocs.documents;

  const [selectedIds, setSelectedIds] = useState<string[]>([
    "national-id-new",
    "good-conduct",
  ]);
  const [passportVariant, setPassportVariant] = useState<PassportVariant>("standard");
  const [birthCertVariant, setBirthCertVariant] = useState<BirthCertVariant>("current");
  const [checkedBagItems, setCheckedBagItems] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === "object") {
          setCheckedBagItems(parsed);
        }
      }
    } catch {
      // Ignore storage read errors
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedBagItems));
    } catch {
      // Ignore storage write errors
    }
  }, [checkedBagItems, hydrated]);

  const toggleDoc = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleBagItem = (item: string) => {
    setCheckedBagItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const resetChecklist = () => {
    setCheckedBagItems({});
  };

  const getDocFee = (doc: (typeof docs)[number]): { fee: number; note?: string } => {
    if (doc.id === "epassport-66") {
      if (passportVariant === "lost") {
        return {
          fee: doc.lostFeeKes ?? 12050,
          note: "Lost e-Passport replacement",
        };
      }
      if (passportVariant === "mutilated") {
        return {
          fee: doc.mutilatedFeeKes ?? 10050,
          note: "Mutilated e-Passport replacement",
        };
      }
      return { fee: doc.feeKes, note: "Standard / Renewal 66-page (Series C)" };
    }
    if (doc.id === "birth-certificate") {
      if (birthCertVariant === "late") {
        return {
          fee: doc.lateFeeKes ?? 700,
          note: doc.lateBreakdown ?? "KES 500 late registration + KES 200 certificate fee",
        };
      }
      return { fee: doc.feeKes, note: "Current registration certificate" };
    }
    if (doc.id === "civil-marriage") {
      return {
        fee: doc.feeKes,
        note: `Notice KES ${(doc.noticeFeeKes ?? 600).toLocaleString("en-KE")} + Certificate KES ${(doc.certificateFeeKes ?? 3300).toLocaleString("en-KE")}`,
      };
    }
    if (doc.feeKes === 0 && doc.legalAuthority) {
      return { fee: 0, note: `Free under ${doc.legalAuthority}` };
    }
    return { fee: doc.feeKes };
  };

  const summary = useMemo(() => {
    const selectedDocs = docs.filter((d) => selectedIds.includes(d.id));
    const itemized = selectedDocs.map((doc) => {
      const { fee, note } = getDocFee(doc);
      return { ...doc, computedFee: fee, feeNote: note };
    });

    const totalPaybillKes = itemized.reduce((sum, d) => sum + d.computedFee, 0);
    const maxTurnaroundDays = itemized.reduce(
      (max, d) => Math.max(max, d.turnaroundDays),
      0
    );
    const minTurnaroundDays =
      itemized.length > 0
        ? itemized.reduce((min, d) => Math.min(min, d.turnaroundDays), Infinity)
        : 0;

    const offices = Array.from(new Set(itemized.map((d) => d.agency)));

    const bagItemsMap = new Map<string, string[]>();
    itemized.forEach((doc) => {
      doc.requiredDocs.forEach((req) => {
        const existing = bagItemsMap.get(req) || [];
        existing.push(doc.label.split("(")[0].trim());
        bagItemsMap.set(req, existing);
      });
    });

    const bagChecklist = Array.from(bagItemsMap.entries()).map(([item, neededFor]) => ({
      item,
      neededFor,
    }));

    const packedCount = bagChecklist.filter((b) => checkedBagItems[b.item]).length;

    return {
      itemized,
      totalPaybillKes,
      maxTurnaroundDays,
      minTurnaroundDays,
      offices,
      bagChecklist,
      packedCount,
    };
  }, [docs, selectedIds, passportVariant, birthCertVariant, checkedBagItems]);

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        {/* Document Selector Card */}
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="min-w-0">
              <h2 className="text-base font-bold text-text-primary flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-gold shrink-0" />
                Select Documents You Need
              </h2>
              <p className="text-xs text-text-muted mt-0.5">
                Tick one or more civic documents to compute your eCitizen Paybill 222222 total and Huduma bag checklist.
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[0.7rem] font-bold bg-gold/15 text-gold border border-gold/30 shrink-0">
              {selectedIds.length} Selected
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {docs.map((doc) => {
              const isSelected = selectedIds.includes(doc.id);
              const { fee, note } = getDocFee(doc);
              return (
                <div
                  key={doc.id}
                  className={`rounded-xl border p-4 transition-colors ${
                    isSelected
                      ? "border-gold bg-gold/[0.06]"
                      : "border-border bg-bg-elevated/40 hover:border-gold/40"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleDoc(doc.id)}
                    aria-pressed={isSelected}
                    className="w-full text-left flex items-start gap-3 cursor-pointer"
                  >
                    {isSelected ? (
                      <CheckSquare className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    ) : (
                      <Square className="w-4 h-4 text-text-muted mt-0.5 shrink-0" />
                    )}
                    <div className="min-w-0 flex-1 space-y-1.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-sm font-bold text-text-primary min-w-0 break-words">
                          {doc.label}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-bold tabular-nums whitespace-nowrap shrink-0 ${
                            fee === 0
                              ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                              : "bg-bg-card border border-border text-text-primary"
                          }`}
                        >
                          {fee === 0 ? "FREE" : `KES ${fee.toLocaleString("en-KE")}`}
                        </span>
                      </div>
                      <p className="text-[0.72rem] text-text-muted">{doc.agency}</p>
                      <div className="flex flex-wrap items-center gap-2 text-[0.7rem] text-text-secondary">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3 text-gold shrink-0" />
                          ~{doc.turnaroundDays} days
                        </span>
                        {note && (
                          <span className="text-text-muted">• {note}</span>
                        )}
                      </div>
                    </div>
                  </button>

                  {isSelected && doc.id === "epassport-66" && (
                    <div className="mt-3 pt-3 border-t border-border/60">
                      <label
                        htmlFor="passport-variant"
                        className="block text-[0.7rem] font-semibold text-text-muted uppercase mb-1"
                      >
                        e-Passport Application Type
                      </label>
                      <CustomSelect
                        id="passport-variant"
                        value={passportVariant}
                        onValueChange={(v) => setPassportVariant(v as PassportVariant)}
                        className="text-xs w-full"
                      >
                        <option value="standard">New / Renewal 66-Page (KES 12,500)</option>
                        <option value="lost">Lost e-Passport Replacement (KES 12,050)</option>
                        <option value="mutilated">Mutilated e-Passport Replacement (KES 10,050)</option>
                      </CustomSelect>
                    </div>
                  )}

                  {isSelected && doc.id === "birth-certificate" && (
                    <div className="mt-3 pt-3 border-t border-border/60">
                      <label
                        htmlFor="birth-cert-variant"
                        className="block text-[0.7rem] font-semibold text-text-muted uppercase mb-1"
                      >
                        Registration Type
                      </label>
                      <CustomSelect
                        id="birth-cert-variant"
                        value={birthCertVariant}
                        onValueChange={(v) => setBirthCertVariant(v as BirthCertVariant)}
                        className="text-xs w-full"
                      >
                        <option value="current">Current Registration (KES 250)</option>
                        <option value="late">Late Registration (KES 500 + KES 200 = KES 700)</option>
                      </CustomSelect>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary KPI Cards */}
        <div role="status" aria-live="polite" aria-atomic="true" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-xl border border-amber-500/45 bg-amber-500/[0.05] p-4">
              <span className="text-[0.68rem] font-bold text-gold uppercase flex items-center gap-1">
                <Wallet className="w-3.5 h-3.5 shrink-0" /> Paybill 222222 Total
              </span>
              <p className="text-2xl font-black text-gold mt-1 tabular-nums whitespace-nowrap">
                KES {summary.totalPaybillKes.toLocaleString("en-KE")}
              </p>
              <p className="text-[0.68rem] text-text-secondary mt-1">
                Official eCitizen statutory fees (excl. M-Pesa convenience fee)
              </p>
            </div>

            <div className="rounded-xl border border-border bg-bg-card p-4">
              <span className="text-[0.68rem] font-bold text-text-muted uppercase flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-gold shrink-0" /> Turnaround Window
              </span>
              <p className="text-2xl font-black text-text-primary mt-1 tabular-nums whitespace-nowrap">
                {summary.maxTurnaroundDays === 0
                  ? "—"
                  : summary.minTurnaroundDays === summary.maxTurnaroundDays
                  ? `${summary.maxTurnaroundDays} days`
                  : `${summary.minTurnaroundDays}–${summary.maxTurnaroundDays} days`}
              </p>
              <p className="text-[0.68rem] text-text-muted mt-1">
                {summary.maxTurnaroundDays > 0
                  ? `Longest single process: ${summary.maxTurnaroundDays} days`
                  : "Select at least one document"}
              </p>
            </div>

            <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4">
              <span className="text-[0.68rem] font-bold text-emerald-700 dark:text-emerald-400 uppercase flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5 shrink-0" /> Huduma Bag Ready
              </span>
              <p className="text-2xl font-black text-emerald-700 dark:text-emerald-400 mt-1 tabular-nums whitespace-nowrap">
                {summary.packedCount} / {summary.bagChecklist.length}
              </p>
              <p className="text-[0.68rem] text-text-secondary mt-1">
                Saved automatically on this device
              </p>
            </div>
          </div>

          {summary.itemized.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Itemized Paybill & Office Routing */}
              <div className="rounded-2xl border border-border bg-bg-card p-5 space-y-4">
                <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-gold shrink-0" />
                  Itemized Paybill 222222 &amp; Office Routing
                </h3>

                <div className="space-y-2.5">
                  {summary.itemized.map((doc) => (
                    <div
                      key={doc.id}
                      className="rounded-xl border border-border bg-bg-elevated/40 p-3 space-y-1"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <span className="text-xs font-bold text-text-primary min-w-0">
                          {doc.label}
                        </span>
                        <span className="text-xs font-bold text-gold tabular-nums whitespace-nowrap">
                          {doc.computedFee === 0
                            ? "KES 0 (FREE)"
                            : `KES ${doc.computedFee.toLocaleString("en-KE")}`}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-2 text-[0.7rem] text-text-muted">
                        <span className="min-w-0">{doc.agency}</span>
                        <span className="whitespace-nowrap">~{doc.turnaroundDays} days</span>
                      </div>
                      {doc.feeNote && (
                        <p className="text-[0.68rem] text-text-secondary">{doc.feeNote}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-gold/25 bg-gold/[0.04] p-3.5 space-y-1.5">
                  <p className="text-xs font-bold text-text-primary">
                    Offices / Desks to Visit ({summary.offices.length})
                  </p>
                  <ul className="space-y-1 text-xs text-text-secondary list-disc pl-4">
                    {summary.offices.map((office) => (
                      <li key={office}>{office}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tickable Huduma Bag Checklist */}
              <div className="rounded-2xl border border-border bg-bg-card p-5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-sm font-bold text-text-primary flex items-center gap-2 min-w-0">
                    <Briefcase className="w-4 h-4 text-gold shrink-0" />
                    Huduma Bag Checklist (Saved Offline)
                  </h3>
                  <button
                    type="button"
                    onClick={resetChecklist}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-border bg-bg-elevated text-[0.7rem] font-semibold text-text-secondary hover:border-gold hover:text-gold transition-colors cursor-pointer shrink-0"
                  >
                    <RotateCcw className="w-3 h-3 shrink-0" />
                    Reset
                  </button>
                </div>

                <div className="space-y-2">
                  {summary.bagChecklist.map(({ item, neededFor }) => {
                    const checked = Boolean(checkedBagItems[item]);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleBagItem(item)}
                        aria-pressed={checked}
                        className={`w-full text-left rounded-xl border p-3 flex items-start gap-2.5 transition-colors cursor-pointer ${
                          checked
                            ? "border-emerald-500/40 bg-emerald-500/10"
                            : "border-border bg-bg-elevated/40 hover:border-gold/40"
                        }`}
                      >
                        {checked ? (
                          <CheckSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                        ) : (
                          <Square className="w-4 h-4 text-text-muted mt-0.5 shrink-0" />
                        )}
                        <div className="min-w-0 flex-1">
                          <p
                            className={`text-xs font-semibold ${
                              checked
                                ? "line-through text-text-muted"
                                : "text-text-primary"
                            }`}
                          >
                            {item}
                          </p>
                          <p className="text-[0.68rem] text-text-muted mt-0.5">
                            For: {neededFor.join(", ")}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ToolShell>
  );
}
