import { profile } from '../data'
import { btn, card, Reveal, Section } from './ui'

export function Contact() {
  const links = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'Phone', value: profile.phone, href: profile.phoneHref },
    { label: 'LinkedIn', value: 'aftab-husain', href: profile.linkedin },
    { label: 'GitHub', value: 'ahkhan13', href: profile.github },
  ]
  return (
    <Section id="contact" eyebrow="Contact" title="Let's work together">
      <Reveal>
        <p className="max-w-xl text-zinc-400">
          Open to Software Engineer and Backend Engineer roles, and to freelance projects. Based in {profile.location}, {profile.relocation.toLowerCase()}.
        </p>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {links.map((l, i) => (
          <Reveal key={l.label} delay={i * 0.06}>
            <a
              href={l.href}
              {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`${card} block`}
              aria-label={`${l.label}: ${l.value}`}
            >
              <p className="text-xs uppercase tracking-wider text-zinc-500">{l.label}</p>
              <p className="mt-1 break-all text-sm text-white">{l.value}</p>
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <a href={profile.resume} download className={`${btn} bg-gradient-to-r from-cyan-400 to-violet-500 text-[#0b0d12] hover:opacity-90`} aria-label="Download resume as PDF">
          Download Resume (PDF)
        </a>
      </Reveal>
    </Section>
  )
}
