'use client'

import { useState, type ReactNode } from 'react'

type CopyCardProps = {
  text: string
  title: string
  icon: ReactNode
  className?: string
}

/** Tarjeta de contacto que copia el dato al hacer clic (para escritorio, donde tel: no sirve). */
export function CopyCard({ text, title, icon, className = '' }: CopyCardProps) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const el = document.createElement('textarea')
      el.value = text
      el.setAttribute('readonly', '')
      el.style.position = 'fixed'
      el.style.opacity = '0'
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button type="button" onClick={copy} className={`${className} text-left w-full`} aria-live="polite">
      {icon}
      <div>
        <h3 className="text-[15px] md:text-[18px] font-black uppercase text-brand-light">{title}</h3>
        <p className={`text-[12px] md:text-[13px] font-bold break-all mt-0.5 ${copied ? 'text-brand-red' : 'text-brand-light'}`}>
          {copied ? 'Copied!' : text}
        </p>
      </div>
    </button>
  )
}
