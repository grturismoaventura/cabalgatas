/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  trailingSlash: false,
};

module.exports = nextConfig;
