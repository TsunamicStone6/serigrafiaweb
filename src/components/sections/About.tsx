import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site.config';

export function About() {
  return (
    <section id="about" className="bg-ink py-16 md:py-24 border-y border-white/[0.07]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Image — shown below content on mobile */}
          <div className="relative order-2 lg:order-1 mt-8 lg:mt-0">
            {/* Extra bottom padding so badge doesn't clip */}
            <div className="pb-6 pr-6">
              <div className="relative aspect-square border border-white/10 overflow-hidden bg-card flex items-center justify-center">
                <Image
                  src={siteConfig.about.image}
                  alt="Calacas Prints – Mission District Store"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover brightness-75 hover:brightness-90 transition-all duration-500"
                  quality={85}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              </div>
            </div>
            {/* EST badge — inside the padded wrapper so it never overflows */}
            <div className="absolute bottom-0 right-0 w-[96px] h-[96px] md:w-[108px] md:h-[108px] bg-brand-red border-4 border-ink flex flex-col items-center justify-center z-10 hover:scale-105 transition-transform duration-300 cursor-default">
              <span className="text-[8px] font-bold text-white/90 tracking-[0.3em] uppercase">EST.</span>
              <span className="text-[32px] md:text-[38px] font-black text-white leading-none">{siteConfig.about.founded}</span>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-5 h-px bg-brand-red" />
              <span className="text-[9px] font-bold text-brand-muted uppercase tracking-[0.45em]">Our Story</span>
            </div>

            <h2 className="text-[clamp(30px,4vw,54px)] font-black uppercase tracking-tightest text-brand-light leading-none mb-5">
              {siteConfig.about.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-brand-red">{siteConfig.about.title.split(' ').pop()}</span>
            </h2>

            <p className="text-[13px] md:text-[14px] text-brand-muted leading-[1.75] mb-3">
              {siteConfig.about.description}
            </p>
            <p className="text-[12px] md:text-[13px] text-brand-gray leading-[1.75] mb-8">
              {siteConfig.about.story}
            </p>

            {/* Address */}
            <div className="border border-white/[0.07] border-l-[3px] border-l-brand-red pl-4 md:pl-5 pr-4 py-4 md:py-5 flex flex-col gap-3">
              <p className="text-[9px] font-bold text-brand-muted uppercase tracking-[0.4em] mb-1">Visit Us</p>
              <div className="flex items-start gap-3">
                <span className="text-brand-red mt-[2px] text-sm">📍</span>
                <span className="text-[12px] font-semibold text-brand-light leading-[1.55]">{siteConfig.business.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-red text-sm">📞</span>
                <a href={`tel:${siteConfig.business.phone}`} className="text-[12px] font-semibold text-brand-light hover:text-brand-red transition-colors">
                  {siteConfig.business.phone}
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
