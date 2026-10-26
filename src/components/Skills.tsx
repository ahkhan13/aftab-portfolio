import { skills } from '../data'
import { card, Chip, Reveal, Section } from './ui'

export function Skills() {
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
