import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Link } from 'gatsby'
// import Navigation from './navigation'

const Header = () => {
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
    <div className={`bg-pink text-white`}>
      <div
        className={`w-full mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl text-center py-8`}
      >
        <h1
          className={`text-display text-3xl`}
        >
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h1>
      </div>
    </div>
  )
}

export default Header
