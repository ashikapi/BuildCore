import React from 'react'
import HomeHero from './home/page'
import States from './components/States'

export default function page() {
  return (
   <>
   
   <section id="home" className="pt-16">
        <HomeHero />
      </section>
      <States/>
   </>
    
  )
}
