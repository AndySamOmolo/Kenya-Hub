"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import budgetData from "@/data/county-budgets.json";

const tool = TOOLS.find((t) => t.slug === "county-budget-tracker")!;
type SortKey = "county" | "allocation" | "ownSourceRevenue" | "expenditure" | "absorptionRate";

const faq = [
  { question: "Where do county governments get their money?", answer: "County governments receive money from two main sources: (1) Equitable share from the national government (the majority), allocated based on population, poverty index, and other factors, and (2) Own-source revenue generated locally through rates, fees, permits, and charges." },
  { question: "What is budget absorption rate?", answer: "Budget absorption rate is the percentage of total revenue that a county actually spends. A high absorption rate (85%+) means the county is effectively utilizing its funds. Low absorption often indicates capacity challenges or procurement delays." },
  { question: "Who oversees county spending?", answer: "The Controller of Budget (cob.go.ke) monitors county budget implementation and publishes quarterly and annual reports. County assemblies also play an oversight role through their budget committees." },
  { question: "Which county has the highest budget?", answer: "Nairobi County consistently has the highest budget due to its large population and significant own-source revenue from commercial activities, rates, and parking fees." },
  { question: "What is own-source revenue?", answer: "Own-source revenue is money that a county generates locally — not from the national government. It includes county rates, market fees, parking charges, business permits, and other local levies. Counties with more commerce generate more own-source revenue." },
];

export default function CountyBudgetTrackerPage() {
  const [sortKey, setSortKey] = useState<SortKey>("allocation");
  const [sortAsc, setSortAsc] = useState(false);
  const [search, setSearch] = useState("");

  const sorted = useMemo(() => {
    let items = [...budgetData.budgets];
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter((b) => b.county.toLowerCase().includes(q));
    }
    items.sort((a, b) => {
      const va = a[sortKey], vb = b[sortKey];
      if (typeof va === "string" && typeof vb === "string") return sortAsc ? va.localeCompare(vb) : vb.localeCompare(va);
      return sortAsc ? (va as number) - (vb as number) : (vb as number) - (va as number);
    });
    return items;
  }, [sortKey, sortAsc, search]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(false); }
  };

  const fmt = (n: number) => `${n.toLocaleString("en-KE")}`;
  const totals = useMemo(() => {
    const t = budgetData.budgets.reduce((acc, b) => ({ allocation: acc.allocation + b.allocation, own: acc.own + b.ownSourceRevenue, expenditure: acc.expenditure + b.expenditure }), { allocation: 0, own: 0, expenditure: 0 });
    return { ...t, total: t.allocation + t.own, absorptionRate: Math.round((t.expenditure / (t.allocation + t.own)) * 1000) / 10 };
  }, []);

  const SortIcon = ({ k }: { k: SortKey }) => sortKey === k ? <span className="ml-1 text-gold">{sortAsc ? "↑" : "↓"}</span> : null;

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Summary cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-[0.65rem] text-text-muted mb-1">Total Allocation</p>
            <p className="text-lg font-bold text-text-primary font-[family-name:var(--font-outfit)]">KES {fmt(totals.allocation)}M</p>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-[0.65rem] text-text-muted mb-1">Own-Source Revenue</p>
            <p className="text-lg font-bold text-gold font-[family-name:var(--font-outfit)]">KES {fmt(totals.own)}M</p>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-[0.65rem] text-text-muted mb-1">Total Expenditure</p>
            <p className="text-lg font-bold text-kenya-red-light font-[family-name:var(--font-outfit)]">KES {fmt(totals.expenditure)}M</p>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-[0.65rem] text-text-muted mb-1">Avg Absorption</p>
            <p className="text-lg font-bold text-kenya-green-light font-[family-name:var(--font-outfit)]">{totals.absorptionRate}%</p>
          </div>
        </div>

        {/* Search */}
        <div className="bg-bg-card border border-border rounded-xl p-4">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search county..." className="input-field text-sm" id="budget-search" />
        </div>

        {/* Table */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden overflow-x-auto">
          <table className="data-table text-xs">
            <thead>
              <tr>
                <th className="cursor-pointer hover:text-gold" onClick={() => toggleSort("county")}>County<SortIcon k="county" /></th>
                <th className="text-right cursor-pointer hover:text-gold" onClick={() => toggleSort("allocation")}>Allocation (M)<SortIcon k="allocation" /></th>
                <th className="text-right cursor-pointer hover:text-gold" onClick={() => toggleSort("ownSourceRevenue")}>Own Revenue (M)<SortIcon k="ownSourceRevenue" /></th>
                <th className="text-right cursor-pointer hover:text-gold" onClick={() => toggleSort("expenditure")}>Expenditure (M)<SortIcon k="expenditure" /></th>
                <th className="text-right cursor-pointer hover:text-gold" onClick={() => toggleSort("absorptionRate")}>Absorption<SortIcon k="absorptionRate" /></th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((b) => (
                <tr key={b.code}>
                  <td className="font-medium text-text-primary whitespace-nowrap">{b.county}</td>
                  <td className="text-right text-text-secondary">{fmt(b.allocation)}</td>
                  <td className="text-right text-gold">{fmt(b.ownSourceRevenue)}</td>
                  <td className="text-right text-text-secondary">{fmt(b.expenditure)}</td>
                  <td className="text-right">
                    <span className={`font-semibold ${b.absorptionRate >= 85 ? "text-kenya-green-light" : b.absorptionRate >= 80 ? "text-gold" : "text-kenya-red-light"}`}>
                      {b.absorptionRate}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Source */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">Data Source</h3>
          <ul className="space-y-2">
            {budgetData.notes.map((note, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>{note}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </ToolShell>
  );
}
