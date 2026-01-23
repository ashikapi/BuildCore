import React from 'react'
import HomeHero from './home/page'
import States from './components/States'
import Services from './services/page'
import Projects from './projects/page'
import AboutUs from './about/page'
import ContactUs from './contact/page'

export default function page() {
  return (
   <>
   
   <section id="home" className="pt-16">
        <HomeHero />
      </section>
      <States/>
    <section id="services" className="md:scroll-mt-0 scroll-mt-16">
      <Services />
    </section>
    <section id="projects" className="md:scroll-mt-8 scroll-mt-20">
      <Projects />
    </section>
    <section id='about' className='md:scroll-mt-8 scroll-mt-20'>
      <AboutUs />
    </section>
    <section id='contact' className='md:scroll-mt-8 scroll-mt-20'>
      <ContactUs />
    </section>
   </>
    
  )
}
