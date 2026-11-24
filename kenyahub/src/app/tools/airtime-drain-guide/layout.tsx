import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("airtime-drain-guide");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="airtime-drain-guide">{children}</ToolShellServer>;
}
