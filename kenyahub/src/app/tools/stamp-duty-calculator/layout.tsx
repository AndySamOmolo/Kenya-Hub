import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("stamp-duty-calculator");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="stamp-duty-calculator">{children}</ToolShellServer>;
}
