"use client";

import { use, useMemo, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import countiesData from "@/data/counties.json";
import budgetsData from "@/data/county-budgets.json";
import rainfallData from "@/data/rainfall-patterns.json";
import soilsData from "@/data/soil-types.json";
import hospitalsData from "@/data/nhif-hospitals.json";
import postalData from "@/data/postal-codes.json";
import rankingsData from "@/data/kcse-rankings.json";
import parksData from "@/data/national-parks.json";
import forestsData from "@/data/forest-reserves.json";
import agrovetsData from "@/data/agrovets.json";
import languagesData from "@/data/kenya-languages.json";
import DynamicIcon from "@/components/ui/DynamicIcon";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTH_KEYS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

export default function CountyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const county = countiesData.counties.find((c) => c.slug === slug);

  if (!county) {
    notFound();
  }

  const [constSort, setConstSort] = useState<"order" | "alpha">("order");
  const codeStr = county.code.toString().padStart(3, "0");
  const density = county.area > 0 ? Math.round(county.population / county.area) : 0;

  // 1. County Budget (FY 2025/26)
  const budget = useMemo(
    () =>
      ((budgetsData as any).budgets || []).find(
        (b: any) => b.code === county.code || b.county.toLowerCase() === county.name.toLowerCase()
      ),
    [county]
  );

  // 2. County Rainfall & Climate
  const rainfall = useMemo(
    () =>
      ((rainfallData as any).counties || []).find(
        (r: any) => r.code === county.code || r.name.toLowerCase() === county.name.toLowerCase()
      ),
    [county]
  );

  // 3. Matching Agricultural Soil Types
  const countySoils = useMemo(
    () =>
      ((soilsData as any).soilTypes || []).filter((s: any) =>
        (s.whereFound || []).some((w: string) =>
          w.toLowerCase().includes(county.name.toLowerCase())
        )
      ),
    [county]
  );

  // 4. SHA / SHIF Accredited Hospitals in County
  const countyHospitals = useMemo(
    () =>
      ((hospitalsData as any).hospitals || []).filter(
        (h: any) => h.county.toLowerCase() === county.name.toLowerCase()
      ),
    [county]
  );

  // 5. Posta Kenya Postal Codes in County
  const countyPostalCodes = useMemo(
    () =>
      ((postalData as any).codes || []).filter(
        (p: any) => p.county.toLowerCase() === county.name.toLowerCase()
      ),
    [county]
  );

  // 6. Top KCSE Schools in County
  const countySchools = useMemo(
    () =>
      ((rankingsData as any).schools || []).filter(
        (s: any) => s.county.toLowerCase() === county.name.toLowerCase()
      ),
    [county]
  );

  // 7. National Parks, Forest Reserves & Agrovets in County
  const countyParks = useMemo(
    () =>
      ((parksData as any).parks || []).filter((p: any) =>
        p.county.toLowerCase().includes(county.name.toLowerCase())
      ),
    [county]
  );

  const countyForests = useMemo(
    () =>
      ((forestsData as any).forests || []).filter((f: any) =>
        f.county.toLowerCase().includes(county.name.toLowerCase())
      ),
    [county]
  );

  const countyAgrovets = useMemo(
    () =>
      ((agrovetsData as any).agrovets || []).filter(
        (a: any) => a.county.toLowerCase() === county.name.toLowerCase()
      ),
    [county]
  );

  // 8. Languages spoken in County
  const countyLanguages = useMemo(
    () =>
      ((languagesData as any).languages || []).filter((l: any) =>
        (l.counties || []).some((cn: string) =>
          cn.toLowerCase().includes(county.name.toLowerCase())
        )
      ),
    [county]
  );

  const sortedConstituencies = useMemo(() => {
    const indexed = county.constituencies.map((name, i) => ({ name, num: i + 1 }));
    if (constSort === "alpha") {
      return [...indexed].sort((a, b) => a.name.localeCompare(b.name));
    }
    return indexed;
  }, [county.constituencies, constSort]);

  // Neighboring / Other Counties for internal linking
  const otherCounties = useMemo(() => {
    const idx = countiesData.counties.findIndex((c) => c.code === county.code);
    const list = [];
    for (let offset = 1; offset <= 4; offset++) {
      list.push(countiesData.counties[(idx + offset) % countiesData.counties.length]);
    }
    return list;
  }, [county.code]);

  // County-specific FAQs
  const countyFaqs = [
    {
      question: `Who is the Governor, Senator, and Woman Representative of ${county.name} County?`,
      answer: `The Governor of ${county.name} County (County #${codeStr}) is ${county.governor} and the Deputy Governor is ${county.deputyGovernor}. The County Senator is ${county.senator} and the County Woman Representative is ${county.womenRep}. The county headquarters is located in ${county.capital}.`,
    },
    {
      question: `How many constituencies are in ${county.name} County?`,
      answer: `${county.name} County has ${county.constituencies.length} parliamentary constituencies: ${county.constituencies.join(", ")}.`,
    },
    ...(budget
      ? [
          {
            question: `What is ${county.name} County's budget allocation for FY ${(budgetsData as any).fiscalYear || "2025/26"}?`,
            answer: `In FY ${(budgetsData as any).fiscalYear || "2025/26"}, ${county.name} County has an Equitable Share allocation of KES ${budget.allocation.toLocaleString()} Million and projected Own-Source Revenue (OSR) of KES ${budget.ownSourceRevenue.toLocaleString()} Million (Total Revenue: KES ${budget.totalRevenue.toLocaleString()} Million), with a budget absorption rate of ${budget.absorptionRate}%.`,
          },
        ]
      : []),
    ...(rainfall
      ? [
          {
            question: `What is the climate and annual rainfall in ${county.name} County?`,
            answer: `${county.name} County is classified under the ${rainfall.climateZone} zone and receives an average annual rainfall of ${rainfall.annualRainfall} mm. Long rains typically occur in ${rainfall.longRains}, short rains in ${rainfall.shortRains}, and the driest months are ${rainfall.drySeason}.`,
          },
        ]
      : []),
  ];

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
    <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 py-4 sm:py-10 space-y-5 sm:space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(govOrgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1.5 text-xs text-text-muted">
        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
        <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <Link href="/county/" className="hover:text-gold transition-colors">47 Counties Hub</Link>
        <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-text-secondary break-words">{county.name} County (#{codeStr})</span>
      </nav>

      {/* Header */}
      <header className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-kenya-green/10 border border-kenya-green/30 flex items-center justify-center flex-shrink-0">
            <span className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-kenya-green-light">
              {codeStr}
            </span>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-outfit)] text-text-primary leading-tight tracking-tight mb-2">
              {county.name} County Government
            </h1>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 text-xs text-text-secondary bg-bg-elevated border border-border rounded-full px-3 py-1 font-semibold">
                HQ Capital: <strong className="text-gold ml-1">{county.capital}</strong>
              </span>
              {rainfall && (
                <span className="inline-flex items-center gap-1 text-xs text-sky-light bg-sky/10 border border-sky/20 rounded-full px-3 py-1 font-semibold">
                  {rainfall.climateZone} · {rainfall.annualRainfall} mm/yr
                </span>
              )}
              {county.website && (
                <a
                  href={county.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-gold bg-gold/10 border border-gold/20 hover:bg-gold/20 transition-colors rounded-full px-3 py-1 font-semibold"
                >
                  Official County Portal ↗
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Key Statistics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-border">
          <div className="bg-bg-elevated/60 border border-border/60 rounded-xl p-3.5">
            <p className="text-[0.65rem] text-text-muted uppercase tracking-wider">Population (2019)</p>
            <p className="text-lg font-bold text-text-primary font-[family-name:var(--font-outfit)]">
              {county.population.toLocaleString()}
            </p>
          </div>
          <div className="bg-bg-elevated/60 border border-border/60 rounded-xl p-3.5">
            <p className="text-[0.65rem] text-text-muted uppercase tracking-wider">Land Area</p>
            <p className="text-lg font-bold text-text-primary font-[family-name:var(--font-outfit)]">
              {county.area.toLocaleString()} <span className="text-xs font-normal text-text-muted">km²</span>
            </p>
          </div>
          <div className="bg-bg-elevated/60 border border-border/60 rounded-xl p-3.5">
            <p className="text-[0.65rem] text-text-muted uppercase tracking-wider">Pop. Density</p>
            <p className="text-lg font-bold text-sky-light font-[family-name:var(--font-outfit)]">
              {density.toLocaleString()} <span className="text-xs font-normal text-text-muted">/km²</span>
            </p>
          </div>
          <div className="bg-bg-elevated/60 border border-border/60 rounded-xl p-3.5">
            <p className="text-[0.65rem] text-text-muted uppercase tracking-wider">Constituencies</p>
            <p className="text-lg font-bold text-gold font-[family-name:var(--font-outfit)]">
              {county.constituencies.length}
            </p>
          </div>
        </div>
      </header>

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
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2">
              <DynamicIcon emoji="📊" className="w-5 h-5 text-gold" /> FY {(budgetsData as any).fiscalYear || "2025/26"} Budget &amp; Fiscal Performance
            </h2>
            <Link href="/county/" className="text-xs font-semibold text-gold hover:underline">
              Compare All 47 Budgets →
            </Link>
          </div>
          <div className="bg-bg-card border border-border rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-bg-elevated/60 border border-border/50 rounded-xl p-3.5">
                <p className="text-[0.65rem] text-text-muted uppercase">Equitable Share</p>
                <p className="text-base font-bold text-text-primary mt-0.5">
                  KES {budget.allocation.toLocaleString()}M
                </p>
              </div>
              <div className="bg-bg-elevated/60 border border-border/50 rounded-xl p-3.5">
                <p className="text-[0.65rem] text-text-muted uppercase">Own-Source Revenue</p>
                <p className="text-base font-bold text-gold mt-0.5">
                  KES {budget.ownSourceRevenue.toLocaleString()}M
                </p>
              </div>
              <div className="bg-bg-elevated/60 border border-border/50 rounded-xl p-3.5">
                <p className="text-[0.65rem] text-text-muted uppercase">Total Revenue</p>
                <p className="text-base font-bold text-sky-light mt-0.5">
                  KES {budget.totalRevenue.toLocaleString()}M
                </p>
              </div>
              <div className="bg-bg-elevated/60 border border-border/50 rounded-xl p-3.5">
                <p className="text-[0.65rem] text-text-muted uppercase">Actual Expenditure</p>
                <p className="text-base font-bold text-kenya-green-light mt-0.5">
                  KES {budget.expenditure.toLocaleString()}M
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1.5">
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
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2">
              <DynamicIcon emoji="🌧️" className="w-5 h-5 text-sky-light" /> Climate, Rainy Seasons &amp; 12-Month Rainfall ({rainfall.annualRainfall} mm/yr)
            </h2>
            <Link href="/tools/kenya-rainfall-patterns/" className="text-xs font-semibold text-gold hover:underline">
              National Rainfall Guide →
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

            {rainfall.monthly && (
              <div>
                <p className="text-xs text-text-muted mb-2 font-medium">
                  Average Monthly Rainfall (mm) — Kenya Meteorological Department
                </p>
                <div className="grid grid-cols-6 sm:grid-cols-12 gap-1.5">
                  {MONTH_KEYS.map((mk, idx) => {
                    const mm = rainfall.monthly[mk] || 0;
                    return (
                      <div
                        key={mk}
                        className={`rounded-lg p-2 text-center border ${
                          mm >= 150
                            ? "bg-sky/20 border-sky/40 text-sky-light"
                            : mm >= 70
                            ? "bg-sky/10 border-sky/20 text-text-primary"
                            : "bg-bg-elevated border-border/50 text-text-muted"
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
        <div className="flex items-center justify-between mb-4">
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
                onClick={() => setConstSort(opt.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
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
          {sortedConstituencies.map((c) => (
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
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2">
              <DynamicIcon emoji="🌱" className="w-5 h-5 text-kenya-green-light" /> Agricultural Soils &amp; Best Crops in {county.name}
            </h2>
            <Link href="/tools/crop-planting-calendar/" className="text-xs font-semibold text-gold hover:underline">
              Crop Planting Calendar →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {countySoils.map((soil: any, idx: number) => (
              <div key={idx} className="bg-bg-card border border-border rounded-xl p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-text-primary">{soil.name}</h3>
                  <span className="px-2 py-0.5 text-[0.65rem] font-bold rounded bg-gold/15 text-gold">
                    pH {soil.ph} · {soil.fertility} Fertility
                  </span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">{soil.characteristics}</p>
                <p className="text-xs text-text-muted">
                  <strong className="text-kenya-green-light">Best Crops: </strong>
                  {(soil.bestCrops || []).join(", ")}
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
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2">
              <DynamicIcon emoji="🏥" className="w-5 h-5 text-kenya-green-light" /> SHA / SHIF Hospitals ({countyHospitals.length})
            </h2>
            <Link href="/tools/nhif-hospital-finder/" className="text-xs font-semibold text-gold hover:underline">
              All Facilities →
            </Link>
          </div>
          {countyHospitals.length > 0 ? (
            <div className="space-y-2.5">
              {countyHospitals.map((h: any, idx: number) => (
                <div key={idx} className="p-3 rounded-xl bg-bg-elevated/60 border border-border/60 flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs font-bold text-text-primary">{h.name}</p>
                    <p className="text-[0.6875rem] text-text-muted">
                      {h.type} · {(h.services || []).slice(0, 4).join(", ")}
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
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2">
              <DynamicIcon emoji="📮" className="w-5 h-5 text-gold" /> Posta Postal Codes ({countyPostalCodes.length})
            </h2>
            <Link href="/tools/kenya-postal-codes/" className="text-xs font-semibold text-gold hover:underline">
              All Postal Codes →
            </Link>
          </div>
          {countyPostalCodes.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-64 overflow-y-auto pr-1">
              {countyPostalCodes.map((p: any, idx: number) => (
                <div key={idx} className="p-2.5 rounded-lg bg-bg-elevated/60 border border-border/60">
                  <span className="font-mono text-xs font-bold text-gold block">{p.code}</span>
                  <span className="text-xs text-text-primary break-words block">{p.town}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-text-muted">
              Browse the full Posta Kenya directory for regional post office codes serving {county.capital}.
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
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gold uppercase tracking-wider inline-flex items-center gap-1.5"><DynamicIcon emoji="🏆" className="w-3.5 h-3.5" /> Top KCSE Schools</span>
                  <Link href="/tools/kcse-school-rankings/" className="text-gold hover:underline">Rankings →</Link>
                </div>
                {countySchools.map((s: any) => (
                  <div key={s.name} className="flex justify-between text-text-secondary">
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
                  <div key={p.name} className="flex justify-between">
                    <span className="font-medium text-text-primary">{p.name} ({p.type})</span>
                    <span className="text-text-muted">{p.sizeKm2} km²</span>
                  </div>
                ))}
                {countyForests.map((f: any) => (
                  <div key={f.name} className="flex justify-between">
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
                  <div key={a.name} className="flex justify-between">
                    <span className="font-medium text-text-primary">{a.name} ({a.town})</span>
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
            <details key={idx} className="group bg-bg-card border border-border rounded-xl overflow-hidden">
              <summary className="px-5 py-4 cursor-pointer text-sm font-semibold text-text-primary hover:text-gold list-none flex items-center justify-between">
                <span>{faq.question}</span>
                <span className="text-text-muted group-open:rotate-180 transition-transform">▾</span>
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
            Explore Other Kenyan Counties
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
    </div>
  );
}
