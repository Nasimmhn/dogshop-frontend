import React from 'react'
import styled from 'styled-components/macro'





const StyledFooter = styled.footer`
  width:100%;
  padding: 10px;
  display: flex;
`

export const Footer = () => {
  return (
    <>
      <StyledFooter>
        This is footer
      </StyledFooter>
    </>
  )
}