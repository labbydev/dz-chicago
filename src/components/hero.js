import React from 'react'
import Button from './button'


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
        className={`text-7xl font-bold mb-8`}
      >{data.headline}</div>
      <Button data={data}>Join our Sisterhood</Button>
    </div>
  </div>
)
