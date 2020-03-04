import React from 'react'
import styled from 'styled-components/macro'

// Components
import { DogsList } from 'components/DogsList'
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
        <DogsList />
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
  width: 100%;
  background: rgba(255,255,255, 0.5);
  display: flex;
  
`
