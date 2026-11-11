"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import matatuData from "@/data/matatu-routes.json";
import SearchInput from "@/components/ui/SearchInput";
import DynamicIcon from "@/components/ui/DynamicIcon";

interface RouteItem {
  routeNumber: string;
  slug: string;
  name: string;
  terminusA: string;
  terminusB: string;
  fareMin: number;
  fareMax: number;
  operatingHours: string;
  saccoName: string;
  verified: boolean;
  townSlug: string;
  townName: string;
  stages: { name: string; lat: number; lng: number; order: number }[];
}

const MATATU_HUB_FAQS = [
  {
    question: "How are matatu route numbers and SACCOs regulated in Kenya?",
    answer:
      "Every public service vehicle (PSV) in Kenya must belong to a registered Savings and Credit Co-operative (SACCO) or transport company licensed by the National Transport and Safety Authority (NTSA) under the Traffic Act (Cap 403). Route numbers in Nairobi and major towns follow designated highway corridors (such as Waiyaki Way, Thika Superhighway, Mombasa Road, Ngong Road, Jogoo Road, and Juja Road).",
  },
  {
    question: "Why do matatu fares change between off-peak and rush hour in Kenya?",
    answer:
      "Matatu fares in Kenya are market-determined based on time of day, traffic congestion, and weather. Off-peak fares apply between 9:30 AM and 3:30 PM, whereas peak fares apply during morning rush hours (6:00 AM – 9:00 AM), evening rush hours (4:30 PM – 8:00 PM), and heavy rainfall.",
  },
  {
    question: "Which Kenyan cities and towns are covered in the KenyaHub Matatu Directory?",
    answer:
      "KenyaHub currently covers verified matatu and bus routes across 6 major urban hubs: Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and Thika, complete with GPS stage coordinates, CBD boarding termini, fare ranges, and operating SACCOs.",
  },
];

