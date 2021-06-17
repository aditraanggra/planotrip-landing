import React from 'react'
import Button from '../components/Button'
import ParticlesBg from './ParticlesBg'

function Subscribe({ id }) {
  return (
    <section id={id} className='subscribe-wrapper'>
      <h3 className='section-title text-white'>
        dapatkan info terbaru dari kami
      </h3>
      <div className='subscribe-wrapper-form'>
        <input
          type='text'
          placeholder='Input your email'
          className='subscribe-input'
        />
        <Button type='button' className='btn subscribe-button'>
          Subscribe
        </Button>
      </div>
      <ParticlesBg />
    </section>
  )
}

export default Subscribe
