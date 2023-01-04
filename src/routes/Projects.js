import React from 'react'

import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import Work from '../components/Work'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="PROJECTS." text="Here are some of my projects" />
      <Work />
      <Footer />
    </div>
  )
}

export default Projects