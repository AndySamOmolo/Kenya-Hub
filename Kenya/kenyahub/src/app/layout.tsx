import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/nav/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "KenyaHub — Free Tools & Data for Every Kenyan",
    template: "%s | KenyaHub",
  },
  description:
    "85+ free online tools built for Kenya — PAYE salary calculator, M-Pesa fee calculator, CBC curriculum explorer, KUCCPS cluster points, public holidays, and more. All data from official Kenyan government sources.",
  keywords: [
    "Kenya tools",
    "PAYE calculator Kenya 2025",
    "M-Pesa charges calculator",
    "CBC curriculum Kenya",
    "KUCCPS cluster calculator",
    "Kenya public holidays 2025",
    "Kenya number plate decoder",
    "KCSE grade calculator",
  ],
  authors: [{ name: "KenyaHub" }],
  openGraph: {
    title: "KenyaHub — Free Tools & Data for Every Kenyan",
    description:
      "Free, accurate tools every Kenyan needs — salary calculators, education guides, government services, and more.",
    type: "website",
    locale: "en_KE",
    siteName: "KenyaHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "KenyaHub — Free Tools & Data for Every Kenyan",
    description: "85+ free tools with official Kenyan data. No sign-up needed.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
