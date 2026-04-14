/**
 * Card Component
 * Responsibility: Container with consistent card styling
 * Principle: Single Responsibility - only card container
 * Design: Bold streetwear aesthetic for Calacas Prints
 */

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-gradient-to-br from-gray-900 to-black border-3 border-gray-700 p-6 ${
        hover ? 'transition-all duration-300 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
