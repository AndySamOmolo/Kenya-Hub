import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("mobile-number-prefix");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="mobile-number-prefix">{children}</ToolShellServer>;
}
