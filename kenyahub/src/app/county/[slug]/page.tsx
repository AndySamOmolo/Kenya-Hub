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
    return { title: "County Not Found | KenyaHub" };
  }
  const codeStr = county.code.toString().padStart(3, "0");
  return {
    title: `${county.name} County (#${codeStr}) — Governor, Constituencies, Budget & Data`,
    description: `Complete profile for ${county.name} County (#${codeStr}), Kenya. Capital: ${county.capital}. Governor: ${county.governor}. Senator: ${county.senator}. Population: ${county.population.toLocaleString()}, ${county.constituencies.length} constituencies, FY 2025/26 budget, climate, SHA hospitals & postal codes.`,
    alternates: {
      canonical: `https://kenyahub.me/county/${county.slug}/`,
      languages: {
        "en-KE": `https://kenyahub.me/county/${county.slug}/`,
        en: `https://kenyahub.me/county/${county.slug}/`,
        "x-default": `https://kenyahub.me/county/${county.slug}/`,
      },
    },
    openGraph: {
      title: `${county.name} County (#${codeStr}) Intelligence Profile | KenyaHub`,
      description: `Capital: ${county.capital} • Governor: ${county.governor} • Population: ${county.population.toLocaleString()} • ${county.constituencies.length} Constituencies.`,
      url: `https://kenyahub.me/county/${county.slug}/`,
      type: "website",
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
