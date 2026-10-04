import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/nav/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import CookieConsent from "@/components/CookieConsent";

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
    default: "KenyaHub — Free Tools & Data for Every Kenyan",
    template: "%s | KenyaHub",
  },
  description:
    "Free online tools built for Kenya — PAYE salary calculator, M-Pesa fee calculator, CBC curriculum explorer, KUCCPS cluster points, public holidays, and more. All data from official Kenyan government sources.",
  keywords: [
    "Kenya tools",
    "PAYE calculator Kenya 2026",
    "M-Pesa charges calculator",
    "CBC curriculum Kenya",
    "KUCCPS cluster calculator",
    "Kenya public holidays 2026",
    "Kenya number plate decoder",
    "KCSE grade calculator",
  ],
  authors: [{ name: "KenyaHub" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "KenyaHub — Free Tools & Data for Every Kenyan",
    description:
      "Free, accurate tools every Kenyan needs — salary calculators, education guides, government services, and more.",
    type: "website",
    locale: "en_KE",
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

// Google Consent Mode v2 & Google Analytics (gtag.js) — must run BEFORE adsbygoogle.js and gtag.js load
// Sets default consent state based on user preference or denies until consent is granted
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
        {/* Google Consent Mode v2 & Google tag initialization */}
        <script dangerouslySetInnerHTML={{ __html: consentModeScript }} />
        {/* Google tag (gtag.js) */}
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
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
        {/* Load AdSense after hydration so it cannot reorder head nodes before React hydrates. */}
        <Script
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5895990873842803"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
