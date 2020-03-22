import React from 'react'
import styled from 'styled-components/macro'

// Components
import { BreedList } from 'components/Breed/BreedList'
import { BreedFilterMenu } from 'components/Breed/BreedFilterMenu'


// Global color theme
import { mainTheme } from '../lib/GlobalStyle'


export const BreedPage = () => {
  return (
    <Container>
      <SectionWrapper>
        <BreedFilterMenu />
        <BreedList />
      </SectionWrapper>
    </Container>
  )
}

/* ------ STYLING ------ */

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
