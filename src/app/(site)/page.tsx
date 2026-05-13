import dynamic from 'next/dynamic'
import { Hero }        from '@/components/sections/Hero'
import { SplitEntry }  from '@/components/sections/SplitEntry'
import { About }       from '@/components/sections/About'
import { Contact }     from '@/components/sections/Contact'
import { ComingSoon }  from '@/components/sections/ComingSoon'
import { ProductsShowcaseClient } from '@/components/ProductsShowcaseClient'
import { client }     from '@/sanity/client'
import { SITE_SETTINGS_QUERY, SERVICES_QUERY, PORTFOLIO_QUERY, COMING_SOON_QUERY } from '@/sanity/queries'
import { siteConfig } from '@/config/site.config'
import type { SiteSettings, Service, PortfolioItem, ComingSoonItem } from '@/types/sanity'

const Services = dynamic(
  () => import('@/components/sections/Services').then((m) => ({ default: m.Services })),
  { ssr: true, loading: () => <div className="min-h-[40vh] bg-ink" /> }
)

export default async function Home() {
  // Fetch en paralelo
  const isDev = process.env.NODE_ENV === 'development'
  const revalidate = isDev ? 0 : 60

  const [settings, services, portfolio, comingSoon] = await Promise.all([
    client.fetch<SiteSettings | null>(SITE_SETTINGS_QUERY, {}, { next: { revalidate } }),
    client.fetch<Service[]>(SERVICES_QUERY, {}, { next: { revalidate } }),
    client.fetch<PortfolioItem[]>(PORTFOLIO_QUERY, {}, { next: { revalidate } }),
    client.fetch<ComingSoonItem[]>(COMING_SOON_QUERY, {}, { next: { revalidate } }),
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

  const portfolioData = portfolio && portfolio.length > 0 ? portfolio : siteConfig.portfolio.map((p, idx) => ({
    _id: `local-${p.id}`,
    title: p.title,
    category: p.category,
    imageUrl: p.image,
    description: p.description,
    order: idx + 1,
  }))

  const comingSoonData = comingSoon && comingSoon.length > 0 ? comingSoon : siteConfig.comingSoon.map((c, idx) => ({
    _id: `local-${c.id}`,
    title: c.title,
    imageUrl: c.image,
    order: idx + 1,
  }))

  return (
    <>
      <Hero {...heroData} />
      <Services services={servicesData} phone={phone} />
      <SplitEntry />
      <ProductsShowcaseClient portfolio={portfolioData} phone={phone} />
      <ComingSoon drops={comingSoonData} />
      <About {...aboutData} />
      <Contact phone={phone} email={email} />
    </>
  )
}
