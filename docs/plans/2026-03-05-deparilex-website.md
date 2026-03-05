# Depari'Lex Website — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a complete professional website for Depari'Lex (cabinet de conseil juridique) with 5 pages, contact form via EmailJS, appointment booking via Calendly, and premium animations.

**Architecture:** Next.js 14 App Router with static export. Tailwind CSS for styling. Framer Motion for scroll-triggered animations. No backend — EmailJS handles contact form client-side.

**Tech Stack:** Next.js 14, Tailwind CSS, Framer Motion, EmailJS (`@emailjs/browser`), Google Fonts (Playfair Display + Inter), Vercel deployment.

**Design System:**
- Navy `#0D1B2E` · Gold `#C9A84C` · Off-white `#F8F6F1` · Gray `#4A5568`
- Fonts: Playfair Display (headings) · Inter (body)
- Logo: `/public/logo.png` (copy from `35C42FB9-AE51-4DCE-A5BF-BFCC179CB2CD.png`)

---

### Task 1: Project Bootstrap

**Files:**
- Create: `package.json`, `next.config.js`, `tailwind.config.js`, `tsconfig.json`

**Step 1: Initialize Next.js project**

```bash
cd /Users/thedonzi/Vibecodings/DepariLex
npx create-next-app@14 . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"
```
Expected: Project scaffolded with App Router.

**Step 2: Install dependencies**

```bash
npm install framer-motion @emailjs/browser
npm install -D @types/node
```

**Step 3: Copy logo to public**

```bash
cp "35C42FB9-AE51-4DCE-A5BF-BFCC179CB2CD.png" public/logo.png
```

**Step 4: Update `next.config.js` for static export**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
}
module.exports = nextConfig
```

**Step 5: Verify build works**

```bash
npm run build
```
Expected: Build completes with no errors.

**Step 6: Commit**

```bash
git init
git add .
git commit -m "feat: initialize Next.js 14 project with Tailwind + Framer Motion"
```

---

### Task 2: Design System & Global Styles

**Files:**
- Modify: `app/globals.css`
- Modify: `tailwind.config.ts`
- Create: `app/layout.tsx`

**Step 1: Update `tailwind.config.ts`**

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0D1B2E',
        gold: '#C9A84C',
        'gold-light': '#D4B96A',
        'off-white': '#F8F6F1',
        'text-gray': '#4A5568',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
```

**Step 2: Update `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0D1B2E;
  color: #FFFFFF;
  font-family: 'Inter', sans-serif;
}

::selection {
  background-color: #C9A84C;
  color: #0D1B2E;
}
```

**Step 3: Create `app/layout.tsx`**

```tsx
import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
```

**Step 4: Verify styles apply**

```bash
npm run dev
```
Open `http://localhost:3000` — should show dark navy background.

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: add design system - colors, fonts, global styles"
```

---

### Task 3: Navbar Component

**Files:**
- Create: `components/Navbar.tsx`

**Step 1: Create `components/Navbar.tsx`**

```tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/95 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="Depari'Lex" width={140} height={56} className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white/80 hover:text-gold transition-colors duration-200 font-inter text-sm tracking-wide"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="bg-gold text-navy px-5 py-2 text-sm font-semibold tracking-wide hover:bg-gold-light transition-colors duration-200"
            >
              Prendre RDV
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-navy/98 border-t border-gold/20 px-6 py-6"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/80 hover:text-gold text-lg font-inter"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                className="block text-center bg-gold text-navy px-5 py-3 font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Prendre RDV
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}
```

**Step 2: Add Navbar to layout**

In `app/layout.tsx`, add import and render:

```tsx
import Navbar from '@/components/Navbar'
// ...
<body>
  <Navbar />
  {children}
</body>
```

**Step 3: Verify navbar renders and scroll effect works**

```bash
npm run dev
```
Scroll down → navbar background should appear.

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add sticky navbar with scroll transition and mobile menu"
```

