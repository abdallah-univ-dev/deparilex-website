import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import CookieBanner from '@/components/CookieBanner'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Depari'Lex — Conseil Juridique en Droit des Affaires",
    template: "%s | Depari'Lex",
  },
  description: "Cabinet de conseil juridique spécialisé en droit des affaires et de l'entreprise. Information, analyse, rédaction et accompagnement juridique pour entrepreneurs et dirigeants à Bordeaux.",
  keywords: ['conseil juridique', 'droit des affaires', 'Bordeaux', 'Talence', 'juriste', 'entreprise', 'contrat', 'accompagnement juridique'],
  authors: [{ name: 'Halimé BRAHIM MAHAMAT' }],
  metadataBase: new URL('https://deparilex.fr'),
  openGraph: {
    title: "Depari'Lex — Conseil Juridique en Droit des Affaires",
    description: "Conseil stratégique en droit des affaires pour entrepreneurs et dirigeants. Information, analyse, rédaction et accompagnement en droit des affaires à Bordeaux.",
    url: 'https://deparilex.fr',
    siteName: "Depari'Lex",
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Depari'Lex — Conseil Juridique",
    description: "Conseil juridique expert pour entrepreneurs et dirigeants en droit des affaires à Bordeaux.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <JsonLd />
        <Navbar />
        {children}
        <CookieBanner />
        <Footer />
      </body>
    </html>
  )
}
