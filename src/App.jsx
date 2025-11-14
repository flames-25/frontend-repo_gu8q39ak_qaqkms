import React, { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Code2, Sparkles, Globe, Phone } from 'lucide-react'

function Navbar() {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-gray-900 flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs">FB</span>
          <span>Flames Blue</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-gray-600 hover:text-gray-900 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-2 hover:bg-gray-800 transition-colors">
            Let’s talk <ArrowRight size={16} />
          </a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100" onClick={() => {
          const m = document.getElementById('mobile-nav')
          if (m) m.classList.toggle('hidden')
        }}>Menu</button>
      </div>
      <div id="mobile-nav" className="md:hidden hidden border-t border-black/5 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
          <a href="#about" className="text-gray-700">About</a>
          <a href="#projects" className="text-gray-700">Projects</a>
          <a href="#skills" className="text-gray-700">Skills</a>
          <a href="#contact" className="text-gray-700">Contact</a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:h-screen w-full overflow-hidden grid md:grid-cols-2 items-center pt-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/60 via-white/30 to-white/80" />

      <div className="order-2 md:order-1 relative z-10 max-w-6xl mx-auto w-full px-4 py-16 md:py-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-gray-700 shadow-sm">
          <Sparkles size={14} className="text-indigo-600" /> Available for freelance
        </div>
        <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
          Hi, I’m Alex — a full‑stack developer crafting playful, modern experiences.
        </h1>
        <p className="mt-4 text-gray-600 md:text-lg max-w-xl">
          I blend clean code with delightful interactions to build fast, accessible products. Explore a selection of my favorite work below.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-5 py-2.5 hover:bg-gray-800 transition-colors">
            View Projects <ArrowRight size={16} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-gray-900 hover:bg-gray-50">
            Contact
          </a>
        </div>
        <div className="mt-6 flex items-center gap-4 text-gray-700">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-gray-900">
            <Github size={18} /> GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-gray-900">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 hover:text-gray-900">
            <Mail size={18} /> Email
          </a>
        </div>
      </div>

      <div className="order-1 md:order-2 relative h-[60vh] md:h-full">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">About</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I’m a developer who enjoys building interactive, performant web apps with a focus on craft and clarity. From idea to launch, I partner with teams to design, build, and iterate quickly.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Stat number="5+" label="Years Experience" />
              <Stat number="30+" label="Projects Shipped" />
            </div>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">Quick Facts</h3>
            <ul className="mt-3 space-y-2 text-gray-600 text-sm">
              <li className="flex items-center gap-2"><Globe size={16} className="text-indigo-600"/> Remote-friendly, GMT±3</li>
              <li className="flex items-center gap-2"><Code2 size={16} className="text-indigo-600"/> React, Node, Python, FastAPI</li>
              <li className="flex items-center gap-2"><Phone size={16} className="text-indigo-600"/> Rapid prototyping & polish</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ number, label }) {
  return (
    <div className="rounded-xl border border-black/10 bg-white p-5 shadow-sm">
      <div className="text-2xl font-bold text-gray-900">{number}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}

function Projects() {
  const works = [
    {
      title: 'Realtime Collab Tool',
      desc: 'A multiplayer canvas with CRDT sync and playful UX.',
      tags: ['React', 'WebSockets', 'Tailwind'],
      link: '#',
    },
    {
      title: 'AI-Powered Docs',
      desc: 'Semantic search and chat over private knowledge bases.',
      tags: ['FastAPI', 'Pinecone', 'OpenAI'],
      link: '#',
    },
    {
      title: '3D Product Site',
      desc: '3D interactions with Spline and smooth scroll scenes.',
      tags: ['Spline', 'Framer Motion'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="relative py-20 md:py-28 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Selected Projects</h2>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-sm rounded-full border border-black/10 bg-white px-4 py-2 hover:bg-gray-50">
            See availability <ArrowRight size={16} />
          </a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {works.map((w) => (
            <article key={w.title} className="group rounded-2xl border border-black/10 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-100 to-blue-100" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{w.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{w.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {w.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-gray-100 text-gray-700 px-2 py-1">{t}</span>
                ))}
              </div>
              <a href={w.link} className="mt-4 inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700">
                View project <ExternalLink size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const groups = [
    { title: 'Frontend', items: ['React', 'Vite', 'Tailwind', 'Framer Motion', 'Spline'] },
    { title: 'Backend', items: ['FastAPI', 'Node', 'MongoDB', 'Auth', 'REST'] },
    { title: 'Tools', items: ['Git', 'Vercel', 'Figma', 'Jest', 'CI/CD'] },
  ]

  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Skills</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">{g.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="text-xs rounded-full bg-indigo-50 text-indigo-700 px-2.5 py-1">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Let’s build something great</h2>
            <p className="mt-4 text-gray-600">Tell me about your project, timeline, and goals. I’ll get back within 24 hours.</p>
            <div className="mt-6 flex items-center gap-4 text-gray-700">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-gray-900"><Github size={18}/> GitHub</a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-gray-900"><Linkedin size={18}/> LinkedIn</a>
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 hover:text-gray-900"><Mail size={18}/> hello@example.com</a>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4">
              <label className="text-sm text-gray-700">Name
                <input type="text" required className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
              </label>
              <label className="text-sm text-gray-700">Email
                <input type="email" required className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
              </label>
              <label className="text-sm text-gray-700">Message
                <textarea rows="4" required className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
              </label>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 hover:bg-gray-800">Send message <ArrowRight size={16}/></button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Alex • Built with React, Tailwind, and Spline</p>
        <div className="flex items-center gap-4">
          <a href="#home" className="hover:text-gray-900">Back to top</a>
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="scroll-smooth bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
