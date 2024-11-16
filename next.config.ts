import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.touropia.com",
      },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "image-kr.bespinglobal.com" },
      { protocol: "https", hostname: "coffeewhale.com" },
      { protocol: "https", hostname: "www.investopedia.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "static.vecteezy.com" },
      { protocol: "https", hostname: "www.google.com" },
      { protocol: "https", hostname: "miro.medium.com" },
    ],
  },
};

module.exports = nextConfig;
