'use client'

interface BoxProps {
  label: string
  sublabel?: string
  color: string
  textColor?: string
  wide?: boolean
  small?: boolean
}

function Box({ label, sublabel, color, textColor = '#fff', wide, small }: BoxProps) {
  const bg = `${color}22`
  const border = `${color}55`

  return (
    <div
      className={`
        rounded-lg border px-2.5 py-1.5 text-center transition-transform hover:scale-105 cursor-default
        ${wide ? 'min-w-[190px]' : small ? 'min-w-[100px]' : 'min-w-[130px]'}
      `}
      style={{ background: bg, borderColor: border }}
    >
      <div className="font-semibold text-xs leading-tight" style={{ color }}>
        {label}
      </div>
      {sublabel && (
        <div className="text-[10px] leading-tight mt-0.5" style={{ color, opacity: 0.65 }}>
          {sublabel}
        </div>
      )}
    </div>
  )
}

function ArrowDown({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center text-slate-400 py-0.5">
      {label && (
        <span className="text-[9px] font-mono border border-slate-500/30 bg-slate-500/10 rounded px-1.5 py-0.5 mb-0.5 text-slate-400">
          {label}
        </span>
      )}
      <svg width="2" height="20" viewBox="0 0 2 20">
        <line x1="1" y1="0" x2="1" y2="14" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        <path d="M-3 14 L1 20 L5 14" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  )
}

function BranchDown({ count, narrow }: { count: number; narrow?: boolean }) {
  const gap = narrow ? 110 : 150
  const total = (count - 1) * gap
  const cx = total / 2
  const positions = Array.from({ length: count }, (_, i) => i * gap)

  return (
    <div className="flex justify-center py-0.5">
      <svg
        width={total + 20}
        height={32}
        viewBox={`-10 0 ${total + 20} 32`}
        className="text-slate-400"
        fill="none"
      >
        <line x1={cx} y1="0" x2={cx} y2="8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        <line x1={positions[0]} y1="8" x2={positions[count - 1]} y2="8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        {positions.map((x) => (
          <g key={x}>
            <line x1={x} y1="8" x2={x} y2="26" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
            <path d={`M${x - 4} 24 L${x} 32 L${x + 4} 24`} stroke="currentColor" strokeWidth="1.5" />
          </g>
        ))}
      </svg>
    </div>
  )
}

function MergeUp({ count, narrow }: { count: number; narrow?: boolean }) {
  const gap = narrow ? 110 : 150
  const total = (count - 1) * gap
  const cx = total / 2
  const positions = Array.from({ length: count }, (_, i) => i * gap)

  return (
    <div className="flex justify-center py-0.5">
      <svg
        width={total + 20}
        height={32}
        viewBox={`-10 0 ${total + 20} 32`}
        className="text-slate-400"
        fill="none"
      >
        {positions.map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        ))}
        <line x1={positions[0]} y1="20" x2={positions[count - 1]} y2="20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        <line x1={cx} y1="20" x2={cx} y2="32" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      </svg>
    </div>
  )
}

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 my-2 w-full max-w-[500px] mx-auto">
      <div className="flex-1 h-px bg-slate-500/20" />
      <span className="text-[10px] font-mono text-slate-500 whitespace-nowrap">{label}</span>
      <div className="flex-1 h-px bg-slate-500/20" />
    </div>
  )
}

export function ArchitectureDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[460px] flex flex-col items-center py-4 px-2 text-xs">

        {/* ── Row 1: Frontend ── */}
        <div className="flex gap-3 justify-center">
          <Box label="React Backoffice" sublabel="Admin portal" color="#61dafb" />
          <Box label="React Storefront" sublabel="Customer-facing" color="#61dafb" />
        </div>

        {/* Branch down to two separate backends */}
        <div className="flex gap-10 justify-center">
          <ArrowDown label="GraphQL" />
          <ArrowDown label="REST/HTTP" />
        </div>

        {/* ── Row 2: Two backend columns ── */}
        <div className="flex gap-4 justify-center items-start">
          {/* Left: Saleor/Django */}
          <div className="flex flex-col items-center gap-1">
            <Box label="Saleor Core" sublabel="Django · Python · GraphQL" color="#0c4b33" textColor="#3ecf8e" wide />
            <div className="flex flex-wrap gap-1 justify-center max-w-[190px]">
              {['Products', 'Cart', 'Orders', 'Promotions', 'Customers'].map(s => (
                <span key={s} className="text-[9px] px-1.5 py-0.5 rounded border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Right: API Gateway → Spring Boot services */}
          <div className="flex flex-col items-center gap-1">
            <Box label="API Gateway" sublabel="Auth · Routing · Rate Limit" color="#7c3aed" wide />
            <BranchDown count={3} narrow />
            <div className="flex gap-2">
              <Box label="Product" sublabel="Spring Boot" color="#f89820" small />
              <Box label="Payment" sublabel="T-Wallet" color="#ef4444" small />
              <Box label="Inventory" sublabel="Spring Boot" color="#0ea5e9" small />
            </div>
          </div>
        </div>

        <Divider label="Event Bus" />

        {/* ── Row 3: Message Broker ── */}
        <Box label="RabbitMQ" sublabel="Lightweight Message Broker" color="#ff6600" wide />

        <ArrowDown label="ETL · Transform" />

        {/* ── Row 4: Integration ── */}
        <Box label="Apache Camel" sublabel="Data Integration Layer" color="#d97706" wide />

        <BranchDown count={4} narrow />

        {/* ── Row 5: External systems ── */}
        <div className="flex gap-2 justify-center">
          <Box label="SAP DBM" sublabel="Vehicles · Orders" color="#0070f3" small />
          <Box label="SAP CDC" sublabel="Used vehicles" color="#0070f3" small />
          <Box label="T-Sure" sublabel="Insurance" color="#dc2626" small />
          <Box label="3rd Delivery" sublabel="Logistics" color="#16a34a" small />
        </div>

        <Divider label="Infrastructure" />

        {/* ── Row 6: Infra ── */}
        <div className="flex gap-3 justify-center">
          <Box label="Kubernetes" sublabel="Orchestration · Auto-scale" color="#326ce5" />
          <Box label="Docker" sublabel="Containers · Log monitoring" color="#2496ed" />
          <Box label="CI/CD" sublabel="Build · Test · Deploy" color="#22c55e" />
        </div>

      </div>
    </div>
  )
}
