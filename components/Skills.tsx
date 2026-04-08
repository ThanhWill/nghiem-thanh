'use client'

import { useInView } from '@/hooks/useInView'
import { skills } from '@/lib/data'

const categories = [
  {
    key: 'frontend' as const,
    label: 'Frontend',
    icon: '🎨',
    description: 'UI/UX, frameworks, and browser performance',
  },
  {
    key: 'backend' as const,
    label: 'Backend & Infrastructure',
    icon: '⚙️',
    description: 'APIs, databases, messaging, and containers',
  },
  {
    key: 'tools' as const,
    label: 'Tools & Practices',
    icon: '🛠️',
    description: 'Testing, CI/CD, analytics, and workflow',
  },
]

export function Skills() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="skills"
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
            02 / Skills
          </p>
          <h2 className="section-title">
            Full-stack toolkit, <span className="gradient-text">built over 8 years</span>
          </h2>
          <p className="section-subtitle">
            From pixel-perfect frontends to microservice orchestration — here's what I work with.
          </p>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.key}
              className={`glass rounded-2xl p-6 border transition-all duration-700 hover:border-[color:var(--accent)] ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: 'var(--accent-dim)' }}
                >
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm" style={{ color: 'var(--accent)' }}>
                    {cat.label}
                  </h3>
                  <p className="text-xs text-muted">{cat.description}</p>
                </div>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {skills[cat.key].map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge text-xs cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
