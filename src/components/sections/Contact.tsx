/**
 * Contact Section
 * Responsibility: Contact information and CTA
 * Principle: Single Responsibility - contact layout only
 * Design: Bold streetwear style for Calacas Prints
 */

import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { siteConfig } from '@/config/site.config';

export function Contact() {
  const phoneNumber = siteConfig.business.phone?.replace(/\D/g, '') || '';

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-950 via-black to-black border-t-4 border-red-600">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">Get in touch</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-semibold">
            Let&apos;s turn your vision into epic prints
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Phone */}
          <a href={`tel:${siteConfig.business.phone}`}>
            <div className="rounded-md bg-gradient-to-br from-gray-900 to-black border-3 border-gray-700 p-6 sm:p-8 hover:border-red-600 transition-colors group">
              <Phone className="w-12 h-12 mb-4 text-red-600 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-red-600 transition-colors uppercase">Call</h3>
              <p className="text-red-600 font-black">{siteConfig.business.phone}</p>
            </div>
          </a>

          {/* Email */}
          <a href={`mailto:${siteConfig.business.email}`}>
            <div className="rounded-md bg-gradient-to-br from-gray-900 to-black border-3 border-gray-700 p-6 sm:p-8 hover:border-red-600 transition-colors group">
              <Mail className="w-12 h-12 mb-4 text-red-600 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-red-600 transition-colors uppercase">Email</h3>
              <p className="text-red-600 font-black break-all text-sm">{siteConfig.business.email}</p>
            </div>
          </a>

          {/* SMS */}
        <a href={`sms:${phoneNumber}?body=${encodeURIComponent("Hi, I'd like to know more about your screen printing services.")}`}>
            <div className="rounded-md bg-gradient-to-br from-gray-900 to-black border-3 border-gray-700 p-6 sm:p-8 hover:border-red-600 transition-colors group">
              <MessageCircle className="w-12 h-12 mb-4 text-red-600 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-red-600 transition-colors uppercase">SMS</h3>
              <p className="text-red-600 font-black">Send text</p>
            </div>
          </a>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={`sms:${phoneNumber}?body=${encodeURIComponent("Hi, I'd like to know more about your screen printing services.")}`}
          >
            <button className="rounded-sm px-6 sm:px-12 py-4 sm:py-5 bg-red-600 hover:bg-red-500 text-white font-black text-lg sm:text-xl uppercase tracking-widest border-2 border-red-600 transform hover:scale-105 active:scale-95 transition-all">
              Send us a text
            </button>
          </a>
        </div>
      </Container>
    </section>
  );
}
