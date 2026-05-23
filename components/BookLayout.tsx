'use client'

import { useEffect, useState, useCallback, useRef, useMemo } from 'react'
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react'
import { BookContext } from './BookContext'

const PAGES = [
  { id: 'hero',        label: 'Cover',      num: '01' },
  { id: 'projects',    label: 'Projects',   num: '02' },
  { id: 'experience',  label: 'Experience', num: '03' },
  { id: 'performance', label: 'Impact',     num: '04' },
]

type AnimState = 'idle' | 'exit-fwd' | 'exit-bwd' | 'enter-fwd' | 'enter-bwd'

const ANIM_CLASS: Record<AnimState, string> = {
  'idle':       '',
  'exit-fwd':   'book-exit-fwd',
  'exit-bwd':   'book-exit-bwd',
  'enter-fwd':  'book-enter-fwd',
  'enter-bwd':  'book-enter-bwd',
}

interface BookLayoutProps {
  readonly children: React.ReactNode[]
}

export function BookLayout({ children }: BookLayoutProps) {
  const pages = children
  const [current,   setCurrent]   = useState(0)
  const [displayed, setDisplayed] = useState(0)
  const [anim,      setAnim]      = useState<AnimState>('idle')
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const navigate = useCallback((next: number) => {
    if (next === current || anim !== 'idle') return
    if (next < 0 || next >= pages.length) return

    const isForward  = next > current
    const exitAnim:  AnimState = isForward ? 'exit-fwd'  : 'exit-bwd'
    const enterAnim: AnimState = isForward ? 'enter-fwd' : 'enter-bwd'

    setAnim(exitAnim)
    setCurrent(next)

    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setDisplayed(next)
      setAnim(enterAnim)
      timerRef.current = setTimeout(() => setAnim('idle'), 480)
    }, 420)
  }, [current, anim, pages.length])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        navigate(current + 1)
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        navigate(current - 1)
      }
    }
    globalThis.addEventListener('keydown', onKey)
    return () => globalThis.removeEventListener('keydown', onKey)
  }, [current, navigate])

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])

  const isFirst = current === 0
  const isLast  = current === pages.length - 1

  return (
    <BookContext.Provider value={useMemo(() => ({ current, navigate, total: pages.length }), [current, navigate, pages.length])}>
      {/* Fixed full-screen container — prevents body scroll */}
      <div style={{ position: 'fixed', inset: 0, background: 'var(--bg)', zIndex: 10 }}>

        {/* ── Animated page slide ── */}
        <div
          key={displayed}
          className={ANIM_CLASS[anim]}
          style={{
            position: 'absolute',
            inset: 0,
            overflowY: 'auto',
            boxShadow: 'inset -4px 0 12px rgba(0,0,0,0.04)',
          }}
        >
          {pages[displayed]}
        </div>

        {/* ── Right dot navigation (desktop) ── */}
        <nav
          className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-2.5"
          aria-label="Page navigation"
        >
          {PAGES.map(({ id, label, num }) => {
            const i = PAGES.findIndex(p => p.id === id)
            return (
              <button
                key={id}
                onClick={() => navigate(i)}
                className="flex items-center gap-2 group"
                aria-label={`Go to ${label}`}
              >
                <span
                  className="text-[10px] font-mono transition-all duration-200 whitespace-nowrap"
                  style={{
                    color: current === i ? 'var(--accent)' : 'var(--text-muted)',
                    opacity: current === i ? 1 : 0,
                  }}
                >
                  {num} {label}
                </span>
                <div
                  className="rounded-full transition-all duration-300 flex-shrink-0 group-hover:opacity-80"
                  style={{
                    width:     current === i ? 10 : 6,
                    height:    current === i ? 10 : 6,
                    background: current === i ? 'var(--accent)' : 'rgba(100,116,139,0.35)',
                    boxShadow:  current === i ? '0 0 8px var(--accent)' : 'none',
                  }}
                />
              </button>
            )
          })}
        </nav>

        {/* ── Bottom navigation bar ── */}
        <div
          className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-10"
          style={{
            height: 48,
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(16px)',
            borderTop: '1px solid rgba(5,150,105,0.15)',
          }}
        >
          {/* Prev */}
          <button
            onClick={() => navigate(current - 1)}
            disabled={isFirst}
            className="flex items-center gap-1.5 text-xs font-mono transition-all duration-200 disabled:opacity-25"
            style={{ color: isFirst ? 'var(--text-muted)' : 'var(--accent)' }}
          >
            <ChevronLeft size={13} />
            <span className="hidden sm:inline">
              {current > 0 ? PAGES[current - 1].label : ''}
            </span>
          </button>

          {/* Center — pill dots + counter */}
          <div className="flex items-center gap-3">
            <BookOpen size={12} style={{ color: 'var(--accent)', opacity: 0.6 }} />
            <div className="flex items-center gap-1.5">
              {PAGES.map(({ id, label }, i) => (
                <button
                  key={id}
                  onClick={() => navigate(i)}
                  aria-label={label}
                  className="transition-all duration-300"
                  style={{
                    width:        current === i ? 18 : 5,
                    height:       5,
                    borderRadius: 3,
                    background:   current === i ? 'var(--accent)' : 'rgba(100,116,139,0.25)',
                  }}
                />
              ))}
            </div>
            <span className="font-mono text-[10px]" style={{ color: 'var(--text-muted)' }}>
              {current + 1} / {PAGES.length}
            </span>
          </div>

          {/* Next */}
          <button
            onClick={() => navigate(current + 1)}
            disabled={isLast}
            className="flex items-center gap-1.5 text-xs font-mono transition-all duration-200 disabled:opacity-25"
            style={{ color: isLast ? 'var(--text-muted)' : 'var(--accent)' }}
          >
            <span className="hidden sm:inline">
              {current < PAGES.length - 1 ? PAGES[current + 1].label : ''}
            </span>
            <ChevronRight size={13} />
          </button>
        </div>
      </div>
    </BookContext.Provider>
  )
}
