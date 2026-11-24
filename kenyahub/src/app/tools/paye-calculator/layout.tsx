import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("paye-calculator");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="paye-calculator">{children}</ToolShellServer>;
}
