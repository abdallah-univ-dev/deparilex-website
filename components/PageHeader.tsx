'use client'

import { motion } from 'framer-motion'

interface PageHeaderProps {
    eyebrow: string
    title: string
    subtitle: string
}

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
    return (
        <section className="bg-navy py-32 px-6 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative max-w-3xl mx-auto text-center"
            >
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="h-px w-12 bg-gold/60" />
                    <span className="text-gold text-xs tracking-[0.3em] uppercase font-inter">{eyebrow}</span>
                    <div className="h-px w-12 bg-gold/60" />
                </div>
                <h1 className="font-playfair text-5xl text-white mb-4">{title}</h1>
                <p className="text-white/60 font-inter text-lg">{subtitle}</p>
            </motion.div>
        </section>
    )
}
