import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'

import { DogBreedDetailCard } from '../components/DogBreedDetailCard'

// fetchDogBreed function (from reducer)
import { fetchDogBreed } from 'reducers/dogdata'

export const DogBreedDetailPage = () => {
  const dispatch = useDispatch()
  const { breedId } = useParams()


  const dogBreed = useSelector((state) => state.dogdata.dogBreed)
  useEffect(() => {

    console.log("TEST")
    dispatch(fetchDogBreed(breedId))
  }, [dispatch, breedId])


  return (

    <SectionWrapper>
      {dogBreed &&
        <DogBreedDetailCard dogBreed={dogBreed} />
      }
    </SectionWrapper>
  )
}



/* ------ STYLING ------ */

const SectionWrapper = styled.section`
  flex-grow: 1;
  width: 100%;
  display: flex;
  background-color: beige;
  justify-content: center;
`