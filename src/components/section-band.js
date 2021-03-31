import React from 'react'
import Container from './container'

const bkgColors = {
  brown: `bg-brown-500 text-white`,
  green: `bg-green-300`,
  pink: `bg-pink-500 text-brown-500`,
}

const SectionBand = ({ children, bkgColor, id, width, title }) => (
  <div
    className={`
      ${bkgColors[bkgColor]}
      py-10 overflow-hidden
    `}
  >
    <a id={id}><span className={`invisible`}>{title}</span></a>
    <Container
      width={width}
    >
      {children}
    </Container>
  </div>
)

export default SectionBand
