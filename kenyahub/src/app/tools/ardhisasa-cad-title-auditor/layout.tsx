import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("ardhisasa-cad-title-auditor");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="ardhisasa-cad-title-auditor">{children}</ToolShellServer>;
}
