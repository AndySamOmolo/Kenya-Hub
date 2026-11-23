"use client";

import { useState, useMemo } from "react";
import {
  Scale,
  Users,
  Plus,
  Trash2,
  Copy,
  Check,
  Printer,
  CheckSquare,
  Square,
  FileText,
} from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import CustomSelect from "@/components/ui/CustomSelect";
import { getToolBySlug } from "@/lib/tools-registry";
import everydayData from "@/data/kenya-everyday-tools-2026.json";

const tool = getToolBySlug("child-maintenance-calculator")!;

interface ExpenseRow {
  id: string;
  label: string;
  amount: string;
  frequency: "monthly" | "termly";
}

export default function ChildMaintenanceCalculatorPage() {
  const maintData = everydayData.childMaintenance;

  const [parentAIncome, setParentAIncome] = useState("120000");
  const [parentBIncome, setParentBIncome] = useState("80000");
  const [numChildren, setNumChildren] = useState("2");

  const [expenses, setExpenses] = useState<ExpenseRow[]>(() => [
    ...maintData.expenseCategories.map((cat) => ({
      id: cat.id,
      label: cat.label,
      amount: String(cat.defaultMonthlyKes),
      frequency: "monthly" as const,
    })),
    {
      id: "childcare",
      label: "Childcare / Househelp Share",
      amount: "6000",
      frequency: "monthly",
    },
  ]);

  const [checkedPra, setCheckedPra] = useState<Record<number, boolean>>({});
  const [copied, setCopied] = useState(false);

  const updateExpense = (
    id: string,
    field: keyof ExpenseRow,
    value: string
  ) => {
    setExpenses((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const addExpenseRow = () => {
    setExpenses((prev) => [
      ...prev,
      {
        id: `custom-${Date.now()}`,
        label: "Other Child Expense",
        amount: "2000",
        frequency: "monthly",
      },
    ]);
  };

  const removeExpenseRow = (id: string) => {
    setExpenses((prev) => prev.filter((row) => row.id !== id));
  };

  const togglePraItem = (idx: number) => {
    setCheckedPra((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const calc = useMemo(() => {
    const incA = Math.max(0, Number(parentAIncome.replace(/,/g, "")) || 0);
    const incB = Math.max(0, Number(parentBIncome.replace(/,/g, "")) || 0);
    const combinedIncome = incA + incB;
    const childrenCount = Math.max(1, Number(numChildren) || 1);

    const normalizedRows = expenses.map((row) => {
      const raw = Math.max(0, Number(row.amount.replace(/,/g, "")) || 0);
      // 3 Kenyan school terms per 12 months => 4 months per term
      const monthlyKes = row.frequency === "termly" ? Math.round(raw / 4) : raw;
      return { ...row, raw, monthlyKes };
    });

    const totalMonthlyNeed = normalizedRows.reduce(
      (sum, r) => sum + r.monthlyKes,
      0
    );
    const totalAnnualNeed = totalMonthlyNeed * 12;
    const perChildMonthly = Math.round(totalMonthlyNeed / childrenCount);

    const shareAPct = combinedIncome > 0 ? incA / combinedIncome : 0.5;
    const shareBPct = combinedIncome > 0 ? incB / combinedIncome : 0.5;

    const parentAMonthly = Math.round(totalMonthlyNeed * shareAPct);
    const parentBMonthly = totalMonthlyNeed - parentAMonthly;

    return {
      incA,
      incB,
      combinedIncome,
      childrenCount,
      normalizedRows,
      totalMonthlyNeed,
      totalAnnualNeed,
      perChildMonthly,
      shareAPct,
      shareBPct,
      parentAMonthly,
      parentBMonthly,
    };
  }, [parentAIncome, parentBIncome, numChildren, expenses]);

  const affidavitText = useMemo(() => {
    const lines = [
      "AFFIDAVIT OF MEANS — CHILD MAINTENANCE SCHEDULE",
      `Statutory Basis: ${maintData.statute} (s.110, s.114 & s.33)`,
      `Number of Children: ${calc.childrenCount}`,
      "",
      "1. PARENTAL NET MONTHLY INCOMES & PROPORTIONAL SHARE (s.114)",
      `- Parent A Net Monthly Income: KES ${calc.incA.toLocaleString("en-KE")} (${(calc.shareAPct * 100).toFixed(1)}%)`,
      `- Parent B Net Monthly Income: KES ${calc.incB.toLocaleString("en-KE")} (${(calc.shareBPct * 100).toFixed(1)}%)`,
      `- Combined Net Monthly Income: KES ${calc.combinedIncome.toLocaleString("en-KE")}`,
      "",
      "2. ITEMIZED MONTHLY CHILD EXPENSES",
      ...calc.normalizedRows.map(
        (r) =>
          `- ${r.label}: KES ${r.monthlyKes.toLocaleString("en-KE")}/mo${
            r.frequency === "termly"
              ? ` (from KES ${r.raw.toLocaleString("en-KE")}/term ÷ 4)`
              : ""
          }`
      ),
      "",
      "3. PROPORTIONAL MAINTENANCE SUMMARY",
      `- Total Monthly Child Need: KES ${calc.totalMonthlyNeed.toLocaleString("en-KE")} (KES ${calc.perChildMonthly.toLocaleString("en-KE")}/child)`,
      `- Parent A Proportional Contribution: KES ${calc.parentAMonthly.toLocaleString("en-KE")}/month`,
      `- Parent B Proportional Contribution: KES ${calc.parentBMonthly.toLocaleString("en-KE")}/month`,
      `- Annualized Total Maintenance: KES ${calc.totalAnnualNeed.toLocaleString("en-KE")}/year`,
    ];
    return lines.join("\n");
  }, [calc, maintData.statute]);

  const handleCopyAffidavit = async () => {
    try {
      await navigator.clipboard.writeText(affidavitText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard fallback ignored
    }
  };

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        {/* Parental Income Inputs */}
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs space-y-5">
          <div>
            <h2 className="text-base font-bold text-text-primary flex items-center gap-2">
              <Users className="w-4 h-4 text-gold shrink-0" />
              Parental Net Monthly Incomes
            </h2>
            <p className="text-xs text-text-muted mt-0.5">
              Under {maintData.statute} s.110 &amp; s.114, both parents share child maintenance proportionally to their means and earning capacity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label
                htmlFor="parent-a-income"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Parent A Net Income (KES/mo)
              </label>
              <input
                id="parent-a-income"
                type="text"
                inputMode="numeric"
                value={
                  parentAIncome
                    ? Number(parentAIncome).toLocaleString("en-KE")
                    : ""
                }
                onChange={(e) =>
                  setParentAIncome(e.target.value.replace(/[^0-9]/g, ""))
                }
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>

            <div>
              <label
                htmlFor="parent-b-income"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Parent B Net Income (KES/mo)
              </label>
              <input
                id="parent-b-income"
                type="text"
                inputMode="numeric"
                value={
                  parentBIncome
                    ? Number(parentBIncome).toLocaleString("en-KE")
                    : ""
                }
                onChange={(e) =>
                  setParentBIncome(e.target.value.replace(/[^0-9]/g, ""))
                }
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>

            <div>
              <label
                htmlFor="num-children"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Number of Children
              </label>
              <CustomSelect
                id="num-children"
                value={numChildren}
                onValueChange={setNumChildren}
                className="w-full"
              >
                <option value="1">1 Child</option>
                <option value="2">2 Children</option>
                <option value="3">3 Children</option>
                <option value="4">4 Children</option>
                <option value="5">5 Children</option>
                <option value="6">6 Children</option>
              </CustomSelect>
            </div>
          </div>
        </div>

        {/* Editable Expense Rows */}
        <div className="rounded-2xl border border-border bg-bg-card p-5 sm:p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-text-primary">
                Monthly &amp; Termly Child Expenses
              </h3>
              <p className="text-xs text-text-muted">
                Switch school fees or uniforms to Termly (divided by 4 months/term automatically).
              </p>
            </div>
            <button
              type="button"
              onClick={addExpenseRow}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gold/40 bg-gold/10 text-xs font-bold text-gold hover:bg-gold hover:text-kenya-black transition-colors cursor-pointer shrink-0"
            >
              <Plus className="w-3.5 h-3.5 shrink-0" /> Add Expense
            </button>
          </div>

          <div className="space-y-2.5">
            {expenses.map((row) => (
              <div
                key={row.id}
                className="rounded-xl border border-border bg-bg-elevated/40 p-3 grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-center"
              >
                <div className="sm:col-span-5 min-w-0">
                  <input
                    type="text"
                    aria-label="Expense category"
                    value={row.label}
                    onChange={(e) =>
                      updateExpense(row.id, "label", e.target.value)
                    }
                    className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-bg-card text-xs font-semibold text-text-primary"
                  />
                </div>
                <div className="sm:col-span-3 min-w-0">
                  <input
                    type="text"
                    inputMode="numeric"
                    aria-label={`${row.label} amount in KES`}
                    value={
                      row.amount ? Number(row.amount).toLocaleString("en-KE") : ""
                    }
                    onChange={(e) =>
                      updateExpense(
                        row.id,
                        "amount",
                        e.target.value.replace(/[^0-9]/g, "")
                      )
                    }
                    className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-bg-card text-xs font-bold text-text-primary tabular-nums"
                  />
                </div>
                <div className="sm:col-span-3 min-w-0">
                  <CustomSelect
                    value={row.frequency}
                    onValueChange={(v) => updateExpense(row.id, "frequency", v)}
                    className="text-xs w-full"
                  >
                    <option value="monthly">Per Month</option>
                    <option value="termly">Per Term (÷4)</option>
                  </CustomSelect>
                </div>
                <div className="sm:col-span-1 flex justify-end">
                  <button
                    type="button"
                    onClick={() => removeExpenseRow(row.id)}
                    aria-label={`Remove ${row.label}`}
                    className="p-1.5 rounded-lg border border-border bg-bg-card text-text-muted hover:text-red-500 hover:border-red-500/40 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proportional Split Results */}
        <div role="status" aria-live="polite" aria-atomic="true" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-xl border border-amber-500/45 bg-amber-500/[0.05] p-4">
              <span className="text-[0.68rem] font-bold text-gold uppercase flex items-center gap-1">
                <Scale className="w-3.5 h-3.5 shrink-0" /> Total Monthly Need
              </span>
              <p className="text-2xl font-black text-gold mt-1 tabular-nums whitespace-nowrap">
                KES {calc.totalMonthlyNeed.toLocaleString("en-KE")}
              </p>
              <p className="text-[0.68rem] text-text-secondary mt-1 tabular-nums">
                KES {calc.perChildMonthly.toLocaleString("en-KE")} / child • KES {calc.totalAnnualNeed.toLocaleString("en-KE")}/yr
              </p>
            </div>

            <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4">
              <span className="text-[0.68rem] font-bold text-emerald-700 dark:text-emerald-400 uppercase">
                Parent A Share ({(calc.shareAPct * 100).toFixed(1)}%)
              </span>
              <p className="text-2xl font-black text-emerald-700 dark:text-emerald-400 mt-1 tabular-nums whitespace-nowrap">
                KES {calc.parentAMonthly.toLocaleString("en-KE")}
              </p>
              <p className="text-[0.68rem] text-text-secondary mt-1">
                Monthly s.110 / s.114 proportional share
              </p>
            </div>

            <div className="rounded-xl border border-border bg-bg-card p-4">
              <span className="text-[0.68rem] font-bold text-text-muted uppercase">
                Parent B Share ({(calc.shareBPct * 100).toFixed(1)}%)
              </span>
              <p className="text-2xl font-black text-text-primary mt-1 tabular-nums whitespace-nowrap">
                KES {calc.parentBMonthly.toLocaleString("en-KE")}
              </p>
              <p className="text-[0.68rem] text-text-muted mt-1">
                Monthly s.110 / s.114 proportional share
              </p>
            </div>
          </div>

          {/* Affidavit of Means Summary & s.33 PRA Checklist */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-border bg-bg-card p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-text-primary flex items-center gap-2 min-w-0">
                  <FileText className="w-4 h-4 text-gold shrink-0" />
                  Affidavit of Means Summary
                </h3>
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyAffidavit}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-gold/40 bg-gold/10 text-xs font-bold text-gold hover:bg-gold hover:text-kenya-black transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 shrink-0" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 shrink-0" /> Copy
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-border bg-bg-elevated text-xs font-semibold text-text-secondary hover:border-gold hover:text-gold transition-colors cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5 shrink-0" /> Print
                  </button>
                </div>
              </div>

              <pre className="rounded-xl border border-border bg-bg-elevated/50 p-3.5 text-[0.7rem] text-text-secondary whitespace-pre-wrap break-words font-mono leading-relaxed overflow-x-auto">
                {affidavitText}
              </pre>
            </div>

            <div className="rounded-2xl border border-border bg-bg-card p-5 space-y-4">
              <div>
                <h3 className="text-sm font-bold text-text-primary">
                  Section 33 Parental Responsibility Agreement (PRA) Checklist
                </h3>
                <p className="text-xs text-text-muted mt-0.5">
                  Prepare these documents before mediation or filing in the Children&apos;s Court.
                </p>
              </div>

              <div className="space-y-2">
                {maintData.checklist.map((item, idx) => {
                  const checked = Boolean(checkedPra[idx]);
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => togglePraItem(idx)}
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
                      <span
                        className={`text-xs leading-relaxed ${
                          checked
                            ? "line-through text-text-muted"
                            : "text-text-primary font-medium"
                        }`}
                      >
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="rounded-xl border border-amber-500/35 bg-amber-500/[0.05] p-3.5 text-[0.72rem] text-text-secondary space-y-1">
                <p className="font-bold text-text-primary">Key Cap 141 Provisions</p>
                <p>• <strong>s.110:</strong> {maintData.sections.s110}</p>
                <p>• <strong>s.33:</strong> {maintData.sections.s33}</p>
                <p>
                  • <strong>Enforcement:</strong> Wilful default on court maintenance orders attracts contempt penalties up to{" "}
                  <strong>KES {maintData.contemptFineCeilingKes.toLocaleString("en-KE")}</strong> or attachment of earnings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
