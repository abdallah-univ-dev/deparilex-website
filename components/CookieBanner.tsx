'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const COOKIE_KEY = 'deparilex_rgpd_consent'

export default function CookieBanner() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem(COOKIE_KEY)
        if (!consent) {
            // Délai léger pour ne pas perturber le LCP
            const timer = setTimeout(() => setVisible(true), 1500)
            return () => clearTimeout(timer)
        }
    }, [])

    const accept = () => {
        localStorage.setItem(COOKIE_KEY, 'accepted')
        setVisible(false)
    }

    const decline = () => {
        localStorage.setItem(COOKIE_KEY, 'declined')
        setVisible(false)
    }

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    role="dialog"
                    aria-label="Politique de cookies"
                    aria-live="polite"
                    className="fixed bottom-0 left-0 right-0 z-[100] bg-navy/98 backdrop-blur-sm border-t border-gold/20 px-6 py-5 shadow-2xl"
                >
                    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
                        <div className="flex-1">
                            <p className="font-playfair text-white text-sm font-semibold mb-1">
                                Respect de votre vie privée 🔒
                            </p>
                            <p className="text-white/60 font-inter text-xs leading-relaxed">
                                Ce site utilise uniquement des cookies fonctionnels essentiels à son bon fonctionnement.
                                Aucun cookie publicitaire ou de tracking tiers.
                                {' '}
                                <Link href="/mentions-legales" className="text-gold hover:underline">
                                    En savoir plus
                                </Link>
                            </p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                            <button
                                onClick={decline}
                                className="font-inter text-white/50 text-xs hover:text-white transition-colors px-3 py-2"
                            >
                                Refuser
                            </button>
                            <button
                                onClick={accept}
                                className="bg-gold text-navy font-inter font-semibold text-xs px-5 py-2.5 hover:bg-gold-light transition-colors"
                            >
                                Accepter
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
