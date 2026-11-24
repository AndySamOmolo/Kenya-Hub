import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("livestock-vaccine-calendar");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="livestock-vaccine-calendar">{children}</ToolShellServer>;
}
