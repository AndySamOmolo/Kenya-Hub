import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";

export const metadata: Metadata = generateToolMetadata("mpesa-fee-calculator");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
