"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

export default function AdSenseLoader() {
  const pathname = usePathname() || "/";

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <Script
      id="google-adsense-script"
      strategy="afterInteractive"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5895990873842803"
      crossOrigin="anonymous"
    />
  );
}
