import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://kenyahub.me";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Mediapartners-Google",
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
