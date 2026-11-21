import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KenyaHub — Free Tools, Calculators & Public Data for Kenya",
    short_name: "KenyaHub",
    description:
      "Free online calculators, 47 Counties intelligence hub, matatu transit maps, and verified public data built for Kenya.",
    start_url: "/",
    display: "standalone",
    background_color: "#0C0A08",
    theme_color: "#D4A017",
    lang: "en-KE",
    categories: ["finance", "education", "utilities", "reference", "navigation"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/kenya-flag.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/og-image.png",
        sizes: "1200x630",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
