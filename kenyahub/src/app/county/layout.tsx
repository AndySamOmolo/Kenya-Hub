import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kenya Counties Guide | 47 County Governments Directory",
  description: "Comprehensive guide to all 47 counties in Kenya. Find county governors, contacts, statistics, budgets, and services for every county government.",
  keywords: ["Kenya counties", "47 counties of Kenya", "county government Kenya", "county governors Kenya"],
};

export default function CountyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
