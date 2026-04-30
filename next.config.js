/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for Hostinger shared hosting
  turbopack: {
    root: 'C:\\Users\\user\\Documents\\Claude\\Projects\\serigrafiaweb-main',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true, // Required for static export
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    qualities: [75, 80, 85],
  },
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
