import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolShellServer from "@/components/tools/ToolShellServer";

export const metadata: Metadata = generateToolMetadata("duka-hustle-ubp-calculator");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ToolShellServer slug="duka-hustle-ubp-calculator">{children}</ToolShellServer>;
}
