import React from 'react'


export default ({ data, children }) => (
  <a 
    className={`inline-block my-4 bg-pink-600 text-white font-light uppercase p-4 shadow tracking-wider hover:bg-green-500 hover:text-brown-500 hover:no-underline`}
    href={data.url}
  >
      { children }
  </a>
)