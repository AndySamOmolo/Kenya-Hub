import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/nav/Footer";
import ThemeProvider from "@/components/ThemeProvider";

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
  metadataBase: new URL("https://kenyahub.me"),
  title: {
    default: "KenyaHub — Free Tools & Data for Every Kenyan",
    template: "%s | KenyaHub",
  },
  description:
    "Free online tools built for Kenya — PAYE salary calculator, M-Pesa fee calculator, CBC curriculum explorer, KUCCPS cluster points, public holidays, and more. All data from official Kenyan government sources.",
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
    description: "Free tools with official Kenyan data. No sign-up needed.",
  },
  robots: { index: true, follow: true },
};

// Inline script to prevent flash of unstyled content (FOUC)
// Sets data-theme before React hydrates
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('kh-theme');
    if (t === 'light' || t === 'dark') {
      document.documentElement.setAttribute('data-theme', t);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  } catch(e) {
    document.documentElement.setAttribute('data-theme', 'dark');
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
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5895990873842803"
          crossOrigin="anonymous"
        />
        {/* Google Search Console verification (update the content value with your verification code) */}
        <meta name="google-adsense-account" content="ca-pub-5895990873842803" />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
