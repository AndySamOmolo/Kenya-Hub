import Link from "next/link";
import { getRelatedTools, getCategoryInfo, TOOLS } from "@/lib/tools-registry";
import type { Tool } from "@/lib/types";
import toolGuidesData from "@/data/tool-guides.json";
import { STATIC_BLOG_POSTS } from "@/data/blog-posts";
import PinToolButton from "./PinToolButton";
import ToolAccessTracker from "./ToolAccessTracker";
import DynamicIcon from "@/components/ui/DynamicIcon";

interface ToolShellProps {
  tool: Tool;
  children: React.ReactNode;
  faq?: { question: string; answer: string }[];
  breadcrumbSuffix?: { label: string; href?: string }[];
  hideHeader?: boolean;
  hideFooter?: boolean;
}

export default function ToolShell({ tool, children, faq, breadcrumbSuffix, hideHeader = false, hideFooter = false }: ToolShellProps) {
  const related = getRelatedTools(tool.slug, 4);
  const category = getCategoryInfo(tool.category);

  // Merge page FAQs with tool-guides.json FAQs so no tool ever lacks FAQ content
  const guideEntry = (toolGuidesData as any)?.guides?.[tool.slug] || {};
  const effectiveFaq: { question: string; answer: string }[] =
    faq && faq.length > 0 ? faq : guideEntry.faq || [];
  const guideNotes: string[] = guideEntry.notes || [];

  // Related blog posts for deep publisher content & internal SEO linking
  const relatedPosts = STATIC_BLOG_POSTS.filter((post) => {
    const text = `${post.title} ${post.excerpt} ${(post.tags || []).join(" ")}`.toLowerCase();
    return (
      text.includes(tool.shortTitle.toLowerCase()) ||
      tool.keywords.some((kw) => text.includes(kw.split(" ")[0].toLowerCase()))
    );
  }).slice(0, 2);

  const faqSchema =
    effectiveFaq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: effectiveFaq.map((q) => ({
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
    url: `https://kenyahub.me/tools/${tool.slug}/`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    inLanguage: "en-KE",
    isAccessibleForFree: true,
    description: tool.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "KES" },
    provider: {
      "@type": "Organization",
      name: "KenyaHub",
      url: "https://kenyahub.me",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://kenyahub.me/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: "https://kenyahub.me/tools/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tool.shortTitle,
        item: `https://kenyahub.me/tools/${tool.slug}/`,
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8 py-4 sm:py-10">
      <ToolAccessTracker tool={tool} />
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1.5 text-xs text-text-muted mb-3.5 sm:mb-8">
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
        {!breadcrumbSuffix ? (
          <span className="text-text-secondary truncate">{tool.shortTitle}</span>
        ) : (
          <>
            <Link href={`/tools/${tool.slug}`} className="hover:text-gold transition-colors truncate">
              {tool.shortTitle}
            </Link>
            {breadcrumbSuffix.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-1.5 truncate">
                <svg className="w-3 h-3 text-border-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-gold transition-colors truncate">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-text-secondary truncate">{crumb.label}</span>
                )}
              </span>
            ))}
          </>
        )}
      </nav>

      {/* ── Header ── */}
      {!hideHeader && (
      <header className="mb-4 sm:mb-8">
        <div className="flex items-start gap-3 sm:gap-4 mb-2.5 sm:mb-4">
          <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-border flex items-center justify-center flex-shrink-0">
            <span className="text-2xl sm:text-[1.75rem]"><DynamicIcon emoji={tool.icon} className="w-[1em] h-[1em]" /></span>
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-lg sm:text-2xl lg:text-[1.75rem] font-bold font-[family-name:var(--font-outfit)] text-text-primary leading-tight tracking-tight">
              {tool.title}
            </h1>
          </div>
          <div className="flex-shrink-0">
            <PinToolButton toolSlug={tool.slug} />
          </div>
        </div>

        <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-3 sm:mb-5 max-w-2xl">
          {tool.description}
        </p>

        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5">
          {category && (
            <Link href={`/tools?category=${category.id}`} className={`badge ${category.badgeClass} hover:opacity-90 transition-opacity`}>
              <DynamicIcon emoji={category.icon} className="w-[1em] h-[1em] inline-block mb-[0.1em]" /> {category.name}
            </Link>
          )}
          <span className="inline-flex items-center gap-1 text-[0.625rem] text-text-muted bg-white/[0.02] border border-border rounded-full px-2 sm:px-2.5 py-0.5 sm:py-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Source: {tool.dataSource}
          </span>
          <span className="inline-flex items-center gap-1 text-[0.625rem] text-text-muted bg-white/[0.02] border border-border rounded-full px-2 sm:px-2.5 py-0.5 sm:py-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {tool.updateFrequency === "static"
              ? "Verified 2026 Reference"
              : tool.updateFrequency === "annual"
              ? "Updated for 2026"
              : tool.updateFrequency === "periodic"
              ? "Updated periodically"
              : "Live data"}
          </span>
        </div>
      </header>
      )}

      {/* ── Tool Content ── */}
      <div className={hideFooter ? "mb-3 sm:mb-4" : "mb-7 sm:mb-14"}>{children}</div>

      {!hideFooter && (
        <>
      {/* ── Editorial Methodology & Data Verification Card (AdSense & E-E-A-T Value) ── */}
      <section className="mb-7 sm:mb-14 bg-bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="text-sm sm:text-base font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2">
            <DynamicIcon emoji="🛡️" className="w-4 h-4 text-kenya-green-light" /> Data Source, Methodology &amp; Verification
          </h2>
          <span className="text-[0.6875rem] text-kenya-green-light bg-kenya-green/10 border border-kenya-green/20 px-2.5 py-0.5 rounded-full font-semibold">
            ✓ Verified for 2026
          </span>
        </div>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          The <strong>{tool.title}</strong> is maintained by the KenyaHub research team using official publications from{" "}
          <strong>{tool.dataSource}</strong>. All calculations and lookups execute locally inside your browser for instant results and 100% data privacy.
        </p>
        {guideNotes.length > 0 && (
          <ul className="space-y-1.5 pt-2 border-t border-border/60 text-xs text-text-secondary">
            {guideNotes.slice(0, 5).map((note, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-gold font-bold">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        )}
        <p className="text-[0.6875rem] text-text-muted pt-2 border-t border-border/50">
          Editorial Disclaimer: Figures and reference data are provided for informational and educational purposes under Kenyan regulations. Always confirm formal filings with the relevant statutory authority ({tool.dataSource}).
        </p>
      </section>

      {/* ── FAQ Section ── */}
      {effectiveFaq.length > 0 && (
        <section className="mb-7 sm:mb-14">
          <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-6">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gold/10 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-2 sm:space-y-3">
            {effectiveFaq.map((item, i) => (
              <details
                key={i}
                className="group bg-bg-card border border-border rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4 cursor-pointer text-[0.8125rem] font-medium text-text-primary hover:text-gold transition-colors list-none">
                  <span className="pr-3 sm:pr-4">{item.question}</span>
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
                <div className="px-4 pb-3.5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-border pt-3 sm:pt-4">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* ── Related Guides & Articles (from Blog) ── */}
      {relatedPosts.length > 0 && (
        <section className="mb-7 sm:mb-14">
          <h2 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-3 sm:mb-4 flex items-center gap-2">
            <DynamicIcon emoji="📖" className="w-4 h-4 sm:w-5 sm:h-5 text-gold" /> In-Depth Guides &amp; Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-bg-card border border-border rounded-xl p-3.5 sm:p-4 hover:border-gold/50 transition-colors block group"
              >
                <h3 className="text-xs sm:text-sm font-bold text-text-primary group-hover:text-gold transition-colors mb-1 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[0.6875rem] text-text-muted line-clamp-2">{post.excerpt}</p>
                <span className="inline-block mt-2 text-[0.65rem] font-semibold text-gold">
                  Read {post.readTime} min guide →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Related Tools ── */}
      {related.length > 0 && (
        <section>
          <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-6">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-kenya-green/10 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-kenya-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h2 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">
              Related Tools
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {related.map((rt) => {
              const rtCat = getCategoryInfo(rt.category);
              return (
                <Link
                  key={rt.slug}
                  href={`/tools/${rt.slug}`}
                  className="tool-card bg-bg-card border border-border rounded-xl p-3.5 sm:p-4 block group"
                >
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <span className="text-xl tool-icon flex-shrink-0">
                      <DynamicIcon emoji={rt.icon} className="w-[1em] h-[1em]" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[0.8125rem] font-semibold text-text-primary mb-0.5 sm:mb-1 group-hover:text-gold transition-colors">
                        {rt.shortTitle}
                      </h3>
                      <p className="text-[0.6875rem] text-text-muted line-clamp-2 leading-relaxed">
                        {rt.description}
                      </p>
                      {rtCat && (
                        <span className={`badge ${rtCat.badgeClass} mt-1.5 sm:mt-2`}>
                          <DynamicIcon emoji={rtCat.icon} className="w-[1em] h-[1em] inline-block mb-[0.1em]" /> {rtCat.name}
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
        </>
      )}
    </div>
  );
}
