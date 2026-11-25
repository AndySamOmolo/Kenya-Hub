import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("odpc-hr-retention-vault");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="odpc-hr-retention-vault">{children}</ToolShellServer>;
}
