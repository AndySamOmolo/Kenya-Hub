import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";

export const metadata: Metadata = generateToolMetadata("passport-id-fees");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
