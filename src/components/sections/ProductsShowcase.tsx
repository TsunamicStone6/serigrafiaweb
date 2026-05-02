'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site.config';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function ProductsShowcase() {
  const phoneNumber = siteConfig.business.phone?.replace(/\D/g, '') || '';
  const smsLink = `sms:${phoneNumber}?body=${encodeURIComponent("Hi, I saw your work and I'm interested in a custom screen printing order.")}`;
  
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + siteConfig.portfolio.length) % siteConfig.portfolio.length);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % siteConfig.portfolio.length);
  };

  return (
    <section id="products" className="bg-ink py-16 md:py-24 border-y border-white/[0.07]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8 md:mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-5 h-px bg-brand-red" />
              <span className="text-[9px] font-bold text-brand-muted uppercase tracking-[0.45em]">Our work</span>
            </div>
            <h2 className="text-[clamp(28px,4.5vw,62px)] font-black uppercase tracking-tightest text-brand-light">
              Featured designs
            </h2>
          </div>
          <p className="text-[12px] md:text-[13px] text-brand-gray md:max-w-[240px] md:text-right leading-[1.65]">
            Real prints. Real clients. Click to view details.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {siteConfig.portfolio.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              className="group relative bg-card overflow-hidden block aspect-square cursor-pointer border border-transparent hover:border-brand-red transition-colors"
            >
              <Image
                src={item.image}
                alt={`Calacas Prints – ${item.title} – Custom screen printing San Francisco`}
                fill
                sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                className="object-contain p-3 brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
                quality={85}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/60 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[10px] font-black text-white uppercase tracking-[0.2em] border border-white/60 px-4 py-2">
                  View →
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Single CTA */}
        <div className="mt-8 md:mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/[0.07] bg-card px-6 md:px-10 py-6 md:py-7">
          <div>
            <p className="text-[15px] md:text-[17px] font-black uppercase text-brand-light">Like what you see?</p>
            <p className="text-[12px] text-brand-gray mt-1">Send us a text and we&apos;ll get your order started.</p>
          </div>
          <a
            href={smsLink}
            className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white text-[11px] font-black uppercase tracking-[0.18em] hover:bg-brand-hover transition-colors flex-shrink-0"
          >
            Get a quote ↗
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 bg-ink/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedIndex(null)}
        >
          <div 
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center animate-in scale-95 w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={siteConfig.portfolio[selectedIndex].image}
              alt={`Calacas Prints – ${siteConfig.portfolio[selectedIndex].title} – Custom screen printing San Francisco`}
              width={800}
              height={1000}
              className="object-contain w-full h-full max-h-[85vh] drop-shadow-2xl"
              priority
            />

            {/* Left Arrow */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-brand-red hover:bg-brand-hover transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-brand-red hover:bg-brand-hover transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-brand-red hover:bg-brand-hover transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-ink/80 px-3 py-1 rounded text-[12px] text-brand-light font-bold">
              {selectedIndex + 1} / {siteConfig.portfolio.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
