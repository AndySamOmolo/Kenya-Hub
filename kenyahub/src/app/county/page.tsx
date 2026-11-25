"use client";

import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import { useState, useMemo, useEffect, useRef, useDeferredValue } from "react";
import { scrollToTopIfScrolled } from "@/lib/scroll";
import Link from "next/link";
import countiesData from "@/data/counties.json";
import budgetsData from "@/data/county-budgets.json";
import rainfallData from "@/data/rainfall-patterns.json";
import hospitalsData from "@/data/nhif-hospitals.json";
import postalData from "@/data/postal-codes.json";
import rankingsData from "@/data/kcse-rankings.json";
import solarData from "@/data/solar-irradiance.json";
import soilsData from "@/data/soil-types.json";
import parksData from "@/data/national-parks.json";
import agrovetsData from "@/data/agrovets.json";
import { ArrowLeftRight } from "lucide-react";
import SearchInput from "@/components/ui/SearchInput";
import CustomSelect from "@/components/ui/CustomSelect";
import DynamicIcon from "@/components/ui/DynamicIcon";

type ActiveTab = "directory" | "budgets" | "constituencies" | "climate" | "compare";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTH_KEYS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

const COUNTY_REGION_BY_CODE: Record<number, string> = {
  1: "Coast", 2: "Coast", 3: "Coast", 4: "Coast", 5: "Coast", 6: "Coast",
  7: "North Eastern", 8: "North Eastern", 9: "North Eastern",
  10: "Eastern", 11: "Eastern", 12: "Eastern", 13: "Eastern", 14: "Eastern", 15: "Eastern", 16: "Eastern", 17: "Eastern",
  18: "Central", 19: "Central", 20: "Central", 21: "Central", 22: "Central",
  23: "Rift Valley", 24: "Rift Valley", 25: "Rift Valley", 26: "Rift Valley", 27: "Rift Valley", 28: "Rift Valley", 29: "Rift Valley",
  30: "Rift Valley", 31: "Rift Valley", 32: "Rift Valley", 33: "Rift Valley", 34: "Rift Valley", 35: "Rift Valley", 36: "Rift Valley",
  37: "Western", 38: "Western", 39: "Western", 40: "Western",
  41: "Nyanza", 42: "Nyanza", 43: "Nyanza", 44: "Nyanza", 45: "Nyanza", 46: "Nyanza",
  47: "Nairobi",
};

const REGIONS = ["All", "Coast", "North Eastern", "Eastern", "Central", "Rift Valley", "Western", "Nyanza", "Nairobi"];

function computeAnnualRainfall(rain: any): number {
  if (!rain) return 0;
  if (rain.monthly && typeof rain.monthly === "object") {
    return MONTH_KEYS.reduce((sum, mk) => sum + Number(rain.monthly[mk] || 0), 0);
  }
  if (Array.isArray(rain.monthlyAvg)) {
    return rain.monthlyAvg.reduce((sum: number, v: number) => sum + Number(v || 0), 0);
  }
  return Number(rain.annualRainfall || 0);
}

