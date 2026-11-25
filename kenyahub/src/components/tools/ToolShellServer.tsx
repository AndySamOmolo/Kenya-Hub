import React from "react";
import {
  Banknote,
  Book,
  Building,
  Building2,
  Calculator,
  Calendar,
  Car,
  CarFront,
  Contact,
  Droplets,
  FileText,
  Flame,
  Globe,
  GraduationCap,
  Handshake,
  Home,
  Hospital,
  Key,
  Landmark,
  Leaf,
  Lock,
  Map,
  MessageCircle,
  Phone,
  Ruler,
  Scale,
  ScrollText,
  ShieldCheck,
  Ship,
  Smartphone,
  Sparkles,
  Sprout,
  Store,
  Target,
  Tractor,
  TrafficCone,
  Wheat,
  Zap,
} from "lucide-react";
import type { Tool } from "@/lib/types";
import { TOOLS, getCategoryInfo, getRelatedTools } from "@/lib/tools-registry";
import { STATIC_BLOG_POST_SUMMARIES, type StaticBlogPostSummary } from "@/data/blog-posts-summary";
import toolGuidesData from "@/data/tool-guides.json";
import toolSourcesData from "@/data/tool-data-sources.json";
import ToolShellView, {
  type BreadcrumbItem,
  type FAQItem,
  type RichGuideEntry,
} from "@/components/tools/ToolShellView";

const SERVER_TOOL_ICONS: Record<string, React.ElementType> = {
  "⚖️": Scale,
  "⚡": Zap,
  "🌍": Globe,
  "🌱": Sprout,
  "🌾": Wheat,
  "🌿": Leaf,
  "🎓": GraduationCap,
  "🎯": Target,
  "🏗️": Building2,
  "🏠": Home,
  "🏢": Building,
  "🏥": Hospital,
  "🏦": Landmark,
  "🏪": Store,
  "🐄": Tractor,
  "👨‍👩‍👧‍👦": Handshake,
  "💧": Droplets,
  "💰": Banknote,
  "📅": Calendar,
  "📐": Ruler,
  "📑": FileText,
  "📚": Book,
  "📜": ScrollText,
  "📝": FileText,
  "📞": Phone,
  "📱": Smartphone,
  "🔑": Key,
  "🔒": Lock,
  "🔥": Flame,
  "🗣️": MessageCircle,
  "🗺️": Map,
  "🚗": Car,
  "🚘": CarFront,
  "🚢": Ship,
  "🚦": TrafficCone,
  "🛡️": ShieldCheck,
  "🤝": Handshake,
  "🧮": Calculator,
  "🧱": Building2,
  "🧹": Sparkles,
  "🩺": Hospital,
  "🪪": Contact,
};

function renderServerToolIcon(emoji: string, className: string): React.ReactNode {
  const Icon = SERVER_TOOL_ICONS[emoji];
  if (Icon) {
    return <Icon className={className} aria-hidden="true" />;
  }
  return <span aria-hidden="true">{emoji}</span>;
}

const typedToolSources = toolSourcesData as {
  lastAudit?: string;
  tools?: Record<string, { lastUpdated?: string; sourceUrl?: string; notes?: string }>;
};

export const CURATED_TOOL_BLOG_SLUGS: Record<string, string[]> = {
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

function normalizeFaqKey(q: string): string {
  return q
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\b(what|how|is|are|the|in|for|of|a|an|to|do|does|can|my|your|kenya|kenyan|2026)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function resolveToolGuideAndFaq(
  tool: Tool,
  faq: FAQItem[] = [],
  guideOverride?: RichGuideEntry
): { guide: RichGuideEntry | undefined; effectiveFaq: FAQItem[] } {
  const guide =
    guideOverride ||
    (toolGuidesData.guides as Record<string, RichGuideEntry>)[tool.slug];

  const mergedFaqMap = new globalThis.Map<string, FAQItem>();
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
  return { guide, effectiveFaq: Array.from(mergedFaqMap.values()) };
}

export function getCuratedBlogPostsForTool(tool: Tool, limit: number = 3): StaticBlogPostSummary[] {
  const slugs = CURATED_TOOL_BLOG_SLUGS[tool.slug] || [];
  const results: StaticBlogPostSummary[] = [];
  for (const slug of slugs) {
    const post = STATIC_BLOG_POST_SUMMARIES.find((p) => p.slug === slug);
    if (post && !results.some((r) => r.slug === post.slug)) {
      results.push(post);
    }
    if (results.length >= limit) break;
  }
  return results;
}

interface ToolShellServerProps {
  slug: string;
  children: React.ReactNode;
  faq?: FAQItem[];
  breadcrumbSuffix?: BreadcrumbItem[];
  breadcrumbParentLabel?: string;
  hideHeader?: boolean;
  hideFooter?: boolean;
  hideSource?: boolean;
  guideOverride?: RichGuideEntry;
}

export default function ToolShellServer({
  slug,
  children,
  faq = [],
  breadcrumbSuffix,
  breadcrumbParentLabel,
  hideHeader = false,
  hideFooter = false,
  hideSource = false,
  guideOverride,
}: ToolShellServerProps) {
  const tool = TOOLS.find((t) => t.slug === slug);
  if (!tool) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    );
  }

  const category = getCategoryInfo(tool.category);
  const { guide, effectiveFaq } = resolveToolGuideAndFaq(tool, faq, guideOverride);
  const sourceEntry = typedToolSources.tools?.[tool.slug];
  const lastModifiedDate =
    sourceEntry?.lastUpdated || typedToolSources.lastAudit || "2026-11-15";
  const officialSourceUrl = sourceEntry?.sourceUrl;
  const relatedBlogPosts = getCuratedBlogPostsForTool(tool, 3);
  const relatedTools = getRelatedTools(tool.slug, 4).map((rel) => {
    const relCat = getCategoryInfo(rel.category);
    return {
      tool: rel,
      category: relCat ? { name: relCat.name, badgeClass: relCat.badgeClass } : undefined,
      iconNode: renderServerToolIcon(rel.icon, "w-[1em] h-[1em] inline-block mb-[0.1em]"),
    };
  });

  return (
    <ToolShellView
      tool={tool}
      category={category ? { id: category.id, name: category.name, badgeClass: category.badgeClass } : undefined}
      toolIconNode={renderServerToolIcon(tool.icon, "w-[1em] h-[1em] inline-block mb-[0.1em]")}
      guide={guide}
      effectiveFaq={effectiveFaq}
      relatedTools={relatedTools}
      relatedBlogPosts={relatedBlogPosts}
      lastModifiedDate={lastModifiedDate}
      officialSourceUrl={officialSourceUrl}
      breadcrumbSuffix={breadcrumbSuffix}
      breadcrumbParentLabel={breadcrumbParentLabel}
      hideHeader={hideHeader}
      hideFooter={hideFooter}
      hideSource={hideSource}
    >
      {children}
    </ToolShellView>
  );
}
