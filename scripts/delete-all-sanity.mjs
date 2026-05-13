/**
 * Limpieza total — elimina TODOS los items de Sanity
 */

import { createClient } from '@sanity/client'
import { config } from 'dotenv'

config({ path: '.env.local' })

const client = createClient({
  projectId: 'k6geulcb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function deleteAll() {
  console.log('🧹 Eliminando TODOS los items de Sanity...\n')

  try {
    // Eliminar servicios
    const services = await client.fetch(`*[_type == "service"] { _id }`)
    console.log(`🖨️  Eliminando ${services.length} servicios...`)
    for (const s of services) {
      await client.delete(s._id)
    }
    console.log('   ✅ Servicios eliminados\n')

    // Eliminar portfolio
    const portfolio = await client.fetch(`*[_type == "portfolioItem"] { _id }`)
    console.log(`🎨 Eliminando ${portfolio.length} items de portfolio...`)
    for (const p of portfolio) {
      await client.delete(p._id)
    }
    console.log('   ✅ Portfolio eliminado\n')

    // Eliminar coming soon
    const comingSoon = await client.fetch(`*[_type == "comingSoonItem"] { _id }`)
    console.log(`🚀 Eliminando ${comingSoon.length} items de coming soon...`)
    for (const c of comingSoon) {
      await client.delete(c._id)
    }
    console.log('   ✅ Coming soon eliminado\n')

    console.log('🎉 ¡Limpieza completada!')
    console.log('   Ahora ejecuta: node scripts/seed-sanity.mjs')
  } catch (err) {
    console.error('❌ Error:', err.message)
    process.exit(1)
  }
}

deleteAll()