function normalizeCountyName(s: string): string {
  return String(s || "")
    .toLowerCase()
    .replace(/['’\-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const URBAN_UTILITIES_SUMMARY: Record<string, string> = {
  nairobi: "Urban Utilities — NCWSC Water (PayBill 444400), KPLC & 5 Huduma Centres",
  mombasa: "Urban Utilities — MOWASSCO Water (PayBill 888885), KPLC & Likoni Ferry",
};

type CompareRow = {
  label: string;
  a: string;
  b: string;
  numA?: number;
  numB?: number;
};

type CompareSection = {
  title: string;
  rows: CompareRow[];
};


const COUNTY_HUB_FAQS = [
  {
    question: "How many counties, constituencies, and wards are in Kenya?",
    answer:
      "Under the 2010 Constitution of Kenya (First Schedule), Kenya is divided into 47 devolved counties, 290 parliamentary constituencies, and 1,450 county assembly wards administered by the Independent Electoral and Boundaries Commission (IEBC).",
  },
  {
    question: "Which Kenyan county receives the highest equitable share budget allocation?",
    answer:
      "Nairobi City County (#047) receives the largest equitable share allocation at KES 20,072M in FY 2025/26, followed by Nakuru (KES 13,626M), Turkana (KES 13,143M), Kakamega (KES 12,913M), Kiambu (KES 12,229M), and Kilifi (KES 12,109M) counties based on the Commission on Revenue Allocation (CRA) formula under the County Allocation of Revenue Act (CARA).",
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

// Pre-index static county datasets once at module load (O(N+M) instead of O(N*M) per visit)
const STATIC_ENRICHED_COUNTIES = (() => {
  const budgetMap = new Map<number, any>();
  for (const b of (budgetsData as any).budgets || []) {
    budgetMap.set(Number(b.code), b);
  }
  const rainMap = new Map<number, any>();
  for (const r of (rainfallData as any).counties || []) {
    rainMap.set(Number(r.code), r);
  }
  const hospitalCountMap = new Map<string, number>();
  for (const h of (hospitalsData as any).hospitals || []) {
    const k = normalizeCountyName(h.county);
    hospitalCountMap.set(k, (hospitalCountMap.get(k) || 0) + 1);
  }
  const postalEntriesMap = new Map<string, any[]>();
  for (const p of (postalData as any).codes || []) {
    const k = normalizeCountyName(p.county);
    const arr = postalEntriesMap.get(k);
    if (arr) arr.push(p);
    else postalEntriesMap.set(k, [p]);
  }
  const topSchoolsCountMap = new Map<string, number>();
  for (const s of (rankingsData as any).schools || []) {
    const k = normalizeCountyName(s.county);
    topSchoolsCountMap.set(k, (topSchoolsCountMap.get(k) || 0) + 1);
  }
  const agrovetsCountMap = new Map<string, number>();
  for (const a of (agrovetsData as any).agrovets || []) {
    const k = normalizeCountyName(a.county);
    agrovetsCountMap.set(k, (agrovetsCountMap.get(k) || 0) + 1);
  }
  const solarMap = new Map<string, number>();
  for (const sr of (solarData as any).regions || []) {
    const irr = Number(sr?.irradiance || 0);
    for (const rc of sr.counties || []) {
      solarMap.set(normalizeCountyName(rc), irr);
    }
  }
  const parksList = ((parksData as any).parks || []).map((p: any) => normalizeCountyName(p.county));
  const soilsList = ((soilsData as any).soilTypes || []).map((s: any) => ({
    ...s,
    normCounties: (s.counties || []).map((sc: string) => normalizeCountyName(sc)),
  }));

  return countiesData.counties.map((c) => {
    const budget = budgetMap.get(c.code) || null;
    const rawRain = rainMap.get(c.code) || null;
    const rain = rawRain ? { ...rawRain, annualRainfall: computeAnnualRainfall(rawRain) } : null;
    const region = COUNTY_REGION_BY_CODE[c.code] || "Kenya";
    const normName = normalizeCountyName(c.name);
    const density = c.area > 0 ? Math.round(c.population / c.area) : 0;
    const hospitalsCount = hospitalCountMap.get(normName) || 0;
    const countyPostalEntries = postalEntriesMap.get(normName) || [];
    const postalCount = countyPostalEntries.length;
    const topSchoolsCount = topSchoolsCountMap.get(normName) || 0;
    let parksCount = 0;
    for (const pk of parksList) {
      if (pk.includes(normName)) parksCount++;
    }
    const agrovetsCount = agrovetsCountMap.get(normName) || 0;
    const solarIrradiance = solarMap.get(normName) || 0;

    const matchingSoils = soilsList.filter((s: any) =>
      s.normCounties.some((sc: string) => sc.includes(normName))
    );
    const primarySoil = matchingSoils[0]?.name || "";
    const topCrops = Array.from(
      new Set(matchingSoils.flatMap((s: any) => s.bestCrops || []))
    ).slice(0, 4) as string[];

    const soilAndCropsSummary =
      URBAN_UTILITIES_SUMMARY[c.slug] ||
      (primarySoil
        ? `${primarySoil}${topCrops.length > 0 ? ` · ${topCrops.join(", ")}` : ""}`
        : `${rain?.climateZone || "Regional"} Agriculture`);

    const monthlyRain = MONTH_KEYS.map((mk, idx) => ({
      month: MONTHS[idx],
      mm: Number(rain?.monthly?.[mk] ?? rain?.monthlyAvg?.[idx] ?? 0),
    }));
    const peakRainMonth = monthlyRain.reduce(
      (best, cur) => (cur.mm > best.mm ? cur : best),
      monthlyRain[0] || { month: "—", mm: 0 }
    );
    const driestRainMonth = monthlyRain.reduce(
      (best, cur) => (cur.mm < best.mm ? cur : best),
      monthlyRain[0] || { month: "—", mm: 0 }
    );

    const townSet = new Set<string>([c.capital]);
    for (const p of countyPostalEntries) {
      if (p.town) townSet.add(p.town);
      if (townSet.size >= 4) break;
    }
    const majorTowns = Array.from(townSet).join(", ");

    const totalBudget = (budget?.allocation || 0) + (budget?.ownSourceRevenue || 0);
    const osrSelfReliance =
      totalBudget > 0
        ? Math.round(((budget?.ownSourceRevenue || 0) / totalBudget) * 1000) / 10
        : 0;
    const allocationPerCapita =
      c.population > 0 && budget?.allocation
        ? Math.round((budget.allocation * 1_000_000) / c.population)
        : 0;

    return {
      ...c,
      density,
      region,
      budget,
      rain,
      hospitalsCount,
      postalCount,
      topSchoolsCount,
      parksCount,
      agrovetsCount,
      solarIrradiance,
      soilAndCropsSummary,
      peakRainMonth,
      driestRainMonth,
      majorTowns,
      totalBudget,
      osrSelfReliance,
      allocationPerCapita,
    };
  });
})();

export default function CountyIndexPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("directory");
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);
  const [climateFilter, setClimateFilter] = useState("All");
  const [regionFilter, setRegionFilter] = useState("All");
  const [letterFilter, setLetterFilter] = useState("All");
  const _scrollMountRef = useRef(false);
  useEffect(() => {
    if (!_scrollMountRef.current) { _scrollMountRef.current = true; return; }
    scrollToTopIfScrolled();
  }, [activeTab, climateFilter]);
  const [sortBy, setSortBy] = useState<
    "code" | "name" | "population" | "area" | "density" | "budget" | "rainfall"
  >("code");
  const [budgetSort, setBudgetSort] = useState<
    "allocation" | "ownSourceRevenue" | "expenditure" | "absorptionRate" | "county"
  >("allocation");
  const [compareSlugA, setCompareSlugA] = useState("nairobi");
  const [compareSlugB, setCompareSlugB] = useState("mombasa");

  const enrichedCounties = STATIC_ENRICHED_COUNTIES;

  const climateZones = useMemo(() => {
    const set = new Set<string>();
    for (const c of enrichedCounties) {
      if (c.rain?.climateZone) set.add(c.rain.climateZone);
    }
    return ["All", ...Array.from(set)];
  }, [enrichedCounties]);

  const filtered = useMemo(() => {
    let items = enrichedCounties;
    if (regionFilter !== "All") {
      items = items.filter((c) => c.region === regionFilter);
    }
    if (letterFilter !== "All") {
      items = items.filter((c) => c.name.toUpperCase().startsWith(letterFilter));
    }
    if (climateFilter !== "All") {
      items = items.filter((c) => c.rain?.climateZone === climateFilter);
    }
    if (deferredSearch.trim()) {
      const q = deferredSearch.toLowerCase();
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
  }, [enrichedCounties, regionFilter, letterFilter, climateFilter, deferredSearch, sortBy]);

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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://kenyahub.me/" },
      { "@type": "ListItem", position: 2, name: "47 Counties Hub", item: "https://kenyahub.me/county/" },
    ],
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
    <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-3 pb-8 sm:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema).replace(/</g, "\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\u003c") }}
      />

      {/* Breadcrumbs (Single-Line Scrollable on Mobile) */}
      <nav aria-label="Breadcrumb" className="flex flex-nowrap items-center gap-1.5 overflow-x-auto no-scrollbar whitespace-nowrap text-[11px] sm:text-xs text-text-muted mb-2 sm:mb-5 micro-badge">
        <Link href="/" className="hover:text-gold transition-colors shrink-0">Home</Link>
        <svg className="w-3 h-3 text-border-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-text-secondary font-medium shrink-0">47 Counties Hub</span>
      </nav>

      {/* Header */}
      <header className="mb-3.5 sm:mb-6 max-w-4xl">
        <h1 className="text-xl sm:text-3xl lg:text-[2.35rem] font-bold font-[family-name:var(--font-outfit)] text-text-primary leading-snug sm:leading-tight tracking-tight mb-2">
          Kenya 47 County Governments Hub
        </h1>
        <div className="rounded-xl bg-bg-card/70 border border-border/70 border-l-2 border-l-gold px-3.5 py-2.5">
          <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
            All county data consolidated in one place — explore Governors, Senators, Woman Representatives,{" "}
            <strong className="text-text-primary">290 Constituencies</strong>,{" "}
            <strong className="text-text-primary">FY 2025/26 Controller of Budget Allocations</strong>,{" "}
            <strong className="text-text-primary">Monthly Rainfall &amp; Climate Zones</strong>, SHA Hospitals, Postal Codes, and side-by-side county comparisons.
          </p>
        </div>
      </header>

      {/* Compact National Summary KPI Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-3.5 sm:mb-6">
        <div className="bg-bg-card border border-border rounded-xl p-2 sm:p-3.5">
          <p className="text-[10px] sm:text-xs text-text-muted uppercase tracking-wider font-semibold truncate compact-label">Devolved Units</p>
          <p className="text-sm sm:text-xl font-extrabold tabular-nums font-[family-name:var(--font-outfit)] text-gold mt-0.5">47 Counties</p>
          <p className="hidden sm:block text-[0.6875rem] text-text-muted mt-0.5 truncate">290 Constituencies · 1,450 Wards</p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-2 sm:p-3.5">
          <p className="text-[10px] sm:text-xs text-text-muted uppercase tracking-wider font-semibold truncate compact-label">Population</p>
          <p className="text-sm sm:text-xl font-extrabold tabular-nums font-[family-name:var(--font-outfit)] text-text-primary mt-0.5">47.56M</p>
          <p className="hidden sm:block text-[0.6875rem] text-text-muted mt-0.5 truncate">KNBS 2019 Census Baseline</p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-2 sm:p-3.5">
          <p className="text-[10px] sm:text-xs text-text-muted uppercase tracking-wider font-semibold truncate compact-label">Equitable Share</p>
          <p className="text-sm sm:text-xl font-extrabold tabular-nums font-[family-name:var(--font-outfit)] text-kenya-green-light mt-0.5">
            KES {(nationalTotals.totalAlloc / 1000).toFixed(1)}B
          </p>
          <p className="hidden sm:block text-[0.6875rem] text-text-muted mt-0.5 truncate">+ KES {(nationalTotals.totalOsr / 1000).toFixed(1)}B Own-Source Rev</p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-2 sm:p-3.5">
          <p className="text-[10px] sm:text-xs text-text-muted uppercase tracking-wider font-semibold truncate compact-label">Avg Absorption</p>
          <p className="text-sm sm:text-xl font-extrabold tabular-nums font-[family-name:var(--font-outfit)] text-sky-light mt-0.5">
            {nationalTotals.avgAbs}%
          </p>
          <p className="hidden sm:block text-[0.6875rem] text-text-muted mt-0.5 truncate">Controller of Budget Report</p>
        </div>
      </div>

      {/* Consolidated Hub Mode Tabs (Standalone Horizontal Pills) */}
      <ExpandablePillRow className="mb-2 sm:mb-5">
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
              className={`shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-medium border transition-colors ${
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
        <div className="flex flex-col lg:flex-row gap-1.5 sm:gap-3 items-stretch lg:items-center justify-between mb-2.5 sm:mb-6">
          <div className="flex-1 max-w-xl">
            <SearchInput
              type="text"
              placeholder="Search county, HQ, or code..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field w-full !h-8 sm:!h-10 text-xs sm:text-sm"
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
          {/* Clean Region & A–Z Filter Bar (No native scrollbar clutter) */}
          <div className="md:sticky md:top-16 z-30 px-3 sm:px-3.5 py-2 sm:py-2.5 mb-3 sm:mb-4 bg-bg-card md:bg-bg-card/95 md:backdrop-blur-sm border border-border/80 rounded-xl space-y-2 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="text-[0.625rem] font-bold uppercase tracking-wider text-text-muted shrink-0 w-11">
                Region
              </span>
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar flex-1 min-w-0 py-0.5">
                {REGIONS.map((reg) => (
                  <button
                    key={reg}
                    type="button"
                    onClick={() => setRegionFilter(reg)}
                    className={`shrink-0 whitespace-nowrap px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-semibold border transition-colors cursor-pointer ${
                      regionFilter === reg
                        ? "bg-gold text-kenya-black border-gold shadow-2xs"
                        : "bg-bg-elevated/50 border-border/70 text-text-secondary hover:text-gold hover:border-gold/50"
                    }`}
                  >
                    {reg}
                  </button>
                ))}
              </div>
              {(regionFilter !== "All" || letterFilter !== "All" || climateFilter !== "All") && (
                <button
                  type="button"
                  onClick={() => {
                    setRegionFilter("All");
                    setLetterFilter("All");
                    setClimateFilter("All");
                  }}
                  className="shrink-0 text-[11px] font-semibold text-gold hover:underline cursor-pointer pl-1"
                >
                  Reset
                </button>
              )}
            </div>
            <div className="flex items-center gap-2 pt-1.5 border-t border-border/40">
              <span className="text-[0.625rem] font-bold uppercase tracking-wider text-text-muted shrink-0 w-11">
                A–Z
              </span>
              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar flex-1 min-w-0 py-0.5">
                {["All", "B", "E", "G", "H", "I", "K", "L", "M", "N", "S", "T", "U", "V", "W"].map((ltr) => (
                  <button
                    key={ltr}
                    type="button"
                    onClick={() => setLetterFilter(ltr)}
                    className={`shrink-0 min-w-[26px] h-6 px-1.5 rounded-md text-[11px] font-semibold border transition-colors cursor-pointer inline-flex items-center justify-center ${
                      letterFilter === ltr
                        ? "bg-gold/15 text-gold border-gold/50 font-bold"
                        : "bg-transparent border-transparent text-text-secondary hover:bg-bg-elevated/80 hover:text-text-primary"
                    }`}
                  >
                    {ltr}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs text-text-muted mb-4">
            Showing {filtered.length} of 47 counties · Click any county for its complete dashboard (Budget, 12-Month Rainfall, Soils, Hospitals, Postal Codes &amp; Constituencies)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((county) => (
              <Link
                key={county.code}
                href={`/county/${county.slug}/`}
                prefetch={false}
                className="cv-auto group block bg-bg-card border border-border rounded-xl p-4 sm:p-5 hover:border-gold/50 transition-colors"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
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
                          <Link href={`/county/${c.slug}/`} prefetch={false} className="hover:text-gold transition-colors">
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
            <div key={c.code} className="cv-auto bg-bg-card border border-border rounded-xl p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3">
                <div className="min-w-0">
                  <Link
                    href={`/county/${c.slug}/`}
                    prefetch={false}
                    className="text-base font-bold font-[family-name:var(--font-outfit)] text-text-primary hover:text-gold transition-colors"
                  >
                    {String(c.code).padStart(3, "0")}. {c.name} County
                  </Link>
                  <p className="text-xs text-text-muted">HQ: {c.capital} · {c.constituencies.length} Constituencies</p>
                </div>
                <Link
                  href={`/county/${c.slug}/`}
                  prefetch={false}
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
              <div key={c.code} className="cv-auto bg-bg-card border border-border rounded-xl p-5 space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="min-w-0">
                    <Link
                      href={`/county/${c.slug}/`}
                      prefetch={false}
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

                {(r.monthly || r.monthlyAvg) && (
                  <div className="grid grid-cols-12 gap-1 pt-2">
                    {MONTH_KEYS.map((mk, idx) => {
                      const mm = r.monthly?.[mk] ?? r.monthlyAvg?.[idx] ?? 0;
                      return (
                        <div
                          key={mk}
                          className={`rounded p-1 text-center ${
                            mm >= 150
                              ? "bg-sky/25 text-sky-light"
                              : mm >= 70
                              ? "bg-sky/10 text-text-primary"
                              : "bg-bg-elevated text-text-secondary dark:text-[#d4ccc0]"
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
      {activeTab === "compare" && countyA && countyB && (() => {
        const summaryLeaders = [
          {
            label: "Population",
            a: countyA.population,
            b: countyB.population,
          },
          {
            label: "Total Budget",
            a: countyA.totalBudget,
            b: countyB.totalBudget,
          },
          {
            label: "Own-Source Rev",
            a: countyA.budget?.ownSourceRevenue || 0,
            b: countyB.budget?.ownSourceRevenue || 0,
          },
          {
            label: "Absorption",
            a: countyA.budget?.absorptionRate || 0,
            b: countyB.budget?.absorptionRate || 0,
          },
          {
            label: "Rainfall",
            a: countyA.rain?.annualRainfall || 0,
            b: countyB.rain?.annualRainfall || 0,
          },
        ];

        const compareSections: CompareSection[] = [
          {
            title: "1. Governance & Leadership",
            rows: [
              {
                label: "County Code",
                a: `#${String(countyA.code).padStart(3, "0")}`,
                b: `#${String(countyB.code).padStart(3, "0")}`,
              },
              { label: "Capital HQ", a: countyA.capital, b: countyB.capital },
              { label: "Region", a: countyA.region, b: countyB.region },
              { label: "Governor", a: countyA.governor, b: countyB.governor },
              {
                label: "Deputy Governor",
                a: countyA.deputyGovernor || "—",
                b: countyB.deputyGovernor || "—",
              },
              {
                label: "Senator",
                a: countyA.senator || "—",
                b: countyB.senator || "—",
              },
              {
                label: "Woman Rep",
                a: countyA.womenRep || "—",
                b: countyB.womenRep || "—",
              },
              {
                label: "Constituencies",
                a: `${countyA.constituencies.length}`,
                b: `${countyB.constituencies.length}`,
                numA: countyA.constituencies.length,
                numB: countyB.constituencies.length,
              },
              {
                label: "Wards",
                a: (countyA as any).wards ? String((countyA as any).wards) : "—",
                b: (countyB as any).wards ? String((countyB as any).wards) : "—",
                ...((countyA as any).wards || (countyB as any).wards
                  ? {
                      numA: Number((countyA as any).wards || 0),
                      numB: Number((countyB as any).wards || 0),
                    }
                  : {}),
              },
            ],
          },
          {
            title: "2. Demographics & Geography",
            rows: [
              {
                label: "Population (KNBS)",
                a: countyA.population.toLocaleString(),
                b: countyB.population.toLocaleString(),
                numA: countyA.population,
                numB: countyB.population,
              },
              {
                label: "Land Area (km²)",
                a: `${countyA.area.toLocaleString()} km²`,
                b: `${countyB.area.toLocaleString()} km²`,
                numA: countyA.area,
                numB: countyB.area,
              },
              {
                label: "Population Density (/km²)",
                a: `${countyA.density.toLocaleString()}/km²`,
                b: `${countyB.density.toLocaleString()}/km²`,
                numA: countyA.density,
                numB: countyB.density,
              },
              {
                label: "Key Economic Activities / Major Towns",
                a: countyA.majorTowns,
                b: countyB.majorTowns,
              },
            ],
          },
          {
            title: "3. FY 25/26 Public Finance",
            rows: [
              {
                label: "Equitable Share (KES M)",
                a: `KES ${(countyA.budget?.allocation || 0).toLocaleString()}M`,
                b: `KES ${(countyB.budget?.allocation || 0).toLocaleString()}M`,
                numA: countyA.budget?.allocation || 0,
                numB: countyB.budget?.allocation || 0,
              },
              {
                label: "Own-Source Revenue (OSR)",
                a: `KES ${(countyA.budget?.ownSourceRevenue || 0).toLocaleString()}M`,
                b: `KES ${(countyB.budget?.ownSourceRevenue || 0).toLocaleString()}M`,
                numA: countyA.budget?.ownSourceRevenue || 0,
                numB: countyB.budget?.ownSourceRevenue || 0,
              },
              {
                label: "Total Budget (Share + OSR)",
                a: `KES ${countyA.totalBudget.toLocaleString()}M`,
                b: `KES ${countyB.totalBudget.toLocaleString()}M`,
                numA: countyA.totalBudget,
                numB: countyB.totalBudget,
              },
              {
                label: "OSR Self-Reliance (%)",
                a: `${countyA.osrSelfReliance}%`,
                b: `${countyB.osrSelfReliance}%`,
                numA: countyA.osrSelfReliance,
                numB: countyB.osrSelfReliance,
              },
              {
                label: "Budget Absorption (%)",
                a: `${countyA.budget?.absorptionRate || 0}%`,
                b: `${countyB.budget?.absorptionRate || 0}%`,
                numA: countyA.budget?.absorptionRate || 0,
                numB: countyB.budget?.absorptionRate || 0,
              },
              {
                label: "Allocation Per Capita (KES/person)",
                a: `KES ${countyA.allocationPerCapita.toLocaleString()}`,
                b: `KES ${countyB.allocationPerCapita.toLocaleString()}`,
                numA: countyA.allocationPerCapita,
                numB: countyB.allocationPerCapita,
              },
            ],
          },
          {
            title: "4. Climate, Solar & Agriculture",
            rows: [
              {
                label: "Annual Rainfall (mm/yr)",
                a: `${countyA.rain?.annualRainfall || 0} mm/yr`,
                b: `${countyB.rain?.annualRainfall || 0} mm/yr`,
                numA: countyA.rain?.annualRainfall || 0,
                numB: countyB.rain?.annualRainfall || 0,
              },
              {
                label: "Peak Rainy Month",
                a: `${countyA.peakRainMonth.month} (${countyA.peakRainMonth.mm} mm)`,
                b: `${countyB.peakRainMonth.month} (${countyB.peakRainMonth.mm} mm)`,
              },
              {
                label: "Driest Month",
                a: `${countyA.driestRainMonth.month} (${countyA.driestRainMonth.mm} mm)`,
                b: `${countyB.driestRainMonth.month} (${countyB.driestRainMonth.mm} mm)`,
              },
              {
                label: "Climate Zone",
                a: countyA.rain?.climateZone || "—",
                b: countyB.rain?.climateZone || "—",
              },
              {
                label: "Solar Irradiance (kWh/m²/day)",
                a: `${countyA.solarIrradiance.toFixed(1)} kWh/m²/day`,
                b: `${countyB.solarIrradiance.toFixed(1)} kWh/m²/day`,
                numA: countyA.solarIrradiance,
                numB: countyB.solarIrradiance,
              },
              {
                label: "Primary Soil & Top Crops",
                a: countyA.soilAndCropsSummary,
                b: countyB.soilAndCropsSummary,
              },
            ],
          },
          {
            title: "5. Health, Parks & Civic Infrastructure",
            rows: [
              {
                label: "SHA/NHIF Accredited Hospitals",
                a: `${countyA.hospitalsCount}`,
                b: `${countyB.hospitalsCount}`,
                numA: countyA.hospitalsCount,
                numB: countyB.hospitalsCount,
              },
              {
                label: "Postal Codes",
                a: `${countyA.postalCount}`,
                b: `${countyB.postalCount}`,
                numA: countyA.postalCount,
                numB: countyB.postalCount,
              },
              {
                label: "National Parks & Reserves",
                a: `${countyA.parksCount}`,
                b: `${countyB.parksCount}`,
                numA: countyA.parksCount,
                numB: countyB.parksCount,
              },
              {
                label: "Registered Agrovets",
                a: `${countyA.agrovetsCount}`,
                b: `${countyB.agrovetsCount}`,
                numA: countyA.agrovetsCount,
                numB: countyB.agrovetsCount,
              },
            ],
          },
        ];

        return (
          <div className="bg-bg-card border border-border rounded-2xl p-4 sm:p-6 space-y-5">
            <div>
              <h2 className="text-base sm:text-xl font-bold font-[family-name:var(--font-outfit)] text-gold">
                Compare Two Counties Side-by-Side
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
                Pick any two of Kenya&apos;s 47 counties or swap them to compare leadership, FY 25/26 budgets, climate, solar, and civic infrastructure.
              </p>
            </div>

            {/* Side-by-Side County Pickers + Swap Button */}
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-2.5 sm:gap-3 items-end">
              <div className="rounded-xl border border-gold/40 bg-gold/[0.06] p-2.5 sm:p-3">
                <label className="text-[10px] sm:text-xs font-bold text-gold uppercase tracking-wider block mb-1.5">
                  County A ({String(countyA.code).padStart(3, "0")})
                </label>
                <CustomSelect
                  value={compareSlugA}
                  onValueChange={(val) => setCompareSlugA(val)}
                  options={enrichedCounties.map((c) => ({
                    value: c.slug,
                    label: `${String(c.code).padStart(3, "0")} — ${c.name} County`,
                  }))}
                  className="w-full text-xs sm:text-sm"
                />
              </div>

              <div className="flex justify-center sm:pb-1">
                <button
                  type="button"
                  onClick={() => {
                    const prevA = compareSlugA;
                    setCompareSlugA(compareSlugB);
                    setCompareSlugB(prevA);
                  }}
                  aria-label="Swap County A and County B"
                  title="Swap counties"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-bg-elevated hover:border-gold/60 hover:text-gold text-text-secondary px-3 py-1.5 sm:p-2.5 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <ArrowLeftRight className="w-4 h-4 text-gold" />
                  <span className="sm:hidden">Swap Counties</span>
                </button>
              </div>

              <div className="rounded-xl border border-kenya-green-light/40 bg-kenya-green-light/[0.06] p-2.5 sm:p-3">
                <label className="text-[10px] sm:text-xs font-bold text-kenya-green-light uppercase tracking-wider block mb-1.5">
                  County B ({String(countyB.code).padStart(3, "0")})
                </label>
                <CustomSelect
                  value={compareSlugB}
                  onValueChange={(val) => setCompareSlugB(val)}
                  options={enrichedCounties.map((c) => ({
                    value: c.slug,
                    label: `${String(c.code).padStart(3, "0")} — ${c.name} County`,
                  }))}
                  className="w-full text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Head-to-Head Summary Strip */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-text-muted mr-1">
                Leads:
              </span>
              {summaryLeaders.map((item) => {
                const winner =
                  item.a > item.b ? "A" : item.b > item.a ? "B" : "tie";
                const winnerName =
                  winner === "A"
                    ? countyA.name
                    : winner === "B"
                    ? countyB.name
                    : "Tie";
                return (
                  <span
                    key={item.label}
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] sm:text-xs font-semibold border ${
                      winner === "A"
                        ? "border-gold/40 bg-gold/10 text-gold"
                        : winner === "B"
                        ? "border-kenya-green-light/40 bg-kenya-green-light/10 text-kenya-green-light"
                        : "border-border bg-bg-elevated text-text-secondary"
                    }`}
                  >
                    <span className="text-text-muted font-medium">{item.label}:</span>
                    <span>{winnerName}</span>
                  </span>
                );
              })}
            </div>

            {/* 5 Grouped Comparison Sections */}
            <div className="space-y-4">
              {compareSections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-xl border border-border/80 bg-bg-elevated/30 overflow-hidden"
                >
                  <div className="px-3.5 sm:px-4 py-2.5 bg-bg-elevated/70 border-b border-border flex items-center justify-between gap-2">
                    <h3 className="text-xs sm:text-sm font-bold font-[family-name:var(--font-outfit)] text-text-primary">
                      {section.title}
                    </h3>
                    <div className="hidden sm:grid grid-cols-2 gap-4 w-1/2 text-[11px] font-bold uppercase tracking-wider text-right">
                      <span className="text-gold truncate">{countyA.name}</span>
                      <span className="text-kenya-green-light truncate">{countyB.name}</span>
                    </div>
                  </div>

                  {/* Mobile column header */}
                  <div className="grid grid-cols-[1.15fr_1fr_1fr] sm:hidden gap-2 px-3.5 py-1.5 border-b border-border/60 text-[10px] font-bold uppercase tracking-wider">
                    <span className="text-text-muted">Metric</span>
                    <span className="text-gold text-right truncate">{countyA.name}</span>
                    <span className="text-kenya-green-light text-right truncate">{countyB.name}</span>
                  </div>

                  <div className="divide-y divide-border/50">
                    {section.rows.map((row) => {
                      const hasNumeric =
                        typeof row.numA === "number" && typeof row.numB === "number";
                      const totalNum = hasNumeric ? (row.numA || 0) + (row.numB || 0) : 0;
                      const pctA =
                        totalNum > 0
                          ? (row.numA || 0) === 0
                            ? 0
                            : (row.numB || 0) === 0
                            ? 100
                            : Math.max(8, Math.min(92, ((row.numA || 0) / totalNum) * 100))
                          : 0;
                      const aLeads = hasNumeric && (row.numA || 0) > (row.numB || 0);
                      const bLeads = hasNumeric && (row.numB || 0) > (row.numA || 0);

                      return (
                        <div
                          key={row.label}
                          className="px-3.5 sm:px-4 py-2.5 hover:bg-white/[0.02] transition-colors"
                        >
                          <div className="grid grid-cols-[1.15fr_1fr_1fr] sm:grid-cols-[1fr_0.5fr_0.5fr] gap-2 sm:gap-4 items-baseline text-xs sm:text-sm">
                            <span className="text-text-muted font-medium leading-snug">
                              {row.label}
                            </span>
                            <span
                              className={`text-right font-semibold tabular-nums leading-snug break-words ${
                                aLeads ? "text-gold" : "text-text-primary"
                              }`}
                            >
                              {row.a}
                            </span>
                            <span
                              className={`text-right font-semibold tabular-nums leading-snug break-words ${
                                bLeads ? "text-kenya-green-light" : "text-text-primary"
                              }`}
                            >
                              {row.b}
                            </span>
                          </div>
                          {hasNumeric && totalNum > 0 && (
                            <div
                              className="mt-1.5 h-1.5 w-full rounded-full overflow-hidden flex gap-0.5 bg-bg-elevated"
                              aria-hidden="true"
                            >
                              {pctA > 0 && (
                                <div
                                  className="h-full bg-gold rounded-l-full transition-[width] duration-200"
                                  style={{ width: `${pctA}%` }}
                                />
                              )}
                              {100 - pctA > 0 && (
                                <div
                                  className="h-full bg-kenya-green-light rounded-r-full transition-[width] duration-200"
                                  style={{ width: `${100 - pctA}%` }}
                                />
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Profile Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
              <Link
                href={`/county/${countyA.slug}/`}
                prefetch={false}
                className="flex items-center justify-between rounded-xl border border-gold/40 bg-gold/10 hover:bg-gold/15 px-4 py-3 text-xs sm:text-sm font-bold text-gold transition-colors"
              >
                <span>Explore {countyA.name} →</span>
                <span className="text-[11px] font-mono opacity-80">
                  #{String(countyA.code).padStart(3, "0")}
                </span>
              </Link>
              <Link
                href={`/county/${countyB.slug}/`}
                prefetch={false}
                className="flex items-center justify-between rounded-xl border border-kenya-green-light/40 bg-kenya-green-light/10 hover:bg-kenya-green-light/15 px-4 py-3 text-xs sm:text-sm font-bold text-kenya-green-light transition-colors"
              >
                <span>Explore {countyB.name} →</span>
                <span className="text-[11px] font-mono opacity-80">
                  #{String(countyB.code).padStart(3, "0")}
                </span>
              </Link>
            </div>
          </div>
        );
      })()}

      {filtered.length === 0 && activeTab !== "compare" && (
        <div data-adsense-pause="true" className="text-center py-16">
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
                <summary className="px-4 py-3 cursor-pointer text-xs sm:text-sm font-semibold text-text-primary hover:text-gold list-none flex items-center justify-between gap-2">
                  <span className="min-w-0 flex-1">{faq.question}</span>
                  <span className="text-text-muted shrink-0 group-open:rotate-180 transition-transform">▾</span>
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
