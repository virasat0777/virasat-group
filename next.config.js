/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "51.79.250.26",
      },
      {
        protocol: "http",
        hostname: "15.235.143.37",
      },
    ],
  },
};

module.exports = nextConfig;
