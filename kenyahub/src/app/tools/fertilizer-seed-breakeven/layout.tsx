import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("fertilizer-seed-breakeven");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="fertilizer-seed-breakeven">{children}</ToolShellServer>;
}
