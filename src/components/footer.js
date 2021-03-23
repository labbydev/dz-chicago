import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import SocialNav from './social-nav'

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

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
