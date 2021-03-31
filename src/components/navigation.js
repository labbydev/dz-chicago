import React from 'react'
import { Link } from 'gatsby'
import MenuToggle from './menu-toggle'

const Navigation = () => (
  <MenuToggle>
    <nav 
      className={`absolute left-0 top-28	bg-white w-full p-4 z-50 shadow-md`}
      role="navigation"
    >
      <ul
        className={`uppercase tracking-wider text-xl font-light mt-4 container`}
        aria-label={`Primary`}
      >
        <li
          className={`mb-2`}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`mb-2`}
        >
          <Link to="/#about">About</Link>
        </li>
        <li
          className={`mb-2`}
        >
          <Link to="/#clubs">Clubs</Link>
        </li>
        <li
          className={`mb-2`}
        >
          <Link to="/#events">Events</Link>
        </li>
      </ul>
    </nav>
  </MenuToggle>
)

export default Navigation