export default function MatatuPage() {
  const [search, setSearch] = useState("");

  // Flatten all routes from all active towns
  const allRoutes = useMemo(() => {
    const routesList: RouteItem[] = [];
    matatuData.towns
      .filter((t) => t.isActive)
      .forEach((town) => {
        const townRoutes = (matatuData.routes as Record<string, typeof matatuData.routes.nairobi>)[town.slug] || [];
        townRoutes.forEach((r) => {
          routesList.push({
            ...r,
            townSlug: town.slug,
            townName: town.name,
          });
        });
      });
    return routesList;
  }, []);

  const totalStages = useMemo(() => {
    return allRoutes.reduce((sum, r) => sum + r.stages.length, 0);
  }, [allRoutes]);

  const totalSaccos = useMemo(() => {
    return new Set(allRoutes.map((r) => r.saccoName)).size;
  }, [allRoutes]);

  const activeTownsCount = useMemo(() => {
    return matatuData.towns.filter((t) => t.isActive).length;
  }, []);

  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return allRoutes.filter((r) =>
      r.name.toLowerCase().includes(q) ||
      r.routeNumber.toLowerCase().includes(q) ||
      r.terminusA.toLowerCase().includes(q) ||
      r.terminusB.toLowerCase().includes(q) ||
      r.saccoName.toLowerCase().includes(q) ||
      r.townName.toLowerCase().includes(q) ||
      r.stages.some((s) => s.name.toLowerCase().includes(q))
    ).slice(0, 10);
  }, [search, allRoutes]);

  // Featured routes mix across towns
  const featuredRoutes = useMemo(() => {
    return allRoutes.slice(0, 12);
  }, [allRoutes]);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://kenyahub.me/" },
      { "@type": "ListItem", position: 2, name: "Matatu Routes", item: "https://kenyahub.me/matatu/" },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Kenya Matatu & Public Transport Routes by City",
    numberOfItems: allRoutes.length,
    itemListElement: allRoutes.map((r, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${r.townName} Route ${r.routeNumber}: ${r.name} (${r.terminusA} to ${r.terminusB})`,
      url: `https://kenyahub.me/matatu/${r.townSlug}/${r.slug}/`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: MATATU_HUB_FAQS.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-7 pb-10 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-text-muted mb-6">
        <Link href="/" className="hover:text-gold transition-colors">
          Home
        </Link>
        <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-text-secondary">Matatu Routes Hub</span>
      </nav>

      {/* Hero */}
      <div className="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-br from-gold/10 via-kenya-green/5 to-kenya-red/5 border border-border p-8 sm:p-12">
        <DynamicIcon emoji="🚌" className="absolute top-4 right-4 w-28 h-28 opacity-10 rotate-12 select-none text-gold pointer-events-none" />
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-outfit)] mb-3 gradient-text-kenya tracking-tight">
            Kenya Matatu Routes &amp; Stages
          </h1>
          <p className="text-text-secondary max-w-lg text-sm sm:text-base leading-relaxed mb-6">
            Find matatu routes across Kenya — Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and Thika. Search by destination, view stages on interactive Leaflet maps, check fares and SACCO details.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
            <div className="bg-bg-card/60 backdrop-blur border border-border rounded-xl px-4 py-2.5">
              <span className="text-lg font-bold text-gold">{activeTownsCount}</span>
              <span className="text-xs text-text-muted ml-1.5">Cities Covered</span>
            </div>
            <div className="bg-bg-card/60 backdrop-blur border border-border rounded-xl px-4 py-2.5">
              <span className="text-lg font-bold text-gold">{allRoutes.length}</span>
              <span className="text-xs text-text-muted ml-1.5">Verified Routes</span>
            </div>
            <div className="bg-bg-card/60 backdrop-blur border border-border rounded-xl px-4 py-2.5">
              <span className="text-lg font-bold text-gold">{totalStages}</span>
              <span className="text-xs text-text-muted ml-1.5">Total Stages</span>
            </div>
            <div className="bg-bg-card/60 backdrop-blur border border-border rounded-xl px-4 py-2.5">
              <span className="text-lg font-bold text-gold">{totalSaccos}</span>
              <span className="text-xs text-text-muted ml-1.5">SACCOs</span>
            </div>
          </div>

          {/* Search */}
          <div className="relative max-w-lg">
            <SearchInput
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search routes... e.g. 'Karen', 'Nyali', 'Kondele', 'Langas'"
              id="matatu-search"
              onClear={() => setSearch("")}
            />

            {/* Search results dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-bg-card/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl shadow-black/30 z-50 overflow-hidden max-h-[380px] overflow-y-auto">
                {searchResults.map((r) => (
                  <Link
                    key={`${r.townSlug}-${r.slug}`}
                    href={`/matatu/${r.townSlug}/${r.slug}/`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-bg-elevated transition-colors border-b border-border/50 last:border-0"
                  >
                    <DynamicIcon emoji="🚌" className="w-5 h-5 text-gold flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-text-primary break-words">Route {r.routeNumber}: {r.name}</span>
                        <span className="text-[0.55rem] bg-gold/15 text-gold px-1.5 py-0.5 rounded font-medium">{r.townName}</span>
                      </div>
                      <p className="text-[0.65rem] text-text-muted">{r.terminusA} → {r.terminusB} · KES {r.fareMin}–{r.fareMax}</p>
                    </div>
                    <svg className="w-4 h-4 text-text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Town selector */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">Explore Routes by City</h2>
        <span className="text-xs text-text-muted">{activeTownsCount} active cities</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
        {matatuData.towns.filter((town) => town.isActive).map((town) => (
          <Link key={town.slug} href={`/matatu/${town.slug}/`} className="bg-bg-card border border-gold/30 rounded-xl p-4 text-center group hover:border-gold transition-all hover:shadow-lg hover:shadow-gold/5">
            <div className="flex justify-center mb-2"><DynamicIcon emoji="🚌" className="w-8 h-8 text-gold" /></div>
            <p className="text-sm font-bold text-text-primary group-hover:text-gold transition-colors">{town.name}</p>
            <p className="text-[0.6rem] text-gold mt-1 font-semibold">{((matatuData.routes as Record<string, unknown[]>)[town.slug]?.length ?? town.routeCount)} routes</p>
          </Link>
        ))}
      </div>

      {/* Featured routes preview */}
      <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-4">Featured Verified Routes Across Kenya</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {featuredRoutes.map((route) => (
          <Link key={`${route.townSlug}-${route.slug}`} href={`/matatu/${route.townSlug}/${route.slug}/`} className="bg-bg-card border border-border rounded-xl p-4 group hover:border-gold/50 transition-all">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-gold">{route.routeNumber}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-semibold text-text-primary group-hover:text-gold transition-colors break-words">{route.name}</h3>
                  <span className="text-[0.55rem] bg-bg-elevated border border-border px-1.5 py-0.5 rounded text-text-muted flex-shrink-0">{route.townName}</span>
                </div>
                <p className="text-[0.65rem] text-text-muted mt-0.5">{route.stages.length} stages · {route.saccoName}</p>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="text-[0.6rem] text-kenya-green-light font-bold">KES {route.fareMin}–{route.fareMax}</span>
                  <span className="text-[0.6rem] text-text-muted">{route.operatingHours}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* SEO content & FAQs */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-3">
            About Kenya Matatu Routes &amp; Public Transport
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-text-secondary leading-relaxed">
            <p>
              Matatus are the backbone of Kenya&apos;s urban and peri-urban public transport network. These 14-seater minibuses and 33-to-51 seater commuter buses connect Central Business Districts (CBDs) to residential estates, satellite towns, industrial parks, and university campuses across Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and Thika.
            </p>
            <p>
              Every matatu route in Kenya is operated by a registered SACCO (Savings and Credit Co-operative) licensed by the <strong>National Transport and Safety Authority (NTSA)</strong>. Fares vary between off-peak daytime hours and peak morning/evening rush hours or rainy weather.
            </p>
            <p>
              Select any city or route above to inspect interactive GPS stage maps, Haversine corridor distances, estimated travel times, operating SACCOs, and monthly commuter fare budgets.
            </p>
          </div>
        </div>

        <div className="bg-bg-card border border-border rounded-xl p-6 space-y-3">
          <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-2">
            Frequently Asked Questions
          </h2>
          {MATATU_HUB_FAQS.map((item, idx) => (
            <details
              key={idx}
              open={idx < 2}
              className="group bg-bg-elevated/50 border border-border rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-xs sm:text-sm font-semibold text-text-primary hover:text-gold transition-colors list-none">
                <span>{item.question}</span>
                <span className="text-gold ml-2 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="px-4 pb-3.5 pt-2 text-xs text-text-secondary leading-relaxed border-t border-border/60">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
