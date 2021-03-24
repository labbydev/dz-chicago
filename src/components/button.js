import React from 'react'

const colors = {
  primary: ` bg-pink-600 text-white hover:bg-green-500 hover:text-brown-500`,
  secondary: `bg-white text-brown-500 hover:bg-brown-500 hover:text-white`
}


export default ({ data, children, color }) => (
  <a 
    className={`
    ${colors[color] || colors.primary}
      self-end inline-block my-4 font-light uppercase p-4 shadow tracking-wider hover:no-underline`
    }
    href={data.url}
  >
      { children }
  </a>
)