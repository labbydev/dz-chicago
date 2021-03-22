import React from 'react'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Layout from '../components/layout'
import Hero from '../components/hero'
import SectionBand from '../components/section-band'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [group] = get(this, 'props.data.allContentfulGroup.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <Hero data={group.node} />
        <SectionBand
          bkgColor="pink"
          id="about"
        >
          {group.node && renderRichText(group.node.body)}
        </SectionBand>
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
        body {
          raw
        }
        heroImage: image {
          fluid(maxWidth: 1850) {
            src
          }
        }
      }
    }
  }
}
`

export default RootIndex
