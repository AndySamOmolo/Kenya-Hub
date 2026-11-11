import type { Metadata } from "next";
import Link from "next/link";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { TOOLS } from "@/lib/tools-registry";

export const metadata: Metadata = {
  title: "About Us — Mission, Official Data Sources & Editorial Methodology",
  description:
    "Learn about KenyaHub — Kenya's independent digital public utility platform providing free statutory calculators, county intelligence, matatu transit maps, and language tools.",
  keywords: [
    "about KenyaHub",
    "Kenyan public data platform",
    "KRA KNBS NTSA KUCCPS calculators",
    "free online tools Kenya",
  ],
  alternates: {
    canonical: "https://kenyahub.me/about/",
    languages: {
      "en-KE": "https://kenyahub.me/about/",
      en: "https://kenyahub.me/about/",
    },
  },
  openGraph: {
    title: "About Us — Mission, Official Data Sources & Methodology | KenyaHub",
    description:
      "Learn about KenyaHub — Kenya's independent digital public utility platform providing free statutory calculators, county intelligence, and language tools.",
    type: "website",
    locale: "en_KE",
    siteName: "KenyaHub",
    url: "https://kenyahub.me/about/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About KenyaHub — Free Tools & Public Data for Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Mission, Official Data Sources & Methodology | KenyaHub",
    description:
      "Learn about KenyaHub — Kenya's independent digital public utility platform providing free statutory calculators and reference hubs.",
    images: ["/og-image.png"],
  },
};

const officialSources = [
  { name: "KRA", fullName: "Kenya Revenue Authority", description: "PAYE income tax brackets, Affordable Housing Levy, CRSP motor vehicle import duty schedules, and customs tariffs." },
  { name: "KNBS", fullName: "Kenya National Bureau of Statistics", description: "2019 Population and Housing Census, CPI inflation indices, construction input cost indices, and county demographics." },
  { name: "COB & CRA", fullName: "Controller of Budget & Commission on Revenue Allocation", description: "FY 2025/26 County Equitable Share allocations, Own-Source Revenue (OSR) targets, and budget absorption reports." },
  { name: "SASRA & CBK", fullName: "SACCO Societies Regulatory Authority & Central Bank", description: "Tier-1 DT-SACCO supervision reports, BOSA loan multiplier benchmarks, dividend rates, and monetary policy." },
  { name: "KICD, KNEC & KUCCPS", fullName: "Education & Placement Agencies", description: "CBC 2-6-3-3-3 curriculum frameworks, KCSE 12-point grading boundaries, and 20-cluster university degree formulas." },
  { name: "NTSA", fullName: "National Transport and Safety Authority", description: "Motor vehicle registration series (KAA–KDU), Smart Driving License classes (A–G), Traffic Act fines, and PSV SACCO routes." },
  { name: "EPRA & WASREB", fullName: "Energy & Water Regulatory Boards", description: "KPLC prepaid electricity tariff bands, fuel/forex pass-through levies, and tiered county water & sewerage tariffs." },
  { name: "SHA & MOH", fullName: "Social Health Authority & Ministry of Health", description: "SHIF 2.75% contribution rules, KEPH Level 2–6 hospital accreditation, KEPI immunization schedules, and food composition tables." },
  { name: "KALRO & NCPB", fullName: "Agricultural Research & Cereals Board", description: "Agro-ecological crop planting calendars, certified seed rates, soil classifications, and KES 2,500 e-Voucher fertilizer subsidies." },
];

