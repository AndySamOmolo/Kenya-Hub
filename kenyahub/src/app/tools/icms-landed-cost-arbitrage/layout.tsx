import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";

export const metadata: Metadata = generateToolMetadata("icms-landed-cost-arbitrage");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
