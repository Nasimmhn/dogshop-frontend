import React from 'react'
import styled from 'styled-components/macro'


// Global theme
import { mainTheme } from '../lib/GlobalStyle'




export const Footer = () => {
  return (

    <StyledFooter>

      <FlexWrapper >
        <WrapperInner>
          <Title>Dogs</Title>
          <InnerText>Find dogs</InnerText>
          <InnerText>Dog breeds</InnerText>
          <InnerText>Dog care</InnerText>
        </WrapperInner>
        <WrapperInner>
          <Title>About us</Title>
          <InnerText>Login</InnerText>
          <InnerText>Sign Up</InnerText>
          <InnerText>FAQ</InnerText>
        </WrapperInner>

      </FlexWrapper >

    </StyledFooter>


  )
}





/* ------ STYLING ------ */

const StyledFooter = styled.footer`
  background-color: ${mainTheme.lightbeige};
  /* margin-top: 50px; */
  width:100%;
  height:200px;
  
`

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-around;
  height:100%;


`

const WrapperInner = styled.div`
  
`


const Title = styled.h4`
  color: ${mainTheme.quinary};
  font-size: 22px;
  width:100%;
  text-align: left;
  margin-bottom:15px;

`


const InnerText = styled.p`
  color: ${mainTheme.whiteish};
  font-size: 19px;
  width:150px;
  text-align: left;
  border-bottom: 2px solid transparent;
  margin:8px 0px;
  &&:hover{
    text-decoration:underline ${mainTheme.whiteish};
    cursor:pointer;
  }
`
