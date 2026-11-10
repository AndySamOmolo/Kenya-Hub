import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://kenyahub.me";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/"],
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Mediapartners-Google",
        allow: "/",
        disallow: ["/admin/"],
      },
      {
        userAgent: "Google-Display-Ads-Bot",
        allow: "/",
        disallow: ["/admin/"],
      },
      {
        userAgent: "AdsBot-Google",
        allow: "/",
        disallow: ["/admin/"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", "/_next/static/"],
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
