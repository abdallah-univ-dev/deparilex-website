# Depari'Lex — Design Document
**Date:** 2026-03-05
**Stack:** Next.js 14 · Tailwind CSS · Framer Motion · EmailJS · Calendly · Vercel

---

## Business Context

- **Entreprise:** Depari'Lex — cabinet de conseil juridique
- **Fondatrice:** Halimé BRAHIM MAHAMAT, juriste diplômée en droit des affaires
- **Localisation:** Talence, Bordeaux (33400)
- **Activité:** Information, analyse, rédaction et accompagnement juridique pour entreprises et dirigeants
- **Contact:** 07 51 43 62 50 · halimebrahim7@gmail.com
- **Domaine:** www.deparilex.com

---

## Architecture

### Pages
| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Services, Pourquoi Depari'Lex, À propos preview, Contact rapide |
| `/services` | Détail des 4 prestations |
| `/a-propos` | Profil complet d'Halimé, parcours, valeurs |
| `/contact` | Formulaire complet + Calendly embed + coordonnées |
| `/mentions-legales` | Page légale obligatoire |

### Tech Stack
- **Framework:** Next.js 14 App Router (export statique)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (scroll-triggered, hover, page transitions)
- **Contact form:** EmailJS (sans backend)
- **Rendez-vous:** Calendly embed
- **Fonts:** Playfair Display (titres) + Inter (corps)
- **Déploiement:** Vercel (gratuit)

---

## Design System

### Couleurs
```
Navy profond   #0D1B2E  → fond principal, navbar, footer
Or élégant     #C9A84C  → accents, CTA, bordures, highlights
Blanc cassé    #F8F6F1  → sections claires, cartes
Gris texte     #4A5568  → corps de texte
Blanc pur      #FFFFFF  → texte sur fond sombre
```

### Typographie
```
Playfair Display → H1, H2, H3 (serif élégant, haut de gamme)
Inter            → body, nav, boutons (clean, moderne)
```

### Animations
- Fade-up au scroll (Framer Motion viewport)
- Hover cartes : élévation + bordure dorée
- Navbar : transparent → navy au scroll
- Compteurs animés sur chiffres clés
- Particules/gradient animé dans le Hero
- Transitions de page fluides

---

## Contenu par Section

### Hero (/)
- **Titre:** "Votre droit des affaires, maîtrisé."
- **Sous-titre:** Conseil juridique expert pour entrepreneurs & dirigeants
- **CTA:** [Prendre rendez-vous] [Nous contacter]
- **Fond:** Navy avec gradient + particules dorées animées

### Services (4 cartes)
1. **Information juridique** — Réponses claires à vos questions de droit des affaires
2. **Analyse juridique** — Examen de contrats, situations et risques
3. **Rédaction de documents** — Contrats, CGV, statuts, courriers
4. **Accompagnement juridique** — Suivi personnalisé dans vos projets

### Pourquoi Depari'Lex
- Juriste diplômée en droit des affaires
- Tarifs transparents sans surprise
- Réponse sous 48h garantie
- Spécialiste entreprises & dirigeants

### À propos (preview)
- Photo placeholder + bio courte d'Halimé + lien vers /a-propos

### Contact
- Formulaire : Nom / Email / Téléphone / Message
- EmailJS pour envoi sans backend
- Bouton Calendly intégré
- Adresse + téléphone

### Footer
- Logo + navigation + mentions légales + réseaux sociaux

---

## Composants
- `Navbar` — sticky, transparent → navy au scroll
- `Hero` — plein écran, particles, animated text
- `ServiceCard` — carte avec hover animation
- `StatsSection` — compteurs animés
- `AboutPreview` — photo + texte
- `ContactForm` — EmailJS integration
- `CalendlyEmbed` — iframe Calendly
- `Footer` — liens + réseaux

---

## Décisions
- Export statique Next.js → zéro coût d'hébergement sur Vercel
- EmailJS → pas besoin d'API route ni de backend
- Calendly embed → solution RDV gratuite et fiable
- Placeholder pour photo/bio Halimé (à remplacer plus tard)
