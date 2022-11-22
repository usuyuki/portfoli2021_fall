/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "pfapi.usuyuki.net",
      "blog.usuyuki.net",
      "grass-graph.appspot.com",
      "raw.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
