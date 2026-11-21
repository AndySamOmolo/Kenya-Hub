import React from "react";
import Link from "next/link";
import { ArrowLeftRight } from "lucide-react";
import type { Tool } from "@/lib/types";
import { getCategoryInfo, getRelatedTools } from "@/lib/tools-registry";
import { STATIC_BLOG_POSTS, type StaticBlogPost } from "@/data/blog-posts";
import DynamicIcon from "@/components/ui/DynamicIcon";
import ToolAccessTracker from "@/components/tools/ToolAccessTracker";
import PinToolButton from "@/components/tools/PinToolButton";
import toolGuidesData from "@/data/tool-guides.json";
import toolSourcesData from "@/data/tool-data-sources.json";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface RichGuideEntry {
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
  breadcrumbParentLabel?: string;
  hideHeader?: boolean;
  hideFooter?: boolean;
  hideSource?: boolean;
  guideOverride?: RichGuideEntry;
}

const typedToolSources = toolSourcesData as {
  lastAudit?: string;
  tools?: Record<string, { lastUpdated?: string; sourceUrl?: string; notes?: string }>;
};

// Curated tool-to-blog mapping to prevent naive keyword collisions (F-034)
const CURATED_TOOL_BLOG_SLUGS: Record<string, string[]> = {
  "paye-calculator": [
    "how-paye-tax-works-in-kenya",
    "sha-shif-health-insurance-kenya-complete-guide-2026",
    "guide-to-kenyan-public-holidays-2026",
  ],
  "mpesa-fee-calculator": [
    "understanding-mpesa-transaction-fees",
    "how-paye-tax-works-in-kenya",
    "sacco-loans-dividends-chama-guide-kenya-2026",
  ],
  "sacco-chama-calculator": [
    "sacco-loans-dividends-chama-guide-kenya-2026",
    "how-paye-tax-works-in-kenya",
    "understanding-mpesa-transaction-fees",
  ],
  "helb-calculator": [
    "understanding-kuccps-cluster-points",
    "how-paye-tax-works-in-kenya",
    "sacco-loans-dividends-chama-guide-kenya-2026",
  ],
  "stamp-duty-calculator": [
    "land-transfer-stamp-duty-conveyancing-fees-kenya-2026",
    "cost-of-building-a-house-in-kenya-mjengo-guide-2026",
    "how-paye-tax-works-in-kenya",
  ],
  "ardhisasa-cad-title-auditor": [
    "land-transfer-stamp-duty-conveyancing-fees-kenya-2026",
    "cost-of-building-a-house-in-kenya-mjengo-guide-2026",
  ],
  "boma-yangu-calculator": [
    "land-transfer-stamp-duty-conveyancing-fees-kenya-2026",
    "cost-of-building-a-house-in-kenya-mjengo-guide-2026",
    "how-paye-tax-works-in-kenya",
  ],
  "rental-tax-calculator": [
    "land-transfer-stamp-duty-conveyancing-fees-kenya-2026",
    "how-paye-tax-works-in-kenya",
  ],
  "landlord-tenant-rights": [
    "land-transfer-stamp-duty-conveyancing-fees-kenya-2026",
    "cost-of-building-a-house-in-kenya-mjengo-guide-2026",
  ],
  "mjengo-construction-calculator": [
    "cost-of-building-a-house-in-kenya-mjengo-guide-2026",
    "land-transfer-stamp-duty-conveyancing-fees-kenya-2026",
  ],
  "cbc-curriculum": [
    "cbc-curriculum-explained-for-parents",
    "understanding-kuccps-cluster-points",
  ],
  "kjsea-pathway-engine": [
    "cbc-curriculum-explained-for-parents",
    "understanding-kuccps-cluster-points",
  ],
  "kuccps-cluster-calculator": [
    "understanding-kuccps-cluster-points",
    "cbc-curriculum-explained-for-parents",
  ],
  "kcse-grade-calculator": [
    "understanding-kuccps-cluster-points",
    "cbc-curriculum-explained-for-parents",
  ],
  "kra-car-import-calculator": [
    "kra-car-import-duty-calculator-guide-kenya-2026",
    "kenya-number-plates-explained",
  ],
  "icms-landed-cost-arbitrage": [
    "kra-car-import-duty-calculator-guide-kenya-2026",
    "how-paye-tax-works-in-kenya",
  ],
  "number-plate-decoder": [
    "kenya-number-plates-explained",
    "kra-car-import-duty-calculator-guide-kenya-2026",
  ],
  "ntsa-transfer-calculator": [
    "kenya-number-plates-explained",
    "kra-car-import-duty-calculator-guide-kenya-2026",
  ],
  "traffic-fines": [
    "kenya-number-plates-explained",
    "kra-car-import-duty-calculator-guide-kenya-2026",
  ],
  "kplc-token-calculator": [
    "kplc-prepaid-tokens-tariff-bands-guide-kenya-2026",
    "understanding-mpesa-transaction-fees",
  ],
  "water-bill-calculator": [
    "kplc-prepaid-tokens-tariff-bands-guide-kenya-2026",
    "cost-of-building-a-house-in-kenya-mjengo-guide-2026",
  ],
  "sha-benefit-estimator": [
    "sha-shif-health-insurance-kenya-complete-guide-2026",
    "how-paye-tax-works-in-kenya",
  ],
  "sha-claim-scrubber": [
    "sha-shif-health-insurance-kenya-complete-guide-2026",
    "how-paye-tax-works-in-kenya",
  ],
  "domestic-wage-calculator": [
    "guide-to-kenyan-public-holidays-2026",
    "how-paye-tax-works-in-kenya",
    "sha-shif-health-insurance-kenya-complete-guide-2026",
  ],
  "odpc-hr-retention-vault": [
    "guide-to-kenyan-public-holidays-2026",
    "how-paye-tax-works-in-kenya",
  ],
  "small-claims-calculator": [
    "land-transfer-stamp-duty-conveyancing-fees-kenya-2026",
    "guide-to-kenyan-public-holidays-2026",
  ],
  "etims-mpesa-reconciler": [
    "how-paye-tax-works-in-kenya",
    "understanding-mpesa-transaction-fees",
  ],
  "ppra-egp-tender-serializer": [
    "how-paye-tax-works-in-kenya",
    "guide-to-kenyan-public-holidays-2026",
  ],
  "eudr-coop-geojson-packager": [
    "land-transfer-stamp-duty-conveyancing-fees-kenya-2026",
    "sacco-loans-dividends-chama-guide-kenya-2026",
  ],
  "airtime-drain-guide": [
    "understanding-mpesa-transaction-fees",
    "kplc-prepaid-tokens-tariff-bands-guide-kenya-2026",
  ],
  "mobile-number-prefix": [
    "understanding-mpesa-transaction-fees",
    "kplc-prepaid-tokens-tariff-bands-guide-kenya-2026",
  ],
  "learn": [
    "open-kenyan-language-datasets-kencorpus-tafsiri-thiomi-guide",
    "how-bantu-languages-work-noun-classes-guide",
    "classical-swahili-literature-liongo-tales-aphorisms",
  ],
  "kenyan-translator": [
    "open-kenyan-language-datasets-kencorpus-tafsiri-thiomi-guide",
    "how-bantu-languages-work-noun-classes-guide",
    "krapf-1850-six-east-african-languages-rabai-mpya",
  ],
};

