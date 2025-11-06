import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NeuroTwin - Create Your Digital Persona',
  description: 'Experience the future of AI-powered digital personas. Create, interact, and explore digital versions of anyone.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
