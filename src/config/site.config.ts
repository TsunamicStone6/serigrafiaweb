/**
 * Site Configuration
 * Centralizes all business-related data (DIP - Dependency Inversion Principle)
 */

export const siteConfig = {
  // Brand information
  brand: {
    name: 'Calacas Prints',
    description: 'Screen printing and custom apparel',
    logo: '/icons/logo.webp',
    favicon: '/favicon.ico',
  },

  // Business information
  business: {
    name: 'CALACAS',
    tagline: 'Print what defines your brand',
    description: 'Professional screen printing on tees, hoodies, and accessories. Real quality, fast production.',
    address: '3156 22nd Street San Francisco California 94110',
    phone: '+1 (415) 763-2988',
    email: 'calacassp@gmail.com',
    whatsapp: '+1 (415) 763-2988',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
  },

  // Social media
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },

  // Navigation
  navigation: [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'Contact', href: '#contact' },
  ],

  // Portfolio projects (example data)
  portfolio: [
    {
      id: 1,
      title: 'Black Graphic Tee',
      category: 'Classic',
      image: '/images/portfolio/1.jpg',
      description: 'Color front design. Durable ink, clean finish.',
    },
    {
      id: 2,
      title: 'Oversized Hoodie',
      category: 'Premium',
      image: '/images/portfolio/2.jpg',
      description: 'Double print: chest and back. Premium ink with matte effect.',
    },
    {
      id: 3,
      title: 'Beige Tote Bag',
      category: 'Accessories',
      image: '/images/portfolio/3.jpg',
      description: 'Cotton bag with custom logo. Perfect for events.',
    },
    {
      id: 4,
      title: 'White Trucker Cap',
      category: 'Accessories',
      image: '/images/portfolio/4.jpg',
      description: 'Front logo embroidery. Reinforced structure. Adjustable fit.',
    },
    {
      id: 5,
      title: 'Colorful Tank Top',
      category: 'Limited Edition',
      image: '/images/portfolio/5.jpg',
      description: 'Multicolor gradient design. Long-lasting metachromatic ink.',
    },
    {
      id: 6,
      title: 'Vintage Sweatshirt',
      category: 'Special',
      image: '/images/portfolio/6.jpg',
      description: 'Vintage print with distressed effect. Artisanal finish.',
    },
  ],

  // Services
  services: [
    {
      title: 'Tees & Apparel',
      description: 'Screen printing on tees, hoodies, and more. Quality that lasts.',
      icon: 'apparel',
      benefits: [
        'Production: 10-14 days',
        'Resistant premium inks',
        'From 10 units, no minimums',
      ],
    },
    {
      title: 'Caps & Accessories',
      description: 'Branding on accessories. Your logo, your style, your brand.',
      icon: 'accessories',
      benefits: [
        'Multiple product options',
        'Custom designs',
        'Perfect for events and promotions',
      ],
    },
    {
      title: 'Bags & Special Items',
      description: 'Promotional products with identity. Eco-friendly on demand.',
      icon: 'promotional',
      benefits: [
        'Sustainable materials available',
        'Flexible quantities',
        'Perfect for corporate gifts',
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
