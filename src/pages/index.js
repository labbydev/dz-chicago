import React from 'react'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import SectionBand from '../components/section-band'
import Groups from '../components/groups'
import Events from '../components/events'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS } from "@contentful/rich-text-types"

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [group] = get(this, 'props.data.allContentfulGroup.edges')
    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => {
          const {
            fixed: { src },
            title,
          } = node.data.target
  
          return <img className="mx-auto md:float-left lg:-ml-20 md:mr-6 mb-6 shadow-md" src={src} alt={title} />
        },
      },
    }

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <Hero data={group.node} />
        <SectionBand
          bkgColor="pink"
          id="about"
        >
          {group.node && renderRichText(group.node.body, options)}
        </SectionBand>
        <SectionBand
          bkgColor="brown"
          id="events"
          width="wide"
        >
          <Events />
        </SectionBand>
        <SectionBand
          bkgColor="green"
          id="clubs"
          width="wide"
        >
          <Groups />
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
          references {
            ... on ContentfulAsset {
              contentful_id
              __typename
              title
              fixed(width: 300) {
                src
              }
            }
          }
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
