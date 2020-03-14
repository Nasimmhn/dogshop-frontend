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
  const allDogs = useSelector((state) => state.dogdata.dogs)
  const dogFilter = useSelector((state) => state.dogdata.dogFilter)

  useEffect(() => {

    dispatch(fetchDogs(dogFilter))

  }, [dispatch, dogFilter])


  // Map over the dogs here
  return (
    <CardsWrapper>
      {allDogs.map((dog) => (
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
  margin: 40px 40px 40px 0px;
  /* @media (max-width: 628px) {
    
    } 
   */
`

const Hyperlink = styled(Link)`
  text-decoration: none;


  /* color: #b3b3b3; */
  /* :visited {
    color: red;
  }
  :hover {
    color: white;
    transition-duration: 0.3s;
  } */
`