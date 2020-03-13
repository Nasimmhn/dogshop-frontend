import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'


import { useSelector } from 'react-redux'



export const NavBar = () => {
  const isLoggedin = useSelector((state) => state.userdata.isLoggedin)

  return (
    <NavSection>
      <NavItems>
        <ButtonWrapper>
          <Link to={'/'} tabIndex='-1'>
            <NavButton>Home</NavButton>
          </Link>
          <Link to={'/dogbreeds'} tabIndex='-1'>
            <NavButton>Dog Breeds</NavButton>
          </Link>
        </ButtonWrapper>
        <Link to={'/members'} tabIndex='-1'>
          <NavButton>Members</NavButton>
        </Link>
        {!isLoggedin &&
          <ButtonWrapper>
            <Link to={'/login'} tabIndex='-1'>
              <NavButton> Login </NavButton>
            </Link>
            <Link to={'/signup'} tabIndex='-1'>
              <NavButton> Sign Up</NavButton>
            </Link>
          </ButtonWrapper>
        }
        {isLoggedin &&
          <Link to={'/logout'} tabIndex='-1'>
            <NavButton> Logout </NavButton>
          </Link>
        }
      </NavItems>
    </NavSection>
  )
}

/* ------ STYLING ------ */

const NavSection = styled.section`
  width:100%;
  padding: 10px 0px;
  
`

const NavItems = styled.nav`
 display:flex;
 flex-direction:row;
 justify-content:space-between;
 align-items:center;
`
const ButtonWrapper = styled.div`
 display:grid;
 grid-template-columns: 1fr 1fr;
`
const NavButton = styled.button`
  background:transparent;
  color:  #393D52;
  padding: 8px;
  width:100px;
  font-size:15px;
  font-weight:bold;
  transition: 0.2s; 
  border-style: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  &:hover {
    background: #5B5566;
    color: #F0F1F8;
    border-bottom: 3px solid #F1CFCD;
  }
`
