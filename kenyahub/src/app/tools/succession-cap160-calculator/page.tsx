"use client";

import { useState, useMemo } from "react";
import { Scale, Users, Plus, Trash2, FileCheck2, Info } from "lucide-react";
import CustomSelect from "@/components/ui/CustomSelect";
import { getToolBySlug } from "@/lib/tools-registry";
import everydayData from "@/data/kenya-everyday-tools-2026.json";

const tool = getToolBySlug("succession-cap160-calculator")!;
const cap160 = everydayData.successionCap160;

type FamilyStructure =
  | "monogamous"
  | "children-only"
  | "no-spouse-no-kids"
  | "polygamous";

type KinPriority =
  | "father"
  | "mother"
  | "full-siblings"
  | "half-siblings"
  | "sixth-degree"
  | "state";

interface HouseEntry {
  id: number;
  name: string;
  survivingWife: boolean;
  children: number;
}

interface ShareRow {
  label: string;
  sublabel: string;
  pct: number;
  amountKes: number;
  colorClass: string;
}

function formatKes(value: number): string {
  return `KES ${Math.round(value).toLocaleString("en-KE")}`;
}

function computeAroProbateFee(estateKes: number): {
  baseFee: number;
  vat: number;
  total: number;
} {
  if (estateKes <= 0) return { baseFee: 0, vat: 0, total: 0 };
  let prevCap = 0;
  let base = 0;
  for (const band of cap160.aroProbateFeeBands) {
    const cap = band.upToKes === null ? Infinity : band.upToKes;
    const slice = Math.max(0, Math.min(estateKes, cap) - prevCap);
    base += slice * band.rate;
    if (band.upToKes !== null) prevCap = band.upToKes;
  }
  const minFloor = cap160.aroProbateFeeBands[0]?.minFeeKes ?? 30000;
  const baseFee = Math.max(minFloor, Math.round(base));
  const vat = Math.round(baseFee * cap160.vatRate);
  return { baseFee, vat, total: baseFee + vat };
}

const BAR_COLORS = [
  "bg-gold",
  "bg-emerald-500",
  "bg-sky-500",
  "bg-violet-500",
  "bg-amber-500",
  "bg-rose-500",
];

