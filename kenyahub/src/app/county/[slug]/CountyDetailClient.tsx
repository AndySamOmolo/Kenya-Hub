"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import DynamicIcon from "@/components/ui/DynamicIcon";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTH_KEYS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

const URBAN_UTILITIES: Record<
  string,
  {
    waterProvider: string;
    waterPaybill: string;
    waterPortal: string;
    waterNote: string;
    hudumaCentres: string[];
    civicServices: { label: string; detail: string; href?: string }[];
  }
> = {
  nairobi: {
    waterProvider: "Nairobi City Water & Sewerage Company (NCWSC)",
    waterPaybill: "M-Pesa PayBill 444400",
    waterPortal: "https://www.nairobiwater.co.ke",
    waterNote: "WASREB-approved domestic block tariffs & sewer line billing across 17 Nairobi sub-counties.",
    hudumaCentres: [
      "Huduma Centre GPO (Teleposta Towers, Kenyatta Ave)",
      "Huduma Centre City Square (Haile Selassie Ave)",
      "Huduma Centre Makadara (Jogoo Rd)",
      "Huduma Centre Kibra (Kibra DC Grounds)",
      "Huduma Centre Eastleigh (1st Avenue)",
    ],
    civicServices: [
      { label: "Nairobi Pay (County e-Services)", detail: "Parking, single business permits & land rates (*647# / nairobiservices.go.ke)" },
      { label: "Nairobi Water Bill Calculator", detail: "Estimate monthly NCWSC water & sewerage charges", href: "/tools/water-bill-calculator/" },
      { label: "KPLC Prepaid Token Calculator", detail: "EPRA 2026 Domestic Lifeline & Ordinary kWh breakdown", href: "/tools/kplc-token-calculator/" },
      { label: "Nairobi Matatu Routes & Stages", detail: "32 mapped corridors, stages & peak/off-peak fares", href: "/matatu/nairobi/" },
    ],
  },
  mombasa: {
    waterProvider: "Mombasa Water Supply & Sanitation Company (MOWASSCO)",
    waterPaybill: "M-Pesa PayBill 888885",
    waterPortal: "https://www.mombasawater.co.ke",
    waterNote: "Island & mainland water distribution (Nyali, Bamburi, Kisauni, Changamwe, Likoni).",
    hudumaCentres: [
      "Huduma Centre Mombasa GPO (Digo Road / Treasury Square)",
      "Changamwe Sub-County Service Desk",
      "Likoni Sub-County Service Desk",
      "Kisauni / Nyali Civic Offices",
    ],
    civicServices: [
      { label: "Mombasa County e-Services", detail: "Parking, business permits, cess & property rates (eservices.mombasa.go.ke)" },
      { label: "Water Bill Calculator", detail: "Compare county water & sewerage tariffs", href: "/tools/water-bill-calculator/" },
      { label: "KPLC Prepaid Token Calculator", detail: "EPRA 2026 Domestic Lifeline & Ordinary kWh breakdown", href: "/tools/kplc-token-calculator/" },
      { label: "Mombasa Matatu & Ferry Routes", detail: "10 coastal corridors including Nyali, Bamburi & Likoni Ferry", href: "/matatu/mombasa/" },
    ],
  },
};

export interface CountyDetailProps {
  county: any;
  budget: any;
  budgetFiscalYear: string;
  rainfall: any;
  countySoils: any[];
  countyHospitals: any[];
  countyPostalCodes: any[];
  countySchools: any[];
  countyParks: any[];
  countyForests: any[];
  countyAgrovets: any[];
  countyLanguages: any[];
  otherCounties: any[];
  agriBenchmarks: {
    cropSource: string;
    fertilizerRegSystem: string;
    crops: any[];
    fertilizers: any[];
    livestock: any[];
  };
}

