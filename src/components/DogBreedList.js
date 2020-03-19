import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'


// Components
import { DogBreedCard } from 'components/DogBreedCard'


// fetchDogs from reducer
import { fetchDogBreeds } from 'reducers/dogdata'




export const DogBreedList = () => {
  const dispatch = useDispatch()

  // From dogdata reducer
  const allDogBreeds = useSelector((state) => state.dogdata.dogBreeds)
  const dogBreedFilter = useSelector((state) => state.dogdata.dogBreedFilter)

  useEffect(() => {
    dispatch(fetchDogBreeds(dogBreedFilter))

  }, [dispatch, dogBreedFilter])


  // Map over the dogBreeds here
  return (
    <BreedListWrapper>
      {allDogBreeds.map((dogBreed) => (
        <Hyperlink key={dogBreed._id} to={`/dogbreed/${dogBreed._id}`}>
          <DogBreedCard dogBreed={dogBreed} />
        </Hyperlink>
      ))}
    </BreedListWrapper>
  )
}

/* ------ STYLING ------ */

const BreedListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;


`

const Hyperlink = styled(Link)`
  text-decoration: none;
`