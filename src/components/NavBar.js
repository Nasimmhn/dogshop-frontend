import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'



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

/* ------ STYLING ------ */

const NavSection = styled.section`
  width:100%;
  padding: 10px;
`

const NavItems = styled.nav`
 display:flex;
 flex-direction:row;
 justify-content:space-around;
 align-items:center;
`

const NavButton = styled.button`
  color: #F44D5E;
  padding: 8px;
  width:100px;
  font-size:15px;
`
