import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("icms-landed-cost-arbitrage");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="icms-landed-cost-arbitrage">{children}</ToolShellServer>;
}
