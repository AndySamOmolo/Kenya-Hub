import type { Metadata } from "next";
import { TOOLS } from "@/lib/tools-registry";

export const metadata: Metadata = {
  title: `All Tools — ${TOOLS.length} Free Online Calculators & Utilities for Kenya`,
  description:
    `Browse ${TOOLS.length} specialized online calculators and directories built for Kenya — 2026 PAYE salary calculator, M-Pesa fees, KRA CRSP car import duty, KPLC token calculator, KCSE grades, KUCCPS clusters, CBC curriculum, and more.`,
  keywords: [
    "Kenya online tools",
    "free calculators Kenya",
    "PAYE calculator Kenya 2026",
    "M-Pesa fee calculator",
    "KPLC token calculator",
    "KRA car import duty calculator",
    "KCSE grade calculator",
    "CBC curriculum explorer",
    "SACCO loan calculator Kenya",
    "Mjengo construction calculator Kenya",
  ],
  alternates: {
    canonical: "https://kenyahub.me/tools/",
    languages: {
      "en-KE": "https://kenyahub.me/tools/",
      en: "https://kenyahub.me/tools/",
    },
  },
  openGraph: {
    title: `All Tools — ${TOOLS.length} Free Online Calculators for Kenya | KenyaHub`,
    description:
      `${TOOLS.length} specialized Kenyan tools covering finance, tax, education, government services, transport, health, agriculture, and languages — all powered by official data.`,
    type: "website",
    locale: "en_KE",
    siteName: "KenyaHub",
    url: "https://kenyahub.me/tools/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `KenyaHub — ${TOOLS.length} Free Online Calculators & Public Data Tools for Kenya`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `All Tools — ${TOOLS.length} Free Online Calculators for Kenya | KenyaHub`,
    description:
      `${TOOLS.length} specialized Kenyan tools covering finance, education, government services, transport, health, and agriculture.`,
    images: ["/og-image.png"],
  },
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
