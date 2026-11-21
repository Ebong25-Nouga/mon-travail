import { useCallback, useEffect, useRef, useState } from 'react'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import useLockBody from '../hooks/useLockBody.js'
import { images } from '../images.js'
import { gallery, galleryFilters } from '../data.js'

// Mise en page « mosaïque » sans trous : 2 colonnes (mobile) puis 3 colonnes (md+)
const SPANS = { 0: 'row-span-2', 2: 'md:row-span-2', 3: 'row-span-2' }

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [index, setIndex] = useState(null)
  const touchX = useRef(null)

  const items = gallery.filter((g) => filter === 'all' || g.category.includes(filter))
  const open = index !== null
  useLockBody(open)

  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length])
  const prev = useCallback(() => setIndex((i) => (i - 1 + items.length) % items.length), [items.length])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setIndex(null)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, next, prev])

  const current = open ? items[index] : null

  return (
    <section id="gallery" className="py-20 sm:py-24 lg:py-32">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle eyebrow="Gallery" title="Moments of" accent="radiance." text="A look inside our sanctuary and signature treatments." />
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0" role="tablist" aria-label="Filter gallery">
            {galleryFilters.map((f) => (
              <button
                key={f.key}
                type="button"
                role="tab"
                aria-selected={filter === f.key}
                onClick={() => setFilter(f.key)}
                className={`shrink-0 cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  filter === f.key ? 'bg-ink text-cream shadow-soft' : 'border border-sand bg-white text-ink-muted hover:border-ink/30 hover:text-ink'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[240px] sm:gap-4 md:grid-cols-3 lg:auto-rows-[260px] lg:gap-6">
          {items.map((g, i) => (
            <Reveal
              key={g.img}
              delay={(i % 3) * 80}
              className={filter === 'all' ? SPANS[i] || '' : ''}
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block h-full w-full cursor-pointer overflow-hidden rounded-2xl bg-sand text-left sm:rounded-3xl"
                aria-label={`Open: ${g.caption}`}
              >
                <img
                  src={images[g.img]}
                  alt={g.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent opacity-90 transition-opacity duration-500 lg:opacity-0 lg:group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:p-5 lg:translate-y-3 lg:opacity-0 lg:transition lg:duration-500 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                  <span className="flex flex-col">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-light sm:text-xs">{g.label}</span>
                    <span className="font-serif text-sm text-cream sm:text-lg">{g.caption}</span>
                  </span>
                  <span className="hidden h-9 w-9 shrink-0 place-items-center rounded-full bg-cream/90 text-ink sm:grid">
                    <Icon name="open_in_full" className="text-[18px]" />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs italic text-ink-muted">
          Illustrative images. More real client transformations are shared on our WhatsApp.
        </p>
      </div>

      {/* Visionneuse plein écran */}
      {current && (
        <div
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-ink/95 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          onClick={(e) => e.target === e.currentTarget && setIndex(null)}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return
            const dx = e.changedTouches[0].clientX - touchX.current
            if (Math.abs(dx) > 50) (dx < 0 ? next : prev)()
            touchX.current = null
          }}
        >
          <button
            type="button"
            onClick={() => setIndex(null)}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-cream/10 text-cream transition hover:bg-cream/20"
          >
            <Icon name="close" />
          </button>

          <img
            key={current.img}
            src={images[current.img]}
            alt={current.caption}
            className="max-h-[72vh] w-auto max-w-full rounded-3xl object-contain shadow-lift"
          />
          <div className="mt-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{current.label}</p>
            <p className="mt-1 font-serif text-xl text-cream sm:text-2xl">{current.caption}</p>
            <p className="mt-1 text-xs text-cream/50">
              {index + 1} / {items.length}
            </p>
          </div>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-cream/10 text-cream transition hover:bg-cream/20 sm:left-6"
              >
                <Icon name="chevron_left" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next image"
                className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-cream/10 text-cream transition hover:bg-cream/20 sm:right-6"
              >
                <Icon name="chevron_right" />
              </button>
            </>
          )}
        </div>
      )}
    </section>
  )
}