---

### Task 4: Footer Component

**Files:**
- Create: `components/Footer.tsx`

**Step 1: Create `components/Footer.tsx`**

```tsx
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/20 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & tagline */}
          <div>
            <Image src="/logo.png" alt="Depari'Lex" width={120} height={48} className="h-10 w-auto mb-4" />
            <p className="text-white/50 text-sm font-inter leading-relaxed">
              Conseil juridique expert en droit des affaires pour entrepreneurs et dirigeants.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-gold font-playfair text-sm tracking-widest uppercase mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/services', label: 'Services' },
                { href: '/a-propos', label: 'À propos' },
                { href: '/contact', label: 'Contact' },
                { href: '/mentions-legales', label: 'Mentions légales' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-playfair text-sm tracking-widest uppercase mb-4">Contact</h4>
            <ul className="space-y-2 text-white/50 text-sm font-inter">
              <li>Rue Rémi Belleau</li>
              <li>33400 Talence, Bordeaux</li>
              <li className="pt-2">
                <a href="tel:0751436250" className="hover:text-gold transition-colors">07 51 43 62 50</a>
              </li>
              <li>
                <a href="mailto:halimebrahim7@gmail.com" className="hover:text-gold transition-colors">
                  halimebrahim7@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-inter">
            © {new Date().getFullYear()} Depari&apos;Lex — Tous droits réservés
          </p>
          <p className="text-white/30 text-xs font-inter">
            Juriste diplômée en droit des affaires et de l&apos;entreprise
          </p>
        </div>
      </div>
    </footer>
  )
}
```

**Step 2: Add Footer to layout**

