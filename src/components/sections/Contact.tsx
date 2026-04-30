import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export function Contact() {
  const phoneNumber = siteConfig.business.phone?.replace(/\D/g, '') || '';
  const smsBody = encodeURIComponent("Hi, I'd like to know more about your screen printing services.");

  const methods = [
    {
      icon: <Phone className="w-9 h-9" />,
      title: 'Call',
      value: siteConfig.business.phone,
      href: `tel:${siteConfig.business.phone}`,
    },
    {
      icon: <Mail className="w-9 h-9" />,
      title: 'Email',
      value: siteConfig.business.email,
      href: `mailto:${siteConfig.business.email}`,
    },
    {
      icon: <MessageCircle className="w-9 h-9" />,
      title: 'SMS',
      value: 'Send text',
      href: `sms:${phoneNumber}?body=${smsBody}`,
    },
  ];

  return (
    <section id="contact" className="bg-ink py-16 md:py-24 border-t-[3px] border-brand-red">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">

          <h2 className="text-[clamp(36px,7vw,96px)] font-black uppercase tracking-tightest text-brand-light leading-none">
            Get in touch
          </h2>
          <div className="w-14 h-[3px] bg-brand-red mx-auto my-4 md:my-5" />
          <p className="text-[13px] md:text-[15px] text-brand-gray font-medium">
            Let&apos;s turn your vision into epic prints
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.07] mb-6 md:mb-10">
          {methods.map((m, i) => (
            <a
              key={i}
              href={m.href}
              className="group card-line-bottom bg-ink hover:bg-card transition-colors duration-300 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-3 p-6 md:p-10 no-underline text-inherit"
            >
              <div className="text-brand-red transition-transform duration-200 group-hover:scale-110 w-fit flex-shrink-0">
                <div className="w-8 h-8 md:w-9 md:h-9">{m.icon}</div>
              </div>
              <div>
                <h3 className="text-[15px] md:text-[18px] font-black uppercase text-brand-light">{m.title}</h3>
                <p className="text-[11px] md:text-[12px] font-bold text-brand-light break-all mt-0.5">{m.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Big CTA */}
        <div className="flex justify-center">
          <a
            href={`sms:${phoneNumber}?body=${smsBody}`}
            className="w-full md:w-auto flex items-center justify-center gap-3 px-8 md:px-14 py-4 md:py-5 bg-brand-red text-white text-[11px] md:text-[13px] font-black uppercase tracking-[0.2em] hover:bg-brand-hover transition-colors"
          >
            Send us a text ↗
          </a>
        </div>

      </div>
    </section>
  );
}
