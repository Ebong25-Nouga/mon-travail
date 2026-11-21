import { useState } from 'react'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import WhatsAppIcon from '../components/WhatsAppIcon.jsx'
import {
  ADDRESS,
  ADDRESS_HINT,
  MAP_QUERY,
  PHONE,
  PHONE_LABEL,
  WA_LABEL,
  hours,
  serviceOptions,
  timeOptions,
  waLink,
} from '../data.js'

const empty = { name: '', phone: '', service: '', date: '', time: '', notes: '' }
const today = () => new Date().toISOString().split('T')[0]

function Field({ label, id, children, optional }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label} {optional ? <span className="font-normal text-ink-muted">(optional)</span> : <span className="text-rose-dark">*</span>}
      </label>
      {children}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const lines = [
      '*NEW APPOINTMENT REQUEST — MIYA BEAUTY SALON & SPA*',
      '',
      `*Name:* ${form.name.trim()}`,
      `*Phone:* ${form.phone.trim()}`,
      `*Service:* ${form.service}`,
      `*Preferred date:* ${form.date}`,
      `*Preferred time:* ${form.time}`,
    ]
    if (form.notes.trim()) lines.push(`*Notes:* ${form.notes.trim()}`)
    lines.push('', 'Please let me know your availability to confirm. Thank you!')
    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const info = [
    { icon: 'location_on', title: ADDRESS, text: ADDRESS_HINT },
    { icon: 'schedule', title: 'Opening hours', text: hours.map((h) => `${h.day}: ${h.time}`).join('\n') },
    { icon: 'call', title: 'Call us', text: PHONE_LABEL, href: `tel:${PHONE}` },
    { icon: 'chat', title: 'WhatsApp', text: WA_LABEL, href: waLink(), external: true },
  ]

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Infos + carte */}
        <div className="flex flex-col gap-8 lg:col-span-5">
          <SectionTitle
            eyebrow="Visit & book"
            title="Come see us"
            accent="in Molyko."
            text="Walk-ins are welcome depending on availability, but booking ahead is warmly advised."
          />

          <Reveal className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {info.map((it) => {
              const Tag = it.href ? 'a' : 'div'
              return (
                <Tag
                  key={it.title}
                  {...(it.href ? { href: it.href } : {})}
                  {...(it.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`flex items-start gap-4 rounded-2xl border border-sand bg-white p-4 ${
                    it.href ? 'transition hover:border-rose-light hover:shadow-soft' : ''
                  }`}
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blush text-rose-dark">
                    <Icon name={it.icon} className="text-[22px]" />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="font-semibold text-ink">{it.title}</span>
                    <span className="whitespace-pre-line text-sm leading-relaxed text-ink-muted">{it.text}</span>
                  </span>
                </Tag>
              )
            })}
          </Reveal>

          <Reveal className="overflow-hidden rounded-3xl border border-sand bg-sand shadow-soft">
            <iframe
              title="Map — Miya Beauty Salon & Spa, Molyko"
              src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`}
              className="h-64 w-full sm:h-72"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAP_QUERY)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white px-5 py-4 text-sm font-semibold text-ink transition hover:bg-blush"
            >
              <span className="flex items-center gap-2">
                <Icon name="directions" className="text-[20px] text-rose-dark" /> Get directions
              </span>
              <Icon name="arrow_outward" className="text-[18px]" />
            </a>
          </Reveal>
        </div>

        {/* Formulaire */}
        <Reveal delay={120} className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-lift sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blush" />
            <div className="relative">
              <span className="eyebrow">Reserve your seat</span>
              <h3 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">Book an appointment</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                Fill in your details: your request is formatted automatically and sent to our front desk on WhatsApp for
                confirmation.
              </p>

              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-3xl bg-blush p-8 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-whatsapp text-white">
                    <Icon name="check" className="text-[32px]" />
                  </span>
                  <p className="font-serif text-2xl text-ink">Almost done!</p>
                  <p className="max-w-sm text-sm text-ink-muted">
                    WhatsApp has opened with your request. Just press <strong>Send</strong> — we&apos;ll confirm your
                    appointment shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(empty)
                      setSent(false)
                    }}
                    className="btn-light mt-2"
                  >
                    New request
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-8 grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" id="name">
                      <input id="name" className="field" required autoComplete="name" placeholder="e.g. Mary Njang" value={form.name} onChange={set('name')} />
                    </Field>
                    <Field label="Phone number" id="phone">
                      <input id="phone" className="field" required type="tel" autoComplete="tel" placeholder="+237 6XX XXX XXX" value={form.phone} onChange={set('phone')} />
                    </Field>
                  </div>
                  <Field label="Service" id="service">
                    <select id="service" className="field cursor-pointer" required value={form.service} onChange={set('service')}>
                      <option value="" disabled>
                        Choose a service
                      </option>
                      {serviceOptions.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </Field>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Preferred date" id="date">
                      <input id="date" className="field" required type="date" min={today()} value={form.date} onChange={set('date')} />
                    </Field>
                    <Field label="Preferred time" id="time">
                      <select id="time" className="field cursor-pointer" required value={form.time} onChange={set('time')}>
                        <option value="" disabled>
                          Choose a time slot
                        </option>
                        {timeOptions.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </Field>
                  </div>
                  <Field label="Special requests" id="notes" optional>
                    <textarea
                      id="notes"
                      rows={3}
                      className="field resize-none"
                      placeholder="Sensitive skin, wig customization, wedding party…"
                      value={form.notes}
                      onChange={set('notes')}
                    />
                  </Field>
                  <button type="submit" className="btn-wa w-full !py-4 text-[15px]">
                    <WhatsAppIcon /> Send my request on WhatsApp
                  </button>
                  <p className="text-center text-xs text-ink-muted">Appointments are subject to salon availability.</p>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
