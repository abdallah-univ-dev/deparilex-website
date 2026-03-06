'use client'

import { useState } from 'react'

export default function LazyCalendly() {
    const [loaded, setLoaded] = useState(false)

    return (
        <div className="bg-white border border-gray-100 overflow-hidden">
            {!loaded ? (
                <button
                    onClick={() => setLoaded(true)}
                    className="w-full h-[200px] flex flex-col items-center justify-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer group"
                >
                    <div className="w-14 h-14 bg-navy/5 rounded-full flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                        <svg
                            className="w-7 h-7 text-navy"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <div className="text-center">
                        <p className="font-playfair text-navy font-semibold mb-1">Afficher le calendrier</p>
                        <p className="text-text-gray font-inter text-sm">Cliquez pour charger les créneaux disponibles</p>
                    </div>
                </button>
            ) : (
                <iframe
                    src="https://calendly.com/halimebrahim7"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    title="Réserver un rendez-vous avec Depari'Lex"
                    allow="fullscreen"
                />
            )}
        </div>
    )
}
