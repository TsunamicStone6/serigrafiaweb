/**
 * BrandIntro Section
 * Responsibility: Company information and services
 * Principle: Single Responsibility - brand content layout
 * Design: Bold streetwear style for Calacas Prints
 */

import React from 'react';
import { Shirt, Package, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { siteConfig } from '@/config/site.config';

const iconMap: Record<string, React.ReactNode> = {
  shirt: <Shirt className="w-10 h-10" />,
  haticon: <Package className="w-10 h-10" />,
  bagicon: <ShoppingBag className="w-10 h-10" />,
};

export function BrandIntro() {
  const phoneNumber = siteConfig.business.phone?.replace(/\D/g, '') || '';

  return (
    <section id="about" className="py-24 bg-black">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">Nuestros Servicios</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-semibold">
            Soluciones de serigrafía con calidad comprobada y entrega rápida
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {siteConfig.services.map((service, index) => {
            const iconKey = service.icon as keyof typeof iconMap;
            return (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border-3 border-gray-700 hover:border-red-600 transition-all duration-300 p-8 group">
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
        <div className="bg-gradient-to-r from-red-600 to-red-700 border-4 border-red-600 p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">¿Listo para tu proyecto?</h3>
          <p className="text-xl text-red-50 mb-8 font-semibold">
            Contáctanos hoy y recibe una cotización personalizada
          </p>
          <a
            href={`sms:${phoneNumber}?body=${encodeURIComponent("Hi, I'm interested in getting a quote for my project.")}`}
          >
            <button className="px-10 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-lg uppercase tracking-widest border-3 border-yellow-400 transform hover:scale-105 active:scale-95 transition-all">
              Solicitar Cotización
            </button>
          </a>
        </div>

        {/* Company Credibility */}
        <div className="mt-16 bg-gradient-to-br from-blue-950 to-blue-900 border-4 border-blue-600 p-12 text-center">
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Más de 10 años de experiencia</h3>
          <p className="text-xl text-blue-100 mb-6 font-semibold leading-relaxed max-w-3xl mx-auto">
            Somos especialistas en serigrafía con un track record probado en calidad y entrega.
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" />
          <p className="text-lg text-blue-200 font-medium">
            Trabajamos con marcas reconocidas y empresas de todos los tamaños
          </p>
        </div>
      </Container>
    </section>
  );
}
