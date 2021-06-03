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
    <section id='featured-place' className='md:px-32 px-4 md:mt-36 mt-16'>
      <div className='flex md:flex-row flex-col items-center'>
        <h3 className='text-xl font-body font-medium text-textColor md:text-left text-center capitalize'>
          Tinggal Di Manapun
        </h3>
        <div className='border border-secondary border-opacity-20 md:flex-1 md:ml-2 w-3/5 md:w-auto md:mt-0 mt-4 '></div>
      </div>
      <div className='flex md:flex-row flex-col py-10 md:space-x-4'>
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
            <p className='font-body text-lg capitalize text-textColor font-normal mt-2'>
              {data.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedPlace
