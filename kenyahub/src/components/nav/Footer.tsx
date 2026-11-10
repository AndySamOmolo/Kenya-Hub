import Link from "next/link";
import { TOOL_CATEGORIES } from "@/lib/tools-registry";
import CookieSettingsFooterLink from "@/components/nav/CookieSettingsFooterLink";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <img src="/kenya-flag.svg" alt="Kenya Flag" className="w-5 h-auto rounded-[1px] shadow-sm" />
              <span className="text-base font-extrabold font-[family-name:var(--font-outfit)] gradient-text-kenya">
                KenyaHub
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-xs">
              Interactive Kenyan language learning platform (22 languages, proverbs &amp; dictionaries) and verified statutory calculators built for Kenya.
            </p>
          </div>

          {/* Flagship Language Courses */}
          <div>
            <h3 className="text-xs font-bold text-text-secondary mb-2.5 sm:mb-3 uppercase tracking-[0.1em]">
              Learn Kenyan Languages
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/tools/learn/", label: "All 22 Languages Hub" },
                { href: "/tools/kenyan-translator/", label: "22-Language Translator" },
                { href: "/tools/learn/swahili/", label: "Learn Kiswahili" },
                { href: "/tools/learn/kikuyu/", label: "Learn Gĩkũyũ" },
                { href: "/tools/learn/luo/", label: "Learn Dholuo" },
                { href: "/tools/learn/kalenjin/", label: "Learn Kalenjin" },
                { href: "/tools/learn/luhya/", label: "Learn Luluhya" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs font-bold text-text-secondary mb-2.5 sm:mb-3 uppercase tracking-[0.1em]">
              Categories
            </h3>
            <ul className="space-y-2">
              {TOOL_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/tools/?category=${cat.id}`}
                    className="text-xs sm:text-sm text-text-muted hover:text-gold transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-text-secondary mb-2.5 sm:mb-3 uppercase tracking-[0.1em]">
              Flagship Hubs &amp; Calculators
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/county/", label: "47 Counties Hub" },
                { href: "/matatu/", label: "Matatu Routes Hub" },
                { href: "/tools/paye-calculator/", label: "PAYE Salary Calculator" },
                { href: "/tools/mpesa-fee-calculator/", label: "M-Pesa Fee Calculator" },
                { href: "/tools/kra-car-import-calculator/", label: "KRA Car Import Duty" },
                { href: "/tools/kuccps-cluster-calculator/", label: "KUCCPS Cluster Calculator" },
                { href: "/blog/", label: "Kenya Guides & Blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 sm:mt-12 pt-5 sm:pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3.5 sm:gap-4">
            <p className="text-xs text-text-muted">
              © {new Date().getFullYear()} KenyaHub · Nairobi, Kenya
            </p>
            <Link href="/about/" className="text-xs text-text-muted hover:text-text-secondary transition-colors">
              About Us
            </Link>
            <Link href="/contact/" className="text-xs text-text-muted hover:text-text-secondary transition-colors">
              Contact
            </Link>
            <Link href="/privacy/" className="text-xs text-text-muted hover:text-text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="text-xs text-text-muted hover:text-text-secondary transition-colors">
              Terms of Service
            </Link>
            <CookieSettingsFooterLink />
          </div>
          <p className="text-xs text-text-muted text-center sm:text-right">
            Kenyan Languages &amp; Public Data Platform · Official 2026 Kenyan sources
          </p>
        </div>
      </div>

      {/* Flag stripe */}
      <div className="kenya-stripe w-full" />
    </footer>
  );
}