function getCuratedBlogPostsForTool(tool: Tool, limit: number = 3): StaticBlogPost[] {
  const slugs = CURATED_TOOL_BLOG_SLUGS[tool.slug] || [];
  const results: StaticBlogPost[] = [];
  for (const slug of slugs) {
    const post = STATIC_BLOG_POSTS.find((p) => p.slug === slug);
    if (post && !results.some((r) => r.slug === post.slug)) {
      results.push(post);
    }
    if (results.length >= limit) break;
  }
  return results;
}

const LINKABLE_DOMAINS = [
  "bomayangu.go.ke",
  "itax.kra.go.ke",
  "ecitizen.go.ke",
  "ardhisasa.lands.go.ke",
  "tims.ntsa.go.ke",
  "sha.go.ke",
  "helb.co.ke",
  "egpkenya.go.ke",
  "odpc.go.ke",
  "wasreb.go.ke",
  "epra.go.ke",
  "judiciary.go.ke",
];

const DOMAIN_REGEX = new RegExp(
  `\\b(${LINKABLE_DOMAINS.map((d) => d.replace(/\./g, "\\.")).join("|")})\\b`,
  "gi"
);

function renderTextWithOfficialLinks(text: string): React.ReactNode {
  const parts = text.split(DOMAIN_REGEX);
  if (parts.length === 1) return text;
  return parts.map((part, i) => {
    const lower = part.toLowerCase();
    if (LINKABLE_DOMAINS.includes(lower)) {
      return (
        <a
          key={i}
          href={`https://${lower}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline underline-offset-2 hover:text-gold-light font-medium transition-colors"
        >
          {part} ↗
        </a>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

function renderFormattedTitle(title: string): React.ReactNode {
  if (!title.includes("↔")) return title;
  // Wrap "Gross ↔ Net" (or surrounding words around ↔) in whitespace-nowrap with crisp lucide icon (F-055)
  const match = title.match(/^(.*?)(\S+\s*↔\s*\S+)(.*)$/);
  if (!match) return title;
  const [, before, pair, after] = match;
  const [left, right] = pair.split("↔").map((s) => s.trim());
  return (
    <>
      {before}
      <span className="whitespace-nowrap inline-flex items-center gap-1.5">
        <span>{left}</span>
        <ArrowLeftRight className="w-[0.75em] h-[0.75em] inline-block shrink-0 text-gold" aria-hidden="true" />
        <span>{right}</span>
      </span>
      {after}
    </>
  );
}

function normalizeFaqKey(q: string): string {
  return q
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\b(what|how|is|are|the|in|for|of|a|an|to|do|does|can|my|your|kenya|kenyan|2026)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export default function ToolShell({
  tool,
  children,
  faq = [],
  breadcrumbSuffix = [],
  breadcrumbParentLabel,
  hideHeader = false,
  hideFooter = false,
  hideSource = false,
  guideOverride,
}: ToolShellProps) {
  if (!tool) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    );
  }
  const category = getCategoryInfo(tool.category);
  const related = getRelatedTools(tool.slug, 4);
  const relatedBlogPosts = getCuratedBlogPostsForTool(tool, 3);
  const guide =
    guideOverride ||
    (toolGuidesData.guides as Record<string, RichGuideEntry>)[tool.slug];

  const sourceEntry = typedToolSources.tools?.[tool.slug];
  const lastModifiedDate =
    sourceEntry?.lastUpdated || typedToolSources.lastAudit || "2026-11-15";
  const officialSourceUrl = sourceEntry?.sourceUrl;

  // Deduplicate FAQs: prefer canonical tool-guides.json FAQs and skip near-duplicate inline FAQs (F-034)
  const mergedFaqMap = new Map<string, FAQItem>();
  const normalizedKeys = new Set<string>();
  const primaryFaqs = guide?.faq && guide.faq.length > 0 ? guide.faq : faq;
  for (const item of primaryFaqs) {
    const exactKey = item.question.trim().toLowerCase();
    const normKey = normalizeFaqKey(item.question);
    if (!mergedFaqMap.has(exactKey) && (!normKey || !normalizedKeys.has(normKey))) {
      mergedFaqMap.set(exactKey, item);
      if (normKey) normalizedKeys.add(normKey);
    }
  }
  const effectiveFaq: FAQItem[] = Array.from(mergedFaqMap.values());
  const guideNotes: string[] = guide?.notes || [];
  const overviewParagraphs: string[] = guide?.overview || [];
  const howItWorksSteps: string[] = guide?.howItWorks || [];
  const workedExample = guide?.workedExample;
  const complianceTips: string[] = guide?.complianceTips || [];
  const isCulturalOrLanguageTool = tool.category === "language-learning";
  const hasBothGuideCols = guideNotes.length > 0 && complianceTips.length > 0;

  const parentCrumbLabel = breadcrumbParentLabel || tool.shortTitle;
  const dedupedBreadcrumbSuffix = breadcrumbSuffix.filter((b, idx) => {
    const labelNorm = b.label.trim().toLowerCase();
    const parentNorm = parentCrumbLabel.trim().toLowerCase();
    if (idx === 0 && (labelNorm === parentNorm || parentNorm === `learn ${labelNorm}`)) {
      return false;
    }
    return true;
  });

  // Build BreadcrumbList JSON-LD using only canonical indexable URLs (no ?category= query URLs per SEO-1)
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
    {
      "@type": "ListItem",
      position: 3,
      name: parentCrumbLabel,
      item: `https://kenyahub.me/tools/${tool.slug}/`,
    },
  ];

  const suffixBreadcrumbItems = dedupedBreadcrumbSuffix.map((b, idx) => ({
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

  const lastSuffixHref =
    breadcrumbSuffix.length > 0
      ? breadcrumbSuffix[breadcrumbSuffix.length - 1]?.href
      : undefined;
  const canonicalToolUrl = lastSuffixHref
    ? lastSuffixHref.startsWith("http")
      ? lastSuffixHref
      : `https://kenyahub.me${lastSuffixHref}`
    : `https://kenyahub.me/tools/${tool.slug}/`;

  // Build WebApplication JSON-LD (SEO-2 & SEO-6)
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.title,
    alternateName: tool.shortTitle,
    description: tool.description,
    url: canonicalToolUrl,
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
    isBasedOn: officialSourceUrl
      ? {
          "@type": "CreativeWork",
          name: tool.dataSource,
          url: officialSourceUrl,
        }
      : tool.dataSource,
    dateModified: lastModifiedDate,
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

  // Build Dataset JSON-LD for Google Dataset Search indexing & E-E-A-T provenance
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: `${tool.shortTitle} — Official Kenyan Statutory & Reference Dataset (2026)`,
    description: `${tool.description} Sourced and verified from ${tool.dataSource}.`,
    url: canonicalToolUrl,
    inLanguage: "en-KE",
    isAccessibleForFree: true,
    license: "https://creativecommons.org/licenses/by/4.0/",
    dateModified: lastModifiedDate,
    keywords: tool.keywords,
    spatialCoverage: {
      "@type": "Place",
      name: "Republic of Kenya",
    },
    creator: {
      "@type": "Organization",
      name: "KenyaHub Editorial & Statutory Research Desk",
      url: "https://kenyahub.me/about/",
    },
    ...(officialSourceUrl
      ? {
          isBasedOn: {
            "@type": "CreativeWork",
            name: tool.dataSource,
            url: officialSourceUrl,
          },
        }
      : {}),
  };

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
    <div className={`max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 ${hideHeader ? "py-2.5 sm:py-5" : "pt-3 pb-4 sm:py-8"}`}>
      <ToolAccessTracker tool={tool} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* ── Breadcrumbs (Single-Line Scrollable on Mobile) ── */}
      {!hideHeader && (
        <nav
          aria-label="Breadcrumb"
          data-adsense-ignore="true"
          className="flex flex-nowrap items-center gap-1.5 overflow-x-auto no-scrollbar whitespace-nowrap text-[11px] sm:text-xs text-text-muted mb-2 sm:mb-4 micro-badge"
        >
          <Link href="/" className="hover:text-gold transition-colors shrink-0">
            Home
          </Link>
          <svg className="w-3 h-3 text-border-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/tools/" className="hover:text-gold transition-colors shrink-0">
            Tools
          </Link>
          {category && dedupedBreadcrumbSuffix.length === 0 && (
            <>
              <svg className="w-3 h-3 text-border-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <Link
                href={`/tools/?category=${tool.category}`}
                className="hover:text-gold transition-colors shrink-0"
              >
                {category.name}
              </Link>
            </>
          )}
          <svg className="w-3 h-3 text-border-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          {dedupedBreadcrumbSuffix.length > 0 ? (
            <>
              <Link href={`/tools/${tool.slug}/`} className="hover:text-gold transition-colors shrink-0">
                {parentCrumbLabel}
              </Link>
              {dedupedBreadcrumbSuffix.map((item, idx) => (
                <span key={idx} className="inline-flex items-center gap-1.5 shrink-0">
                  <svg className="w-3 h-3 text-border-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  {item.href && idx < dedupedBreadcrumbSuffix.length - 1 ? (
                    <Link href={item.href} className="hover:text-gold transition-colors shrink-0">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-text-secondary font-medium shrink-0">{item.label}</span>
                  )}
                </span>
              ))}
            </>
          ) : (
            <span className="text-text-secondary font-medium shrink-0">{parentCrumbLabel}</span>
          )}
        </nav>
      )}

      {/* ── Tool Header ── */}
      {!hideHeader && (
        <header className="mb-2.5 sm:mb-5">
          <div className="flex items-start justify-between gap-2.5 sm:gap-4 mb-1.5 sm:mb-2.5">
            <div className="flex items-start gap-2.5 sm:gap-3.5 min-w-0 flex-1">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white/[0.04] border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-base sm:text-xl">
                  <DynamicIcon emoji={tool.icon} className="w-[1em] h-[1em] inline-block mb-[0.1em]" />
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold font-[family-name:var(--font-outfit)] text-text-primary leading-snug sm:leading-tight tracking-tight break-words text-balance">
                  {renderFormattedTitle(tool.title)}
                </h1>
              </div>
            </div>
            <div className="shrink-0 mt-0.5">
              <PinToolButton toolSlug={tool.slug} />
            </div>
          </div>

          {/* Collapsible intro description on mobile (<sm) to bring tool controls above the fold */}
          <details className="sm:hidden mt-1 group">
            <summary className="text-xs font-medium text-text-muted hover:text-gold cursor-pointer list-none inline-flex items-center gap-1 select-none">
              <span>About this tool</span>
              <svg className="w-3.5 h-3.5 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="text-text-secondary text-xs leading-relaxed mt-1">
              {tool.description}
            </p>
          </details>
          <p className="hidden sm:block text-text-secondary text-sm leading-relaxed max-w-3xl">
            {tool.description}
          </p>

          {!hideSource && (
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1.5 sm:mt-2.5">
              <span className="text-[11px] sm:text-xs text-text-muted inline-flex items-center gap-1.5 break-words max-w-full min-w-0 micro-badge">
                <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                {officialSourceUrl ? (
                  <a
                    href={officialSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-0 break-words hover:text-gold underline underline-offset-2 transition-colors"
                  >
                    Source: {tool.dataSource} ↗
                  </a>
                ) : (
                  <span className="min-w-0 break-words">Source: {tool.dataSource}</span>
                )}
              </span>
            </div>
          )}
        </header>
      )}

      {/* ── Tool Content ── */}
      <div id="tool-interactive-content" className={hideFooter ? "mb-4" : "mb-8 sm:mb-14"}>
        {children}
      </div>

      {!hideFooter && (
        <>
          {/* ── Comprehensive Editorial Guide, Statutory Framework & Worked Examples ── */}
          <article className="mb-8 sm:mb-14 space-y-6">
            <section className="bg-bg-card border border-border rounded-2xl p-4 sm:p-7 space-y-4">
              <div>
                <h2 className="text-base sm:text-xl font-bold font-[family-name:var(--font-outfit)] text-text-primary leading-snug">
                  <DynamicIcon emoji="📘" className="w-5 h-5 text-gold inline-block mr-2 -mt-0.5" />
                  {guide?.notesTitle || (isCulturalOrLanguageTool ? `Learning Guide: ${tool.shortTitle}` : `Guide & Methodology: ${tool.shortTitle}`)}
                </h2>
              </div>

              {overviewParagraphs.length > 0 ? (
                <div className="space-y-3.5 text-sm text-text-secondary leading-relaxed">
                  {overviewParagraphs.map((para, idx) => (
                    <p key={idx}>{renderTextWithOfficialLinks(para)}</p>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-text-secondary leading-relaxed">
                  {isCulturalOrLanguageTool ? (
                    <>
                      <strong>{tool.title}</strong> is curated by the KenyaHub linguistic and cultural research team using verified publications and open datasets. All lessons, dictionary lookups, and exercises execute locally inside your browser for instant responses and 100% data privacy.
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
                <div className="pt-4 border-t border-border/60 space-y-3">
                  <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">
                    <DynamicIcon emoji="⚙️" className="w-4 h-4 text-gold inline-block mr-1.5 -mt-0.5" />
                    {isCulturalOrLanguageTool
                      ? "How to Study & Practice Effectively"
                      : "Step-by-Step Calculation & Verification Formula"}
                  </h3>
                  <ol className="space-y-2.5 text-sm text-text-secondary">
                    {howItWorksSteps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-gold/15 text-gold text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed flex-1 min-w-0">{renderTextWithOfficialLinks(step)}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {workedExample && (
                <div className="pt-4 border-t border-border/60">
                  <div className="bg-bg-elevated/70 border border-border rounded-xl p-4 sm:p-5 space-y-3">
                    <h3 className="text-sm font-bold text-gold font-[family-name:var(--font-outfit)]">
                      <DynamicIcon emoji="🧮" className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />
                      {workedExample.title}
                    </h3>
                    <p className="text-sm text-text-primary font-medium leading-relaxed">
                      {renderTextWithOfficialLinks(workedExample.scenario)}
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-text-secondary">
                      {workedExample.steps.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-kenya-green-light font-bold shrink-0">→</span>
                          <span className="leading-relaxed flex-1 min-w-0">{renderTextWithOfficialLinks(s)}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs sm:text-sm font-semibold text-kenya-green-light pt-2 border-t border-border/50 leading-relaxed">
                      Key Takeaway: {renderTextWithOfficialLinks(workedExample.takeaway)}
                    </p>
                  </div>
                </div>
              )}

              {(complianceTips.length > 0 || guideNotes.length > 0) && (
                <div
                  className={`${
                    hasBothGuideCols ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "space-y-4"
                  } pt-4 border-t border-border/60`}
                >
                  {guideNotes.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-text-primary">
                        {isCulturalOrLanguageTool ? "Linguistic & Cultural Notes" : "Methodology & Usage Notes"}
                      </h3>
                      <ul className="space-y-2 text-xs sm:text-sm text-text-secondary">
                        {guideNotes.map((note, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-gold font-bold shrink-0">•</span>
                            <span className="leading-relaxed flex-1 min-w-0">{renderTextWithOfficialLinks(note)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {complianceTips.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-kenya-green-light">
                        {isCulturalOrLanguageTool ? "Practical Learning Tips" : "Statutory Compliance & Practical Tips"}
                      </h3>
                      <ul className="space-y-2 text-xs sm:text-sm text-text-secondary">
                        {complianceTips.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-kenya-green-light font-bold shrink-0">✓</span>
                            <span className="leading-relaxed flex-1 min-w-0">{renderTextWithOfficialLinks(tip)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              <p className="text-xs text-text-muted pt-3 border-t border-border/50 leading-relaxed">
                {isCulturalOrLanguageTool ? (
                  <>
                    Editorial Note: Linguistic vocabularies, grammatical paradigms, and oral proverbs are compiled from verified public-domain monographs and open lexical corpora for educational and cultural preservation purposes. Regional dialectal and orthographical variations exist across Kenyan communities.
                  </>
                ) : (
                  <>
                    Independent Platform Disclaimer: KenyaHub is an independent private platform and is not affiliated with, endorsed by, or operating on behalf of KRA, SHA, NTSA, KPLC, PPRA, KNEC, KUCCPS, or the Government of Kenya. Figures and schedules are provided for informational planning only—always verify formal filings, tax returns, or legal obligations on the official {tool.dataSource} portal.
                  </>
                )}
              </p>
            </section>
          </article>

          {/* ── FAQ Section ── */}
          {effectiveFaq.length > 0 && (
            <section className="mb-8 sm:mb-14">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">
                  Frequently Asked Questions ({effectiveFaq.length})
                </h2>
              </div>
              <div className="space-y-3">
                {effectiveFaq.map((item, i) => (
                  <details
                    key={i}
                    open={i < 3}
                    className="group bg-bg-card border border-border rounded-xl overflow-hidden"
                  >
                    <summary className="flex items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 cursor-pointer text-sm font-medium text-text-primary hover:text-gold transition-colors list-none gap-3">
                      <span className="leading-snug flex-1 min-w-0">{item.question}</span>
                      <svg
                        className="w-4 h-4 text-text-muted flex-shrink-0 group-open:rotate-180 transition-transform duration-200"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 text-sm text-text-secondary leading-relaxed border-t border-border pt-3">
                      {renderTextWithOfficialLinks(item.answer)}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* ── Related In-Depth Blog Guides ── */}
          {relatedBlogPosts.length > 0 && (
            <section data-adsense-ignore="true" className="mb-8 sm:mb-12">
              <div className="section-divider mb-6 sm:mb-8" />
              <div className="flex items-center justify-between gap-2 mb-4 sm:mb-5">
                <h2 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">
                  <DynamicIcon emoji="📰" className="w-4 h-4 text-gold inline-block mr-2 -mt-0.5" />
                  Related Kenyan Guides &amp; Worked Articles
                </h2>
                <Link href="/blog/" className="text-xs font-semibold text-gold hover:underline shrink-0">
                  All Guides →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                {relatedBlogPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}/`}
                    className="bg-bg-card border border-border hover:border-gold/50 rounded-xl p-4 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-text-muted mb-1.5">
                        <span className="text-gold font-semibold">{(post.tags || [])[0] || "Kenya Guide"}</span>
                        <span>{post.readTime} min read</span>
                      </div>
                      <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)] group-hover:text-gold transition-colors leading-snug mb-1.5">
                        {post.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-text-muted line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-gold mt-3 inline-block group-hover:underline">
                      Read Full Guide →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ── Related Tools ── */}
          {related.length > 0 && (
            <section data-adsense-ignore="true">
              <div className="section-divider mb-6 sm:mb-8" />
              <h2 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-4 sm:mb-5">
                Related Kenyan Tools
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {related.map((rel) => {
                  const relCat = getCategoryInfo(rel.category);
                  return (
                    <Link
                      key={rel.slug}
                      href={`/tools/${rel.slug}/`}
                      className="tool-card bg-bg-card border border-border rounded-xl p-4 block group"
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="text-xl tool-icon shrink-0">
                          <DynamicIcon emoji={rel.icon} className="w-[1em] h-[1em] inline-block mb-[0.1em]" />
                        </span>
                        <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)] group-hover:text-gold transition-colors leading-snug">
                          {rel.shortTitle}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-text-muted line-clamp-2 leading-relaxed mb-2.5">
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
