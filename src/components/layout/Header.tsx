/**
 * Header Component
 * Responsibility: Navigation and branding
 * Principle: Single Responsibility - header layout only
 * Design: Premium, bold streetwear aesthetic matching Hero section
 */

'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { siteConfig } from '@/config/site.config';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-b from-black to-gray-950 border-b-4 border-red-600">
      <Container className="flex items-center justify-between py-5">
        {/* Logo - Enhanced Prominence */}
        <div className="flex items-center gap-4 flex-shrink-0 group hover:opacity-90 transition-opacity duration-200">
          <img
            src={siteConfig.brand.logo}
            alt={siteConfig.brand.name}
            className="w-24 h-24 drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-200"
          />
          <h1 className="text-3xl font-black text-white tracking-tightest uppercase group-hover:text-red-600 transition-colors duration-200">{siteConfig.brand.name}</h1>
        </div>

        {/* Desktop Navigation - Improved Typography */}
        <nav className="hidden md:flex gap-12">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-black text-white text-sm uppercase tracking-wider relative group after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button - Red Accent */}
        <a
          href={`https://wa.me/${siteConfig.business.whatsapp.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-8 py-4 bg-red-600 text-white font-black hover:bg-red-500 transition-all transform hover:scale-105 active:scale-95 uppercase text-sm tracking-widest border-2 border-red-600"
        >
          Contact
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-red-600 font-black hover:scale-110 transition-transform duration-200"
        >
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-gray-950 to-black border-t-4 border-red-600">
          <Container className="py-6 space-y-4">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block font-black text-white hover:text-red-600 transition-colors duration-200 uppercase text-sm tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${siteConfig.business.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-8 py-4 bg-red-600 text-white font-black uppercase text-sm tracking-widest hover:bg-red-500 transition-all transform hover:scale-105 active:scale-95 border-2 border-red-600"
            >
              Contact
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
