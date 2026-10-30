import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Kenya Matatu Routes, Stages & Fares — Interactive Transit Guide | KenyaHub",
    template: "%s | KenyaHub",
  },
  description:
    "Find verified matatu routes across Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and Thika with interactive maps, CBD stages, peak vs off-peak fares, and SACCO operators.",
  keywords: [
    "matatu routes Kenya",
    "matatu routes Nairobi",
    "Nairobi public transport stages",
    "Mombasa Kisumu Nakuru Eldoret matatu fares",
  ],
  openGraph: {
    title: "Kenya Matatu Routes, Stages & Fares — Interactive Transit Guide | KenyaHub",
    description:
      "Find verified matatu routes across Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and Thika with interactive stage maps, fares, and SACCO details.",
    type: "website",
    locale: "en_KE",
    siteName: "KenyaHub",
    url: "https://kenyahub.me/matatu/",
  },
  alternates: { canonical: "https://kenyahub.me/matatu/" },
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
