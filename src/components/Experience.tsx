import { education, experience } from '../data'
import { Bullets, card, Reveal, Section } from './ui'

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Work history">
      <div className="relative space-y-8 border-l border-white/10 pl-6 md:pl-10">
        {experience.map((e) => (
          <Reveal key={e.role + e.period}>
            <span className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" aria-hidden />
            <article className={card}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">{e.role}</h3>
                <span className="text-sm text-cyan-300">{e.period}</span>
              </div>
              <p className="mt-1 text-sm text-zinc-500">
                {e.company} · {e.place}
                {e.note && ` · ${e.note}`}
              </p>
              <div className="mt-5"><Bullets items={e.bullets} /></div>
            </article>
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
