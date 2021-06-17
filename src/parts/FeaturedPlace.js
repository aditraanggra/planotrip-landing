import React from 'react'

import imgRumah from '../assets/images/Featured/img-rumah.png'
import imgTenda from '../assets/images/Featured/img-tenda.png'
import imgUnik from '../assets/images/Featured/img-unik.png'
import imgVilla from '../assets/images/Featured/img-villa.png'

function FeaturedPlace() {
  const featuredPlaceImage = [
    {
      id: 1,
      title: 'rumah tinggal yang nyaman',
      image: imgRumah,
    },
    {
      id: 2,
      title: 'villa dengan kolam berenang',
      image: imgTenda,
    },
    {
      id: 3,
      title: 'rumah unik',
      image: imgUnik,
    },
    {
      id: 4,
      title: 'rumah tenda',
      image: imgVilla,
    },
  ]

  return (
    <section id='featured-place' className='featured-wrapper'>
      <div className='featured-wrapper--inner items-center'>
        <h3 className='section-title text-textColor md:text-left text-center'>
          Tinggal Di Manapun
        </h3>
        <div className='featured-divider'></div>
      </div>
      <div className='featured-wrapper--inner py-10 md:space-x-4'>
        {featuredPlaceImage.map((data) => (
          <div
            key={data.id}
            className='flex flex-col mb-4 items-center justify-center'
          >
            <img
              src={data.image}
              className='rounded-3xl'
              style={{ width: 280, height: 320 }}
              alt='featured'
            />
            <p className='featured-image--title'>{data.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedPlace
