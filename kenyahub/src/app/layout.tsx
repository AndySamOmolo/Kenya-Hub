import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/nav/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import CookieConsent from "@/components/CookieConsent";
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
  title: {
    default: "KenyaHub — Free Tools, Calculators & Public Data for Every Kenyan",
    template: "%s | KenyaHub",
  },
  description:
    "Free online tools and verified public data built for Kenya — 2026 PAYE salary calculator, M-Pesa fee calculator, 47 Counties Hub, CBC curriculum explorer, KUCCPS cluster points, Matatu routes, and more.",
  keywords: [
    "Kenya tools",
    "PAYE calculator Kenya 2026",
    "M-Pesa charges calculator 2026",
    "47 counties of Kenya",
    "CBC curriculum Kenya",
    "KUCCPS cluster calculator",
    "Kenya public holidays 2026",
    "Kenya number plate decoder",
    "KCSE grade calculator",
  ],
  authors: [{ name: "KenyaHub Editorial Team", url: "https://kenyahub.me/about/" }],
  creator: "KenyaHub",
  publisher: "KenyaHub",
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
  alternates: {
    canonical: "https://kenyahub.me/",
  },
  openGraph: {
    title: "KenyaHub — Free Tools, Calculators & Public Data for Every Kenyan",
    description:
      "Free, accurate tools every Kenyan needs — 2026 PAYE salary calculator, 47 Counties Hub, education guides, government services, and more.",
    type: "website",
    locale: "en_KE",
    url: "https://kenyahub.me/",
    siteName: "KenyaHub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KenyaHub — Free Tools & Data for Every Kenyan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KenyaHub — Free Tools & Data for Every Kenyan",
    description: "Free tools with official Kenyan data. No sign-up needed.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
try {
  var c = localStorage.getItem('kh-cookie-consent');
  var p = null;
  try { p = JSON.parse(localStorage.getItem('kh-cookie-preferences') || 'null'); } catch(e) {}
  var analyticsGranted = p ? p.analytics === true : c === 'accepted';
  var advertisingGranted = p ? p.advertising === true : c === 'accepted';
  if (analyticsGranted || advertisingGranted) {
    gtag('consent', 'default', {
      'ad_storage': advertisingGranted ? 'granted' : 'denied',
      'ad_user_data': advertisingGranted ? 'granted' : 'denied',
      'ad_personalization': advertisingGranted ? 'granted' : 'denied',
      'analytics_storage': analyticsGranted ? 'granted' : 'denied',
      'wait_for_update': 500
    });
  } else {
    gtag('consent', 'default', {
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'analytics_storage': 'denied',
      'wait_for_update': 500
    });
  }
} catch(e) {
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'wait_for_update': 500
  });
}
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
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head suppressHydrationWarning>
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
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 w-full min-w-0 max-w-full overflow-x-hidden">{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
        <AdSenseLoader />
      </body>
    </html>
  );
}
