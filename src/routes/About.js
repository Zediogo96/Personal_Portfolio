import React from 'react'

import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="ABOUT ME." text="Here are some of my projects" />

      <Footer />
    </div>
  )
}

export default About