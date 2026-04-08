'use client'

export interface Layer {
  label: string
  sublabel: string
  color: string
  textColor?: string
}

interface Props {
  readonly layers: Layer[]
  readonly horizontal?: boolean
}

export function ProjectMiniDiagram({ layers, horizontal }: Readonly<Props>) {
  if (horizontal) {
    return (
      <div className="flex flex-col gap-2 py-4 px-3">
        <p className="text-[10px] font-mono text-[color:var(--text-muted)] mb-2">{`// tech stack layers`}</p>
        <div className="grid grid-cols-2 gap-2">
          {layers.map((layer) => {
            const bg = `${layer.color}18`
            const border = `${layer.color}40`
            return (
              <div key={layer.label}
                className="rounded-lg px-3 py-2.5 border transition-transform hover:scale-[1.02] cursor-default"
                style={{ background: bg, borderColor: border }}>
                <div className="font-semibold text-xs leading-tight" style={{ color: layer.color }}>
                  {layer.label}
                </div>
                <div className="text-[10px] mt-0.5 leading-tight" style={{ color: layer.color, opacity: 0.65 }}>
                  {layer.sublabel}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-0 py-2 px-3">
      {layers.map((layer, i) => {
        const bg = `${layer.color}18`
        const border = `${layer.color}40`
        return (
          <div key={layer.label} className="flex flex-col items-center w-full">
            <div className="w-full rounded-lg px-3 py-2 text-center border transition-transform hover:scale-[1.02] cursor-default"
              style={{ background: bg, borderColor: border }}>
              <div className="font-semibold text-xs" style={{ color: layer.color }}>{layer.label}</div>
              <div className="text-[10px] mt-0.5 leading-tight" style={{ color: layer.color, opacity: 0.65 }}>
                {layer.sublabel}
              </div>
            </div>
            {i < layers.length - 1 && (
              <svg width="2" height="16" viewBox="0 0 2 16" className="text-slate-400 my-0.5" fill="none">
                <line x1="1" y1="0" x2="1" y2="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
                <path d="M-3 10 L1 16 L5 10" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            )}
          </div>
        )
      })}
    </div>
  )
}
