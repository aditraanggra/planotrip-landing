import React from 'react'

import BrandLogo from '../parts/Logo'
import RightMenu from './RightMenu'
import { Spin as Hamburger } from 'hamburger-react'

const Header = () => {
  return (
    <header className='w-full bg-white z-20 fixed shadow'>
      <div className='flex flex-row justify-between md:px-20 px-4 items-center py-5'>
        <BrandLogo className='md:ml-5' />
        <label for='toggled-menu' className='md:hidden z-30'>
          <Hamburger direction='right' size={24} color='#2F80ED' />
        </label>
        <input type='checkbox' id='toggled-menu' className='hidden' />
        <RightMenu id='menu' />
      </div>
    </header>
  )
}

export default Header
