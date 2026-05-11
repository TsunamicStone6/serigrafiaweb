import Image from 'next/image'
import { urlForImage } from '@/sanity/image'
import type { SanityImage, BusinessHour } from '@/types/sanity'

const DAY_LABELS: Record<string, string> = {
  Monday: 'Mon', Tuesday: 'Tue', Wednesday: 'Wed',
  Thursday: 'Thu', Friday: 'Fri', Saturday: 'Sat', Sunday: 'Sun',
}

type AboutProps = {
  title: string
  description: string
  story: string
  aboutImage?: SanityImage
  localImage: string
  founded: number
  address: string
  phone: string
  businessHours: BusinessHour[]
}

export function About({ title, description, story, aboutImage, localImage, founded, address, phone, businessHours }: AboutProps) {
  // Use Sanity image if available, otherwise fallback to local
  const imageSrc = aboutImage
    ? urlForImage(aboutImage).width(800).height(800).url()
    : localImage

  // Split title for the red last word effect
  const titleWords = title.split(' ')
  const titleMain = titleWords.slice(0, -1).join(' ')
  const titleLast = titleWords[titleWords.length - 1]

  return (
    <section id="about" className="bg-ink py-16 md:py-24 border-y border-white/[0.07]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Image */}
          <div className="relative order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="pb-6 pr-6">
              <div className="relative aspect-square border border-white/10 overflow-hidden bg-card flex items-center justify-center">
                <Image
                  src={imageSrc}
                  alt="Calacas Prints – Mission District Store"
                  fill
                  loading="lazy"
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover brightness-75 hover:brightness-90 transition-all duration-500"
                  quality={85}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              </div>
            </div>
            {/* EST badge */}
            <div className="absolute bottom-0 right-0 w-[96px] h-[96px] md:w-[108px] md:h-[108px] bg-brand-red border-4 border-ink flex flex-col items-center justify-center z-10 hover:scale-105 transition-transform duration-300 cursor-default">
              <span className="text-[8px] font-bold text-white/90 tracking-[0.3em] uppercase">EST.</span>
              <span className="text-[32px] md:text-[38px] font-black text-white leading-none">{founded}</span>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-5 h-px bg-brand-red" />
              <span className="text-[9px] font-bold text-brand-muted uppercase tracking-[0.45em]">Our Story</span>
            </div>

            <h2 className="text-[clamp(30px,4vw,54px)] font-black uppercase tracking-tightest text-brand-light leading-none mb-5">
              {titleMain} <span className="text-brand-red">{titleLast}</span>
            </h2>

            <p className="text-[13px] md:text-[14px] text-brand-muted leading-[1.75] mb-3">
              {description}
            </p>
            <p className="text-[12px] md:text-[13px] text-brand-gray leading-[1.75] mb-8">
              {story}
            </p>

            {/* Address + Contact */}
            <div className="border border-white/[0.07] border-l-[3px] border-l-brand-red pl-4 md:pl-5 pr-4 py-4 md:py-5 flex flex-col gap-3">
              <p className="text-[9px] font-bold text-brand-muted uppercase tracking-[0.4em] mb-1">Visit Us</p>
              <div className="flex items-start gap-3">
                <span className="text-brand-red mt-[2px] text-sm">📍</span>
                <span className="text-[12px] font-semibold text-brand-light leading-[1.55]">{address}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-red text-sm">📞</span>
                <a href={`tel:${phone}`} className="text-[12px] font-semibold text-brand-light hover:text-brand-red transition-colors">
                  {phone}
                </a>
              </div>
            </div>

            {/* Business Hours */}
            {businessHours && businessHours.length > 0 && (
              <div className="mt-4 border border-white/[0.07] border-l-[3px] border-l-brand-red pl-4 md:pl-5 pr-4 py-4 md:py-5">
                <p className="text-[9px] font-bold text-brand-muted uppercase tracking-[0.4em] mb-3">Hours</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {businessHours.map((h, i) => (
                    <div key={i} className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-brand-gray uppercase tracking-[0.1em]">
                        {DAY_LABELS[h.day] || h.day}
                      </span>
                      {h.isClosed ? (
                        <span className="text-[11px] text-brand-red font-semibold">Closed</span>
                      ) : (
                        <span className="text-[11px] text-brand-light font-semibold">
                          {h.openTime} – {h.closeTime}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
