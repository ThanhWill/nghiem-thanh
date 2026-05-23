'use client'

import { ThemeProvider } from 'next-themes'
import { CopyProtection } from './CopyProtection'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light">
      <CopyProtection />
      {children}
    </ThemeProvider>
  )
}
