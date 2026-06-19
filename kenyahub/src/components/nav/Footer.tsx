import Link from "next/link";
import { TOOL_CATEGORIES } from "@/lib/tools-registry";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <img src="/kenya-flag.svg" alt="Kenya Flag" className="w-5 h-auto rounded-[1px] shadow-sm" />
              <span className="text-base font-extrabold font-[family-name:var(--font-outfit)] gradient-text-kenya">
                KenyaHub
              </span>
            </Link>
            <p className="text-xs text-text-muted leading-relaxed max-w-[200px]">
              Free, accurate tools built with official Kenyan government data.
              No sign-up required.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-[0.6875rem] font-bold text-text-secondary mb-3 uppercase tracking-[0.1em]">
              Categories
            </h3>
            <ul className="space-y-2">
              {TOOL_CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/tools?category=${cat.id}`}
                    className="text-xs text-text-muted hover:text-gold transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.6875rem] font-bold text-text-secondary mb-3 uppercase tracking-[0.1em]">
              More
            </h3>
            <ul className="space-y-2">
              {TOOL_CATEGORIES.slice(5).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/tools?category=${cat.id}`}
                    className="text-xs text-text-muted hover:text-gold transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[0.6875rem] font-bold text-text-secondary mb-3 uppercase tracking-[0.1em]">
              Popular Tools
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/tools/paye-calculator", label: "PAYE Calculator" },
                { href: "/tools/mpesa-fee-calculator", label: "M-Pesa Fees" },
                { href: "/tools/kuccps-cluster-calculator", label: "KUCCPS Calculator" },
                { href: "/tools/cbc-curriculum", label: "CBC Curriculum" },
                { href: "/tools/public-holidays", label: "Public Holidays" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <p className="text-[0.65rem] text-text-muted">
              © {new Date().getFullYear()} KenyaHub
            </p>
            <Link href="/privacy" className="text-[0.65rem] text-text-muted hover:text-text-secondary transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-[0.65rem] text-text-muted hover:text-text-secondary transition-colors">
              Terms
            </Link>
          </div>
          <p className="text-[0.65rem] text-text-muted">
            Data sourced from official Kenyan government publications
          </p>
        </div>
      </div>

      {/* Flag stripe */}
      <div className="kenya-stripe w-full" />
    </footer>
  );
}
