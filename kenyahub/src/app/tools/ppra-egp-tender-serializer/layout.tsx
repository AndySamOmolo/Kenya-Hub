import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("ppra-egp-tender-serializer");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="ppra-egp-tender-serializer">{children}</ToolShellServer>;
}
