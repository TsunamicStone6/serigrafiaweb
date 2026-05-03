import dynamic from 'next/dynamic';
import { Hero }       from '@/components/sections/Hero';
import { SplitEntry } from '@/components/sections/SplitEntry';
import { About }      from '@/components/sections/About';
import { Contact }    from '@/components/sections/Contact';

const Services = dynamic(
  () => import('@/components/sections/Services').then(m => ({ default: m.Services })),
  { ssr: true, loading: () => <div className="min-h-[40vh] bg-ink" /> }
);

const ProductsShowcase = dynamic(
  () => import('@/components/sections/ProductsShowcase').then(m => ({ default: m.ProductsShowcase })),
  { ssr: true, loading: () => <div className="min-h-[40vh] bg-ink" /> }
);

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SplitEntry />
      <ProductsShowcase />
      <About />
      <Contact />
    </>
  );
}
