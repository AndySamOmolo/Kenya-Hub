import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("kjsea-pathway-engine");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="kjsea-pathway-engine">{children}</ToolShellServer>;
}
