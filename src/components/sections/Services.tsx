import React from 'react';
import { Shirt, Package, ShoppingBag } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

const iconMap: Record<string, React.ReactNode> = {
  apparel:     <Shirt className="w-8 h-8 md:w-9 md:h-9" />,
  accessories: <Package className="w-8 h-8 md:w-9 md:h-9" />,
  promotional: <ShoppingBag className="w-8 h-8 md:w-9 md:h-9" />,
};

export function Services() {
  const phoneNumber = siteConfig.business.phone?.replace(/\D/g, '') || '';

  return (
    <section id="services" className="bg-ink py-16 md:py-24 border-y border-white/[0.07]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-5 h-px bg-brand-red" />
            <span className="text-[9px] font-bold text-brand-muted uppercase tracking-[0.45em]">What we do</span>
          </div>
          <h2 className="text-[clamp(28px,4.5vw,62px)] font-black uppercase tracking-tightest text-brand-light">
            Print with purpose
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/[0.07]">
          {siteConfig.services.map((service, i) => (
            <div
              key={i}
              className={`group card-line-top flex flex-col gap-4 p-7 md:p-10 transition-colors duration-300 hover:bg-brand-red/[0.03]
                ${i < siteConfig.services.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/[0.07]' : ''}`}
            >
              <div className="text-brand-red transition-transform duration-200 group-hover:scale-110 w-fit">
                {iconMap[service.icon] ?? <Shirt className="w-8 h-8" />}
              </div>
              <h3 className="text-[17px] md:text-[19px] font-black uppercase text-brand-light transition-colors duration-200 group-hover:text-brand-red">
                {service.title}
              </h3>
              <p className="text-[12px] md:text-[13px] text-brand-gray leading-[1.65]">
                {service.description}
              </p>
              <ul className="flex flex-col gap-2.5 md:gap-3 mt-auto pt-2">
                {service.benefits.map((b, j) => (
                  <li key={j} className="flex items-start gap-3 text-[12px] text-brand-light">
                    <span className="block w-[5px] h-[5px] bg-brand-red flex-shrink-0 mt-[5px]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA band */}
        <div className="border border-t-0 border-white/[0.07] bg-card px-7 md:px-10 py-7 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-6">
          <div>
            <h3 className="text-[17px] md:text-[20px] font-black uppercase text-brand-light">Let&apos;s start your project</h3>
            <p className="text-[12px] md:text-[13px] text-brand-gray mt-1">Quote, design, deliver. All in one conversation.</p>
          </div>
          <a
            href={`sms:${phoneNumber}?body=${encodeURIComponent("Hi, I'm interested in starting a project with Calacas Prints. Can you help?")}`}
            className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white text-[11px] font-black uppercase tracking-[0.18em] hover:bg-brand-hover transition-colors flex-shrink-0"
          >
            Get quote now ↗
          </a>
        </div>

      </div>
    </section>
  );
}