export default function SuccessionCap160CalculatorPage() {
  const [structure, setStructure] = useState<FamilyStructure>("monogamous");
  const [netEstateStr, setNetEstateStr] = useState<string>("6000000");
  const [childCount, setChildCount] = useState<number>(3);
  const [kinPriority, setKinPriority] = useState<KinPriority>("father");
  const [kinCount, setKinCount] = useState<number>(2);
  const [houses, setHouses] = useState<HouseEntry[]>([
    { id: 1, name: "1st House", survivingWife: true, children: 3 },
    { id: 2, name: "2nd House", survivingWife: true, children: 2 },
  ]);
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({});

  const activeSection = useMemo(() => {
    const idx =
      structure === "monogamous"
        ? 0
        : structure === "children-only"
        ? 1
        : structure === "no-spouse-no-kids"
        ? 2
        : 3;
    return cap160.sections[idx];
  }, [structure]);

  const calc = useMemo(() => {
    const estate = Math.max(0, Number(netEstateStr.replace(/,/g, "")) || 0);
    const aro = computeAroProbateFee(estate);
    const rows: ShareRow[] = [];
    let summaryNote = "";

    if (structure === "monogamous") {
      const n = Math.max(1, childCount);
      const eachChildPct = 100 / n;
      const eachChildKes = estate / n;
      summaryNote =
        "Under Section 35, the surviving spouse holds a life interest over 100% of the net residue (plus personal & household effects absolutely). Upon death or remarriage of a widow, the residue devolves equally to all surviving children.";
      rows.push({
        label: "Surviving Spouse (Life Interest)",
        sublabel: "Absolute right to personal/household effects + income/use of whole residue",
        pct: 100,
        amountKes: estate,
        colorClass: "bg-gold",
      });
      for (let i = 1; i <= n; i++) {
        rows.push({
          label: `Child ${i} (Equal Remainder Share)`,
          sublabel: `Vesting equally (1/${n}) upon termination of life interest`,
          pct: eachChildPct,
          amountKes: eachChildKes,
          colorClass: BAR_COLORS[i % BAR_COLORS.length],
        });
      }
    } else if (structure === "children-only") {
      const n = Math.max(1, childCount);
      const pct = 100 / n;
      const each = estate / n;
      summaryNote =
        "Under Section 38, where there is no surviving spouse, the net intestate estate is divided equally among all surviving children (sons and daughters equally, regardless of marital status).";
      for (let i = 1; i <= n; i++) {
        rows.push({
          label: `Surviving Child ${i}`,
          sublabel: `Equal statutory share (1/${n})`,
          pct,
          amountKes: each,
          colorClass: BAR_COLORS[(i - 1) % BAR_COLORS.length],
        });
      }
    } else if (structure === "no-spouse-no-kids") {
      summaryNote =
        "Under Section 39, the estate devolves in strict order of priority — higher-ranking kin exclude all lower-ranking relatives.";
      if (kinPriority === "father") {
        rows.push({
          label: "Surviving Father (Priority 1)",
          sublabel: "Takes 100% of net intestate estate under s.39(1)(a)",
          pct: 100,
          amountKes: estate,
          colorClass: "bg-gold",
        });
      } else if (kinPriority === "mother") {
        rows.push({
          label: "Surviving Mother (Priority 2)",
          sublabel: "Takes 100% where father is deceased under s.39(1)(b)",
          pct: 100,
          amountKes: estate,
          colorClass: "bg-emerald-500",
        });
      } else if (kinPriority === "full-siblings" || kinPriority === "half-siblings") {
        const n = Math.max(1, kinCount);
        const pct = 100 / n;
        const each = estate / n;
        const labelBase =
          kinPriority === "full-siblings" ? "Full Sibling" : "Half-Sibling";
        for (let i = 1; i <= n; i++) {
          rows.push({
            label: `${labelBase} ${i}`,
            sublabel: `Equal share (1/${n}) under s.39(1)(${kinPriority === "full-siblings" ? "c" : "d"})`,
            pct,
            amountKes: each,
            colorClass: BAR_COLORS[(i - 1) % BAR_COLORS.length],
          });
        }
      } else if (kinPriority === "sixth-degree") {
        const n = Math.max(1, kinCount);
        const pct = 100 / n;
        const each = estate / n;
        for (let i = 1; i <= n; i++) {
          rows.push({
            label: `Nearest Relative ${i} (Up to 6th Degree)`,
            sublabel: "Equal shares among nearest degree of consanguinity under s.39(1)(e)",
            pct,
            amountKes: each,
            colorClass: BAR_COLORS[(i - 1) % BAR_COLORS.length],
          });
        }
      } else {
        rows.push({
          label: "Consolidated Fund (Bona Vacantia)",
          sublabel: "Devolves to the State under s.39(2) where no statutory kin survive",
          pct: 100,
          amountKes: estate,
          colorClass: "bg-amber-500",
        });
      }
    } else {
      // Polygamous Section 40
      const totalUnits = houses.reduce(
        (acc, h) => acc + Math.max(0, h.children) + (h.survivingWife ? 1 : 0),
        0
      );
      summaryNote =
        "Under Section 40, the net estate is divided among the houses strictly according to the number of units in each house (children + surviving wife counted as 1 additional unit).";
      houses.forEach((h, idx) => {
        const units = Math.max(0, h.children) + (h.survivingWife ? 1 : 0);
        const pct = totalUnits > 0 ? (units / totalUnits) * 100 : 0;
        const houseAmount = totalUnits > 0 ? (estate * units) / totalUnits : 0;
        const perUnitKes = units > 0 ? houseAmount / units : 0;
        rows.push({
          label: `${h.name} (${units} ${units === 1 ? "unit" : "units"})`,
          sublabel: `${h.children} ${h.children === 1 ? "child" : "children"}${
            h.survivingWife ? " + 1 surviving wife" : " (no surviving wife)"
          } • ${formatKes(perUnitKes)} / unit`,
          pct,
          amountKes: houseAmount,
          colorClass: BAR_COLORS[idx % BAR_COLORS.length],
        });
      });
    }

    const completedChecklist = cap160.paChecklist.filter((_, i) => checkedSteps[i]).length;

    return { estate, aro, rows, summaryNote, completedChecklist };
  }, [structure, netEstateStr, childCount, kinPriority, kinCount, houses, checkedSteps]);

  const addHouse = () => {
    setHouses((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: `${prev.length + 1}${prev.length === 2 ? "rd" : "th"} House`,
        survivingWife: true,
        children: 2,
      },
    ]);
  };

  const removeHouse = (id: number) => {
    setHouses((prev) => (prev.length > 2 ? prev.filter((h) => h.id !== id) : prev));
  };

  const updateHouse = (id: number, patch: Partial<HouseEntry>) => {
    setHouses((prev) => prev.map((h) => (h.id === id ? { ...h, ...patch } : h)));
  };

  const toggleStep = (idx: number) => {
    setCheckedSteps((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5">
              <Scale className="w-4 h-4 shrink-0" />
              {cap160.statute}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[0.68rem] font-bold bg-gold/15 text-gold border border-gold/30">
              {activeSection.section}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="min-w-0">
              <label
                htmlFor="cap160-structure-select"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Intestate Family Structure
              </label>
              <CustomSelect
                id="cap160-structure-select"
                value={structure}
                onChange={(e) => setStructure(e.target.value as FamilyStructure)}
                className="input-field w-full text-xs"
              >
                <option value="monogamous">Section 35 — Monogamous (Spouse + Children)</option>
                <option value="children-only">Section 38 — Surviving Children Only (No Spouse)</option>
                <option value="no-spouse-no-kids">Section 39 — No Spouse or Children (Kin Priority)</option>
                <option value="polygamous">Section 40 — Polygamous Multi-House Estate</option>
              </CustomSelect>
            </div>

            <div className="min-w-0">
              <label
                htmlFor="cap160-estate-val"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Net Intestate Estate Value (KES)
              </label>
              <input
                id="cap160-estate-val"
                type="text"
                inputMode="numeric"
                value={netEstateStr ? Number(netEstateStr).toLocaleString("en-KE") : ""}
                onChange={(e) => setNetEstateStr(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>
          </div>

          {/* Dynamic Family Inputs */}
          {(structure === "monogamous" || structure === "children-only") && (
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4 flex flex-wrap items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-bold text-text-primary">Number of Surviving Children</p>
                <p className="text-[0.68rem] text-text-muted">
                  Includes all sons and daughters equally (marital status does not reduce entitlement).
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setChildCount((c) => Math.max(1, c - 1))}
                  className="w-8 h-8 rounded-lg border border-border bg-bg-card font-bold text-text-primary hover:border-gold cursor-pointer"
                >
                  −
                </button>
                <span className="w-8 text-center text-sm font-black text-text-primary tabular-nums">
                  {childCount}
                </span>
                <button
                  type="button"
                  onClick={() => setChildCount((c) => Math.min(20, c + 1))}
                  className="w-8 h-8 rounded-lg border border-border bg-bg-card font-bold text-text-primary hover:border-gold cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          )}

          {structure === "no-spouse-no-kids" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-xl border border-border bg-bg-elevated/40 p-4">
              <div className="min-w-0">
                <label
                  htmlFor="cap160-kin-select"
                  className="block text-xs font-semibold text-text-muted uppercase mb-1"
                >
                  Highest Surviving Statutory Kin (s.39)
                </label>
                <CustomSelect
                  id="cap160-kin-select"
                  value={kinPriority}
                  onChange={(e) => setKinPriority(e.target.value as KinPriority)}
                  className="input-field w-full text-xs"
                >
                  <option value="father">1. Father (takes 100%)</option>
                  <option value="mother">2. Mother (if father deceased)</option>
                  <option value="full-siblings">3. Full Brothers &amp; Sisters</option>
                  <option value="half-siblings">4. Half-Brothers &amp; Half-Sisters</option>
                  <option value="sixth-degree">5. Relatives up to 6th Degree</option>
                  <option value="state">6. No Surviving Kin (Consolidated Fund)</option>
                </CustomSelect>
              </div>
              {(kinPriority === "full-siblings" ||
                kinPriority === "half-siblings" ||
                kinPriority === "sixth-degree") && (
                <div className="min-w-0">
                  <label
                    htmlFor="cap160-kin-count"
                    className="block text-xs font-semibold text-text-muted uppercase mb-1"
                  >
                    Number of Eligible Relatives
                  </label>
                  <input
                    id="cap160-kin-count"
                    type="number"
                    min={1}
                    max={20}
                    value={kinCount}
                    onChange={(e) => setKinCount(Math.max(1, Number(e.target.value) || 1))}
                    className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-card text-sm font-bold text-text-primary tabular-nums"
                  />
                </div>
              )}
            </div>
          )}

          {structure === "polygamous" && (
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-xs font-bold text-text-primary uppercase flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-gold shrink-0" />
                  Polygamous Houses (Section 40 Unit Method)
                </h2>
                <button
                  type="button"
                  onClick={addHouse}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-gold text-kenya-black cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Add House
                </button>
              </div>

              <div className="space-y-2">
                {houses.map((h) => (
                  <div
                    key={h.id}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border bg-bg-card p-3"
                  >
                    <div className="flex flex-wrap items-center gap-3 min-w-0">
                      <span className="text-xs font-bold text-text-primary">{h.name}</span>
                      <label className="inline-flex items-center gap-1.5 text-xs text-text-secondary cursor-pointer">
                        <input
                          type="checkbox"
                          checked={h.survivingWife}
                          onChange={(e) =>
                            updateHouse(h.id, { survivingWife: e.target.checked })
                          }
                          className="accent-amber-500"
                        />
                        Surviving Wife (+1 unit)
                      </label>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      <span className="text-[0.68rem] text-text-muted uppercase">Children:</span>
                      <button
                        type="button"
                        onClick={() =>
                          updateHouse(h.id, { children: Math.max(0, h.children - 1) })
                        }
                        className="w-7 h-7 rounded-lg border border-border bg-bg-elevated font-bold text-text-primary cursor-pointer"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-xs font-black text-text-primary tabular-nums">
                        {h.children}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateHouse(h.id, { children: Math.min(20, h.children + 1) })
                        }
                        className="w-7 h-7 rounded-lg border border-border bg-bg-elevated font-bold text-text-primary cursor-pointer"
                      >
                        +
                      </button>
                      {houses.length > 2 && (
                        <button
                          type="button"
                          onClick={() => removeHouse(h.id)}
                          aria-label={`Remove ${h.name}`}
                          className="p-1.5 rounded-lg text-red-500 hover:bg-red-500/10 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          <div role="status" aria-live="polite" aria-atomic="true" className="space-y-5">
            <div className="rounded-xl border border-amber-500/35 bg-amber-500/[0.06] p-3.5 text-xs text-amber-950 dark:text-amber-200 flex items-start gap-2">
              <Info className="w-4 h-4 shrink-0 mt-0.5" />
              <p className="leading-relaxed min-w-0">
                <strong>{activeSection.section}:</strong> {calc.summaryNote}
              </p>
            </div>

            {/* Visual Share Bars */}
            <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-sm font-bold text-text-primary">
                  Statutory Beneficiary / House Distribution
                </h2>
                <span className="text-xs font-bold text-gold tabular-nums">
                  Net Estate: {formatKes(calc.estate)}
                </span>
              </div>

              <div className="space-y-3">
                {calc.rows.map((row) => (
                  <div key={row.label} className="space-y-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 text-xs">
                      <div className="min-w-0">
                        <span className="font-bold text-text-primary">{row.label}</span>
                        <span className="text-text-muted ml-2 text-[0.7rem]">{row.sublabel}</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 tabular-nums">
                        <span className="px-2 py-0.5 rounded-full bg-bg-card border border-border text-[0.68rem] font-bold text-text-primary">
                          {row.pct.toFixed(1)}%
                        </span>
                        <span className="font-black text-text-primary whitespace-nowrap">
                          {formatKes(row.amountKes)}
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-bg-card border border-border/60 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${row.colorClass} transition-all duration-300`}
                        style={{ width: `${Math.max(3, Math.min(100, row.pct))}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ARO Probate Fee & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-border bg-bg-elevated/40 p-4 min-w-0">
                <span className="text-[0.68rem] font-bold text-text-muted uppercase">
                  ARO Base Legal Fee
                </span>
                <p className="text-2xl font-black text-text-primary mt-1 tabular-nums whitespace-nowrap">
                  {formatKes(calc.aro.baseFee)}
                </p>
                <p className="text-[0.68rem] text-text-muted mt-1">
                  Advocates Remuneration Order scale (min KES 30,000)
                </p>
              </div>
              <div className="rounded-xl border border-gold/45 bg-gold/[0.06] p-4 min-w-0">
                <span className="text-[0.68rem] font-bold text-gold uppercase">
                  Est. Probate Legal Total (incl. 16% VAT)
                </span>
                <p className="text-2xl font-black text-gold mt-1 tabular-nums whitespace-nowrap">
                  {formatKes(calc.aro.total)}
                </p>
                <p className="text-[0.68rem] text-text-secondary mt-1 tabular-nums">
                  Includes {formatKes(calc.aro.vat)} VAT (excludes court &amp; Gazette fees)
                </p>
              </div>
              <div className="rounded-xl border border-border bg-bg-elevated/40 p-4 min-w-0">
                <span className="text-[0.68rem] font-bold text-text-muted uppercase">
                  Statutory Waiting Windows
                </span>
                <p className="text-2xl font-black text-text-primary mt-1 tabular-nums whitespace-nowrap">
                  {cap160.gazetteObjectionDays}d / {cap160.confirmationWaitMonths}mo
                </p>
                <p className="text-[0.68rem] text-text-muted mt-1">
                  30-day Gazette objection + 6 months to Confirmation of Grant
                </p>
              </div>
            </div>
          </div>

          {/* P&A Filing Checklist */}
          <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-sm font-bold text-text-primary flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4 text-gold shrink-0" />
                Kenya High Court / Magistrate P&amp;A Filing Checklist
              </h2>
              <span className="text-xs font-bold text-gold">
                {calc.completedChecklist} / {cap160.paChecklist.length} ready
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {cap160.paChecklist.map((step, idx) => (
                <label
                  key={step}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg border border-border/60 bg-bg-card cursor-pointer text-xs text-text-primary"
                >
                  <input
                    type="checkbox"
                    checked={Boolean(checkedSteps[idx])}
                    onChange={() => toggleStep(idx)}
                    className="mt-0.5 accent-amber-500 shrink-0"
                  />
                  <span className="min-w-0 leading-relaxed">{step}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
