export interface Profile {
  name: string
  title: string
  tagline: string
  location: string
  relocation: string
  email: string
  phone: string
  phoneHref: string
  linkedin: string
  github: string
  resume: string
  summary: string
}

export interface Stat {
  value: string
  label: string
}

export interface SkillGroup {
  group: string
  items: string[]
}

export interface Experience {
  role: string
  note: string
  company: string
  place: string
  period: string
  bullets: string[]
}

export interface Project {
  name: string
  type: string
  period: string
  stack: string[]
  bullets: string[]
  link?: string
}

export interface Education {
  school: string
  place: string
  degree: string
  period: string
}
