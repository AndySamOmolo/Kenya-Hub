import Link from "next/link";
import { TOOLS, TOOL_CATEGORIES } from "@/lib/tools-registry";

export default function HomePage() {
  const popularTools = TOOLS.slice(0, 6);

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "KenyaHub",
    url: "https://kenyahub.me",
    description: "Free online tools built for Kenya — PAYE salary calculator, M-Pesa fee calculator, CBC curriculum explorer, KUCCPS cluster points, public holidays, and more.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://kenyahub.me/tools?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KenyaHub",
    url: "https://kenyahub.me",
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
      {/* ═══════════════════════════════════════════
          HERO — radial gradient with Kenyan flag colors
          subtle decorative elements
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="gradient-hero min-h-[560px] sm:min-h-[600px] flex items-center">
          {/* Decorative background geometry — Maasai diamond pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large diamond */}
            <div className="absolute -top-20 -right-20 w-96 h-96 border border-white/[0.03] rotate-45 rounded-3xl" />
            <div className="absolute -bottom-32 -left-16 w-80 h-80 border border-white/[0.03] rotate-45 rounded-3xl" />
            {/* Gold accent dot pattern */}
            <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-gold/20 animate-float" />
            <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 rounded-full bg-kenya-green/20 animate-float" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/3 left-1/4 w-1 h-1 rounded-full bg-kenya-red/20 animate-float" style={{ animationDelay: "2s" }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="max-w-2xl">
              {/* Status pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-kenya-green opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-kenya-green-light" />
                </span>
                <span className="text-xs font-medium text-text-secondary tracking-wide">
                  {TOOLS.length}+ tools · Free forever · Official data
                </span>
              </div>

              <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.5rem] font-extrabold font-[family-name:var(--font-outfit)] leading-[1.1] tracking-tight mb-6">
                The tools{" "}
                <span className="gradient-text-kenya">every Kenyan</span>
                {" "}needs, in one place
              </h1>

              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-10 max-w-xl">
                Calculate your net salary, explore CBC curriculum, decode number
                plates, check M-Pesa fees — all powered by official Kenyan
                government data. Zero sign-ups, zero cost.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/tools" className="btn-gold text-[0.9375rem] px-7 py-3.5">
                  Explore All Tools
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/tools/paye-calculator"
                  className="btn-outline text-[0.9375rem] px-7 py-3.5"
                >
                  Try PAYE Calculator
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient fade transition */}
        <div className="h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════
          POPULAR TOOLS — 3-column card grid
          ═══════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-gold mb-2">
              Most Popular
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-outfit)] tracking-tight">
              Tools Kenyans love
            </h2>
          </div>
          <Link
            href="/tools"
            className="hidden sm:flex items-center gap-1.5 text-sm text-text-muted hover:text-gold transition-colors font-medium"
          >
            View all
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTools.map((tool, i) => {
            const cat = TOOL_CATEGORIES.find((c) => c.id === tool.category);
            return (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="tool-card bg-bg-card border border-border rounded-2xl p-6 block group"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-[2rem] tool-icon flex-shrink-0 leading-none">
                    {tool.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[0.9375rem] font-semibold text-text-primary mb-1.5 font-[family-name:var(--font-outfit)] group-hover:text-gold transition-colors leading-snug">
                      {tool.shortTitle}
                    </h3>
                    <p className="text-xs text-text-muted line-clamp-2 leading-relaxed mb-3">
                      {tool.description}
                    </p>
                    {cat && (
                      <span className={`badge ${cat.badgeClass}`}>
                        {cat.icon} {cat.name}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="sm:hidden mt-6 text-center">
          <Link href="/tools" className="btn-outline text-sm">
            View All Tools →
          </Link>
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider mx-auto max-w-7xl" />

      {/* ═══════════════════════════════════════════
          CATEGORIES — browse by topic
          ═══════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-gold mb-2">
            Browse by Category
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-outfit)] tracking-tight">
            9 categories, one platform
          </h2>
          <p className="text-text-muted text-sm mt-3 max-w-md mx-auto">
            Every aspect of life in Kenya — from finances to farming, education
            to energy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOOL_CATEGORIES.map((cat) => {
            const count = TOOLS.filter((t) => t.category === cat.id).length;
            return (
              <Link
                key={cat.id}
                href={`/tools?category=${cat.id}`}
                className="tool-card bg-bg-card border border-border rounded-2xl p-6 flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.07] transition-colors">
                  <span className="text-2xl tool-icon">{cat.icon}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[0.9375rem] font-semibold text-text-primary font-[family-name:var(--font-outfit)] group-hover:text-gold transition-colors mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed mb-2">
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

      {/* Section divider */}
      <div className="section-divider mx-auto max-w-7xl" />

      {/* ═══════════════════════════════════════════
          WHY KENYAHUB — trust pillars
          ═══════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-gold mb-2">
            Built Different
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-outfit)] tracking-tight">
            Why KenyaHub?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: "🇰🇪",
              title: "100% Kenyan",
              desc: "Every tool uses real Kenyan data — KRA tax bands, Safaricom tariffs, KICD curriculum.",
              accent: "from-kenya-green/10 to-transparent",
            },
            {
              icon: "✅",
              title: "Officially Sourced",
              desc: "Data from KRA, KUCCPS, NHIF, KICD, NTSA, and other government bodies.",
              accent: "from-gold/10 to-transparent",
            },
            {
              icon: "🆓",
              title: "Free Forever",
              desc: "No registration, no hidden fees, no premium tiers. Every tool is free.",
              accent: "from-sky/10 to-transparent",
            },
            {
              icon: "📱",
              title: "Mobile-First",
              desc: "Built for phones first — because most Kenyans access the web on mobile.",
              accent: "from-kenya-red/10 to-transparent",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border border-border p-6 bg-gradient-to-b ${item.accent} overflow-hidden`}
            >
              <span className="text-3xl block mb-4">{item.icon}</span>
              <h3 className="text-sm font-bold text-text-primary mb-2 font-[family-name:var(--font-outfit)]">
                {item.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA — bottom banner
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="maasai-border-top" />
        <div className="bg-bg-secondary py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-outfit)] mb-4 tracking-tight">
              Ready to find the tool you need?
            </h2>
            <p className="text-text-muted text-sm mb-8 max-w-md mx-auto">
              From PAYE calculations to CBC curriculum — whatever you need as a
              Kenyan, we&apos;ve built it.
            </p>
            <Link href="/tools" className="btn-gold text-base px-8 py-4">
              Explore All Tools
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
