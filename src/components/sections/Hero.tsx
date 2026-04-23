/**
 * Hero Section
 * Responsibility: Hero banner with CTA
 * Principle: Single Responsibility - hero layout only
 */

import React from 'react';
import { Container } from '@/components/common/Container';
import { siteConfig } from '@/config/site.config';

export function Hero() {
  const phoneNumber = siteConfig.business.phone?.replace(/\D/g, '') || '';

  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-black via-black to-gray-950 text-white py-24 md:py-40 border-b-4 border-red-600"
    >
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase">{siteConfig.business.tagline}</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 font-semibold leading-relaxed">{siteConfig.business.description}</p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center">
            <a
              href={`sms:${phoneNumber}?body=${encodeURIComponent('Hi, I\'m interested in getting a quote for custom screen printing. Can you help me?')}`}
            >
              <button className="rounded-sm px-8 py-4 bg-red-600 text-white font-black hover:bg-red-500 transition-all transform hover:scale-105 active:scale-95 uppercase text-lg tracking-widest border-2 border-red-600">
                Get a quote
              </button>
            </a>
            <a href="#products">
              <button className="rounded-sm px-8 py-4 bg-transparent text-white font-black hover:bg-white hover:text-black transition-all transform hover:scale-105 active:scale-95 uppercase text-lg tracking-widest border-2 border-white">
                View designs
              </button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
