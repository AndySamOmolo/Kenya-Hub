"use client";

import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import { useState, useMemo } from "react";
import Link from "next/link";
import countiesData from "@/data/counties.json";
import budgetsData from "@/data/county-budgets.json";
import rainfallData from "@/data/rainfall-patterns.json";
import hospitalsData from "@/data/nhif-hospitals.json";
import postalData from "@/data/postal-codes.json";
import rankingsData from "@/data/kcse-rankings.json";
import SearchInput from "@/components/ui/SearchInput";
import CustomSelect from "@/components/ui/CustomSelect";
import DynamicIcon from "@/components/ui/DynamicIcon";

type ActiveTab = "directory" | "budgets" | "constituencies" | "climate" | "compare";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTH_KEYS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

const COUNTY_HUB_FAQS = [
  {
    question: "How many counties, constituencies, and wards are in Kenya?",
    answer:
      "Under the 2010 Constitution of Kenya (First Schedule), Kenya is divided into 47 devolved counties, 290 parliamentary constituencies, and 1,450 county assembly wards administered by the Independent Electoral and Boundaries Commission (IEBC).",
  },
  {
    question: "Which Kenyan county receives the highest equitable share budget allocation?",
    answer:
      "Nairobi City County (#047) receives the largest equitable share allocation at KES 20,072 Million in FY 2025/26, followed by Nakuru, Turkana, Kakamega, and Kiambu counties based on the Commission on Revenue Allocation (CRA) formula.",
  },
  {
    question: "How is county government funding divided in Kenya?",
    answer:
      "County governments are funded through three primary streams: the Equitable Share of national revenue (at least 15% of audited national revenue under Article 203 of the Constitution), Conditional Grants from the National Government and development partners, and Own-Source Revenue (OSR) collected locally from property rates, single business permits, parking fees, and hospital charges.",
  },
  {
    question: "What are the elected leadership positions in each Kenyan county?",
    answer:
      "Every county elects a County Governor and Deputy Governor (heading the County Executive), a County Senator (representing the county in the Senate), a County Woman Representative (representing the county in the National Assembly), Members of Parliament (MPs) for each constituency, and Members of the County Assembly (MCAs) for each ward.",
  },
];

