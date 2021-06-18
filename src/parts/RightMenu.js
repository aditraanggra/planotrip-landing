import React from 'react'

import { Link } from 'react-scroll'

const Nav = [
  {
    id: 1,
    title: 'Kenapa Planotrip?',
    route: 'feature',
  },
  {
    id: 2,
    title: 'Testimony',
    route: 'testimony',
  },
  {
    id: 3,
    title: 'Hubungi Kami',
    route: 'contact',
  },
]

const RightMenu = (props) => {
  return (
    <ul {...props} className='navbar-menu'>
      {Nav.map((nav) => (
        <li key={nav.id} className='nav-menu'>
          <Link
            activeClass='active'
            to={nav.route}
            spy={true}
            smooth={true}
            offset={-40}
            duration={1000}
          >
            {nav.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default RightMenu
