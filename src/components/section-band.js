import React from 'react'
import Container from './container'

const bkgColors = {
  brown: `bg-brown-300`,
  green: `bg-green-300`,
  pink: `bg-pink-500 text-white`,
}

export default ({ children, bkgColor, id }) => (
  <div
    className={`
      ${bkgColors[bkgColor]}
      py-10
    `}
  >
    <a id="${id}"></a>
    <Container>
      {children}
    </Container>
  </div>
)
