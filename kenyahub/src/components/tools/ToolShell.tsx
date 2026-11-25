import React from "react";
import type { Tool } from "@/lib/types";
import { getCategoryInfo, getRelatedTools } from "@/lib/tools-registry";
import { STATIC_BLOG_POST_SUMMARIES, type StaticBlogPostSummary } from "@/data/blog-posts-summary";
import DynamicIcon from "@/components/ui/DynamicIcon";
import toolGuidesData from "@/data/tool-guides.json";
import toolSourcesData from "@/data/tool-data-sources.json";
import ToolShellView, {
  type FAQItem,
  type BreadcrumbItem,
  type RichGuideEntry,
} from "@/components/tools/ToolShellView";

export type { FAQItem, BreadcrumbItem, RichGuideEntry };

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

const CURATED_TOOL_BLOG_SLUGS: Record<string, string[]> = {
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

function getCuratedBlogPostsForTool(tool: Tool, limit: number = 3): StaticBlogPostSummary[] {
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

function normalizeFaqKey(q: string): string {
  return q
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\b(what|how|is|are|the|in|for|of|a|an|to|do|does|can|my|your|kenya|kenyan|2026)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function resolveGuideAndFaq(
  tool: Tool,
  faq: FAQItem[],
  guideOverride?: RichGuideEntry
): { guide: RichGuideEntry | undefined; effectiveFaq: FAQItem[] } {
  const guide =
    guideOverride ||
    (toolGuidesData.guides as Record<string, RichGuideEntry>)[tool.slug];

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
  return { guide, effectiveFaq: Array.from(mergedFaqMap.values()) };
}

const EMPTY_FAQ: FAQItem[] = [];
const EMPTY_BREADCRUMB_SUFFIX: BreadcrumbItem[] = [];

export default function ToolShell({
  tool,
  children,
  faq = EMPTY_FAQ,
  breadcrumbSuffix = EMPTY_BREADCRUMB_SUFFIX,
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
  const { guide, effectiveFaq } = resolveGuideAndFaq(tool, faq, guideOverride);
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
      iconNode: <DynamicIcon emoji={rel.icon} className="w-[1em] h-[1em] inline-block mb-[0.1em]" />,
    };
  });

  return (
    <ToolShellView
      tool={tool}
      category={category ? { id: category.id, name: category.name, badgeClass: category.badgeClass } : undefined}
      toolIconNode={<DynamicIcon emoji={tool.icon} className="w-[1em] h-[1em] inline-block mb-[0.1em]" />}
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
