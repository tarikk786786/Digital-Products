/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  compress: true,
  poweredByHeader: false,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.razorpay.com",
      },
      {
        protocol: "https",
        hostname: "intimacyacademy.in",
      },
    ],
  },
};

export default nextConfig;
