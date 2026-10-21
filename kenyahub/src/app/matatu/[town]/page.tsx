import type { Metadata } from "next";
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
      title: "Town Matatu Routes Not Found | KenyaHub",
      robots: { index: false, follow: true },
    };
  }

  const canonicalUrl = `https://kenyahub.me/matatu/${townObj.slug}/`;
  const title = `${townObj.name} Matatu Routes, Stages, Fares & SACCOs (${routes.length} Routes)`;
  const description = `Complete guide to ${routes.length} matatu and PSV routes in ${townObj.name} (${townObj.county} County). View CBD terminals, stages, peak and off-peak fares, and registered SACCO operators.`;

  return {
    title,
    description,
    keywords: [
      `${townObj.name} matatu routes`,
      `${townObj.name} matatu fares`,
      `${townObj.name} public transport stages`,
      `matatu SACCOs in ${townObj.name}`,
    ],
    openGraph: {
      title: `${title} | KenyaHub`,
      description,
      type: "website",
      locale: "en_KE",
      siteName: "KenyaHub",
      url: canonicalUrl,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | KenyaHub`,
      description,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: canonicalUrl,
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

  const breadcrumbSchema = townObj
    ? {
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
      }
    : null;

  return (
    <>
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      <TownMatatuView townSlug={townSlug} />
    </>
  );
}
