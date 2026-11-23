import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";

export const metadata: Metadata = generateToolMetadata("article49-rights-companion");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
