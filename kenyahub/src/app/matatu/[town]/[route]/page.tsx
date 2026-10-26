import type { Metadata } from "next";
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

  const breadcrumbSchema =
    townObj && routeObj
      ? {
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
              item: `https://kenyahub.me/matatu/${townObj.slug}/${routeObj.slug}/`,
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
      <RouteDetailView townSlug={townSlug} routeSlug={routeSlug} />
    </>
  );
}
