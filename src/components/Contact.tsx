import { profile } from '../data'
import { btn, Reveal, Section } from './ui'

export function Contact() {
  const links = [
    { label: 'LinkedIn', value: 'Aftab Husain', href: profile.linkedin, icon: 'linkedin' },
    { label: 'GitHub', value: 'ahkhan13', href: profile.github, icon: 'github' },
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: 'mail' },
    { label: 'Phone', value: profile.phone, href: profile.phoneHref, icon: 'phone' },
  ]

  const Icon = ({ name }: { name: string }) => {
    if (name === 'linkedin') return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
      </svg>
    )
    if (name === 'github') return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
      </svg>
    )
    if (name === 'mail') return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    )
    if (name === 'phone') return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    )
    return null
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Get In Touch">
      <Reveal>
        <p className="max-w-2xl text-base text-zinc-400">
          Have a project in mind or want to discuss opportunities? Feel free to reach out through any of the platforms below.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {links.map((l, i) => (
          <Reveal key={l.label} delay={i * 0.06}>
            <a
              href={l.href}
              {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-cyan-400/40 hover:bg-white/[0.04]"
              aria-label={`${l.label}: ${l.value}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-400/20 text-cyan-300 transition group-hover:text-cyan-200">
                <Icon name={l.icon} />
              </div>
              <div>
                <p className="text-sm font-medium text-white">{l.label}</p>
                <p className="text-sm text-zinc-400">{l.value}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 flex justify-center">
        <a href={profile.resume} download className={`${btn} bg-gradient-to-r from-cyan-400 to-violet-500 text-[#0b0d12] hover:opacity-90`} aria-label="Download resume as PDF">
          Download Resume
        </a>
      </Reveal>
    </Section>
  )
}
