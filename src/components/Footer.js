import React from 'react'
import styled from 'styled-components/macro'


// Global theme
import { mainTheme } from '../lib/GlobalStyle'




export const Footer = () => {
  return (
    <>
      <StyledFooter>
        <InnerText>This is footer</InnerText>
        <img src="assets/color-theme.png" />
      </StyledFooter>
    </>
  )
}





/* ------ STYLING ------ */

const StyledFooter = styled.footer`
  background: ${mainTheme.blackish};
  border-radius: 50px 50px 0px 0px;
  margin-top: 50px;
  width:100%;
  height:250px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  `

const InnerText = styled.p`
  color: ${mainTheme.whiteish};
  font-size: 22px;
  width:100%;
  text-align: center;
`
