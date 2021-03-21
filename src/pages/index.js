import React from 'react'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [group] = get(this, 'props.data.allContentfulGroup.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <Hero data={group.node} />
        <div
          className={`container`}
        >
          <h3>puppies</h3>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
query HomeQuery {
  allContentfulGroup(filter: {contentful_id: {eq: "2Z9ljL29E6VpubkIrP2YrC"}}) {
    edges {
      node {
        headline
        url
        heroImage: image {
          fluid(maxWidth: 1850) {
            src
          }
        }
        body {
          raw
        }
      }
    }
  }
}
`

export default RootIndex
