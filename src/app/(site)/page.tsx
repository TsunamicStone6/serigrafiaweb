import dynamic from 'next/dynamic'
import { Hero }       from '@/components/sections/Hero'
import { SplitEntry } from '@/components/sections/SplitEntry'
import { About }      from '@/components/sections/About'
import { Contact }    from '@/components/sections/Contact'
import { client }     from '@/sanity/client'
import { SITE_SETTINGS_QUERY, SERVICES_QUERY, PORTFOLIO_QUERY } from '@/sanity/queries'
import { siteConfig } from '@/config/site.config'
import type { SiteSettings, Service, PortfolioItem } from '@/types/sanity'

const Services = dynamic(
  () => import('@/components/sections/Services').then((m) => ({ default: m.Services })),
  { ssr: true, loading: () => <div className="min-h-[40vh] bg-ink" /> }
)

const ProductsShowcase = dynamic(
  () =>
    import('@/components/sections/ProductsShowcase').then((m) => ({
      default: m.ProductsShowcase,
    })),
  { ssr: true, loading: () => <div className="min-h-[40vh] bg-ink" /> }
)

export default async function Home() {
  // Fetch en paralelo
  const isDev = process.env.NODE_ENV === 'development'
  const revalidate = isDev ? 0 : 60

  const [settings, services, portfolio] = await Promise.all([
    client.fetch<SiteSettings | null>(SITE_SETTINGS_QUERY, {}, { next: { revalidate } }),
    client.fetch<Service[]>(SERVICES_QUERY, {}, { next: { revalidate } }),
    client.fetch<PortfolioItem[]>(PORTFOLIO_QUERY, {}, { next: { revalidate } }),
  ])

  // Fallbacks a siteConfig si Sanity no tiene datos aún
  const phone   = settings?.phone   || siteConfig.business.phone
  const email   = settings?.email   || siteConfig.business.email
  const address = settings?.address || siteConfig.business.address

  const heroData = {
    tagline:     settings?.tagline     || siteConfig.business.tagline,
    description: settings?.description || siteConfig.business.description,
    phone,
    stats: settings?.stats?.length ? settings.stats : siteConfig.about.stats,
  }

  const aboutData = {
    title:       settings?.aboutTitle       || siteConfig.about.title,
    description: settings?.aboutDescription || siteConfig.about.description,
    story:       settings?.aboutStory       || siteConfig.about.story,
    aboutImage:  settings?.aboutImage,
    localImage:  siteConfig.about.image,
    founded:     settings?.founded          || siteConfig.about.founded,
    address,
    phone,
    businessHours: settings?.businessHours || [],
  }

  const servicesData = services.length ? services : siteConfig.services.map((s, i) => ({
    _id: `local-${i}`,
    ...s,
    order: i,
  }))

  const portfolioData = portfolio.length ? portfolio : siteConfig.portfolio.map((p) => ({
    _id: String(p.id),
    title: p.title,
    category: p.category,
    imageUrl: p.image,
    description: p.description,
    order: p.id,
  }))

  return (
    <>
      <Hero {...heroData} />
      <Services services={servicesData} phone={phone} />
      <SplitEntry />
      <ProductsShowcase portfolio={portfolioData} phone={phone} />
      <About {...aboutData} />
      <Contact phone={phone} email={email} />
    </>
  )
}
