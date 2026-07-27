import matatuData from "@/data/matatu-routes.json";
import TownMatatuView from "@/components/matatu/TownMatatuView";

export function generateStaticParams() {
  return matatuData.towns
    .filter((t) => t.isActive)
    .map((t) => ({
      town: t.slug,
    }));
}

export default async function TownMatatuPage({
  params,
}: {
  params: Promise<{ town: string }>;
}) {
  const resolvedParams = await params;
  return <TownMatatuView townSlug={resolvedParams.town.toLowerCase()} />;
}
