import type { Metadata } from "next";
import { notFound } from "next/navigation";
import matatuData from "@/data/matatu-routes.json";
import TownMatatuView from "@/components/matatu/TownMatatuView";

export function generateStaticParams() {
  return matatuData.towns
    .filter((t) => t.isActive)
    .map((t) => ({
      town: t.slug,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ town: string }>;
}): Promise<Metadata> {
  const { town } = await params;
  const townSlug = town.toLowerCase();
  const townObj = matatuData.towns.find((t) => t.slug === townSlug);
  const routes =
    (matatuData.routes as Record<string, typeof matatuData.routes.nairobi>)[townSlug] || [];

  if (!townObj) {
    return {
      title: "Town Matatu Routes Not Found",
      robots: { index: false, follow: true },
    };
  }

  const canonicalUrl = `https://kenyahub.me/matatu/${townObj.slug}/`;
  const title = `${townObj.name} Matatu Routes, Stages, Fares & SACCOs (${routes.length} Verified Routes)`;
  const description = `Complete guide to ${routes.length} matatu and PSV routes in ${townObj.name}. ${townObj.description} View stages, fare ranges, operating hours, and registered SACCO operators.`;

  return {
    title,
    description,
    keywords: [
      `${townObj.name} matatu routes`,
      `${townObj.name} matatu fares`,
      `${townObj.name} public transport stages`,
      `matatu SACCOs in ${townObj.name}`,
      `${townObj.name} bus stages and route numbers`,
    ],
    openGraph: {
      title: `${title} | KenyaHub`,
      description,
      type: "website",
      locale: "en_KE",
      siteName: "KenyaHub",
      url: canonicalUrl,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${title} — KenyaHub`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | KenyaHub`,
      description,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-KE": canonicalUrl,
        en: canonicalUrl,
      },
    },
  };
}

export default async function TownMatatuPage({
  params,
}: {
  params: Promise<{ town: string }>;
}) {
  const resolvedParams = await params;
  const townSlug = resolvedParams.town.toLowerCase();
  const townObj = matatuData.towns.find((t) => t.slug === townSlug);
  const routes =
    (matatuData.routes as Record<string, typeof matatuData.routes.nairobi>)[townSlug] || [];

  if (!townObj) {
    notFound();
  }

  const saccos = Array.from(new Set(routes.map((r) => r.saccoName)));
  const minFare = routes.length > 0 ? Math.min(...routes.map((r) => r.fareMin)) : 30;
  const maxFare = routes.length > 0 ? Math.max(...routes.map((r) => r.fareMax)) : 200;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://kenyahub.me/" },
      { "@type": "ListItem", position: 2, name: "Matatu Routes", item: "https://kenyahub.me/matatu/" },
      {
        "@type": "ListItem",
        position: 3,
        name: `${townObj.name} Matatu Routes`,
        item: `https://kenyahub.me/matatu/${townObj.slug}/`,
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${townObj.name} Matatu Routes & Stages Directory`,
    numberOfItems: routes.length,
    itemListElement: routes.map((r, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `Route ${r.routeNumber}: ${r.name} (${r.terminusA} to ${r.terminusB})`,
      url: `https://kenyahub.me/matatu/${townObj.slug}/${r.slug}/`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How many matatu routes are tracked in ${townObj.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `KenyaHub tracks ${routes.length} verified matatu and PSV routes in ${townObj.name}, operated by ${saccos.length} NTSA-registered SACCOs including ${saccos.slice(0, 5).join(", ")}.`,
        },
      },
      {
        "@type": "Question",
        name: `What is the average matatu fare in ${townObj.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `One-way matatu fares across ${townObj.name} range from KES ${minFare} during off-peak hours on short urban corridors to KES ${maxFare} during peak rush hours on longer commuter routes.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TownMatatuView townSlug={townSlug} />
    </>
  );
}
