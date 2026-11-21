import { useEffect, useState } from 'react'
import Icon from '../components/Icon.jsx'
import WhatsAppIcon from '../components/WhatsAppIcon.jsx'
import useScrollSpy from '../hooks/useScrollSpy.js'
import useLockBody from '../hooks/useLockBody.js'
import { images } from '../images.js'
import { PHONE, PHONE_LABEL, nav, waLink } from '../data.js'

const IDS = nav.map((n) => n.href.slice(1))

function Logo({ light = false }) {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Miya Beauty Salon & Spa — home">
      <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full bg-white shadow-soft ring-1 ring-gold/40">
        <img src={images.logo} alt="" className="h-8 w-8 object-contain" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-lg font-semibold tracking-wide sm:text-xl ${light ? 'text-cream' : 'text-ink'}`}>
          Miya Beauty
        </span>
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-rose-dark">Salon &amp; Spa · Buea</span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useScrollSpy(IDS)
  useLockBody(open)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-cream/90 shadow-[0_1px_0_rgba(36,22,27,0.08)] backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className={`container-site flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? 'h-[72px]' : 'h-20 lg:h-24'}`}>
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) => {
              const isActive = active === item.href.slice(1)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-rose-dark transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn-dark hidden !px-6 !py-3 sm:inline-flex">
              Book now
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-ink/10 bg-white/70 text-ink transition hover:bg-white lg:hidden"
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>

      {/* Menu plein écran (mobile & tablette) */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-ink text-cream transition-all duration-500 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="container-site flex h-20 items-center justify-between">
          <Logo light />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-cream/20 text-cream transition hover:bg-cream/10"
          >
            <Icon name="close" />
          </button>
        </div>
        <nav className="container-site flex flex-1 flex-col justify-center gap-1" aria-label="Mobile">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-baseline gap-4 border-b border-cream/10 py-4 font-serif text-3xl transition-all duration-500 sm:text-4xl ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              } ${active === item.href.slice(1) ? 'text-rose-light' : 'text-cream hover:text-gold-light'}`}
              style={{ transitionDelay: open ? `${120 + i * 50}ms` : '0ms' }}
            >
              <span className="font-sans text-xs text-cream/40">0{i + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="container-site grid grid-cols-1 gap-3 pb-[max(2rem,env(safe-area-inset-bottom))] pt-6 sm:grid-cols-2">
          <a href={waLink('Hello Miya Beauty Salon & Spa, I would like to book an appointment.')} target="_blank" rel="noopener noreferrer" className="btn-wa w-full">
            <WhatsAppIcon /> Book on WhatsApp
          </a>
          <a href={`tel:${PHONE}`} className="w-full border border-cream/25 text-cream transition hover:bg-cream/10 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
            <Icon name="call" className="text-[20px]" /> {PHONE_LABEL}
          </a>
        </div>
      </div>
    </>
  )
}
