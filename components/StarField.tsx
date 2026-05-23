'use client'

import { useEffect, useRef } from 'react'

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    if (globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    let animId: number

    const resize = () => {
      canvas.width  = canvas.parentElement?.clientWidth  ?? window.innerWidth
      canvas.height = canvas.parentElement?.clientHeight ?? window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Very subtle floating dots — visible on white background
    const DOT_COLORS = [
      'rgba(5,150,105,',   // emerald-600
      'rgba(16,185,129,',  // emerald-500
      'rgba(52,211,153,',  // emerald-400
      'rgba(100,116,139,', // slate-500
    ]

    const dots = Array.from({ length: 60 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.025,
      vy: (Math.random() - 0.5) * 0.018,
      opacity: Math.random() * 0.18 + 0.06,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.008 + 0.003,
      color: DOT_COLORS[Math.floor(Math.random() * DOT_COLORS.length)],
    }))

    // Subtle connection lines between nearby dots
    const MAX_DIST = 0.14 // fraction of canvas width

    let t = 0
    const draw = () => {
      const { width: w, height: h } = canvas
      ctx.clearRect(0, 0, w, h)
      t++

      // Connection lines
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i], b = dots[j]
          const dx = (a.x - b.x) * w
          const dy = (a.y - b.y) * h
          const dist = Math.hypot(dx, dy) / w
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.06
            ctx.beginPath()
            ctx.moveTo(a.x * w, a.y * h)
            ctx.lineTo(b.x * w, b.y * h)
            ctx.strokeStyle = `rgba(5,150,105,${alpha.toFixed(3)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Dots
      for (const d of dots) {
        d.x += d.vx / w * 10
        d.y += d.vy / h * 10
        d.phase += d.speed
        if (d.x < 0) { d.x = 1 } else if (d.x > 1) { d.x = 0 }
        if (d.y < 0) { d.y = 1 } else if (d.y > 1) { d.y = 0 }

        const o = d.opacity * (0.7 + Math.sin(d.phase) * 0.3)
        ctx.beginPath()
        ctx.arc(d.x * w, d.y * h, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `${d.color}${o.toFixed(3)})`
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
