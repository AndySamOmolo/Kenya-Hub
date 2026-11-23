import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/nav/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import CookieConsent from "@/components/CookieConsent";
import ScrollReset from "@/components/ScrollReset";
import AdSenseLoader from "@/components/AdSenseLoader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kenyahub.me"),
  applicationName: "KenyaHub",
  title: {
    default: "KenyaHub — Free Tools, Calculators & Public Data for Kenya",
    template: "%s | KenyaHub",
  },
  description:
    "Free online tools and verified public data for Kenya — 23 language courses & translator, 2026 PAYE salary calculator, M-Pesa fees, KRA car import duty, 47 Counties Hub, and Matatu routes.",
  keywords: [
    "Kenya tools",
    "PAYE calculator Kenya 2026",
    "net to gross salary calculator Kenya",
    "M-Pesa charges calculator 2026",
    "KRA car import duty calculator 2026",
    "47 counties of Kenya",
    "CBC curriculum Kenya",
    "KUCCPS cluster calculator",
    "Kenya number plate decoder",
    "KCSE grade calculator",
    "SACCO loan calculator Kenya",
    "KPLC token calculator 2026",
    "Mjengo construction cost calculator Kenya",
    "SHA accredited hospitals Kenya",
    "Nairobi matatu routes and fares",
  ],
  authors: [{ name: "KenyaHub Editorial Team", url: "https://kenyahub.me/about/" }],
  creator: "KenyaHub",
  publisher: "KenyaHub",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Public Utilities & Reference",
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
  openGraph: {
    title: "KenyaHub — Free Tools, Calculators & Public Data for Kenya",
    description:
      "Free, accurate tools every Kenyan needs — 23 Kenyan language courses, 2026 PAYE salary calculator, KRA CRSP car import duty, 47 Counties Hub, CBC & KUCCPS guides, and Matatu routes.",
    type: "website",
    locale: "en_KE",
    url: "https://kenyahub.me/",
    siteName: "KenyaHub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KenyaHub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KenyaHub — Free Tools & Data for Every Kenyan",
    description:
      "Free online calculators and official public data for Kenya — 2026 PAYE, M-Pesa fees, KRA CRSP car import duty, 47 Counties Hub, CBC & KUCCPS.",
    images: ["/og-image.png"],
  },
  other: {
    "geo.region": "KE",
    "geo.placename": "Nairobi, Kenya",
    "geo.position": "-1.286389;36.817223",
    ICBM: "-1.286389, 36.817223",
    "content-language": "en-KE",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0C0A08" },
    { media: "(prefers-color-scheme: light)", color: "#FAF7F2" },
  ],
};

const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('kh-theme');
    var resolved = (t === 'light' || t === 'dark')
      ? t
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    var root = document.documentElement;
    root.setAttribute('data-theme', resolved);
    root.classList.toggle('dark', resolved === 'dark');
    root.classList.toggle('light', resolved === 'light');
  } catch(e) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-KE"
      className={`${inter.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <head suppressHydrationWarning>
        <link rel="preconnect" href="https://audio.kenyahub.me" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://audio.kenyahub.me" />
        <link rel="dns-prefetch" href="https://fra.cloud.appwrite.io" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <meta name="google-adsense-account" content="ca-pub-5895990873842803" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5895990873842803"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-gold focus:text-black focus:font-bold focus:text-xs">Skip to main content</a>
        <ThemeProvider>
          <ScrollReset />
          <AdSenseLoader />
          <Navbar />
          <main id="main-content" className="flex-1 w-full min-w-0 max-w-full overflow-x-hidden">{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
