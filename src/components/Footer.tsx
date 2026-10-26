import { profile } from '../data'

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-center text-xs text-zinc-600">
      <div className="mx-auto max-w-6xl px-5">
        © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, Tailwind CSS, and Framer Motion.
      </div>
    </footer>
  )
}
