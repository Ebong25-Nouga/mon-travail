import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import WhatsAppIcon from '../components/WhatsAppIcon.jsx'
import { images } from '../images.js'
import { services, waLink } from '../data.js'

function ServiceCard({ s, i }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_1px_0_rgba(36,22,27,0.06)] transition duration-500 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative">
        <div className="relative aspect-[4/3] overflow-hidden bg-sand">
          <img
            src={images[s.key]}
            alt={s.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          <span className="absolute left-5 top-5 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold tracking-widest text-ink backdrop-blur">
            0{i + 1}
          </span>
        </div>
        <span className="absolute -bottom-6 right-6 grid h-14 w-14 place-items-center rounded-2xl bg-ink text-gold shadow-soft transition-transform duration-500 group-hover:rotate-6">
          <Icon name={s.icon} className="text-[26px]" />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 pt-8">
        <h3 className="font-serif text-2xl text-ink">{s.title}</h3>
        <p className="text-sm leading-relaxed text-ink-muted">{s.text}</p>
        <ul className="flex flex-wrap gap-2">
          {s.tags.map((t) => (
            <li key={t} className="rounded-full bg-blush px-3 py-1 text-xs font-medium text-ink-soft">
              {t}
            </li>
          ))}
        </ul>
        <a
          href={waLink(s.wa)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-between rounded-full border border-ink/10 py-2 pl-5 pr-2 text-sm font-semibold text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-cream"
        >
          Book this service
          <span className="grid h-9 w-9 place-items-center rounded-full bg-whatsapp text-white">
            <WhatsAppIcon className="h-4 w-4" />
          </span>
        </a>
      </div>
    </article>
  )
}

export default function Services() {
  return (
    <section id="services" className="bg-blush py-20 sm:py-24 lg:py-32">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Our services"
            title="Crafted rituals,"
            accent="complete artistry."
            text="Six treatment divisions, from precise hair transformations to deeply revitalizing body sessions. Every service can be booked directly on WhatsApp."
          />
          <p className="flex items-center gap-2 text-sm text-ink-muted md:hidden">
            <Icon name="swipe" className="text-[20px]" /> Swipe to explore
          </p>
        </div>
      </div>

      {/* Mobile : carrousel horizontal · Tablette/desktop : grille */}
      <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-8 md:hidden">
        {services.map((s, i) => (
          <div key={s.key} className="w-[82%] max-w-[340px] shrink-0 snap-center">
            <ServiceCard s={s} i={i} />
          </div>
        ))}
      </div>
      <div className="container-site mt-14 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {services.map((s, i) => (
          <Reveal key={s.key} delay={(i % 3) * 100} className="h-full">
            <ServiceCard s={s} i={i} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
