'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

type NavItem = { label: string; href: string }

type HeaderProps = {
  phone: string
  navigation: NavItem[]
  logo: string
  brandName: string
}

export function Header({ phone, navigation, logo, brandName }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const phoneNumber = phone?.replace(/\D/g, '') || ''

  return (
    <header className="sticky top-0 z-50 bg-[#0D0D0D] border-b border-white/[0.07]">
      {/* Top accent line */}
      <div className="h-[3px] bg-brand-red w-full" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between h-[70px] md:h-[76px]">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3.5 group no-underline flex-shrink-0">
          <div className="relative w-[52px] h-[52px] md:w-[58px] md:h-[58px] flex-shrink-0 rounded-full overflow-hidden ring-1 ring-white/10 group-hover:ring-brand-red transition-all duration-300">
            <Image src={logo} alt={brandName} fill className="object-cover" priority />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[16px] md:text-[18px] font-black text-brand-light uppercase tracking-[0.08em] group-hover:text-brand-red transition-colors duration-200">
              Calacas
            </span>
            <span className="text-[9px] font-bold text-brand-muted uppercase tracking-[0.3em] mt-[2px]">
              Screen Printing
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[10px] font-bold text-brand-gray uppercase tracking-[0.18em] hover:text-brand-light transition-colors duration-200 relative
                after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-brand-red after:transition-all after:duration-300
                hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex flex-col items-end leading-none">
            <span className="text-[9px] font-bold text-brand-gray uppercase tracking-[0.25em]">Mission District</span>
            <span className="text-[9px] font-semibold text-brand-gray uppercase tracking-[0.15em] mt-[3px]">San Francisco, CA</span>
          </div>
          <div className="w-px h-7 bg-white/[0.1]" />
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2 px-5 py-2.5 bg-brand-red text-white text-[10px] font-black uppercase tracking-[0.18em] hover:bg-brand-hover transition-colors whitespace-nowrap"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-brand-light p-1.5 hover:text-brand-red transition-colors"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface border-t border-white/[0.07]">
          <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-col gap-1">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[13px] font-black text-brand-light uppercase tracking-[0.15em] hover:text-brand-red transition-colors py-3 border-b border-white/[0.05] last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${phone}`}
              className="mt-4 flex items-center justify-center gap-2 px-6 py-4 bg-brand-red text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-brand-hover transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              {phone}
            </a>
            <a
              href={`sms:${phoneNumber}?body=${encodeURIComponent("Hi, I'm interested in your screen printing services.")}`}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-white/15 text-brand-light text-[11px] font-black uppercase tracking-[0.2em] hover:border-brand-red transition-colors"
            >
              Send SMS
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
