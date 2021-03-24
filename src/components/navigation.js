import React from 'react'
import { Link } from 'gatsby'
import MenuToggle from './menu-toggle'

export default () => (
  <MenuToggle>
    <nav 
      className={`absolute left-0 bg-pink-500 w-full p-4 z-50 shadow-md`}
      role="navigation"
    >
      <ul
        className={`uppercase tracking-wider text-xl font-light mt-4 container`}
        aria-label={`Primary`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/#clubs">Clubs</Link>
        </li>
        <li>
          <Link to="/#events">Events</Link>
        </li>
      </ul>
    </nav>
  </MenuToggle>
)
