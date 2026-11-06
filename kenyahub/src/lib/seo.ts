import type { Metadata } from "next";
import { TOOLS } from "./tools-registry";
import { STATIC_BLOG_POSTS, type StaticBlogPost } from "@/data/blog-posts";
import type { Tool } from "./types";

const BASE_URL = "https://kenyahub.me";

export function generateToolMetadata(slugOrTool: string | { slug: string }): Metadata {
  const slug = typeof slugOrTool === "string" ? slugOrTool : slugOrTool.slug;
  const tool = TOOLS.find((t) => t.slug === slug);

  if (!tool) {
    return {
      title: "Tool Not Found",
      description: "This tool could not be found on KenyaHub.",
      robots: { index: false, follow: true },
    };
  }

  const canonicalUrl = `${BASE_URL}/tools/${tool.slug}/`;
  const enrichedKeywords = Array.from(
    new Set([
      ...tool.keywords,
      `${tool.shortTitle} Kenya 2026`,
      `free ${tool.shortTitle} Kenya`,
      tool.dataSource,
      "KenyaHub tools",
    ])
  );

  return {
    title: tool.title,
    description: tool.description,
    keywords: enrichedKeywords,
    authors: [{ name: "KenyaHub Editorial Team", url: `${BASE_URL}/about/` }],
    creator: "KenyaHub",
    publisher: "KenyaHub",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: `${tool.title} | KenyaHub`,
      description: tool.description,
      type: "website",
      locale: "en_KE",
      siteName: "KenyaHub",
      url: canonicalUrl,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${tool.title} — KenyaHub`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.title} | KenyaHub`,
      description: tool.description,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-KE": canonicalUrl,
        en: canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
  };
}

// Explicit high-relevance mappings between tools and flagship blog guides
const TOOL_TO_BLOG_MAP: Record<string, string[]> = {
  "paye-calculator": [
    "how-paye-tax-works-in-kenya",
    "sha-shif-health-insurance-kenya-complete-guide-2026",
    "sacco-loans-dividends-chama-guide-kenya-2026",
  ],
  "mpesa-fee-calculator": [
    "understanding-mpesa-transaction-fees",
    "how-paye-tax-works-in-kenya",
    "sacco-loans-dividends-chama-guide-kenya-2026",
  ],
  "sacco-chama-calculator": [
    "sacco-loans-dividends-chama-guide-kenya-2026",
    "cost-of-building-a-house-in-kenya-mjengo-guide-2026",
    "land-transfer-stamp-duty-conveyancing-fees-kenya-2026",
  ],
  "helb-calculator": [
    "how-paye-tax-works-in-kenya",
    "sacco-loans-dividends-chama-guide-kenya-2026",
    "cbc-curriculum-explained-for-parents",
  ],
  "stamp-duty-calculator": [
    "land-transfer-stamp-duty-conveyancing-fees-kenya-2026",
    "cost-of-building-a-house-in-kenya-mjengo-guide-2026",
    "sacco-loans-dividends-chama-guide-kenya-2026",
  ],
  "vehicle-insurance-calculator": [
    "kra-car-import-duty-calculator-guide-kenya-2026",
    "land-transfer-stamp-duty-conveyancing-fees-kenya-2026",
    "how-paye-tax-works-in-kenya",
  ],
  "cbc-curriculum": [
    "cbc-curriculum-explained-for-parents",
    "guide-to-kenyan-public-holidays-2026",
    "how-paye-tax-works-in-kenya",
  ],
  "kuccps-cluster-calculator": [
    "cbc-curriculum-explained-for-parents",
    "how-paye-tax-works-in-kenya",
    "sacco-loans-dividends-chama-guide-kenya-2026",
  ],
  "kcse-grade-calculator": [
    "cbc-curriculum-explained-for-parents",
    "how-paye-tax-works-in-kenya",
    "guide-to-kenyan-public-holidays-2026",
  ],
  "kcse-school-rankings": [
    "cbc-curriculum-explained-for-parents",
    "guide-to-kenyan-public-holidays-2026",
  ],
  "kra-car-import-calculator": [
    "kra-car-import-duty-calculator-guide-kenya-2026",
    "how-paye-tax-works-in-kenya",
    "understanding-mpesa-transaction-fees",
  ],
  "number-plate-decoder": [
    "kra-car-import-duty-calculator-guide-kenya-2026",
    "guide-to-kenyan-public-holidays-2026",
  ],
  "driving-license-guide": [
    "kra-car-import-duty-calculator-guide-kenya-2026",
    "guide-to-kenyan-public-holidays-2026",
  ],
  "traffic-fines": [
    "kra-car-import-duty-calculator-guide-kenya-2026",
    "guide-to-kenyan-public-holidays-2026",
  ],
  "mjengo-construction-calculator": [
    "cost-of-building-a-house-in-kenya-mjengo-guide-2026",
    "land-transfer-stamp-duty-conveyancing-fees-kenya-2026",
    "sacco-loans-dividends-chama-guide-kenya-2026",
  ],
  "nhif-hospital-finder": [
    "sha-shif-health-insurance-kenya-complete-guide-2026",
    "how-paye-tax-works-in-kenya",
  ],
  "child-growth-schedule": [
    "sha-shif-health-insurance-kenya-complete-guide-2026",
    "cbc-curriculum-explained-for-parents",
  ],
  "kenyan-food-nutrition": [
    "sha-shif-health-insurance-kenya-complete-guide-2026",
    "cbc-curriculum-explained-for-parents",
  ],
  "kplc-token-calculator": [
    "kplc-prepaid-tokens-tariff-bands-guide-kenya-2026",
    "understanding-mpesa-transaction-fees",
    "cost-of-building-a-house-in-kenya-mjengo-guide-2026",
  ],
  "water-bill-calculator": [
    "kplc-prepaid-tokens-tariff-bands-guide-kenya-2026",
    "cost-of-building-a-house-in-kenya-mjengo-guide-2026",
  ],
};

