import { profile } from '../data'
import { card, Reveal, Section } from './ui'

export function About() {
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
