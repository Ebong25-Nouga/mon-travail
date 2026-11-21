import { useEffect, useState } from 'react'
import Icon from '../components/Icon.jsx'
import WhatsAppIcon from '../components/WhatsAppIcon.jsx'
import { PHONE, waLink } from '../data.js'

const WA_MSG = 'Hello Miya Beauty Salon & Spa! I would like to chat with your team about your services.'

export default function FloatingActions() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Mobile : barre d'action en bas */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-cream/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl transition-transform duration-500 sm:hidden ${
          show ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex gap-3">
          <a
            href={`tel:${PHONE}`}
            aria-label="Call the salon"
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-ink/15 bg-white text-ink"
          >
            <Icon name="call" />
          </a>
          <a href="#contact" className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-ink text-sm font-semibold text-cream">
            <Icon name="calendar_month" className="text-[20px]" /> Book
          </a>
          <a
            href={waLink(WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-whatsapp text-white"
          >
            <WhatsAppIcon className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Tablette & desktop : bouton WhatsApp flottant */}
      <a
        href={waLink(WA_MSG)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Miya Beauty on WhatsApp"
        className={`group fixed bottom-6 right-6 z-40 hidden items-center gap-3 rounded-full bg-whatsapp py-3 pl-3 pr-3 text-white shadow-lift transition-all duration-500 hover:pr-5 sm:flex ${
          show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
        }`}
      >
        <span className="relative grid h-9 w-9 place-items-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-white/30" />
          <WhatsAppIcon className="relative h-6 w-6" />
        </span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 group-hover:max-w-[160px]">
          Chat with us
        </span>
      </a>
    </>
  )
}
