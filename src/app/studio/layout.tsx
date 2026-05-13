// Studio tiene su propio layout sin Header/Footer del sitio principal
'use client'

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
