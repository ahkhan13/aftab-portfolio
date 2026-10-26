import { profile, projects } from '../data'
import { btn, card, Chip, Bullets, Reveal, Section } from './ui'

export function Projects() {
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
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="mt-6 text-sm font-medium text-cyan-300 hover:text-cyan-200" aria-label={`View ${p.name} project on GitHub`}>
                  View project ↗
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className={`${btn} border border-white/15 text-white hover:bg-white/5`} aria-label="View more projects on GitHub">
          More on GitHub ↗
        </a>
      </Reveal>
    </Section>
  )
}
