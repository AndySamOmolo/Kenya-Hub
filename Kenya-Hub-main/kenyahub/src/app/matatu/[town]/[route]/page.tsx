import type { Metadata } from "next";
import { notFound } from "next/navigation";
import matatuData from "@/data/matatu-routes.json";
import RouteDetailView from "@/components/matatu/RouteDetailView";

export function generateStaticParams() {
  const params: { town: string; route: string }[] = [];
  matatuData.towns
    .filter((t) => t.isActive)
    .forEach((t) => {
      const townRoutes =
        (matatuData.routes as Record<string, typeof matatuData.routes.nairobi>)[t.slug] || [];
      townRoutes.forEach((r) => {
        params.push({ town: t.slug, route: r.slug });
      });
    });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ town: string; route: string }>;
}): Promise<Metadata> {
  const { town, route } = await params;
  const townSlug = town.toLowerCase();
  const routeSlug = route.toLowerCase();
  const townObj = matatuData.towns.find((t) => t.slug === townSlug);
  const townRoutes =
    (matatuData.routes as Record<string, typeof matatuData.routes.nairobi>)[townSlug] || [];
  const routeObj = townRoutes.find((r) => r.slug === routeSlug);

  if (!townObj || !routeObj) {
    return {
      title: "Matatu Route Not Found",
      robots: { index: false, follow: true },
    };
  }

  const canonicalUrl = `https://kenyahub.me/matatu/${townObj.slug}/${routeObj.slug}/`;
  const title = `Route ${routeObj.routeNumber}: ${routeObj.name} (${townObj.name}) — Fares, Stages & Map`;
  const description = `${townObj.name} Matatu Route ${routeObj.routeNumber} (${routeObj.terminusA} to ${routeObj.terminusB}). Fare range KES ${routeObj.fareMin}–${routeObj.fareMax}, operated by ${routeObj.saccoName} (${routeObj.operatingHours}). Stages: ${routeObj.stages.map((s) => s.name).join(", ")}.`;

  return {
    title,
    description,
    keywords: [
      `Route ${routeObj.routeNumber} ${townObj.name}`,
      `matatu to ${routeObj.terminusB}`,
      `${routeObj.terminusA} to ${routeObj.terminusB} matatu fare`,
      routeObj.saccoName,
      `${routeObj.name} matatu stages`,
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

export default async function RouteDetailPage({
  params,
}: {
  params: Promise<{ town: string; route: string }>;
}) {
  const resolvedParams = await params;
  const townSlug = resolvedParams.town.toLowerCase();
  const routeSlug = resolvedParams.route.toLowerCase();
  const townObj = matatuData.towns.find((t) => t.slug === townSlug);
  const townRoutes =
    (matatuData.routes as Record<string, typeof matatuData.routes.nairobi>)[townSlug] || [];
  const routeObj = townRoutes.find((r) => r.slug === routeSlug);

  if (!townObj || !routeObj) {
    notFound();
  }

  const canonicalUrl = `https://kenyahub.me/matatu/${townObj.slug}/${routeObj.slug}/`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://kenyahub.me/" },
      { "@type": "ListItem", position: 2, name: "Matatu Routes", item: "https://kenyahub.me/matatu/" },
      {
        "@type": "ListItem",
        position: 3,
        name: townObj.name,
        item: `https://kenyahub.me/matatu/${townObj.slug}/`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: `Route ${routeObj.routeNumber}: ${routeObj.name}`,
        item: canonicalUrl,
      },
    ],
  };

  const busTripSchema = {
    "@context": "https://schema.org",
    "@type": "BusTrip",
    name: `${townObj.name} Matatu Route ${routeObj.routeNumber}: ${routeObj.name}`,
    busNumber: routeObj.routeNumber,
    busName: `${routeObj.name} (${routeObj.saccoName})`,
    url: canonicalUrl,
    provider: {
      "@type": "Organization",
      name: routeObj.saccoName,
    },
    departureBusStop: {
      "@type": "BusStop",
      name: routeObj.terminusA,
      ...(routeObj.stages[0] && {
        geo: {
          "@type": "GeoCoordinates",
          latitude: routeObj.stages[0].lat,
          longitude: routeObj.stages[0].lng,
        },
      }),
    },
    arrivalBusStop: {
      "@type": "BusStop",
      name: routeObj.terminusB,
      ...(routeObj.stages[routeObj.stages.length - 1] && {
        geo: {
          "@type": "GeoCoordinates",
          latitude: routeObj.stages[routeObj.stages.length - 1].lat,
          longitude: routeObj.stages[routeObj.stages.length - 1].lng,
        },
      }),
    },
    itinerary: routeObj.stages.map((s) => ({
      "@type": "BusStop",
      name: s.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: s.lat,
        longitude: s.lng,
      },
    })),
    offers: {
      "@type": "AggregateOffer",
      lowPrice: String(routeObj.fareMin),
      highPrice: String(routeObj.fareMax),
      priceCurrency: "KES",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(busTripSchema) }}
      />
      <RouteDetailView townSlug={townSlug} routeSlug={routeSlug} />
    </>
  );
}
