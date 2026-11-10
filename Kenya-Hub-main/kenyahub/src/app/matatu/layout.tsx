import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kenya Matatu Routes, Stages & Fares — Interactive Transit Guide",
  description:
    "Find verified matatu routes across Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and Thika with interactive maps, CBD stages, peak vs off-peak fares, and SACCO operators.",
  keywords: [
    "matatu routes Kenya",
    "matatu routes Nairobi",
    "Nairobi public transport stages",
    "Mombasa Kisumu Nakuru Eldoret matatu fares",
    "matatu SACCOs Kenya",
    "Nairobi matatu route numbers",
  ],
  openGraph: {
    title: "Kenya Matatu Routes, Stages & Fares — Interactive Transit Guide | KenyaHub",
    description:
      "Find verified matatu routes across Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and Thika with interactive stage maps, fares, and SACCO details.",
    type: "website",
    locale: "en_KE",
    siteName: "KenyaHub",
    url: "https://kenyahub.me/matatu/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kenya Matatu Routes, Stages & Fares — KenyaHub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenya Matatu Routes, Stages & Fares — Interactive Transit Guide | KenyaHub",
    description:
      "Find verified matatu routes across Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and Thika with interactive stage maps, fares, and SACCO details.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://kenyahub.me/matatu/",
    languages: {
      "en-KE": "https://kenyahub.me/matatu/",
      en: "https://kenyahub.me/matatu/",
    },
  },
};

export default function MatatuLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      {children}
    </>
  );
}
