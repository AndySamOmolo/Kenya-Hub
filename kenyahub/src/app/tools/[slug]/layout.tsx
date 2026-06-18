import type { Metadata } from "next";
import { TOOLS } from "@/lib/tools-registry";

// Generate metadata for each tool page dynamically
// Since tool pages are "use client", they can't export metadata.
// This layout.tsx runs on the server and provides SEO metadata for every tool.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
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
      url: `https://kenyahub.me/tools/${tool.slug}/`,
    },
    twitter: {
      card: "summary_large_image",
      title: tool.title,
      description: tool.description,
    },
    alternates: {
      canonical: `https://kenyahub.me/tools/${tool.slug}/`,
    },
  };
}

// Generate static params so Next.js knows all tool slugs at build time
export async function generateStaticParams() {
  return TOOLS.filter((t) => t.isLive).map((tool) => ({
    slug: tool.slug,
  }));
}

export default function ToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
