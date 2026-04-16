/**
 * Header Component
 * Responsibility: Navigation and branding
 * Principle: Single Responsibility - header layout only
 */

'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { siteConfig } from '@/config/site.config';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-black border-b-2 border-yellow-400">
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <img
            src={siteConfig.brand.logo}
            alt={siteConfig.brand.name}
            className="w-20 h-20 drop-shadow-lg"
          />
          <h1 className="text-2xl font-black text-white tracking-tighter uppercase">{siteConfig.brand.name}</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-black text-white hover:text-yellow-400 transition-colors text-sm uppercase tracking-wider"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href={`https://wa.me/${siteConfig.business.whatsapp.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-5 py-3 bg-yellow-400 text-black font-black hover:bg-yellow-300 transition-colors uppercase text-sm tracking-widest border-2 border-yellow-400"
        >
          Contact
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-yellow-400 font-black hover:scale-110 transition-transform"
        >
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t-2 border-yellow-400">
          <Container className="py-4 space-y-3">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block font-black text-white hover:text-yellow-400 uppercase text-sm tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${siteConfig.business.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-4 py-2 bg-yellow-400 text-black font-black uppercase"
            >
              Contactar
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
