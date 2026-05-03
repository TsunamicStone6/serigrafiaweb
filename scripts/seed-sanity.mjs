/**
 * Seed script — carga el contenido inicial de site.config.ts a Sanity
 *
 * USO:
 * 1. Ve a https://www.sanity.io/manage/personal/project/k6geulcb/api
 * 2. Crea un token con permisos "Editor" y copialo en .env.local como SANITY_API_TOKEN=...
 * 3. Corre: node scripts/seed-sanity.mjs
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'k6geulcb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// ─── Site Settings ───────────────────────────────────────────────────────────

const siteSettingsData = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  businessName: 'Calacas Prints',
  tagline: 'Print what defines your brand',
  description: 'Professional screen printing on tees, hoodies, and accessories. Real quality, fast production.',
  phone: '+1 (415) 763-2988',
  email: 'calacassp@gmail.com',
  address: '3156 22nd Street San Francisco California 94110',
  founded: 2012,
  stats: [
    { _key: 'stat1', label: 'Prints Made', value: '10K+' },
    { _key: 'stat2', label: 'Years Experience', value: '12+' },
  ],
  aboutTitle: 'MISSION DISTRICT ROOTS',
  aboutDescription: "Calacas Prints has been serving the San Francisco Bay Area since 2012. Located in the heart of the Mission District, we've built our reputation on quality craftsmanship, authentic designs, and community connection.",
  aboutStory: 'Our name "Calacas" (skulls in Spanish) pays homage to the rich Día de los Muertos traditions that inspire our art. From custom band merch to corporate orders, we bring that same passion and attention to detail to every project.',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
  twitter: 'https://twitter.com',
  businessHours: [
    { _key: 'mon', day: 'Monday',    openTime: '9:00 AM', closeTime: '6:00 PM', isClosed: false },
    { _key: 'tue', day: 'Tuesday',   openTime: '9:00 AM', closeTime: '6:00 PM', isClosed: false },
    { _key: 'wed', day: 'Wednesday', openTime: '9:00 AM', closeTime: '6:00 PM', isClosed: false },
    { _key: 'thu', day: 'Thursday',  openTime: '9:00 AM', closeTime: '6:00 PM', isClosed: false },
    { _key: 'fri', day: 'Friday',    openTime: '9:00 AM', closeTime: '6:00 PM', isClosed: false },
    { _key: 'sat', day: 'Saturday',  openTime: '10:00 AM', closeTime: '4:00 PM', isClosed: false },
    { _key: 'sun', day: 'Sunday',    openTime: '', closeTime: '', isClosed: true },
  ],
}

// ─── Services ─────────────────────────────────────────────────────────────────

const servicesData = [
  {
    _type: 'service',
    title: 'Custom Screen Printing',
    description: 'High-quality screen printing on t-shirts, hoodies, and apparel. Perfect for events, businesses, and personal projects.',
    icon: 'apparel',
    benefits: ['Single & multi-color prints', 'No minimum order quantity', 'Fast turnaround times'],
    order: 1,
  },
  {
    _type: 'service',
    title: 'Hats & Accessories',
    description: 'Custom printed hats, beanies, and accessories. Add your logo or design to complete your brand look.',
    icon: 'accessories',
    benefits: ['Baseball caps & snapbacks', 'Beanies & bucket hats', 'Custom printed designs'],
    order: 2,
  },
  {
    _type: 'service',
    title: 'Tote Bags & More',
    description: 'Eco-friendly tote bags, posters, and promotional items. Great for events, giveaways, and retail merchandise.',
    icon: 'promotional',
    benefits: ['Canvas & cotton totes', 'Posters & art prints', 'Stickers & patches'],
    order: 3,
  },
]

// ─── Portfolio Items ──────────────────────────────────────────────────────────

const portfolioData = [
  { title: 'Custom Screen Print Tee',      category: 'T-Shirts',    imageUrl: '/images/portfolio/calacas-screen-print-tee-01.webp', order: 1  },
  { title: 'Screen Printed T-Shirt',       category: 'T-Shirts',    imageUrl: '/images/portfolio/calacas-screen-print-tee-02.webp', order: 2  },
  { title: 'Graphic Screen Print Tee',     category: 'T-Shirts',    imageUrl: '/images/portfolio/calacas-screen-print-tee-03.webp', order: 3  },
  { title: 'Custom Apparel Print',         category: 'Apparel',     imageUrl: '/images/portfolio/calacas-screen-print-tee-04.webp', order: 4  },
  { title: 'Multi-Color Screen Print',     category: 'T-Shirts',    imageUrl: '/images/portfolio/calacas-screen-print-tee-05.webp', order: 5  },
  { title: 'Custom Design Print Tee',      category: 'T-Shirts',    imageUrl: '/images/portfolio/calacas-screen-print-tee-06.webp', order: 6  },
  { title: 'Screen Print Merchandise',     category: 'Merchandise', imageUrl: '/images/portfolio/calacas-screen-print-tee-07.webp', order: 7  },
  { title: 'Custom Brand T-Shirt',         category: 'T-Shirts',    imageUrl: '/images/portfolio/calacas-screen-print-tee-08.webp', order: 8  },
  { title: 'Screen Print Event Tee',       category: 'Events',      imageUrl: '/images/portfolio/calacas-screen-print-tee-09.webp', order: 9  },
  { title: 'Custom Graphic Tee',           category: 'T-Shirts',    imageUrl: '/images/portfolio/calacas-screen-print-tee-10.webp', order: 10 },
  { title: 'Artisan Screen Print Apparel', category: 'Apparel',     imageUrl: '/images/portfolio/calacas-screen-print-tee-11.webp', order: 11 },
  { title: 'Screen Print Logo Tee',        category: 'T-Shirts',    imageUrl: '/images/portfolio/calacas-screen-print-tee-12.webp', order: 12 },
  { title: 'Custom Screen Print Design',   category: 'T-Shirts',    imageUrl: '/images/portfolio/calacas-screen-print-tee-13.webp', order: 13 },
  { title: 'Screen Print Merch Tee',       category: 'Merchandise', imageUrl: '/images/portfolio/calacas-screen-print-tee-14.webp', order: 14 },
  { title: 'Blue Custom Screen Print Tee', category: 'T-Shirts',    imageUrl: '/images/portfolio/calacas-screen-print-blue-tee.webp', order: 15 },
  { title: 'Gray Custom Screen Print Tee', category: 'T-Shirts',    imageUrl: '/images/portfolio/calacas-screen-print-gray-tee.webp', order: 16 },
].map((item, i) => ({
  ...item,
  _type: 'portfolioItem',
  description: `Custom screen printed item by Calacas Prints, San Francisco. ${item.category}.`,
}))

// ─── Run seed ─────────────────────────────────────────────────────────────────

async function seed() {
  console.log('🌱 Iniciando seed a Sanity...\n')

  if (!process.env.SANITY_API_TOKEN) {
    console.error('❌ Falta SANITY_API_TOKEN en .env.local')
    console.error('   Ve a: https://www.sanity.io/manage/personal/project/k6geulcb/api')
    console.error('   Crea un token "Editor" y agrégalo a .env.local\n')
    process.exit(1)
  }

  try {
    // Site settings (createOrReplace porque tiene _id fijo)
    console.log('📋 Creando configuración del negocio...')
    await client.createOrReplace(siteSettingsData)
    console.log('   ✅ siteSettings creado\n')

    // Services
    console.log('🖨️  Creando servicios...')
    for (const s of servicesData) {
      await client.create(s)
      console.log(`   ✅ ${s.title}`)
    }

    // Portfolio
    console.log('\n🎨 Creando items de portafolio...')
    for (const p of portfolioData) {
      await client.create(p)
      console.log(`   ✅ ${p.title}`)
    }

    console.log('\n🎉 ¡Seed completado!')
    console.log('   Ahora puedes ir a /studio para ver y editar el contenido.')
    console.log('   Las imágenes del portafolio se muestran desde archivos locales.')
    console.log('   Para subir imágenes reales, úsalas desde el Studio de Sanity.\n')
  } catch (err) {
    console.error('❌ Error en seed:', err)
    process.exit(1)
  }
}

seed()
