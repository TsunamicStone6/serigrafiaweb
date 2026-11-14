import { siteConfig } from '@/config/site.config';

const BASE_URL = 'https://calacasprints.com';

// Escapa '<' para que ningún dato (p. ej. de Sanity) pueda cerrar el <script>
function safeJson(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

export function JsonLdScripts() {
  // Solo redes con URL real (sameAs no admite cadenas vacías)
  const socialLinks = [
    siteConfig.social.instagram,
    siteConfig.social.facebook,
    siteConfig.social.twitter,
  ].filter(Boolean);
  const logoUrl = `${BASE_URL}${siteConfig.brand.logo}`;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://calacasprints.com',
    name: siteConfig.brand.name,
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

    sameAs: socialLinks,
    image: logoUrl,
    logo: logoUrl,
    foundingDate: '2012',
    areaServed: [
      { '@type': 'City', name: 'San Francisco' },
      { '@type': 'AdministrativeArea', name: 'San Francisco Bay Area' },
    ],
    priceRange: '$$',
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.brand.name,
    url: 'https://calacasprints.com',
    logo: logoUrl,
    description: siteConfig.business.description,
    foundingDate: '2012',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      telephone: siteConfig.business.phone,
      email: siteConfig.business.email,
    },
    sameAs: socialLinks,
  };

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: siteConfig.services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        serviceType: service.title,
        provider: {
          '@type': 'LocalBusiness',
          name: siteConfig.brand.name,
          '@id': BASE_URL,
        },
      },
    })),
  };

  const portfolioGallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Calacas Prints – Screen Printing Portfolio',
    description: 'Portfolio of custom screen printed t-shirts, hoodies, and apparel by Calacas Prints in San Francisco, CA.',
    url: `${BASE_URL}/#products`,
    image: siteConfig.portfolio.map((item) => ({
      '@type': 'ImageObject',
      contentUrl: `${BASE_URL}${item.image}`,
      name: item.title,
      description: item.description,
      author: {
        '@type': 'LocalBusiness',
        name: siteConfig.business.name,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJson(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJson(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJson(servicesSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJson(portfolioGallerySchema),
        }}
      />
    </>
  );
}
