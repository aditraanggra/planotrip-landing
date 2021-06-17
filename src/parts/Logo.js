import React from 'react'
import Button from '../components/Button'
import LogoImage from '../assets/images/Logo.png'

const Logo = (props) => {
  return (
    <Button {...props} type='link' href='./'>
      <img {...props} src={LogoImage} style={{ height: 40 }} alt='Logo' />
    </Button>
  )
}

export default Logo
