import type { Metadata } from "next";
import countiesData from "@/data/counties.json";

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
      description: "This county could not be found on KenyaHub.",
    };
  }

  return {
    title: `${county.name} County Government Guide | KenyaHub`,
    description: `Official guide to ${county.name} County. Find Governor ${county.governor}'s administration details, county contacts, population stats, and public services.`,
    keywords: [`${county.name} county`, `${county.governor}`, `${county.capital} Kenya`, `county 0${county.code}`],
    openGraph: {
      title: `${county.name} County Government Guide`,
      description: `Official guide to ${county.name} County. Contacts, stats, and services.`,
      type: "website",
      locale: "en_KE",
      siteName: "KenyaHub",
      url: `https://kenyahub.me/county/${county.slug}/`,
    },
    alternates: {
      canonical: `https://kenyahub.me/county/${county.slug}/`,
    },
  };
}

export async function generateStaticParams() {
  return countiesData.counties.map((county) => ({
    slug: county.slug,
  }));
}

export default function CountyDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
