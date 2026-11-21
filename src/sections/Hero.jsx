import Icon from '../components/Icon.jsx'
import WhatsAppIcon from '../components/WhatsAppIcon.jsx'
import Reveal from '../components/Reveal.jsx'
import { images } from '../images.js'
import { heroStats, waLink } from '../data.js'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* Halos décoratifs */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-rose-light/50 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[420px] w-[420px] rounded-full bg-gold-light/50 blur-[120px]" />

      <div className="container-site relative grid items-center gap-14 pb-16 lg:grid-cols-12 lg:gap-10 lg:pb-24">
        {/* Texte */}
        <div className="flex flex-col items-start gap-7 lg:col-span-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft backdrop-blur sm:text-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-rose" />
              Molyko&apos;s premier beauty sanctuary
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-serif text-[2.6rem] leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.1rem] xl:text-[4.6rem]">
              Discover your beauty,
              <br />
              <em className="italic text-rose-dark">experience your glow.</em>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Where beauty meets relaxation. Professional hair craft, bespoke skin therapies, master nail artistry and
              soothing spa treatments — right in the vibrant heart of Molyko, Buea.
            </p>
          </Reveal>

          <Reveal delay={300} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={waLink('Hello Miya Beauty Salon & Spa! I found your website and would like to book an appointment.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" /> Book on WhatsApp
            </a>
            <a href="#services" className="btn-light">
              Explore our services <Icon name="arrow_downward" className="text-[18px]" />
            </a>
          </Reveal>

          <Reveal delay={400} className="grid w-full max-w-lg grid-cols-3 divide-x divide-ink/10 border-t border-ink/10 pt-6">
            {heroStats.map((s) => (
              <div key={s.label} className="px-3 first:pl-0 sm:px-5">
                <div className="font-serif text-2xl text-ink sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs text-ink-muted sm:text-sm">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Visuels */}
        <Reveal delay={200} className="relative mx-auto w-full max-w-[440px] lg:col-span-5 lg:max-w-none">
          <div className="relative aspect-[4/5] w-[82%]">
            <div className="absolute -inset-3 rounded-t-full border border-gold/50" />
            <div className="relative h-full overflow-hidden rounded-t-full rounded-b-[2rem] bg-sand shadow-lift">
              <img src={images.heroFront} alt="Woman with radiant, polished makeup" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="absolute -bottom-6 right-0 aspect-square w-[46%] overflow-hidden rounded-full border-[6px] border-cream bg-sand shadow-lift">
            <img src={images.heroBack} alt="Calm salon treatment room" className="h-full w-full object-cover" />
          </div>

          <div className="absolute left-[-4%] top-[58%] flex animate-float items-center gap-3 rounded-2xl bg-white/90 p-3 pr-5 shadow-soft backdrop-blur sm:left-[-10%]">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-rose-light text-rose-dark">
              <Icon name="spa" className="text-[22px]" />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold text-ink">Full rejuvenation</span>
              <span className="text-xs text-ink-muted">Hair · Skin · Nails · Spa</span>
            </span>
          </div>

          <div className="absolute right-[6%] top-[6%] grid h-20 w-20 place-items-center rounded-full bg-ink text-center text-cream shadow-soft sm:h-24 sm:w-24">
            <span className="flex flex-col items-center leading-tight">
              <Icon name="diamond" className="text-[20px] text-gold" />
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest">Bridal</span>
              <span className="text-[10px] uppercase tracking-widest text-cream/60">experts</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
