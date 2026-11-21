import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { images } from '../images.js'
import { pillars } from '../data.js'

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32">
      <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand shadow-lift">
            <img src={images.about} alt="Spa room with a backlit circular mirror" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-2 max-w-[250px] rounded-3xl bg-ink p-6 text-cream shadow-lift sm:-right-8">
            <Icon name="favorite" className="text-[26px] text-rose-light" fill />
            <p className="mt-3 font-serif text-xl">Client centered</p>
            <p className="mt-2 text-sm leading-relaxed text-cream/70">
              Every appointment puts your comfort and natural glow first.
            </p>
          </div>
          <div className="absolute -left-4 -top-4 -z-10 h-32 w-32 rounded-full bg-blush sm:-left-8 sm:-top-8 sm:h-40 sm:w-40" />
        </Reveal>

        <div className="flex flex-col gap-8 lg:col-span-7">
          <SectionTitle
            eyebrow="About Miya"
            title="Beauty, confidence"
            accent="& self‑care."
            text="Welcome to Miya Beauty Salon & Spa, a dedicated sanctuary on Main Street in Molyko, Buea, crafted to elevate each client's natural elegance. Whether you're preparing for your wedding, coming in for routine nail care or unwinding with a deep body polish, our specialists take care of you with attention and sterile premium tools."
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 80}
                className="group rounded-3xl border border-sand bg-white p-4 sm:p-6 transition duration-300 hover:-translate-y-1 hover:border-rose-light hover:shadow-soft"
              >
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blush sm:h-12 sm:w-12 text-rose-dark transition-colors duration-300 group-hover:bg-ink group-hover:text-gold">
                  <Icon name={p.icon} className="text-[22px]" />
                </span>
                <h3 className="mt-4 font-serif text-lg leading-snug text-ink sm:text-xl">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-muted sm:text-sm">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
