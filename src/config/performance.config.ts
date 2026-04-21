/**
 * Performance Configuration
 * Optimizations for Lighthouse scores
 */

export const performanceConfig = {
  // Image optimization
  images: {
    quality: 80, // Default quality for images
    logoQuality: 85, // Higher quality for logo
    portfolio: {
      quality: 80,
      placeholder: 'empty' as const,
      loading: 'lazy' as const,
    },
  },

  // Cache configuration
  cache: {
    images: {
      maxAge: 31536000, // 1 year
      immutable: true,
    },
    assets: {
      maxAge: 3600, // 1 hour
      revalidate: true,
    },
  },

  // Lazy loading strategy
  lazyLoading: {
    enabled: true,
    threshold: '50px',
  },

  // Font optimization
  fonts: {
    display: 'swap' as const, // Prevents invisible text while loading
    preload: true,
  },

  // Script optimization
  scripts: {
    defer: true,
    async: true,
  },
};
