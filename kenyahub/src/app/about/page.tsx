import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — KenyaHub",
  description: "Learn about KenyaHub — Kenya's leading platform for free, accurate digital tools and public data services.",
  alternates: { canonical: "https://kenyahub.me/about/" },
};

const officialSources = [
  { name: "KNBS", fullName: "Kenya National Bureau of Statistics", description: "Demographics, CPI inflation, GDP, census reports, and economic surveys." },
  { name: "CBK", fullName: "Central Bank of Kenya", description: "Monetary policy, exchange rates, interest rates (CBR), and treasury securities." },
  { name: "KRA", fullName: "Kenya Revenue Authority", description: "PAYE tax bands, Housing Levy, NITA, and tax compliance regulations." },
  { name: "KALRO", fullName: "Kenya Agricultural & Livestock Research Organization", description: "Crop planting calendars, soil surveys, and farming extension guidelines." },
  { name: "NTSA", fullName: "National Transport and Safety Authority", description: "Vehicle registration series, driving license regulations, and matatu SACCO routes." },
  { name: "KUCCPS", fullName: "Kenya Universities and Colleges Central Placement Service", description: "University cluster points formula, course requirements, and student placement metrics." },
  { name: "KNEC", fullName: "Kenya National Examinations Council", description: "KCSE examination grading scales, school mean scores, and national performance statistics." },
  { name: "KFS", fullName: "Kenya Forest Service", description: "Gazetted national forest reserves, ecosystem categories, and permit regulations." },
  { name: "KMPDC / LSK / EBK", fullName: "Professional Regulatory Councils", description: "Licensed practitioner verification databases, professional fees, and registration requirements." },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Hero */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold">
          🇰🇪 Built for Kenya, Powered by Open Data
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-outfit)] text-text-primary tracking-tight">
          About <span className="gradient-text-kenya">KenyaHub</span>
        </h1>
        <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
          KenyaHub is an independent public digital utility platform providing free, fast, and accessible digital tools and structured public data for citizens, business owners, students, and farmers across Kenya.
        </p>
      </div>

      {/* 5 Core Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-lg bg-kenya-green/10 flex items-center justify-center text-xl">💡</div>
          <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">100% Free Access</h3>
          <p className="text-xs text-text-secondary leading-relaxed">
            All tools on KenyaHub are completely free to use. No mandatory accounts, subscriptions, or paywalls required.
          </p>
        </div>

        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-xl">🏛️</div>
          <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">Official Government Data</h3>
          <p className="text-xs text-text-secondary leading-relaxed">
            Our calculators and reference databases are directly modeled on published Kenyan government regulations, acts of parliament, and official agency reports.
          </p>
        </div>

        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-lg bg-sky/10 flex items-center justify-center text-xl">🔒</div>
          <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">Privacy-First Architecture</h3>
          <p className="text-xs text-text-secondary leading-relaxed">
            All calculations (such as PAYE salary figures or M-Pesa fees) execute locally in your web browser. Your confidential numbers are never transmitted to external servers.
          </p>
        </div>

        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-lg bg-kenya-red/10 flex items-center justify-center text-xl">⚡</div>
          <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">Static & Fast Infrastructure</h3>
          <p className="text-xs text-text-secondary leading-relaxed">
            Hosted on Cloudflare Pages static edge network to guarantee lightning-fast page loading even on low-speed 3G mobile data connections.
          </p>
        </div>

        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-xl">🌍</div>
          <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">Localized for Kenya</h3>
          <p className="text-xs text-text-secondary leading-relaxed">
            Built specifically for Kenyan economic, education, and transport realities — from KES currency formatting to CBC curriculum stages and Matatu SACCO routes.
          </p>
        </div>

        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-lg bg-kenya-green/10 flex items-center justify-center text-xl">🔍</div>
          <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">Regular Data Updates</h3>
          <p className="text-xs text-text-secondary leading-relaxed">
            We continuously audit tax brackets, EPRA fuel tariffs, KRA updates, and national exam scales so you always work with current information.
          </p>
        </div>
      </div>

      {/* Official Data Sources Table */}
      <div className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-2">
            📊 Authoritative Data Sources
          </h2>
          <p className="text-xs text-text-muted">
            KenyaHub synthesizes public domain records from accredited state institutions into intuitive interactive tools:
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

      {/* Editorial Standards & Disclaimer */}
      <div className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-text-primary">
          ⚖️ Editorial Integrity & Professional Disclaimer
        </h2>
        <p className="text-xs text-text-secondary leading-relaxed">
          While KenyaHub makes every effort to maintain absolute precision by cross-referencing published Gazette Notices and official publications, calculations provided on this site are for informational and educational purposes only. They do not constitute formal legal, tax, accounting, or professional financial advice. For official tax returns or legal compliance, consult a certified public accountant (CPA) or advocate of the High Court of Kenya.
        </p>
        <div className="pt-2 flex items-center gap-4 text-xs">
          <Link href="/contact" className="font-semibold text-gold hover:underline">Have a suggestion or correction? Contact Us →</Link>
        </div>
      </div>
    </div>
  );
}
