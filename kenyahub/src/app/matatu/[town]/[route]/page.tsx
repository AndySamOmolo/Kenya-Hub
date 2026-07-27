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

export default async function RouteDetailPage({
  params,
}: {
  params: Promise<{ town: string; route: string }>;
}) {
  const resolvedParams = await params;
  return (
    <RouteDetailView
      townSlug={resolvedParams.town.toLowerCase()}
      routeSlug={resolvedParams.route.toLowerCase()}
    />
  );
}
