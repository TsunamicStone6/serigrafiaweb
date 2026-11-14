'use client'

import { useEffect, useState, type AnchorHTMLAttributes } from 'react'

type SmsLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  /** El enlace sms: que se usa en celulares / tablets */
  href: string
  /** A dónde lleva el clic en computadoras (que no pueden abrir sms:) */
  fallbackHref?: string
}

/**
 * Un enlace sms: solo funciona en dispositivos táctiles. En escritorio el
 * mismo botón lleva a la sección de contacto, donde se ve el número y el correo.
 */
export function SmsLink({ href, fallbackHref = '#contact', children, ...rest }: SmsLinkProps) {
  const [canText, setCanText] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(hover: none) and (pointer: coarse)')
    const update = () => setCanText(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <a href={canText ? href : fallbackHref} {...rest}>
      {children}
    </a>
  )
}
