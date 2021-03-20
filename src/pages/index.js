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
        <div>
        Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.

Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.

Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis.
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
      }
    }
  }
}
`

export default RootIndex
