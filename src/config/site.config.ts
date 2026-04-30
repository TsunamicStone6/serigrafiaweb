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
  },

  // Social media
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
  },

  // About/Story
  about: {
    title: 'MISSION DISTRICT ROOTS',
    description: 'Calacas Prints has been serving the San Francisco Bay Area since 2012. Located in the heart of the Mission District, we\'ve built our reputation on quality craftsmanship, authentic designs, and community connection.',
    story: 'Our name "Calacas" (skulls in Spanish) pays homage to the rich Día de los Muertos traditions that inspire our art. From custom band merch to corporate orders, we bring that same passion and attention to detail to every project.',
    image: '/images/hero/store.webp',
    founded: 2012,
    stats: [
      { label: 'Prints Made', value: '10K+' },
      { label: 'Years Experience', value: '12+' },
    ],
  },

  // Navigation
  navigation: [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],

  // Portfolio — real client work
  portfolio: [
    {
      id: 1,
      title: 'Work 1',
      category: '',
      image: '/images/portfolio/azulEdificio.webp',
      description: '',
    },
    { id: 2, title: 'Work 2', category: '', image: '/images/portfolio/blacoEstampado.webp', description: '' },
    { id: 3, title: 'Work 3', category: '', image: '/images/portfolio/blancoMinimalista.webp', description: '' },
    { id: 4, title: 'Work 4', category: '', image: '/images/portfolio/edificioBlanco.webp', description: '' },
    { id: 5, title: 'Work 5', category: '', image: '/images/portfolio/edificioRojo.webp', description: '' },
    { id: 6, title: 'Work 6', category: '', image: '/images/portfolio/grisEstampado.webp', description: '' },
    { id: 7, title: 'Work 7', category: '', image: '/images/portfolio/playeraBrady.webp', description: '' },
    { id: 8,  title: 'Work 8',  category: '', image: '/images/portfolio/playeraNegra.webp',       description: '' },
    { id: 9,  title: 'Work 9',  category: '', image: '/images/portfolio/playeraNegraedificio.webp', description: '' },
    { id: 10, title: 'Work 10', category: '', image: '/images/portfolio/playeraRoja.webp',          description: '' },
    { id: 11, title: 'Work 11', category: '', image: '/images/portfolio/playeraRojaconlogo.webp',   description: '' },
    { id: 12, title: 'Work 12', category: '', image: '/images/portfolio/playeraRojaedificio.webp',  description: '' },
  ],

  // Services
  services: [
    {
      title: 'Custom Screen Printing',
      description: 'High-quality screen printing on t-shirts, hoodies, and apparel. Perfect for events, businesses, and personal projects.',
      icon: 'apparel',
      benefits: [
        'Single & multi-color prints',
        'No minimum order quantity',
        'Fast turnaround times',
      ],
    },
    {
      title: 'Hats & Accessories',
      description: 'Custom printed hats, beanies, and accessories. Add your logo or design to complete your brand look.',
      icon: 'accessories',
      benefits: [
        'Baseball caps & snapbacks',
        'Beanies & bucket hats',
        'Custom printed designs',
      ],
    },
    {
      title: 'Tote Bags & More',
      description: 'Eco-friendly tote bags, posters, and promotional items. Great for events, giveaways, and retail merchandise.',
      icon: 'promotional',
      benefits: [
        'Canvas & cotton totes',
        'Posters & art prints',
        'Stickers & patches',
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;

// Validation: Ensure required fields exist
if (!siteConfig.business.phone?.trim()) {
  throw new Error('❌ Phone number is required in site.config.ts - contact methods depend on it');
}

if (!siteConfig.business.email?.trim()) {
  throw new Error('❌ Email is required in site.config.ts');
}
