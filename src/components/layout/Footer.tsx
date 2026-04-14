/**
 * Footer Component
 * Responsibility: Footer content and links
 * Principle: Single Responsibility - footer layout only
 */

import React from 'react';
import { Container } from '@/components/common/Container';
import { siteConfig } from '@/config/site.config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 border-t-4 border-yellow-400">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{siteConfig.brand.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">{siteConfig.business.description}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Contacto</h3>
            <ul className="space-y-3 text-gray-400 text-sm font-medium">
              <li>
                <a href={`tel:${siteConfig.business.phone}`} className="hover:text-yellow-400 transition-colors">
                  {siteConfig.business.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.business.email}`} className="hover:text-yellow-400 transition-colors">
                  {siteConfig.business.email}
                </a>
              </li>
              <li>{siteConfig.business.address}</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Síguenos</h3>
            <div className="flex gap-6">
              {Object.entries(siteConfig.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors font-black text-lg capitalize"
                >
                  {platform.charAt(0).toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-wide">
            © {currentYear} {siteConfig.brand.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
