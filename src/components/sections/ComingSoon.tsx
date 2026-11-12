'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'
import { urlForImage } from '@/sanity/image'

type ComingSoonDrop = {
  _id: string
  title: string
  image?: any
  imageUrl?: string
}

type ComingSoonProps = {
  drops: ComingSoonDrop[]
  phone?: string
}

function getImageSrc(item: { image?: any; imageUrl?: string }): string {
  if (item.image?.asset?._ref) {
    return urlForImage(item.image).width(600).height(600).url()
  }
  if (item.imageUrl) {
    return item.imageUrl
  }
  return '/images/portfolio/coming-soon/calacas-guapea-salsa-tee.webp'
}

const PRICE = 25
const SHIPPING = 12

export function ComingSoon({ drops, phone }: ComingSoonProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const phoneNumber = phone?.replace(/\D/g, '') || ''
  const smsLink = `sms:${phoneNumber}?body=${encodeURIComponent(
    `Hi! I'd like to order a tee from the Calacas salsa collection — $${PRICE} + $${SHIPPING} shipping. Please let me know the available designs and sizes.`
  )}`

  if (!drops || drops.length === 0) return null

  return (
    <section
      id="shop"
      aria-label="Shop — Salsa collection tees"
      className="bg-ink py-14 md:py-20 border-b border-white/[0.07]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8 md:mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-5 h-px bg-brand-red" />
              <span className="text-[9px] font-bold text-brand-muted uppercase tracking-[0.45em]">
                Available now
              </span>
            </div>
            <h2 className="text-[clamp(28px,4.5vw,62px)] font-black uppercase tracking-tightest text-brand-light leading-none">
              Salsa <span className="text-brand-red">Collection</span>
            </h2>
          </div>

          <div className="md:text-right">
            <p className="text-[13px] font-black text-brand-light">${PRICE} <span className="text-brand-gray font-normal text-[12px]">+ ${SHIPPING} shipping</span></p>
            <p className="text-[11px] text-brand-muted mt-0.5 leading-[1.5]">
              Printed to order · Ships within 2 weeks
            </p>
          </div>
        </div>

        {/* Product grid */}
        <div className={`grid gap-3 md:gap-4 ${
          drops.length <= 2
            ? 'grid-cols-2'
            : drops.length === 3
            ? 'grid-cols-2 md:grid-cols-3'
            : 'grid-cols-2 md:grid-cols-4'
        }`}>
          {drops.map((item, index) => (
            <button
              key={item._id}
              onClick={() => setLightboxIndex(index)}
              className="group relative bg-card border border-white/[0.06] overflow-hidden aspect-square cursor-pointer hover:border-brand-red transition-colors duration-200"
            >
              <Image
                src={getImageSrc(item)}
                alt={`Calacas Prints – ${item.title} – salsa tee`}
                fill
                sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                loading="eager"
                quality={85}
              />

              {/* Price badge */}
              <div className="absolute top-2.5 right-2.5 bg-brand-red px-2 py-[3px] z-10">
                <span className="text-[10px] font-black text-white">${PRICE}</span>
              </div>

              {/* Design name */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/90 to-transparent px-4 py-3 z-10">
                <span className="text-[10px] font-black text-brand-light uppercase tracking-[0.15em]">
                  {item.title}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition-all duration-300 flex items-center justify-center z-10">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[10px] font-black text-white uppercase tracking-[0.2em] border border-white/60 px-4 py-2">
                  View
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom CTA row */}
        <div className="mt-6 md:mt-8 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/[0.07] bg-card px-6 md:px-10 py-5 md:py-6">
          <div>
            <p className="text-[14px] md:text-[16px] font-black uppercase text-brand-light">
              Order by text
            </p>
            <p className="text-[12px] text-brand-gray mt-1 leading-[1.5]">
              T-shirts are printed once the order is placed. We&apos;ll confirm your size and ship within 2 weeks.
            </p>
          </div>
          <a
            href={smsLink}
            className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white text-[11px] font-black uppercase tracking-[0.18em] hover:bg-brand-hover transition-colors flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            Text to order
          </a>
        </div>

      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-ink/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative w-[min(90vw,700px)] h-[min(85vh,700px)] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={getImageSrc(drops[lightboxIndex])}
              alt={`Calacas Prints – ${drops[lightboxIndex].title}`}
              fill
              sizes="(max-width: 768px) 90vw, 700px"
              className="object-contain"
              priority
            />

            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + drops.length) % drops.length) }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-brand-red hover:bg-brand-hover transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % drops.length) }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-brand-red hover:bg-brand-hover transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-brand-red hover:bg-brand-hover transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-ink/80 px-4 py-1 rounded text-[12px] text-brand-light font-black uppercase tracking-widest z-10">
              {drops[lightboxIndex].title} · {lightboxIndex + 1}/{drops.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
