"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

export default function AdSenseLoader() {
  const pathname = usePathname() || "/";
  const [isEligiblePage, setIsEligiblePage] = useState(false);

  useEffect(() => {
    if (pathname.startsWith("/admin")) {
      setIsEligiblePage(false);
      return;
    }
    const isErrorOrRestricted = Boolean(
      document.querySelector('[data-error-page="true"]') ||
      document.title.includes("Not Found") ||
      document.title.includes("(404)")
    );
    setIsEligiblePage(!isErrorOrRestricted);
  }, [pathname]);

  if (pathname.startsWith("/admin") || !isEligiblePage) {
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
