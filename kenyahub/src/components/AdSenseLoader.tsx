"use client";

export default function AdSenseLoader() {
  // AdSense script is loaded directly in the root <head> (src/app/layout.tsx)
  // so static SSG HTML exports include it for Google AdSense verification crawlers.
  return null;
}
