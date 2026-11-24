import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://kenyahub.me";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/"],
        disallow: ["/api/", "/admin/", "/account/"],
      },
      {
        userAgent: "Mediapartners-Google",
        allow: "/",
        disallow: ["/admin/", "/account/"],
      },
      {
        userAgent: "Google-Display-Ads-Bot",
        allow: "/",
        disallow: ["/admin/", "/account/"],
      },
      {
        userAgent: "AdsBot-Google",
        allow: "/",
        disallow: ["/admin/", "/account/"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", "/_next/static/"],
        disallow: ["/api/", "/admin/", "/account/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
