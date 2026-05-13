'use client'

import dynamic from 'next/dynamic'
import type { PortfolioItem } from '@/types/sanity'

const ProductsShowcase = dynamic(
  () =>
    import('@/components/sections/ProductsShowcase').then((m) => ({
      default: m.ProductsShowcase,
    })),
  { ssr: false, loading: () => <div className="min-h-[40vh] bg-ink" /> }
)

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
