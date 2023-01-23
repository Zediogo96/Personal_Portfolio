import React from 'react'

import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="ABOUT ME." text="Get to know some things about myself" />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About