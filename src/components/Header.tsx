import { useState } from 'react'
import { profile } from '../data'
import { btn } from './ui'

const nav = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0b0d12]/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <a href="#top" className="flex items-center gap-2 text-lg font-semibold text-white" aria-label="Aftab Husain - home">
          <img src={import.meta.env.BASE_URL + 'profile.jpg'} alt="Aftab Husain" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/20" />
          <span>AH<span className="text-cyan-400">.</span></span>
        </a>
        <ul className="hidden gap-8 text-sm md:flex">
          {nav.map((n) => (
            <li key={n}>
              <a href={`#${n.toLowerCase()}`} className="text-zinc-400 transition hover:text-white">{n}</a>
            </li>
          ))}
        </ul>
        <a href={profile.resume} download className={`${btn} hidden border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 md:inline-flex`} aria-label="Download resume as PDF">
          Resume
        </a>
        <button className="p-2 text-white md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
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
          <li>
            <a href={profile.resume} download onClick={() => setOpen(false)} className="block py-2 text-cyan-300">Download Resume</a>
          </li>
        </ul>
      )}
    </header>
  )
}
