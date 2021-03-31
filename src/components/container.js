import React from 'react'

const widths = {
  wide: `lg:max-w-screen-lg`,
}

const Container = ({ children, width }) => (
  <div
    className={`
      ${widths[width]}
      container
    `}
  >{children}</div>
)

export default Container
