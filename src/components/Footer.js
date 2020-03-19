import React from 'react'
import styled from 'styled-components/macro'


// Global theme
import { mainTheme } from '../lib/GlobalStyle'




export const Footer = () => {
  return (

    <StyledFooter>

      <FlexWrapper >
        <WrapperInner>
          <Title>Dog care topics</Title>
          <InnerText>This is footer</InnerText>
          <InnerText>This is footer</InnerText>
          <InnerText>This is footer</InnerText>
        </WrapperInner>
        <WrapperInner>
          <Title>Contact</Title>
          <InnerText>this is footert</InnerText>
          <InnerText>This is footer</InnerText>
          <InnerText>This is footer</InnerText>
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
  font-size: 19px;
  width:100%;
  text-align: center;
`


const InnerText = styled.p`
  color: ${mainTheme.whiteish};
  font-size: 15px;
  width:100%;
  text-align: center;
`
