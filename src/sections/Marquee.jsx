import { marquee } from '../data.js'

// Bandeau défilant des prestations
export default function Marquee() {
  const items = [...marquee, ...marquee]
  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-ink py-5 text-cream" aria-hidden="true">
      <div className="flex w-max animate-marquee items-center">
        {items.map((m, i) => (
          <span key={i} className="flex items-center whitespace-nowrap px-6 font-serif text-xl italic sm:text-2xl">
            {m}
            <span className="ml-12 text-base not-italic text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
