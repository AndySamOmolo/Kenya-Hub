import Link from "next/link";
import { Tool } from "@/lib/types";
import { getCategoryInfo, getRelatedTools } from "@/lib/tools-registry";
import { getRelatedBlogPostsForTool } from "@/lib/seo";
import DynamicIcon from "@/components/ui/DynamicIcon";
import toolGuidesData from "@/data/tool-guides.json";

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface RichGuideEntry {
  slug?: string;
  notesTitle?: string;
  overview?: string[];
  howItWorks?: string[];
  workedExample?: {
    title: string;
    scenario: string;
    steps: string[];
    takeaway: string;
  };
  complianceTips?: string[];
  notes?: string[];
  faq?: FAQItem[];
}

interface ToolShellProps {
  tool: Tool;
  children: React.ReactNode;
  faq?: FAQItem[];
  breadcrumbSuffix?: BreadcrumbItem[];
  hideHeader?: boolean;
  hideFooter?: boolean;
  hideSource?: boolean;
}

export default function ToolShell({
  tool,
  children,
  faq = [],
  breadcrumbSuffix = [],
  hideHeader = false,
  hideFooter = false,
  hideSource = false,
}: ToolShellProps) {
  const category = getCategoryInfo(tool.category);
  const related = getRelatedTools(tool.slug, 4);
  const relatedBlogPosts = getRelatedBlogPostsForTool(tool.slug, 3);
  const guide = (
    toolGuidesData.guides as Record<string, RichGuideEntry>
  )[tool.slug];

  // Merge inline page FAQs and tool-guides.json FAQs without duplicates
  const mergedFaqMap = new Map<string, FAQItem>();
  for (const item of [...(guide?.faq || []), ...faq]) {
    const key = item.question.trim().toLowerCase();
    if (!mergedFaqMap.has(key)) {
      mergedFaqMap.set(key, item);
    }
  }
  const effectiveFaq: FAQItem[] = Array.from(mergedFaqMap.values());
  const guideNotes: string[] = guide?.notes || [];
  const overviewParagraphs: string[] = guide?.overview || [];
  const howItWorksSteps: string[] = guide?.howItWorks || [];
  const workedExample = guide?.workedExample;
  const complianceTips: string[] = guide?.complianceTips || [];
  const isCulturalOrLanguageTool = tool.category === "language-learning";

  // Build BreadcrumbList JSON-LD (including any dynamic suffix items)
  const baseBreadcrumbItems = [
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
    ...(category
      ? [
          {
            "@type": "ListItem",
            position: 3,
            name: category.name,
            item: `https://kenyahub.me/tools/?category=${tool.category}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: tool.shortTitle,
            item: `https://kenyahub.me/tools/${tool.slug}/`,
          },
        ]
      : [
          {
            "@type": "ListItem",
            position: 3,
            name: tool.shortTitle,
            item: `https://kenyahub.me/tools/${tool.slug}/`,
          },
        ]),
  ];

  const suffixBreadcrumbItems = breadcrumbSuffix.map((b, idx) => ({
    "@type": "ListItem",
    position: baseBreadcrumbItems.length + idx + 1,
    name: b.label,
    ...(b.href
      ? {
          item: b.href.startsWith("http")
            ? b.href
            : `https://kenyahub.me${b.href}`,
        }
      : {}),
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [...baseBreadcrumbItems, ...suffixBreadcrumbItems],
  };

  // Build WebApplication JSON-LD
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.title,
    alternateName: tool.shortTitle,
    description: tool.description,
    url: `https://kenyahub.me/tools/${tool.slug}/`,
    applicationCategory: "UtilityApplication",
    applicationSubCategory: category?.name || "Kenyan Public Utility",
    operatingSystem: "Any",
    inLanguage: "en-KE",
    isAccessibleForFree: true,
    featureList: tool.keywords,
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
    isBasedOn: tool.dataSource,
    dateModified: "2026-03-01",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KES",
    },
    author: {
      "@type": "Organization",
      name: "KenyaHub",
      url: "https://kenyahub.me",
    },
  };

  // Build HowTo JSON-LD if step-by-step instructions exist
  const howToSchema =
    howItWorksSteps.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: `How to Use the ${tool.title}`,
          description: tool.description,
          inLanguage: "en-KE",
          step: howItWorksSteps.map((stepText, idx) => ({
            "@type": "HowToStep",
            position: idx + 1,
            name: `Step ${idx + 1}`,
            text: stepText,
          })),
        }
      : null;

  // Build FAQPage JSON-LD if FAQs exist
  const faqSchema =
    effectiveFaq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: effectiveFaq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <div className={`max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 ${hideHeader ? "py-2 sm:py-4" : "py-3.5 sm:py-10"}`}>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* ── Breadcrumbs ── */}
      {!hideHeader && (
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[0.6875rem] sm:text-xs text-text-muted mb-3 sm:mb-6 flex-wrap">
        <Link href="/" className="hover:text-gold transition-colors">
          Home
        </Link>
        <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <Link href="/tools/" className="hover:text-gold transition-colors">
          Tools
        </Link>
        {category && (
          <>
            <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <Link
              href={`/tools/?category=${tool.category}`}
              className="hover:text-gold transition-colors"
            >
              {category.name}
            </Link>
          </>
        )}
        <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        {breadcrumbSuffix.length > 0 ? (
          <>
            <Link href={`/tools/${tool.slug}/`} className="hover:text-gold transition-colors">
              {tool.shortTitle}
            </Link>
            {breadcrumbSuffix.map((item, idx) => (
              <span key={idx} className="inline-flex items-center gap-1.5">
                <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                {item.href ? (
                  <Link href={item.href} className="hover:text-gold transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-text-secondary">{item.label}</span>
                )}
              </span>
            ))}
          </>
        ) : (
          <span className="text-text-secondary">{tool.shortTitle}</span>
        )}
      </nav>
      )}

      {/* ── Tool Header ── */}
      {!hideHeader && (
      <header className="mb-4 sm:mb-8">
        <div className="flex items-start gap-2.5 sm:gap-3.5 mb-2 sm:mb-3">
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-white/[0.04] border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-xl sm:text-2xl"><DynamicIcon emoji={tool.icon} className="w-[1em] h-[1em] inline-block mb-[0.1em]" /></span>
          </div>
          <div>
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-outfit)] text-text-primary leading-tight tracking-tight">
              {tool.title}
            </h1>
          </div>
        </div>
        <p className="text-text-secondary text-xs sm:text-base leading-relaxed max-w-3xl">
          {tool.description}
        </p>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2.5 sm:mt-4">
          {category && (
            <span className={`badge ${category.badgeClass}`}>
              <DynamicIcon emoji={category.icon} className="w-[1em] h-[1em] inline-block mb-[0.1em]" /> {category.name}
            </span>
          )}
          {!hideSource && (
            <span className="text-[0.6875rem] text-text-muted flex items-center gap-1">
              <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Source: {tool.dataSource}
            </span>
          )}
          <span className="text-[0.6875rem] text-kenya-green-light flex items-center gap-1 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-kenya-green-light inline-block" />
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
      <div id="tool-interactive-content" className={hideFooter ? "mb-3 sm:mb-4" : "mb-7 sm:mb-14"}>{children}</div>

      {!hideFooter && (
        <>
      {/* ── Comprehensive Editorial Guide, Statutory Framework & Worked Examples ── */}
      <article className="mb-7 sm:mb-14 space-y-6">
        <section className="bg-bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-7 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2">
              <DynamicIcon emoji="📘" className="w-5 h-5 text-gold" />{" "}
              {guide?.notesTitle || `Comprehensive Guide & Statutory Methodology: ${tool.shortTitle}`}
            </h2>
            <span className="text-[0.6875rem] text-kenya-green-light bg-kenya-green/10 border border-kenya-green/20 px-2.5 py-0.5 rounded-full font-semibold">
              ✓ Verified 2026 Reference ({tool.dataSource})
            </span>
          </div>

          {overviewParagraphs.length > 0 ? (
            <div className="space-y-3 text-xs sm:text-sm text-text-secondary leading-relaxed">
              {overviewParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          ) : (
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {isCulturalOrLanguageTool ? (
                <>
                  <strong>{tool.title}</strong> is curated by the KenyaHub linguistic and cultural research team using verified publications and open datasets from{" "}
                  <strong>{tool.dataSource}</strong>. All lessons, dictionary lookups, and exercises execute locally inside your browser for instant responses and 100% data privacy.
                </>
              ) : (
                <>
                  The <strong>{tool.title}</strong> is maintained by the KenyaHub research team using official publications from{" "}
                  <strong>{tool.dataSource}</strong>. All calculations and lookups execute locally inside your browser for instant results and 100% data privacy.
                </>
              )}
            </p>
          )}

          {howItWorksSteps.length > 0 && (
            <div className="pt-3 border-t border-border/60 space-y-2.5">
              <h3 className="text-xs sm:text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)] flex items-center gap-1.5">
                <DynamicIcon emoji="⚙️" className="w-4 h-4 text-gold" /> Step-by-Step Calculation &amp; Verification Formula
              </h3>
              <ol className="space-y-2 text-xs sm:text-sm text-text-secondary">
                {howItWorksSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-gold/15 text-gold text-[0.6875rem] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {workedExample && (
            <div className="pt-4 border-t border-border/60">
              <div className="bg-bg-elevated/70 border border-border rounded-xl p-4 sm:p-5 space-y-2.5">
                <h3 className="text-xs sm:text-sm font-bold text-gold font-[family-name:var(--font-outfit)] flex items-center gap-1.5">
                  <DynamicIcon emoji="🧮" className="w-4 h-4" /> {workedExample.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-primary font-medium leading-relaxed">
                  {workedExample.scenario}
                </p>
                <ul className="space-y-1.5 text-xs text-text-secondary">
                  {workedExample.steps.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-kenya-green-light font-bold">→</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-semibold text-kenya-green-light pt-1 border-t border-border/50">
                  Key Takeaway: {workedExample.takeaway}
                </p>
              </div>
            </div>
          )}

          {(complianceTips.length > 0 || guideNotes.length > 0) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-border/60">
              {guideNotes.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-text-primary">
                    Methodology &amp; Usage Notes
                  </h3>
                  <ul className="space-y-1.5 text-xs text-text-secondary">
                    {guideNotes.map((note, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-gold font-bold">•</span>
                        <span className="leading-relaxed">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {complianceTips.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-kenya-green-light">
                    Statutory Compliance &amp; Practical Tips
                  </h3>
                  <ul className="space-y-1.5 text-xs text-text-secondary">
                    {complianceTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-kenya-green-light font-bold">✓</span>
                        <span className="leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <p className="text-[0.6875rem] text-text-muted pt-3 border-t border-border/50">
            {isCulturalOrLanguageTool ? (
              <>
                Editorial Note: Linguistic vocabularies, grammatical paradigms, and oral proverbs are compiled from verified public-domain monographs and open lexical corpora ({tool.dataSource}) for educational and cultural preservation purposes. Regional dialectal and orthographical variations exist across Kenyan communities.
              </>
            ) : (
              <>
                Editorial Disclaimer: Figures and statutory schedules are provided for informational and educational planning purposes. Always verify formal filings, tax returns, or legal obligations against the latest published schedule from {tool.dataSource}.
              </>
            )}
          </p>
        </section>
      </article>

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
              Frequently Asked Questions ({effectiveFaq.length})
            </h2>
          </div>
          <div className="space-y-2.5 sm:space-y-3">
            {effectiveFaq.map((item, i) => (
              <details
                key={i}
                open={i < 3}
                className="group bg-bg-card border border-border rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-3.5 sm:px-5 py-3 sm:py-4 cursor-pointer text-xs sm:text-sm font-medium text-text-primary hover:text-gold transition-colors list-none">
                  <span>{item.question}</span>
                  <svg
                    className="w-4 h-4 text-text-muted flex-shrink-0 ml-3 sm:ml-4 group-open:rotate-180 transition-transform duration-200"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-3.5 sm:px-5 pb-3.5 sm:pb-4 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-border pt-2.5 sm:pt-3">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* ── Related In-Depth Blog Guides ── */}
      {relatedBlogPosts.length > 0 && (
        <section className="mb-7 sm:mb-12">
          <div className="section-divider mb-6 sm:mb-8" />
          <div className="flex items-center justify-between gap-2 mb-3 sm:mb-5">
            <h2 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2">
              <DynamicIcon emoji="📰" className="w-4 h-4 text-gold" /> Related Kenyan Guides &amp; Worked Articles
            </h2>
            <Link href="/blog/" className="text-xs font-semibold text-gold hover:underline shrink-0">
              All Guides →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {relatedBlogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="bg-bg-card border border-border hover:border-gold/50 rounded-xl p-4 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[0.625rem] text-text-muted mb-1.5">
                    <span className="text-gold font-semibold">{(post.tags || [])[0] || "Kenya Guide"}</span>
                    <span>{post.readTime} min read</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)] group-hover:text-gold transition-colors leading-snug mb-1.5">
                    {post.title}
                  </h3>
                  <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <span className="text-[0.6875rem] font-semibold text-gold mt-3 inline-block group-hover:underline">
                  Read Full Guide →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Related Tools ── */}
      {related.length > 0 && (
        <section>
          <div className="section-divider mb-6 sm:mb-8" />
          <h2 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-3 sm:mb-5">
            Related Kenyan Tools &amp; Calculators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {related.map((rel) => {
              const relCat = getCategoryInfo(rel.category);
              return (
                <Link
                  key={rel.slug}
                  href={`/tools/${rel.slug}/`}
                  className="tool-card bg-bg-card border border-border rounded-xl p-3.5 sm:p-4 block group"
                >
                  <div className="flex items-center gap-2.5 mb-1.5 sm:mb-2">
                    <span className="text-lg sm:text-xl tool-icon"><DynamicIcon emoji={rel.icon} className="w-[1em] h-[1em] inline-block mb-[0.1em]" /></span>
                    <h3 className="text-xs sm:text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)] group-hover:text-gold transition-colors leading-snug">
                      {rel.shortTitle}
                    </h3>
                  </div>
                  <p className="text-xs text-text-muted line-clamp-2 leading-relaxed mb-1.5 sm:mb-2">
                    {rel.description}
                  </p>
                  {relCat && (
                    <span className={`badge ${relCat.badgeClass}`}>
                      {relCat.name}
                    </span>
                  )}
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
