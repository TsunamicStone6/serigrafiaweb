/**
 * SplitEntry Section
 * Responsibility: Present two distinct user paths with CTAs
 * Principle: Single Responsibility - split entry point for conversions
 * Design: Bold, streetwear-inspired visual identity for Calacas Prints
 */

import React from 'react';
import { Container } from '@/components/common/Container';

interface PathOption {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  icon: React.ReactNode;
  highlight?: 'primary' | 'secondary';
}

interface SplitEntryProps {
  customizePath: PathOption;
  buyPath: PathOption;
}

export function SplitEntry({ customizePath, buyPath }: SplitEntryProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-black to-gray-950">
      <Container>
        {/* Section Header - Bold Typography */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tighter">
            Which path?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-semibold">
            Customize or buy. Your choice.
          </p>
        </div>

        {/* Split Paths Grid - Streetwear Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto" style={{ gridAutoRows: '1fr' }}>
          {/* Customize Path - Urban Edge */}
          <div className="group relative">
            {/* Bold border and background */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            
            <div className="relative rounded-md bg-gradient-to-br from-gray-900 to-black border-4 border-red-600 p-10 h-full flex flex-col group-hover:border-red-400 transition-colors duration-300">
              {/* Geometric Icon Container */}
              <div className="mb-8 text-red-600">
                {customizePath.icon}
              </div>

              {/* Title - Bold and Sharp */}
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight uppercase tracking-tight">
                {customizePath.title}
              </h3>

              {/* Accent Line */}
              <div className="w-12 h-1 bg-red-600 mb-6" />

              {/* Description */}
              <p className="text-gray-300 text-lg mb-auto font-medium leading-relaxed">
                {customizePath.description}
              </p>

              {/* CTA Button - Bold Style */}
              <a href={customizePath.buttonHref} className="mt-8 block">
                <button className="rounded-sm w-full bg-red-600 hover:bg-red-500 text-white text-lg font-black py-4 px-6 transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-red-600 hover:border-red-500 uppercase tracking-widest">
                  {customizePath.buttonText}
                </button>
              </a>
            </div>
          </div>

          {/* Buy Path - Same as Customize Path */}
          <div className="group relative">
            {/* Bold border and background */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            
            <div className="relative rounded-md bg-gradient-to-br from-gray-900 to-black border-4 border-red-600 p-10 h-full flex flex-col group-hover:border-red-400 transition-colors duration-300">
              {/* Geometric Icon Container */}
              <div className="mb-8 text-red-600">
                {buyPath.icon}
              </div>

              {/* Title - Bold and Sharp */}
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight uppercase tracking-tight">
                {buyPath.title}
              </h3>

              {/* Accent Line */}
              <div className="w-12 h-1 bg-red-600 mb-6" />

              {/* Description */}
              <p className="text-gray-300 text-lg mb-auto font-medium leading-relaxed">
                {buyPath.description}
              </p>

              {/* CTA Button - Bold Style */}
              <a href={buyPath.buttonHref} className="mt-8 block">
                <button className="rounded-sm w-full bg-red-600 hover:bg-red-500 text-white text-lg font-black py-4 px-6 transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-red-600 hover:border-red-500 uppercase tracking-widest">
                  {buyPath.buttonText}
                </button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
