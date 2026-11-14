'use client'

import { useEffect, useState } from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import { SmsLink } from '@/components/common/SmsLink'

type MobileCtaBarProps = {
  phone: string
}

/**
 * Barra fija inferior solo en pantallas chicas: Call + Text for a quote.
 * Aparece al bajar del hero y se oculta cuando la sección Contact ya está a la vista.
 */
export function MobileCtaBar({ phone }: MobileCtaBarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [contactInView, setContactInView] = useState(false)
  const phoneNumber = phone?.replace(/\D/g, '') || ''

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 420)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const contact = document.getElementById('contact')
    if (!contact) return
    const io = new IntersectionObserver(([entry]) => setContactInView(entry.isIntersecting), { threshold: 0.25 })
    io.observe(contact)
    return () => io.disconnect()
  }, [])

  const visible = scrolled && !contactInView

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-40 bg-ink/95 backdrop-blur border-t border-white/10 px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] flex gap-3 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full pointer-events-none'
      }`}
      aria-hidden={!visible}
    >
      <a
        href={`tel:${phoneNumber}`}
        tabIndex={visible ? 0 : -1}
        className="flex-1 min-h-[48px] flex items-center justify-center gap-2 border border-white/25 text-brand-light text-[12px] font-black uppercase tracking-[0.14em] active:bg-white/10"
      >
        <Phone className="w-4 h-4" aria-hidden="true" /> Call
      </a>
      <SmsLink
        href={`sms:${phoneNumber}?body=${encodeURIComponent("Hi, I'm interested in getting a quote for custom screen printing. Can you help me?")}`}
        tabIndex={visible ? 0 : -1}
        className="flex-[1.6] min-h-[48px] flex items-center justify-center gap-2 bg-brand-red text-white text-[12px] font-black uppercase tracking-[0.14em] active:bg-brand-hover"
      >
        <MessageCircle className="w-4 h-4" aria-hidden="true" /> Text for a quote
      </SmsLink>
    </div>
  )
}