export default function AboutPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About KenyaHub — Mission, Official Data Sources & Editorial Methodology",
    url: "https://kenyahub.me/about/",
    inLanguage: "en-KE",
    mainEntity: {
      "@type": "Organization",
      name: "KenyaHub",
      url: "https://kenyahub.me",
      logo: "https://kenyahub.me/og-image.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "contact@kenyahub.me",
        contactType: "editorial and customer support",
        areaServed: "KE",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://kenyahub.me/" },
      { "@type": "ListItem", position: 2, name: "About Us", item: "https://kenyahub.me/about/" },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8 py-10 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-text-muted">
        <Link href="/" className="hover:text-gold transition-colors">
          Home
        </Link>
        <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-text-secondary">About Us</span>
      </nav>

      {/* Hero */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold">
          <DynamicIcon emoji="🇰🇪" className="w-3 h-3 inline-block mr-1" /> Built in Nairobi for Kenya · Powered by Open Public Data
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-outfit)] text-text-primary tracking-tight">
          About <span className="gradient-text-kenya">KenyaHub</span>
        </h1>
        <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
          KenyaHub is an independent Kenyan public digital utility platform engineered to transform complex Acts of Parliament, Gazette Notices, and institutional datasets into fast, transparent, and free interactive calculators and reference hubs for citizens, professionals, students, and business owners.
        </p>
      </div>

      {/* 6 Core Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-lg bg-kenya-green/10 flex items-center justify-center text-xl"><DynamicIcon emoji="💡" /></div>
          <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">100% Free Public Access</h3>
          <p className="text-xs text-text-secondary leading-relaxed">
            All {TOOLS.length} specialized tools, 47 county profiles, 64+ matatu route maps, and 22 language courses on KenyaHub are free to use without accounts or paywalls.
          </p>
        </div>

        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-xl"><DynamicIcon emoji="🏛️" /></div>
          <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">Statutory Precision</h3>
          <p className="text-xs text-text-secondary leading-relaxed">
            Every formula is directly modeled on published Kenyan legislation — including the Income Tax Act (Cap 470), Tax Laws (Amendment) Act 2024, Stamp Duty Act (Cap 480), and Traffic Act (Cap 403).
          </p>
        </div>

        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-lg bg-sky/10 flex items-center justify-center text-xl"><DynamicIcon emoji="🔒" /></div>
          <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">100% Local Browser Privacy</h3>
          <p className="text-xs text-text-secondary leading-relaxed">
            All financial and academic calculations execute locally inside your browser. Your salary figures, loan balances, and grades never leave your device.
          </p>
        </div>

        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-lg bg-kenya-red/10 flex items-center justify-center text-xl"><DynamicIcon emoji="⚡" /></div>
          <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">Edge-First Speed</h3>
          <p className="text-xs text-text-secondary leading-relaxed">
            Compiled as a static-first web application and served across global edge nodes so pages load instantaneously even on 3G rural mobile connections.
          </p>
        </div>

        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-xl"><DynamicIcon emoji="🌍" /></div>
          <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">Cultural &amp; Linguistic Heritage</h3>
          <p className="text-xs text-text-secondary leading-relaxed">
            Preserves 22 Kenyan languages through structured interactive courses, 50,000+ dictionary entries, and authenticated historical oral literature (1842–1929).
          </p>
        </div>

        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-lg bg-kenya-green/10 flex items-center justify-center text-xl"><DynamicIcon emoji="🔍" /></div>
          <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">Continuous Statutory Audits</h3>
          <p className="text-xs text-text-secondary leading-relaxed">
            Our automated data-freshness auditor tracks Finance Act revisions, EPRA tariff adjustments, NSSF tiers, and KRA CRSP schedules.
          </p>
        </div>
      </div>

      {/* Editorial Research & Verification Methodology */}
      <div className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2">
          <DynamicIcon emoji="🛡️" className="w-5 h-5 text-kenya-green-light" /> Editorial Methodology &amp; Verification Process
        </h2>
        <div className="space-y-3 text-xs sm:text-sm text-text-secondary leading-relaxed">
          <p>
            Every calculator, dataset, and editorial guide published on KenyaHub undergoes a structured three-stage verification workflow conducted by our Nairobi-based engineering and research team:
          </p>
          <ol className="list-decimal ml-5 space-y-2">
            <li>
              <strong className="text-text-primary">Primary Statutory Sourcing:</strong> We never rely on secondary blog summaries or unverified social media circulars. All tax bands, statutory deductions, fee schedules, and institutional rules are extracted directly from enacted Acts of Parliament (via the National Council for Law Reporting / Kenya Law), official Kenya Gazette Notices, and regulator tariff schedules.
            </li>
            <li>
              <strong className="text-text-primary">Deterministic Formula Validation:</strong> Calculation engines (such as our PAYE Gross-to-Net and Net-to-Gross solver, KRA CRSP cascading import duty calculator, and KUCCPS cluster weight evaluator) are unit-tested against official agency worked examples and manual CPA-K/QS spreadsheets before deployment.
            </li>
            <li>
              <strong className="text-text-primary">Automated Freshness Auditing &amp; Community Corrections:</strong> Every dataset in our repository is tagged with a source URL, statutory effective date, and maximum staleness threshold. When a new Finance Act, EPRA tariff review, or Gazette Notice takes effect—or when a reader submits a verified update via our Contact Desk—our team updates the underlying dataset and increments the verification timestamp.
            </li>
          </ol>
        </div>
      </div>

      {/* Official Data Sources Table */}
      <div className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-2">
            <DynamicIcon emoji="📊" className="w-5 h-5 inline-block mr-2" /> Primary Public Data Sources
          </h2>
          <p className="text-xs text-text-muted">
            KenyaHub synthesizes public-domain records and statutory schedules from the following Kenyan institutions:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {officialSources.map((src) => (
            <div key={src.name} className="bg-bg-elevated/60 border border-border/50 rounded-xl p-4 space-y-1">
              <span className="text-xs font-bold text-gold font-mono">{src.name}</span>
              <p className="text-xs font-semibold text-text-primary">{src.fullName}</p>
              <p className="text-[0.65rem] text-text-muted leading-relaxed">{src.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial Standards & Non-Affiliation Disclaimer */}
      <div className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-text-primary">
          <DynamicIcon emoji="⚖️" className="w-5 h-5 inline-block mr-2" /> Independence &amp; Professional Disclaimer
        </h2>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          <strong>Non-Affiliation Notice:</strong> KenyaHub is an independent private civic-technology and educational publication based in Nairobi, Kenya. We are not affiliated with, endorsed by, or contracted by the Government of the Republic of Kenya, KRA, NTSA, KICD, KNEC, KUCCPS, Safaricom PLC, or any county government.
        </p>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          <strong>Professional Advice Disclaimer:</strong> While KenyaHub makes every effort to maintain complete accuracy by cross-referencing published Gazette Notices and official schedules, calculations and guides provided on this platform are for informational and educational planning purposes only. They do not constitute formal legal, tax, accounting, medical, or engineering advice. For binding tax filings, land conveyancing, or statutory compliance, always consult a Certified Public Accountant (CPA-K), a licensed Advocate of the High Court of Kenya, or the relevant government agency.
        </p>
        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
          <Link href="/contact/" className="font-semibold text-gold hover:underline">Spotted a statutory rate update? Contact Our Editorial Desk →</Link>
          <Link href="/privacy/" className="font-semibold text-text-secondary hover:text-gold transition-colors">Privacy &amp; Cookie Policy →</Link>
          <Link href="/terms/" className="font-semibold text-text-secondary hover:text-gold transition-colors">Terms of Service →</Link>
        </div>
      </div>
    </div>
  );
}
