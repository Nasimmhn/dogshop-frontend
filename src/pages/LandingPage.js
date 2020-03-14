import React from 'react'
import styled from 'styled-components/macro'
// import heroImage from '../public/assets/hero.jpg'

// Components
import { DogList } from 'components/DogList'
import { DogFilterMenu } from 'components/DogFilterMenu'


// Global color theme
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
  background: ${mainTheme.blackish};
  background: url('assets/hero.jpg');
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 100vmax rgba(81, 57, 64, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 450px;
  border-radius: 50px 50px 0px 0px;
  @media (min-width: 450px) {
  
  }
`

const SectionWrapper = styled.section`
  flex-grow: 1;
  width: 100%;
  display: flex;
  background-color: ${mainTheme.quinary} ;
  flex-direction: row;
  border-radius: 0px 0px 50px 50px;
`

const InnerText = styled.p`
  color: ${mainTheme.whiteish};
  font-size: 22px;
  width:100%;
  text-align: center;
`

