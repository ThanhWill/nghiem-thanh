import type { Metadata } from 'next'
import { DM_Sans, JetBrains_Mono } from 'next/font/google'
import { Providers } from '@/components/Providers'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'N Thanh — Fullstack Software Engineer',
  description:
    'Senior Fullstack Software Engineer with 8+ years of experience in frontend performance optimization, scalable architectures, and fullstack development.',
  keywords: [
    'Software Engineer',
    'Fullstack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Performance',
    'Microservices',
  ],
  authors: [{ name: 'Nguyen Nghiem Thanh' }],
  openGraph: {
    title: 'N Thanh — Fullstack Software Engineer',
    description:
      'Performance-focused Fullstack Engineer specializing in React, Next.js, and enterprise architectures.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-[color:var(--bg)] text-[color:var(--text)] transition-colors duration-300">
        <AnimatedBackground />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
