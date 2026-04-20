'use client'

import { useEffect, useRef } from 'react'

const SEED_KEY = 'dev-bg-seed-v2'

function mulberry32(seed: number) {
  return function () {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed)
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t
    return ((t ^ t >>> 14) >>> 0) / 4294967296
  }
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let seedVal = parseInt(localStorage.getItem(SEED_KEY) ?? '0')
    if (!seedVal) {
      seedVal = (Date.now() & 0x7fffffff)
      localStorage.setItem(SEED_KEY, String(seedVal))
    }
    const rand = mulberry32(seedVal)

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = Math.max(document.body.scrollHeight, window.innerHeight * 4)
    }
    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('load', resize)

    // ── Star node
    type Star = {
      x: number; y: number
      vx: number; vy: number
      radius: number
      opacity: number
      pulse: number
      pulseSpeed: number
      color: string
      // circuit node chance
      isNode: boolean
    }

    // ── Nebula cloud
    type Nebula = {
      x: number; y: number
      rx: number; ry: number
      opacity: number
      color: string
    }

    const STAR_COLORS = [
      'rgba(245,158,11,',
      'rgba(251,191,36,',
      'rgba(255,255,220,',
      'rgba(249,115,22,',
      'rgba(253,230,138,',
    ]

    const W = canvas.width
    const H = canvas.height

    // Stars — many small, few large
    const starCount = Math.floor((W * H) / 5000)
    const stars: Star[] = []
    for (let i = 0; i < starCount; i++) {
      const big = rand() < 0.04
      const node = rand() < 0.12
      stars.push({
        x: rand() * W,
        y: rand() * H,
        vx: (rand() - 0.5) * 0.06,
        vy: (rand() - 0.5) * 0.04,
        radius: big ? 1.5 + rand() * 1.5 : 0.4 + rand() * 0.9,
        opacity: 0.1 + rand() * 0.5,
        pulse: rand() * Math.PI * 2,
        pulseSpeed: 0.004 + rand() * 0.01,
        color: STAR_COLORS[Math.floor(rand() * STAR_COLORS.length)],
        isNode: node,
      })
    }

    // Nebula blobs — fixed, just faint color clouds
    const nebulaCount = 5
    const nebulae: Nebula[] = []
    for (let i = 0; i < nebulaCount; i++) {
      nebulae.push({
        x: rand() * W,
        y: rand() * H,
        rx: 120 + rand() * 300,
        ry: 80 + rand() * 200,
        opacity: 0.015 + rand() * 0.025,
        color: rand() < 0.5 ? 'rgba(245,158,11,' : 'rgba(249,115,22,',
      })
    }

    // Connection distance threshold
    const MAX_DIST = 160

    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Nebula clouds
      for (const n of nebulae) {
        ctx.save()
        ctx.translate(n.x, n.y)
        ctx.scale(1, n.ry / n.rx)
        const grd = ctx.createRadialGradient(0, 0, 0, 0, 0, n.rx)
        grd.addColorStop(0, `${n.color}${n.opacity})`)
        grd.addColorStop(1, `${n.color}0)`)
        ctx.beginPath()
        ctx.arc(0, 0, n.rx, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()
        ctx.restore()
      }

      // Constellation lines between nearby node-stars
      const nodes = stars.filter(s => s.isNode)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.12
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(245,158,11,${alpha.toFixed(3)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      // Draw all stars
      for (const s of stars) {
        s.x += s.vx
        s.y += s.vy
        s.pulse += s.pulseSpeed

        if (s.x < -10) s.x = canvas.width + 5
        if (s.x > canvas.width + 10) s.x = -5
        if (s.y < -10) s.y = canvas.height + 5
        if (s.y > canvas.height + 10) s.y = -5

        const pulsed = s.opacity * (0.7 + Math.sin(s.pulse) * 0.3)

        if (s.isNode) {
          // Node: circle with outer ring
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.radius + 1.5, 0, Math.PI * 2)
          ctx.strokeStyle = `${s.color}${(pulsed * 0.35).toFixed(3)})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }

        // Core dot
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${s.color}${pulsed.toFixed(3)})`
        ctx.fill()

        // Twinkle bloom on bigger stars
        if (s.radius > 1.2) {
          const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius * 5)
          grd.addColorStop(0, `${s.color}${(pulsed * 0.25).toFixed(3)})`)
          grd.addColorStop(1, `${s.color}0)`)
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.radius * 5, 0, Math.PI * 2)
          ctx.fillStyle = grd
          ctx.fill()
        }
      }

      raf = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('load', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 0.85 }}
    />
  )
}