```tsx
import Footer from '@/components/Footer'
// In body:
<body>
  <Navbar />
  {children}
  <Footer />
</body>
```

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add footer with navigation, contact info"
```

---

### Task 5: Hero Section

**Files:**
- Create: `components/sections/Hero.tsx`

**Step 1: Create `components/sections/Hero.tsx`**

```tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#0f2340] to-navy" />
        {/* Gold accent glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gold/3 rounded-full blur-[80px]" />
      </div>

      {/* Decorative lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 items-center">
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-gold/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
        <div className="w-px h-24 bg-gradient-to-t from-transparent to-gold/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-gold/60" />
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-inter">
            Cabinet de Conseil Juridique
          </span>
          <div className="h-px w-12 bg-gold/60" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
        >
          Votre droit des affaires,{' '}
          <span className="text-gold italic">maîtrisé.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/60 text-lg md:text-xl font-inter font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Conseil juridique expert pour entrepreneurs et dirigeants.
          Information, analyse, rédaction et accompagnement en droit des affaires.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="group bg-gold text-navy px-8 py-4 font-inter font-semibold text-sm tracking-wide hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2"
          >
            Prendre rendez-vous
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/services"
            className="border border-white/20 text-white px-8 py-4 font-inter font-medium text-sm tracking-wide hover:border-gold/60 hover:text-gold transition-all duration-300"
          >
            Découvrir nos services
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs tracking-widest uppercase font-inter">Défiler</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add -A
git commit -m "feat: add hero section with animated gradient and CTAs"
```

---

### Task 6: Services Section

**Files:**
- Create: `components/sections/ServicesSection.tsx`

**Step 1: Create `components/sections/ServicesSection.tsx`**

```tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    icon: '📋',
    title: 'Information juridique',
    description: 'Réponses claires et précises à vos questions de droit des affaires. Comprenez vos droits et obligations avant chaque décision importante.',
    href: '/services#information',
  },
  {
    icon: '🔍',
    title: 'Analyse juridique',
    description: "Examen approfondi de vos contrats, situations et risques juridiques. Identifiez les points de vigilance avant qu'ils deviennent des problèmes.",
    href: '/services#analyse',
  },
  {
    icon: '✍️',
    title: 'Rédaction de documents',
    description: 'Contrats, CGV, statuts, courriers et actes juridiques rédigés sur mesure. Des documents solides qui protègent vos intérêts.',
    href: '/services#redaction',
  },
  {
    icon: '🤝',
    title: 'Accompagnement juridique',
    description: 'Suivi personnalisé dans vos projets et décisions stratégiques. Un partenaire juridique de confiance à vos côtés au quotidien.',
    href: '/services#accompagnement',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
}

export default function ServicesSection() {
  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-inter">Nos Prestations</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-navy mb-4">
            Un accompagnement juridique<br />
            <span className="italic text-gold">sur mesure</span>
          </h2>
          <p className="text-text-gray font-inter max-w-xl mx-auto">
            Des prestations adaptées aux besoins réels des entrepreneurs et dirigeants, sans jargon inutile.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group bg-white border border-gray-100 p-8 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300 cursor-pointer"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="font-playfair text-xl text-navy mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-text-gray font-inter text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="text-gold text-sm font-inter font-medium flex items-center gap-1 hover:gap-2 transition-all"
              >
                En savoir plus <span>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add -A
git commit -m "feat: add services section with animated cards"
```

---

### Task 7: Why Depari'Lex Section (Stats)

**Files:**
- Create: `components/sections/WhySection.tsx`

**Step 1: Create `components/sections/WhySection.tsx`**

```tsx
'use client'

import { motion } from 'framer-motion'

const values = [
  { icon: '⚖️', title: 'Juriste diplômée', desc: 'Master en droit des affaires et de l\'entreprise' },
  { icon: '💎', title: 'Tarifs transparents', desc: 'Devis clair, sans surprise ni facturation cachée' },
  { icon: '⚡', title: 'Réponse sous 48h', desc: 'Engagement de réactivité pour chaque demande' },
  { icon: '🎯', title: 'Spécialiste B2B', desc: 'Exclusivement dédié aux entreprises et dirigeants' },
]

export default function WhySection() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/3 rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-inter">Pourquoi Depari&apos;Lex</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-white mb-4">
            Le conseil juridique<br />
            <span className="text-gold italic">autrement</span>
          </h2>
          <p className="text-white/50 font-inter max-w-xl mx-auto">
            Une approche humaine, directe et accessible du droit des affaires.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="border border-gold/20 p-6 hover:border-gold/50 transition-colors duration-300 text-center group"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-playfair text-lg text-gold mb-2">{item.title}</h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add -A
git commit -m "feat: add why deparilex section with value props"
```

---

### Task 8: About Preview Section

**Files:**
- Create: `components/sections/AboutPreview.tsx`

**Step 1: Create `components/sections/AboutPreview.tsx`**

```tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutPreview() {
  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] max-w-sm mx-auto bg-navy/10 border border-gold/20 flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <div className="text-6xl mb-4">👤</div>
                <p className="text-text-gray font-inter text-sm">Photo à venir</p>
              </div>
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold/60" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-inter">À propos</span>
            </div>
            <h2 className="font-playfair text-4xl text-navy mb-6">
              Halimé BRAHIM MAHAMAT,<br />
              <span className="italic text-gold">juriste en droit des affaires</span>
            </h2>
            <p className="text-text-gray font-inter leading-relaxed mb-4">
              Diplômée en droit des affaires et de l&apos;entreprise, j&apos;ai fondé Depari&apos;Lex avec une conviction :
              les entrepreneurs méritent un accès clair et accessible à l&apos;expertise juridique.
            </p>
            <p className="text-text-gray font-inter leading-relaxed mb-8">
              Mon rôle n&apos;est pas de remplacer un avocat, mais de vous accompagner en amont —
              pour que chaque décision soit éclairée, chaque document solide, et chaque risque anticipé.
            </p>
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 text-navy font-inter font-semibold text-sm border-b-2 border-gold pb-1 hover:text-gold transition-colors group"
            >
              En savoir plus
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add -A
git commit -m "feat: add about preview section"
```

---

### Task 9: Contact CTA Section

**Files:**
- Create: `components/sections/ContactCTA.tsx`

**Step 1: Create `components/sections/ContactCTA.tsx`**

```tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-[#0f2340] to-navy" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/8 rounded-full blur-[80px]" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-inter">Contact</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">
            Parlons de votre<br />
            <span className="text-gold italic">situation juridique</span>
          </h2>
          <p className="text-white/60 font-inter mb-10 leading-relaxed">
            Un premier échange pour comprendre vos besoins, sans engagement.
            Réponse garantie sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gold text-navy px-8 py-4 font-inter font-semibold text-sm tracking-wide hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2"
            >
              Prendre rendez-vous
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <a
              href="tel:0751436250"
              className="border border-white/20 text-white px-8 py-4 font-inter font-medium text-sm tracking-wide hover:border-gold/60 hover:text-gold transition-all duration-300"
            >
              07 51 43 62 50
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add -A
git commit -m "feat: add contact CTA section"
```

---

### Task 10: Home Page Assembly

**Files:**
- Modify: `app/page.tsx`

**Step 1: Update `app/page.tsx`**

```tsx
import Hero from '@/components/sections/Hero'
import ServicesSection from '@/components/sections/ServicesSection'
import WhySection from '@/components/sections/WhySection'
import AboutPreview from '@/components/sections/AboutPreview'
import ContactCTA from '@/components/sections/ContactCTA'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <WhySection />
      <AboutPreview />
      <ContactCTA />
    </main>
  )
}
```

**Step 2: Test the home page**

```bash
npm run dev
```
Open `http://localhost:3000` — verify all sections render, animations work.

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: assemble home page with all sections"
```

---

### Task 11: Services Page

**Files:**
- Create: `app/services/page.tsx`

**Step 1: Create `app/services/page.tsx`**

```tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    id: 'information',
    icon: '📋',
    title: 'Information juridique',
    description: 'Vous avez une question juridique mais ne savez pas à qui vous adresser ? Je vous apporte des réponses claires, précises et adaptées à votre situation, sans jargon inutile.',
    details: [
      'Interprétation de textes de loi et réglementations',
      'Réponse à toute question de droit des affaires',
      'Point juridique avant une décision stratégique',
      'Veille réglementaire pour votre secteur',
    ],
  },
  {
    id: 'analyse',
    icon: '🔍',
    title: 'Analyse juridique',
    description: 'Avant de signer, de vous engager ou de prendre une décision importante, une analyse juridique rigoureuse vous permet d\'identifier les risques et de sécuriser votre position.',
    details: [
      'Analyse et révision de contrats commerciaux',
      'Audit de vos pratiques contractuelles',
      'Identification des risques juridiques',
      'Analyse de conformité réglementaire',
    ],
  },
  {
    id: 'redaction',
    icon: '✍️',
    title: 'Rédaction de documents',
    description: 'Des documents juridiques bien rédigés sont le fondement de toute relation d\'affaires sécurisée. Je rédige des documents sur mesure qui protègent réellement vos intérêts.',
    details: [
      'Contrats commerciaux et de prestation',
      'Conditions Générales de Vente (CGV)',
      'Statuts et pactes d\'associés',
      'Courriers et mises en demeure',
    ],
  },
  {
    id: 'accompagnement',
    icon: '🤝',
    title: 'Accompagnement juridique',
    description: 'Bénéficiez d\'un suivi juridique personnalisé dans la durée. Je deviens votre interlocuteur juridique de référence pour toutes vos questions au quotidien.',
    details: [
      'Suivi de vos projets de création ou développement',
      'Accompagnement dans vos négociations',
      'Support juridique régulier (forfait mensuel)',
      'Préparation de dossiers et synthèses juridiques',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-off-white min-h-screen">
      {/* Header */}
      <section className="bg-navy py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2340] to-navy" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-inter">Nos Prestations</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h1 className="font-playfair text-5xl text-white mb-4">Nos Services</h1>
          <p className="text-white/60 font-inter text-lg">
            Quatre prestations conçues pour répondre aux besoins juridiques concrets des entrepreneurs.
          </p>
        </motion.div>
      </section>

      {/* Services detail */}
      <div className="max-w-5xl mx-auto px-6 py-24 space-y-16">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="font-playfair text-3xl text-navy mb-4">{service.title}</h2>
              <p className="text-text-gray font-inter leading-relaxed mb-6">{service.description}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 text-sm font-inter font-semibold hover:bg-gold hover:text-navy transition-all duration-300"
              >
                Demander un devis →
              </Link>
            </div>
            <div className={`bg-white border border-gray-100 p-8 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <h4 className="font-playfair text-navy text-lg mb-4">Ce que j&apos;interviens :</h4>
              <ul className="space-y-3">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3 text-text-gray font-inter text-sm">
                    <span className="text-gold mt-0.5 shrink-0">✦</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-navy py-16 text-center px-6">
        <h3 className="font-playfair text-3xl text-white mb-4">Prêt à sécuriser votre activité ?</h3>
        <p className="text-white/60 font-inter mb-8">Contactez-nous pour un premier échange sans engagement.</p>
        <Link href="/contact" className="bg-gold text-navy px-8 py-4 font-inter font-semibold text-sm hover:bg-gold-light transition-all">
          Prendre rendez-vous →
        </Link>
      </section>
    </main>
  )
}
```

**Step 2: Commit**

```bash
git add -A
git commit -m "feat: add services page with detailed descriptions"
```

---

### Task 12: About Page

**Files:**
- Create: `app/a-propos/page.tsx`

**Step 1: Create `app/a-propos/page.tsx`**

```tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="bg-off-white min-h-screen">
      {/* Header */}
      <section className="bg-navy py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2340] to-navy" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-inter">Qui sommes-nous</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h1 className="font-playfair text-5xl text-white mb-4">À propos</h1>
          <p className="text-white/60 font-inter text-lg">
            Connaissance du droit, proximité humaine.
          </p>
        </motion.div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[3/4] bg-navy/10 border border-gold/20 flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <div className="text-8xl mb-4">👤</div>
                <p className="text-text-gray font-inter text-sm">Photo d&apos;Halimé</p>
              </div>
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="font-playfair text-4xl text-navy mb-1">Halimé BRAHIM MAHAMAT</h2>
              <p className="text-gold font-inter text-sm tracking-wide">Juriste · Fondatrice de Depari&apos;Lex</p>
            </div>
            <div className="w-12 h-0.5 bg-gold" />
            <p className="text-text-gray font-inter leading-relaxed">
              Juriste diplômée en droit des affaires et de l&apos;entreprise, j&apos;ai fondé Depari&apos;Lex
              avec une conviction profonde : les entrepreneurs et les dirigeants méritent un accès
              simple, clair et accessible à l&apos;expertise juridique.
            </p>
            <p className="text-text-gray font-inter leading-relaxed">
              Mon activité consiste exclusivement en des prestations d&apos;information, d&apos;analyse,
              de rédaction et d&apos;accompagnement juridique. Je n&apos;exerce pas les activités
              réservées aux avocats (représentation en justice, contentieux).
            </p>
            <p className="text-text-gray font-inter leading-relaxed">
              Mon rôle est d&apos;être votre partenaire juridique de confiance au quotidien —
              celui qui vous aide à anticiper les risques, sécuriser vos contrats et prendre
              des décisions éclairées.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { label: 'Proximité', value: 'Un interlocuteur unique et disponible' },
                { label: 'Clarté', value: 'Du droit sans jargon inutile' },
                { label: 'Rigueur', value: 'Analyse précise et documentée' },
                { label: 'Réactivité', value: 'Réponse garantie sous 48h' },
              ].map((item) => (
                <div key={item.label} className="bg-white p-4 border-l-2 border-gold">
                  <p className="font-playfair text-navy font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-text-gray text-xs font-inter">{item.value}</p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 text-sm font-inter font-semibold hover:bg-gold hover:text-navy transition-all duration-300 mt-4"
            >
              Me contacter →
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
```

**Step 2: Commit**

```bash
git add -A
git commit -m "feat: add about page with bio and values"
```

---

### Task 13: Contact Page with EmailJS + Calendly

**Files:**
- Create: `app/contact/page.tsx`
- Create: `components/ContactForm.tsx`

**Step 1: Create `components/ContactForm.tsx`**

```tsx
'use client'

import { useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, phone: form.phone, message: form.message },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-navy font-inter text-sm font-medium mb-2">Nom complet *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-gray-200 px-4 py-3 font-inter text-navy text-sm focus:outline-none focus:border-gold transition-colors bg-white"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label className="block text-navy font-inter text-sm font-medium mb-2">Email *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-gray-200 px-4 py-3 font-inter text-navy text-sm focus:outline-none focus:border-gold transition-colors bg-white"
            placeholder="votre@email.com"
          />
        </div>
      </div>
      <div>
        <label className="block text-navy font-inter text-sm font-medium mb-2">Téléphone</label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full border border-gray-200 px-4 py-3 font-inter text-navy text-sm focus:outline-none focus:border-gold transition-colors bg-white"
          placeholder="06 XX XX XX XX"
        />
      </div>
      <div>
        <label className="block text-navy font-inter text-sm font-medium mb-2">Votre message *</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-gray-200 px-4 py-3 font-inter text-navy text-sm focus:outline-none focus:border-gold transition-colors bg-white resize-none"
          placeholder="Décrivez votre situation juridique ou votre question..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-navy text-white py-4 font-inter font-semibold text-sm tracking-wide hover:bg-gold hover:text-navy transition-all duration-300 disabled:opacity-60"
      >
        {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message →'}
      </button>

      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-600 text-sm font-inter text-center"
        >
          ✓ Message envoyé ! Nous vous répondrons sous 48h.
        </motion.p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-sm font-inter text-center">
          Une erreur s&apos;est produite. Veuillez réessayer ou nous appeler.
        </p>
      )}
    </form>
  )
}
```

**Step 2: Create `app/contact/page.tsx`**

```tsx
'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <main className="bg-off-white min-h-screen">
      {/* Header */}
      <section className="bg-navy py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2340] to-navy" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-inter">Contact</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h1 className="font-playfair text-5xl text-white mb-4">Parlons de votre projet</h1>
          <p className="text-white/60 font-inter text-lg">
            Premier échange sans engagement. Réponse garantie sous 48h.
          </p>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-playfair text-3xl text-navy mb-2">Envoyez un message</h2>
            <p className="text-text-gray font-inter text-sm mb-8">Décrivez votre situation et je vous recontacte rapidement.</p>
            <div className="bg-white p-8 border border-gray-100">
              <ContactForm />
            </div>
          </motion.div>

          {/* Calendly + info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            {/* Calendly */}
            <div>
              <h2 className="font-playfair text-3xl text-navy mb-2">Réserver un rendez-vous</h2>
              <p className="text-text-gray font-inter text-sm mb-6">Choisissez directement un créneau disponible.</p>
              <div className="bg-white border border-gray-100 overflow-hidden">
                {/* Replace the URL below with Halimé's actual Calendly link */}
                <iframe
                  src="https://calendly.com/halimebrahim7"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Réserver un rendez-vous"
                />
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-navy p-8 space-y-4">
              <h3 className="font-playfair text-white text-xl mb-6">Coordonnées</h3>
              {[
                { icon: '📍', label: 'Adresse', value: 'Rue Rémi Belleau, 33400 Talence' },
                { icon: '📞', label: 'Téléphone', value: '07 51 43 62 50', href: 'tel:0751436250' },
                { icon: '✉️', label: 'Email', value: 'halimebrahim7@gmail.com', href: 'mailto:halimebrahim7@gmail.com' },
                { icon: '🕐', label: 'Délai de réponse', value: 'Sous 48 heures' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="text-lg mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-gold text-xs font-inter uppercase tracking-wide">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white font-inter text-sm hover:text-gold transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-inter text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
```

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add contact page with EmailJS form and Calendly embed"
```

---

### Task 14: Mentions Légales Page

**Files:**
- Create: `app/mentions-legales/page.tsx`

**Step 1: Create `app/mentions-legales/page.tsx`**

```tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Mentions Légales — Depari'Lex",
}

