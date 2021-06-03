import React from 'react'
import Featured from '../parts/Featured'
import FeaturedPlace from '../parts/FeaturedPlace'
import Header from '../parts/Header'
import Hero from '../parts/Hero'

const LandingPages = (props) => {
  return (
    <>
      <Header />
      <Hero />
      <Featured />
      <FeaturedPlace />
    </>
  )
}

export default LandingPages
