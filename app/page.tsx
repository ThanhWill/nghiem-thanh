import { BookLayout } from '@/components/BookLayout'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Experience } from '@/components/Experience'
import { PerformanceMindset } from '@/components/PerformanceMindset'

export default function Home() {
  return (
    <main>
      <BookLayout>
        <Hero />
        <Projects />
        <Experience />
        <PerformanceMindset />
      </BookLayout>
    </main>
  )
}
