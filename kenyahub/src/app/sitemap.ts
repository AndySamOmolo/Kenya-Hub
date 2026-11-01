import type { MetadataRoute } from "next";
import { Client, Databases, Query } from "node-appwrite";
import { TOOLS } from "@/lib/tools-registry";
import countiesData from "@/data/counties.json";
import matatuData from "@/data/matatu-routes.json";
import { STATIC_BLOG_POSTS } from "@/data/blog-posts";
import { PUBLISHED_COURSES } from "@/data/courses/registry";

export const dynamic = "force-static";

const BASE_URL = "https://kenyahub.me";
const DATABASE_ID = "kenyahub-db";
const BLOGS_COLLECTION_ID = "blogs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/tools/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/matatu/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy/`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms/`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamically generate entries for every tool in the registry
  const toolPages: MetadataRoute.Sitemap = TOOLS.filter(
    (tool) => tool.isLive
  ).map((tool) => ({
    url: `${BASE_URL}/tools/${tool.slug}/`,
    lastModified: now,
    changeFrequency:
      tool.updateFrequency === "annual" || tool.updateFrequency === "periodic"
        ? "monthly"
        : tool.updateFrequency === "live"
          ? "weekly"
          : "monthly",
    priority: 0.8,
  }));

  const languageCoursePages: MetadataRoute.Sitemap = PUBLISHED_COURSES.map(
    ({ config }) => ({
      url: `${BASE_URL}/tools/learn/${config.id}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  // County pages
  const countyBasePage: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/county/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const countyPages: MetadataRoute.Sitemap = countiesData.counties.map(
    (county) => ({
      url: `${BASE_URL}/county/${county.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  // Matatu pages
  const matatuPages: MetadataRoute.Sitemap = [];
  matatuData.towns.filter((t) => t.isActive).forEach((t) => {
    matatuPages.push({
      url: `${BASE_URL}/matatu/${t.slug}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
    const townRoutes = (matatuData.routes as Record<string, typeof matatuData.routes.nairobi>)[t.slug] || [];
    townRoutes.forEach((r) => {
      matatuPages.push({
        url: `${BASE_URL}/matatu/${t.slug}/${r.slug}/`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  });

  // Merge static and Appwrite blog posts so sitemap matches /blog/
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
    const EXCLUDED_SLUGS = new Set(["greatest-kenyan-hiphop-albums-of-all-time"]);
    for (const doc of response.documents as any[]) {
      if (!EXCLUDED_SLUGS.has(doc.slug) && (doc.readTime || 0) > 1 && (!doc.content || doc.content.length >= 800)) {
        blogPostsMap.set(doc.slug, doc.updatedAt || doc.publishedAt || now);
      }
    }
  } catch {
    // Offline / static fallback uses STATIC_BLOG_POSTS
  }

  const blogPages: MetadataRoute.Sitemap = Array.from(blogPostsMap.entries()).map(([slug, lastModified]) => ({
    url: `${BASE_URL}/blog/${slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...toolPages, ...languageCoursePages, ...countyBasePage, ...countyPages, ...matatuPages, ...blogPages];
}
