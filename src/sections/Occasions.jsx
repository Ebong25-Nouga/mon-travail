import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import WhatsAppIcon from '../components/WhatsAppIcon.jsx'
import { images } from '../images.js'
import { occasions, waLink } from '../data.js'

export default function Occasions() {
  return (
    <section id="occasions" className="relative overflow-hidden bg-ink py-20 text-cream sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-32 top-0 h-[480px] w-[480px] rounded-full bg-rose/20 blur-[140px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-gold/15 blur-[140px]" />

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-8 lg:col-span-7">
          <SectionTitle
            dark
            eyebrow="Bridal & celebrations"
            title="Your special moments deserve"
            accent="exceptional beauty."
            text="Traditional wedding, civil ceremony, evening reception or graduation gala — our bridal team creates looks that last all day and all night."
          />

          <ul className="grid gap-3 sm:grid-cols-2">
            {occasions.map((o, i) => (
              <Reveal
                as="li"
                key={o.label}
                delay={i * 60}
                className="flex items-center gap-4 rounded-2xl border border-cream/10 bg-cream/[0.04] p-4 transition hover:border-gold/40 hover:bg-cream/[0.07]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                  <Icon name={o.icon} className="text-[20px]" />
                </span>
                <span className="text-[15px] font-medium">{o.label}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal className="flex items-start gap-3 rounded-2xl bg-cream/[0.06] p-5 text-sm leading-relaxed text-cream/70">
            <Icon name="info" className="mt-0.5 text-[20px] text-gold" />
            We customize bridal packages for your schedule, venue and bridal party size. Booking in advance is
            recommended.
          </Reveal>

          <Reveal>
            <a
              href={waLink('Hello Miya Beauty Salon! I would like a custom Bridal / Special Occasion package for my event.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light sm:w-auto"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" /> Request a bridal package
            </a>
          </Reveal>
        </div>

        <Reveal delay={150} className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="absolute -inset-4 rounded-t-full border border-gold/30" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2rem] bg-ink-soft">
            <img src={images.bridal} alt="Smiling bride with flawless makeup" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-6 pt-20">
              <p className="font-serif text-2xl italic">Timeless bridal glam</p>
              <p className="mt-1 text-sm text-cream/70">For the bride and her whole train</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
