/**
 * Home Page
 * Responsibility: Compose and render all sections
 * Principle: Single Responsibility - page composition only
 */

import dynamic from 'next/dynamic';
import { Edit3, ShoppingCart } from 'lucide-react';
import { Hero } from '@/components/sections/Hero';
import { SplitEntry } from '@/components/sections/SplitEntry';
import { Contact } from '@/components/sections/Contact';
import { siteConfig } from '@/config/site.config';

// Lazy load heavy components
const Services = dynamic(() => import('@/components/sections/Services').then(mod => ({ default: mod.Services })), {
  ssr: true,
  loading: () => <div className="min-h-screen bg-black" />,
});

const ProductsShowcase = dynamic(() => import('@/components/sections/ProductsShowcase').then(mod => ({ default: mod.ProductsShowcase })), {
  ssr: true,
  loading: () => <div className="min-h-screen bg-black" />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <SplitEntry
        customizePath={{
          title: 'Customize',
          description:
            'Create your own designs with our expert team. Unique and exclusive design for your brand.',
          buttonText: 'Get a quote',
          buttonHref: `https://wa.me/${siteConfig.business.whatsapp.replace(/\D/g, '')}`,
          icon: <Edit3 className="w-16 h-16" />,
        }}
        buyPath={{
          title: 'Buy designs',
          description:
            'Explore our collection of ready-made designs. Fast delivery and competitive prices.',
          buttonText: 'View designs',
          buttonHref: '#products',
          icon: <ShoppingCart className="w-16 h-16" />,
        }}
      />
      <Services />
      <ProductsShowcase />
      <Contact />
    </>
  );
}
