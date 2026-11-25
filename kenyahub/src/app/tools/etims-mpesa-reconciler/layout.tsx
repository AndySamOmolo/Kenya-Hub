import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("etims-mpesa-reconciler");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="etims-mpesa-reconciler">{children}</ToolShellServer>;
}
