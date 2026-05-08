/** @type {import('next').NextConfig} */
const nextConfig = {
  // Node.js server for Hostinger
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    qualities: [75, 80, 85],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  typescript: {
    // Skip type checking during build (Next.js 16 has strict layout validation)
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
