import React from 'react'

// import { DogRaces } from 'components/DogRaces'
import { Dogs } from 'components/Dogs'
// import heroImageLarge from '../assets/hero.jpg'
import styled from 'styled-components/macro'
import { SectionWrapper, FilterWrapper, DogItemWrapper } from '../lib/MainSectionStyle'





const TopSection = styled.section`
  width: 100%;
  height: 200px;
  background:#B9B9B9;
  `


export const LandingPage = () => {
  return (

    <>
      <TopSection>
        Top section
      </TopSection>
      <SectionWrapper>
        <FilterWrapper>
          filter
        </FilterWrapper>
        <DogItemWrapper>
          <Dogs />
        </DogItemWrapper>
      </SectionWrapper>
    </>
  )
}