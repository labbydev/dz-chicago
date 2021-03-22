import React from 'react'
import Container from './container'
import Header from './header'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Header />
        {children}
      </div>
    )
  }
}

export default Template
