import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("cooking-fuel-comparator");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="cooking-fuel-comparator">{children}</ToolShellServer>;
}
