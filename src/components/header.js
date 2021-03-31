import { graphql, useStaticQuery, Link } from 'gatsby'
import React from 'react'
import Navigation from './navigation'
import Container from './container'

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: {eq: "DZ Chicago Logo.png"}) {
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
    <div className={`text-pink-600`}>
      <Container width="wide">
        <div
          className={`py-4 flex items-center justify-between`}
        >
          <img className={`w-40 inline-block`} src={data.file.publicURL} alt={data.site.siteMetadata.title} />
          <h1
            className={`text-display lg:text-3xl text-2xl inline-block`}
          >
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </h1>
          <Navigation />
        </div>
      </Container>
    </div>
  )
}

export default Header
