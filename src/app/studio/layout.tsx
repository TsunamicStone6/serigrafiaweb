// Studio tiene su propio layout sin Header/Footer del sitio principal
export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
