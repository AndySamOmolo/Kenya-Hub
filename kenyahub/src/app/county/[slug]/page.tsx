"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import countiesData from "@/data/counties.json";

export default function CountyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const county = countiesData.counties.find((c) => c.slug === slug);

  if (!county) {
    notFound();
  }

  // Pre-defined quick links for the county
  const quickLinks = [
    { title: "Pay County Rates & Permits", icon: "💳", url: "https://ecitizen.go.ke" },
    { title: "Apply for Single Business Permit", icon: "🏪", url: "https://ecitizen.go.ke" },
    { title: "Find Ward & Constituency Leaders", icon: "🗳️", url: "/tools/ward-constituency-finder" },
    { title: "County Budget Tracker", icon: "📊", url: "/tools/county-budget-tracker" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1.5 text-xs text-text-muted mb-8">
        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
        <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <Link href="/county" className="hover:text-gold transition-colors">Counties</Link>
        <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-text-secondary truncate">{county.name}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 rounded-2xl bg-kenya-green/10 border border-kenya-green/20 flex items-center justify-center flex-shrink-0">
            <span className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-kenya-green-light">
              {county.code.toString().padStart(2, "0")}
            </span>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-outfit)] text-text-primary leading-tight tracking-tight mb-2">
              {county.name} County
            </h1>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1 text-[0.65rem] text-text-muted bg-bg-elevated border border-border rounded-full px-2.5 py-1 uppercase tracking-wider font-semibold">
                HQ: {county.capital}
              </span>
              <a href={county.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[0.65rem] text-gold bg-gold/10 border border-gold/20 hover:bg-gold/20 transition-colors rounded-full px-2.5 py-1 uppercase tracking-wider font-semibold">
                Official Website ↗
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Elected Officials */}
      <section className="mb-10">
        <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-4 flex items-center gap-2">
          <span className="text-xl">🏛️</span> County Leadership
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-bg-card border border-border rounded-xl p-5">
            <p className="text-[0.65rem] text-text-muted uppercase tracking-wider mb-1">Governor</p>
            <p className="text-base font-bold text-kenya-green-light">{county.governor}</p>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-5">
            <p className="text-[0.65rem] text-text-muted uppercase tracking-wider mb-1">Deputy Governor</p>
            <p className="text-base font-semibold text-text-primary">{county.deputyGovernor}</p>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-5">
            <p className="text-[0.65rem] text-text-muted uppercase tracking-wider mb-1">Senator</p>
            <p className="text-base font-semibold text-text-primary">{county.senator}</p>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-5">
            <p className="text-[0.65rem] text-text-muted uppercase tracking-wider mb-1">Women Representative</p>
            <p className="text-base font-semibold text-text-primary">{county.womenRep}</p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="mb-10">
        <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-4 flex items-center gap-2">
          <span className="text-xl">📈</span> Key Statistics
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-[0.65rem] text-text-muted uppercase tracking-wider mb-1">Population (2019)</p>
            <p className="text-lg font-bold text-text-primary font-[family-name:var(--font-outfit)]">{county.population.toLocaleString()}</p>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-[0.65rem] text-text-muted uppercase tracking-wider mb-1">Area</p>
            <p className="text-lg font-bold text-text-primary font-[family-name:var(--font-outfit)]">{county.area.toLocaleString()} <span className="text-sm font-normal text-text-muted">km²</span></p>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-4 text-center col-span-2 sm:col-span-1">
            <p className="text-[0.65rem] text-text-muted uppercase tracking-wider mb-1">Density</p>
            <p className="text-lg font-bold text-text-primary font-[family-name:var(--font-outfit)]">{Math.round(county.population / county.area)} <span className="text-sm font-normal text-text-muted">/km²</span></p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="mb-10">
        <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-4 flex items-center gap-2">
          <span className="text-xl">🔗</span> Quick Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {quickLinks.map((link, i) => {
            const isInternal = link.url.startsWith("/");
            return (
              <Link
                key={i}
                href={link.url}
                target={isInternal ? undefined : "_blank"}
                rel={isInternal ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-3 bg-bg-card border border-border rounded-xl p-4 hover:border-gold/50 transition-colors"
              >
                <span className="text-xl">{link.icon}</span>
                <span className="text-sm font-medium text-text-primary group-hover:text-gold transition-colors">{link.title}</span>
                {!isInternal && <span className="ml-auto text-[0.6rem] text-text-muted">↗</span>}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Constituencies */}
      <section className="mb-10">
        <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-4 flex items-center gap-2">
          <span className="text-xl">🗺️</span> Constituencies ({county.constituencies.length})
        </h2>
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
            {county.constituencies.map((c, i) => (
              <div key={i} className="px-5 py-3 bg-bg-card text-sm text-text-secondary">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section>
        <div className="bg-bg-elevated border border-border rounded-xl p-6 text-center">
          <h2 className="text-sm font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-2">Need to contact the county?</h2>
          <p className="text-sm text-text-secondary mb-4">Official switchboard for {county.name} County</p>
          <a href={`tel:${county.phone.replace(/\s+/g, '')}`} className="inline-flex items-center gap-2 bg-kenya-green text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-kenya-green-light transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            {county.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
