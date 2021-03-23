import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Button from './button'

const Groups = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulGroup(filter: {contentful_id: {ne: "2Z9ljL29E6VpubkIrP2YrC"}}) {
          edges {
            node {
              name
              headline
              url
            }
          }
        }
      }
    `
  )
  
  return (
    <div className={`pb-12`}>
      <h2
        className={`mb-8`}
      >
        Join our Clubs
      </h2>
      <div
        className={`sm:grid sm:grid-flow-col sm:grid-cols-3 sm:gap-4`}
      >
        {data.allContentfulGroup.edges.map(({ node }) => {
          return (
            <div className={`mb-8 text-center`}>
              <h3>{node.name}</h3>
              <p>{node.headline}</p>
              { node.url ? (
                <Button data={node}>Join {node.name}</Button>
              ) : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Groups
