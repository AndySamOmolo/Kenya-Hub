import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("kuccps-cluster-calculator");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="kuccps-cluster-calculator">{children}</ToolShellServer>;
}
