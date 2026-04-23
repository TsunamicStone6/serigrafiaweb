import { siteConfig } from '@/config/site.config';

export function JsonLdScripts() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://calacasprints.com',
    name: siteConfig.business.name,
    description: siteConfig.business.description,
    url: 'https://calacasprints.com',
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3156 22nd Street',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94110',
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.twitter,
    ],
    image: siteConfig.brand.logo,
    foundingDate: '2012',
    areaServed: {
      '@type': 'City',
      name: 'San Francisco',
    },
    priceRange: '$$',
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.business.name,
    url: 'https://calacasprints.com',
    logo: `https://calacasprints.com${siteConfig.brand.logo}`,
    description: siteConfig.business.description,
    foundingDate: '2012',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      telephone: siteConfig.business.phone,
      email: siteConfig.business.email,
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.twitter,
    ],
  };

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Tees & Apparel',
        description: 'Screen printing on tees, hoodies, and more. Quality that lasts.',
        provider: {
          '@type': 'LocalBusiness',
          name: siteConfig.business.name,
        },
      },
      {
        '@type': 'Service',
        name: 'Caps & Accessories',
        description: 'Branding on accessories. Your logo, your style, your brand.',
        provider: {
          '@type': 'LocalBusiness',
          name: siteConfig.business.name,
        },
      },
      {
        '@type': 'Service',
        name: 'Bags & Special Items',
        description: 'Promotional products with identity. Eco-friendly on demand.',
        provider: {
          '@type': 'LocalBusiness',
          name: siteConfig.business.name,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
    </>
  );
}
