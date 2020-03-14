import React from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

import { useSelector } from 'react-redux'

// Styled components
import styled from 'styled-components/macro'

// Global color theme
import { mainTheme } from '../lib/GlobalStyle'

export const NavBar = () => {
  const isLoggedin = useSelector((state) => state.userdata.isLoggedin)


  return (
    <NavSection>
      <HamburgerContainer>
        <Menu styles={burgerStyle} >
          <a id="dogs" className="menu-item" href="/">Dogs</a>
          <a id="dogbreeds" className="menu-item" href="/dogbreeds">Dog breeds</a>
          <a id="members" className="menu-item" href="/members">Members</a>
          {!isLoggedin && <a id="login" className="menu-item" href="/login">Login</a>}
          {!isLoggedin && <a id="signup" className="menu-item" href="/signup">Signup</a>}
          {isLoggedin && <a id="logout" className="menu-item" href="/logout">Logout</a>}

        </Menu>
      </HamburgerContainer>

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


var burgerStyle = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '26px',
    top: '15px'
  },
  bmBurgerBars: {
    background: mainTheme.whiteish, // Hamburger icon
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
 justify-content:space-between;
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
 grid-template-columns: 1fr 1fr;
`


const NavButton = styled.button`
  background:transparent;
  border-radius: 20px;
  color: ${mainTheme.blackish};
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
    background-color: ${mainTheme.quaternary};
    color: ${mainTheme.whiteish};
    border-bottom: 3px solid ${mainTheme.quinary};
    transition: 0.1s;
  }
`
