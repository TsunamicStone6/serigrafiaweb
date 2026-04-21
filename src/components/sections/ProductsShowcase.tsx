/**
 * ProductsShowcase Section
 * Responsibility: Display products with direct contact CTA
 * Principle: Single Responsibility - products showcase with WhatsApp integration
 * Design: Premium products display with hover overlays and strong visuals
 */

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/common/Container';
import { siteConfig } from '@/config/site.config';

export function ProductsShowcase() {
  const getWhatsAppLink = (productTitle: string) => {
    const message = `Hi, I'm interested in the product: ${productTitle}. Can you send me more information?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = siteConfig.business.whatsapp.replace(/\D/g, '');
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  };

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-black via-gray-950 to-black border-b-4 border-red-600">
      <Container>
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">Featured designs</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-semibold">
            Inspiration ready. Inquire, customize, or order your version.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.portfolio.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden bg-gradient-to-br from-gray-800 to-black border-2 border-gray-700 hover:border-red-600 transition-all duration-300 flex flex-col h-full hover:shadow-2xl hover:shadow-red-600/40"
            >
              {/* Premium Border Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Image Container with Enhanced Overlay */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black flex-1 flex items-center justify-center min-h-80">
                {/* Base Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-black/50" />
                
                {/* Image with Enhanced Effects */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="relative object-cover group-hover:scale-110 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                  loading="lazy"
                  quality={75}
                  placeholder="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23222'/%3E%3C/svg%3E"
                />
                
                {/* Multi-layer Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                
                {/* Subtle Corner Accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Container */}
              <div className="p-5 bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-sm flex flex-col justify-between relative z-10">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-black uppercase tracking-wider hover:bg-red-500 transition-colors duration-200">
                    {item.category}
                  </span>
                </div>

                {/* Title - More Prominent */}
                <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight group-hover:text-red-400 transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description - Refined */}
                <p className="text-gray-300 text-sm font-medium leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* WhatsApp CTA Button - Enhanced */}
                <a
                  href={getWhatsAppLink(item.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <button className="w-full px-4 py-3 bg-red-600 hover:bg-red-500 text-white font-black text-xs uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 border-2 border-red-600 hover:border-red-400 shadow-lg shadow-red-600/50 group-hover:shadow-red-600/80">
                    Ask on WhatsApp
                  </button>
                </a>
              </div>

              {/* Dynamic Border Effect on Hover */}
              <div className="absolute inset-0 border-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
