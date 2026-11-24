import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("biogas-digester-sizer");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="biogas-digester-sizer">{children}</ToolShellServer>;
}
