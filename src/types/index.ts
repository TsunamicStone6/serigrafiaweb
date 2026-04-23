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
  address: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface AboutSection {
  title: string;
  description: string;
  story: string;
  image: string;
  founded: number;
  stats: Stat[];
}
