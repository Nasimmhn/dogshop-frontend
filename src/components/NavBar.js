import React from 'react'
import { Link } from 'react-router-dom'

import { NavSection, NavItems, NavButton } from 'lib/GlobalNavBar'


export const NavBar = () => {
  return (
    <NavSection>
      <NavItems>
        <Link to={'/'} tabIndex='-1'>
          <NavButton>Home</NavButton>
        </Link>
        <Link to={'/dogbreeds'} tabIndex='-1'>
          <NavButton>Dog Breeds</NavButton>
        </Link>
        <Link to={'/signin'} tabIndex='-1'>
          <NavButton> Sign In </NavButton>
        </Link>
        <Link to={'/signup'} tabIndex='-1'>
          <NavButton> Sign Up</NavButton>
        </Link>
      </NavItems>
    </NavSection>
  )
}


