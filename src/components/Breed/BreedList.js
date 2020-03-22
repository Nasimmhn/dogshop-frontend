import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'


// Components
import { BreedCard } from './BreedCard'


// fetchDogs from reducer
import { fetchBreeds } from 'reducers/dogdata'




export const BreedList = () => {
  const dispatch = useDispatch()

  // From dogdata reducer
  const breeds = useSelector((state) => state.dogdata.breeds)
  const breedFilter = useSelector((state) => state.dogdata.breedFilter)

  useEffect(() => {
    dispatch(fetchBreeds(breedFilter))

  }, [dispatch, breedFilter])


  // Map over the breeds here
  return (
    <BreedListWrapper>
      {breeds.map((breed) => (
        <Hyperlink key={breed._id} to={`/breed/${breed._id}`}>
          <BreedCard breed={breed} />
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