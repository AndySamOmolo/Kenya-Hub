import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";

export const metadata: Metadata = generateToolMetadata("airtime-drain-guide");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
