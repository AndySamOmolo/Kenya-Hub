import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("number-plate-decoder");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="number-plate-decoder">{children}</ToolShellServer>;
}
