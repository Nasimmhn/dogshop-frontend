import React from 'react'
import { NavBar } from 'components/NavBar'
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
height:500px;
background: #FFF;
`





export const LandingPage = () => {
  return (
    <>
      <TopSection>
        <NavBar />
      </TopSection>
      <SearchSection>
        <DogRaces />
      </SearchSection>
    </>
  )
}