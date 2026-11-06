import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kenya Guides, Tax, Finance & Cultural Heritage Blog",
  description:
    "In-depth editorial guides, worked statutory calculations, and linguistic research covering Kenyan PAYE taxes, M-Pesa tariffs, KRA car imports, SACCO loans, CBC education, and cultural heritage.",
  keywords: [
    "Kenya tax and finance guides",
    "PAYE tax guide Kenya 2026",
    "M-Pesa tariff guide 2026",
    "KRA car import duty CRSP guide",
    "cost of building a house in Kenya 2026",
    "Kenyan languages and proverbs blog",
  ],
  authors: [{ name: "KenyaHub Editorial Team", url: "https://kenyahub.me/about/" }],
  creator: "KenyaHub",
  publisher: "KenyaHub",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://kenyahub.me/blog/",
    languages: {
      "en-KE": "https://kenyahub.me/blog/",
      en: "https://kenyahub.me/blog/",
      "x-default": "https://kenyahub.me/blog/",
    },
  },
  openGraph: {
    title: "Kenya Guides, Tax, Finance & Cultural Heritage Blog | KenyaHub",
    description:
      "In-depth editorial guides and worked statutory analyses on Kenyan PAYE taxes, M-Pesa tariffs, KRA car imports, SACCO loans, CBC education, and cultural heritage.",
    type: "website",
    locale: "en_KE",
    siteName: "KenyaHub",
    url: "https://kenyahub.me/blog/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KenyaHub Blog — Kenyan Tax, Finance & Cultural Heritage Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenya Guides, Tax, Finance & Cultural Heritage Blog | KenyaHub",
    description:
      "In-depth editorial guides and worked statutory analyses on Kenyan PAYE taxes, M-Pesa tariffs, KRA car imports, SACCO loans, and cultural heritage.",
    images: ["/og-image.png"],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}