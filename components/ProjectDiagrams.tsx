'use client'

import {
  Monitor, Server, Database, Cloud, HardDrive, Package,
  GitBranch, Shield, Zap, Globe, FileImage,
  Workflow, Layers, MessageSquare,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ── Shared primitives ──────────────────────────────────────────────────────

interface BoxProps {
  icon?: LucideIcon
  label: string
  sublabel?: string
  color: string
  wide?: boolean
  small?: boolean
  pill?: string   // optional small pill label (e.g. "AWS")
}

function Box({ icon: Icon, label, sublabel, color, wide, small, pill }: BoxProps) {
  const bg     = `${color}18`
  const border = `${color}44`
  return (
    <div
      className={`
        relative rounded-lg border px-2.5 py-2 text-center
        transition-transform hover:scale-105 cursor-default
        ${wide ? 'min-w-[180px]' : small ? 'min-w-[96px]' : 'min-w-[120px]'}
      `}
      style={{ background: bg, borderColor: border }}
    >
      {pill && (
        <span className="absolute -top-2 right-1.5 text-[9px] font-mono px-1.5 py-0.5 rounded-full border"
          style={{ background: bg, borderColor: border, color }}>
          {pill}
        </span>
      )}
      {Icon && (
        <div className="flex justify-center mb-1">
          <Icon size={13} style={{ color, opacity: 0.9 }} />
        </div>
      )}
      <div className="font-semibold text-xs leading-tight" style={{ color }}>{label}</div>
      {sublabel && (
        <div className="text-[9px] leading-tight mt-0.5" style={{ color, opacity: 0.6 }}>{sublabel}</div>
      )}
    </div>
  )
}

function ArrowDown({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center text-slate-400 py-0.5">
      {label && (
        <span className="text-[9px] font-mono border border-slate-500/25 bg-slate-500/10 rounded px-1.5 py-0.5 mb-0.5 text-slate-400">
          {label}
        </span>
      )}
      <svg width="2" height="18" viewBox="0 0 2 18" fill="none">
        <line x1="1" y1="0" x2="1" y2="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        <path d="M-3 12 L1 18 L5 12" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  )
}

function BranchDown({ slots }: { slots: number }) {
  const gap = 120
  const total = (slots - 1) * gap
  const cx = total / 2
  const positions = Array.from({ length: slots }, (_, i) => i * gap)
  return (
    <div className="flex justify-center py-0.5">
      <svg width={total + 20} height={30} viewBox={`-10 0 ${total + 20} 30`} fill="none" className="text-slate-400">
        <line x1={cx} y1="0" x2={cx} y2="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        <line x1={positions[0]} y1="6" x2={positions[slots - 1]} y2="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        {positions.map((x) => (
          <g key={x}>
            <line x1={x} y1="6" x2={x} y2="22" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
            <path d={`M${x - 4} 22 L${x} 30 L${x + 4} 22`} stroke="currentColor" strokeWidth="1.5" />
          </g>
        ))}
      </svg>
    </div>
  )
}

function MergeUp({ slots }: { slots: number }) {
  const gap = 120
  const total = (slots - 1) * gap
  const cx = total / 2
  const positions = Array.from({ length: slots }, (_, i) => i * gap)
  return (
    <div className="flex justify-center py-0.5">
      <svg width={total + 20} height={28} viewBox={`-10 0 ${total + 20} 28`} fill="none" className="text-slate-400">
        {positions.map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        ))}
        <line x1={positions[0]} y1="18" x2={positions[slots - 1]} y2="18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        <line x1={cx} y1="18" x2={cx} y2="28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      </svg>
    </div>
  )
}

function Section({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 my-2 w-full max-w-[480px] mx-auto">
      <div className="flex-1 h-px bg-slate-500/20" />
      <span className="text-[9px] font-mono text-slate-500 whitespace-nowrap">{label}</span>
      <div className="flex-1 h-px bg-slate-500/20" />
    </div>
  )
}

function Row({ children, gap = 3 }: { children: React.ReactNode; gap?: number }) {
  return <div className={`flex gap-${gap} justify-center`}>{children}</div>
}

