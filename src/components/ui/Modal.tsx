/**
 * Modal Component
 * Responsibility: Display images in fullscreen
 * Principle: Single Responsibility - modal lightbox only
 * Design: Bold streetwear aesthetic for Calacas Prints
 */

'use client';

import React from 'react';
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
        <img src={image} alt={title} className="h-auto max-h-[70vh] w-auto" />

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
