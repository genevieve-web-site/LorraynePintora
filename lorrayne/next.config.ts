import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost", "127.0.0.1", "192.168.0.103"],
  images: {
    localPatterns: [
      { pathname: "/images/**" },
      { pathname: "/Imagens/**" },
    ],
  },
  // Removido o bloco async headers() pois não é suportado no output: 'export'
};

export default nextConfig;
