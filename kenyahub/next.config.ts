import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Trailing slashes for cleaner URLs on static hosting
  trailingSlash: true,
};

export default nextConfig;