export default function CountyIndexPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("directory");
  const [search, setSearch] = useState("");
  const [climateFilter, setClimateFilter] = useState("All");
  const [sortBy, setSortBy] = useState<
    "code" | "name" | "population" | "area" | "density" | "budget" | "rainfall"
  >("code");
  const [budgetSort, setBudgetSort] = useState<
    "allocation" | "ownSourceRevenue" | "expenditure" | "absorptionRate" | "county"
  >("allocation");
  const [compareSlugA, setCompareSlugA] = useState("nairobi");
  const [compareSlugB, setCompareSlugB] = useState("mombasa");

  // Enrich all 47 counties with budget, rainfall, hospital count, postal count, and top schools count
  const enrichedCounties = useMemo(() => {
    const budgetMap = new Map<number, any>();
    for (const b of (budgetsData as any).budgets || []) {
      budgetMap.set(Number(b.code), b);
    }
    const rainMap = new Map<number, any>();
    for (const r of (rainfallData as any).counties || []) {
      rainMap.set(Number(r.code), r);
    }

    return countiesData.counties.map((c) => {
      const budget = budgetMap.get(c.code) || null;
      const rain = rainMap.get(c.code) || null;
      const density = c.area > 0 ? Math.round(c.population / c.area) : 0;
      const hospitalsCount = ((hospitalsData as any).hospitals || []).filter(
        (h: any) => h.county.toLowerCase() === c.name.toLowerCase()
      ).length;
      const postalCount = ((postalData as any).codes || []).filter(
        (p: any) => p.county.toLowerCase() === c.name.toLowerCase()
      ).length;
      const topSchoolsCount = ((rankingsData as any).schools || []).filter(
        (s: any) => s.county.toLowerCase() === c.name.toLowerCase()
      ).length;

      return {
        ...c,
        density,
        budget,
        rain,
        hospitalsCount,
        postalCount,
        topSchoolsCount,
      };
    });
  }, []);

  const climateZones = useMemo(() => {
    const set = new Set<string>();
    for (const c of enrichedCounties) {
      if (c.rain?.climateZone) set.add(c.rain.climateZone);
    }
    return ["All", ...Array.from(set)];
  }, [enrichedCounties]);

  const filtered = useMemo(() => {
    let items = enrichedCounties;
    if (climateFilter !== "All") {
      items = items.filter((c) => c.rain?.climateZone === climateFilter);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.governor.toLowerCase().includes(q) ||
          (c.senator && c.senator.toLowerCase().includes(q)) ||
          (c.womenRep && c.womenRep.toLowerCase().includes(q)) ||
          c.capital.toLowerCase().includes(q) ||
          String(c.code).padStart(3, "0").includes(q) ||
          c.constituencies.some((con) => con.toLowerCase().includes(q))
      );
    }
    return [...items].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "population") return b.population - a.population;
      if (sortBy === "area") return b.area - a.area;
      if (sortBy === "density") return b.density - a.density;
      if (sortBy === "budget") return (b.budget?.allocation || 0) - (a.budget?.allocation || 0);
      if (sortBy === "rainfall") return (b.rain?.annualRainfall || 0) - (a.rain?.annualRainfall || 0);
      return a.code - b.code;
    });
  }, [enrichedCounties, climateFilter, search, sortBy]);

  const sortedBudgets = useMemo(() => {
    const list = [...filtered];
    return list.sort((a, b) => {
      if (budgetSort === "county") return a.name.localeCompare(b.name);
      return (b.budget?.[budgetSort] || 0) - (a.budget?.[budgetSort] || 0);
    });
  }, [filtered, budgetSort]);

  const nationalTotals = useMemo(() => {
    const budgets = (budgetsData as any).budgets || [];
    const totalAlloc = budgets.reduce((s: number, b: any) => s + (b.allocation || 0), 0);
    const totalOsr = budgets.reduce((s: number, b: any) => s + (b.ownSourceRevenue || 0), 0);
    const totalExp = budgets.reduce((s: number, b: any) => s + (b.expenditure || 0), 0);
    const avgAbs =
      budgets.length > 0
        ? (budgets.reduce((s: number, b: any) => s + (b.absorptionRate || 0), 0) / budgets.length).toFixed(1)
        : "0";
    return { totalAlloc, totalOsr, totalExp, avgAbs };
  }, []);

  const countyA = useMemo(
    () => enrichedCounties.find((c) => c.slug === compareSlugA) || enrichedCounties[46],
    [enrichedCounties, compareSlugA]
  );
  const countyB = useMemo(
    () => enrichedCounties.find((c) => c.slug === compareSlugB) || enrichedCounties[0],
    [enrichedCounties, compareSlugB]
  );

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "47 Counties of Kenya Directory",
    description: "Official directory of all 47 devolved county governments in Kenya with leadership, budgets, and constituencies.",
    numberOfItems: 47,
    itemListElement: enrichedCounties.map((c, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${c.name} County (#${String(c.code).padStart(3, "0")})`,
      url: `https://kenyahub.me/county/${c.slug}/`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: COUNTY_HUB_FAQS.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-4 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1.5 text-xs text-text-muted mb-8">
        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
        <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-text-secondary">47 Counties Hub</span>
      </nav>

      {/* Header */}
      <header className="mb-8 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold mb-3">
          <DynamicIcon emoji="🏛️" className="w-3.5 h-3.5" /> Unified 47 Counties Intelligence Hub
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold font-[family-name:var(--font-outfit)] text-text-primary leading-tight tracking-tight mb-3">
          Kenya 47 County Governments Hub
        </h1>
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
          All county data consolidated in one place — explore Governors, Senators, Woman Representatives,{" "}
          <strong>290 Constituencies</strong>, <strong>FY 2025/26 Controller of Budget Allocations</strong>,{" "}
          <strong>Monthly Rainfall &amp; Climate Zones</strong>, SHA Hospitals, Postal Codes, and side-by-side county comparisons.
        </p>
      </header>

      {/* National Summary Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <div className="bg-bg-card border border-border rounded-xl p-4">
          <p className="text-[0.65rem] text-text-muted uppercase tracking-wider font-semibold">Devolved Units</p>
          <p className="text-xl font-bold font-[family-name:var(--font-outfit)] text-gold mt-0.5">47 Counties</p>
          <p className="text-[0.6875rem] text-text-muted mt-0.5">290 Constituencies · 1,450 Wards</p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-4">
          <p className="text-[0.65rem] text-text-muted uppercase tracking-wider font-semibold">National Population</p>
          <p className="text-xl font-bold font-[family-name:var(--font-outfit)] text-text-primary mt-0.5">47.56M</p>
          <p className="text-[0.6875rem] text-text-muted mt-0.5">KNBS 2019 Census Baseline</p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-4">
          <p className="text-[0.65rem] text-text-muted uppercase tracking-wider font-semibold">FY 2025/26 Equitable Share</p>
          <p className="text-xl font-bold font-[family-name:var(--font-outfit)] text-kenya-green-light mt-0.5">
            KES {(nationalTotals.totalAlloc / 1000).toFixed(1)}B
          </p>
          <p className="text-[0.6875rem] text-text-muted mt-0.5">+ KES {(nationalTotals.totalOsr / 1000).toFixed(1)}B Own-Source Rev</p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-4">
          <p className="text-[0.65rem] text-text-muted uppercase tracking-wider font-semibold">Avg Budget Absorption</p>
          <p className="text-xl font-bold font-[family-name:var(--font-outfit)] text-sky-light mt-0.5">
            {nationalTotals.avgAbs}%
          </p>
          <p className="text-[0.6875rem] text-text-muted mt-0.5">Controller of Budget Report</p>
        </div>
      </div>

      {/* Consolidated Hub Mode Tabs (Standalone Horizontal Pills) */}
      <ExpandablePillRow className="mb-5">
        {([
          { id: "directory", label: "Counties" },
          { id: "budgets", label: "Budgets" },
          { id: "constituencies", label: "Constituencies" },
          { id: "climate", label: "Climate" },
          { id: "compare", label: "Compare" },
        ] as const).map((tab) => {
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium border transition-all ${
                active
                  ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                  : "border-border bg-bg-card text-text-secondary hover:text-text-primary hover:border-border-light"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </ExpandablePillRow>

      {/* Shared Search & Filter Bar (for Directory, Budgets, Constituencies, Climate) */}
      {activeTab !== "compare" && (
        <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between mb-6">
          <div className="flex-1 max-w-xl">
            <SearchInput
              type="text"
              placeholder="Search county, governor, senator, HQ capital, constituency, or code (001–047)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field w-full text-sm"
              id="county-search"
              onClear={() => setSearch("")}
            />
          </div>

          {activeTab === "directory" && (
            <div className="grid grid-cols-2 sm:flex items-center gap-2">
              <CustomSelect
                value={climateFilter}
                onValueChange={(val) => setClimateFilter(val)}
                options={climateZones.map((z) => ({
                  value: z,
                  label: z === "All" ? "All Climate Zones (47)" : z,
                }))}
                className="w-full sm:w-48 text-xs"
              />
              <CustomSelect
                value={sortBy}
                onValueChange={(val) => setSortBy(val as typeof sortBy)}
                options={[
                  { value: "code", label: "Sort: Code (001–047)" },
                  { value: "name", label: "Sort: Name (A–Z)" },
                  { value: "population", label: "Sort: Population" },
                  { value: "area", label: "Sort: Area km²" },
                  { value: "density", label: "Sort: Density" },
                  { value: "budget", label: "Sort: Budget" },
                  { value: "rainfall", label: "Sort: Rainfall" },
                ]}
                className="w-full sm:w-48 text-xs"
              />
            </div>
          )}

          {activeTab === "climate" && (
            <div className="w-full sm:w-56">
              <CustomSelect
                value={climateFilter}
                onValueChange={(val) => setClimateFilter(val)}
                options={climateZones.map((z) => ({
                  value: z,
                  label: z === "All" ? "All Climate Zones (47)" : z,
                }))}
                className="w-full text-xs"
              />
            </div>
          )}

          {activeTab === "budgets" && (
            <div className="w-full sm:w-56">
              <CustomSelect
                value={budgetSort}
                onValueChange={(val) => setBudgetSort(val as typeof budgetSort)}
                options={[
                  { value: "allocation", label: "Sort: Equitable Share" },
                  { value: "ownSourceRevenue", label: "Sort: Own-Source Rev" },
                  { value: "expenditure", label: "Sort: Expenditure" },
                  { value: "absorptionRate", label: "Sort: Absorption %" },
                  { value: "county", label: "Sort: County A–Z" },
                ]}
                className="w-full text-xs"
              />
            </div>
          )}
        </div>
      )}

      {/* ── TAB 1: ALL 47 COUNTIES DIRECTORY ── */}
      {activeTab === "directory" && (
        <>
          <p className="text-xs text-text-muted mb-4">
            Showing {filtered.length} of 47 counties · Click any county for its complete dashboard (Budget, 12-Month Rainfall, Soils, Hospitals, Postal Codes &amp; Constituencies)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((county) => (
              <Link
                key={county.code}
                href={`/county/${county.slug}/`}
                className="group block bg-bg-card border border-border rounded-xl p-5 hover:border-gold/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-gold/80 group-hover:text-gold transition-colors">
                    {county.code.toString().padStart(3, "0")}
                  </span>
                  <span className="text-[0.65rem] bg-bg-elevated text-text-secondary px-2 py-0.5 rounded border border-border">
                    HQ: {county.capital}
                  </span>
                </div>

                <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-1 group-hover:text-gold transition-colors">
                  {county.name} County
                </h2>
                <p className="text-xs text-text-secondary mb-1">
                  Gov. <span className="font-medium text-text-primary">{county.governor}</span>
                </p>
                <p className="text-[0.6875rem] text-text-muted mb-4">
                  {county.constituencies.length} Constituencies · {county.rain?.climateZone || "Kenya"}
                </p>

                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-border/50 text-xs">
                  <div>
                    <p className="text-[0.6rem] text-text-muted uppercase tracking-wider">Population</p>
                    <p className="font-semibold text-text-primary">{county.population.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-[0.6rem] text-text-muted uppercase tracking-wider">Area / Density</p>
                    <p className="font-semibold text-text-primary">
                      {county.area.toLocaleString()} km² ({county.density}/km²)
                    </p>
                  </div>
                  {county.budget && (
                    <div>
                      <p className="text-[0.6rem] text-text-muted uppercase tracking-wider">FY 25/26 Budget</p>
                      <p className="font-semibold text-kenya-green-light">
                        KES {county.budget.allocation.toLocaleString()}M
                      </p>
                    </div>
                  )}
                  {county.rain && (
                    <div>
                      <p className="text-[0.6rem] text-text-muted uppercase tracking-wider">Annual Rain</p>
                      <p className="font-semibold text-sky-light">{county.rain.annualRainfall} mm/yr</p>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      {/* ── TAB 2: COUNTY BUDGETS & ABSORPTION TRACKER ── */}
      {activeTab === "budgets" && (
        <div className="space-y-4">
          <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border bg-bg-elevated/60 text-[0.6875rem] uppercase tracking-wider text-text-muted">
                    <th className="py-3.5 px-4">County</th>
                    <th className="py-3.5 px-4 text-right">Equitable Share</th>
                    <th className="py-3.5 px-4 text-right">Own-Source (OSR)</th>
                    <th className="py-3.5 px-4 text-right">Total Revenue</th>
                    <th className="py-3.5 px-4 text-right">Expenditure</th>
                    <th className="py-3.5 px-4 text-right">Absorption Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {sortedBudgets.map((c) => {
                    const b = c.budget;
                    if (!b) return null;
                    return (
                      <tr key={c.code} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 px-4 font-semibold text-text-primary">
                          <Link href={`/county/${c.slug}/`} className="hover:text-gold transition-colors">
                            <span className="text-text-muted font-mono mr-1.5">
                              {String(c.code).padStart(3, "0")}
                            </span>
                            {c.name}
                          </Link>
                        </td>
                        <td className="py-3 px-4 text-right font-mono text-text-primary">
                          KES {b.allocation.toLocaleString()}M
                        </td>
                        <td className="py-3 px-4 text-right font-mono text-gold">
                          KES {b.ownSourceRevenue.toLocaleString()}M
                        </td>
                        <td className="py-3 px-4 text-right font-mono text-text-secondary">
                          KES {b.totalRevenue.toLocaleString()}M
                        </td>
                        <td className="py-3 px-4 text-right font-mono text-kenya-green-light">
                          KES {b.expenditure.toLocaleString()}M
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="inline-flex items-center gap-2">
                            <div className="w-16 h-2 bg-bg-elevated rounded-full overflow-hidden hidden sm:block">
                              <div
                                className="h-full bg-kenya-green-light rounded-full"
                                style={{ width: `${Math.min(100, b.absorptionRate)}%` }}
                              />
                            </div>
                            <span className="font-bold text-text-primary">{b.absorptionRate}%</span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 3: 290 CONSTITUENCIES & ELECTED LEADERS ── */}
      {activeTab === "constituencies" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((c) => (
            <div key={c.code} className="bg-bg-card border border-border rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div>
                  <Link
                    href={`/county/${c.slug}/`}
                    className="text-base font-bold font-[family-name:var(--font-outfit)] text-text-primary hover:text-gold transition-colors"
                  >
                    {String(c.code).padStart(3, "0")}. {c.name} County
                  </Link>
                  <p className="text-xs text-text-muted">HQ: {c.capital} · {c.constituencies.length} Constituencies</p>
                </div>
                <Link
                  href={`/county/${c.slug}/`}
                  className="text-xs font-semibold text-gold hover:underline"
                >
                  Full Profile →
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-bg-elevated/50 p-2.5 rounded-lg border border-border/50">
                  <span className="text-[0.625rem] uppercase text-text-muted block">Governor</span>
                  <span className="font-semibold text-kenya-green-light">{c.governor}</span>
                </div>
                <div className="bg-bg-elevated/50 p-2.5 rounded-lg border border-border/50">
                  <span className="text-[0.625rem] uppercase text-text-muted block">Deputy Governor</span>
                  <span className="font-semibold text-text-primary">{c.deputyGovernor}</span>
                </div>
                <div className="bg-bg-elevated/50 p-2.5 rounded-lg border border-border/50">
                  <span className="text-[0.625rem] uppercase text-text-muted block">Senator</span>
                  <span className="font-semibold text-sky-light">{c.senator}</span>
                </div>
                <div className="bg-bg-elevated/50 p-2.5 rounded-lg border border-border/50">
                  <span className="text-[0.625rem] uppercase text-text-muted block">Woman Rep</span>
                  <span className="font-semibold text-gold">{c.womenRep}</span>
                </div>
              </div>

              <div>
                <p className="text-[0.65rem] uppercase tracking-wider text-text-muted font-semibold mb-2">
                  Constituencies ({c.constituencies.length})
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {c.constituencies.map((con, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs rounded-md bg-bg-elevated border border-border text-text-secondary"
                    >
                      {idx + 1}. {con}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── TAB 4: CLIMATE & RAINFALL BY COUNTY ── */}
      {activeTab === "climate" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((c) => {
            const r = c.rain;
            if (!r) return null;
            return (
              <div key={c.code} className="bg-bg-card border border-border rounded-xl p-5 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <Link
                      href={`/county/${c.slug}/`}
                      className="text-base font-bold font-[family-name:var(--font-outfit)] text-text-primary hover:text-gold transition-colors"
                    >
                      {String(c.code).padStart(3, "0")}. {c.name} County
                    </Link>
                    <p className="text-xs text-text-secondary">{r.climateZone}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-sky/15 text-sky-light border border-sky/30">
                    {r.annualRainfall} mm/yr
                  </span>
                </div>

                {r.monthly && (
                  <div className="grid grid-cols-12 gap-1 pt-2">
                    {MONTH_KEYS.map((mk, idx) => {
                      const mm = r.monthly[mk] || 0;
                      return (
                        <div
                          key={mk}
                          className={`rounded p-1 text-center ${
                            mm >= 150
                              ? "bg-sky/25 text-sky-light"
                              : mm >= 70
                              ? "bg-sky/10 text-text-primary"
                              : "bg-bg-elevated text-text-muted"
                          }`}
                        >
                          <div className="text-[0.55rem] uppercase">{MONTHS[idx]}</div>
                          <div className="text-[0.65rem] font-bold">{mm}</div>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/50 text-xs">
                  <div>
                    <span className="text-[0.6rem] text-text-muted uppercase block">Long Rains</span>
                    <span className="font-medium text-text-primary">{r.longRains}</span>
                  </div>
                  <div>
                    <span className="text-[0.6rem] text-text-muted uppercase block">Short Rains</span>
                    <span className="font-medium text-text-primary">{r.shortRains}</span>
                  </div>
                  <div>
                    <span className="text-[0.6rem] text-text-muted uppercase block">Dry Season</span>
                    <span className="font-medium text-text-secondary">{r.drySeason}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── TAB 5: COMPARE 2 COUNTIES SIDE-BY-SIDE ── */}
      {activeTab === "compare" && countyA && countyB && (
        <div className="bg-bg-card border border-border rounded-2xl p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-text-muted uppercase block mb-1.5">
                First County
              </label>
              <CustomSelect
                value={compareSlugA}
                onValueChange={(val) => setCompareSlugA(val)}
                options={enrichedCounties.map((c) => ({
                  value: c.slug,
                  label: `${String(c.code).padStart(3, "0")} — ${c.name} County`,
                }))}
                className="w-full text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-text-muted uppercase block mb-1.5">
                Second County
              </label>
              <CustomSelect
                value={compareSlugB}
                onValueChange={(val) => setCompareSlugB(val)}
                options={enrichedCounties.map((c) => ({
                  value: c.slug,
                  label: `${String(c.code).padStart(3, "0")} — ${c.name} County`,
                }))}
                className="w-full text-sm"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-border bg-bg-elevated/60">
                  <th className="py-3 px-4 text-text-muted uppercase text-xs">Metric</th>
                  <th className="py-3 px-4 font-bold text-gold">
                    <Link href={`/county/${countyA.slug}/`} className="hover:underline">
                      {String(countyA.code).padStart(3, "0")}. {countyA.name} County →
                    </Link>
                  </th>
                  <th className="py-3 px-4 font-bold text-kenya-green-light">
                    <Link href={`/county/${countyB.slug}/`} className="hover:underline">
                      {String(countyB.code).padStart(3, "0")}. {countyB.name} County →
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {[
                  { label: "County Headquarters (Capital)", a: countyA.capital, b: countyB.capital },
                  { label: "Governor", a: countyA.governor, b: countyB.governor },
                  { label: "Deputy Governor", a: countyA.deputyGovernor, b: countyB.deputyGovernor },
                  { label: "Senator", a: countyA.senator, b: countyB.senator },
                  { label: "Woman Representative", a: countyA.womenRep, b: countyB.womenRep },
                  { label: "Population (KNBS Census)", a: countyA.population.toLocaleString(), b: countyB.population.toLocaleString() },
                  { label: "Land Area (km²)", a: `${countyA.area.toLocaleString()} km²`, b: `${countyB.area.toLocaleString()} km²` },
                  { label: "Population Density", a: `${countyA.density.toLocaleString()} / km²`, b: `${countyB.density.toLocaleString()} / km²` },
                  { label: "Parliamentary Constituencies", a: `${countyA.constituencies.length} (${countyA.constituencies.join(", ")})`, b: `${countyB.constituencies.length} (${countyB.constituencies.join(", ")})` },
                  { label: "FY 2025/26 Equitable Share", a: `KES ${(countyA.budget?.allocation || 0).toLocaleString()}M`, b: `KES ${(countyB.budget?.allocation || 0).toLocaleString()}M` },
                  { label: "Own-Source Revenue (OSR)", a: `KES ${(countyA.budget?.ownSourceRevenue || 0).toLocaleString()}M`, b: `KES ${(countyB.budget?.ownSourceRevenue || 0).toLocaleString()}M` },
                  { label: "Budget Absorption Rate", a: `${countyA.budget?.absorptionRate || 0}%`, b: `${countyB.budget?.absorptionRate || 0}%` },
                  { label: "Climate Zone & Annual Rainfall", a: `${countyA.rain?.climateZone || "—"} (${countyA.rain?.annualRainfall || 0} mm/yr)`, b: `${countyB.rain?.climateZone || "—"} (${countyB.rain?.annualRainfall || 0} mm/yr)` },
                  { label: "SHA Hospitals / Posta Towns / Top KCSE Schools", a: `${countyA.hospitalsCount} Hospitals · ${countyA.postalCount} Posta Towns · ${countyA.topSchoolsCount} Top Schools`, b: `${countyB.hospitalsCount} Hospitals · ${countyB.postalCount} Posta Towns · ${countyB.topSchoolsCount} Top Schools` },
                ].map((row) => (
                  <tr key={row.label} className="hover:bg-white/[0.02]">
                    <td className="py-3 px-4 font-medium text-text-muted">{row.label}</td>
                    <td className="py-3 px-4 font-semibold text-text-primary">{row.a}</td>
                    <td className="py-3 px-4 font-semibold text-text-primary">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {filtered.length === 0 && activeTab !== "compare" && (
        <div className="text-center py-16">
          <div className="flex justify-center mb-3">
            <DynamicIcon emoji="🔍" className="w-10 h-10 text-text-muted" />
          </div>
          <p className="text-text-secondary text-sm">No counties found matching &quot;{search}&quot;</p>
        </div>
      )}

      {/* About Kenya's 47 Devolved Counties & FAQ Section */}
      <section className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-bg-card border border-border rounded-2xl p-6 space-y-3">
          <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">
            About Devolved County Governance in Kenya
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-text-secondary leading-relaxed">
            {((countiesData as any).notes || []).map((note: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-gold font-bold">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-bg-card border border-border rounded-2xl p-6 space-y-3">
          <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">
            Frequently Asked Questions — Kenya Counties
          </h2>
          <div className="space-y-2.5">
            {COUNTY_HUB_FAQS.map((faq, idx) => (
              <details key={idx} className="group bg-bg-elevated/50 border border-border rounded-xl overflow-hidden">
                <summary className="px-4 py-3 cursor-pointer text-xs sm:text-sm font-semibold text-text-primary hover:text-gold list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="text-text-muted group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-4 pb-3.5 pt-2 text-xs text-text-secondary leading-relaxed border-t border-border/60">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
