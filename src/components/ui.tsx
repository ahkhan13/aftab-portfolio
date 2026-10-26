import { useReducedMotion, motion } from 'framer-motion'
import type { ReactNode } from 'react'

export const grad = 'bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent'
export const card = 'rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.05]'
export const btn = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0d12]'

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
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

export function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
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

export const Chip = ({ children }: { children: ReactNode }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">{children}</span>
)

export const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 text-sm leading-relaxed text-zinc-400">
    {items.map((b) => (
      <li key={b} className="flex gap-3">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" aria-hidden />
        <span>{b}</span>
      </li>
    ))}
  </ul>
)
