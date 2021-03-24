import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Button from './button'

const Events = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulEvent(sort: {fields: group___event___date, order: DESC}) {
          edges {
            node {
              date(formatString: "MMM DD YYYY")
              title
              url
              group {
                name
                id
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
        Upcoming Events
      </h2>
      <div
        className={`sm:grid sm:grid-flow-col sm:grid-cols-3 sm:gap-8`}
      >
        {data.allContentfulEvent.edges.map(({ node }) => {
          return (
            <div className={`mb-8`}>
              <h3>
                <a href={node.url}>
                  {node.title}
                </a>
              </h3>
              <small
                className={`mb-8 text-brown-300`}
              >{node.date}</small>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Events
