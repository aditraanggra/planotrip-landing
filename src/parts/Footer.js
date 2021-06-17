import React from 'react'

import {
  FaAndroid,
  FaApple,
  FaYoutube,
  FaInstagramSquare,
  FaTwitter,
  FaFacebook,
} from 'react-icons/fa'

import Button from '../components/Button'
import Logo from './Logo'

function Footer() {
  return (
    <footer className='footer-wrapper'>
      <div className='footer-wrapper--inner'>
        <div className='footer-col--wrapper'>
          <Logo className='filter grayscale' />
          <div className='footer-brand--desc'>
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            <p>(808) 555-0111</p>
            <p>debbie.baker@example.com</p>
          </div>
        </div>
        <div className='footer-col--wrapper'>
          <h3 className='footer-sub--title'>Social Media</h3>
          <div className='divider'></div>
          <div className='footer-row--wrapper space-x-4 pt-6 mt-4'>
            <Button type='link' isExternal className='social-icon'>
              <FaFacebook />
            </Button>
            <Button type='link' isExternal className='social-icon'>
              <FaInstagramSquare />
            </Button>
            <Button type='link' isExternal className='social-icon'>
              <FaTwitter />
            </Button>
            <Button type='link' isExternal className='social-icon'>
              <FaYoutube />
            </Button>
          </div>
        </div>
        <div className='footer-col--wrapper'>
          <h3 className='footer-sub--title'>Download Our App</h3>
          <div className='divider mb-4'></div>
          <div className='space-y-4 mt-4'>
            <Button
              type='link'
              href='/'
              target='_blank'
              android
              className='btn'
            >
              <FaAndroid className='mx-2' />
              Download Android
            </Button>
            <Button type='link' href='/' target='_blank' ios className='btn'>
              <FaApple className='mx-2' />
              Download IOS
            </Button>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>Copyright &copy; 2021 - planotrip.com </p>
      </div>
    </footer>
  )
}

export default Footer
