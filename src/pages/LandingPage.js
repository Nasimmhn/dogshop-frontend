import React from 'react'

import { DogRaces } from 'components/DogRaces'
// import heroImageLarge from '../assets/hero.jpg'
import styled from 'styled-components/macro'


const TopSection = styled.section`
  width: 100%;
  height: 200px;
  background:#B9B9B9;
  `

const SearchSection = styled.section`
width: 100%;
background: #FFF;
`





export const LandingPage = () => {
  return (
    <>
      <SearchSection>
        <TopSection>
          Top section
        </TopSection>
        <DogRaces />
      </SearchSection>
    </>
  )
}