export function getRelatedBlogPostsForTool(
  toolSlug: string,
  limit: number = 3
): StaticBlogPost[] {
  const tool = TOOLS.find((t) => t.slug === toolSlug);
  const results: StaticBlogPost[] = [];
  const seen = new Set<string>();

  const explicitSlugs = TOOL_TO_BLOG_MAP[toolSlug] || [];
  for (const bSlug of explicitSlugs) {
    const found = STATIC_BLOG_POSTS.find((p) => p.slug === bSlug);
    if (found && !seen.has(found.slug)) {
      results.push(found);
      seen.add(found.slug);
    }
  }

  if (results.length >= limit) return results.slice(0, limit);

  const tokens = tool
    ? [
        ...tool.shortTitle.toLowerCase().split(/\W+/),
        ...tool.keywords.flatMap((k) => k.toLowerCase().split(/\W+/)),
      ].filter((w) => w.length > 3 && w !== "kenya" && w !== "calculator" && w !== "2026")
    : [];

  const scored = STATIC_BLOG_POSTS.filter((p) => !seen.has(p.slug)).map((p) => {
    const hay = `${p.title} ${p.excerpt} ${(p.tags || []).join(" ")}`.toLowerCase();
    let score = 0;
    for (const tok of tokens) {
      if (hay.includes(tok)) score += 2;
    }
    if (
      tool?.category === "language-learning" &&
      (hay.includes("language") ||
        hay.includes("proverb") ||
        hay.includes("kikuyu") ||
        hay.includes("swahili") ||
        hay.includes("luo"))
    ) {
      score += 5;
    }
    return { post: p, score };
  });

  scored.sort((a, b) => b.score - a.score);
  for (const item of scored) {
    if (results.length >= limit) break;
    results.push(item.post);
  }

  return results.slice(0, limit);
}

export function getRelatedToolsForBlogPost(
  postSlug: string,
  tags: string[] = [],
  title: string = "",
  limit: number = 4
): Tool[] {
  const results: Tool[] = [];
  const seen = new Set<string>();

  // Reverse lookup from TOOL_TO_BLOG_MAP
  for (const [toolSlug, blogSlugs] of Object.entries(TOOL_TO_BLOG_MAP)) {
    if (blogSlugs.includes(postSlug)) {
      const tool = TOOLS.find((t) => t.slug === toolSlug);
      if (tool && !seen.has(tool.slug)) {
        results.push(tool);
        seen.add(tool.slug);
      }
    }
  }

  const hay = `${postSlug} ${title} ${tags.join(" ")}`.toLowerCase();
  if (
    hay.includes("language") ||
    hay.includes("kikuyu") ||
    hay.includes("swahili") ||
    hay.includes("luo") ||
    hay.includes("maasai") ||
    hay.includes("kamba") ||
    hay.includes("kalenjin") ||
    hay.includes("proverb") ||
    hay.includes("grammar") ||
    hay.includes("bantu") ||
    hay.includes("nilotic")
  ) {
    for (const slug of ["learn", "kenyan-translator", "cbc-curriculum"]) {
      const t = TOOLS.find((x) => x.slug === slug);
      if (t && !seen.has(t.slug)) {
        results.push(t);
        seen.add(t.slug);
      }
    }
  }

  const scored = TOOLS.filter((t) => !seen.has(t.slug)).map((t) => {
    let score = 0;
    for (const kw of t.keywords) {
      const words = kw.toLowerCase().split(/\W+/).filter((w) => w.length > 3 && w !== "kenya");
      for (const w of words) {
        if (hay.includes(w)) score += 2;
      }
    }
    return { tool: t, score };
  });

  scored.sort((a, b) => b.score - a.score);
  for (const item of scored) {
    if (results.length >= limit) break;
    results.push(item.tool);
  }

  return results.slice(0, limit);
}

export function getRelatedBlogPostsForBlogPost(
  currentSlug: string,
  tags: string[] = [],
  limit: number = 3
): StaticBlogPost[] {
  const tagSet = new Set(tags.map((t) => t.toLowerCase()));
  const candidates = STATIC_BLOG_POSTS.filter((p) => p.slug !== currentSlug).map((p) => {
    let score = 0;
    for (const t of p.tags || []) {
      if (tagSet.has(t.toLowerCase())) score += 3;
    }
    return { post: p, score };
  });
  candidates.sort((a, b) => b.score - a.score);
  return candidates.slice(0, limit).map((c) => c.post);
}
