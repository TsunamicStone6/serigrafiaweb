/**
 * Cleanup script — elimina items rotos de Sanity
 *
 * USO:
 * node scripts/cleanup-sanity.mjs
 */

import { createClient } from '@sanity/client'
import { config } from 'dotenv'

// Cargar .env.local
config({ path: '.env.local' })

const client = createClient({
  projectId: 'k6geulcb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function cleanup() {
  console.log('🧹 Limpiando items rotos de Sanity...\n')

  if (!process.env.SANITY_API_TOKEN) {
    console.error('❌ Falta SANITY_API_TOKEN en .env.local')
    process.exit(1)
  }

  try {
    // Buscar items rotos (que referencien nombres viejos)
    const brokenItems = await client.fetch(`
      *[_type == "portfolioItem" && (
        imageUrl match "*blue-tee*" || 
        imageUrl match "*gray-tee*"
      )] {
        _id,
        title,
        imageUrl
      }
    `)

    if (brokenItems.length === 0) {
      console.log('✅ No hay items rotos para limpiar')
      return
    }

    console.log(`⚠️  Se encontraron ${brokenItems.length} items rotos:\n`)
    brokenItems.forEach((item) => {
      console.log(`  • ${item.title}`)
      console.log(`    URL: ${item.imageUrl}`)
      console.log(`    ID: ${item._id}\n`)
    })

    // Eliminar items rotos
    console.log('🗑️  Eliminando items rotos...\n')
    for (const item of brokenItems) {
      await client.delete(item._id)
      console.log(`  ✅ Eliminado: ${item.title}`)
    }

    console.log(`\n🎉 ¡Limpieza completada!`)
    console.log(`   Se eliminaron ${brokenItems.length} items`)
  } catch (err) {
    console.error('❌ Error en cleanup:', err.message)
    process.exit(1)
  }
}

cleanup()
