/**
 * Services Section
 * Responsibility: Display available services with benefits
 * Principle: Single Responsibility - services showcase layout
 * Design: Bold streetwear style for Calacas Prints
 */

import React from 'react';
import { Shirt, Package, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { siteConfig } from '@/config/site.config';

const iconMap: Record<string, React.ReactNode> = {
  apparel: <Shirt className="w-10 h-10" />,
  accessories: <Package className="w-10 h-10" />,
  promotional: <ShoppingBag className="w-10 h-10" />,
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-950 via-black to-gray-950">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">Print with purpose</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-semibold">
            Tees, hoodies, accessories. For your brand, your event, your vision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {siteConfig.services.map((service, index) => {
            const iconKey = service.icon as keyof typeof iconMap;
            return (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 hover:border-red-600 transition-all duration-300 p-8 group">
                {/* Icon */}
                <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform">
                  {iconMap[iconKey] || <Shirt className="w-10 h-10" />}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 font-medium text-sm mb-6">
                  {service.description}
                </p>

                {/* Benefits - Bullet Points */}
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 border-2 border-red-600 p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">Let&apos;s start your project</h3>
          <p className="text-xl text-red-50 mb-8 font-semibold">
            Quote, design, deliver. All in one conversation.
          </p>
          <a
            href={`https://wa.me/${siteConfig.business.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white hover:bg-gray-100 text-black font-black text-lg uppercase tracking-widest border-2 border-white transform hover:scale-105 active:scale-95 transition-all"
          >
            Get quote now
          </a>
        </div>
      </Container>
    </section>
  );
}
