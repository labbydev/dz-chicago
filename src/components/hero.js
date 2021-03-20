import React from 'react'
import Img from 'gatsby-image'


export default ({ data }) => (
  <div>
    <Img
      alt={data.name}
      fluid={data.heroImage.fluid}
    />
    <div>
      <h3>{data.name}</h3>
      <p>{data.title}</p>
    </div>
  </div>
)
