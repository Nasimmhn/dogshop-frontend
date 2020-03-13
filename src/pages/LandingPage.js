import React from 'react'
import styled from 'styled-components/macro'
// import heroImage from '../public/assets/hero.jpg'

// Components
import { DogList } from 'components/DogList'
import { DogFilterMenu } from 'components/DogFilterMenu'


// Color theme
import { mainTheme } from 'lib/GlobalStyle'

export const LandingPage = () => {
  return (
    <>
      <HeroSection>
        <InnerText>Top section</InnerText>
      </ HeroSection>
      <SectionWrapper>
        <DogFilterMenu />
        <DogList />
      </SectionWrapper>
    </>
  )
}

/* ------ STYLING ------ */

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 450px;
  background: url('assets/hero.jpg');
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 100vmax rgba(81, 57, 64, 0.4);
  border-top-right-radius:50px;
  border-top-left-radius:50px;
  @media (min-width: 450px) {
    background-size: cover;
    background-position: center;
  
  }
`

const SectionWrapper = styled.section`
  flex-grow: 1;
  width: 100%;
  display: flex;
  background-color: ${mainTheme.whiteish} ;
  flex-direction: row;
`

const InnerText = styled.p`
  color: ${mainTheme.blackish};
  font-size: 22px;
  width:100%;
  text-align: center;
`

