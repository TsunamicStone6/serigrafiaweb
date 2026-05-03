import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Marquee } from '@/components/common/Marquee'
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
      <Header
        phone={phone}
        navigation={siteConfig.navigation}
        logo={siteConfig.brand.logo}
        brandName={brandName}
      />
      <Marquee />
      <main>{children}</main>
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
    </>
  )
}
