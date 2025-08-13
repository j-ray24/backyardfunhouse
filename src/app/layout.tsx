import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Backyard Funhouse | Luxury Outdoor Builds in DFW',
  description: 'Ultra-premium custom basketball courts, pools, trampolines, playhouses, and putting greens for Dallas-Fort Worth luxury homes and estates.',
  keywords: 'DFW luxury backyard, custom home basketball court Dallas, custom pool builder Frisco, luxury outdoor builds, premium backyard design',
  authors: [{ name: 'Backyard Funhouse' }],
  creator: 'Backyard Funhouse',
  publisher: 'Backyard Funhouse',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://backyardfunhouse.com'),
  alternates: {
    canonical: '/',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#0f1115',
  openGraph: {
    title: 'Backyard Funhouse | Luxury Outdoor Builds in DFW',
    description: 'Ultra-premium custom basketball courts, pools, trampolines, playhouses, and putting greens for Dallas-Fort Worth luxury homes and estates.',
    url: 'https://backyardfunhouse.com',
    siteName: 'Backyard Funhouse',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Backyard Funhouse - Luxury Outdoor Builds',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Backyard Funhouse | Luxury Outdoor Builds in DFW',
    description: 'Ultra-premium custom basketball courts, pools, trampolines, playhouses, and putting greens for Dallas-Fort Worth luxury homes and estates.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
