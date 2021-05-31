import React from 'react'

import Button from '../components/Button'
import ParticlesBg from './ParticlesBg'

import { FaAndroid, FaApple } from 'react-icons/fa'

const Hero = () => {
  return (
    <section
      id='hero'
      className='flex flex-col justify-center items-center md:h-screen h-4/6 md:w-screen w-full bg-secondary'
    >
      <div className='md:w-3/5 w-4/5 h-auto mx-auto absolute z-10'>
        <h1 className='md:text-5xl text-2xl text-white font-body font-normal text-center capitalize'>
          temukan tempat <span className='font-bold'>terbaik</span> untuk
          petualangan-mu
        </h1>
        <p className='md:text-2xl text-base text-gray-50 font-body font-light text-center mt-4'>
          Kami menyediakan berbagai macam tempat penginapan untuk menjadikan
          perjalanan anda lebih mudah.
        </p>
        <div className='flex md:flex-row flex-col md:space-x-2 space-x-0 md:space-y-0 space-y-2 justify-center items-center mt-8'>
          <Button type='link' href='/' target='_blank' android className='btn'>
            <FaAndroid className='mx-2' />
            Download di Playstore
          </Button>
          <Button type='link' href='/' target='_blank' ios className='btn'>
            <FaApple className='mx-2' />
            Download di AppStore
          </Button>
        </div>
      </div>
      <ParticlesBg />
    </section>
  )
}

export default Hero
