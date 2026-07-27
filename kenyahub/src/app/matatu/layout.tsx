import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nairobi Matatu Routes — Interactive Route Finder | KenyaHub",
  description: "Find matatu routes in Nairobi with interactive maps. Search by destination, view stages, fares, and operating hours for 30+ routes. Your guide to Nairobi public transport.",
  keywords: ["matatu routes Nairobi", "matatu from CBD to Karen", "Nairobi public transport", "which matatu goes to Eastleigh"],
  openGraph: {
    title: "Nairobi Matatu Routes — Interactive Route Finder | KenyaHub",
    description: "Find matatu routes in Nairobi with interactive maps. Search by destination, view stages, fares, and operating hours.",
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
