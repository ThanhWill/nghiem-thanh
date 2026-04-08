'use client'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Orb 1 — top left, slow drift */}
      <div
        className="absolute rounded-full"
        style={{
          width: 700, height: 700,
          top: -200, left: -200,
          background: 'radial-gradient(circle, color-mix(in srgb, var(--accent) 9%, transparent) 0%, transparent 70%)',
          animation: 'orbDrift1 22s ease-in-out infinite',
        }}
      />
      {/* Orb 2 — bottom right */}
      <div
        className="absolute rounded-full"
        style={{
          width: 550, height: 550,
          bottom: '-10%', right: '-5%',
          background: 'radial-gradient(circle, color-mix(in srgb, var(--accent) 7%, transparent) 0%, transparent 70%)',
          animation: 'orbDrift2 28s ease-in-out infinite',
        }}
      />
      {/* Orb 3 — mid page, very subtle */}
      <div
        className="absolute rounded-full"
        style={{
          width: 420, height: 420,
          top: '38%', left: '42%',
          background: 'radial-gradient(circle, color-mix(in srgb, var(--accent) 4%, transparent) 0%, transparent 70%)',
          animation: 'orbDrift3 35s ease-in-out infinite',
        }}
      />
    </div>
  )
}
