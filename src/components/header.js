import { graphql, useStaticQuery, Link } from 'gatsby'
import React from 'react'
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
    <div className={`fixed w-full text-white z-10 bg-gradient-to-b from-black to-transparent`}>
      <div
        className={`container text-center py-8`}
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
