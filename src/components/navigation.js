import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <nav role="navigation">
    <ul>
      <li>
        <Link to="/">Home</Link>
        <Link to="/#about">About</Link>
      </li>
    </ul>
  </nav>
)
