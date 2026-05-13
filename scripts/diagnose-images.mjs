/**
 * Diagnóstico de imágenes — verifica qué imágenes tiene cada item de portfolio
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

async function diagnoseImages() {
  console.log('🔍 Diagnosticando imágenes en Portfolio...\n')

  try {
    const portfolio = await client.fetch(`
      *[_type == "portfolioItem"] | order(order asc) {
        _id,
        title,
        order,
        image {
          asset -> {
            _id,
            url
          }
        },
        imageUrl
      }
    `)

    console.log(`📊 Total items: ${portfolio.length}\n`)
    
    portfolio.forEach((item, idx) => {
      console.log(`${idx + 1}. ${item.title} (order: ${item.order})`)
      if (item.image?.asset?.url) {
        console.log(`   ✓ Image asset: ${item.image.asset.url.substring(0, 80)}...`)
      } else if (item.imageUrl) {
        console.log(`   ✓ Image URL: ${item.imageUrl}`)
      } else {
        console.log(`   ❌ SIN IMAGEN`)
      }
    })

    // Detectar duplicados de imagen
    const imageMap = {}
    portfolio.forEach((item) => {
      const img = item.image?.asset?.url || item.imageUrl || 'SIN_IMAGEN'
      if (!imageMap[img]) {
        imageMap[img] = []
      }
      imageMap[img].push(item.title)
    })

    const duplicates = Object.entries(imageMap).filter(([_, items]) => items.length > 1)
    if (duplicates.length > 0) {
      console.log(`\n⚠️  IMÁGENES DUPLICADAS:`)
      duplicates.forEach(([img, items]) => {
        console.log(`\n   ${img}`)
        items.forEach((title) => {
          console.log(`   • ${title}`)
        })
      })
    } else {
      console.log(`\n✅ No hay imágenes duplicadas`)
    }

  } catch (err) {
    console.error('❌ Error:', err.message)
    process.exit(1)
  }
}

diagnoseImages()
