import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

const Button = (props) => {
  const className = [props.className]
  if (props.android) className.push('btn-primary')
  if (props.ios) className.push('btn-ios')
  if (props.hasShadow) className.push('btn-shadow')

  const onClick = () => {
    if (props.onClick) props.onClick()
  }

  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(' ')}
          style={props.style}
          target={props.target === '_blank' ? '_black' : undefined}
          rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {props.children}
        </a>
      )
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(' ')}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      )
    }
  }

  return (
    <button
      className={className.join(' ')}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  type: propTypes.oneOf(['button', 'link']),
  onClick: propTypes.func,
  href: propTypes.string,
  target: propTypes.string,
  className: propTypes.string,
  ios: propTypes.bool,
  android: propTypes.bool,
  isExternal: propTypes.bool,
  hasShadow: propTypes.bool,
}

export default Button
