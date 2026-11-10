import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  ShieldCheck,
  BadgeCheck,
  Smartphone,
  Landmark,
  BusFront,
  BookOpen,
  Languages,
  Globe,
  Sparkles,
  Gamepad2,
  Layers,
  ArrowRight,
} from "lucide-react";
import { TOOLS, TOOL_CATEGORIES } from "@/lib/tools-registry";
import { PUBLISHED_COURSES } from "@/data/courses/registry";
import { STATIC_BLOG_POSTS } from "@/data/blog-posts";
import PinnedToolsHomeSection from "@/components/tools/PinnedToolsHomeSection";
import PopularToolsSection from "@/components/tools/PopularToolsSection";
import DynamicIcon from "@/components/ui/DynamicIcon";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://kenyahub.me/",
    languages: {
      "en-KE": "https://kenyahub.me/",
      en: "https://kenyahub.me/",
      "x-default": "https://kenyahub.me/",
    },
  },
};

export default function HomePage() {
  const featuredGuides = STATIC_BLOG_POSTS.slice(0, 6);

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "KenyaHub",
    url: "https://kenyahub.me",
    inLanguage: "en-KE",
    description:
      "Learn 22 Kenyan languages (Swahili, Gĩkũyũ, Dholuo, Kalenjin, Luluhya, Kĩkamba, Maasai & more) with interactive courses, dictionaries, proverbs, and essential Kenyan statutory calculators (2026 PAYE, M-Pesa, KRA CRSP, 47 Counties & Matatu routes).",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://kenyahub.me/tools/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const homeItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Flagship Kenyan Language Learning Hub, Calculators & Public Data Directories",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Learn Kenyan Languages, Proverbs & Oral Wisdom Hub (22 Languages)", url: "https://kenyahub.me/tools/learn/" },
      { "@type": "ListItem", position: 2, name: "Kenyan Languages Translator & Dictionary (22 Languages)", url: "https://kenyahub.me/tools/kenyan-translator/" },
      { "@type": "ListItem", position: 3, name: "Kenya PAYE Salary Calculator 2026 (Gross to Net & Net to Gross)", url: "https://kenyahub.me/tools/paye-calculator/" },
      { "@type": "ListItem", position: 4, name: "M-Pesa Transaction & Withdrawal Fee Calculator 2026", url: "https://kenyahub.me/tools/mpesa-fee-calculator/" },
      { "@type": "ListItem", position: 5, name: "KRA Car Import Duty & CRSP Calculator 2026", url: "https://kenyahub.me/tools/kra-car-import-calculator/" },
      { "@type": "ListItem", position: 6, name: "Kenya 47 Counties Hub — Budgets, Governors & 290 Constituencies", url: "https://kenyahub.me/county/" },
      { "@type": "ListItem", position: 7, name: "Kenya Matatu Routes, Stages & Fares Interactive Guide", url: "https://kenyahub.me/matatu/" },
      { "@type": "ListItem", position: 8, name: "KPLC Prepaid Electricity Token Calculator 2026", url: "https://kenyahub.me/tools/kplc-token-calculator/" },
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
        <div className="gradient-hero min-h-[420px] sm:min-h-[560px] flex items-center">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-96 h-96 border border-white/[0.03] rotate-45 rounded-3xl" />
            <div className="absolute -bottom-32 -left-16 w-80 h-80 border border-white/[0.03] rotate-45 rounded-3xl" />
            <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-gold/20 animate-float" />
            <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 rounded-full bg-kenya-green/20 animate-float" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/3 left-1/4 w-1 h-1 rounded-full bg-kenya-red/20 animate-float" style={{ animationDelay: "2s" }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/30 bg-gold/10 mb-5 sm:mb-7">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-kenya-green opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-kenya-green-light" />
                </span>
                <span className="text-xs font-semibold text-gold tracking-wide">
                  22 Kenyan Languages Hub · {TOOLS.length} Interactive Calculators · 47 Counties
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold font-[family-name:var(--font-outfit)] leading-[1.15] tracking-tight mb-4 sm:mb-6">
                Learn <span className="gradient-text-kenya">Kenyan languages</span>{" "}
                &amp; master everyday Kenyan tools
              </h1>

              <p className="text-sm sm:text-lg text-text-secondary leading-relaxed mb-6 sm:mb-9 max-w-2xl">
                Master <strong>22 indigenous Kenyan languages</strong> through interactive skill trees, flashcards, grammar guides, and historical proverbs — alongside Kenya&apos;s essential calculators for 2026 PAYE salary, M-Pesa fees, KRA car import duty, 47 Counties, and Matatu routes.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/tools/learn/" className="btn-gold text-sm sm:text-base px-5 py-3 sm:px-7 sm:py-3.5">
                  <Languages className="w-4 h-4 shrink-0" />
                  Start Learning Kenyan Languages
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
                <Link
                  href="/tools/kenyan-translator/"
                  className="btn-outline text-sm sm:text-base px-5 py-3 sm:px-6 sm:py-3.5"
                >
                  <Globe className="w-4 h-4 text-kenya-green-light shrink-0" />
                  22-Language Translator
                </Link>
                <Link
                  href="/tools/"
                  className="btn-outline text-sm sm:text-base px-5 py-3 sm:px-6 sm:py-3.5"
                >
                  All {TOOLS.length} Calculators
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />
      </section>

      {/* FLAGSHIP MAIN FEATURE: KENYAN LANGUAGE LEARNING & TRANSLATOR HUB */}
      <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6 sm:py-16">
        <div className="rounded-2xl sm:rounded-3xl border border-gold/35 bg-gradient-to-br from-bg-card via-bg-card to-bg-elevated p-3.5 sm:p-8 lg:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Flagship Main Feature
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-[family-name:var(--font-outfit)] text-text-primary leading-tight">
                Interactive Kenyan Languages, Translator &amp; Oral Wisdom Hub
              </h2>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mt-2">
                Explore {PUBLISHED_COURSES.length} structured interactive courses with step-by-step skill modules, 3D flip flashcards, written phonetic guides, grammar tables, 4 vocabulary mini-games, and a 22-language bidirectional dictionary.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 shrink-0">
              <Link
                href="/tools/learn/"
                className="btn-gold text-xs sm:text-sm px-4 py-2.5 sm:px-5 sm:py-3"
              >
                Open Language Hub →
              </Link>
              <Link
                href="/tools/kenyan-translator/"
                className="btn-outline text-xs sm:text-sm px-4 py-2.5 sm:px-5 sm:py-3"
              >
                Open 22-Language Dictionary →
              </Link>
            </div>
          </div>

          {/* 4 Pillar Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="rounded-xl border border-border bg-bg-elevated/50 p-4">
              <div className="flex items-center gap-2 text-gold font-bold text-sm mb-1">
                <Languages className="w-4 h-4 shrink-0" />
                <span>{PUBLISHED_COURSES.length} Guided Courses</span>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Structured units teaching greetings, kinship, verbs, numbers, and daily conversation.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-bg-elevated/50 p-4">
              <div className="flex items-center gap-2 text-kenya-green-light font-bold text-sm mb-1">
                <Layers className="w-4 h-4 shrink-0" />
                <span>3D Flip Flashcards</span>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Interactive study decks, spaced repetition reviews, and written phonetic guides.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-bg-elevated/50 p-4">
              <div className="flex items-center gap-2 text-sky-light font-bold text-sm mb-1">
                <Gamepad2 className="w-4 h-4 shrink-0" />
                <span>4 Language Mini-Games</span>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Play Wordle, Word Scramble, 60-Second Speed Match, and Memory Cards in any course.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-bg-elevated/50 p-4">
              <div className="flex items-center gap-2 text-gold font-bold text-sm mb-1">
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>1,000+ Proverbs &amp; Grammar</span>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Authentic Gĩkũyũ, Dholuo, Bantu, Nilotic &amp; Cushitic proverbs, riddles, and grammar tables.
              </p>
            </div>
          </div>

          {/* Direct Course Launch Grid */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-text-secondary">
                Jump Directly Into a Language Course
              </h3>
              <Link href="/tools/learn/" className="text-xs font-semibold text-gold hover:underline">
                View all {PUBLISHED_COURSES.length} courses →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3">
              {PUBLISHED_COURSES.slice(0, 12).map(({ config, units }) => {
                const skillCount = units.reduce((s, u) => s + u.skills.length, 0);
                return (
                  <Link
                    key={config.id}
                    href={`/tools/learn/${config.id}/`}
                    className="group rounded-xl border border-border bg-bg-card hover:border-gold/50 p-3.5 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1.5 mb-1">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: config.color }}
                        />
                        <span className="text-[0.6875rem] text-text-muted font-medium">
                          {config.family}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-text-primary group-hover:text-gold transition-colors leading-snug break-words">
                        {config.name}
                      </h4>
                      {config.nativeName &&
                        !config.name.toLowerCase().includes(config.nativeName.toLowerCase()) && (
                          <p className="text-xs text-text-muted mt-0.5 truncate">
                            {config.nativeName}
                          </p>
                        )}
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-border/60 flex items-center justify-between text-xs">
                      <span className="text-kenya-green-light font-semibold">
                        {skillCount} modules
                      </span>
                      <span className="text-gold font-bold group-hover:translate-x-0.5 transition-transform">
                        →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PINNED TOOLS */}
      <PinnedToolsHomeSection />

      {/* POPULAR TOOLS */}
      <PopularToolsSection />

      <div className="section-divider mx-auto max-w-7xl" />

      {/* FLAGSHIP PUBLIC DATA HUBS (47 COUNTIES & MATATU ROUTES) */}
      <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <Link
            href="/county/"
            className="group bg-bg-card border border-border hover:border-gold/50 rounded-2xl p-4 sm:p-8 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kenya-green/10 border border-kenya-green/20 text-kenya-green-light text-xs font-semibold mb-3 sm:mb-4">
                <Landmark className="w-3.5 h-3.5 shrink-0" /> Consolidated Civic Module
              </div>
              <h2 className="text-lg sm:text-2xl font-bold font-[family-name:var(--font-outfit)] text-text-primary group-hover:text-gold transition-colors mb-2">
                Kenya 47 Counties Intelligence Hub
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                All county data united in one hub — compare Governors, Senators, Woman Representatives,{" "}
                <strong>290 Constituencies</strong>, <strong>FY 2025/26 Controller of Budget Allocations</strong>,{" "}
                <strong>12-Month Rainfall &amp; Climate Zones</strong>, SHA Hospitals, Postal Codes, and side-by-side county comparisons.
              </p>
            </div>
            <span className="text-xs sm:text-sm font-bold text-gold group-hover:underline">
              Open 47 Counties Hub (Directory · Budgets · Constituencies · Climate · Compare) →
            </span>
          </Link>

          <Link
            href="/matatu/"
            className="group bg-bg-card border border-border hover:border-gold/50 rounded-2xl p-4 sm:p-8 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold mb-3 sm:mb-4">
                <BusFront className="w-3.5 h-3.5 shrink-0" /> Interactive Transit Module
              </div>
              <h2 className="text-lg sm:text-2xl font-bold font-[family-name:var(--font-outfit)] text-text-primary group-hover:text-gold transition-colors mb-2">
                Kenya Matatu Routes, Stages &amp; Fares Hub
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                Navigate public transport across <strong>Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and Thika</strong>. View CBD boarding stages, route numbers, corridor distances, peak vs off-peak fares, and registered SACCO operators on interactive maps.
              </p>
            </div>
            <span className="text-xs sm:text-sm font-bold text-gold group-hover:underline">
              Open Matatu Routes Explorer (64+ Verified Routes Across 6 Towns) →
            </span>
          </Link>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-7xl" />

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6 sm:py-16">
        <div className="text-center mb-6 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-gold mb-2">
            Browse by Category
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-outfit)] tracking-tight">
            {TOOL_CATEGORIES.length} focused Kenyan categories
          </h2>
          <p className="text-text-muted text-sm mt-2 max-w-lg mx-auto leading-relaxed">
            Purpose-built tools for Kenyan life — indigenous languages, KRA taxes &amp; SACCOs, CBC &amp; KUCCPS education, car imports, mjengo construction, and utilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {TOOL_CATEGORIES.map((cat) => {
            const count = TOOLS.filter((t) => t.category === cat.id).length;
            return (
              <Link
                key={cat.id}
                href={`/tools/?category=${cat.id}`}
                className="tool-card bg-bg-card border border-border rounded-2xl p-4 sm:p-6 flex items-start gap-3.5 sm:gap-4 group"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/[0.04] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.07] transition-colors">
                  <span className="text-xl sm:text-2xl tool-icon"><DynamicIcon emoji={cat.icon} className="w-[1em] h-[1em] inline-block mb-[0.1em]" /></span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-text-primary font-[family-name:var(--font-outfit)] group-hover:text-gold transition-colors mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-2">
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
      <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-10 gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-gold mb-1.5 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> In-Depth Kenyan Guides
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-outfit)] tracking-tight text-text-primary">
              2026 Statutory Guides &amp; Worked Examples
            </h2>
            <p className="text-sm text-text-secondary mt-1.5 max-w-2xl leading-relaxed">
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
              className="bg-bg-card border border-border hover:border-gold/50 rounded-2xl p-5 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex flex-wrap items-center gap-1.5 mb-3">
                  {(post.tags || []).slice(0, 2).map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs text-text-muted ml-auto">
                    {post.readTime} min read
                  </span>
                </div>
                <h3 className="text-base font-bold text-text-primary font-[family-name:var(--font-outfit)] group-hover:text-gold transition-colors leading-snug mb-2">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary line-clamp-3 leading-relaxed">
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
      <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6 sm:py-16">
        <div className="text-center mb-6 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-gold mb-2">
            Built Different
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-outfit)] tracking-tight">
            Why KenyaHub?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {[
            {
              icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-kenya-green mb-1" />,
              title: "100% Kenyan",
              desc: "Built specifically for Kenya — 22 indigenous language courses, 2026 KRA tax bands, Safaricom tariffs, CRSP schedules, and KICD curriculum.",
              accent: "from-kenya-green/10 to-transparent",
            },
            {
              icon: <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-gold mb-1" />,
              title: "Officially Sourced",
              desc: "Grounded in verified linguistic corpora and official publications from KRA, KUCCPS, SHA, KICD, NTSA, KNBS, COB, SASRA, and EPRA.",
              accent: "from-gold/10 to-transparent",
            },
            {
              icon: <BadgeCheck className="w-6 h-6 sm:w-8 sm:h-8 text-sky mb-1" />,
              title: "Free Forever",
              desc: "No registration, no hidden fees, no paywalls. Every language course, dictionary, and calculator is completely free.",
              accent: "from-sky/10 to-transparent",
            },
            {
              icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-kenya-red mb-1" />,
              title: "Mobile-First & Privacy-Safe",
              desc: "All lessons and calculations run locally on your device — your progress and financial numbers stay private in your browser.",
              accent: "from-kenya-red/10 to-transparent",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border border-border p-4 sm:p-6 bg-gradient-to-b ${item.accent} overflow-hidden`}
            >
              <div className="mb-2.5 sm:mb-3">{item.icon}</div>
              <h3 className="text-sm sm:text-base font-bold text-text-primary mb-1.5 font-[family-name:var(--font-outfit)]">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="maasai-border-top" />
        <div className="bg-bg-secondary py-10 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-outfit)] mb-3 sm:mb-4 tracking-tight">
              Start learning a Kenyan language today
            </h2>
            <p className="text-text-muted text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed">
              From Kiswahili, Gĩkũyũ, and Dholuo to Kalenjin, Maasai, and Kigiriama — explore interactive courses or run your 2026 Kenyan financial numbers in seconds.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/tools/learn/" className="btn-gold text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4">
                <Languages className="w-4 h-4 shrink-0" />
                Explore 22 Kenyan Languages
              </Link>
              <Link href="/tools/" className="btn-outline text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4">
                Browse All {TOOLS.length} Calculators
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
