import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'

import { DogBreedDetailCard } from '../components/DogBreedDetailCard'


// Global color theme
import { mainTheme } from '../lib/GlobalStyle'

// fetchDogBreed (reducer)
import { fetchDogBreed } from '../reducers/dogdata'


export const DogBreedDetailPage = () => {
  const dispatch = useDispatch()
  const { breedId } = useParams()


  const breed = useSelector((state) => state.dogdata.dogBreed)
  useEffect(() => {

    console.log("TEST")
    dispatch(fetchDogBreed(breedId))
  }, [dispatch, breedId])


  return (

    <SectionWrapper>
      {breed &&
        <DogBreedDetailCard breed={breed} />
      }
    </SectionWrapper>
  )
}



/* ------ STYLING ------ */

const SectionWrapper = styled.section`
  padding: 40px;
  flex-grow: 1;
  width: 100%;
  display: flex;
  background-color: ${mainTheme.lightgray};
  flex-direction: row;
  /* border-radius: 50px 50px 50px 50px; */

  /* Tablet & mobile */
  @media (min-width: 0px) and (max-width: 668px) {
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding-top: 60px;
  }
  /* Mobile */
  @media (max-width: 375px) {
    padding-top: 60px;
  }
`
