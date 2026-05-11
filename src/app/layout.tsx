import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { JsonLdScripts } from '@/components/seo/JsonLdScripts'
import './globals.css'

// next/font carga Inter sin bloquear el render (zero layout shift)
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0D0D0D',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://calacasprints.com'),
  title: 'Screen Printing San Francisco | Custom Apparel | Calacas Prints',
  description:
    'Professional screen printing and custom apparel in San Francisco. Custom t-shirts, hoodies, caps & merch. Fast turnaround, quality guaranteed. Est. 2012.',
  keywords: [
    'screen printing san francisco',
    'custom apparel printing',
    'serigrafía',
    'custom t-shirts',
    'print shop mission district',
    'screen printing services',
    'custom hoodies',
    'screen print caps',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  authors: [{ name: 'Calacas Prints' }],
  creator: 'Calacas Prints',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://calacasprints.com',
    siteName: 'Calacas Prints',
    title: 'Screen Printing & Custom Apparel | Calacas Prints SF',
    description: 'Professional screen printing and custom apparel in San Francisco.',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'Calacas Prints' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Screen Printing & Custom Apparel | Calacas Prints SF',
    description: 'Professional screen printing in San Francisco.',
    images: ['/images/og-image.webp'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Preload LCP image para móvil y desktop */}
        <link
          rel="preload"
          as="image"
          href="/images/portfolio/calacas-screen-print-tee-01.webp"
          fetchPriority="high"
        />
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <JsonLdScripts />
      </head>
      <body className="bg-ink text-brand-light font-sans">{children}</body>
    </html>
  )
}
