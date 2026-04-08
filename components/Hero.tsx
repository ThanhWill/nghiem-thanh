'use client'

import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import { GitHubIcon } from './icons'
import { personalInfo, stats } from '@/lib/data'
import { StarField } from './StarField'

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{ background: '#07090a' }}>

      {/* Starfield background */}
      <StarField />

      {/* ── Right: circular avatar ── */}
      <div className="hidden lg:flex absolute right-0 top-0 h-full w-[44%] z-0 items-center justify-center">
        <div className="relative" style={{ width: 'min(500px, 42vw)', height: 'min(500px, 42vw)' }}>
          {/* Outer diffused glow layers */}
          <div className="absolute rounded-full pointer-events-none"
            style={{ inset: '-20px', background: 'radial-gradient(circle, rgba(0,230,118,0.22) 0%, transparent 70%)', filter: 'blur(18px)' }} />
          <div className="absolute rounded-full pointer-events-none"
            style={{ inset: '-6px', background: 'radial-gradient(circle, rgba(0,230,118,0.12) 0%, transparent 65%)', filter: 'blur(8px)' }} />
          {/* Circle frame */}
          <div className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              border: '2.5px solid rgba(0,230,118,0.55)',
              boxShadow: '0 0 32px rgba(0,230,118,0.45), 0 0 80px rgba(0,230,118,0.2), 0 0 140px rgba(0,230,118,0.08)',
            }}>
            <Image
              src={personalInfo.avatarUrl}
              alt="Nguyen Nghiem Thanh"
              fill
              className="object-cover object-top"
              priority
              sizes="42vw"
            />
          </div>
          {/* Subtle inner shadow at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 rounded-b-full pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(7,9,10,0.45), transparent)' }} />
        </div>
      </div>

      {/* Accent orb — green glow bottom-left */}
      <div className="absolute z-0 w-[700px] h-[700px] top-[-150px] left-[-250px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,230,118,0.07), transparent 70%)',
          filter: 'blur(80px)',
        }} />

      {/* ── Content — left 64% ── */}
      <div className="relative z-10 w-full lg:w-[64%] min-h-screen flex flex-col
        px-8 sm:px-12 lg:pl-[6%] lg:pr-14">

        {/* ② Main content block */}
        <div className="flex-1 flex flex-col justify-center py-8">

          {/* HEADLINE */}
          <h1 className="animate-fade-up opacity-0 animate-delay-100 font-bold leading-[1.05] text-white"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.75rem)' }}>
            I build scalable<br />
            web platforms<br />
            <span style={{ color: 'var(--accent)' }}>from frontend to cloud</span>
          </h1>

          {/* NAME + ROLE — tighter to headline, identity + credibility in one block */}
          <div className="animate-fade-up opacity-0 animate-delay-200 mt-7">
            <p className="font-bold text-xl text-white">
              Nguyen Nghiem Thanh
            </p>
            <p className="text-sm font-mono mt-1" style={{ color: 'var(--accent)', opacity: 0.75 }}>
              Senior Full-Stack Engineer · 8+ Years
            </p>
          </div>

          {/* TECH — single clean line */}
          <p className="animate-fade-up opacity-0 animate-delay-400 mt-7 font-mono text-sm"
            style={{ color: 'var(--accent)', opacity: 0.8 }}>
            React · Angular · Node · Azure
          </p>

          {/* CTAs — clear breathing room above */}
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

          {/* TRUST LINE — fills empty space, adds credibility */}
          <p className="animate-fade-up opacity-0 animate-delay-600 mt-5 text-xs font-mono"
            style={{ color: 'rgba(255,255,255,0.5)' }}>
            Trusted by enterprise clients · Built scalable production systems
          </p>
        </div>

        {/* ③ Stats bar — bigger numbers, more impact */}
        <div className="pb-12 animate-fade-up opacity-0 animate-delay-600">
          <div className="h-px mb-8" style={{ background: 'rgba(255,255,255,0.1)' }} />

          <div className="grid grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group cursor-default"
              >
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

          {/* Social */}
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
