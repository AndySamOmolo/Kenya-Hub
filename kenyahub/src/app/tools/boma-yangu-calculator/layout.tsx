import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("boma-yangu-calculator");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="boma-yangu-calculator">{children}</ToolShellServer>;
}
