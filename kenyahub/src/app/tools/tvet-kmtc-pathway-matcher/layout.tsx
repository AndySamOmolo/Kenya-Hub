import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("tvet-kmtc-pathway-matcher");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="tvet-kmtc-pathway-matcher">{children}</ToolShellServer>;
}
