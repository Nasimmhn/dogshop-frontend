import React from 'react'
import styled from 'styled-components/macro'

// Components
import { DogBreedList } from 'components/DogBreedList'
import { DogFilterMenu } from 'components/DogFilterMenu'


// import heroImageLarge from '../assets/hero.jpg'



export const DogBreedPage = () => {
  return (
    <>
      <TopSection>
        <InnerText>Top - Dog breeds</InnerText>
      </TopSection>

      <SectionWrapper>
        <DogFilterMenu />
        <DogBreedList />
      </SectionWrapper>
    </>
  )
}

/* ------ STYLING ------ */

const TopSection = styled.section`
  width: 100%;
  height: 200px;
  background: #a6b1e1;
`

const SectionWrapper = styled.section`
  flex-grow: 1;
  width: 100%;
  display: flex;
  background-color: beige;
  
`

const InnerText = styled.p`
font-size: 22px;
width:100%;
text-align: center;
`

