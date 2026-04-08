'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import { projects, type Project } from '@/lib/data'
import { ProjectDiagram } from './ProjectDiagrams'
import { CheckCircle2, ChevronRight, X } from 'lucide-react'

const typeColors: Record<string, string> = {
  Architecture: 'text-violet-500 border-violet-500/30 bg-violet-500/10',
  Enterprise:   'text-blue-500   border-blue-500/30   bg-blue-500/10',
  Fullstack:    'text-cyan-500   border-cyan-500/30   bg-cyan-500/10',
  Frontend:     'text-emerald-500 border-emerald-500/30 bg-emerald-500/10',
}

const sideColors: Record<string, string> = {
  'FE + BE + DevOps': 'text-orange-500 border-orange-500/30 bg-orange-500/10',
  'FE + BE':          'text-teal-500   border-teal-500/30   bg-teal-500/10',
  'FE-only':          'text-sky-500    border-sky-500/30    bg-sky-500/10',
}

function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {

  return (
    <div
      className="glass rounded-2xl border overflow-hidden animate-fade-in"
      style={{ borderColor: 'var(--accent)', boxShadow: '0 0 30px color-mix(in srgb, var(--accent) 10%, transparent)' }}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[color:var(--card-border)]">
        {/* Mac dots + filename */}
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400 flex-shrink-0" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 flex-shrink-0" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400 flex-shrink-0" />
          <span className="font-mono text-[10px] text-[color:var(--text-muted)] ml-1.5 truncate">
            {project.id}.architecture
          </span>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="w-7 h-7 flex-shrink-0 rounded-lg flex items-center justify-center
            text-[color:var(--text-muted)] hover:text-[color:var(--accent)]
            hover:bg-[color:var(--accent-dim)] transition-all"
        >
          <X size={14} />
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-0">
        {/* Left: details — scrollable independently */}
        <div className="p-5 border-b lg:border-b-0 lg:border-r border-[color:var(--card-border)] overflow-y-auto max-h-[560px] scrollbar-hide">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${typeColors[project.type]}`}>
              {project.type}
            </span>
            {project.side && (
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${sideColors[project.side] ?? ''}`}>
                {project.side}
              </span>
            )}
          </div>
          <h3 className="text-base font-bold text-[color:var(--text)] mb-2">{project.title}</h3>
          <p className="text-xs text-[color:var(--text-muted)] leading-relaxed mb-4">{project.description}</p>

          <ul className="space-y-1.5 mb-4">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-xs text-[color:var(--text-muted)]">
                <CheckCircle2 size={12} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="skill-badge text-[10px]">{tag}</span>
            ))}
          </div>
        </div>

        <div
          className="overflow-auto scrollbar-hide"
          style={{ background: 'var(--bg-secondary)' }}
        >
          {/* static zoom so full diagram is visible without interaction */}
          <div style={{ zoom: 0.9, transformOrigin: 'top left' }}>
            <ProjectDiagram projectId={project.id} />
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  isSelected,
  onClick,
  delay,
  isInView,
}: {
  project: Project
  isSelected: boolean
  onClick: () => void
  delay: number
  isInView: boolean
}) {
  return (
    <button
      onClick={onClick}
      className={`text-left w-full glass rounded-xl border p-4 transition-all duration-300
        hover:-translate-y-0.5 focus:outline-none
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{
        transitionDelay: `${delay}ms`,
        borderColor: isSelected ? 'var(--accent)' : 'var(--card-border)',
        boxShadow: isSelected ? '0 0 20px color-mix(in srgb, var(--accent) 12%, transparent)' : undefined,
      }}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex flex-wrap gap-1.5">
          <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium border ${typeColors[project.type]}`}>
            {project.type}
          </span>
          {project.side && (
            <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium border ${sideColors[project.side] ?? ''}`}>
              {project.side}
            </span>
          )}
        </div>
        <ChevronRight
          size={14}
          className="flex-shrink-0 mt-0.5 transition-transform duration-200"
          style={{
            color: isSelected ? 'var(--accent)' : 'var(--text-muted)',
            transform: isSelected ? 'rotate(90deg)' : 'rotate(0deg)',
          }}
        />
      </div>

      <h3 className="font-semibold text-sm text-[color:var(--text)] mb-1.5 leading-snug"
        style={{ color: isSelected ? 'var(--accent)' : undefined }}>
        {project.title}
      </h3>
      <p className="text-xs text-[color:var(--text-muted)] leading-relaxed line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1 mt-3">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="skill-badge text-[10px] px-1.5 py-0.5">{tag}</span>
        ))}
        {project.tags.length > 3 && (
          <span className="text-[10px] text-[color:var(--text-muted)] self-center">+{project.tags.length - 3}</span>
        )}
      </div>
    </button>
  )
}

export function Projects() {
  const { ref, isInView } = useInView<HTMLElement>()
  const [selectedId, setSelectedId] = useState<string | null>('ecommerce')

  const selectedProject = projects.find((p) => p.id === selectedId) ?? null

  const handleSelect = (id: string) => {
    setSelectedId(prev => prev === id ? null : id)
  }

  return (
    <section id="projects" ref={ref} className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-max">

        {/* Header */}
        <div className={`mb-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-mono text-sm uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>
            03 / Projects
          </p>
          <h2 className="fn-title">
            projects<span className="text-[color:var(--text-muted)]">()</span>
          </h2>
          <div className="h-px w-full mt-2 mb-4"
            style={{ background: 'linear-gradient(to right, var(--accent), transparent)' }} />
          <p className="section-subtitle">
            Click any project to see its architecture. FE, BE, and infrastructure
          </p>
        </div>

        {/* Desktop: side-by-side | Mobile: stacked */}
        <div className="grid lg:grid-cols-5 gap-4 items-start">

          {/* Left: Project list */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                isSelected={selectedId === project.id}
                onClick={() => handleSelect(project.id)}
                delay={i * 80}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Right: Detail panel — key forces remount so animation replays on each project switch */}
          {selectedProject && (
            <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <ProjectDetail
                key={selectedId}
                project={selectedProject}
                onClose={() => setSelectedId(null)}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
