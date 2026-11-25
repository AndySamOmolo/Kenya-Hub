import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("mjengo-construction-calculator");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="mjengo-construction-calculator">{children}</ToolShellServer>;
}
