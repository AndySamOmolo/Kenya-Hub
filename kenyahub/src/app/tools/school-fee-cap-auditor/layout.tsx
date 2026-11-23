import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";

export const metadata: Metadata = generateToolMetadata("school-fee-cap-auditor");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
