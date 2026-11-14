'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'
import { urlForImage } from '@/sanity/image'
import { SmsLink } from '@/components/common/SmsLink'
import type { PortfolioItem } from '@/types/sanity'

type ProductsShowcaseProps = {
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

type Item = ProductsShowcaseProps['portfolio'][number]

const PAGE_SIZE = 8

function getImageSrc(item: { image?: any; imageUrl?: string; order?: number }): string {
  // 1. Imagen subida a Sanity (siempre preferida)
  if (item.image?.asset?._ref) {
    return urlForImage(item.image).width(600).height(750).url()
  }
  // 2. Archivos locales según el orden
  if (item.order && item.order >= 1 && item.order <= 14) {
    const padded = String(item.order).padStart(2, '0')
    return '/images/portfolio/calacas-screen-print-tee-' + padded + '.webp'
  }
  // 3. Último recurso: imageUrl
  if (item.imageUrl) return item.imageUrl
  return '/images/portfolio/calacas-screen-print-tee-01.webp'
}

export function ProductsShowcase({ portfolio, phone }: ProductsShowcaseProps) {
  const phoneNumber = phone?.replace(/\D/g, '') || ''
  const items = portfolio as Item[]

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)

  const filtered = items
  const shown = filtered.slice(0, visibleCount)
  const remaining = filtered.length - shown.length
  const selected = selectedIndex !== null ? filtered[selectedIndex] : null

  const close = () => setSelectedIndex(null)
  const prev = () => setSelectedIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length))
  const next = () => setSelectedIndex((i) => (i === null ? i : (i + 1) % filtered.length))

  // Teclado + bloqueo de scroll mientras el visor está abierto
  useEffect(() => {
    if (selectedIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = original
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex, filtered.length])

  return (
    <section id="designs" className="bg-ink py-16 md:py-24 border-y border-white/[0.07]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6 md:mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-5 h-px bg-brand-red" />
              <span className="text-[11px] font-bold text-brand-muted uppercase tracking-[0.45em]">Our work</span>
            </div>
            <h2 className="text-[clamp(28px,4.5vw,62px)] font-black uppercase tracking-tightest text-brand-light">
              Custom prints we&apos;ve made
            </h2>
          </div>
        </div>

        {/* Grid compacto: casi sin espacio entre piezas, a sangre en celular */}
        <ul className="-mx-6 md:mx-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2px] md:gap-3">
          {shown.map((item, index) => (
            <li key={item._id}>
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group block w-full text-left cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red"
                aria-label={`View ${item.title}`}
              >
                <div className="relative aspect-[4/5] bg-card overflow-hidden">
                  <Image
                    src={getImageSrc(item)}
                    alt={'Calacas Prints - ' + item.title + ' - Custom screen printing San Francisco'}
                    fill
                    sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                    className="object-contain p-4 md:p-6 brightness-95 group-hover:brightness-110 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                    quality={85}
                  />
                </div>
                <div className="px-3 md:px-1 pt-2.5 pb-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-light leading-snug line-clamp-1">
                    {item.title}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>

        {remaining > 0 && (
          <div className="mt-6 md:mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="w-full md:w-auto min-h-[48px] px-10 border border-white/25 text-brand-light text-[11px] font-black uppercase tracking-[0.18em] hover:border-brand-red hover:text-brand-red transition-colors"
            >
              Show more ({remaining})
            </button>
          </div>
        )}

        <div className="mt-8 md:mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/[0.07] bg-card px-6 md:px-10 py-6 md:py-7">
          <div>
            <p className="text-[15px] md:text-[17px] font-black uppercase text-brand-light">Like what you see?</p>
            <p className="text-[12px] text-brand-gray mt-1">Send us a message and we&apos;ll get your order started.</p>
          </div>
          <SmsLink
            href={'sms:' + phoneNumber + '?body=' + encodeURIComponent("Hi, I saw your work and I'm interested in a custom screen printing order.")}
            className="w-full md:w-auto min-h-[48px] flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white text-[11px] font-black uppercase tracking-[0.18em] hover:bg-brand-hover transition-colors flex-shrink-0"
          >
            Get a quote
          </SmsLink>
        </div>
      </div>

      {/* Visor: pantalla completa, desliza para cambiar, ficha abajo con botón de pedido */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] bg-ink flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return
            const dx = e.changedTouches[0].clientX - touchStartX.current
            touchStartX.current = null
            if (Math.abs(dx) > 50) (dx < 0 ? next : prev)()
          }}
        >
          <div className="flex items-center justify-between px-4 h-14 shrink-0">
            <span className="text-[12px] font-bold text-brand-gray tracking-[0.15em]">
              {(selectedIndex ?? 0) + 1} / {filtered.length}
            </span>
            <button
              type="button"
              onClick={close}
              className="w-11 h-11 flex items-center justify-center text-brand-light hover:text-brand-red"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative flex-1 min-h-0 flex items-center justify-center px-4">
            <Image
              key={selected._id}
              src={getImageSrc(selected)}
              alt={'Calacas Prints - ' + selected.title}
              width={800}
              height={1000}
              className="object-contain max-h-full w-auto max-w-full"
              priority
            />
            <button
              type="button"
              onClick={prev}
              className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center border border-white/25 text-brand-light hover:border-brand-red hover:text-brand-red"
              aria-label="Previous design"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={next}
              className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center border border-white/25 text-brand-light hover:border-brand-red hover:text-brand-red"
              aria-label="Next design"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="shrink-0 border-t border-white/10 bg-surface px-5 md:px-10 py-5 pb-[max(20px,env(safe-area-inset-bottom))] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-[17px] md:text-[20px] font-black uppercase text-brand-light">{selected.title}</h3>
              {selected.description && (
                <p className="text-[12px] md:text-[13px] text-brand-gray mt-1 leading-[1.6] max-w-[560px]">{selected.description}</p>
              )}
            </div>
            <SmsLink
              href={'sms:' + phoneNumber + '?body=' + encodeURIComponent(`Hi, I saw "${selected.title}" on your site and I'd like a custom order like it.`)}
              onClick={close}
              className="w-full md:w-auto min-h-[48px] flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white text-[11px] font-black uppercase tracking-[0.18em] hover:bg-brand-hover transition-colors shrink-0"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" /> Ask about this design
            </SmsLink>
          </div>
        </div>
      )}
    </section>
  )
}
