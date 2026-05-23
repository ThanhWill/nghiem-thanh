'use client'

import { useEffect, useState } from 'react'
import { Linkedin } from 'lucide-react'
import { GitHubIcon } from './icons'
import { personalInfo } from '@/lib/data'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Impact', href: '#performance' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[color:var(--bg)]/90 backdrop-blur-md border-b border-[color:var(--card-border)]'
          : 'bg-transparent'
      }`}
      data-hero={!scrolled ? 'true' : undefined}
    >
      <nav className="relative flex items-center justify-between h-14 px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
        {/* Logo */}
        <button
          type="button"
          className="flex items-center gap-1.5 hover:opacity-80 transition-opacity flex-shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span
            className="w-7 h-7 rounded-md flex items-center justify-center font-mono font-bold text-xs"
            style={{ background: 'var(--accent)', color: '#ffffff' }}
          >
            NT
          </span>
          <span className={`font-mono text-sm font-semibold tracking-wide ${scrolled ? 'text-[color:var(--text)]' : 'text-white/90'}`}>
            nghiem<span style={{ color: 'var(--accent)' }}>.</span>thanh
          </span>
        </button>

        {/* Desktop nav links — absolutely centered */}
        <ul className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`px-3 py-2 text-sm font-mono rounded-md transition-colors duration-150 hover:text-[color:var(--accent)] ${
                  scrolled ? 'text-[color:var(--text-muted)]' : 'text-white/70'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right: social + CTA */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-8 h-8 flex items-center justify-center rounded-md hover:text-[color:var(--accent)] transition-colors ${scrolled ? 'text-[color:var(--text-muted)]' : 'text-white/70'}`}
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-8 h-8 flex items-center justify-center rounded-md hover:text-[color:var(--accent)] transition-colors ${scrolled ? 'text-[color:var(--text-muted)]' : 'text-white/70'}`}
            aria-label="GitHub"
          >
            <GitHubIcon size={16} />
          </a>
          <a
            href="#contact"
            className={`px-3 py-2 text-sm font-mono hover:text-[color:var(--accent)] transition-colors duration-150 rounded-md ${scrolled ? 'text-[color:var(--text-muted)]' : 'text-white/70'}`}
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center">
          <button
            className="w-8 h-8 flex flex-col items-center justify-center gap-1.5
              text-[color:var(--text-muted)]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-4 h-px bg-current transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-4 h-px bg-current transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-4 h-px bg-current transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-b border-[color:var(--card-border)] px-4 py-3"
          style={{ background: 'var(--bg)' }}
        >
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left px-3 py-2 text-sm font-mono text-[color:var(--text-muted)]
                    hover:text-[color:var(--accent)] rounded-md transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 mt-3 pt-3 border-t border-[color:var(--card-border)]">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-[color:var(--accent)] transition-colors"><Linkedin size={16} /></a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-[color:var(--accent)] transition-colors"><GitHubIcon size={16} /></a>
            <a href="#contact" className="btn-outline text-xs px-4 py-1.5 ml-auto" onClick={(e) => { e.preventDefault(); handleNav('#contact') }}>Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
