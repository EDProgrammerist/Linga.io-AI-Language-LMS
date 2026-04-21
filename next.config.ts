import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sg6jw7r6.us-east.insforge.app",
      }
    ]
  },
};

export default nextConfig;
