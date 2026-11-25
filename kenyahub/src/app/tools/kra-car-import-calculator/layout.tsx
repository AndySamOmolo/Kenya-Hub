import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("kra-car-import-calculator");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="kra-car-import-calculator">{children}</ToolShellServer>;
}
