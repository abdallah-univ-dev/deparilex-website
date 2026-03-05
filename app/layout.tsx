import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: "Depari'Lex — Conseil Juridique en Droit des Affaires",
  description: "Cabinet de conseil juridique spécialisé en droit des affaires et de l'entreprise. Information, analyse, rédaction et accompagnement juridique pour entrepreneurs et dirigeants.",
  keywords: "conseil juridique, droit des affaires, Bordeaux, Talence, juriste, entreprise",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
