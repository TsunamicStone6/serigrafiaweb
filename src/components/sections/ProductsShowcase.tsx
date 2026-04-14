/**
 * ProductsShowcase Section
 * Responsibility: Display products with direct contact CTA
 * Principle: Single Responsibility - products showcase with WhatsApp integration
 */

import React from 'react';
import { Container } from '@/components/common/Container';
import { siteConfig } from '@/config/site.config';

export function ProductsShowcase() {
  const getWhatsAppLink = (productTitle: string) => {
    const message = `Hola, me interesa el producto: ${productTitle}. ¿Puedes enviarme más información?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = siteConfig.business.whatsapp.replace(/\D/g, '');
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  };

  return (
    <section id="products" className="py-24 bg-black border-b-4 border-red-600">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">Featured designs</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-semibold">
            Inspiration ready. Inquire, customize, or order your version.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.portfolio.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden bg-black border-3 border-gray-700 hover:border-red-600 transition-colors flex flex-col"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-900 h-56 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 bg-gradient-to-b from-gray-900 to-black flex-grow flex flex-col">
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-black uppercase tracking-wider mb-3 w-fit">
                  {item.category}
                </span>
                <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">{item.title}</h3>
                <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6 flex-grow">{item.description}</p>

                {/* WhatsApp CTA Button */}
                <a
                  href={getWhatsAppLink(item.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <button className="w-full px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-black text-sm uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 border-2 border-red-600">
                    Ask on WhatsApp
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
