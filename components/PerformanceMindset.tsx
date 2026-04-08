'use client'

import { useInView } from '@/hooks/useInView'

const caseStudies = [
  {
    id: 'toyota',
    project: 'Toyota B2B/B2C Platform',
    company: 'SAI Digital · JSP → Angular + Java Back-office',
    color: '#dd0031',
    problem: 'Legacy JSP pages served static HTML with no component reuse. Migrated the entire FE to Angular — custom dealer dashboard pulling live data from a Java back-office API.',
    fixes: [
      { code: 'JSP → Angular',              detail: 'Rebuilt FE architecture from scratch — modular Angular structure replacing server-rendered JSP', impact: 'Full rewrite' },
      { code: 'Java API integration',        detail: 'Custom dashboard wired to back-office Java endpoints — real-time dealer + inventory data', impact: 'Live data' },
      { code: 'loadChildren()',              detail: 'Lazy-loaded feature modules per route — dashboard, orders, reports load only when needed', impact: '−60% bundle' },
      { code: 'OnPush + trackBy',            detail: 'Eliminated cascading re-renders across product and order list views', impact: '−70% renders' },
    ],
  },
  {
    id: 'dnp',
    project: 'DNP Education Platform',
    company: 'SAI Digital · Next.js (FE) + NestJS (BE)',
    color: '#a78bfa',
    problem: 'No unified exam platform. Teachers managed files manually with no role-based access, no automated student delivery, and no structured storage across grades and classes.',
    fixes: [
      { code: 'Keycloak SSO',         detail: 'Role-based auth (teacher / student) — login gate for all routes, tokens forwarded to NestJS', impact: 'Secure auth' },
      { code: 'Azure Blob · 3 tiers', detail: 'Public, private, and tenant containers — each role and data type isolated by design', impact: 'Role isolation' },
      { code: 'Student auto-routing', detail: 'Student session auto-maps to their private container by grade and class index — no manual lookup', impact: 'Zero config' },
      { code: 'Teacher upload flow',  detail: 'Exam upload lands in public container; NestJS distributes to per-student paths automatically', impact: 'Auto-deliver' },
      { code: 'Redis · file hash',    detail: 'Repeat uploads of the same exam return cached layout instantly — no re-scan', impact: '73% hit rate' },
    ],
  },
]

export function PerformanceMindset() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section
      id="performance"
      ref={ref}
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="container-max">

        {/* Header */}
        <div
          className={`mb-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="font-mono text-sm uppercase tracking-widest mb-2" style={{ color: 'var(--accent)' }}>
            05 / Performance
          </p>
          <h2 className="section-title">
            Real wins, <span className="gradient-text">real numbers</span>
          </h2>
          <p className="section-subtitle">
            Two production systems I built end-to-end — the problem, what I engineered, and the outcome.
          </p>
        </div>

        {/* Case studies */}
        <div className={`grid lg:grid-cols-2 gap-5 mb-10 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="glass rounded-2xl border overflow-hidden"
              style={{ borderColor: `${cs.color}30` }}
            >
              {/* Card header */}
              <div className="px-5 py-3 border-b"
                style={{ borderColor: `${cs.color}20`, background: `${cs.color}08` }}>
                <div>
                  <div className="font-semibold text-sm" style={{ color: cs.color }}>{cs.project}</div>
                  <div className="font-mono text-[10px] mt-0.5" style={{ color: 'var(--text-muted)' }}>{cs.company}</div>
                </div>
              </div>

              <div className="p-5">
                {/* Problem */}
                <p className="text-xs leading-relaxed mb-4 font-mono"
                  style={{ color: 'var(--text-muted)', borderLeft: `2px solid ${cs.color}40`, paddingLeft: '0.75rem' }}>
                  {cs.problem}
                </p>

                {/* Fix list */}
                <ul className="space-y-2.5 mb-4">
                  {cs.fixes.map((fix) => (
                    <li key={fix.code} className="flex items-start gap-2.5 text-xs">
                      <span className="font-mono px-1.5 py-0.5 rounded text-[10px] flex-shrink-0 mt-0.5"
                        style={{ background: `${cs.color}15`, color: cs.color, border: `1px solid ${cs.color}30` }}>
                        {fix.code}
                      </span>
                      <span style={{ color: 'var(--text-muted)' }}>{fix.detail}</span>
                      <span className="ml-auto flex-shrink-0 font-mono text-[10px] font-semibold"
                        style={{ color: '#22c55e' }}>
                        {fix.impact}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
