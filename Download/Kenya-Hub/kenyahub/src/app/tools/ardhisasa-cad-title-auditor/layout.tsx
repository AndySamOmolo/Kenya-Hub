import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";

export const metadata: Metadata = generateToolMetadata("ardhisasa-cad-title-auditor");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
