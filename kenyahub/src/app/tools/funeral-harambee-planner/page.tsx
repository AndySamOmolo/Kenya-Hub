"use client";

import { useState, useMemo, useEffect } from "react";
import {
  AlertTriangle,
  Check,
  Copy,
  HeartHandshake,
  Plus,
  Trash2,
  CheckCircle2,
  ClipboardCheck,
} from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import CustomSelect from "@/components/ui/CustomSelect";
import { getToolBySlug } from "@/lib/tools-registry";
import everydayData from "@/data/kenya-everyday-tools-2026.json";

const tool = getToolBySlug("funeral-harambee-planner")!;
const funeralData = everydayData.funeralHarambee;
const STORAGE_KEY = "kenyahub_funeral_harambee_pledges_v1";

interface PledgeItem {
  id: string;
  name: string;
  amountKes: number;
  paid: boolean;
}

const DEFAULT_PLEDGES: PledgeItem[] = [
  { id: "p-1", name: "Immediate Family Pool", amountKes: 60000, paid: true },
  { id: "p-2", name: "Work Colleagues / Chama", amountKes: 35000, paid: true },
  { id: "p-3", name: "Extended Family & Friends", amountKes: 45000, paid: false },
];

function formatKes(value: number): string {
  return `KES ${Math.round(value).toLocaleString("en-KE")}`;
}

