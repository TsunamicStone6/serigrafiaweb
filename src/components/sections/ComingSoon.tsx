'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { urlForImage } from '@/sanity/image'

type ComingSoonDrop = {
  _id: string
  title: string
  image?: any
  imageUrl?: string
}

type ComingSoonProps = {
  drops: ComingSoonDrop[]
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

const INTERVAL = 3500

export function ComingSoon({ drops }: ComingSoonProps) {
  const [current, setCurrent]     = useState(0)
  const [visible, setVisible]     = useState(true)
  const [lightbox, setLightbox]   = useState(false)
  const [paused, setPaused]       = useState(false)

  // Fade-swap helper
  const goTo = useCallback((next: number) => {
    setVisible(false)
    setTimeout(() => {
      setCurrent(next)
      setVisible(true)
    }, 280)
  }, [])

  const prev = () => { setPaused(true); goTo((current - 1 + drops.length) % drops.length) }
  const next = useCallback(() => { goTo((current + 1) % drops.length) }, [current, goTo, drops.length])

  // Auto-advance
  useEffect(() => {
    if (paused || !drops || drops.length === 0) return
    const id = setInterval(next, INTERVAL)
    return () => clearInterval(id)
  }, [next, paused, drops])

  // Handle empty drops - check AFTER all hooks
  if (!drops || drops.length === 0) {
    return null
  }

  return (
    <section
      id="coming-soon"
      aria-label="New collection coming soon"
      className="bg-surface py-16 md:py-24 border-y border-white/[0.07]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ── Left: copy ── */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-5 h-px bg-brand-red" />
              <span className="text-[9px] font-bold text-brand-muted uppercase tracking-[0.45em]">
                New collection
              </span>
            </div>

            <h2 className="text-[clamp(36px,6vw,78px)] font-black uppercase leading-none tracking-tightest text-brand-light mb-2">
              Next
              <span className="block text-brand-red">Drop</span>
              Coming
            </h2>

            <p className="text-[12px] md:text-[13px] text-brand-gray leading-[1.65] mt-5 max-w-[320px]">
              Fresh salsa-inspired designs. Limited run. Printed in the Bay Area — same quality, new heat.
            </p>

            {/* Dots + nav */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={prev}
                className="p-1.5 border border-white/20 hover:border-brand-red hover:text-brand-red text-brand-gray transition-colors"
                aria-label="Previous design"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                {drops.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setPaused(true); goTo(i) }}
                    aria-label={`Design ${i + 1}`}
                    className={`transition-all duration-300 ${
                      i === current
                        ? 'w-5 h-[3px] bg-brand-red'
                        : 'w-[3px] h-[3px] rounded-full bg-white/25 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => { setPaused(true); next() }}
                className="p-1.5 border border-white/20 hover:border-brand-red hover:text-brand-red text-brand-gray transition-colors"
                aria-label="Next design"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span className="text-[9px] font-bold text-brand-muted uppercase tracking-[0.35em]">
                In production
              </span>
            </div>
          </div>

          {/* ── Right: single image slideshow ── */}
          <div
            className="relative bg-card border border-white/[0.06] overflow-hidden aspect-square cursor-pointer group"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onClick={() => setLightbox(true)}
          >
            {/* Image with fade */}
            <div
              className="absolute inset-0 transition-opacity duration-[280ms]"
              style={{ opacity: visible ? 1 : 0 }}
            >
              <Image
                src={getImageSrc(drops[current])}
                alt={`Calacas Prints – ${drops[current].title} – coming soon`}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-contain p-8"
                priority={current === 0}
                quality={90}
              />
            </div>

            {/* Badge */}
            <div className="absolute top-3 right-3 bg-brand-red px-2 py-[3px] z-10">
              <span className="text-[7px] font-black text-white uppercase tracking-[0.25em]">
                Coming Soon
              </span>
            </div>

            {/* Design name bottom */}
            <div className="absolute bottom-0 left-0 right-0 px-5 py-4 z-10">
              <span
                className="text-[11px] font-black text-brand-light uppercase tracking-[0.18em] transition-opacity duration-[280ms]"
                style={{ opacity: visible ? 1 : 0 }}
              >
                {drops[current].title}
              </span>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition-all duration-300 flex items-center justify-center z-10">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[10px] font-black text-white uppercase tracking-[0.2em] border border-white/60 px-4 py-2">
                View →
              </span>
            </div>

            {/* Progress bar */}
            {!paused && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.06] z-20">
                <div
                  key={current}
                  className="h-full bg-brand-red origin-left"
                  style={{ animation: `progress ${INTERVAL}ms linear forwards` }}
                />
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-ink/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(false)}
        >
          <div
            className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={getImageSrc(drops[current])}
              alt={`Calacas Prints – ${drops[current].title} – coming soon`}
              fill
              sizes="(max-width: 768px) 90vw, 600px"
              className="object-contain"
              priority
            />

            <button
              onClick={(e) => { e.stopPropagation(); setPaused(true); goTo((current - 1 + drops.length) % drops.length) }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-brand-red hover:bg-brand-hover transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setPaused(true); goTo((current + 1) % drops.length) }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-brand-red hover:bg-brand-hover transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={() => setLightbox(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-brand-red hover:bg-brand-hover transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-ink/80 px-4 py-1 rounded text-[12px] text-brand-light font-black uppercase tracking-widest z-10">
              {drops[current].title} · {current + 1}/{drops.length}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </section>
  )
}
