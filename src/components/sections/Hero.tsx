import Image from 'next/image'

type HeroProps = {
  tagline: string
  description: string
  phone: string
  stats: Array<{ label: string; value: string }>
}

export function Hero({ tagline, description, phone, stats }: HeroProps) {
  const phoneNumber = phone?.replace(/\D/g, '') || ''

  // Divide el tagline en partes para el diseño editorial
  const words = tagline.split(' ')
  const firstHalf = words.slice(0, Math.ceil(words.length / 2)).join(' ')
  const secondHalf = words.slice(Math.ceil(words.length / 2)).join(' ')

  return (
    <section id="hero" className="bg-ink min-h-[90vh] flex flex-col justify-center border-b border-white/[0.07]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-20 w-full">

        {/* Label */}
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="block w-6 md:w-8 h-px bg-brand-red" />
          <span className="text-[9px] md:text-[10px] font-bold text-brand-muted uppercase tracking-[0.4em]">
            Custom Screen Printing · San Francisco · Since 2012
          </span>
        </div>

        {/* ── MOBILE layout ── */}
        <div className="md:hidden flex flex-col items-center text-center mb-10 gap-6">
          <h1 className="text-[clamp(48px,14vw,72px)] font-black leading-[0.88] uppercase tracking-tightest text-brand-light">
            Print what<br />
            <span className="text-brand-red">defines</span><br />
            your brand.
          </h1>

          <Image
            src="/images/portfolio/calacas-screen-print-tee-01.webp"
            alt="Calacas Prints – Custom screen printed t-shirt San Francisco"
            className="w-[200px] aspect-[3/4] object-contain"
            width={200}
            height={267}
            priority
            sizes="200px"
          />

          <p className="text-[14px] text-brand-muted leading-[1.7] font-medium max-w-[320px]">
            {description}
          </p>

          <div className="flex flex-col w-full gap-3 max-w-[320px]">
            <a
              href={`sms:${phoneNumber}?body=${encodeURIComponent("Hi, I'm interested in getting a quote for custom screen printing. Can you help me?")}`}
              className="flex items-center justify-center gap-2 w-full py-4 bg-brand-red text-white text-[11px] font-black uppercase tracking-[0.18em] hover:bg-brand-hover transition-colors"
            >
              Get a quote ↗
            </a>
            <a
              href="#products"
              className="flex items-center justify-center gap-2 w-full py-4 bg-transparent text-brand-light text-[11px] font-black uppercase tracking-[0.18em] border border-white/20 hover:border-white/50 transition-colors"
            >
              View designs
            </a>
          </div>

          {/* Stats — mobile */}
          <div className="flex gap-10 pt-2 border-t border-white/[0.07] w-full justify-center">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-[36px] font-black text-brand-red leading-none">{stat.value}</div>
                <div className="text-[8px] font-bold text-brand-gray uppercase tracking-[0.2em] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP layout ── */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-6 mb-16">
          <h1 className="text-[clamp(52px,8vw,108px)] font-black leading-[0.88] uppercase tracking-tightest text-brand-light text-right">
            {firstHalf}
          </h1>

          <Image
            src="/images/portfolio/calacas-screen-print-tee-01.webp"
            alt="Calacas Prints – Custom screen printed t-shirt San Francisco"
            className="w-[clamp(180px,20vw,290px)] aspect-[3/4] object-contain mx-auto flex-shrink-0"
            width={290}
            height={387}
            priority
            sizes="(max-width: 768px) 0px, 20vw"
          />

          <h1 className="text-[clamp(52px,8vw,108px)] font-black leading-[0.88] uppercase tracking-tightest text-brand-light">
            <span className="text-brand-red">defines</span><br />{secondHalf}
          </h1>
        </div>

        {/* ── DESKTOP bottom row ── */}
        <div className="hidden md:flex items-end justify-between gap-10">
          <div className="max-w-[420px]">
            <p className="text-[15px] text-brand-muted leading-[1.7] mb-8 font-medium">
              {description}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`sms:${phoneNumber}?body=${encodeURIComponent("Hi, I'm interested in getting a quote for custom screen printing. Can you help me?")}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-red text-white text-[11px] font-black uppercase tracking-[0.18em] hover:bg-brand-hover transition-colors"
              >
                Get a quote ↗
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-brand-light text-[11px] font-black uppercase tracking-[0.18em] border border-white/20 hover:border-white/60 transition-colors"
              >
                View designs
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6 text-right">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-[42px] font-black text-brand-red leading-none">{stat.value}</div>
                <div className="text-[9px] font-bold text-brand-gray uppercase tracking-[0.25em] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
