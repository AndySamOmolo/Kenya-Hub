import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Tools — Free Online Tools for Kenya",
  description:
    "Browse 45+ free online tools built for Kenya — PAYE calculator, M-Pesa fees, KPLC token calculator, KCSE grades, CBC curriculum, matatu routes, number plate decoder and more. All powered by official data.",
  keywords: [
    "Kenya online tools",
    "free tools Kenya",
    "PAYE calculator",
    "M-Pesa fee calculator",
    "KPLC token calculator",
    "KCSE grade calculator",
    "CBC curriculum explorer",
    "Kenya public holidays",
  ],
  alternates: {
    canonical: "https://kenyahub.me/tools/",
  },
  openGraph: {
    title: "All Tools — Free Online Tools for Kenya | KenyaHub",
    description:
      "45+ free tools covering finance, education, government services, transport, health, agriculture and more — all built for Kenya with official data.",
    url: "https://kenyahub.me/tools/",
  },
  twitter: {
    card: "summary",
    title: "All Tools — Free Online Tools for Kenya | KenyaHub",
    description:
      "45+ free tools covering finance, education, government services, transport, health, agriculture and more.",
  },
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