export default function FuneralHarambeePlannerPage() {
  const defaultTier = funeralData.costTiers[1]; // Standard Kenyan Funeral
  const [mortuaryTier, setMortuaryTier] = useState<"public" | "private">("public");
  const [deceasedType, setDeceasedType] = useState<"adult" | "child">("adult");
  const [morgueDays, setMorgueDays] = useState<number>(10);
  const [privateDailyRateStr, setPrivateDailyRateStr] = useState<string>("2500");
  const [includePostmortem, setIncludePostmortem] = useState<boolean>(false);

  const [costTierId, setCostTierId] = useState<string>(defaultTier.id);
  const [coffinStr, setCoffinStr] = useState<string>(String(defaultTier.coffinKes));
  const [hearseStr, setHearseStr] = useState<string>(String(defaultTier.hearseKes));
  const [tentsStr, setTentsStr] = useState<string>(String(defaultTier.tentsChairsKes));
  const [cateringStr, setCateringStr] = useState<string>(String(defaultTier.cateringKes));
  const [paStr, setPaStr] = useState<string>(String(defaultTier.paProgrammesFlowersKes));

  const [pledges, setPledges] = useState<PledgeItem[]>(DEFAULT_PLEDGES);
  const [hydrated, setHydrated] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>("");
  const [newAmountStr, setNewAmountStr] = useState<string>("");
  const [newPaid, setNewPaid] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({});

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setPledges(parsed);
        }
      }
    } catch {
      // Ignore storage errors
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(pledges));
    } catch {
      // Ignore storage errors
    }
  }, [pledges, hydrated]);

  const handleApplyCostTier = (nextId: string) => {
    setCostTierId(nextId);
    const tier = funeralData.costTiers.find((t) => t.id === nextId);
    if (!tier) return;
    setCoffinStr(String(tier.coffinKes));
    setHearseStr(String(tier.hearseKes));
    setTentsStr(String(tier.tentsChairsKes));
    setCateringStr(String(tier.cateringKes));
    setPaStr(String(tier.paProgrammesFlowersKes));
  };

  const calc = useMemo(() => {
    const days = Math.max(1, Math.min(90, morgueDays));
    const isAdult = deceasedType === "adult";
    const extraDays = Math.max(0, days - 10);

    let morgueBaseCost = 0;
    let penaltyCost = 0;

    if (mortuaryTier === "public") {
      if (days === 1) {
        morgueBaseCost = isAdult
          ? funeralData.morgueRates.transit0To24h.adultKes
          : funeralData.morgueRates.transit0To24h.childKes;
      } else {
        morgueBaseCost = isAdult
          ? funeralData.morgueRates.days1To10Flat.adultKes
          : funeralData.morgueRates.days1To10Flat.childKes;
        const dailyPenalty = isAdult
          ? funeralData.morgueRates.day11PlusPerDay.adultKes
          : funeralData.morgueRates.day11PlusPerDay.childKes;
        penaltyCost = extraDays * dailyPenalty;
      }
    } else {
      const privRate = Math.max(0, Number(privateDailyRateStr.replace(/,/g, "")) || 0);
      morgueBaseCost = Math.min(days, 10) * privRate;
      penaltyCost = extraDays * privRate;
    }

    const postmortemCost = includePostmortem
      ? funeralData.morgueRates.privatePostmortemKes
      : 0;
    const totalMorgueCost = morgueBaseCost + penaltyCost + postmortemCost;

    const coffin = Math.max(0, Number(coffinStr.replace(/,/g, "")) || 0);
    const hearse = Math.max(0, Number(hearseStr.replace(/,/g, "")) || 0);
    const tents = Math.max(0, Number(tentsStr.replace(/,/g, "")) || 0);
    const catering = Math.max(0, Number(cateringStr.replace(/,/g, "")) || 0);
    const pa = Math.max(0, Number(paStr.replace(/,/g, "")) || 0);

    const totalBudget = totalMorgueCost + coffin + hearse + tents + catering + pa;

    const cashCollected = pledges
      .filter((p) => p.paid)
      .reduce((sum, p) => sum + p.amountKes, 0);
    const pendingPledges = pledges
      .filter((p) => !p.paid)
      .reduce((sum, p) => sum + p.amountKes, 0);
    const totalPledged = cashCollected + pendingPledges;
    const cashShortfall = Math.max(0, totalBudget - cashCollected);
    const expectedRealized =
      cashCollected + pendingPledges * (funeralData.defaultPledgeRealizationPct / 100);
    const realisticShortfall = Math.max(0, totalBudget - expectedRealized);
    const fundedPct = totalBudget > 0 ? Math.min(100, (cashCollected / totalBudget) * 100) : 0;

    return {
      days,
      extraDays,
      morgueBaseCost,
      penaltyCost,
      postmortemCost,
      totalMorgueCost,
      coffin,
      hearse,
      tents,
      catering,
      pa,
      totalBudget,
      cashCollected,
      pendingPledges,
      totalPledged,
      cashShortfall,
      realisticShortfall,
      fundedPct,
    };
  }, [
    mortuaryTier,
    deceasedType,
    morgueDays,
    privateDailyRateStr,
    includePostmortem,
    coffinStr,
    hearseStr,
    tentsStr,
    cateringStr,
    paStr,
    pledges,
  ]);

  const handleAddPledge = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newName.trim();
    const amount = Math.max(0, Number(newAmountStr.replace(/,/g, "")) || 0);
    if (!trimmed || amount <= 0) return;
    setPledges((prev) => [
      ...prev,
      { id: `p-${Date.now()}`, name: trimmed, amountKes: amount, paid: newPaid },
    ]);
    setNewName("");
    setNewAmountStr("");
    setNewPaid(false);
  };

  const togglePledgePaid = (id: string) => {
    setPledges((prev) =>
      prev.map((p) => (p.id === id ? { ...p, paid: !p.paid } : p))
    );
  };

  const removePledge = (id: string) => {
    setPledges((prev) => prev.filter((p) => p.id !== id));
  };

  const whatsappSummary = useMemo(() => {
    const paidLines = pledges
      .filter((p) => p.paid)
      .map((p, i) => `${i + 1}. ${p.name} — ${formatKes(p.amountKes)} (Paid)`);
    const pendingLines = pledges
      .filter((p) => !p.paid)
      .map((p, i) => `${i + 1}. ${p.name} — ${formatKes(p.amountKes)} (Pledged)`);

    return `*FUNERAL COMMITTEE HARAMBEE UPDATE*
Total Budget: ${formatKes(calc.totalBudget)}
(Morgue ${calc.days}d: ${formatKes(calc.totalMorgueCost)} | Coffin: ${formatKes(
      calc.coffin
    )} | Hearse: ${formatKes(calc.hearse)} | Tents: ${formatKes(
      calc.tents
    )} | Catering: ${formatKes(calc.catering)} | PA/Misc: ${formatKes(calc.pa)})

Cash Collected: ${formatKes(calc.cashCollected)} (${calc.fundedPct.toFixed(0)}%)
Pending Pledges: ${formatKes(calc.pendingPledges)}
Remaining Cash Needed: ${formatKes(calc.cashShortfall)}

*Received Contributions:*
${paidLines.length ? paidLines.join("\n") : "None recorded yet"}

*Pending Pledges:*
${pendingLines.length ? pendingLines.join("\n") : "None"}

M-Pesa Paybill / Treasurer No.: [Insert Details]
Asante sana for standing with the family.`;
  }, [calc, pledges]);

  const handleCopyWhatsapp = async () => {
    try {
      await navigator.clipboard.writeText(whatsappSummary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard fallback
    }
  };

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="min-w-0">
              <span className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 shrink-0" />
                Funeral &amp; Harambee Committee Planner
              </span>
              <p className="text-[0.7rem] text-text-muted mt-0.5">{funeralData.benchmarkSource}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                aria-pressed={deceasedType === "adult"}
                onClick={() => setDeceasedType("adult")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold border cursor-pointer ${
                  deceasedType === "adult"
                    ? "bg-gold text-kenya-black border-gold"
                    : "bg-bg-elevated text-text-secondary border-border"
                }`}
              >
                Adult Tariff
              </button>
              <button
                type="button"
                aria-pressed={deceasedType === "child"}
                onClick={() => setDeceasedType("child")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold border cursor-pointer ${
                  deceasedType === "child"
                    ? "bg-gold text-kenya-black border-gold"
                    : "bg-bg-elevated text-text-secondary border-border"
                }`}
              >
                Child Tariff
              </button>
            </div>
          </div>

          {/* Mortuary Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="min-w-0">
              <label
                htmlFor="mortuary-tier-select"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Mortuary Tier
              </label>
              <CustomSelect
                id="mortuary-tier-select"
                value={mortuaryTier}
                onChange={(e) => setMortuaryTier(e.target.value as "public" | "private")}
                className="input-field w-full text-xs"
              >
                <option value="public">KU / KUTRRH Public Tariff (Flat Days 1–10)</option>
                <option value="private">Private Funeral Home (Custom Daily Rate)</option>
              </CustomSelect>
            </div>

            <div className="min-w-0">
              <label
                htmlFor="morgue-days-input"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Days in Mortuary ({calc.days} {calc.days === 1 ? "day" : "days"})
              </label>
              <input
                id="morgue-days-input"
                type="number"
                min={1}
                max={90}
                value={morgueDays}
                onChange={(e) => setMorgueDays(Math.max(1, Number(e.target.value) || 1))}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>

            {mortuaryTier === "private" ? (
              <div className="min-w-0">
                <label
                  htmlFor="private-morgue-rate"
                  className="block text-xs font-semibold text-text-muted uppercase mb-1"
                >
                  Private Daily Rate (KES/Day)
                </label>
                <input
                  id="private-morgue-rate"
                  type="text"
                  inputMode="numeric"
                  value={privateDailyRateStr ? Number(privateDailyRateStr).toLocaleString("en-KE") : ""}
                  onChange={(e) => setPrivateDailyRateStr(e.target.value.replace(/[^0-9]/g, ""))}
                  className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
                />
              </div>
            ) : (
              <div className="min-w-0">
                <label
                  htmlFor="funeral-tier-preset"
                  className="block text-xs font-semibold text-text-muted uppercase mb-1"
                >
                  Funeral Budget Preset
                </label>
                <CustomSelect
                  id="funeral-tier-preset"
                  value={costTierId}
                  onChange={(e) => handleApplyCostTier(e.target.value)}
                  className="input-field w-full text-xs"
                >
                  {funeralData.costTiers.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.label}
                    </option>
                  ))}
                </CustomSelect>
              </div>
            )}
          </div>

          {/* Day 1-10 Flat vs Day 11+ Penalty Highlight */}
          {mortuaryTier === "public" && (
            <div
              className={`rounded-xl border p-3.5 text-xs flex flex-wrap items-center justify-between gap-2 ${
                calc.extraDays > 0
                  ? "border-amber-500/45 bg-amber-500/10 text-amber-950 dark:text-amber-200"
                  : "border-emerald-500/35 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300"
              }`}
            >
              <div className="flex items-start gap-2 min-w-0">
                {calc.extraDays > 0 ? (
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                )}
                <span className="leading-relaxed">
                  {calc.extraDays > 0
                    ? `Day 11+ Penalty Active: Days 1–10 flat (${formatKes(
                        calc.morgueBaseCost
                      )}) + ${calc.extraDays} extra ${
                        calc.extraDays === 1 ? "day" : "days"
                      } @ ${formatKes(
                        deceasedType === "adult"
                          ? funeralData.morgueRates.day11PlusPerDay.adultKes
                          : funeralData.morgueRates.day11PlusPerDay.childKes
                      )}/day (+${formatKes(calc.penaltyCost)}).`
                    : `Within Flat Window: Days 1–10 flat package at ${formatKes(
                        calc.morgueBaseCost
                      )} (Day 11+ triggers KES ${
                        deceasedType === "adult" ? "1,000" : "700"
                      }/day extra charge).`}
                </span>
              </div>
              <label className="inline-flex items-center gap-1.5 font-semibold cursor-pointer shrink-0">
                <input
                  type="checkbox"
                  checked={includePostmortem}
                  onChange={(e) => setIncludePostmortem(e.target.checked)}
                  className="accent-amber-500"
                />
                Private Postmortem (+{formatKes(funeralData.morgueRates.privatePostmortemKes)})
              </label>
            </div>
          )}

          {/* Line-Item Budget Inputs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <div>
              <label htmlFor="budget-coffin" className="block text-[0.68rem] font-semibold text-text-muted uppercase mb-1">
                Coffin / Casket (KES)
              </label>
              <input
                id="budget-coffin"
                type="text"
                inputMode="numeric"
                value={coffinStr ? Number(coffinStr).toLocaleString("en-KE") : ""}
                onChange={(e) => setCoffinStr(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-2.5 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary tabular-nums"
              />
            </div>
            <div>
              <label htmlFor="budget-hearse" className="block text-[0.68rem] font-semibold text-text-muted uppercase mb-1">
                Hearse &amp; Transport
              </label>
              <input
                id="budget-hearse"
                type="text"
                inputMode="numeric"
                value={hearseStr ? Number(hearseStr).toLocaleString("en-KE") : ""}
                onChange={(e) => setHearseStr(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-2.5 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary tabular-nums"
              />
            </div>
            <div>
              <label htmlFor="budget-tents" className="block text-[0.68rem] font-semibold text-text-muted uppercase mb-1">
                Tents &amp; Chairs
              </label>
              <input
                id="budget-tents"
                type="text"
                inputMode="numeric"
                value={tentsStr ? Number(tentsStr).toLocaleString("en-KE") : ""}
                onChange={(e) => setTentsStr(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-2.5 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary tabular-nums"
              />
            </div>
            <div>
              <label htmlFor="budget-catering" className="block text-[0.68rem] font-semibold text-text-muted uppercase mb-1">
                Catering &amp; Food
              </label>
              <input
                id="budget-catering"
                type="text"
                inputMode="numeric"
                value={cateringStr ? Number(cateringStr).toLocaleString("en-KE") : ""}
                onChange={(e) => setCateringStr(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-2.5 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary tabular-nums"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="budget-pa" className="block text-[0.68rem] font-semibold text-text-muted uppercase mb-1">
                PA, Programmes &amp; Flowers
              </label>
              <input
                id="budget-pa"
                type="text"
                inputMode="numeric"
                value={paStr ? Number(paStr).toLocaleString("en-KE") : ""}
                onChange={(e) => setPaStr(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-2.5 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-xs font-bold text-text-primary tabular-nums"
              />
            </div>
          </div>

          {/* KPI Summary */}
          <div role="status" aria-live="polite" aria-atomic="true" className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-border bg-bg-elevated/40 p-4 min-w-0">
                <span className="text-[0.68rem] font-bold text-text-muted uppercase">
                  Total Funeral Budget
                </span>
                <p className="text-2xl font-black text-text-primary mt-1 tabular-nums whitespace-nowrap">
                  {formatKes(calc.totalBudget)}
                </p>
                <p className="text-[0.68rem] text-text-muted mt-1 tabular-nums">
                  Includes {formatKes(calc.totalMorgueCost)} mortuary ({calc.days}d)
                </p>
              </div>

              <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 min-w-0">
                <span className="text-[0.68rem] font-bold text-emerald-700 dark:text-emerald-400 uppercase">
                  Cash Collected (Paid)
                </span>
                <p className="text-2xl font-black text-emerald-700 dark:text-emerald-400 mt-1 tabular-nums whitespace-nowrap">
                  {formatKes(calc.cashCollected)}
                </p>
                <p className="text-[0.68rem] text-text-secondary mt-1 tabular-nums">
                  {calc.fundedPct.toFixed(0)}% funded • Pending pledges: {formatKes(calc.pendingPledges)}
                </p>
              </div>

              <div
                className={`rounded-xl border p-4 min-w-0 ${
                  calc.cashShortfall > 0
                    ? "border-amber-500/45 bg-amber-500/[0.08]"
                    : "border-emerald-500/45 bg-emerald-500/10"
                }`}
              >
                <span className="text-[0.68rem] font-bold text-gold uppercase">
                  Remaining Cash Shortfall
                </span>
                <p className="text-2xl font-black text-gold mt-1 tabular-nums whitespace-nowrap">
                  {formatKes(calc.cashShortfall)}
                </p>
                <p className="text-[0.68rem] text-text-secondary mt-1 tabular-nums">
                  At {funeralData.defaultPledgeRealizationPct}% pledge realization: {formatKes(calc.realisticShortfall)} gap
                </p>
              </div>
            </div>

            {/* Funding Progress Bar */}
            <div className="space-y-1">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-semibold text-text-secondary">Harambee Cash Collection Progress</span>
                <span className="font-bold text-text-primary tabular-nums">{calc.fundedPct.toFixed(1)}%</span>
              </div>
              <div className="w-full h-3 rounded-full bg-bg-elevated border border-border overflow-hidden">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                  style={{ width: `${calc.fundedPct}%` }}
                />
              </div>
            </div>
          </div>

          {/* Interactive Pledge Tracker (localStorage) */}
          <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-sm font-bold text-text-primary">
                Harambee Pledge Tracker (Saved Locally on Device)
              </h2>
              <button
                type="button"
                onClick={handleCopyWhatsapp}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-gold text-kenya-black hover:opacity-90 transition-opacity cursor-pointer shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied WhatsApp Update" : "Copy WhatsApp Summary"}
              </button>
            </div>

            <form onSubmit={handleAddPledge} className="grid grid-cols-1 sm:grid-cols-12 gap-2">
              <input
                type="text"
                placeholder="Contributor / Group Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="sm:col-span-5 px-3 py-2 rounded-lg border border-border bg-bg-card text-xs text-text-primary placeholder:text-text-muted"
              />
              <input
                type="text"
                inputMode="numeric"
                placeholder="Amount (KES)"
                value={newAmountStr ? Number(newAmountStr).toLocaleString("en-KE") : ""}
                onChange={(e) => setNewAmountStr(e.target.value.replace(/[^0-9]/g, ""))}
                className="sm:col-span-3 px-3 py-2 rounded-lg border border-border bg-bg-card text-xs font-bold text-text-primary tabular-nums placeholder:text-text-muted"
              />
              <label className="sm:col-span-2 flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg border border-border bg-bg-card text-xs text-text-primary cursor-pointer">
                <input
                  type="checkbox"
                  checked={newPaid}
                  onChange={(e) => setNewPaid(e.target.checked)}
                  className="accent-emerald-500"
                />
                Paid
              </label>
              <button
                type="submit"
                className="sm:col-span-2 inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> Add
              </button>
            </form>

            <div className="space-y-1.5">
              {pledges.length === 0 ? (
                <p className="text-xs text-text-muted py-2">No pledges added yet.</p>
              ) : (
                pledges.map((p) => (
                  <div
                    key={p.id}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border/70 bg-bg-card px-3 py-2 text-xs"
                  >
                    <div className="flex flex-wrap items-center gap-2 min-w-0">
                      <span className="font-bold text-text-primary">{p.name}</span>
                      <span className="font-black text-text-primary tabular-nums whitespace-nowrap">
                        {formatKes(p.amountKes)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => togglePledgePaid(p.id)}
                        className={`px-2.5 py-1 rounded-full text-[0.68rem] font-bold cursor-pointer ${
                          p.paid
                            ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30"
                            : "bg-amber-500/15 text-amber-950 dark:text-amber-200 border border-amber-500/30"
                        }`}
                      >
                        {p.paid ? "Paid ✓" : "Mark Paid"}
                      </button>
                      <button
                        type="button"
                        onClick={() => removePledge(p.id)}
                        aria-label={`Remove ${p.name}`}
                        className="p-1 rounded-lg text-red-500 hover:bg-red-500/10 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Burial Clearance Checklist */}
          <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 space-y-2.5">
            <h2 className="text-sm font-bold text-text-primary flex items-center gap-1.5">
              <ClipboardCheck className="w-4 h-4 text-gold shrink-0" />
              Mandatory Burial &amp; Body Release Checklist
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {funeralData.burialChecklist.map((doc, idx) => (
                <label
                  key={doc}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg border border-border/60 bg-bg-card cursor-pointer text-xs text-text-primary"
                >
                  <input
                    type="checkbox"
                    checked={Boolean(checkedDocs[idx])}
                    onChange={() =>
                      setCheckedDocs((prev) => ({ ...prev, [idx]: !prev[idx] }))
                    }
                    className="mt-0.5 accent-amber-500 shrink-0"
                  />
                  <span className="min-w-0 leading-relaxed">{doc}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
