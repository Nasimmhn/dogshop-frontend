import React from 'react'
import styled from 'styled-components/macro'

// Global theme
import { mainTheme } from '../lib/GlobalStyle'

export const Footer = () => {
  return (

    <StyledFooter>
      <FlexWrapper>

        <Text><b>Demo project</b></Text>
        <Text><A href="https://my-portfolio-by-nasim.netlify.com/">Nasim Mahzoun</A> &copy;	2020</Text>
        <A href="https://github.com/Nasimmhn/dogshop-frontend"> Github <GithubLogo src="/assets/GitHub-Mark-32px.png" /></A>

      </FlexWrapper>
    </StyledFooter>
  )
}

/* ------ STYLING ------ */

const StyledFooter = styled.footer`
  background-color: ${mainTheme.lightbeige};
  color: ${mainTheme.darkbrown};
  width:100%;
  height:150px;
  padding: 10px;
`
const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  height:100%;
`
const A = styled.a`
  color: ${mainTheme.blackish};
  & :hover {
    text-decoration: underline;
  }
`
const Text = styled.span`
  white-space: nowrap;
  margin: 4px 0px;
`
const GithubLogo = styled.img`
  height: 20px;
  position: relative;
  top: 3px;
`
