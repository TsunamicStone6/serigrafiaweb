/**
 * Diagnóstico — verifica items duplicados en Sanity
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

async function diagnose() {
  console.log('🔍 Diagnosticando duplicados en Sanity...\n')

  try {
    // Contar servicios
    const services = await client.fetch(`*[_type == "service"] { _id, title }`)
    console.log(`📋 Servicios: ${services.length}`)
    services.forEach((s) => console.log(`   • ${s.title}`))

    // Contar portfolio items
    const portfolio = await client.fetch(`*[_type == "portfolioItem"] { _id, title }`)
    console.log(`\n🎨 Portfolio Items: ${portfolio.length}`)
    portfolio.forEach((p) => console.log(`   • ${p.title}`))

    // Contar coming soon items
    const comingSoon = await client.fetch(`*[_type == "comingSoonItem"] { _id, title }`)
    console.log(`\n🚀 Coming Soon Items: ${comingSoon.length}`)
    comingSoon.forEach((c) => console.log(`   • ${c.title}`))

    // Detectar duplicados
    console.log('\n⚠️  ANÁLISIS DE DUPLICADOS:')
    
    const servicesByTitle = {}
    services.forEach((s) => {
      servicesByTitle[s.title] = (servicesByTitle[s.title] || 0) + 1
    })
    
    const duplicateServices = Object.entries(servicesByTitle).filter(([_, count]) => count > 1)
    if (duplicateServices.length > 0) {
      console.log(`\n❌ Servicios duplicados: ${duplicateServices.length}`)
      duplicateServices.forEach(([title, count]) => {
        console.log(`   • ${title}: ${count} veces`)
      })
    } else {
      console.log('\n✅ No hay servicios duplicados')
    }

    const portfolioByTitle = {}
    portfolio.forEach((p) => {
      portfolioByTitle[p.title] = (portfolioByTitle[p.title] || 0) + 1
    })
    
    const duplicatePortfolio = Object.entries(portfolioByTitle).filter(([_, count]) => count > 1)
    if (duplicatePortfolio.length > 0) {
      console.log(`\n❌ Portfolio items duplicados: ${duplicatePortfolio.length}`)
      duplicatePortfolio.forEach(([title, count]) => {
        console.log(`   • ${title}: ${count} veces`)
      })
    } else {
      console.log('\n✅ No hay portfolio items duplicados')
    }

  } catch (err) {
    console.error('❌ Error:', err.message)
    process.exit(1)
  }
}

diagnose()
