import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("land-subdivision-planner");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="land-subdivision-planner">{children}</ToolShellServer>;
}
