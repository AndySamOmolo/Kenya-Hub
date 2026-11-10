import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
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
    default: "KenyaHub — Free Tools, Calculators & Public Data for Every Kenyan",
    template: "%s | KenyaHub",
  },
  description:
    "Free online tools and verified public data built for Kenya — 2026 PAYE salary calculator, M-Pesa fee calculator, KRA CRSP car import duty, 47 Counties Hub, CBC curriculum explorer, KUCCPS cluster points, Matatu routes, and more.",
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
    title: "KenyaHub — Free Tools, Calculators & Public Data for Every Kenyan",
    description:
      "Free, accurate tools every Kenyan needs — 2026 PAYE salary calculator, KRA CRSP car import duty, 47 Counties Hub, CBC & KUCCPS education guides, Matatu routes, and more.",
    type: "website",
    locale: "en_KE",
    url: "https://kenyahub.me/",
    siteName: "KenyaHub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KenyaHub — Free Tools, Calculators & Public Data for Every Kenyan",
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
    { media: "(prefers-color-scheme: dark)", color: "#0B0F17" },
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
  ],
};

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

const consentModeScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied',
  'wait_for_update': 500
});
gtag('set', 'ads_data_redaction', true);
gtag('set', 'url_passthrough', true);
try {
  var c = localStorage.getItem('kh-cookie-consent');
  var p = null;
  try { p = JSON.parse(localStorage.getItem('kh-cookie-preferences') || 'null'); } catch(e) {}
  if (p || c === 'accepted' || c === 'declined') {
    var analyticsGranted = p ? p.analytics === true : c === 'accepted';
    var advertisingGranted = p ? p.advertising === true : c === 'accepted';
    gtag('consent', 'update', {
      'ad_storage': advertisingGranted ? 'granted' : 'denied',
      'ad_user_data': advertisingGranted ? 'granted' : 'denied',
      'ad_personalization': advertisingGranted ? 'granted' : 'denied',
      'analytics_storage': analyticsGranted ? 'granted' : 'denied'
    });
  }
} catch(e) {}
gtag('js', new Date());
gtag('config', 'G-Y069879V7Y');
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: consentModeScript }} />
        <Script
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Y069879V7Y"
        />
        <meta name="google-adsense-account" content="ca-pub-5895990873842803" />
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
