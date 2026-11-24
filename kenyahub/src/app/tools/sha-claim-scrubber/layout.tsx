import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("sha-claim-scrubber");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="sha-claim-scrubber">{children}</ToolShellServer>;
}
