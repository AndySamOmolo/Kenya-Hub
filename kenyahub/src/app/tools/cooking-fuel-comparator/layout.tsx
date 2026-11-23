import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";

export const metadata: Metadata = generateToolMetadata("cooking-fuel-comparator");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
