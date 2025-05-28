import './globals.css'

export const metadata = {
  title: 'SA Luxe Events - Transforming Moments into Memories',
  description: 'Professional event planning and luxury décor services for all your special celebrations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
