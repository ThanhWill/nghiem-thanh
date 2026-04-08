import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Experience } from '@/components/Experience'
import { PerformanceMindset } from '@/components/PerformanceMindset'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <PerformanceMindset />
        <Contact />
      </main>
    </>
  )
}
