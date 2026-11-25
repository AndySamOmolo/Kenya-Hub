import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("ecitizen-docs-planner");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="ecitizen-docs-planner">{children}</ToolShellServer>;
}
