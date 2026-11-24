import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("succession-cap160-calculator");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="succession-cap160-calculator">{children}</ToolShellServer>;
}
