import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const _dmSans = DM_Sans({ subsets: ["latin", "latin-ext"], weight: ["400", "500", "600", "700"] });
const _playfair = Playfair_Display({ subsets: ["latin", "latin-ext"], weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: 'Fizjo z Natury | Magdalena Batruch-Skoczypiec',
  description: 'Profesjonalna fizjoterapia w domu pacjenta. Diagnostyka, terapia manualna, terapia czaszkowo-krzyżowa, masaż Breussa i wiele więcej.',
  generator: 'v0.app',
  keywords: ['fizjoterapia', 'terapia manualna', 'masaż', 'rehabilitacja', 'fizjoterapeuta', 'fizjoterapia domowa'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
