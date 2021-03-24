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
              image {
                title
                resize(width: 360, height: 240) {
                  src
                }
              }
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
        className={`sm:grid sm:grid-flow-col sm:grid-cols-3 sm:gap-8`}
      >
        {data.allContentfulGroup.edges.map(({ node }) => {
          return (
            <div className={`mb-8 text-center grid grid-flow-row`}>
              <img 
                src={node.image.resize.src} 
                title={node.image.title}
                className={`mb-8`}
              />
              <h3>{node.name}</h3>
              <p
                className={`mb-8`}
              >{node.headline}</p>
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
