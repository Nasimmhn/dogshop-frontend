import React from 'react'
import styled from 'styled-components/macro'

// Components
import { DogList } from 'components/DogList'
import { FilterMenu } from 'components/FilterMenu'


// import heroImageLarge from '../assets/hero.jpg'



export const LandingPage = () => {
  return (
    <>
      <TopSection>
        Top section
      </TopSection>
      <SectionWrapper>
        <FilterMenu />
        <DogList />
      </SectionWrapper>
    </>
  )
}

/* ------ STYLING ------ */

const TopSection = styled.section`
  width: 100%;
  height: 200px;
  background:#B9B9B9;
`

const SectionWrapper = styled.section`
  flex-grow: 1;
  width: 100%;
  display: flex;
  background-color: beige;
  
`
