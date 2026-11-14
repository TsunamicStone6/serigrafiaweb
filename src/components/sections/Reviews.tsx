'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
import type { Testimonial } from '@/types/sanity'

type ReviewsProps = {
  reviews: Testimonial[]
}

const INITIAL_VISIBLE = 6

function Stars({ rating, size = 'w-4 h-4' }: { rating: number; size?: string }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          aria-hidden="true"
          className={`${size} ${n <= Math.round(rating) ? 'fill-brand-red text-brand-red' : 'text-white/20'}`}
        />
      ))}
    </div>
  )
}

export function Reviews({ reviews }: ReviewsProps) {
  const [showAll, setShowAll] = useState(false)

  // Never render an empty/fake section: it only shows once real reviews exist in Sanity
  if (!reviews?.length) return null

  const visible = showAll ? reviews : reviews.slice(0, INITIAL_VISIBLE)
  const hasMore = reviews.length > INITIAL_VISIBLE
  // Con 1-2 reseñas, tarjetas sueltas (sin el bloque gris del grid completo)
  const sparse = reviews.length < 3

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="bg-surface py-16 md:py-24 border-y border-white/[0.07]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-5 h-px bg-brand-red" />
            <span className="text-[11px] font-bold text-brand-muted uppercase tracking-[0.45em]">Customer reviews</span>
          </div>
          <h2 id="reviews-title" className="text-[clamp(28px,4.5vw,62px)] font-black uppercase tracking-tightest text-brand-light">
            What clients say
          </h2>
        </div>

        <ul
          className={
            sparse
              ? `grid gap-4 ${reviews.length === 1 ? 'max-w-xl' : 'md:grid-cols-2 max-w-3xl'}`
              : 'grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.07] border border-white/[0.07]'
          }
        >
          {visible.map((r) => (
            <li key={r._id} className={sparse ? 'bg-card border border-white/[0.07]' : 'bg-card'}>
              <figure className="group card-line-top h-full flex flex-col gap-4 p-7 md:p-9 transition-colors duration-300 hover:bg-brand-red/[0.03]">
                <Stars rating={r.rating} />
                <blockquote className="text-[13px] md:text-[14px] text-brand-light leading-[1.7]">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto pt-2 text-[11px]">
                  <span className="block font-black uppercase tracking-wide text-brand-light">{r.author}</span>
                  {r.service && <span className="block text-brand-gray mt-0.5">{r.service}</span>}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
              className="px-8 py-4 border border-white/20 text-brand-light text-[11px] font-black uppercase tracking-[0.18em] hover:border-brand-red hover:text-brand-red transition-colors"
            >
              {showAll ? 'Show less' : `Show all ${reviews.length} reviews`}
            </button>
          </div>
        )}

      </div>
    </section>
  )
}
