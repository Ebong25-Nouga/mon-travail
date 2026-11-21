# Miya Beauty Salon & Spa — site React

Site vitrine responsive (mobile, tablette, desktop) en React + Vite + Tailwind CSS.

## Lancer le projet

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # version de production dans /dist
```

## Structure

```
src/
  App.jsx              ordre des sections
  data.js              TOUS les textes, numéros, horaires, services → modifie ici
  images.js            liens des images
  index.css            styles globaux (boutons, champs, animations)
  components/          Icon, Reveal (apparition au scroll), SectionTitle, WhatsAppIcon
  hooks/               useScrollSpy (menu actif), useLockBody
  sections/            Navbar, Hero, Marquee, About, Services, Occasions,
                       Gallery, WhyUs, Contact, Footer, FloatingActions
```

## Couleurs

Définies dans `tailwind.config.js` : `cream`, `blush`, `sand`, `rose`, `gold`, `ink`.
Change une valeur là-bas et tout le site suit.

## ⚠️ Images

Les images viennent de liens Google Stitch (`lh3.googleusercontent.com/aida...`) qui peuvent expirer.
Avant de mettre en ligne : télécharge-les (ou utilise les vraies photos du salon), place-les dans
`public/images/` et remplace les liens dans `src/images.js` par `'/images/nom.jpg'`.
