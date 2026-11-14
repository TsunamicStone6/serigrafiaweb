import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Marquee } from '@/components/common/Marquee'
import { MobileCtaBar } from '@/components/common/MobileCtaBar'
import { client } from '@/sanity/client'
import { SITE_SETTINGS_QUERY } from '@/sanity/queries'
import { siteConfig } from '@/config/site.config'
import type { SiteSettings } from '@/types/sanity'

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  // Fetch from Sanity, fallback a siteConfig si Sanity no tiene datos aún
  const isDev = process.env.NODE_ENV === 'development'
  const settings: SiteSettings | null = await client.fetch(
    SITE_SETTINGS_QUERY,
    {},
    { next: { revalidate: isDev ? 0 : 60 } }
  )

  const phone    = settings?.phone    || siteConfig.business.phone
  const email    = settings?.email    || siteConfig.business.email
  const address  = settings?.address  || siteConfig.business.address
  const instagram = settings?.instagram || siteConfig.social.instagram
  const facebook  = settings?.facebook  || siteConfig.social.facebook
  const twitter   = settings?.twitter   || siteConfig.social.twitter
  const description = settings?.description || siteConfig.business.description
  const brandName   = settings?.businessName || siteConfig.brand.name

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-brand-red focus:text-white focus:px-4 focus:py-2 focus:text-[12px] focus:font-black focus:uppercase focus:tracking-[0.15em]"
      >
        Skip to content
      </a>
      <Header
        phone={phone}
        navigation={siteConfig.navigation}
        logo={siteConfig.brand.logo}
        brandName={brandName}
      />
      <Marquee />
      <main id="main">{children}</main>
      <Footer
        brandName={brandName}
        description={description}
        phone={phone}
        email={email}
        address={address}
        instagram={instagram}
        facebook={facebook}
        twitter={twitter}
      />
      {/* Espacio para que la barra fija no tape el final del footer en celular */}
      <div className="h-[72px] md:hidden" aria-hidden="true" />
      <MobileCtaBar phone={phone} />
    </>
  )
}
