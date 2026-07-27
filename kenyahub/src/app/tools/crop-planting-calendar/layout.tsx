import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
export const metadata: Metadata = generateToolMetadata("crop-planting-calendar");
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
