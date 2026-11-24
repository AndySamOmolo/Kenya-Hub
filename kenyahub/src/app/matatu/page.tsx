"use client";

import { useState, useMemo, useDeferredValue } from "react";
import Link from "next/link";
import matatuData from "@/data/matatu-routes.json";
import SearchInput from "@/components/ui/SearchInput";
import { BusFront } from "lucide-react";
import { ArrowRight, Navigation, Search, X } from "lucide-react";

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
  const deferredSearch = useDeferredValue(search);
  const [fromStage, setFromStage] = useState("");
  const [toStage, setToStage] = useState("");
  const deferredFromStage = useDeferredValue(fromStage);
  const deferredToStage = useDeferredValue(toStage);
  const [plannerTriggered, setPlannerTriggered] = useState(false);

  // Flatten all routes from all active towns
  const allRoutes = useMemo(() => {
    const routesList: RouteItem[] = [];
    matatuData.towns
      .filter((t) => t.isActive)
      .forEach((town) => {
        const townRoutes =
          (matatuData.routes as Record<string, typeof matatuData.routes.nairobi>)[
            town.slug
          ] || [];
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
    if (!deferredSearch.trim()) return [];
    const q = deferredSearch.toLowerCase();
    return allRoutes
      .filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.routeNumber.toLowerCase().includes(q) ||
          r.terminusA.toLowerCase().includes(q) ||
          r.terminusB.toLowerCase().includes(q) ||
          r.saccoName.toLowerCase().includes(q) ||
          r.townName.toLowerCase().includes(q) ||
          r.stages.some((s) => s.name.toLowerCase().includes(q))
      )
      .slice(0, 10);
  }, [deferredSearch, allRoutes]);

  // Point-to-Point Journey Planner matching (direct corridor + CBD transfer suggestions)
  const journeyMatches = useMemo(() => {
    const fromQ = deferredFromStage.trim().toLowerCase();
    const toQ = deferredToStage.trim().toLowerCase();
    if (!fromQ || !toQ) return { direct: [] as RouteItem[], transfers: [] as { leg1: RouteItem; leg2: RouteItem }[] };

    const matchesStage = (r: RouteItem, q: string) =>
      r.terminusA.toLowerCase().includes(q) ||
      r.terminusB.toLowerCase().includes(q) ||
      r.name.toLowerCase().includes(q) ||
      r.stages.some((s) => s.name.toLowerCase().includes(q));

    const direct = allRoutes.filter((r) => matchesStage(r, fromQ) && matchesStage(r, toQ));
    if (direct.length > 0) return { direct: direct.slice(0, 6), transfers: [] };

    const fromRoutes = allRoutes.filter((r) => matchesStage(r, fromQ));
    const toRoutes = allRoutes.filter((r) => matchesStage(r, toQ));
    const transfers: { leg1: RouteItem; leg2: RouteItem }[] = [];
    for (const r1 of fromRoutes) {
      for (const r2 of toRoutes) {
        if (r1.townSlug === r2.townSlug && r1.slug !== r2.slug) {
          transfers.push({ leg1: r1, leg2: r2 });
          if (transfers.length >= 4) break;
        }
      }
      if (transfers.length >= 4) break;
    }
    return { direct: [], transfers };
  }, [deferredFromStage, deferredToStage, allRoutes]);

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
    <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-4 pb-8 sm:py-8">
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
      <nav aria-label="Breadcrumb" data-adsense-ignore="true" className="flex items-center gap-1.5 text-xs text-text-muted mb-3 sm:mb-4">
        <Link href="/" className="hover:text-gold transition-colors">
          Home
        </Link>
        <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-text-secondary">Matatu Routes Hub</span>
      </nav>

      {/* Hero (Compact) */}
      <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-gold/10 via-kenya-green/5 to-kenya-red/5 border border-border p-4 sm:p-7">
        <BusFront className="absolute top-3 right-3 w-20 h-20 opacity-10 rotate-12 select-none text-gold pointer-events-none" aria-hidden="true" />
        <div className="relative z-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-[family-name:var(--font-outfit)] mb-2 gradient-text-kenya tracking-tight">
            Kenya Matatu Routes &amp; Stages
          </h1>
          <p className="text-text-secondary max-w-2xl text-xs sm:text-sm leading-relaxed mb-4">
            Find matatu routes across Kenya — Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and Thika. Search by destination, plan point-to-point stage trips, and view interactive route maps.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-4">
            <div className="bg-bg-card/70 border border-border rounded-lg px-3 py-1.5">
              <span className="text-sm sm:text-base font-bold text-gold">{activeTownsCount}</span>
              <span className="text-[11px] sm:text-xs text-text-muted ml-1.5">Cities</span>
            </div>
            <div className="bg-bg-card/70 border border-border rounded-lg px-3 py-1.5">
              <span className="text-sm sm:text-base font-bold text-gold">{allRoutes.length}</span>
              <span className="text-[11px] sm:text-xs text-text-muted ml-1.5">Routes</span>
            </div>
            <div className="bg-bg-card/70 border border-border rounded-lg px-3 py-1.5">
              <span className="text-sm sm:text-base font-bold text-gold">{totalStages}</span>
              <span className="text-[11px] sm:text-xs text-text-muted ml-1.5">Stages</span>
            </div>
            <div className="bg-bg-card/70 border border-border rounded-lg px-3 py-1.5">
              <span className="text-sm sm:text-base font-bold text-gold">{totalSaccos}</span>
              <span className="text-[11px] sm:text-xs text-text-muted ml-1.5">SACCOs</span>
            </div>
          </div>

          {/* Search */}
          <div className="relative max-w-lg">
            <SearchInput
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search routes (e.g. Karen, Nyali)..."
              id="matatu-search"
              onClear={() => setSearch("")}
            />

            {/* Search results dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-bg-card sm:bg-bg-card/95 sm:backdrop-blur-xl border border-border rounded-xl shadow-2xl shadow-black/30 z-50 overflow-hidden max-h-[380px] overflow-y-auto">
                {searchResults.map((r) => (
                  <Link
                    key={`${r.townSlug}-${r.slug}`}
                    href={`/matatu/${r.townSlug}/${r.slug}/`}
                    prefetch={false}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-bg-elevated transition-colors border-b border-border/50 last:border-0"
                  >
                    <BusFront className="w-5 h-5 text-gold flex-shrink-0" aria-hidden="true" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-text-primary break-words">Route {r.routeNumber}: {r.name}</span>
                        <span className="micro-badge text-[0.55rem] bg-gold/15 text-gold px-1.5 py-0.5 rounded font-medium">{r.townName}</span>
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

      {/* Point-to-Point Journey Planner (From Stage -> To Destination) */}
      <div className="mb-7 rounded-2xl border border-gold/30 bg-bg-card p-4 sm:p-5 space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h2 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2">
              <Navigation className="w-4 h-4 text-gold" /> Matatu Journey Planner (From Stage → To Destination)
            </h2>
            <p className="text-xs text-text-secondary mt-0.5">
              Enter your starting stage and destination (e.g. &ldquo;Westlands&rdquo; to &ldquo;CBD&rdquo; or &ldquo;Rongai&rdquo; to &ldquo;Upper Hill&rdquo;) to find direct routes or CBD connections.
            </p>
          </div>
          {(fromStage || toStage) && (
            <button
              type="button"
              onClick={() => {
                setFromStage("");
                setToStage("");
              }}
              className="text-xs font-semibold text-gold hover:underline cursor-pointer"
            >
              Clear Trip
            </button>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setPlannerTriggered(true);
          }}
          className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-3 items-end"
        >
          <div>
            <label className="block text-xs font-semibold text-text-secondary mb-1">
              From Stage / Estate
            </label>
            <div className="relative">
              <input
                type="text"
                value={fromStage}
                onChange={(e) => setFromStage(e.target.value)}
                placeholder="e.g. Kencom, Westlands, Ngong..."
                className="input-field text-sm w-full pr-10!"
                style={{ paddingRight: "2.5rem" }}
              />
              {fromStage && (
                <button
                  type="button"
                  onClick={() => setFromStage("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                  aria-label="Clear origin stage"
                >
                  <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                </button>
              )}
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-text-secondary mb-1">
              To Destination / Stage
            </label>
            <div className="relative">
              <input
                type="text"
                value={toStage}
                onChange={(e) => setToStage(e.target.value)}
                placeholder="e.g. Karen, JKIA, Kondele, Juja..."
                className="input-field text-sm w-full pr-10!"
                style={{ paddingRight: "2.5rem" }}
              />
              {toStage && (
                <button
                  type="button"
                  onClick={() => setToStage("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                  aria-label="Clear destination stage"
                >
                  <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                </button>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="h-[42px] px-5 rounded-xl bg-gold text-kenya-black font-bold text-xs sm:text-sm hover:bg-gold-light transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
          >
            <Search className="w-4 h-4" />
            Find Route
          </button>
        </form>

        {plannerTriggered && (!fromStage.trim() || !toStage.trim()) && (
          <p className="text-xs text-amber-500">
            Enter both a starting stage and destination above, then tap Find Route.
          </p>
        )}

        {fromStage.trim() && toStage.trim() && (
          <div className="pt-2 space-y-3">
            {journeyMatches.direct.length > 0 ? (
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-kenya-green-light mb-2">
                  Direct Matatu Routes Found ({journeyMatches.direct.length})
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {journeyMatches.direct.map((r) => (
                    <Link
                      key={`${r.townSlug}-${r.slug}`}
                      href={`/matatu/${r.townSlug}/${r.slug}/`}
                      prefetch={false}
                      className="rounded-xl border border-kenya-green/35 bg-kenya-green/5 hover:border-gold p-3.5 flex items-center justify-between gap-3 transition-colors"
                    >
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-gold">
                          {r.townName} Route {r.routeNumber}: {r.name}
                        </span>
                        <p className="text-xs text-text-secondary mt-0.5">
                          {r.terminusA} ↔ {r.terminusB} • {r.saccoName}
                        </p>
                        <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                          <span className="px-2 py-0.5 rounded-full text-[0.65rem] font-semibold bg-kenya-green/15 text-kenya-green-light border border-kenya-green/25">
                            Off-Peak: KES {r.fareMin}
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-[0.65rem] font-semibold bg-gold/15 text-gold border border-gold/25">
                            Peak / Rain: KES {r.fareMax}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gold shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            ) : journeyMatches.transfers.length > 0 ? (
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gold mb-2">
                  Suggested 2-Leg CBD Transfer Options ({journeyMatches.transfers.length})
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {journeyMatches.transfers.map((pair, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-border bg-bg-elevated/60 p-3.5 space-y-2 text-xs"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 text-gold font-bold">
                        <span>{pair.leg1.townName} CBD Connection</span>
                        <span>
                          Combined Est. KES {pair.leg1.fareMin + pair.leg2.fareMin}–{pair.leg1.fareMax + pair.leg2.fareMax}
                        </span>
                      </div>
                      <p className="text-text-primary">
                        <strong>1. Board Route {pair.leg1.routeNumber}:</strong>{" "}
                        <Link href={`/matatu/${pair.leg1.townSlug}/${pair.leg1.slug}/`} prefetch={false} className="text-gold hover:underline">
                          {pair.leg1.name}
                        </Link>{" "}
                        to CBD ({pair.leg1.terminusA})
                      </p>
                      <p className="text-text-primary">
                        <strong>2. Connect to Route {pair.leg2.routeNumber}:</strong>{" "}
                        <Link href={`/matatu/${pair.leg2.townSlug}/${pair.leg2.slug}/`} prefetch={false} className="text-gold hover:underline">
                          {pair.leg2.name}
                        </Link>{" "}
                        ({pair.leg2.terminusA} → {pair.leg2.terminusB})
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-xs text-text-muted">
                No direct or single-transfer route matched both &ldquo;{fromStage}&rdquo; and &ldquo;{toStage}&rdquo;. Try searching by corridor or estate name above.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Town selector (Compact) */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <h2 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">Explore Routes by City</h2>
        <span className="text-xs text-text-muted">{activeTownsCount} active cities</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-7">
        {matatuData.towns.filter((town) => town.isActive).map((town) => (
          <Link key={town.slug} href={`/matatu/${town.slug}/`} prefetch={false} className="bg-bg-card border border-gold/30 rounded-xl p-3 text-center group hover:border-gold transition-[border-color,box-shadow] hover:shadow-md hover:shadow-gold/5">
            <div className="flex justify-center mb-1.5"><BusFront className="w-6 h-6 text-gold" aria-hidden="true" /></div>
            <p className="text-xs sm:text-sm font-bold text-text-primary group-hover:text-gold transition-colors">{town.name}</p>
            <p className="text-[0.65rem] text-gold mt-0.5 font-semibold">{((matatuData.routes as Record<string, unknown[]>)[town.slug]?.length ?? town.routeCount)} routes</p>
          </Link>
        ))}
      </div>

      {/* Featured routes preview (Compact) */}
      <h2 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-3">Featured Matatu Routes Across Kenya</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {featuredRoutes.map((route) => (
          <Link key={`${route.townSlug}-${route.slug}`} href={`/matatu/${route.townSlug}/${route.slug}/`} prefetch={false} className="cv-auto bg-bg-card border border-border rounded-xl p-3 sm:p-3.5 group hover:border-gold/50 transition-colors">
            <div className="flex items-start gap-2.5">
              <div className="min-w-[2.25rem] px-1.5 h-9 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-gold whitespace-nowrap">{route.routeNumber}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-[0.85rem] font-semibold text-text-primary group-hover:text-gold transition-colors break-words leading-snug">{route.name}</h3>
                  <span className="micro-badge text-[0.55rem] bg-bg-elevated border border-border px-1.5 py-0.5 rounded text-text-muted flex-shrink-0">{route.townName}</span>
                </div>
                <p className="text-[0.65rem] text-text-muted mt-0.5">{route.stages.length} stages · {route.saccoName}</p>
                <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                  <span className="px-2 py-0.5 rounded-full text-[0.6rem] font-semibold bg-kenya-green/15 text-kenya-green-light">
                    Off-Peak KES {route.fareMin}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[0.6rem] font-semibold bg-gold/15 text-gold">
                    Peak/Rain KES {route.fareMax}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* SEO content & FAQs */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-bg-card border border-border rounded-xl p-4 sm:p-5">
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
              <summary className="flex items-center justify-between gap-2 px-4 py-3 cursor-pointer text-xs sm:text-sm font-semibold text-text-primary hover:text-gold transition-colors list-none">
                <span className="min-w-0 flex-1">{item.question}</span>
                <span className="text-gold shrink-0 group-open:rotate-180 transition-transform">▾</span>
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