export default function MentionsLegales() {
  return (
    <main className="bg-off-white min-h-screen">
      <section className="bg-navy py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-playfair text-5xl text-white">Mentions Légales</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-10 font-inter text-text-gray">
        <div>
          <h2 className="font-playfair text-2xl text-navy mb-4">Éditeur du site</h2>
          <p>Dénomination : Depari&apos;Lex</p>
          <p>Forme juridique : Entrepreneur individuel</p>
          <p>Nom : BRAHIM MAHAMAT Halimé</p>
          <p>Adresse : Rue Rémi Belleau, 33400 Talence, France</p>
          <p>Téléphone : 07 51 43 62 50</p>
          <p>Email : halimebrahim7@gmail.com</p>
          <p>Activité : Conseil juridique en droit des affaires</p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl text-navy mb-4">Hébergement</h2>
          <p>Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.</p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl text-navy mb-4">Propriété intellectuelle</h2>
          <p>L&apos;ensemble du contenu de ce site (textes, images, logo) est la propriété exclusive de Depari&apos;Lex et est protégé par le droit d&apos;auteur.</p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl text-navy mb-4">Limitation de responsabilité</h2>
          <p>
            Les informations publiées sur ce site ont un caractère purement informatif et ne constituent
            pas une consultation juridique. Depari&apos;Lex ne saurait être tenu responsable de l&apos;utilisation
            faite des informations présentes sur ce site.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl text-navy mb-4">Données personnelles</h2>
          <p>
            Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre
            à vos demandes et ne sont jamais transmises à des tiers. Conformément au RGPD, vous disposez
            d&apos;un droit d&apos;accès, de rectification et de suppression de vos données.
          </p>
        </div>
      </div>
    </main>
  )
}
```

**Step 2: Commit**

```bash
git add -A
git commit -m "feat: add mentions légales page"
```

---

### Task 15: Final Build & Verification

**Step 1: Run production build**

```bash
npm run build
```
Expected: Build completes, all pages exported as static HTML.

**Step 2: Preview production build**

```bash
npx serve@latest out
```
Open `http://localhost:3000` and verify:
- [ ] All 5 pages load correctly
- [ ] Navbar scroll effect works
- [ ] All animations trigger on scroll
- [ ] Mobile menu works
- [ ] Contact form renders
- [ ] Calendly iframe loads (with real URL)
- [ ] Footer links work
- [ ] No console errors

**Step 3: Final commit**

```bash
git add -A
git commit -m "feat: complete Depari'Lex website - all pages and components"
```

---

## Post-Launch Checklist

- [ ] Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_PUBLIC_KEY` in `ContactForm.tsx` with real EmailJS credentials (create free account at emailjs.com)
- [ ] Replace Calendly URL in `contact/page.tsx` with Halimé's real Calendly link (create free account at calendly.com)
- [ ] Add real photo of Halimé (replace placeholder in `AboutPreview.tsx` and `a-propos/page.tsx`)
- [ ] Deploy to Vercel: `npx vercel` then connect to deparilex.com domain
