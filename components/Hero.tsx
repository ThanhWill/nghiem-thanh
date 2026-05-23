'use client'

import Image from 'next/image'
import { Linkedin, Download, Mail, ArrowRight } from 'lucide-react'
import { personalInfo, stats, skills } from '@/lib/data'
import { useBook } from './BookContext'
import { GitHubIcon } from './icons'

const skillCategories = [
  { icon: '🎨', label: 'Frontend',  key: 'frontend' as const },
  { icon: '⚙️', label: 'Backend',   key: 'backend'  as const },
  { icon: '🛠️', label: 'Tools',     key: 'tools'    as const },
]

const contactLinks = [
  { Icon: Mail,       label: 'Email',    sub: personalInfo.email,     href: `mailto:${personalInfo.email}`, external: false },
  { Icon: GitHubIcon, label: 'GitHub',   sub: 'github.com/ThanhWill',  href: personalInfo.github,           external: true  },
  { Icon: Linkedin,   label: 'LinkedIn', sub: 'willson29996',          href: personalInfo.linkedin,         external: true  },
]

export function Hero() {
  const { navigate, current } = useBook()

  return (
    <section
      id="hero"
      style={{
        height: 'calc(100vh - 48px)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        background: '#ffffff',
      }}
    >
      {/* Top accent */}
      <div style={{ height: 4, flexShrink: 0, background: 'linear-gradient(90deg, #059669 0%, #34d399 100%)' }} />

      {/* Body */}
      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>

        {/* ── LEFT SIDEBAR ── */}
        <div style={{
          width: 248,
          flexShrink: 0,
          background: '#f8fafb',
          borderRight: '1px solid rgba(5,150,105,0.1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '28px 20px',
          gap: 18,
          overflow: 'hidden',
        }}>
          {/* Avatar */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              position: 'relative',
              width: 140,
              height: 164,
              borderRadius: 18,
              overflow: 'hidden',
              border: '2px solid rgba(5,150,105,0.35)',
              boxShadow: '0 6px 24px rgba(5,150,105,0.15)',
              flexShrink: 0,
            }}>
              <Image
                src={personalInfo.avatarUrl}
                alt="Nguyen Nghiem Thanh"
                fill
                className="object-cover object-top"
                priority
                sizes="140px"
              />
            </div>
          </div>

          {/* Contact cards */}
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(5,150,105,0.55)', marginBottom: 10 }}>
              Get in touch
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {contactLinks.map(({ Icon, label, sub, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '9px 12px', borderRadius: 10,
                    border: '1px solid rgba(5,150,105,0.14)',
                    background: '#ffffff', textDecoration: 'none',
                    transition: 'transform 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-1px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = '')}
                >
                  <div style={{
                    width: 30, height: 30, borderRadius: 8, flexShrink: 0,
                    background: 'rgba(5,150,105,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={14} style={{ color: '#059669' }} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#0f172a' }}>{label}</div>
                    <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: '#64748b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Download buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 'auto' }}>
            <a
              href={personalInfo.cvPdf}
              download="Nguyen-Nghiem-Thanh-CV.pdf"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                padding: '10px 14px', borderRadius: 9,
                background: '#059669', color: '#fff',
                fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 3px 10px rgba(5,150,105,0.3)',
              }}
            >
              <Download size={13} /> Download PDF
            </a>
            <a
              href={personalInfo.cvDocx}
              download="Nguyen-Nghiem-Thanh-CV.docx"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                padding: '10px 14px', borderRadius: 9,
                border: '1.5px solid rgba(5,150,105,0.4)', color: '#059669',
                fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <Download size={13} /> Word
            </a>
          </div>
        </div>

        {/* ── CENTER ── */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '28px 40px 22px',
          minWidth: 0,
          minHeight: 0,
          background: '#ffffff',
          overflow: 'hidden',
        }}>

          {/* TOP: header info */}
          <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 14 }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(5,150,105,0.6)', margin: 0 }}>
              01 / Cover
            </p>
            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.4rem)', fontWeight: 700, lineHeight: 1.12, color: '#0f172a', margin: 0 }}>
              Nguyen Nghiem Thanh
            </h1>
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', color: '#059669', margin: '0 0 3px' }}>
                Senior Full-Stack Engineer
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: '#64748b', margin: 0 }}>
                8+ Years · Enterprise &amp; B2B Platforms
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['React', 'Angular', 'Next.js', 'Node.js', 'Python', 'Java', 'Azure', 'SAP', 'ETL', 'ERP'].map(t => (
                <span key={t} style={{
                  padding: '4px 12px', borderRadius: 20, fontSize: 12,
                  fontFamily: 'var(--font-mono)',
                  border: '1px solid rgba(5,150,105,0.22)',
                  color: '#475569', background: '#f0fdf4',
                }}>
                  {t}
                </span>
              ))}
            </div>
            <div style={{ height: 1, background: 'rgba(5,150,105,0.12)' }} />
            <p style={{ fontSize: 14, lineHeight: 1.65, color: '#334155', margin: 0 }}>
              {personalInfo.description}
            </p>
            <div style={{ height: 1, background: 'rgba(5,150,105,0.12)' }} />
          </div>

          {/* MIDDLE: skills — grows to fill remaining space */}
          <div style={{ flex: 1, minHeight: 0, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 14 }}>
            {skillCategories.map(cat => (
              <div key={cat.key} style={{
                padding: '16px 18px', borderRadius: 12,
                background: '#f8fafb',
                border: '1px solid rgba(5,150,105,0.1)',
                display: 'flex', flexDirection: 'column',
                overflow: 'hidden',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 11, flexShrink: 0 }}>
                  <div style={{
                    width: 30, height: 30, borderRadius: 8, fontSize: 15,
                    background: 'rgba(5,150,105,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    {cat.icon}
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#059669', fontFamily: 'var(--font-mono)' }}>
                    {cat.label}
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignContent: 'flex-start' }}>
                  {skills[cat.key].map(skill => (
                    <span key={skill} style={{
                      fontSize: 12, padding: '4px 9px', borderRadius: 6,
                      background: '#ffffff',
                      border: '1px solid rgba(5,150,105,0.16)',
                      color: '#334155',
                      fontFamily: 'var(--font-mono)',
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM: stats + CTA */}
          <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ height: 1, background: 'rgba(5,150,105,0.12)' }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
              {stats.map(s => (
                <div key={s.label} style={{
                  padding: '12px 14px', borderRadius: 10,
                  background: '#f0fdf4', border: '1px solid rgba(5,150,105,0.12)',
                }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'clamp(1.3rem, 1.8vw, 1.7rem)', color: '#059669' }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94a3b8', marginTop: 3 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => navigate(current + 1)}
              style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 600, color: '#0f172a' }}>
                Open my portfolio
              </span>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(5,150,105,0.3)',
                transition: 'transform 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateX(4px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = '')}
              >
                <ArrowRight size={16} color="#fff" />
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
