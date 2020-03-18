import React from 'react'
import styled from 'styled-components/macro'
// import heroImage from '../public/assets/hero.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

// Components
import { DogList } from 'components/DogList'
import { DogFilterMenu } from 'components/DogFilterMenu'

// Global color theme
import { mainTheme } from '../lib/GlobalStyle'





export const LandingPage = () => {
  return (
    <Container>
      <HeroSection>
        <TextContainer>
          <InnerSpan>Dream about a best friend? </InnerSpan>
          <InnerText >Go ahead and take a look at these precious ones <FontAwesomeIcon icon={faPaw} /></InnerText>
        </TextContainer>
      </ HeroSection>
      <SectionWrapper>
        <DogFilterMenu />
        <DogList />
      </SectionWrapper>
    </Container>
  )
}

/* ------ STYLING ------ */

const HeroSection = styled.section`
  color: ${mainTheme.whiteish};
  background: ${mainTheme.blackish};
  background: url('assets/hero10a.jpg');
  background-size: cover;
  background-position: center;
  /* box-shadow: inset 100vmax 0 0 100vmax rgba(23, 20, 13, 0.4); */
  /* filter: brightness(80%); */
  -webkit-filter: sepia(0.1) brightness(90%);
  filter: sepia(0.1) brightness(90%);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 450px;
  border-radius: 50px 50px 0px 0px;
          
  @media (min-width: 0px) and (max-width: 668px) {
    border-radius: 0px;
  }
`
const Container = styled.div`
  border-radius: 50px;
  -webkit-box-shadow: 0px 0px 15px -4px rgba(186,174,170,1);
  -moz-box-shadow: 0px 0px 15px -4px rgba(186,174,170,1);
  box-shadow: 0px 0px 15px -4px rgba(186,174,170,1);
`

const SectionWrapper = styled.section`
  background-color: ${mainTheme.quinary};
  background: url('assets/pink-pattern_a.jpg');
  background-size: auto;
  background-repeat: repeat;
  background-position: center;
  min-height: 680px;
  flex-grow: 1;
  width: 100%;
  display: flex;
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


const TextContainer = styled.div`
  position: absolute;
  top: 120px;
  left:15px;
  width: 550px;
    /* Tablet */
    @media (min-width: 0px) and (max-width: 668px) {
      width: 100%;
      
    }
    /* Mobile */
    @media (max-width: 375px) {
    
  }
  
`

const InnerSpan = styled.h1`
  color:${mainTheme.tertiary};
  margin-bottom:5px;
  /* text-shadow: 0 1px 10px #4d4751, 0 0 4px #4d4751; */
  font-size:40px;
    /* Tablet */
    @media (min-width: 0px) and (max-width: 668px) {
      
    }
    /* Mobile */
    @media (max-width: 375px) {
    
  }
  
`

const InnerText = styled.p`
  color: ${ mainTheme.quaternary};
  font-size: 18px;
  margin-top: 15px;
  width:90%;
    /* Tablet */
    @media (min-width: 0px) and (max-width: 668px) {
      
    }
    /* Mobile */
    @media (max-width: 375px) {
    
  }
  
`
