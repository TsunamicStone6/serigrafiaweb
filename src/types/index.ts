/**
 * Type definitions for the application
 * Single Responsibility: type definitions only
 */

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  benefits: string[];
  icon: 'shirt' | 'haticon' | 'bagicon';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
}
