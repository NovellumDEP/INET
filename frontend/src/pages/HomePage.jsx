import React from 'react'
import Hero from '../components/sections/hero/Hero'
import About from '../components/sections/about/About'
import OurWork from '../components/sections/ourwork/OurWork'
import Services from '../components/sections/services/Services'
// import Reviews from '../components/sections/reviews/reviews'
import Contact from '../components/sections/contact/Contact'

const HomePage = () => {
  return (
    <div className="w-full min-w-full overflow-x-hidden">
      <Hero />
      <Services />
      <About />
      <OurWork/>
      {/* Reviews section commented out - can be added later when INET has sufficient reviews */}
      {/* <Reviews /> */}
      <Contact />
    </div>
  )
}

export default HomePage