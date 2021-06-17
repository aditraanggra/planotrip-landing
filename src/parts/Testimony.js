import React from 'react'

import imgQuotes from '../assets/images/quotes-image.png'
import avatarPhotos from '../assets/images/traveller.jpg'

function Testimony({ id }) {
  return (
    <section id={id} className='testimony-wrapper'>
      <img src={imgQuotes} className='md:h-80 h-40 z-0 absolute' alt='quotes' />
      <div className='z-10 relative'>
        <h3 className='section-title text-center text-textColor'>
          Apa kata mereka tentang <span>planotrip</span>?
        </h3>
        <p className='quote text-center mt-20'>
          Two roads diverged in a wood, and I took the one less traveled by, And
          that has made all the difference.
        </p>
        <p className='text-center italic text-sm text-textColor'>
          -Robet frost
        </p>
        <img src={avatarPhotos} alt='avatar' className='avatar' />
      </div>
    </section>
  )
}

export default Testimony
