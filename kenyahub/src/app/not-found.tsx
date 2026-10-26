import type { Metadata } from "next";
import Link from "next/link";
import DynamicIcon from "@/components/ui/DynamicIcon";

export const metadata: Metadata = {
  title: "Page Not Found (404)",
  description: "The requested page could not be found. Explore KenyaHub's 44+ free Kenyan tools, 47 Counties Hub, Matatu Routes, and Guides.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div
      data-error-page="true"
      data-nosnippet="true"
      className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-8"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 text-3xl">
        <DynamicIcon emoji="🧭" />
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-outfit)] text-text-primary">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-text-secondary max-w-lg mx-auto leading-relaxed">
          We couldn&apos;t find the page you were looking for. Use the links below to jump directly to our most popular Kenyan tools and directories.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto">
        <Link
          href="/tools/"
          className="bg-bg-card border border-border rounded-xl p-4 hover:border-gold/50 transition-colors"
        >
          <p className="text-sm font-bold text-gold">🧰 Browse All 44 Tools →</p>
          <p className="text-xs text-text-muted mt-1">PAYE, M-Pesa, KPLC tokens, KCSE, KUCCPS &amp; more</p>
        </Link>
        <Link
          href="/county/"
          className="bg-bg-card border border-border rounded-xl p-4 hover:border-gold/50 transition-colors"
        >
          <p className="text-sm font-bold text-kenya-green-light">🏛️ 47 Counties Hub →</p>
          <p className="text-xs text-text-muted mt-1">Budgets, Governors, 290 Constituencies &amp; Climate</p>
        </Link>
        <Link
          href="/matatu/"
          className="bg-bg-card border border-border rounded-xl p-4 hover:border-gold/50 transition-colors"
        >
          <p className="text-sm font-bold text-sky-light">🚌 Matatu Routes &amp; Fares →</p>
          <p className="text-xs text-text-muted mt-1">Nairobi, Mombasa, Kisumu, Nakuru, Eldoret &amp; Thika</p>
        </Link>
        <Link
          href="/blog/"
          className="bg-bg-card border border-border rounded-xl p-4 hover:border-gold/50 transition-colors"
        >
          <p className="text-sm font-bold text-text-primary">📖 Kenya Guides &amp; Blog →</p>
          <p className="text-xs text-text-muted mt-1">In-depth articles on tax, education, and public services</p>
        </Link>
      </div>
    </div>
  );
}
