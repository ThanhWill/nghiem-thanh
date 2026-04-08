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
    >
      <nav className="container flex items-center justify-between h-14 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          type="button"
          className="font-mono text-sm font-bold tracking-tight hover:opacity-80 transition-opacity"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-[color:var(--text)]">NGUYEN</span>
          <span style={{ color: 'var(--accent)' }}>THANH</span>
        </button>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="px-3 py-2 text-sm font-mono text-[color:var(--text-muted)] hover:text-[color:var(--text)]
                  rounded-md transition-colors duration-150"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right: social + CTA */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-md text-[color:var(--text-muted)]
              hover:text-[color:var(--accent)] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-md text-[color:var(--text-muted)]
              hover:text-[color:var(--accent)] transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon size={16} />
          </a>
          <a
            href="#contact"
            className="px-3 py-2 text-sm font-mono text-[color:var(--text-muted)] hover:text-[color:var(--accent)] transition-colors duration-150 rounded-md"
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
