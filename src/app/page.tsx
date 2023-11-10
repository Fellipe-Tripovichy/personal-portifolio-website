"use client"

import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'

export default function Home() {
  return (
    <main className=' mx-auto w-full bg-beige px-4 sm:px-6 md:max-w-6xl'>
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
    </main>
  )
}
