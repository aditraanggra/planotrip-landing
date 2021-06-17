import React from 'react'

import Featured from '../parts/Featured'
import FeaturedPlace from '../parts/FeaturedPlace'
import Footer from '../parts/Footer'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import Subscribe from '../parts/Subscribe'
import Testimony from '../parts/Testimony'

const LandingPages = () => {
  return (
    <>
      <Header />
      <Hero />
      <Featured id='feature' />
      <FeaturedPlace />
      <Testimony id='testimony' />
      <Subscribe id='contact' />
      <Footer />
    </>
  )
}

export default LandingPages
