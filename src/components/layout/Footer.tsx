type FooterProps = {
  brandName: string
  description: string
  phone: string
  email: string
  address: string
  instagram: string
  facebook: string
  twitter: string
}

const IconInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const IconFacebook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
)

const IconTwitter = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
)

export function Footer({ brandName, description, phone, email, address, instagram, facebook, twitter }: FooterProps) {
  const year = new Date().getFullYear()

  const socials = [
    { icon: <IconInstagram />, href: instagram, label: 'Instagram' },
    { icon: <IconFacebook />,  href: facebook,  label: 'Facebook'  },
    { icon: <IconTwitter />,   href: twitter,   label: 'Twitter'   },
  ]

  return (
    <footer className="bg-surface border-t-[3px] border-brand-red pt-10 md:pt-14 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-8 md:gap-12 mb-10 md:mb-12">

          {/* Brand */}
          <div>
            <p className="text-[17px] font-black uppercase tracking-[0.08em] text-brand-light mb-3">
              {brandName}
            </p>
            <p className="text-[12px] text-brand-gray leading-[1.7] max-w-[260px]">
              {description}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold text-brand-light uppercase tracking-[0.35em] mb-4">Contact</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href={`tel:${phone}`} className="text-[12px] text-brand-gray hover:text-brand-red transition-colors">
                  {phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="text-[12px] text-brand-gray hover:text-brand-red transition-colors">
                  {email}
                </a>
              </li>
              <li className="text-[12px] text-brand-gray">{address}</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[10px] font-bold text-brand-light uppercase tracking-[0.35em] mb-4">Follow us</h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 md:w-9 md:h-9 border border-white/10 flex items-center justify-center text-brand-gray hover:border-brand-red hover:text-brand-red transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[10px] text-brand-gray uppercase tracking-[0.2em]">
            © {year} {brandName}. All rights reserved.
          </p>
          <p className="text-[10px] text-brand-gray uppercase tracking-[0.2em]">
            Screen Printing Since 2012 · SF
          </p>
        </div>
      </div>
    </footer>
  )
}
