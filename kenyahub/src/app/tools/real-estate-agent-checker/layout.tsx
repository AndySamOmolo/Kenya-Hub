import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
export const metadata: Metadata = generateToolMetadata("real-estate-agent-checker");
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
