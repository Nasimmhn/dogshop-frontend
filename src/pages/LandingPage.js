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
    <>
      <HeroSection>
        <TextContainer>
          <InnerSpan>Dreaming about a best friend? </InnerSpan>
          <InnerText >Go ahead and take a look at these precious ones <FontAwesomeIcon icon={faPaw} /></InnerText>
        </TextContainer>
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
  color: ${mainTheme.whiteish};
  background: ${mainTheme.grayish};
  background: url("/assets/hero10b.jpg");
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
  /* border-radius: 50px 50px 0px 0px; */
          
  @media (min-width: 0px) and (max-width: 668px) {
    border-radius: 0px;
    background-position:right;
  }
`
// const Container = styled.div`
//   border-radius: 50px;
//   -webkit-box-shadow: 0px 0px 15px -4px rgba(186,174,170,1);
//   -moz-box-shadow: 0px 0px 15px -4px rgba(186,174,170,1);
//   box-shadow: 0px 0px 15px -4px rgba(186,174,170,1);
// `

const SectionWrapper = styled.section`
  background-color: ${mainTheme.lightgray};
  min-height: 680px;
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  /* border-radius: 0px 0px 50px 50px; */
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
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  /* Tablet */
  @media (min-width: 0px) and (max-width: 668px) {
    margin-top: 150px;
    align-self: center;
    justify-self: center;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 250px;
    background-color: rgb(255, 255, 255, 0.7);
    
  }
  @media (max-width: 350px) {
    width: 100%;
  }
  
`

const InnerSpan = styled.h1`
  margin-left: 50px;
  width: 600px;
  color:${mainTheme.tertiary};
  /* text-shadow: 0 1px 10px #4d4751, 0 0 4px #4d4751; */
  font-size:40px;
  /* Tablet */

  @media (min-width: 669px) and (max-width: 1175px) {
    width: 350px;
  }
  @media (min-width: 0px) and (max-width: 668px) {
    width: 100%;
    margin-left: 0px;
    font-size: 30px;
    text-align: center;
    padding: 20px 0px;
  }
`

const InnerText = styled.p`
  margin-left: 50px;
  width: 600px;
  font-weight:bold;
  color: ${ mainTheme.quaternary};
  font-size: 18px;
  margin-top: 15px;
  @media (min-width: 669px) and (max-width: 1175px) {
    width: 350px;
  }
  @media (min-width: 0px) and (max-width: 668px) {
    width: 100%;
    margin-left: 0px;
    text-align: center;
    padding: 20px 0px;
  }
`
