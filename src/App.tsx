import { useState, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile, stats, skills, experience, projects, education } from './data'

const nav = ['About', 'Skills', 'Experience', 'Projects', 'Contact']
const grad = 'bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent'
const card = 'rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.05]'
const btn = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400'

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">{eyebrow}</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}

const Chip = ({ children }: { children: ReactNode }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">{children}</span>
)

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 text-sm leading-relaxed text-zinc-400">
    {items.map((b) => (
      <li key={b} className="flex gap-3">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" aria-hidden />
        <span>{b}</span>
      </li>
    ))}
  </ul>
)

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0b0d12]/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <a href="#top" className="text-lg font-semibold text-white">
          AH<span className="text-cyan-400">.</span>
        </a>
        <ul className="hidden gap-8 text-sm md:flex">
          {nav.map((n) => (
            <li key={n}>
              <a href={`#${n.toLowerCase()}`} className="text-zinc-400 transition hover:text-white">{n}</a>
            </li>
          ))}
        </ul>
        <a href={profile.resume} download className={`${btn} hidden border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 md:inline-flex`}>
          Resume
        </a>
        <button className="p-2 text-white md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </nav>
      {open && (
        <ul className="space-y-1 border-t border-white/5 bg-[#0b0d12] px-5 py-4 md:hidden">
          {nav.map((n) => (
            <li key={n}>
              <a href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-2 text-zinc-300">{n}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute top-40 right-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-zinc-300">
            {profile.location} · {profile.relocation}
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
            Hi, I'm <span className={grad}>{profile.name}</span>
          </h1>
          <p className="mt-4 text-xl font-medium text-zinc-200 md:text-2xl">{profile.title}</p>
          <p className="mt-2 text-sm text-zinc-500 md:text-base">{profile.tagline}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Building production backend systems and Generative AI features with Node.js, NestJS, TypeScript, and AWS.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={`${btn} bg-gradient-to-r from-cyan-400 to-violet-500 text-[#0b0d12] hover:opacity-90`}>View Projects</a>
            <a href={profile.resume} download className={`${btn} border border-white/15 text-white hover:bg-white/5`}>Download Resume</a>
            <a href="#contact" className={`${btn} text-zinc-300 hover:text-white`}>Contact me →</a>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className={card}>
              <p className={`text-3xl font-bold ${grad}`}>{s.value}</p>
              <p className="mt-1 text-xs text-zinc-500">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

function About() {
  const facts = [
    ['Location', `${profile.location} (${profile.relocation})`],
    ['Current role', `${profile.title}, Eternalight Infotech`],
    ['Education', 'B.Tech, ECE, IIIT Kurnool'],
    ['Experience', '4.5 years'],
  ]
  return (
    <Section id="about" eyebrow="About" title="About me">
      <div className="grid gap-8 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <p className="text-base leading-relaxed text-zinc-400 md:text-lg">{profile.summary}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className={`${card} space-y-4`}>
            {facts.map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs uppercase tracking-wider text-zinc-500">{k}</dt>
                <dd className="mt-1 text-sm text-zinc-200">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technical skills">
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={(i % 2) * 0.08}>
            <div className={`${card} h-full`}>
              <h3 className="mb-4 text-sm font-semibold text-white">{g.group}</h3>
              <div className="flex flex-wrap gap-2">{g.items.map((s) => <Chip key={s}>{s}</Chip>)}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Work history">
      <div className="relative space-y-8 border-l border-white/10 pl-6 md:pl-10">
        {experience.map((e) => (
          <Reveal key={e.role}>
            <span className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" aria-hidden />
            <div className={card}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">{e.role}</h3>
                <span className="text-sm text-cyan-300">{e.period}</span>
              </div>
              <p className="mt-1 text-sm text-zinc-500">
                {e.company} · {e.place}
                {e.note && ` · ${e.note}`}
              </p>
              <div className="mt-5"><Bullets items={e.bullets} /></div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10">
        <div className={card}>
          <p className="text-xs uppercase tracking-wider text-zinc-500">Education</p>
          <p className="mt-2 font-medium text-white">{education.degree}</p>
          <p className="text-sm text-zinc-500">{education.school}, {education.place} · {education.period}</p>
        </div>
      </Reveal>
    </Section>
  )
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected projects">
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <article className={`${card} flex h-full flex-col`}>
              <p className="text-xs text-cyan-300">{p.period}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{p.name}</h3>
              <p className="text-sm text-zinc-500">{p.type}</p>
              <div className="mt-4 flex flex-wrap gap-2">{p.stack.map((s) => <Chip key={s}>{s}</Chip>)}</div>
              <div className="mt-5 flex-1"><Bullets items={p.bullets} /></div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="mt-6 text-sm font-medium text-cyan-300 hover:text-cyan-200">
                  View project ↗
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className={`${btn} border border-white/15 text-white hover:bg-white/5`}>
          More on GitHub ↗
        </a>
      </Reveal>
    </Section>
  )
}

function Contact() {
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
            >
              <p className="text-xs uppercase tracking-wider text-zinc-500">{l.label}</p>
              <p className="mt-1 break-all text-sm text-white">{l.value}</p>
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <a href={profile.resume} download className={`${btn} bg-gradient-to-r from-cyan-400 to-violet-500 text-[#0b0d12] hover:opacity-90`}>
          Download Resume (PDF)
        </a>
      </Reveal>
    </Section>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-8 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, Tailwind CSS, and Framer Motion.
      </footer>
    </>
  )
}
