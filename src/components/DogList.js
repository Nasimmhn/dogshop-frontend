import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'


// Components
import { DogCard } from 'components/DogCard'

// fetchDogs function (from reducer)
import { fetchDogs } from 'reducers/dogdata'





export const DogList = () => {
  const dispatch = useDispatch()

  // From dogdata reducer
  const { dogs, dogFilter } = useSelector((state) => state.dogdata)

  useEffect(() => {

    dispatch(fetchDogs(dogFilter))

  }, [dispatch, dogFilter])


  // Map over the dogs here
  return (
    <CardsWrapper>
      {dogs.map((dog) => (
        <Hyperlink key={dog._id} to={`/dog/${dog._id}`}>
          <DogCard
            dog={dog}
          />
        </Hyperlink>
      ))}
    </CardsWrapper>
  )
}

/* ------ STYLING ------ */

const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  column-gap: 40px;
  row-gap: 40px;
  margin: 40px 50px 40px 10px;

/* Tablet */
  @media (min-width: 0px) and (max-width: 668px) {
    margin: 20px 10px;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    column-gap: 10px;
  }
  /* Mobile */
  @media (max-width: 375px) {
    margin: 20px 10px;
    padding: 5px;
  }
`

const Hyperlink = styled(Link)`
  text-decoration: none;
`