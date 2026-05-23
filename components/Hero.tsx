'use client'

import Image from 'next/image'
import { Linkedin, Download, Mail, ArrowRight } from 'lucide-react'
import { personalInfo, stats, skills } from '@/lib/data'
import { useBook } from './BookContext'
import { GitHubIcon } from './icons'

const skillCategories = [
  { icon: '🎨', label: 'Frontend', key: 'frontend' as const },
  { icon: '⚙️', label: 'Backend',  key: 'backend'  as const },
  { icon: '🛠️', label: 'Tools',    key: 'tools'    as const },
]

const contactLinks = [
  { Icon: Mail,       label: 'Email',    sub: personalInfo.email,    href: `mailto:${personalInfo.email}`, external: false },
  { Icon: GitHubIcon, label: 'GitHub',   sub: 'github.com/ThanhWill', href: personalInfo.github,          external: true  },
  { Icon: Linkedin,   label: 'LinkedIn', sub: 'willson29996',         href: personalInfo.linkedin,        external: true  },
]

const CHIPS = ['React', 'Angular', 'Next.js', 'Node.js', 'Python', 'Java', 'Azure', 'SAP', 'ETL', 'ERP']

export function Hero() {
  const { navigate, current } = useBook()

  return (
    <section
      id="hero"
      className={[
        'flex flex-col bg-white',
        /* mobile: natural height, scrollable */
        'min-h-[calc(100vh-48px)] pb-[60px]',
        /* desktop: locked to viewport, no scroll */
        'lg:h-[calc(100vh-48px)] lg:overflow-hidden lg:min-h-0 lg:pb-0',
      ].join(' ')}
    >
      {/* Top accent strip */}
      <div className="h-1 flex-shrink-0"
        style={{ background: 'linear-gradient(90deg, #059669 0%, #34d399 100%)' }} />

      {/* ── MOBILE: compact avatar header ── */}
      <div className="lg:hidden flex-shrink-0"
        style={{ background: '#f8fafb', borderBottom: '1px solid rgba(5,150,105,0.1)' }}>
        {/* Avatar + name row */}
        <div className="flex items-center gap-4 px-5 pt-4 pb-3">
          <div className="relative flex-shrink-0 rounded-2xl overflow-hidden"
            style={{ width: 68, height: 80, border: '2px solid rgba(5,150,105,0.35)', boxShadow: '0 4px 16px rgba(5,150,105,0.15)' }}>
            <Image src={personalInfo.avatarUrl} alt="Nguyen Nghiem Thanh" fill
              className="object-cover object-top" priority sizes="68px" />
          </div>
          <div>
            <h1 className="font-bold leading-tight" style={{ fontSize: 'clamp(1.25rem, 5vw, 1.6rem)', color: '#0f172a' }}>
              Nguyen Nghiem Thanh
            </h1>
            <p className="font-mono font-semibold mt-0.5" style={{ fontSize: 'clamp(0.78rem, 3vw, 0.95rem)', color: '#059669' }}>
              Senior Full-Stack Engineer
            </p>
            <p className="font-mono" style={{ fontSize: 11, color: '#64748b' }}>
              8+ Years · Enterprise &amp; B2B
            </p>
          </div>
        </div>
        {/* Download buttons row */}
        <div className="flex gap-3 px-5 pb-4">
          <a href={personalInfo.cvPdf} download="Nguyen-Nghiem-Thanh-CV.pdf"
            className="flex-1 flex items-center justify-center gap-2 font-mono font-semibold rounded-xl"
            style={{ padding: '10px 16px', background: '#059669', color: '#fff', fontSize: 14, boxShadow: '0 3px 10px rgba(5,150,105,0.3)', textDecoration: 'none' }}>
            <Download size={14} /> Download PDF
          </a>
          <a href={personalInfo.cvDocx} download="Nguyen-Nghiem-Thanh-CV.docx"
            className="flex-1 flex items-center justify-center gap-2 font-mono font-semibold rounded-xl"
            style={{ padding: '10px 16px', border: '1.5px solid rgba(5,150,105,0.4)', color: '#059669', fontSize: 14, textDecoration: 'none' }}>
            <Download size={14} /> Word
          </a>
        </div>
      </div>

      {/* ── BODY: sidebar (desktop) + main content ── */}
      <div className="flex flex-col lg:flex-row flex-1 min-h-0">

        {/* ── DESKTOP SIDEBAR ── */}
        <div className="hidden lg:flex flex-col flex-shrink-0 overflow-hidden"
          style={{
            width: 248,
            background: '#f8fafb',
            borderRight: '1px solid rgba(5,150,105,0.1)',
            padding: '28px 20px',
            gap: 18,
          }}>
          <div className="flex justify-center">
            <div className="relative rounded-[18px] overflow-hidden flex-shrink-0"
              style={{ width: 140, height: 164, border: '2px solid rgba(5,150,105,0.35)', boxShadow: '0 6px 24px rgba(5,150,105,0.15)' }}>
              <Image src={personalInfo.avatarUrl} alt="Nguyen Nghiem Thanh" fill
                className="object-cover object-top" priority sizes="140px" />
            </div>
          </div>

          <div>
            <p className="font-mono uppercase mb-2.5"
              style={{ fontSize: 11, letterSpacing: '0.18em', color: 'rgba(5,150,105,0.55)' }}>
              Get in touch
            </p>
            <div className="flex flex-col" style={{ gap: 7 }}>
              {contactLinks.map(({ Icon, label, sub, href, external }) => (
                <a key={label} href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2.5 rounded-xl transition-transform hover:-translate-y-px"
                  style={{ padding: '9px 12px', border: '1px solid rgba(5,150,105,0.14)', background: '#fff', textDecoration: 'none' }}>
                  <div className="flex items-center justify-center flex-shrink-0 rounded-lg"
                    style={{ width: 30, height: 30, background: 'rgba(5,150,105,0.08)' }}>
                    <Icon size={14} style={{ color: '#059669' }} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold" style={{ fontSize: 13, color: '#0f172a' }}>{label}</div>
                    <div className="font-mono truncate" style={{ fontSize: 11, color: '#64748b' }}>{sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col mt-auto" style={{ gap: 8 }}>
            <a href={personalInfo.cvPdf} download="Nguyen-Nghiem-Thanh-CV.pdf"
              className="flex items-center justify-center gap-1.5 font-mono font-semibold rounded-[9px]"
              style={{ padding: '10px 14px', background: '#059669', color: '#fff', fontSize: 13, boxShadow: '0 3px 10px rgba(5,150,105,0.3)', textDecoration: 'none' }}>
              <Download size={13} /> Download PDF
            </a>
            <a href={personalInfo.cvDocx} download="Nguyen-Nghiem-Thanh-CV.docx"
              className="flex items-center justify-center gap-1.5 font-mono font-semibold rounded-[9px]"
              style={{ padding: '10px 14px', border: '1.5px solid rgba(5,150,105,0.4)', color: '#059669', fontSize: 13, textDecoration: 'none' }}>
              <Download size={13} /> Word
            </a>
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="flex-1 flex flex-col min-w-0 min-h-0 overflow-y-auto lg:overflow-hidden bg-white"
          style={{ padding: 'clamp(16px,3vw,28px) clamp(16px,4vw,40px) clamp(14px,2vw,22px)' }}>

          {/* TOP — fixed header block */}
          <div className="flex-shrink-0 flex flex-col" style={{ gap: 10, marginBottom: 12 }}>

            {/* Page label — desktop only */}
            <p className="hidden lg:block font-mono uppercase"
              style={{ fontSize: 12, letterSpacing: '0.2em', color: 'rgba(5,150,105,0.6)', margin: 0 }}>
              01 / Cover
            </p>

            {/* Name + title — desktop only (mobile shows these in the header above) */}
            <div className="hidden lg:block" style={{ marginBottom: 2 }}>
              <h1 style={{ fontSize: 'clamp(2rem,3.5vw,3.4rem)', fontWeight: 700, lineHeight: 1.12, color: '#0f172a', margin: '0 0 5px' }}>
                Nguyen Nghiem Thanh
              </h1>
              <p className="font-mono font-semibold" style={{ fontSize: 'clamp(1rem,1.5vw,1.25rem)', color: '#059669', margin: '0 0 3px' }}>
                Senior Full-Stack Engineer
              </p>
              <p className="font-mono" style={{ fontSize: 14, color: '#64748b', margin: 0 }}>
                8+ Years · Enterprise &amp; B2B Platforms
              </p>
            </div>

            {/* Tech chips */}
            <div className="flex flex-wrap" style={{ gap: 6 }}>
              {CHIPS.map(t => (
                <span key={t} className="font-mono"
                  style={{ padding: '4px 11px', borderRadius: 20, fontSize: 12, border: '1px solid rgba(5,150,105,0.22)', color: '#475569', background: '#f0fdf4' }}>
                  {t}
                </span>
              ))}
            </div>

            <div style={{ height: 1, background: 'rgba(5,150,105,0.12)' }} />

            {/* Bio */}
            <p style={{ fontSize: 14, lineHeight: 1.65, color: '#334155', margin: 0 }}>
              {personalInfo.description}
            </p>

            {/* Mobile: contact cards (desktop sidebar handles these) */}
            <div className="lg:hidden flex flex-col" style={{ gap: 7 }}>
              {contactLinks.map(({ Icon, label, sub, href, external }) => (
                <a key={label} href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 rounded-xl"
                  style={{ padding: '10px 14px', border: '1px solid rgba(5,150,105,0.14)', background: '#f8fafb', textDecoration: 'none' }}>
                  <div className="flex items-center justify-center flex-shrink-0 rounded-lg"
                    style={{ width: 34, height: 34, background: 'rgba(5,150,105,0.08)' }}>
                    <Icon size={15} style={{ color: '#059669' }} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold" style={{ fontSize: 14, color: '#0f172a' }}>{label}</div>
                    <div className="font-mono truncate" style={{ fontSize: 12, color: '#64748b' }}>{sub}</div>
                  </div>
                </a>
              ))}
            </div>

            <div style={{ height: 1, background: 'rgba(5,150,105,0.12)' }} />
          </div>

          {/* MIDDLE — skills grid: grows on desktop, auto on mobile */}
          <div
            className="grid gap-3 lg:flex-1 lg:min-h-0"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginBottom: 12 }}
          >
            {skillCategories.map(cat => (
              <div key={cat.key}
                className="flex flex-col overflow-hidden rounded-xl"
                style={{ padding: '14px 16px', background: '#f8fafb', border: '1px solid rgba(5,150,105,0.1)' }}>
                <div className="flex items-center flex-shrink-0" style={{ gap: 8, marginBottom: 10 }}>
                  <div className="flex items-center justify-center flex-shrink-0 rounded-lg"
                    style={{ width: 30, height: 30, fontSize: 15, background: 'rgba(5,150,105,0.1)' }}>
                    {cat.icon}
                  </div>
                  <span className="font-mono font-semibold" style={{ fontSize: 13, color: '#059669' }}>
                    {cat.label}
                  </span>
                </div>
                <div className="flex flex-wrap" style={{ gap: 5, alignContent: 'flex-start' }}>
                  {skills[cat.key].map(skill => (
                    <span key={skill} className="font-mono"
                      style={{ fontSize: 12, padding: '3px 8px', borderRadius: 5, background: '#fff', border: '1px solid rgba(5,150,105,0.16)', color: '#334155' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM — stats + mobile downloads + CTA */}
          <div className="flex-shrink-0 flex flex-col" style={{ gap: 12 }}>
            <div style={{ height: 1, background: 'rgba(5,150,105,0.12)' }} />

            <div className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: 8 }}>
              {stats.map(s => (
                <div key={s.label} className="rounded-xl"
                  style={{ padding: '10px 14px', background: '#f0fdf4', border: '1px solid rgba(5,150,105,0.12)' }}>
                  <div className="font-mono font-bold"
                    style={{ fontSize: 'clamp(1.2rem,1.8vw,1.7rem)', color: '#059669' }}>
                    {s.value}
                  </div>
                  <div className="uppercase" style={{ fontSize: 10, letterSpacing: '0.06em', color: '#94a3b8', marginTop: 3 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <button type="button" onClick={() => navigate(current + 1)}
              className="flex items-center gap-2.5"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <span className="font-mono font-semibold" style={{ fontSize: 15, color: '#0f172a' }}>
                Open my portfolio
              </span>
              <div className="flex items-center justify-center rounded-full transition-transform hover:translate-x-1"
                style={{ width: 36, height: 36, background: '#059669', boxShadow: '0 4px 12px rgba(5,150,105,0.3)' }}>
                <ArrowRight size={16} color="#fff" />
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
