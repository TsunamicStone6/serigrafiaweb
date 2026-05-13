export type SanityImage = {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
  hotspot?: { x: number; y: number; height: number; width: number }
}

export type SiteStat = {
  label: string
  value: string
}

export type BusinessHour = {
  day: string
  openTime: string
  closeTime: string
  isClosed: boolean
}

export type SiteSettings = {
  businessName: string
  tagline: string
  description: string
  phone: string
  email: string
  address: string
  founded: number
  stats: SiteStat[]
  aboutTitle: string
  aboutDescription: string
  aboutStory: string
  aboutImage?: SanityImage
  businessHours: BusinessHour[]
  instagram: string
  facebook: string
  twitter: string
}

export type Service = {
  _id: string
  title: string
  description: string
  icon: string
  benefits: string[]
  order: number
}

export type PortfolioItem = {
  _id: string
  title: string
  category: string
  image?: SanityImage
  imageUrl?: string
  description: string
  order: number
}

export type ComingSoonItem = {
  _id: string
  title: string
  image?: SanityImage
  imageUrl?: string
  order: number
}
