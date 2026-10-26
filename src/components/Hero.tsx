import { profile, stats } from '../data'
import { btn, card, grad, Reveal } from './ui'

export function Hero() {
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
            <a href={profile.resume} download className={`${btn} border border-white/15 text-white hover:bg-white/5`} aria-label="Download resume as PDF">Download Resume</a>
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
