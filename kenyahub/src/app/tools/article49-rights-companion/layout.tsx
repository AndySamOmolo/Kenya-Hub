import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("article49-rights-companion");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="article49-rights-companion">{children}</ToolShellServer>;
}
