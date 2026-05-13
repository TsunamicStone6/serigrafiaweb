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

  // Portfolio — real client work (transparent background images)
  portfolio: [
    { id: 1,  title: 'Custom Screen Print Tee',           category: 'T-Shirts',    image: '/images/portfolio/calacas-screen-print-tee-01.webp', description: 'Custom screen printed t-shirt by Calacas Prints, San Francisco.' },
    { id: 2,  title: 'Screen Printed T-Shirt',            category: 'T-Shirts',    image: '/images/portfolio/calacas-screen-print-tee-02.webp', description: 'High-quality screen print on premium tee, Mission District SF.' },
    { id: 3,  title: 'Graphic Screen Print Tee',          category: 'T-Shirts',    image: '/images/portfolio/calacas-screen-print-tee-03.webp', description: 'Bold graphic screen printing on custom apparel.' },
    { id: 4,  title: 'Custom Apparel Print',              category: 'Apparel',     image: '/images/portfolio/calacas-screen-print-tee-04.webp', description: 'Custom apparel with professional screen printing finish.' },
    { id: 5,  title: 'Multi-Color Screen Print',          category: 'T-Shirts',    image: '/images/portfolio/calacas-screen-print-tee-05.webp', description: 'Multi-color screen print on custom t-shirt, SF Bay Area.' },
    { id: 6,  title: 'Screen Print Merchandise',          category: 'Merchandise', image: '/images/portfolio/calacas-screen-print-tee-06.webp', description: 'Professional screen printed merchandise for events and brands.' },
    { id: 7,  title: 'Custom Brand T-Shirt',              category: 'T-Shirts',    image: '/images/portfolio/calacas-screen-print-tee-07.webp', description: 'Custom branded t-shirt with screen print by Calacas Prints.' },
    { id: 8,  title: 'Screen Print Event Tee',            category: 'Events',      image: '/images/portfolio/calacas-screen-print-tee-08.webp', description: 'Screen printed event t-shirt, fast turnaround SF.' },
    { id: 9,  title: 'Custom Graphic Tee',                category: 'T-Shirts',    image: '/images/portfolio/calacas-screen-print-tee-09.webp', description: 'Custom graphic tee with sharp screen print by Calacas Prints.' },
    { id: 10, title: 'Artisan Screen Print Apparel',      category: 'Apparel',     image: '/images/portfolio/calacas-screen-print-tee-10.webp', description: 'Artisan-quality screen print apparel, Mission District.' },
    { id: 11, title: 'Screen Print Logo Tee',             category: 'T-Shirts',    image: '/images/portfolio/calacas-screen-print-tee-11.webp', description: 'Logo screen printed t-shirt for businesses and events.' },
    { id: 12, title: 'Screen Print Merch Tee',            category: 'Merchandise', image: '/images/portfolio/calacas-screen-print-tee-12.webp', description: 'Custom merch tee with screen printing, Bay Area.' },
    { id: 13, title: 'Blue Custom Screen Print Tee',      category: 'T-Shirts',    image: '/images/portfolio/calacas-screen-print-tee-13.webp', description: 'Blue custom screen printed t-shirt by Calacas Prints SF.' },
    { id: 14, title: 'Gray Custom Screen Print Tee',      category: 'T-Shirts',    image: '/images/portfolio/calacas-screen-print-tee-14.webp', description: 'Gray custom screen printed t-shirt, high-quality finish.' },
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

  // Coming Soon Items
  comingSoon: [
    { id: 1, title: '¡Guapea!', image: '/images/portfolio/coming-soon/calacas-guapea-salsa-tee.webp' },
    { id: 2, title: '¡Dile que no!', image: '/images/portfolio/coming-soon/calacas-dile-que-no-salsa-tee.webp' },
    { id: 3, title: '¡Vacílala!', image: '/images/portfolio/coming-soon/calacas-vacilala-salsa-tee.webp' },
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
