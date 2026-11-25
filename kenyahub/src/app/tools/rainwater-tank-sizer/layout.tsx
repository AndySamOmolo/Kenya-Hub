import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("rainwater-tank-sizer");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="rainwater-tank-sizer">{children}</ToolShellServer>;
}
