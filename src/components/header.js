import { graphql, useStaticQuery, Link } from 'gatsby'
import React from 'react'
import Navigation from './navigation'

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: {eq: "DZ Chicago Logo.svg"}) {
          publicURL
        }
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
        <img src={data.file} alt={data.site.siteMetadata.title} />
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
