import type { MetadataRoute } from "next";
import { TOOLS } from "@/lib/tools-registry";

export const dynamic = "force-static";

const BASE_URL = "https://kenyahub.me";

export default function sitemap(): MetadataRoute.Sitemap {
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
      url: `${BASE_URL}/blog/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
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

  return [...staticPages, ...toolPages];
}
