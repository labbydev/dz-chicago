import React from 'react'
import Img from 'gatsby-image'


export default ({ data }) => (
  <div>
    <Img
      alt={data.name}
      fluid={data.heroImage.fluid}
    />
    <div>
      <div>{data.headline}</div>
      <p><a href={data.url}>Join our Sisterhood</a></p>
    </div>
  </div>
)
