import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { why } from '../data.js'

export default function WhyUs() {
  return (
    <section className="bg-blush py-20 sm:py-24 lg:py-32">
      <div className="container-site">
        <SectionTitle
          center
          eyebrow="The Miya difference"
          title="Why clients"
          accent="choose us."
          text="Thoughtful standards designed around your personal self-care journey."
        />
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5 lg:gap-5">
          {why.map((w, i) => (
            <Reveal
              key={w.n}
              delay={i * 80}
              className={`group relative flex flex-col overflow-hidden rounded-3xl bg-white p-5 transition sm:p-7 duration-500 hover:-translate-y-1.5 hover:bg-ink hover:shadow-lift ${
                i === 4 ? 'col-span-2 lg:col-span-1' : ''
              }`}
            >
              <span className="font-serif text-4xl italic sm:text-5xl text-rose-light transition-colors duration-500 group-hover:text-gold/40">
                {w.n}
              </span>
              <h3 className="mt-4 font-serif text-lg leading-snug sm:mt-6 sm:text-xl text-ink transition-colors duration-500 group-hover:text-cream">{w.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-muted transition sm:text-sm-colors duration-500 group-hover:text-cream/70">
                {w.text}
              </p>
              <Icon
                name={w.icon}
                className="mt-4 text-[26px] sm:mt-6 text-rose-dark transition-colors duration-500 group-hover:text-gold"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
