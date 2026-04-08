'use client'

import { useInView } from '@/hooks/useInView'
import { personalInfo } from '@/lib/data'
import { Mail, Linkedin, Download, ArrowRight } from 'lucide-react'
import { GitHubIcon } from './icons'

const links = [
  {
    label: 'Send an Email',
    sublabel: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'GitHub',
    sublabel: 'See my open source work',
    href: personalInfo.github,
    icon: GitHubIcon,
    external: true,
  },
  {
    label: 'LinkedIn',
    sublabel: 'Connect professionally',
    href: personalInfo.linkedin,
    icon: Linkedin,
    external: true,
  },
]

export function Contact() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding"
    >
      <div className="container-max">
        {/* Header */}
        <div
          className={`mb-10 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="font-mono text-sm uppercase tracking-widest mb-2" style={{ color: 'var(--accent)' }}>
            05 / Contact
          </p>
          <h2 className="section-title">
            Let's build something <span className="gradient-text">great together</span>
          </h2>
          <p className="section-subtitle">
            Open to full-time roles, contract work, and interesting projects.
            Reach out — I reply fast.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {links.map((link, i) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className={`group glass rounded-2xl border p-6 flex items-center justify-between
                  transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]
                  ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${150 + i * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'var(--accent-dim)' }}
                  >
                    <Icon size={18} className="text-muted transition-colors duration-200 group-hover:text-[color:var(--accent)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[color:var(--text)]">
                      {link.label}
                    </div>
                    <div className="text-xs text-muted">{link.sublabel}</div>
                  </div>
                </div>
                <ArrowRight size={16} className="text-muted group-hover:translate-x-1 transition-transform duration-200" style={{ color: 'var(--accent)' }} />
              </a>
            )
          })}
        </div>

        {/* Download CV */}
        <div
          className={`flex justify-center transition-all duration-700 delay-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href={personalInfo.cvPdf}
            download
            className="btn-primary text-base px-8 py-4"
          >
            <Download size={18} />
            Download Full CV
          </a>
        </div>
      </div>
    </section>
  )
}
