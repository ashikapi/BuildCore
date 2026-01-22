import React from 'react'
import HomeHero from './home/page'
import States from './components/States'
import Services from './services/page'
import Projects from './projects/page'

export default function page() {
  return (
   <>
   
   <section id="home" className="pt-16">
        <HomeHero />
      </section>
      <States/>
    <section id="services" className="">
      <Services />
    </section>
    <section id="projects" className="">
      <Projects />
    </section>
   </>
    
  )
}
