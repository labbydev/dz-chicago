import React from 'react'


export default ({ data }) => (
  <div 
    style={{ 
      backgroundImage: `url(${data.heroImage.fluid.src})` 
    }}
    className={`hero bg-fixed h-not-full bg-center flex justify-center items-center px-4`}
  >
    <div
      className={`inline-block align-middle text-white`}
    >
      <div
        className={`text-7xl font-bold`}
      >{data.headline}</div>
      <p><a href={data.url}>Join our Sisterhood</a></p>
    </div>
  </div>
)
