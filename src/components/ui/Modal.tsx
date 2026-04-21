/**
 * Modal Component
 * Responsibility: Display images in fullscreen
 * Principle: Single Responsibility - modal lightbox only
 * Design: Bold streetwear aesthetic for Calacas Prints
 */

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  image: string;
  title: string;
  currentIndex: number;
  total: number;
}

export function Modal({
  isOpen,
  onClose,
  onNext,
  onPrev,
  image,
  title,
  currentIndex,
  total,
}: ModalProps) {
  const [imageSize, setImageSize] = useState({ width: 800, height: 600 });

  useEffect(() => {
    if (!isOpen) return;
    
    const img = new window.Image();
    img.onload = () => {
      setImageSize({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.src = image;
  }, [image, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4"
      onClick={onClose}
    >
      <div className="relative max-h-[90vh] max-w-[90vw] flex flex-col" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 md:top-0 right-0 md:right-0 text-white hover:text-red-600 transition-colors z-10 p-2"
          aria-label="Close"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Image */}
        <div className="relative w-full h-auto max-h-[70vh] flex items-center justify-center bg-black">
          <Image
            src={image}
            alt={title}
            width={imageSize.width}
            height={imageSize.height}
            priority={false}
            quality={85}
            className="h-auto max-h-[70vh] w-auto object-contain"
            sizes="(max-width: 768px) 90vw, 80vw"
          />
        </div>

        {/* Navigation and Info */}
        <div className="bg-black border-t-4 border-red-600 p-6 flex items-center justify-between gap-4">
          <button
            onClick={onPrev}
            className="bg-red-600 hover:bg-red-500 text-white p-2 border-2 border-red-600 hover:border-red-500 transition-all transform hover:scale-110 active:scale-95"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="text-center flex-grow">
            <p className="text-white font-black uppercase tracking-tight mb-2">{title}</p>
            <p className="text-red-600 font-black text-sm">{currentIndex + 1} / {total}</p>
          </div>

          <button
            onClick={onNext}
            className="bg-red-600 hover:bg-red-500 text-white p-2 border-2 border-red-600 hover:border-red-500 transition-all transform hover:scale-110 active:scale-95"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
