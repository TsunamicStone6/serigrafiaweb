/**
 * Button Component
 * Responsibility: Reusable button with consistent styling
 * Principle: Interface Segregation - only button-specific props
 * Design: Bold streetwear aesthetic for Calacas Prints
 */

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variantStyles = {
  primary: 'bg-red-600 hover:bg-red-500 text-white border-2 border-red-600 hover:border-red-500',
  secondary: 'bg-yellow-400 hover:bg-yellow-300 text-black border-2 border-yellow-400 hover:border-yellow-300',
  ghost: 'bg-transparent hover:bg-red-600 text-white border-2 border-red-600 hover:border-red-500',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center font-black uppercase tracking-widest transition-all duration-300 transform hover:scale-105 active:scale-95 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
