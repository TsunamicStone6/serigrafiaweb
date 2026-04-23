/**
 * About Section
 * Responsibility: Display company story with image and stats
 * Principle: Single Responsibility - about/history content only
 * Design: Bold streetwear style with Mission District heritage
 */

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/common/Container';
import { siteConfig } from '@/config/site.config';

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-black">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Image with Overlay Badge */}
          <div className="relative order-2 lg:order-1">
            {/* Image Container */}
            <div className="relative overflow-hidden border-4 border-red-600 aspect-square shadow-2xl shadow-red-600/50">
              <Image
                src={siteConfig.about.image}
                alt="Calacas Prints - Mission District Store"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500 brightness-90 hover:brightness-100"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
            </div>

            {/* EST Badge - Repositioned */}
            <div className="absolute -bottom-8 -right-8 bg-red-600 text-white font-black text-center w-32 h-32 flex flex-col items-center justify-center border-4 border-black shadow-2xl hover:scale-110 transition-transform duration-300">
              <span className="text-xs sm:text-sm tracking-widest">EST.</span>
              <span className="text-5xl sm:text-6xl leading-none">{siteConfig.about.founded}</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            {/* Title with Red Accent */}
            <div className="mb-6 lg:mb-8">
              <p className="text-red-600 font-black uppercase text-sm sm:text-base tracking-widest mb-2">Our Story</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
                {siteConfig.about.title.split(' ').slice(0, -1).join(' ')}
                <br />
                <span className="text-red-600">{siteConfig.about.title.split(' ').pop()}</span>
              </h2>
            </div>

            {/* Main Description */}
            <p className="text-base sm:text-lg text-gray-300 font-semibold mb-6 leading-relaxed">
              {siteConfig.about.description}
            </p>

            {/* Story - Secondary */}
            <p className="text-sm sm:text-base text-gray-400 mb-8 leading-relaxed">
              {siteConfig.about.story}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {siteConfig.about.stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 hover:border-red-600 p-5 sm:p-6 transition-all duration-300 group"
                >
                  <div className="text-3xl sm:text-4xl font-black text-red-600 mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-semibold text-xs sm:text-sm uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 border-2 border-red-600 p-6 sm:p-8">
              <p className="text-white text-xs uppercase tracking-widest font-black mb-4">Visit Us</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-1">📍</span>
                  <p className="text-white font-black text-sm sm:text-base">
                    {siteConfig.business.address}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <a 
                    href={`tel:${siteConfig.business.phone}`}
                    className="text-white font-black text-sm sm:text-base hover:underline transition-all"
                  >
                    {siteConfig.business.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
