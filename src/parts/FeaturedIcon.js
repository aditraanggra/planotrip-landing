import React from 'react'

function FeaturedIcon({ key, icon, title, desc }) {
  return (
    <div key={key} className='feature-list--wrapper'>
      <img src={icon} className='md:mx-0 mx-auto' alt='icon' />
      <h4 className='feature-list--title'>{title}</h4>
      <p className='feature-list--desc'>{desc}</p>
    </div>
  )
}

export default FeaturedIcon
