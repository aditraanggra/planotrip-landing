import React from 'react'

import Particles from 'react-particles-js'

function ParticlesBg() {
  return (
    <>
      <Particles
        className='w-screen h-screen'
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#fff',
            },
            opacity: {
              value: 0.5,
              anim: {
                enable: false,
              },
            },
            shape: {
              type: 'polygon',
              polygon: {
                nb_sides: 4,
              },
            },
            size: {
              value: 3,
              random: true,
            },
            line_linked: {
              enable: true,
              distance: 160,
              color: '#ffffff',
              opacity: 0.20042650760819036,
              width: 1,
            },
            move: {
              speed: 0.2,
            },
          },
        }}
      />
    </>
  )
}

export default ParticlesBg
