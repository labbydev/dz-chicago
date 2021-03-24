import { graphql, useStaticQuery, Link } from 'gatsby'
import React from 'react'
import Navigation from './navigation'

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
    <div className={`text-white bg-pink-500`}>
      <div
        className={`container py-4 flex items-center justify-between`}
      >
        <h1
          className={`text-display text-3xl`}
        >
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h1>
        <Navigation />
      </div>
    </div>
  )
}

export default Header
