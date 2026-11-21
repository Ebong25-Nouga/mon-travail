import Reveal from './Reveal.jsx'

export default function SectionTitle({ eyebrow, title, accent, text, center = false, dark = false }) {
  return (
    <Reveal className={`flex flex-col gap-4 ${center ? 'mx-auto max-w-2xl items-center text-center' : 'max-w-2xl'}`}>
      <span className={`eyebrow ${dark ? '!text-gold-light' : ''}`}>{eyebrow}</span>
      <h2
        className={`font-serif text-[2rem] leading-[1.15] sm:text-4xl lg:text-[2.75rem] ${dark ? 'text-cream' : 'text-ink'}`}
      >
        {title} {accent && <em className={`italic ${dark ? 'text-rose-light' : 'text-rose-dark'}`}>{accent}</em>}
      </h2>
      {text && <p className={`text-[15px] leading-relaxed sm:text-base ${dark ? 'text-cream/70' : 'text-ink-muted'}`}>{text}</p>}
    </Reveal>
  )
}
