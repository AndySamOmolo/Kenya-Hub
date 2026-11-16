import type { Metadata } from "next";
import { notFound } from "next/navigation";
import countiesData from "@/data/counties.json";
import CountyDetailClient from "./CountyDetailClient";

export function generateStaticParams() {
  return countiesData.counties.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const county = countiesData.counties.find((c) => c.slug === slug);
  if (!county) {
    return {
      title: "County Not Found",
      robots: { index: false, follow: true },
    };
  }
  const codeStr = county.code.toString().padStart(3, "0");
  const canonicalUrl = `https://kenyahub.me/county/${county.slug}/`;
  const title = `${county.name} County (#${codeStr}) — Governor, Constituencies & Budget`;
  const description = `Complete profile for ${county.name} County (#${codeStr}), Kenya. Capital: ${county.capital}. Governor: ${county.governor}. Senator: ${county.senator}. Population: ${county.population.toLocaleString()}, ${county.constituencies.length} constituencies, FY 2025/26 budget, climate, SHA hospitals & postal codes.`;

  return {
    title,
    description,
    keywords: [
      `${county.name} County`,
      `County ${codeStr} Kenya`,
      `Governor of ${county.name} County`,
      `${county.name} County constituencies`,
      `${county.name} County budget FY 2025/26`,
      `${county.capital} postal code`,
      `SHA hospitals in ${county.name} County`,
    ],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-KE": canonicalUrl,
        en: canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      title: `${title} | KenyaHub`,
      description,
      url: canonicalUrl,
      siteName: "KenyaHub",
      locale: "en_KE",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${county.name} County (#${codeStr}) Profile — KenyaHub`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | KenyaHub`,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default async function CountyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const county = countiesData.counties.find((c) => c.slug === slug);
  if (!county) {
    notFound();
  }
  return <CountyDetailClient slug={slug} />;
}
