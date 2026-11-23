import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";

export const metadata: Metadata = generateToolMetadata("tvet-kmtc-pathway-matcher");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
