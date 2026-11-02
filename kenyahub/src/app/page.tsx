import Link from "next/link";
import { MapPin, ShieldCheck, BadgeCheck, Smartphone, Landmark, BusFront, BookOpen } from "lucide-react";
import { TOOLS, TOOL_CATEGORIES } from "@/lib/tools-registry";
import { STATIC_BLOG_POSTS } from "@/data/blog-posts";
import PinnedToolsHomeSection from "@/components/tools/PinnedToolsHomeSection";
import PopularToolsSection from "@/components/tools/PopularToolsSection";
import DynamicIcon from "@/components/ui/DynamicIcon";

export default function HomePage() {
  const featuredGuides = STATIC_BLOG_POSTS.slice(0, 6);

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "KenyaHub",
    url: "https://kenyahub.me",
    inLanguage: "en-KE",
    description:
      "Free online tools, statutory calculators, and verified public data built for Kenya — 2026 PAYE salary calculator, M-Pesa fee calculator, KRA car import duty, 47 Counties Hub, CBC curriculum explorer, KUCCPS cluster points, and Matatu routes.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://kenyahub.me/tools/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const homeItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Flagship Kenyan Calculators, Directories & Public Data Hubs",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Kenya PAYE Salary Calculator 2026 (Gross to Net & Net to Gross)", url: "https://kenyahub.me/tools/paye-calculator/" },
      { "@type": "ListItem", position: 2, name: "M-Pesa Transaction & Withdrawal Fee Calculator 2026", url: "https://kenyahub.me/tools/mpesa-fee-calculator/" },
      { "@type": "ListItem", position: 3, name: "KRA Car Import Duty & CRSP Calculator 2026", url: "https://kenyahub.me/tools/kra-car-import-calculator/" },
      { "@type": "ListItem", position: 4, name: "Kenya 47 Counties Hub — Budgets, Governors & 290 Constituencies", url: "https://kenyahub.me/county/" },
      { "@type": "ListItem", position: 5, name: "Kenya Matatu Routes, Stages & Fares Interactive Guide", url: "https://kenyahub.me/matatu/" },
      { "@type": "ListItem", position: 6, name: "KPLC Prepaid Electricity Token Calculator 2026", url: "https://kenyahub.me/tools/kplc-token-calculator/" },
      { "@type": "ListItem", position: 7, name: "Kenya Mjengo House Construction Material & BoQ Cost Calculator", url: "https://kenyahub.me/tools/mjengo-construction-calculator/" },
      { "@type": "ListItem", position: 8, name: "KUCCPS Cluster Points Calculator 2026", url: "https://kenyahub.me/tools/kuccps-cluster-calculator/" },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KenyaHub",
    url: "https://kenyahub.me",
    logo: "https://kenyahub.me/og-image.png",
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@kenyahub.me",
      contactType: "customer support",
      areaServed: "KE",
      availableLanguage: ["English", "Swahili"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeItemListSchema) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="gradient-hero min-h-[380px] sm:min-h-[580px] flex items-center">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-96 h-96 border border-white/[0.03] rotate-45 rounded-3xl" />
            <div className="absolute -bottom-32 -left-16 w-80 h-80 border border-white/[0.03] rotate-45 rounded-3xl" />
            <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-gold/20 animate-float" />
            <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 rounded-full bg-kenya-green/20 animate-float" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/3 left-1/4 w-1 h-1 rounded-full bg-kenya-red/20 animate-float" style={{ animationDelay: "2s" }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-4 sm:mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-kenya-green opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-kenya-green-light" />
                </span>
                <span className="text-[0.6875rem] sm:text-xs font-medium text-text-secondary tracking-wide">
                  {TOOLS.length} specialized tools · 47 Counties Hub · Free forever · Official 2026 data
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold font-[family-name:var(--font-outfit)] leading-[1.12] tracking-tight mb-3.5 sm:mb-6">
                The tools{" "}
                <span className="gradient-text-kenya">every Kenyan</span>
                {" "}needs, in one place
              </h1>

              <p className="text-sm sm:text-lg text-text-secondary leading-relaxed mb-5 sm:mb-10 max-w-xl">
                Calculate your 2026 net salary, estimate KRA CRSP car import duty, explore all 47 county budgets and constituencies, check M-Pesa fees, and plan matatu routes — powered by official Kenyan public data.
              </p>

              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                <Link href="/tools/" className="btn-gold text-sm sm:text-[0.9375rem] px-5 py-2.5 sm:px-7 sm:py-3.5">
                  Explore All {TOOLS.length} Tools
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/county/"
                  className="btn-outline text-sm sm:text-[0.9375rem] px-5 py-2.5 sm:px-7 sm:py-3.5"
                >
                  Explore 47 Counties Hub
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />
      </section>

      {/* PINNED TOOLS */}
      <PinnedToolsHomeSection />

      {/* POPULAR TOOLS */}
      <PopularToolsSection />

      <div className="section-divider mx-auto max-w-7xl" />

      {/* FLAGSHIP PUBLIC DATA HUBS (47 COUNTIES & MATATU ROUTES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-6">
          <Link
            href="/county/"
            className="group bg-bg-card border border-border hover:border-gold/50 rounded-xl sm:rounded-2xl p-4 sm:p-8 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-kenya-green/10 border border-kenya-green/20 text-kenya-green-light text-[0.6875rem] sm:text-xs font-semibold mb-2.5 sm:mb-4">
                <Landmark className="w-3.5 h-3.5" /> Consolidated Civic Module
              </div>
              <h2 className="text-lg sm:text-2xl font-bold font-[family-name:var(--font-outfit)] text-text-primary group-hover:text-gold transition-colors mb-1.5 sm:mb-2">
                Kenya 47 Counties Intelligence Hub
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-3 sm:mb-4">
                All county tools united in one hub — compare Governors, Senators, Woman Representatives,{" "}
                <strong>290 Constituencies</strong>, <strong>FY 2025/26 Controller of Budget Allocations</strong>,{" "}
                <strong>12-Month Rainfall &amp; Climate Zones</strong>, SHA Hospitals, Postal Codes, and side-by-side county comparisons.
              </p>
            </div>
            <span className="text-xs font-bold text-gold group-hover:underline">
              Open 47 Counties Hub (Directory · Budgets · Constituencies · Climate · Compare) →
            </span>
          </Link>

          <Link
            href="/matatu/"
            className="group bg-bg-card border border-border hover:border-gold/50 rounded-xl sm:rounded-2xl p-4 sm:p-8 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[0.6875rem] sm:text-xs font-semibold mb-2.5 sm:mb-4">
                <BusFront className="w-3.5 h-3.5" /> Interactive Transit Module
              </div>
              <h2 className="text-lg sm:text-2xl font-bold font-[family-name:var(--font-outfit)] text-text-primary group-hover:text-gold transition-colors mb-1.5 sm:mb-2">
                Kenya Matatu Routes, Stages &amp; Fares Hub
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-3 sm:mb-4">
                Navigate public transport across <strong>Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and Thika</strong>. View CBD boarding stages, route numbers, corridor distances, peak vs off-peak fares, and registered SACCO operators on interactive maps.
              </p>
            </div>
            <span className="text-xs font-bold text-gold group-hover:underline">
              Open Matatu Routes Explorer (64+ Verified Routes Across 6 Towns) →
            </span>
          </Link>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-7xl" />

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-16">
        <div className="text-center mb-5 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-gold mb-1.5 sm:mb-2">
            Browse by Category
          </p>
          <h2 className="text-xl sm:text-3xl font-bold font-[family-name:var(--font-outfit)] tracking-tight">
            {TOOL_CATEGORIES.length} specialized categories, one platform
          </h2>
          <p className="text-text-muted text-xs sm:text-sm mt-1.5 sm:mt-3 max-w-md mx-auto">
            Every aspect of life in Kenya — from taxes and SACCOs to farming, CBC education, energy, counties, and indigenous languages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
          {TOOL_CATEGORIES.map((cat) => {
            const count = TOOLS.filter((t) => t.category === cat.id).length;
            return (
              <Link
                key={cat.id}
                href={`/tools/?category=${cat.id}`}
                className="tool-card bg-bg-card border border-border rounded-xl sm:rounded-2xl p-3.5 sm:p-6 flex items-start gap-3 sm:gap-4 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/[0.04] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.07] transition-colors">
                  <span className="text-xl sm:text-2xl tool-icon"><DynamicIcon emoji={cat.icon} className="w-[1em] h-[1em] inline-block mb-[0.1em]" /></span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-[0.9375rem] font-semibold text-text-primary font-[family-name:var(--font-outfit)] group-hover:text-gold transition-colors mb-0.5 sm:mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed mb-1.5 sm:mb-2">
                    {cat.description}
                  </p>
                  <span className="text-xs font-semibold text-gold/80 group-hover:text-gold transition-colors">
                    {count} tool{count !== 1 ? "s" : ""}
                    <svg className="w-3 h-3 inline-block ml-1 -mt-px" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <div className="section-divider mx-auto max-w-7xl" />

      {/* FEATURED STATUTORY GUIDES & EDITORIAL ARTICLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-10 gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-gold mb-1.5 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> In-Depth Kenyan Guides
            </p>
            <h2 className="text-xl sm:text-3xl font-bold font-[family-name:var(--font-outfit)] tracking-tight text-text-primary">
              2026 Statutory Guides &amp; Worked Examples
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary mt-1 max-w-2xl">
              Detailed editorial guides explaining the Kenyan laws, Gazette Notices, and step-by-step math behind our calculators.
            </p>
          </div>
          <Link href="/blog/" className="text-xs sm:text-sm font-bold text-gold hover:underline shrink-0">
            Read All {STATIC_BLOG_POSTS.length} Guides →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredGuides.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="bg-bg-card border border-border hover:border-gold/50 rounded-xl p-5 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {(post.tags || []).slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.625rem] font-semibold px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-[0.625rem] text-text-muted ml-auto">
                    {post.readTime} min read
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-text-primary font-[family-name:var(--font-outfit)] group-hover:text-gold transition-colors leading-snug mb-2">
                  {post.title}
                </h3>
                <p className="text-xs text-text-secondary line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <span className="text-xs font-semibold text-gold mt-4 inline-block group-hover:underline">
                Read Full Guide →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="section-divider mx-auto max-w-7xl" />

      {/* WHY KENYAHUB */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-16">
        <div className="text-center mb-5 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-gold mb-1.5 sm:mb-2">
            Built Different
          </p>
          <h2 className="text-xl sm:text-3xl font-bold font-[family-name:var(--font-outfit)] tracking-tight">
            Why KenyaHub?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 sm:p-5">
          {[
            {
              icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-kenya-green mb-0.5 sm:mb-1" />,
              title: "100% Kenyan",
              desc: "Every tool uses real Kenyan data — 2026 KRA tax bands, Safaricom tariffs, KRA CRSP schedules, and KICD curriculum.",
              accent: "from-kenya-green/10 to-transparent",
            },
            {
              icon: <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-gold mb-0.5 sm:mb-1" />,
              title: "Officially Sourced",
              desc: "Modeled on publications from KRA, KUCCPS, SHA, KICD, NTSA, KNBS, COB, SASRA, and EPRA.",
              accent: "from-gold/10 to-transparent",
            },
            {
              icon: <BadgeCheck className="w-6 h-6 sm:w-8 sm:h-8 text-sky mb-0.5 sm:mb-1" />,
              title: "Free Forever",
              desc: "No registration, no hidden fees, no paywalls. Every calculator, course, and directory is free.",
              accent: "from-sky/10 to-transparent",
            },
            {
              icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-kenya-red mb-0.5 sm:mb-1" />,
              title: "Mobile-First & Privacy-Safe",
              desc: "All calculations run locally on your device — your salary or financial numbers never leave your browser.",
              accent: "from-kenya-red/10 to-transparent",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`relative rounded-xl sm:rounded-2xl border border-border p-3.5 sm:p-6 bg-gradient-to-b ${item.accent} overflow-hidden`}
            >
              <div className="mb-2 sm:mb-3">{item.icon}</div>
              <h3 className="text-sm font-bold text-text-primary mb-1 sm:mb-2 font-[family-name:var(--font-outfit)]">
                {item.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="maasai-border-top" />
        <div className="bg-bg-secondary py-7 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl sm:text-3xl font-bold font-[family-name:var(--font-outfit)] mb-2.5 sm:mb-4 tracking-tight">
              Ready to find the tool you need?
            </h2>
            <p className="text-text-muted text-xs sm:text-sm mb-5 sm:mb-8 max-w-md mx-auto">
              From PAYE calculations and car import duties to CBC curriculum and all 47 county budgets — whatever you need as a Kenyan, we&apos;ve built it.
            </p>
            <Link href="/tools/" className="btn-gold text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4">
              Explore All {TOOLS.length} Tools
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
