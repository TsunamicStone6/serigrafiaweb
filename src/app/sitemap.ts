import type { MetadataRoute } from 'next'

const BASE_URL = 'https://calacasprints.com'

// Sitio de una sola página: las secciones (#services, #about...) no son URLs
// distintas para Google, así que el sitemap lista únicamente la home.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
