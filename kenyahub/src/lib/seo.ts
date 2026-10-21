import type { Metadata } from "next";
import { TOOLS } from "./tools-registry";

const BASE_URL = "https://kenyahub.me";

export function generateToolMetadata(slug: string): Metadata {
  const tool = TOOLS.find((t) => t.slug === slug);

  if (!tool) {
    return {
      title: "Tool Not Found",
      description: "This tool could not be found on KenyaHub.",
      robots: { index: false, follow: true },
    };
  }

  const canonicalUrl = `${BASE_URL}/tools/${tool.slug}/`;

  return {
    title: tool.title,
    description: tool.description,
    keywords: tool.keywords,
    authors: [{ name: "KenyaHub Editorial Team", url: `${BASE_URL}/about/` }],
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
    },
  };
}
