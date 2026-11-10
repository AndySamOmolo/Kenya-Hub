import type { MetadataRoute } from "next";
import { Client, Databases, Query } from "node-appwrite";
import { TOOLS } from "@/lib/tools-registry";
import countiesData from "@/data/counties.json";
import matatuData from "@/data/matatu-routes.json";
import toolSourcesData from "@/data/tool-data-sources.json";
import { STATIC_BLOG_POSTS } from "@/data/blog-posts";
import { PUBLISHED_COURSES } from "@/data/courses/registry";

export const dynamic = "force-static";

const BASE_URL = "https://kenyahub.me";
const DEFAULT_VERIFIED_DATE = "2026-03-01T00:00:00.000Z";
const DATABASE_ID = "kenyahub-db";
const BLOGS_COLLECTION_ID = "blogs";
const EXCLUDED_SLUGS = new Set([
  "greatest-kenyan-hiphop-albums-of-all-time",
  "traditional-bantu-beliefs-and-magic-in-kenya",
  "thahu-purification-and-restoration-kikuyu-kamba",
  "circumcision-age-grades-community-memory-kikuyu-kamba",
  "death-burial-ancestral-spirits-ngoma-aimu-kikuyu-kamba",
  "mundu-mugo-divination-mbugu-healing-kikuyu-kamba",
]);

function isHighQualityAppwritePost(doc: any): boolean {
  if (!doc || !doc.slug || EXCLUDED_SLUGS.has(doc.slug)) return false;
  const content = String(doc.content || "");
  if (content.length < 2500) return false;
  if (content.toLowerCase().includes("<iframe")) return false;
  if ((doc.readTime || 0) < 4) return false;
  return true;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const toolSourcesMap = (toolSourcesData.tools || {}) as Record<
    string,
    { lastVerified?: string }
  >;

  // Core Hub & Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: DEFAULT_VERIFIED_DATE,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/tools/`,
      lastModified: DEFAULT_VERIFIED_DATE,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/county/`,
      lastModified: DEFAULT_VERIFIED_DATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/matatu/`,
      lastModified: DEFAULT_VERIFIED_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/`,
      lastModified: DEFAULT_VERIFIED_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about/`,
      lastModified: DEFAULT_VERIFIED_DATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact/`,
      lastModified: DEFAULT_VERIFIED_DATE,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/privacy/`,
      lastModified: DEFAULT_VERIFIED_DATE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms/`,
      lastModified: DEFAULT_VERIFIED_DATE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamically generate entries for every active tool using its verified date from tool-data-sources.json
  const toolPages: MetadataRoute.Sitemap = TOOLS.filter(
    (tool) => tool.isLive
  ).map((tool) => {
    const verifiedDate = toolSourcesMap[tool.slug]?.lastVerified;
    const lastModified = verifiedDate
      ? new Date(`${verifiedDate}T00:00:00.000Z`).toISOString()
      : DEFAULT_VERIFIED_DATE;
    return {
      url: `${BASE_URL}/tools/${tool.slug}/`,
      lastModified,
      changeFrequency:
        tool.updateFrequency === "annual" || tool.updateFrequency === "periodic"
          ? "monthly"
          : tool.updateFrequency === "live"
            ? "weekly"
            : "monthly",
      priority: 0.85,
    };
  });

  const languageCoursePages: MetadataRoute.Sitemap = PUBLISHED_COURSES.map(
    ({ config }) => ({
      url: `${BASE_URL}/tools/learn/${config.id}/`,
      lastModified: DEFAULT_VERIFIED_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  // County pages
  const countyPages: MetadataRoute.Sitemap = countiesData.counties.map(
    (county) => ({
      url: `${BASE_URL}/county/${county.slug}/`,
      lastModified: DEFAULT_VERIFIED_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  // Matatu pages
  const matatuPages: MetadataRoute.Sitemap = [];
  matatuData.towns
    .filter((t) => t.isActive)
    .forEach((t) => {
      matatuPages.push({
        url: `${BASE_URL}/matatu/${t.slug}/`,
        lastModified: DEFAULT_VERIFIED_DATE,
        changeFrequency: "weekly",
        priority: 0.8,
      });
      const townRoutes =
        (matatuData.routes as Record<string, typeof matatuData.routes.nairobi>)[
          t.slug
        ] || [];
      townRoutes.forEach((r) => {
        matatuPages.push({
          url: `${BASE_URL}/matatu/${t.slug}/${r.slug}/`,
          lastModified: DEFAULT_VERIFIED_DATE,
          changeFrequency: "monthly",
          priority: 0.75,
        });
      });
    });

  // Merge static and verified Appwrite blog posts so sitemap matches /blog/
  const blogPostsMap = new Map<string, string>();
  for (const post of STATIC_BLOG_POSTS) {
    blogPostsMap.set(post.slug, post.updatedAt || post.publishedAt);
  }
  try {
    const client = new Client()
      .setEndpoint("https://fra.cloud.appwrite.io/v1")
      .setProject("6a3290500003e21b7fe1");
    const databases = new Databases(client);
    const response = await databases.listDocuments(
      DATABASE_ID,
      BLOGS_COLLECTION_ID,
      [Query.limit(100)]
    );
    for (const doc of response.documents as any[]) {
      if (isHighQualityAppwritePost(doc) && !blogPostsMap.has(doc.slug)) {
        blogPostsMap.set(
          doc.slug,
          doc.updatedAt || doc.publishedAt || DEFAULT_VERIFIED_DATE
        );
      }
    }
  } catch {
    // Offline / static fallback uses STATIC_BLOG_POSTS
  }

  const blogPages: MetadataRoute.Sitemap = Array.from(
    blogPostsMap.entries()
  ).map(([slug, lastModified]) => ({
    url: `${BASE_URL}/blog/${slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...toolPages,
    ...languageCoursePages,
    ...countyPages,
    ...matatuPages,
    ...blogPages,
  ];
}
