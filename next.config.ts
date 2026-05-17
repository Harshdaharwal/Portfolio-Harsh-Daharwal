import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack - it has a known bug with non-ASCII chars in file paths
  experimental: {},
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
