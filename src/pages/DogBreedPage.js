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
      <SectionWrapper>
        <DogBreedFilterMenu />
        <DogBreedList />
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
