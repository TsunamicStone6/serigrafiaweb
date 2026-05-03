import { groq } from 'next-sanity'

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
    businessName,
    tagline,
    description,
    phone,
    email,
    address,
    founded,
    stats,
    aboutTitle,
    aboutDescription,
    aboutStory,
    aboutImage,
    businessHours,
    instagram,
    facebook,
    twitter,
  }
`

export const SERVICES_QUERY = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    benefits,
    order,
  }
`

export const PORTFOLIO_QUERY = groq`
  *[_type == "portfolioItem"] | order(order asc) {
    _id,
    title,
    category,
    image,
    imageUrl,
    description,
    order,
  }
`
