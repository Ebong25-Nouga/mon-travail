import Icon from '../components/Icon.jsx'
import WhatsAppIcon from '../components/WhatsAppIcon.jsx'
import { images } from '../images.js'
import { ADDRESS, ADDRESS_HINT, PHONE, PHONE_LABEL, WA_LABEL, hours, nav, services, waLink } from '../data.js'

export default function Footer() {
  return (
    <footer className="bg-ink pb-28 pt-20 text-cream sm:pb-12">
      <div className="container-site">
        {/* Appel à l'action */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-cream/10 pb-14 md:flex-row md:items-center">
          <h2 className="max-w-xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Ready to <em className="italic text-rose-light">glow?</em> Book your moment today.
          </h2>
          <a
            href={waLink('Hello Miya Beauty Salon & Spa, I would like to book an appointment.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa w-full shrink-0 md:w-auto"
          >
            <WhatsAppIcon /> Chat on WhatsApp
          </a>
        </div>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white">
                <img src={images.logo} alt="" className="h-8 w-8 object-contain" />
              </span>
              <span className="font-serif text-2xl">Miya Beauty</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
              A refined sanctuary in the heart of Molyko, Buea — hair styling, skin care, nail art and revitalizing spa
              rituals.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition hover:text-cream">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              {services.map((s) => (
                <li key={s.key}>
                  <a href="#services" className="transition hover:text-cream">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Visit us</h3>
            <ul className="mt-5 space-y-4 text-sm text-cream/70">
              <li className="flex gap-3">
                <Icon name="location_on" className="text-[18px] text-rose-light" />
                <span>
                  {ADDRESS}
                  <br />
                  <span className="text-cream/50">{ADDRESS_HINT}</span>
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="schedule" className="text-[18px] text-rose-light" />
                <span>
                  {hours.map((h) => (
                    <span key={h.day} className="block">
                      {h.day}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="call" className="text-[18px] text-rose-light" />
                <a href={`tel:${PHONE}`} className="transition hover:text-cream">
                  {PHONE_LABEL}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="chat" className="text-[18px] text-rose-light" />
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="transition hover:text-cream">
                  {WA_LABEL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Miya Beauty Salon &amp; Spa. All rights reserved.</p>
          <a href="#top" className="flex items-center gap-1 transition hover:text-cream">
            Back to top <Icon name="arrow_upward" className="text-[16px]" />
          </a>
        </div>
      </div>
    </footer>
  )
}
