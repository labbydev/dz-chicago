import React from 'react'
import SocialNav from './social-nav'

const Footer = () => {

  return (
    <div className={`w-full text-white z-10 bg-brown-500`}>
      <div
        className={`container sm:flex items-center justify-between py-8`}
      >
        <small>© {new Date().getFullYear()} Delta Zeta Alumnae Chapter</small>
        <SocialNav />
      </div>
    </div>
  )
}

export default Footer
