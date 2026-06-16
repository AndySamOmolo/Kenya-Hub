import Link from "next/link";
import { getRelatedTools, getCategoryInfo } from "@/lib/tools-registry";
import type { Tool } from "@/lib/types";

interface ToolShellProps {
  tool: Tool;
  children: React.ReactNode;
  faq?: { question: string; answer: string }[];
}

export default function ToolShell({ tool, children, faq }: ToolShellProps) {
  const related = getRelatedTools(tool.slug, 4);
  const category = getCategoryInfo(tool.category);

  const faqSchema = faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((q) => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: { "@type": "Answer", text: q.answer },
        })),
      }
    : null;

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.title,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web Browser",
    description: tool.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "KES" },
    provider: { "@type": "Organization", name: "KenyaHub" },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1.5 text-xs text-text-muted mb-8">
        <Link href="/" className="hover:text-gold transition-colors">
          Home
        </Link>
        <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <Link href="/tools" className="hover:text-gold transition-colors">
          Tools
        </Link>
        <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-text-secondary truncate">{tool.shortTitle}</span>
      </nav>

      {/* ── Header ── */}
      <header className="mb-10">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-border flex items-center justify-center flex-shrink-0">
            <span className="text-[1.75rem]">{tool.icon}</span>
          </div>
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl lg:text-[1.75rem] font-bold font-[family-name:var(--font-outfit)] text-text-primary leading-tight tracking-tight">
              {tool.title}
            </h1>
          </div>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-5 max-w-2xl">
          {tool.description}
        </p>

        <div className="flex flex-wrap items-center gap-2.5">
          {category && (
            <span className={`badge ${category.badgeClass}`}>
              {category.icon} {category.name}
            </span>
          )}
          <span className="inline-flex items-center gap-1 text-[0.625rem] text-text-muted bg-white/[0.02] border border-border rounded-full px-2.5 py-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {tool.dataSource}
          </span>
          <span className="inline-flex items-center gap-1 text-[0.625rem] text-text-muted bg-white/[0.02] border border-border rounded-full px-2.5 py-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {tool.updateFrequency === "static"
              ? "Rarely changes"
              : tool.updateFrequency === "annual"
              ? "Updated annually"
              : tool.updateFrequency === "periodic"
              ? "Updated periodically"
              : "Live data"}
          </span>
        </div>
      </header>

      {/* ── Tool Content ── */}
      <div className="mb-16">{children}</div>

      {/* ── FAQ Section ── */}
      {faq && faq.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group bg-bg-card border border-border rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-[0.8125rem] font-medium text-text-primary hover:text-gold transition-colors list-none">
                  <span className="pr-4">{item.question}</span>
                  <svg
                    className="w-4 h-4 text-text-muted group-open:rotate-180 transition-transform duration-200 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-text-secondary leading-relaxed border-t border-border pt-4">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* ── Related Tools ── */}
      {related.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-kenya-green/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-kenya-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">
              Related Tools
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((rt) => {
              const rtCat = getCategoryInfo(rt.category);
              return (
                <Link
                  key={rt.slug}
                  href={`/tools/${rt.slug}`}
                  className="tool-card bg-bg-card border border-border rounded-xl p-4 block group"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl tool-icon flex-shrink-0">
                      {rt.icon}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[0.8125rem] font-semibold text-text-primary mb-1 group-hover:text-gold transition-colors">
                        {rt.shortTitle}
                      </h3>
                      <p className="text-[0.6875rem] text-text-muted line-clamp-2 leading-relaxed">
                        {rt.description}
                      </p>
                      {rtCat && (
                        <span className={`badge ${rtCat.badgeClass} mt-2`}>
                          {rtCat.name}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
