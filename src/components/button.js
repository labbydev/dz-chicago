import React from 'react'


export default ({ data, children }) => (
  <a 
    className={`bg-pink-600 text-white p-4 shadow tracking-wide hover:bg-green-600`}
    href={data.url}
  >
      { children }
  </a>
)