import type { Metadata } from "next";
import { TOOLS } from "./tools-registry";

const BASE_URL = "https://kenyahub.me";

export function generateToolMetadata(slug: string): Metadata {
  const tool = TOOLS.find((t) => t.slug === slug);

  if (!tool) {
    return {
      title: "Tool Not Found",
      description: "This tool could not be found on KenyaHub.",
    };
  }

  return {
    title: tool.title,
    description: tool.description,
    keywords: tool.keywords,
    openGraph: {
      title: tool.title,
      description: tool.description,
      type: "website",
      locale: "en_KE",
      siteName: "KenyaHub",
      url: `${BASE_URL}/tools/${tool.slug}/`,
    },
    twitter: {
      card: "summary_large_image",
      title: tool.title,
      description: tool.description,
    },
    alternates: {
      canonical: `${BASE_URL}/tools/${tool.slug}/`,
    },
  };
}
