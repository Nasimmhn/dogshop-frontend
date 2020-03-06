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
  background: #a6b1e1;
`

const NavItems = styled.nav`
 display:flex;
 flex-direction:row;
 justify-content:space-around;
 align-items:center;
`

const NavButton = styled.button`
  background:transparent;
  color: #413c69;
  padding: 8px;
  width:100px;
  font-size:15px;
  
  transition: 0.6s; 
  border-style: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  &:hover {
    background: rgba(255,255,255, 0.2);
    border-bottom: 3px solid #413c69;
  }
`
