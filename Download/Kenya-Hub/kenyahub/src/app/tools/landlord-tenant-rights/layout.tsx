import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";

export const metadata: Metadata = generateToolMetadata("landlord-tenant-rights");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
