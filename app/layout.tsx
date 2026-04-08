import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Providers } from '@/components/Providers'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import './globals.css'

const inter = Inter({
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
  title: 'Nguyen Nghiem Thanh — Software Engineer',
  description:
    'Senior Software Engineer with 8+ years of experience in frontend performance optimization, scalable architectures, and fullstack development.',
  keywords: [
    'Software Engineer',
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Performance',
    'Microservices',
  ],
  authors: [{ name: 'Nguyen Nghiem Thanh' }],
  openGraph: {
    title: 'Nguyen Nghiem Thanh — Software Engineer',
    description:
      'Performance-focused Software Engineer specializing in React, Next.js, and enterprise architectures.',
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
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-[color:var(--bg)] text-[color:var(--text)] transition-colors duration-300">
        <AnimatedBackground />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