export default function CountyDetailClient({
  county,
  budget,
  budgetFiscalYear,
  rainfall,
  countySoils,
  countyHospitals,
  countyPostalCodes,
  countySchools,
  countyParks,
  countyForests,
  countyAgrovets,
  countyLanguages,
  otherCounties,
  agriBenchmarks,
}: CountyDetailProps) {
  const [constSort, setConstSort] = useState<"order" | "alpha">("order");

  const perCapitaEquitableShare = useMemo(() => {
    if (!budget || !county?.population) return 0;
    return Math.round((budget.allocation * 1_000_000) / county.population);
  }, [budget, county]);

  const osrSharePct = useMemo(() => {
    if (!budget || !budget.totalRevenue) return 0;
    return Math.round((budget.ownSourceRevenue / budget.totalRevenue) * 1000) / 10;
  }, [budget]);

  const sortedConstituencies = useMemo(() => {
    if (!county) return [];
    const indexed = county.constituencies.map((name: string, i: number) => ({ name, num: i + 1 }));
    if (constSort === "alpha") {
      return [...indexed].sort((a, b) => a.name.localeCompare(b.name));
    }
    return indexed;
  }, [county, constSort]);

  const codeStr = county.code.toString().padStart(3, "0");
  const density = county.area > 0 ? Math.round(county.population / county.area) : 0;
  const popPerConstituency =
    county.constituencies.length > 0
      ? Math.round(county.population / county.constituencies.length)
      : county.population;

  // County-specific FAQs
  const countyFaqs = [
    {
      question: `Who is the Governor, Senator, and Woman Representative of ${county.name} County?`,
      answer: `The Governor of ${county.name} County (County #${codeStr}) is ${county.governor} and the Deputy Governor is ${county.deputyGovernor}. The County Senator is ${county.senator} and the County Woman Representative is ${county.womenRep}. The county headquarters is located in ${county.capital}.`,
    },
    {
      question: `How many constituencies are in ${county.name} County?`,
      answer: `${county.name} County has ${county.constituencies.length} parliamentary constituencies (${county.constituencies.join(", ")}), representing an average of ${popPerConstituency.toLocaleString()} residents per Member of Parliament (MP) under the 2019 KNBS Census.`,
    },
    ...(budget
      ? [
          {
            question: `What is ${county.name} County's budget allocation for FY ${budgetFiscalYear}?`,
            answer: `In FY ${budgetFiscalYear}, ${county.name} County has an Equitable Share allocation of KES ${budget.allocation.toLocaleString()}M (approximately KES ${perCapitaEquitableShare.toLocaleString()} per resident) and projected Own-Source Revenue (OSR) of KES ${budget.ownSourceRevenue.toLocaleString()}M (${osrSharePct}% of total revenue of KES ${budget.totalRevenue.toLocaleString()}M), with a Controller of Budget absorption rate of ${budget.absorptionRate}%.`,
          },
        ]
      : []),
    ...(rainfall
      ? [
          {
            question: `What is the climate and annual rainfall in ${county.name} County?`,
            answer: `${county.name} County is classified under the ${rainfall.climateZone} agro-climatic zone and receives an average annual rainfall of ${rainfall.annualRainfall} mm. Long rains typically occur in ${rainfall.longRains}, short rains in ${rainfall.shortRains}, and the driest months are ${rainfall.drySeason}.`,
          },
        ]
      : []),
  ];

  const adminAreaSchema = {
    "@context": "https://schema.org",
    "@type": "AdministrativeArea",
    name: `${county.name} County`,
    identifier: codeStr,
    url: `https://kenyahub.me/county/${county.slug}/`,
    description: `${county.name} County (#${codeStr}) in Kenya. Capital: ${county.capital}. Population: ${county.population.toLocaleString()} (KNBS 2019 Census). Area: ${county.area.toLocaleString()} km².`,
    containedInPlace: {
      "@type": "Country",
      name: "Kenya",
    },
    containsPlace: county.constituencies.map((cName: string) => ({
      "@type": "AdministrativeArea",
      name: `${cName} Constituency`,
    })),
  };

  const govOrgSchema = {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    name: `County Government of ${county.name}`,
    url: county.website || `https://kenyahub.me/county/${county.slug}/`,
    telephone: county.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: county.capital,
      addressRegion: `${county.name} County`,
      addressCountry: "KE",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://kenyahub.me/" },
      { "@type": "ListItem", position: 2, name: "47 Counties Hub", item: "https://kenyahub.me/county/" },
      { "@type": "ListItem", position: 3, name: `${county.name} County`, item: `https://kenyahub.me/county/${county.slug}/` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: countyFaqs.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };

  return (
    <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-3 pb-6 sm:py-10 space-y-4 sm:space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(adminAreaSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(govOrgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumbs (Single-Line Scrollable on Mobile) */}
      <nav aria-label="Breadcrumb" className="flex flex-nowrap items-center gap-1.5 overflow-x-auto no-scrollbar whitespace-nowrap text-[11px] sm:text-xs text-text-muted micro-badge">
        <Link href="/" className="hover:text-gold transition-colors shrink-0">Home</Link>
        <svg className="w-3 h-3 text-border-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <Link href="/county/" className="hover:text-gold transition-colors shrink-0">47 Counties Hub</Link>
        <svg className="w-3 h-3 text-border-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-text-secondary font-medium shrink-0">{county.name} County (#{codeStr})</span>
      </nav>

      {/* Header */}
      <header className="bg-bg-card border border-border rounded-2xl p-3.5 sm:p-7">
        <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-5">
          <div className="w-11 h-11 sm:w-15 sm:h-15 rounded-xl sm:rounded-2xl bg-kenya-green/10 border border-kenya-green/30 flex items-center justify-center flex-shrink-0">
            <span className="text-base sm:text-2xl font-bold font-[family-name:var(--font-outfit)] text-kenya-green-light">
              {codeStr}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg sm:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-outfit)] text-text-primary leading-snug sm:leading-tight tracking-tight mb-1.5 sm:mb-2">
              {county.name} County Government
            </h1>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-text-secondary bg-bg-elevated border border-border rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 font-semibold micro-badge">
                HQ: <strong className="text-gold ml-0.5">{county.capital}</strong>
              </span>
              {rainfall && (
                <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-sky-light bg-sky/10 border border-sky/20 rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 font-semibold micro-badge">
                  {rainfall.climateZone} · {rainfall.annualRainfall} mm/yr
                </span>
              )}
              {county.website && (
                <a
                  href={county.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-gold bg-gold/10 border border-gold/20 hover:bg-gold/20 transition-colors rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 font-semibold micro-badge"
                >
                  County Portal ↗
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Compact Key Statistics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-border">
          <div className="bg-bg-elevated/60 border border-border/60 rounded-xl p-2 sm:p-3.5">
            <p className="text-[10px] sm:text-xs text-text-muted uppercase tracking-wider truncate compact-label">Population</p>
            <p className="text-sm sm:text-xl font-extrabold tabular-nums text-text-primary font-[family-name:var(--font-outfit)]">
              {county.population.toLocaleString()}
            </p>
          </div>
          <div className="bg-bg-elevated/60 border border-border/60 rounded-xl p-2 sm:p-3.5">
            <p className="text-[10px] sm:text-xs text-text-muted uppercase tracking-wider truncate compact-label">Land Area</p>
            <p className="text-sm sm:text-xl font-extrabold tabular-nums text-text-primary font-[family-name:var(--font-outfit)]">
              {county.area.toLocaleString()} <span className="text-[10px] sm:text-xs font-normal text-text-muted">km²</span>
            </p>
          </div>
          <div className="bg-bg-elevated/60 border border-border/60 rounded-xl p-2 sm:p-3.5">
            <p className="text-[10px] sm:text-xs text-text-muted uppercase tracking-wider truncate compact-label">Pop. Density</p>
            <p className="text-sm sm:text-xl font-extrabold tabular-nums text-sky-light font-[family-name:var(--font-outfit)]">
              {density.toLocaleString()} <span className="text-[10px] sm:text-xs font-normal text-text-muted">/km²</span>
            </p>
          </div>
          <div className="bg-bg-elevated/60 border border-border/60 rounded-xl p-2 sm:p-3.5">
            <p className="text-[10px] sm:text-xs text-text-muted uppercase tracking-wider truncate compact-label">Constituencies</p>
            <p className="text-sm sm:text-xl font-extrabold tabular-nums text-gold font-[family-name:var(--font-outfit)]">
              {county.constituencies.length}
            </p>
          </div>
        </div>
      </header>

      {/* Editorial County Devolution & Socio-Economic Profile */}
      <section className="bg-bg-card border border-border rounded-2xl p-5 sm:p-7 space-y-4">
        <h2 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2">
          <DynamicIcon emoji="📘" className="w-5 h-5 text-gold" /> Devolution, Fiscal &amp; Socio-Economic Overview: {county.name} County (#{codeStr})
        </h2>
        <div className="space-y-3 text-xs sm:text-sm text-text-secondary leading-relaxed">
          <p>
            <strong>{county.name} County</strong> (County Code <strong>#{codeStr}</strong> under the First Schedule of the Constitution of Kenya, 2010) is governed from its administrative headquarters in <strong>{county.capital}</strong>. According to the Kenya National Bureau of Statistics (KNBS) Population and Housing Census, the county has a resident population of <strong>{county.population.toLocaleString()}</strong> across a land area of <strong>{county.area.toLocaleString()} km²</strong> — resulting in a population settlement density of <strong>{density.toLocaleString()} residents per km²</strong> ({density > 400 ? "high-density urban/peri-urban and intensive agricultural settlement, significantly above Kenya's national average of 82 people/km²" : density >= 82 ? "moderate-density settlement above Kenya's national average of 82 people/km²" : "expansive low-density rangeland and conservation terrain below Kenya's national average of 82 people/km²"}).
          </p>
          <p>
            In the National Assembly and Senate, {county.name} County is represented by <strong>{county.constituencies.length} parliamentary constituencies</strong> ({county.constituencies.join(", ")}), averaging <strong>{popPerConstituency.toLocaleString()} residents per constituency MP</strong>, alongside County Senator <strong>{county.senator}</strong> and Woman Representative <strong>{county.womenRep}</strong>. The County Executive is headed by Governor <strong>{county.governor}</strong> and Deputy Governor <strong>{county.deputyGovernor}</strong>.
            {budget ? (
              <>
                {" "}Under the County Allocation of Revenue Act (CARA) for FY {budgetFiscalYear}, {county.name} receives <strong>KES {budget.allocation.toLocaleString()}M</strong> in Equitable Share transfers (equivalent to <strong>KES {perCapitaEquitableShare.toLocaleString()} per resident</strong>) and generates <strong>KES {budget.ownSourceRevenue.toLocaleString()}M</strong> in local Own-Source Revenue (<strong>{osrSharePct}%</strong> of its total KES {budget.totalRevenue.toLocaleString()}M resource envelope).
              </>
            ) : null}
          </p>
        </div>
      </section>

      {/* Elected Officials */}
      <section>
        <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-4 flex items-center gap-2">
          <DynamicIcon emoji="🏛️" className="w-5 h-5 text-kenya-red-light" /> Elected County Leadership
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-bg-card border border-border rounded-xl p-4">
            <p className="text-[0.65rem] text-text-muted uppercase tracking-wider mb-1">Governor</p>
            <p className="text-sm font-bold text-kenya-green-light">{county.governor}</p>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-4">
            <p className="text-[0.65rem] text-text-muted uppercase tracking-wider mb-1">Deputy Governor</p>
            <p className="text-sm font-semibold text-text-primary">{county.deputyGovernor}</p>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-4">
            <p className="text-[0.65rem] text-text-muted uppercase tracking-wider mb-1">Senator</p>
            <p className="text-sm font-semibold text-sky-light">{county.senator}</p>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-4">
            <p className="text-[0.65rem] text-text-muted uppercase tracking-wider mb-1">Woman Representative</p>
            <p className="text-sm font-semibold text-gold">{county.womenRep}</p>
          </div>
        </div>
      </section>

      {/* FY 2025/26 County Budget & Absorption */}
      {budget && (
        <section>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2">
              <DynamicIcon emoji="📊" className="w-5 h-5 text-gold" /> FY {budgetFiscalYear} Budget &amp; Fiscal Performance
            </h2>
            <Link href="/county/" className="text-xs font-semibold text-gold hover:underline">
              Compare All 47 Budgets →
            </Link>
          </div>
          <div className="bg-bg-card border border-border rounded-2xl p-3.5 sm:p-6 space-y-3 sm:space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
              <div className="bg-bg-elevated/60 border border-border/50 rounded-xl p-2 sm:p-3.5">
                <p className="text-[10px] sm:text-xs text-text-muted uppercase truncate compact-label">Equitable Share</p>
                <p className="text-sm sm:text-base font-extrabold tabular-nums text-text-primary mt-0.5">
                  KES {budget.allocation.toLocaleString()}M
                </p>
              </div>
              <div className="bg-bg-elevated/60 border border-border/50 rounded-xl p-2 sm:p-3.5">
                <p className="text-[10px] sm:text-xs text-text-muted uppercase truncate compact-label">Per-Capita</p>
                <p className="text-sm sm:text-base font-extrabold tabular-nums text-kenya-green-light mt-0.5">
                  KES {perCapitaEquitableShare.toLocaleString()}
                </p>
              </div>
              <div className="bg-bg-elevated/60 border border-border/50 rounded-xl p-2 sm:p-3.5">
                <p className="text-[10px] sm:text-xs text-text-muted uppercase truncate compact-label">Own-Source (OSR)</p>
                <p className="text-sm sm:text-base font-extrabold tabular-nums text-gold mt-0.5 whitespace-nowrap">
                  KES {budget.ownSourceRevenue.toLocaleString()}M
                </p>
                <p className="text-[10px] sm:text-xs text-text-muted mt-0.5 truncate compact-label">{osrSharePct}% of rev</p>
              </div>
              <div className="bg-bg-elevated/60 border border-border/50 rounded-xl p-2 sm:p-3.5">
                <p className="text-[10px] sm:text-xs text-text-muted uppercase truncate compact-label">Total Revenue</p>
                <p className="text-sm sm:text-base font-extrabold tabular-nums text-sky-light mt-0.5">
                  KES {budget.totalRevenue.toLocaleString()}M
                </p>
              </div>
              <div className="bg-bg-elevated/60 border border-border/50 rounded-xl p-2 sm:p-3.5 col-span-2 sm:col-span-1">
                <p className="text-[10px] sm:text-xs text-text-muted uppercase truncate compact-label">Expenditure</p>
                <p className="text-sm sm:text-base font-extrabold tabular-nums text-kenya-green-light mt-0.5">
                  KES {budget.expenditure.toLocaleString()}M
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap justify-between gap-2 text-xs mb-1.5">
                <span className="text-text-secondary font-medium">Controller of Budget Absorption Rate</span>
                <span className="font-bold text-kenya-green-light">{budget.absorptionRate}% Absorbed</span>
              </div>
              <div className="h-2.5 w-full bg-bg-elevated rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-kenya-green to-gold rounded-full"
                  style={{ width: `${Math.min(100, budget.absorptionRate)}%` }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Climate, Rainy Seasons & 12-Month Rainfall Chart */}
      {rainfall && (
        <section>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2">
              <DynamicIcon emoji="🌧️" className="w-5 h-5 text-sky-light" /> Climate, Rainy Seasons &amp; 12-Month Rainfall ({rainfall.annualRainfall} mm/yr)
            </h2>
            <Link href="/county/" className="text-xs font-semibold text-gold hover:underline">
              47-County Climate Hub →
            </Link>
          </div>
          <div className="bg-bg-card border border-border rounded-2xl p-5 sm:p-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-bg-elevated/60 border border-border/50 rounded-xl p-3">
                <span className="text-[0.625rem] text-text-muted uppercase block">Climate Zone</span>
                <span className="font-bold text-sky-light text-sm">{rainfall.climateZone}</span>
              </div>
              <div className="bg-bg-elevated/60 border border-border/50 rounded-xl p-3">
                <span className="text-[0.625rem] text-text-muted uppercase block">Long Rains (MAM)</span>
                <span className="font-semibold text-kenya-green-light text-sm">{rainfall.longRains}</span>
              </div>
              <div className="bg-bg-elevated/60 border border-border/50 rounded-xl p-3">
                <span className="text-[0.625rem] text-text-muted uppercase block">Short Rains (OND)</span>
                <span className="font-semibold text-gold text-sm">{rainfall.shortRains}</span>
              </div>
              <div className="bg-bg-elevated/60 border border-border/50 rounded-xl p-3">
                <span className="text-[0.625rem] text-text-muted uppercase block">Dry Season</span>
                <span className="font-semibold text-text-primary text-sm">{rainfall.drySeason}</span>
              </div>
            </div>

            {(rainfall.monthly || rainfall.monthlyAvg) && (
              <div>
                <p className="text-xs text-text-muted mb-2 font-medium">
                  Average Monthly Rainfall (mm) — Kenya Meteorological Department
                </p>
                <div className="grid grid-cols-6 sm:grid-cols-12 gap-1.5">
                  {MONTH_KEYS.map((mk, idx) => {
                    const mm = rainfall.monthly?.[mk] ?? rainfall.monthlyAvg?.[idx] ?? 0;
                    return (
                      <div
                        key={mk}
                        className={`rounded-lg p-2 text-center border ${
                          mm >= 150
                            ? "bg-sky/20 border-sky/40 text-sky-light"
                            : mm >= 70
                            ? "bg-sky/10 border-sky/20 text-text-primary"
                            : "bg-bg-elevated border-border/50 text-text-secondary dark:text-[#d4ccc0]"
                        }`}
                      >
                        <div className="text-[0.625rem] uppercase font-semibold">{MONTHS[idx]}</div>
                        <div className="text-xs font-bold mt-0.5">{mm}</div>
                        <div className="text-[0.55rem] opacity-75">mm</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Constituencies */}
      <section>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2">
            <DynamicIcon emoji="🗳️" className="w-5 h-5 text-sky-light" /> Parliamentary Constituencies ({county.constituencies.length})
          </h2>
          <div className="flex gap-1.5">
            {([
              { id: "order", label: "# Order" },
              { id: "alpha", label: "A–Z" },
            ] as const).map((opt) => (
              <button
                key={opt.id}
                type="button"
                aria-pressed={constSort === opt.id}
                onClick={() => setConstSort(opt.id)}
                className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                  constSort === opt.id
                    ? "bg-gold text-kenya-black"
                    : "bg-bg-card border border-border text-text-secondary"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          {sortedConstituencies.map((c: { name: string; num: number }) => (
            <div
              key={c.num}
              className="flex items-center gap-3 px-4 py-3 bg-bg-card border border-border rounded-xl text-sm text-text-primary font-medium"
            >
              <span className="w-6 h-6 rounded-full bg-gold/15 text-gold text-xs font-bold flex items-center justify-center shrink-0">
                {c.num}
              </span>
              <span>{c.name} Constituency</span>
            </div>
          ))}
        </div>
      </section>

      {/* Agricultural Soils & Recommended Crops */}
      {countySoils.length > 0 && (
        <section>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2">
              <DynamicIcon emoji="🌱" className="w-5 h-5 text-kenya-green-light" /> Agricultural Soils &amp; Best Crops in {county.name}
            </h2>
            <Link href="/county/" className="text-xs font-semibold text-gold hover:underline">
              47 Counties Hub →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {countySoils.map((soil: any, idx: number) => (
              <div key={idx} className="bg-bg-card border border-border rounded-xl p-5 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-sm font-bold text-text-primary">{soil.name}</h3>
                  <span className="px-2 py-0.5 text-[0.65rem] font-bold rounded bg-gold/15 text-gold">
                    pH {soil.pH || soil.ph} · {soil.fertility} Fertility
                  </span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">{soil.description || soil.characteristics}</p>
                <p className="text-xs text-text-muted">
                  <strong className="text-kenya-green-light">Best Crops: </strong>
                  {(soil.bestCrops || []).filter((crop: string) => !/prosopis/i.test(crop)).join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SHA / SHIF Accredited Hospitals & Postal Codes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SHA Hospitals */}
        <section className="bg-bg-card border border-border rounded-2xl p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-base font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2">
              <DynamicIcon emoji="🏥" className="w-5 h-5 text-kenya-green-light" /> SHA / SHIF Hospitals ({countyHospitals.length})
            </h2>
            <Link href="/county/" className="text-xs font-semibold text-gold hover:underline">
              All Facilities →
            </Link>
          </div>
          {countyHospitals.length > 0 ? (
            <div className="space-y-2.5">
              {countyHospitals.map((h: any, idx: number) => (
                <div key={idx} className="p-3 rounded-xl bg-bg-elevated/60 border border-border/60 flex flex-wrap items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-text-primary">{h.name}</p>
                    <p className="text-[0.6875rem] text-text-muted">
                      {h.type} · {h.services?.length ? h.services.slice(0, 4).join(", ") : `${h.subcounty || county.name} Sub-County · SHA Accredited`}
                    </p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[0.65rem] font-bold bg-gold/15 text-gold shrink-0">
                    Level {h.level}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-text-muted">
              All sub-county and county referral hospitals in {county.name} are accredited under SHA / SHIF. Search the full facility directory for Level 2–6 clinics.
            </p>
          )}
        </section>

        {/* Postal Codes */}
        <section className="bg-bg-card border border-border rounded-2xl p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-base font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2">
              <DynamicIcon emoji="📮" className="w-5 h-5 text-gold" /> Posta Postal Codes ({countyPostalCodes.length})
            </h2>
            <Link href="/county/" className="text-xs font-semibold text-gold hover:underline">
              47 Counties Directory →
            </Link>
          </div>
          {countyPostalCodes.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {countyPostalCodes.map((p: any, idx: number) => (
                <div key={idx} className="p-2.5 rounded-lg bg-bg-elevated/60 border border-border/60">
                  <span className="font-mono text-xs font-bold text-gold block">{p.code}</span>
                  <span className="text-xs text-text-primary break-words block">{p.town}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-text-muted">
              Posta Kenya branch postal codes serving {county.capital} and sub-county centres in {county.name} County.
            </p>
          )}
        </section>
      </div>

      {/* Education, Wildlife, Forests, Agrovets & Languages */}
      {(countySchools.length > 0 ||
        countyParks.length > 0 ||
        countyForests.length > 0 ||
        countyAgrovets.length > 0 ||
        countyLanguages.length > 0) && (
        <section className="bg-bg-card border border-border rounded-2xl p-5 sm:p-6 space-y-5">
          <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">
            Schools, Conservation, Agrovets &amp; Languages in {county.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {countySchools.length > 0 && (
              <div className="bg-bg-elevated/50 border border-border/60 rounded-xl p-4 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-bold text-gold uppercase tracking-wider inline-flex items-center gap-1.5"><DynamicIcon emoji="🏆" className="w-3.5 h-3.5" /> Top KCSE Schools</span>
                  <Link href="/tools/kcse-grade-calculator/" className="text-gold hover:underline">KCSE Calculator →</Link>
                </div>
                {countySchools.map((s: any) => (
                  <div key={s.name} className="flex flex-wrap justify-between gap-x-3 gap-y-0.5 text-text-secondary">
                    <span className="font-medium text-text-primary">#{s.rank} {s.name}</span>
                    <span className="font-mono text-kenya-green-light">{s.meanScore.toFixed(2)} ({s.aGrades} As)</span>
                  </div>
                ))}
              </div>
            )}

            {(countyParks.length > 0 || countyForests.length > 0) && (
              <div className="bg-bg-elevated/50 border border-border/60 rounded-xl p-4 space-y-2">
                <span className="font-bold text-kenya-green-light uppercase tracking-wider block">
                  <span className="inline-flex items-center gap-1.5"><DynamicIcon emoji="🦁" className="w-3.5 h-3.5" /> Parks &amp; Gazetted Forests</span>
                </span>
                {countyParks.map((p: any) => (
                  <div key={p.name} className="flex flex-wrap justify-between gap-x-3 gap-y-0.5">
                    <span className="font-medium text-text-primary">{p.name} ({p.type})</span>
                    <span className="text-text-muted">{p.sizeKm2} km²</span>
                  </div>
                ))}
                {countyForests.map((f: any) => (
                  <div key={f.name} className="flex flex-wrap justify-between gap-x-3 gap-y-0.5">
                    <span className="font-medium text-text-primary">{f.name}</span>
                    <span className="text-text-muted">{f.sizeHa.toLocaleString()} ha</span>
                  </div>
                ))}
              </div>
            )}

            {countyAgrovets.length > 0 && (
              <div className="bg-bg-elevated/50 border border-border/60 rounded-xl p-4 space-y-2">
                <span className="font-bold text-gold uppercase tracking-wider block">
                  <span className="inline-flex items-center gap-1.5"><DynamicIcon emoji="🏪" className="w-3.5 h-3.5" /> Licensed Agrovets in {county.name}</span>
                </span>
                {countyAgrovets.map((a: any) => (
                  <div key={a.name} className="flex flex-wrap justify-between gap-x-3 gap-y-0.5">
                    <span className="font-medium text-text-primary">{a.name} — {a.town}</span>
                    <span className="text-text-muted">{a.phone}</span>
                  </div>
                ))}
              </div>
            )}

            {countyLanguages.length > 0 && (
              <div className="bg-bg-elevated/50 border border-border/60 rounded-xl p-4 space-y-2">
                <span className="font-bold text-sky-light uppercase tracking-wider block">
                  <span className="inline-flex items-center gap-1.5"><DynamicIcon emoji="🗣️" className="w-3.5 h-3.5" /> Local Languages Spoken</span>
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {countyLanguages.map((l: any) => (
                    <span key={l.name} className="px-2.5 py-1 rounded bg-bg-card border border-border text-text-primary">
                      {l.name} ({l.family})
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* County FAQs */}
      <section>
        <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-4">
          Frequently Asked Questions — {county.name} County
        </h2>
        <div className="space-y-3">
          {countyFaqs.map((faq, idx) => (
            <details key={idx} open={idx < 3} className="group bg-bg-card border border-border rounded-xl overflow-hidden">
              <summary className="px-5 py-4 cursor-pointer text-sm font-semibold text-text-primary hover:text-gold list-none flex items-center justify-between gap-2">
                <span className="min-w-0 flex-1">{faq.question}</span>
                <span className="text-text-muted shrink-0 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="px-5 pb-4 pt-2 text-sm text-text-secondary leading-relaxed border-t border-border">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Contact Info & Other Counties */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-bg-elevated border border-border rounded-2xl p-6 text-center flex flex-col justify-center items-center">
          <h2 className="text-base font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-1">
            Official {county.name} County Switchboard
          </h2>
          <p className="text-xs text-text-secondary mb-4">
            Headquarters: {county.capital} · County Code #{codeStr}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${county.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 bg-kenya-green text-white px-5 py-2.5 rounded-lg font-medium text-xs hover:bg-kenya-green-light transition-colors"
            >
              <DynamicIcon emoji="📞" className="w-3.5 h-3.5" /> Call {county.phone}
            </a>
            {county.website && (
              <a
                href={county.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-bg-card border border-border text-gold px-5 py-2.5 rounded-lg font-medium text-xs hover:border-gold transition-colors"
              >
                <DynamicIcon emoji="🌐" className="w-3.5 h-3.5" /> Visit {county.website.replace(/^https?:\/\//, "")} ↗
              </a>
            )}
          </div>
        </div>

        <div className="bg-bg-card border border-border rounded-2xl p-6">
          <h2 className="text-sm font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-3">
            Bordering Kenyan Counties
          </h2>
          <div className="grid grid-cols-2 gap-2.5">
            {otherCounties.map((oc) => (
              <Link
                key={oc.code}
                href={`/county/${oc.slug}/`}
                className="p-3 rounded-xl bg-bg-elevated/60 border border-border/60 hover:border-gold/50 transition-colors"
              >
                <span className="text-xs font-mono text-gold font-bold">
                  #{String(oc.code).padStart(3, "0")}
                </span>
                <p className="text-xs font-semibold text-text-primary break-words">{oc.name} County</p>
                <p className="text-[0.65rem] text-text-muted break-words">HQ: {oc.capital}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Urban Utilities & Civic Services (Nairobi & Mombasa) OR KALRO Agricultural Calendar (Rural/Peri-Urban Counties) */}
      {URBAN_UTILITIES[county.slug] ? (
        <section className="bg-bg-card border border-border rounded-2xl p-5 sm:p-7 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">
              Urban Utilities &amp; Civic Services in {county.name} City County
            </h2>
            <span className="text-xs text-gold font-semibold">
              Water Utility • Huduma Centres • City e-Services
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="rounded-xl bg-bg-elevated/60 border border-border p-4 space-y-2">
              <h3 className="font-bold text-text-primary">Water &amp; Sewerage Utility</h3>
              <p className="font-semibold text-sky-light">{URBAN_UTILITIES[county.slug].waterProvider}</p>
              <p className="text-text-secondary">{URBAN_UTILITIES[county.slug].waterPaybill}</p>
              <p className="text-text-muted leading-relaxed">{URBAN_UTILITIES[county.slug].waterNote}</p>
              <a
                href={URBAN_UTILITIES[county.slug].waterPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gold font-semibold hover:underline"
              >
                Visit Utility Portal ↗
              </a>
            </div>
            <div className="rounded-xl bg-bg-elevated/60 border border-border p-4 space-y-1.5">
              <h3 className="font-bold text-text-primary">Huduma Centres &amp; Civic Desks</h3>
              {URBAN_UTILITIES[county.slug].hudumaCentres.map((hc) => (
                <p key={hc} className="text-text-secondary flex items-start gap-1.5">
                  <span className="text-gold font-bold">•</span>
                  <span>{hc}</span>
                </p>
              ))}
            </div>
            <div className="rounded-xl bg-bg-elevated/60 border border-border p-4 space-y-2">
              <h3 className="font-bold text-text-primary">City Services &amp; Commuter Tools</h3>
              {URBAN_UTILITIES[county.slug].civicServices.map((svc) => (
                <div key={svc.label} className="text-text-secondary">
                  {svc.href ? (
                    <Link href={svc.href} className="font-semibold text-gold hover:underline block">
                      {svc.label} →
                    </Link>
                  ) : (
                    <p className="font-semibold text-text-primary">{svc.label}</p>
                  )}
                  <p className="text-[0.6875rem] text-text-muted">{svc.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
      <section className="bg-bg-card border border-border rounded-2xl p-5 sm:p-7 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">
            KALRO Crop Planting Calendar, NCPB Fertilizer Subsidy &amp; Livestock Markets
          </h2>
          <span className="text-xs text-gold font-semibold">
            {agriBenchmarks.cropSource} • {agriBenchmarks.fertilizerRegSystem}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="rounded-xl bg-bg-elevated/60 border border-border p-4 space-y-1.5">
            <h3 className="font-bold text-text-primary">Staple &amp; Cash Crops</h3>
            {agriBenchmarks.crops.map((crop) => (
              <p key={crop.name} className="text-text-secondary">
                <strong className="text-gold">{crop.name} ({crop.category}):</strong> {crop.maturityDays}
              </p>
            ))}
          </div>
          <div className="rounded-xl bg-bg-elevated/60 border border-border p-4 space-y-1.5">
            <h3 className="font-bold text-text-primary">NCPB e-Voucher Fertilizer (50kg)</h3>
            {agriBenchmarks.fertilizers.map((fert) => (
              <p key={fert.name} className="text-text-secondary flex flex-wrap justify-between gap-2">
                <span>{fert.name}</span>
                <strong className="text-kenya-green-light">KES {fert.subsidizedPrice.toLocaleString()}</strong>
              </p>
            ))}
          </div>
          <div className="rounded-xl bg-bg-elevated/60 border border-border p-4 space-y-1.5">
            <h3 className="font-bold text-text-primary">NALMC Livestock Benchmarks</h3>
            {agriBenchmarks.livestock.map((lv) => (
              <p key={lv.type} className="text-text-secondary flex flex-wrap justify-between gap-2">
                <span>{lv.type}</span>
                <strong className="text-text-primary">
                  KES {(lv.prices[0]?.minPrice || 4000).toLocaleString()}–{(lv.prices[0]?.maxPrice || 15000).toLocaleString()}
                </strong>
              </p>
            ))}
          </div>
        </div>
      </section>
      )}
    </div>
  );
}