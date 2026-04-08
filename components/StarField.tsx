'use client'

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  phase: number
}

interface Meteor {
  x: number
  y: number
  len: number
  angle: number
  speed: number
  opacity: number
  active: boolean
  timer: number
  interval: number
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number

    if (globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = canvas.parentElement?.clientHeight ?? window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Stars
    const stars: Star[] = Array.from({ length: 180 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.4 + 0.2,
      opacity: Math.random() * 0.55 + 0.2,
      speed: Math.random() * 0.015 + 0.004,
      phase: Math.random() * Math.PI * 2,
    }))

    // Meteors
    const meteors: Meteor[] = Array.from({ length: 3 }, (_, i) => ({
      x: 0, y: 0, len: 0, angle: -Math.PI / 5,
      speed: 0, opacity: 0, active: false,
      timer: 0, interval: 180 + i * 240,
    }))

    const spawnMeteor = (m: Meteor, w: number) => {
      m.x = Math.random() * w * 0.7 + w * 0.1
      m.y = Math.random() * 80
      m.len = Math.random() * 120 + 60
      m.speed = Math.random() * 8 + 6
      m.opacity = 1
      m.active = true
    }

    let t = 0
    const draw = () => {
      const { width: w, height: h } = canvas
      ctx.clearRect(0, 0, w, h)
      t++

      // Draw stars
      stars.forEach(s => {
        const o = s.opacity + Math.sin(t * s.speed + s.phase) * 0.18
        ctx.beginPath()
        ctx.arc(s.x * w, s.y * h, s.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0.05, Math.min(0.9, o))})`
        ctx.fill()
      })

      // Draw meteors
      meteors.forEach(m => {
        m.timer++
        if (!m.active && m.timer >= m.interval) {
          spawnMeteor(m, w)
          m.timer = 0
        }
        if (m.active) {
          const dx = Math.cos(m.angle) * m.speed
          const dy = Math.sin(m.angle) * m.speed * 0.6
          m.x += dx
          m.y += dy
          m.opacity -= 0.022

          if (m.opacity <= 0 || m.x > w || m.y > h) {
            m.active = false
            m.timer = 0
          }

          const grad = ctx.createLinearGradient(
            m.x, m.y,
            m.x - Math.cos(m.angle) * m.len,
            m.y - Math.sin(m.angle) * m.len * 0.6,
          )
          grad.addColorStop(0, `rgba(255,255,255,${m.opacity})`)
          grad.addColorStop(1, 'rgba(255,255,255,0)')

          ctx.beginPath()
          ctx.moveTo(m.x, m.y)
          ctx.lineTo(
            m.x - Math.cos(m.angle) * m.len,
            m.y - Math.sin(m.angle) * m.len * 0.6,
          )
          ctx.strokeStyle = grad
          ctx.lineWidth = 1.5
          ctx.stroke()
        }
      })

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
