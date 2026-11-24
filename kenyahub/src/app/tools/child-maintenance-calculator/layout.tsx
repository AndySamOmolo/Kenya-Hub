import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("child-maintenance-calculator");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="child-maintenance-calculator">{children}</ToolShellServer>;
}
