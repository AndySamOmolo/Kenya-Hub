import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Kenya 47 Counties Hub — Governors, FY 2025/26 Budgets, Constituencies & Climate | KenyaHub",
    template: "%s | KenyaHub",
  },
  description:
    "Explore all 47 county governments of Kenya in one unified hub. Compare county governors, 290 constituencies, FY 2025/26 Controller of Budget allocations, rainfall patterns, SHA hospitals, and postal codes.",
  keywords: [
    "47 counties of Kenya",
    "Kenya county governments",
    "county governors Kenya 2026",
    "Kenya county budgets FY 2025/26",
    "290 constituencies in Kenya",
    "Kenya counties population and area",
  ],
  openGraph: {
    title: "Kenya 47 Counties Hub — Governors, Budgets, Constituencies & Climate | KenyaHub",
    description:
      "Unified directory and comparison hub for all 47 Kenyan counties — leadership, 290 constituencies, FY 2025/26 budgets, climate, and public services.",
    type: "website",
    locale: "en_KE",
    siteName: "KenyaHub",
    url: "https://kenyahub.me/county/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kenya 47 Counties Hub — KenyaHub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenya 47 Counties Hub — Governors, Budgets & Constituencies | KenyaHub",
    description:
      "Explore all 47 counties of Kenya: elected leaders, FY 2025/26 budgets, 290 constituencies, rainfall patterns, and side-by-side county comparisons.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://kenyahub.me/county/",
  },
};

export default function CountyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