// ── E-commerce diagram (full detail) ──────────────────────────────────────

export function EcommerceDiagram() {
  return (
    <div className="flex flex-col items-center py-3 px-2 text-xs min-w-[420px] w-full overflow-x-auto">
      <Row>
        <Box icon={Monitor} label="React Backoffice" sublabel="Admin portal" color="#61dafb" />
        <Box icon={Monitor} label="React Storefront" sublabel="Customer-facing" color="#61dafb" />
      </Row>
      <div className="flex gap-14 justify-center">
        <ArrowDown label="GraphQL" />
        <ArrowDown label="REST" />
      </div>
      <Row gap={4}>
        <div className="flex flex-col items-center gap-1">
          <Box icon={Layers} label="Saleor Core" sublabel="Django · Python · GraphQL" color="#3ecf8e" wide />
          <div className="flex flex-wrap gap-1 justify-center max-w-[180px]">
            {['Products','Cart','Orders','Promotions','Customers'].map(s => (
              <span key={s} className="text-[8px] px-1.5 py-0.5 rounded border border-emerald-500/25 text-emerald-500 bg-emerald-500/8">{s}</span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Box icon={Shield} label="API Gateway" sublabel="Auth · Routing · Rate Limit" color="#7c3aed" wide />
          <BranchDown slots={3} />
          <Row gap={2}>
            <Box icon={Server} label="Product"  sublabel="Spring Boot" color="#f89820" small />
            <Box icon={Server} label="Payment"  sublabel="T-Wallet"    color="#ef4444" small />
            <Box icon={Server} label="Inventory" sublabel="Spring Boot" color="#0ea5e9" small />
          </Row>
        </div>
      </Row>
      <Section label="Event Bus" />
      <Box icon={MessageSquare} label="RabbitMQ" sublabel="Lightweight Message Broker" color="#ff6600" wide />
      <ArrowDown label="ETL · Transform" />
      <Box icon={Workflow} label="Apache Camel" sublabel="Data Integration Layer" color="#d97706" wide />
      <BranchDown slots={4} />
      <Row gap={2}>
        <Box icon={Database}  label="SAP DBM"    sublabel="Vehicles"  color="#0070f3" small />
        <Box icon={Database}  label="SAP CDC"    sublabel="Used cars" color="#0070f3" small />
        <Box icon={Server}    label="T-Sure"     sublabel="Insurance" color="#dc2626" small />
        <Box icon={Globe}     label="Delivery"   sublabel="3rd party" color="#16a34a" small />
      </Row>
    </div>
  )
}

// ── Toyota diagram ──────────────────────────────────────────────────────────

export function ToyotaDiagram() {
  return (
    <div className="flex flex-col items-center py-3 px-2 text-xs min-w-[360px] w-full overflow-x-auto">

      <Section label="Client" />
      <Box icon={Monitor} label="Browser / Mobile" sublabel="online.toyota.com.ph" color="#94a3b8" wide />
      <ArrowDown label="HTTPS" />

      <Section label="Frontend — portal-storefront" />
      <Row gap={3}>
        <Box icon={Monitor} label="Angular 18 SPA" sublabel="Vehicles · Bookings · Dashboard · Reports" color="#dd0031" wide />
        <Box icon={Server}  label="Express SSR"    sublabel="Server-side rendering" color="#68a063" />
      </Row>
      <ArrowDown label="REST API · OAuth2 tokens" />

      <Section label="SAP Hybris Commerce — Java / Spring" />
      <div className="flex flex-wrap gap-1.5 justify-center max-w-[360px] mb-1">
        {['/occ/v2/tmp/*', '/tmpocc/*', '/tmpwebservices/*', '/authorizationserver'].map(p => (
          <span key={p} className="text-[8px] font-mono px-1.5 py-0.5 rounded border border-orange-500/30 text-orange-400 bg-orange-500/8">{p}</span>
        ))}
      </div>
      <BranchDown slots={3} />
      <Row gap={2}>
        <Box icon={Layers}   label="tmpcore · tmpfacades"          sublabel="Domain models · Business logic" color="#f89820" wide />
        <Box icon={Server}   label="tmpocc · tmpwebservices"       sublabel="OCC API · Custom endpoints"     color="#f59e0b" wide />
        <Box icon={HardDrive} label="tmppayment · tmpordermgmt"   sublabel="Payment · Order fulfillment"    color="#fb923c" wide />
      </Row>
      <ArrowDown label="Integrations" />

      <Section label="External Integrations" />
      <Row gap={2}>
        <Box icon={Shield}    label="Gigya"          sublabel="Identity · SSO"           color="#7c3aed" small />
        <Box icon={Workflow}  label="SAP CPI"        sublabel="Data sync flows"           color="#0070f3" small />
        <Box icon={Zap}       label="Payment/Wallet" sublabel="Transactions"              color="#22c55e" small />
        <Box icon={HardDrive} label="SFTP"           sublabel="Vehicle · Insurance data"  color="#0ea5e9" small />
        <Box icon={Cloud}     label="Azure"          sublabel="Image processing"          color="#0078d4" small pill="Azure" />
      </Row>

      <Section label="Backoffice" />
      <Row gap={3}>
        <Box icon={Layers} label="tmpbackoffice"        sublabel="Admin console"   color="#6366f1" />
        <Box icon={Layers} label="tmpdealerbackoffice"  sublabel="Dealer portal"   color="#8b5cf6" />
      </Row>

      <Section label="CI/CD — SAP Commerce Cloud CCv2" />
      <Box icon={GitBranch} label="Jenkins" sublabel="Build · Deploy pipeline" color="#e05d44" wide />
      <BranchDown slots={3} />
      <Row gap={2}>
        <Box icon={Package} label="DEV"  sublabel="cloud-development" color="#22c55e" small />
        <Box icon={Package} label="STG"  sublabel="cloud-staging"     color="#f59e0b" small />
        <Box icon={Package} label="PROD" sublabel="cloud-production"  color="#ef4444" small />
      </Row>
    </div>
  )
}

// ── DNP diagram ─────────────────────────────────────────────────────────────

export function DNPDiagram() {
  return (
    <div className="flex flex-col items-center py-3 px-2 text-xs min-w-[320px] w-full overflow-x-auto">
      <Section label="Teacher Portal" />
      <Box icon={Monitor} label="Next.js — Teacher" sublabel="Upload exam · Select grade(s) · Multi-class" color="#a78bfa" wide />
      <ArrowDown label="Upload file" />

      <Section label="Cache Layer — repeat uploads skip re-scan" />
      <Row gap={3}>
        <Box icon={Zap}      label="Redis"      sublabel="Hot cache · TTL"          color="#dc382d" />
        <Box icon={Database} label="Memcached"  sublabel="Distributed · In-memory"  color="#00a0d2" />
      </Row>
      <ArrowDown label="cache miss → scan" />

      <Section label="Backend — Scan Pipeline" />
      <Box icon={Zap} label="NestJS — Scan Engine" sublabel="Parse exam → column layout per student" color="#e0234e" wide />
      <ArrowDown />
      <Row gap={3}>
        <Box icon={Database} label="PostgreSQL"  sublabel="Students · Grades · Submissions" color="#336791" />
        <Box icon={Cloud}    label="Azure Blob"  sublabel="Exam files · Scanned assets"     color="#0078d4" pill="Azure" />
      </Row>

      <Section label="Student Portal" />
      <Box icon={Monitor} label="Next.js — Student" sublabel="Column-layout exam · per grade · Noto Sans JP" color="#61dafb" wide />

      <Section label="Multi-grade" />
      <div className="flex flex-wrap gap-1.5 justify-center max-w-[280px]">
        {['Grade 1','Grade 2','Grade 3','Grade 4','Grade N'].map(g => (
          <span key={g} className="text-[9px] px-2 py-0.5 rounded border border-purple-500/30 text-purple-400 bg-purple-500/8 font-mono">{g}</span>
        ))}
      </div>
      <p className="text-[9px] text-slate-500 mt-1 font-mono">1 teacher → many grades simultaneously</p>

      <Section label="Infrastructure" />
      <Row gap={3}>
        <Box icon={Package}   label="Docker"  sublabel="Containerised"  color="#2496ed" />
        <Box icon={Globe}     label="i18n"    sublabel="Noto Sans JP"   color="#e11d48" />
        <Box icon={GitBranch} label="CI/CD"   sublabel="Build · Deploy" color="#22c55e" />
      </Row>
    </div>
  )
}

// ── Task Manager diagram ────────────────────────────────────────────────────

export function TaskManagerDiagram() {
  return (
    <div className="flex flex-col items-center py-3 px-2 text-xs min-w-[320px] w-full overflow-x-auto">
      <Section label="Frontend" />
      <Box icon={Monitor} label="Next.js 14" sublabel="SSR · App Router · Drag & Drop (DnD)" color="#e2e8f0" wide />
      <ArrowDown label="HTTPS" />
      <Section label="Backend" />
      <Row gap={3}>
        <Box icon={Server}  label="Express API"  sublabel="REST · JWT · RBAC" color="#68a063" />
        <Box icon={Shield}  label="Supabase Auth" sublabel="Auth · Realtime"  color="#3ecf8e" />
      </Row>
      <MergeUp slots={2} />
      <ArrowDown />
      <Section label="Data & Storage" />
      <Row gap={3}>
        <Box icon={Database}   label="PostgreSQL"  sublabel="Tasks · Projects"  color="#336791" />
        <Box icon={FileImage}  label="AWS S3"      sublabel="Images · Files"    color="#ff9900" pill="AWS" />
      </Row>
      <Section label="DevOps" />
      <Row gap={3}>
        <Box icon={GitBranch}  label="GitHub Actions" sublabel="Jest · CI/CD"  color="#2088ff" />
        <Box icon={Package}    label="Docker"         sublabel="Containerised" color="#2496ed" />
      </Row>
    </div>
  )
}

// ── Inspectoro (Supply Chain) diagram ──────────────────────────────────────

export function InspectoroDiagram() {
  return (
    <div className="flex flex-col items-center py-3 px-2 text-xs min-w-[320px] w-full overflow-x-auto">
      <Section label="Frontend" />
      <Box icon={Monitor} label="Angular SPA" sublabel="Supply chain UI · Inventory · Inspections" color="#dd0031" wide />
      <ArrowDown label="REST / HTTP" />
      <Section label="Backend" />
      <Box icon={Zap} label="Python FastAPI" sublabel="Supply chain logic · Async tasks" color="#3776ab" wide />
      <ArrowDown />
      <Section label="Data & Storage (AWS)" />
      <Row gap={3}>
        <Box icon={Database}   label="AWS RDS"  sublabel="PostgreSQL · Records"  color="#ff9900" pill="AWS" />
        <Box icon={HardDrive}  label="AWS S3"   sublabel="Docs · Photos · Media" color="#ff9900" pill="AWS" />
      </Row>
      <Section label="Infrastructure (AWS)" />
      <Row gap={3}>
        <Box icon={Cloud}      label="AWS EC2 / ECS" sublabel="Hosting · Scaling"  color="#ff9900" />
        <Box icon={Package}    label="Docker"        sublabel="Containerised"      color="#2496ed" />
        <Box icon={GitBranch}  label="CI/CD"         sublabel="Build · Deploy"     color="#22c55e" />
      </Row>
    </div>
  )
}

// ── Router — pick diagram by project id ────────────────────────────────────

const diagrams: Record<string, () => React.JSX.Element> = {
  ecommerce:   EcommerceDiagram,
  toyota:      ToyotaDiagram,
  dnp:         DNPDiagram,
  taskmanager: TaskManagerDiagram,
  inspectoro:  InspectoroDiagram,
}

export function ProjectDiagram({ projectId }: { projectId: string }) {
  const Diagram = diagrams[projectId]
  if (!Diagram) return (
    <div className="flex items-center justify-center h-32 text-[color:var(--text-muted)] text-xs font-mono">
      {`// no diagram for "${projectId}"`}
    </div>
  )
  return <Diagram />
}
