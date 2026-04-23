import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLdScripts } from '@/components/seo/JsonLdScripts';
import { siteConfig } from '@/config/site.config';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  title: 'Screen Printing San Francisco | Custom Apparel | Calacas Prints',
  description: 'Professional screen printing and custom apparel in San Francisco. Custom t-shirts, hoodies, caps & merch. Fast turnaround, quality guaranteed. Est. 2012.',
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
  authors: [{ name: 'Calacas Prints' }],
  creator: 'Calacas Prints',
  icons: {
    icon: siteConfig.brand.favicon,
  },
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
    locale: 'es_ES',
    url: 'https://calacasprints.com',
    siteName: 'Calacas Prints',
    title: 'Screen Printing & Custom Apparel | Calacas Prints SF',
    description: 'Professional screen printing and custom apparel in San Francisco. Custom designs, fast production, quality guaranteed.',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Calacas Prints - Screen Printing San Francisco',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Screen Printing & Custom Apparel | Calacas Prints SF',
    description: 'Professional screen printing in San Francisco. Custom t-shirts, hoodies, caps & more.',
    images: ['/images/og-image.webp'],
    creator: '@calacasprints',
  },
  canonical: 'https://calacasprints.com',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <JsonLdScripts />
      </head>
      <body className="bg-black text-gray-100">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
