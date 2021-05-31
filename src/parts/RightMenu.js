import React from 'react'

import Button from '../components/Button'

const Nav = ['Kenapa Planotrip?', 'Fitur Utama', 'Testimoni', 'Hubungi Kami']

const RightMenu = (props) => {
  return (
    <ul {...props} className='navbar-menu'>
      {Nav.map((nav, index) => (
        <li key={index}>
          <Button type='link' href='/' className='nav-menu'>
            {nav}
          </Button>
        </li>
      ))}
      <li>
        <Button className='btn btn-secondary'>Daftar</Button>
      </li>
    </ul>
  )
}

export default RightMenu
