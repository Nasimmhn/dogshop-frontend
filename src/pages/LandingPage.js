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
  box-shadow: inset 100vmax 0 0 100vmax rgba(23, 20, 13, 0.4);
  /* filter: brightness(80%); */
  /* -webkit-filter: sepia(1);
  filter: sepia(0.1) brightness(70%); */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 450px;
  border-radius: 50px 50px 0px 0px;
  @media (min-width: 0px) and (max-width: 668px) {
    border-radius: 0px;
  }
`

const SectionWrapper = styled.section`
  flex-grow: 1;
  width: 100%;
  display: flex;
  background-color: ${mainTheme.quinary} ;
  flex-direction: row;
  border-radius: 0px 0px 50px 50px;
  
  /* Tablet */
  @media (min-width: 0px) and (max-width: 668px) {
    flex-direction: column;
    align-items: center;
  }
  /* Mobile */
  @media (max-width: 375px) {
    
  }
`

const InnerText = styled.p`
  color: ${mainTheme.whiteish};
  font-size: 22px;
  width:100%;
  text-align: center;
`

