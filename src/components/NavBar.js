import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'


import { useSelector, useDispatch } from 'react-redux'

// Hamburger menu
import { slide as Menu } from 'react-burger-menu'

// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faUserPlus, faPaw, faDog, faPowerOff } from '@fortawesome/free-solid-svg-icons'

// authUser (from Reducer)
import { authUser } from 'reducers/userdata'


// Styled components
import styled from 'styled-components/macro'

// Global color theme
import { mainTheme } from '../lib/GlobalStyle'

export const NavBar = () => {
  const dispatch = useDispatch()
  let { isAuthenticated } = useSelector((state) => state.userdata)
  const accessToken = window.sessionStorage.getItem('accessToken')

  if (accessToken) {
    dispatch(authUser(accessToken))

  }
  console.log("Navbar - isAuthenticated:", isAuthenticated)


  return (
    <NavSection>
      <HamburgerContainer>
        <Menu styles={burgerStyle} >
          <a id="dogs" className="menu-item" href="/">Find dogs</a>
          <a id="dogbreeds" className="menu-item" href="/dogbreeds">Dog breeds</a>
          <a id="members" className="menu-item" href="/members">Members</a>
          {!isAuthenticated && <a id="login" className="menu-item" href="/login">Login</a>}
          {!isAuthenticated && <a id="signup" className="menu-item" href="/signup">Signup</a>}
          {isAuthenticated && <a id="logout" className="menu-item" href="/logout">Logout</a>}

        </Menu>
      </HamburgerContainer>

      <NavItems>
        <ButtonWrapper>
          <Link to={'/'} tabIndex='-1'>
            <NavButton><FontAwesomeIcon icon={faPaw} /> Find dogs</NavButton>
          </Link>
          <Link to={'/dogbreeds'} tabIndex='-1'>
            <NavButton><FontAwesomeIcon icon={faDog} /> Dog Breeds</NavButton>
          </Link>
        </ButtonWrapper>
        {!isAuthenticated &&
          <ButtonWrapper>
            <Link to={'/login'} tabIndex='-1'>
              <NavButton><FontAwesomeIcon icon={faUserCircle} /> Login </NavButton>
            </Link>
            <Link to={'/signup'} tabIndex='-1'>
              <NavButton><FontAwesomeIcon icon={faUserPlus} /> Sign Up</NavButton>
            </Link>
          </ButtonWrapper>
        }
        {isAuthenticated &&
          <ButtonWrapper>
            <Link to={'/members'} tabIndex='-1'>
              <NavButton><FontAwesomeIcon icon={faUserCircle} /> Profile </NavButton>
            </Link>
            <Link to={'/logout'} tabIndex='-1'>
              <NavButton><FontAwesomeIcon icon={faPowerOff} /> Logout </NavButton>
            </Link>
          </ButtonWrapper>
        }
      </NavItems>
    </NavSection>
  )
}

/* ------ STYLING ------ */


var burgerStyle = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '26px',
    top: '15px'
  },
  bmBurgerBars: {
    background: mainTheme.secondary, // Hamburger icon
  },
  bmBurgerBarsHover: {
    background: mainTheme.primary,
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: mainTheme.whiteish, // Cross to close hamburger

  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: mainTheme.secondary,
    padding: '2.5em 1.5em 0',
    fontSize: '1.5em'
  },
  bmMorphShape: {
    fill: mainTheme.quinary,
  },
  bmItemList: {
    color: mainTheme.whiteish,
    padding: '0.8em',
    display: 'flex',
    flexDirection: 'column',

  },
  bmItem: {
    display: 'block',
    padding: '10px',
    color: mainTheme.blackish,
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.5)' // Overlay
  }
}

const HamburgerContainer = styled.div`
  display: none;
  @media (min-width: 0px) and (max-width: 668px) {
    display: block;
  }
`

const NavSection = styled.section`
  width:100%;
`

const NavItems = styled.nav`
 padding: 10px 0px;
 display:flex;
 flex-direction:row;
 justify-content:space-around;
 align-items:center;
 
 @media (min-width: 0px) and (max-width: 668px) {
    display: none;
  }
  /* Mobile */
  @media (max-width: 375px) {
  
  }
`
const ButtonWrapper = styled.div`
 display:grid;
 grid-template-columns: 120px 120px;
`


const NavButton = styled.button`
  background:transparent;
  color: ${mainTheme.blackish};
  padding: 8px;
  font-size:15px;
  font-weight:bold;
  transition: 0.2s; 
  border-style: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  outline: none;
  &:hover {
    color: ${mainTheme.blackish};
    border-bottom: 3px solid ${mainTheme.tertiary};
    transition: 0.1s;
  }
  &:focus {
    outline: none;
  }
`
