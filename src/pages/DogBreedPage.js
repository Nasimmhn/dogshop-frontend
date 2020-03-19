import React from 'react'
import styled from 'styled-components/macro'

// Components
import { DogBreedList } from 'components/DogBreedList'
import { DogBreedFilterMenu } from 'components/DogBreedFilterMenu'


// Global color theme
import { mainTheme } from '../lib/GlobalStyle'


export const DogBreedPage = () => {
  return (
    <Container>
      {/* <HeroSection>
        {/* <InnerText></InnerText> */}
      {/* </HeroSection> */}

      <SectionWrapper>
        <DogBreedFilterMenu />
        <DogBreedList />
      </SectionWrapper>
    </Container>
  )
}

/* ------ STYLING ------ */

// const HeroSection = styled.section`
//   color: ${mainTheme.whiteish};
//   background: ${mainTheme.blackish};
//   background: url("/assets/hero14.jpg");
//   background-size: cover;
//   background-position: center;
//   /* box-shadow: inset 100vmax 0 0 100vmax rgba(23, 20, 13, 0.4); */
//   /* filter: brightness(80%); */
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 450px;
//   /* border-radius: 50px 50px 0px 0px; */
//   -webkit-box-shadow: inset 0px -9px 13px 0px rgba(0,0,0,0.34); 
//   box-shadow: inset 0px -9px 13px 0px rgba(0,0,0,0.34);

//   @media (min-width: 0px) and (max-width: 668px) {
//     border-radius: 0px;
//   }
// `


const Container = styled.div`
  background-color: ${mainTheme.lightgray};
  width:100%;
  flex-grow: 1;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

const SectionWrapper = styled.section`
  background-color: ${mainTheme.lightgray};
  margin: 0px 0px;
  height:100%;
  min-height: 700px;
  width:100%;
  flex-grow: 1;

  display: flex;
  flex-direction: row;
  
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
