import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("rental-tax-calculator");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="rental-tax-calculator">{children}</ToolShellServer>;
}
