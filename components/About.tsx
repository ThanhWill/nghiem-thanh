'use client'

import { useInView } from '@/hooks/useInView'
import { strengths, personalInfo } from '@/lib/data'
import { Linkedin, Download } from 'lucide-react'
import { GitHubIcon } from './icons'

export function About() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="container-max">
        {/* Function-style heading */}
        <div
          className={`mb-10 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="fn-title">
            aboutMe<span className="text-[color:var(--text-muted)]">()</span>
          </h2>
          <div
            className="h-px w-full mt-3 mb-6"
            style={{ background: 'linear-gradient(to right, var(--accent), transparent)' }}
          />
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: bio text */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-[color:var(--text)] leading-relaxed text-base mb-5">
              {personalInfo.description}
            </p>
            <p className="text-[color:var(--text-muted)] leading-relaxed text-sm mb-8">
              On the frontend I build high-performance React and Angular applications — optimizing
              Core Web Vitals, crafting component libraries, and integrating analytics. On the backend
              I work with Django/Python, Java Spring Boot, and Node.js APIs. I&apos;ve designed
              event-driven microservice systems with RabbitMQ and Apache Camel, integrated with SAP
              and Toyota Insurance, and monitored production services on Kubernetes. I ship full
              features end-to-end — from UI to database to deployment.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                <GitHubIcon size={15} /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                <Linkedin size={15} /> LinkedIn
              </a>
              <a href={personalInfo.cvPdf} download="Nguyen-Nghiem-Thanh-CV.pdf" className="btn-outline text-sm">
                <Download size={15} /> PDF CV
              </a>
              <a href={personalInfo.cvDocx} download="Nguyen-Nghiem-Thanh-CV.docx" className="btn-outline text-sm">
                <Download size={15} /> Word CV
              </a>
            </div>
          </div>

          {/* Right: role cards */}
          <div
            className={`lg:col-span-2 space-y-3 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {[
              {
                title: 'Senior Software Engineer',
                sub: 'Full-time · 2018 – Present',
                detail: 'Enterprise architecture & performance',
                icon: '💻',
              },
              {
                title: 'Fullstack Engineer',
                sub: 'React · NestJS · Spring Boot · Django',
                detail: 'FE to API to cloud',
                icon: '🏗️',
              },
            ].map((role) => (
              <div
                key={role.title}
                className="glass rounded-xl border p-4 flex items-start gap-3
                  hover:border-[color:var(--accent)] transition-all duration-200 group"
              >
                <span className="text-xl flex-shrink-0 mt-0.5">{role.icon}</span>
                <div>
                  <div className="font-semibold text-sm text-[color:var(--text)] group-hover:text-[color:var(--accent)] transition-colors">
                    {role.title}
                  </div>
                  <div className="font-mono text-xs" style={{ color: 'var(--accent)', opacity: 0.8 }}>
                    {role.sub}
                  </div>
                  <div className="text-xs text-[color:var(--text-muted)] mt-0.5">{role.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths */}
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {strengths.map((item) => (
            <div
              key={item.title}
              className="glass rounded-xl border p-5
                hover:border-[color:var(--accent)] transition-all duration-200 group"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3
                className="font-semibold text-sm text-[color:var(--text)] mb-1.5
                  group-hover:text-[color:var(--accent)] transition-colors"
              >
                {item.title}
              </h3>
              <p className="text-xs text-[color:var(--text-muted)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
