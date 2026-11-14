import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react'
import { CopyCard } from '@/components/common/CopyCard'

type ContactProps = {
  phone: string
  email: string
  address?: string
}

export function Contact({ phone, email, address }: ContactProps) {
  const phoneNumber = phone?.replace(/\D/g, '') || ''
  const smsBody = encodeURIComponent("Hi, I'd like to know more about your screen printing services.")
  const mapsHref = address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
    : undefined

  const cardClass =
    'group card-line-bottom bg-ink hover:bg-card transition-colors duration-300 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-3 p-6 md:p-10 no-underline text-inherit'

  return (
    <section id="contact" className="bg-ink py-16 md:py-24 border-t-[3px] border-brand-red">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-[clamp(36px,7vw,96px)] font-black uppercase tracking-tightest text-brand-light leading-none">
            Get a free quote
          </h2>
          <div className="w-14 h-[3px] bg-brand-red mx-auto my-4 md:my-5" />
          <p className="text-[13px] md:text-[15px] text-brand-gray font-medium">
            Call, email or text us. Let&apos;s turn your vision into epic prints.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.07] mb-6 md:mb-10">
          {/* Celular: llamar · Escritorio: clic copia el número */}
          <a href={`tel:${phone}`} className={`only-touch ${cardClass}`}>
            <div className="text-brand-red transition-transform duration-200 group-hover:scale-110 w-fit flex-shrink-0">
              <Phone className="w-8 h-8 md:w-9 md:h-9" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-[15px] md:text-[18px] font-black uppercase text-brand-light">Call</h3>
              <p className="text-[12px] md:text-[13px] font-bold text-brand-light break-all mt-0.5">{phone}</p>
            </div>
          </a>
          <CopyCard
            text={phone}
            title="Call"
            className={`only-fine ${cardClass}`}
            icon={
              <div className="text-brand-red transition-transform duration-200 group-hover:scale-110 w-fit flex-shrink-0">
                <Phone className="w-8 h-8 md:w-9 md:h-9" aria-hidden="true" />
              </div>
            }
          />

          <a href={`mailto:${email}`} className={cardClass}>
            <div className="text-brand-red transition-transform duration-200 group-hover:scale-110 w-fit flex-shrink-0">
              <Mail className="w-8 h-8 md:w-9 md:h-9" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-[15px] md:text-[18px] font-black uppercase text-brand-light">Email</h3>
              <p className="text-[12px] md:text-[13px] font-bold text-brand-light break-all mt-0.5">{email}</p>
            </div>
          </a>

          {/* Celular: SMS · Escritorio (no puede abrir sms:): cómo llegar */}
          <a href={`sms:${phoneNumber}?body=${smsBody}`} className={`only-touch ${cardClass}`}>
            <div className="text-brand-red transition-transform duration-200 group-hover:scale-110 w-fit flex-shrink-0">
              <MessageCircle className="w-8 h-8 md:w-9 md:h-9" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-[15px] md:text-[18px] font-black uppercase text-brand-light">Text</h3>
              <p className="text-[12px] md:text-[13px] font-bold text-brand-light mt-0.5">Send a text</p>
            </div>
          </a>
          {mapsHref && (
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`only-fine ${cardClass}`}
            >
              <div className="text-brand-red transition-transform duration-200 group-hover:scale-110 w-fit flex-shrink-0">
                <MapPin className="w-8 h-8 md:w-9 md:h-9" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-[15px] md:text-[18px] font-black uppercase text-brand-light">Visit</h3>
                <p className="text-[12px] md:text-[13px] font-bold text-brand-light mt-0.5">{address}</p>
              </div>
            </a>
          )}
        </div>

        {/* Big CTA */}
        <div className="flex justify-center">
          <a
            href={`sms:${phoneNumber}?body=${smsBody}`}
            className="only-touch w-full md:w-auto flex items-center justify-center gap-3 px-8 md:px-14 py-4 md:py-5 bg-brand-red text-white text-[12px] md:text-[13px] font-black uppercase tracking-[0.2em] hover:bg-brand-hover transition-colors"
          >
            Send us a text ↗
          </a>
        </div>

      </div>
    </section>
  )
}
