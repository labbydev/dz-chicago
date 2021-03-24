import React from 'react'

const widths = {
  wide: `lg:max-w-screen-lg`,
}

export default ({ children, width }) => (
  <div
    className={`
      ${widths[width]}
      container
    `}
  >{children}</div>
)
