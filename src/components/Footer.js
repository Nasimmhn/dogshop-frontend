import React from 'react'
import styled from 'styled-components/macro'







export const Footer = () => {
  return (
    <>
      <StyledFooter>
        <InnerText>This is footer</InnerText>
      </StyledFooter>
    </>
  )
}





/* ------ STYLING ------ */

const StyledFooter = styled.footer`
  width:100%;
  height:150px;
  padding: 10px;
  display: flex;
  background: #a6b1e1;
  margin-top: 15px;
  `

const InnerText = styled.p`
font-size: 22px;
width:100%;
text-align: center;
`
