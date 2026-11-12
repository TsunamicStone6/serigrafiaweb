/**
 * Sube las imágenes locales (/public) a Sanity y las liga a cada documento como DRAFT.
 * Nada se publica: revisa en /studio y da Publish.
 *
 * USO:  node scripts/upload-images-sanity.mjs --dry   (solo muestra qué haría)
 *       node scripts/upload-images-sanity.mjs         (sube y crea drafts)
 * Requiere SANITY_API_TOKEN (Editor) en .env.local
 */
import { createClient } from '@sanity/client'
import { config } from 'dotenv'
import { createReadStream, existsSync } from 'node:fs'
import { basename, join } from 'node:path'

config({ path: '.env.local' })
const DRY = process.argv.includes('--dry')

const client = createClient({
  projectId: 'k6geulcb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})


// Título / categoría / descripción por posición (order), según lo que se ve en cada foto
const META = {
  1:  { title: 'Ash Gray Long Sleeve – Building Rendering & Team Credits', category: 'Apparel',  description: 'Ash gray long sleeve tee with a black architectural rendering, project team credits and logos on the back, plus vertical text printed down the sleeve.' },
  2:  { title: 'Hi-Vis Orange Long Sleeve – Chest Logo & Flag Sleeve',     category: 'Apparel',  description: 'High-visibility orange long sleeve work shirt with a one-color chest logo and an American flag printed on the sleeve.' },
  3:  { title: 'Hi-Vis Orange Long Sleeve – "24th & Waverly" Building Print', category: 'Apparel', description: 'Hi-vis orange long sleeve with a detailed one-color building illustration and project name printed across the back.' },
  4:  { title: 'Charcoal Tee – Left-Chest White Logo',                     category: 'T-Shirts', description: 'Charcoal gray t-shirt with a crisp white left-chest logo print, ideal for crew and company uniforms.' },
  5:  { title: 'Ash Gray Long Sleeve – Left-Chest Logo & Sleeve Text',     category: 'Apparel',  description: 'Ash gray long sleeve with a full-color left-chest logo and bold vertical street-name text down the sleeve.' },
  6:  { title: 'Charcoal Tee – Architectural Building Back Print',         category: 'T-Shirts', description: 'Charcoal t-shirt with a detailed white-ink architectural illustration and address on the back.' },
  7:  { title: 'Heather Charcoal Tee – "Topping Out" Back Print',          category: 'T-Shirts', description: 'Heather charcoal tee with a multi-color back print: partner logos, "Topping Out" headline and a full list of contractors.' },
  8:  { title: 'Charcoal Tee – Two-Color Left-Chest Logo',                 category: 'T-Shirts', description: 'Charcoal t-shirt with a small two-color left-chest logo and address line, clean and professional.' },
  9:  { title: 'White Tee – Full-Color Floral Back Print',                 category: 'T-Shirts', description: 'White t-shirt with a vibrant full-color floral artwork and logo printed on the back.' },
  10: { title: 'Hi-Vis Orange Long Sleeve – "Topping Out 2019" Print',     category: 'Apparel',  description: 'Hi-vis orange long sleeve with a one-color construction crane and building illustration, "Topping Out 2019", and a flag on the sleeve.' },
  11: { title: 'Hi-Vis Orange Long Sleeve – Chest Logo',                   category: 'Apparel',  description: 'High-visibility orange long sleeve with a simple left-chest logo print, built for job sites.' },
  12: { title: 'White Tee – "Topping Off" Back Print with Sponsor List',   category: 'T-Shirts', description: 'White t-shirt with a "Topping Off" back print featuring building imagery, partner logos, sponsor names and a thank-you message.' },
  13: { title: 'Purple Tee – Building Illustration & Sponsor Names',       category: 'T-Shirts', description: 'Purple t-shirt with a full-color building illustration, partner logos and sponsor names on the back, plus a flag on the sleeve.' },
  14: { title: 'Light Gray Tee – Left-Chest Logo',                         category: 'T-Shirts', description: 'Light gray t-shirt with a minimal one-color left-chest logo print.' },
}

const cache = new Map() // ruta -> asset _id (evita subir dos veces el mismo archivo)

async function upload(rel) {
  const file = join('public', rel.replace(/^\//, ''))
  if (!existsSync(file)) throw new Error('No existe ' + file)
  if (cache.has(file)) return cache.get(file)
  if (DRY) return 'dry-run'
  const asset = await client.assets.upload('image', createReadStream(file), { filename: basename(file) })
  cache.set(file, asset._id)
  return asset._id
}

const imgRef = (id) => ({ _type: 'image', asset: { _type: 'reference', _ref: id } })

async function toDraft(doc, field, rel, extra = {}) {
  const id = doc._id.replace(/^drafts\./, '')
  const draft = await client.getDocument('drafts.' + id)
  const base = draft || doc
  const needsImage = !base[field]?.asset
  const hasExtra = Object.keys(extra).length > 0
  if (!needsImage && !hasExtra) return console.log('  = sin cambios:', id)
  const patch = { ...extra }
  if (needsImage) patch[field] = imgRef(await upload(rel))
  console.log(`  + ${id}${needsImage ? ' <- ' + rel : ''}${extra.title ? '  [' + extra.title + ']' : ''}`)
  if (!DRY) {
    const { _rev, _createdAt, _updatedAt, ...clean } = base
    await client.createOrReplace({ ...clean, _id: 'drafts.' + id, ...patch })
  }
}

for (const type of ['portfolioItem', 'comingSoonItem']) {
  console.log(`\n${type}`)
  const docs = await client.fetch(`*[_type==$t]{...}`, { t: type })
  for (const d of docs) {
    const extra = type === 'portfolioItem' ? (META[d.order] || {}) : {}
    if (!d.image?.asset && !d.imageUrl?.startsWith('/')) { console.log('  ! sin imagen local:', d._id); continue }
    await toDraft(d, 'image', d.imageUrl, extra)
  }
}

console.log('\nsiteSettings (About)')
const settings = await client.getDocument('siteSettings')
if (settings) await toDraft(settings, 'aboutImage', '/images/hero/store.webp')

console.log(DRY ? '\nDry run: no se escribió nada.' : '\nListo. Revisa los drafts en /studio y publica.')
