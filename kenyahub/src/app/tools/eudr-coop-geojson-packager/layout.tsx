import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("eudr-coop-geojson-packager");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="eudr-coop-geojson-packager">{children}</ToolShellServer>;
}
