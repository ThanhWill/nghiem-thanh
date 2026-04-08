'use client'

import { useInView } from '@/hooks/useInView'
import { experience } from '@/lib/data'
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react'

export function Experience() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="experience"
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
            04 / Experience
          </p>
          <h2 className="section-title">
            8+ years of <span className="gradient-text">building things that scale</span>
          </h2>
          <p className="section-subtitle">
            From junior frontend dev to leading enterprise architecture.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 sm:left-8 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, var(--accent), color-mix(in srgb, var(--accent) 30%, transparent), transparent)' }}
          />

          <div className="space-y-8 sm:space-y-10">
            {experience.map((job, i) => (
              <div
                key={job.company}
                className={`relative pl-12 sm:pl-20 transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-2 sm:left-6 w-5 h-5 rounded-full border-2 flex items-center justify-center top-1.5"
                  style={{ background: 'var(--bg)', borderColor: 'var(--accent)' }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
                </div>

                {/* Card */}
                <div className="glass rounded-2xl border p-6">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-[color:var(--text)]">{job.role}</h3>
                      <p className="font-medium text-sm" style={{ color: 'var(--accent)' }}>{job.company}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-muted leading-relaxed mb-4">{job.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-1.5">
                    {job.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-muted">
                        <CheckCircle2 size={13} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
