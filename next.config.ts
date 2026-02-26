import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows external images from WordPress (you can restrict this to your specific domain later)
      },
      {
        protocol: "http",
        hostname: "localhost", // For local WordPress development
      },
    ],
  },
};

export default nextConfig;
