/**
 * Reseñas de PRUEBA — para ver cómo se ve la sección Reviews.
 *
 * Crear:    node scripts/sample-review.mjs
 * Borrar:   node scripts/sample-review.mjs --delete
 *
 * ⚠️ Son datos falsos. Bórralas antes de entregar el proyecto al cliente.
 */
import { createClient } from '@sanity/client'
import { config } from 'dotenv'

config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'k6geulcb',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const PREFIX = 'testimonial-TEST-'

const reviews = [
  { author: 'Test Customer A.', rating: 5, service: 'Custom tees', quote: 'Ordered 50 custom tees for our band and the print quality is amazing. Colors are sharp and they held up after many washes. Will definitely reorder!' },
  { author: 'Test Customer B.', rating: 5, service: 'Hoodies', quote: 'Fast turnaround and the team helped me fix my artwork before printing. The hoodies look exactly like the mockup.' },
  { author: 'Test Customer C.', rating: 4, service: 'Tote bags', quote: 'Great totes for our shop opening. Delivery took one day longer than expected, but the final result was worth it.' },
  { author: 'Test Customer D.', rating: 5, service: 'Team uniforms', quote: 'We printed jerseys for our whole soccer league. Everyone loved them and the pricing was fair for the quantity.' },
  { author: 'Test Customer E.', rating: 5, service: 'Custom tees', quote: 'Super friendly staff and very patient with all my changes. The prints are soft, not heavy or cracked.' },
  { author: 'Test Customer F.', rating: 4, service: 'Hats', quote: 'Nice embroidery on our caps. Would have liked a few more color options, but quality is solid.' },
  { author: 'Test Customer G.', rating: 5, service: 'Event merch', quote: 'Rush order for a community event and they delivered on time. Highly recommend for anyone in the Mission District.' },
  { author: 'Test Customer H.', rating: 3, service: 'Custom tees', quote: 'Good prints overall. One shirt had a small misalignment, but they offered to reprint it without any hassle.' },
]

if (!process.env.SANITY_API_TOKEN) {
  console.error('❌ Falta SANITY_API_TOKEN en .env.local')
  process.exit(1)
}

try {
  if (process.argv.includes('--delete')) {
    const ids = await client.fetch(`*[_type == "testimonial" && _id match $p]._id`, { p: `${PREFIX}*` })
    const tx = client.transaction()
    ids.forEach((id) => tx.delete(id))
    await tx.commit()
    console.log(`🗑️  ${ids.length} reseñas de prueba eliminadas`)
  } else {
    const tx = client.transaction()
    reviews.forEach((r, i) =>
      tx.createOrReplace({ _id: `${PREFIX}${i + 1}`, _type: 'testimonial', source: 'Direct', order: i + 1, ...r })
    )
    await tx.commit()
    console.log(`✅ ${reviews.length} reseñas de prueba creadas y publicadas. Recarga la página.`)
  }
} catch (err) {
  console.error('❌', err.message || err)
  process.exit(1)
}
