'use client'

import Image from 'next/image'
import { Linkedin, Download } from 'lucide-react'
import { GitHubIcon } from './icons'
import { personalInfo, stats } from '@/lib/data'
import { StarField } from './StarField'

function AvatarWithOrbit({ style, imgSizes }: { style?: React.CSSProperties; imgSizes?: string }) {
  return (
    <div className="relative" style={style}>
      {/* Outer diffused glow */}
      <div className="absolute rounded-full pointer-events-none"
        style={{ inset: '-20px', background: 'radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 70%)', filter: 'blur(18px)' }} />

      {/* Orbit ring 1 — main dashed ring, clockwise, white + amber glow */}
      <svg
        className="absolute pointer-events-none"
        style={{
          inset: '-14px',
          width: 'calc(100% + 28px)',
          height: 'calc(100% + 28px)',
          animation: 'orbitCW 22s linear infinite',
          filter: 'drop-shadow(0 0 5px rgba(245,158,11,0.9)) drop-shadow(0 0 12px rgba(245,158,11,0.5))',
        }}
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="47" fill="none"
          stroke="rgba(255,255,255,0.88)" strokeWidth="1.1"
          strokeDasharray="11 11" strokeLinecap="round" />
      </svg>

      {/* Orbit ring 2 — inner faint amber ring, counter-clockwise */}
      <svg
        className="absolute pointer-events-none"
        style={{
          inset: '-5px',
          width: 'calc(100% + 10px)',
          height: 'calc(100% + 10px)',
          animation: 'orbitCCW 34s linear infinite',
          filter: 'drop-shadow(0 0 3px rgba(245,158,11,0.6))',
        }}
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="47" fill="none"
          stroke="rgba(245,158,11,0.45)" strokeWidth="0.6"
          strokeDasharray="5 20" strokeLinecap="round" />
      </svg>

      {/* Inner glow */}
      <div className="absolute rounded-full pointer-events-none"
        style={{ inset: '-6px', background: 'radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 65%)', filter: 'blur(8px)' }} />

      {/* Circle frame */}
      <div className="absolute inset-0 rounded-full overflow-hidden"
        style={{
          border: '2px solid rgba(255,255,255,0.75)',
          boxShadow: '0 0 0 6px rgba(245,158,11,0.12), 0 0 40px rgba(245,158,11,0.35), 0 0 100px rgba(245,158,11,0.15)',
        }}>
        <Image
          src={personalInfo.avatarUrl}
          alt="Nguyen Nghiem Thanh"
          fill
          className="object-cover object-top"
          priority
          sizes={imgSizes || '42vw'}
        />
      </div>

      {/* Bottom inner shadow */}
      <div className="absolute inset-x-0 bottom-0 h-1/4 rounded-b-full pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(7,9,10,0.45), transparent)' }} />
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{ background: 'var(--bg)' }}>

      <StarField />

      {/* Desktop avatar — right panel */}
      <div className="hidden lg:flex absolute right-0 top-0 h-full w-[44%] z-0 items-center justify-center">
        <AvatarWithOrbit
          style={{ width: 'min(500px, 42vw)', height: 'min(500px, 42vw)' }}
          imgSizes="42vw"
        />
      </div>

      {/* Accent orb */}
      <div className="absolute z-0 w-[700px] h-[700px] top-[-150px] left-[-250px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245,158,11,0.06), transparent 70%)',
          filter: 'blur(80px)',
        }} />

      {/* Content — left 64% on desktop, full width on mobile */}
      <div className="relative z-10 w-full lg:w-[64%] min-h-screen flex flex-col
        px-8 sm:px-12 lg:pl-[6%] lg:pr-14">

        <div className="flex-1 flex flex-col justify-center py-8">

          {/* Mobile avatar — only on small screens */}
          <div className="lg:hidden flex justify-center mb-8 animate-fade-up opacity-0 animate-delay-100">
            <AvatarWithOrbit
              style={{ width: '170px', height: '170px' }}
              imgSizes="170px"
            />
          </div>

          {/* HEADLINE */}
          <h1 className="animate-fade-up opacity-0 animate-delay-100 font-bold leading-[1.05] text-white"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.75rem)' }}>
            I build scalable<br />
            web platforms<br />
            <span style={{ color: 'var(--accent)' }}>from frontend to cloud</span>
          </h1>

          {/* NAME + ROLE */}
          <div className="animate-fade-up opacity-0 animate-delay-200 mt-7">
            <p className="font-bold text-xl text-white">Nguyen Nghiem Thanh</p>
            <p className="text-sm font-mono mt-1" style={{ color: 'var(--accent)', opacity: 0.75 }}>
              Senior Full-Stack Engineer · 8+ Years
            </p>
          </div>

          {/* TECH */}
          <p className="animate-fade-up opacity-0 animate-delay-400 mt-7 font-mono text-sm"
            style={{ color: 'var(--accent)', opacity: 0.8 }}>
            React · Angular&nbsp;&nbsp;/&nbsp;&nbsp;Node · Python · Java&nbsp;&nbsp;/&nbsp;&nbsp;Azure · SAP
          </p>

          {/* CTAs */}
          <div className="animate-fade-up opacity-0 animate-delay-500 mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="btn-primary px-7 py-3"
              style={{ boxShadow: '0 4px 24px color-mix(in srgb, var(--accent) 30%, transparent)' }}
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Hire Me
            </a>
            <button
              className="btn-outline px-7 py-3"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See My Work
            </button>
          </div>

          {/* Download CV — subtle quick-access row */}
          <div className="animate-fade-up opacity-0 animate-delay-600 mt-4 flex items-center gap-4 text-xs font-mono"
            style={{ color: 'rgba(255,255,255,0.45)' }}>
            <span>Download CV:</span>
            <a
              href={personalInfo.cvPdf}
              download="Nguyen-Nghiem-Thanh-CV.pdf"
              className="flex items-center gap-1.5 hover:text-[color:var(--accent)] transition-colors duration-200"
            >
              <Download size={11} /> PDF
            </a>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <a
              href={personalInfo.cvDocx}
              download="Nguyen-Nghiem-Thanh-CV.docx"
              className="flex items-center gap-1.5 hover:text-[color:var(--accent)] transition-colors duration-200"
            >
              <Download size={11} /> Word
            </a>
          </div>

          {/* TRUST LINE */}
          <p className="animate-fade-up opacity-0 animate-delay-600 mt-4 text-xs font-mono"
            style={{ color: 'rgba(255,255,255,0.5)' }}>
            Trusted by enterprise clients · Built scalable production systems
          </p>
        </div>

        {/* Stats bar */}
        <div className="pb-12 animate-fade-up opacity-0 animate-delay-600">
          <div className="h-px mb-8" style={{ background: 'rgba(255,255,255,0.1)' }} />

          <div className="grid grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="group cursor-default">
                <div
                  className="font-mono font-bold transition-colors duration-200 group-hover:opacity-80"
                  style={{ color: 'var(--accent)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
                >
                  {stat.value}
                </div>
                <div className="text-[11px] text-[color:var(--text-muted)] uppercase tracking-wider leading-tight mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-5">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-mono transition-colors text-white/50 hover:text-[color:var(--accent)]">
              <GitHubIcon size={15} /> GitHub
            </a>
            <span className="text-white/15">|</span>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-mono transition-colors text-white/50 hover:text-[color:var(--accent)]">
              <Linkedin size={15} /> LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
