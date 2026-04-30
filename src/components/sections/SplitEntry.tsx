import React from 'react';
import { siteConfig } from '@/config/site.config';

export function SplitEntry() {
  const phoneNumber = siteConfig.business.phone?.replace(/\D/g, '') || '';

  const paths = [
    {
      num: '01',
      title: 'Send your art',
      description: 'Got a logo or design ready? Send it over and we\'ll print it on any product. Quick quote by text.',
      cta: 'Get a quote via SMS',
      href: `sms:${phoneNumber}?body=${encodeURIComponent("Hi, I have a design ready and want to get a quote for screen printing.")}`,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
      ),
    },
    {
      num: '02',
      title: 'See our work',
      description: 'Browse our featured prints for inspiration. Like something? We\'ll customize it for your brand.',
      cta: 'View portfolio',
      href: '#products',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-ink border-y border-white/[0.07] py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="block w-5 h-px bg-brand-red" />
            <span className="text-[9px] font-bold text-brand-muted uppercase tracking-[0.45em]">Choose your path</span>
            <span className="block w-5 h-px bg-brand-red" />
          </div>
          <h2 className="text-[clamp(32px,5vw,64px)] font-black uppercase tracking-tightest text-brand-light">
            Which path?
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-white/[0.07]">
          {paths.map((path, i) => (
            <a
              key={i}
              href={path.href}
              className={`group flex flex-col gap-4 md:gap-5 p-8 md:p-14 no-underline text-inherit transition-colors duration-300 hover:bg-brand-red/[0.04]
                ${i === 0 ? 'border-b md:border-b-0 md:border-r border-white/[0.07]' : ''}`}
            >
              <span className="text-[10px] font-bold text-brand-muted tracking-[0.35em]">{path.num}</span>

              <div className="w-11 h-11 border border-white/15 flex items-center justify-center text-brand-red transition-all duration-200 group-hover:border-brand-red group-hover:scale-105">
                {path.icon}
              </div>

              <h3 className="text-[28px] md:text-[34px] font-black uppercase tracking-tightest text-brand-light leading-none">
                {path.title}
              </h3>
              <div className="w-8 h-[2px] bg-brand-red" />
              <p className="text-[13px] md:text-[14px] text-brand-gray leading-[1.7] max-w-[300px]">
                {path.description}
              </p>

              <div className="mt-2 md:mt-auto flex items-center gap-3 text-[10px] font-black text-brand-light uppercase tracking-[0.2em] transition-all duration-200 group-hover:gap-5 group-hover:text-brand-red">
                {path.cta} <span>→</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
