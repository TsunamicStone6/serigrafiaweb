'use client'

import { ProductsShowcase } from '@/components/sections/ProductsShowcase'
import type { PortfolioItem } from '@/types/sanity'

type ProductsShowcaseClientProps = {
  portfolio: PortfolioItem[] | Array<{
    _id: string
    title: string
    category: string
    image?: any
    imageUrl?: string
    description: string
    order: number
  }>
  phone: string
}

export function ProductsShowcaseClient({ portfolio, phone }: ProductsShowcaseClientProps) {
  return <ProductsShowcase portfolio={portfolio} phone={phone} />
}
