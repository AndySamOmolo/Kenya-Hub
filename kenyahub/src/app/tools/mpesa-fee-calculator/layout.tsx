import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("mpesa-fee-calculator");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="mpesa-fee-calculator">{children}</ToolShellServer>;
}
