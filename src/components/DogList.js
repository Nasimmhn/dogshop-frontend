import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from "styled-components/macro"

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
    console.log("DogList -> dogFilter", dogFilter)
    dispatch(fetchDogs(dogFilter))

  }, [dispatch, dogFilter])


  // Map over the dogs here
  return (
    <CardsWrapper>
      {allDogs.map((item) => (
        <DogCard
          key={item._id}
          age={item.age}
          price={item.price}
          sex={item.sex}
          location={item.location}
          race={item.race}
          group={item.race.group.join(', ')}
          addedAt={item.addedAt}
          size={item.race.size}
          imageUrl={"assets/dog_races/".concat(item.images.url)}
        />
      ))}
    </CardsWrapper>
  )
}

/* ------ STYLING ------ */

const CardsWrapper = styled.div`
  width:100%;
  background: rgba(255,255,255, 0.5);
  padding: 10px;
  display: flex; 
  /* @media (max-width: 628px) {
    flex-wrap:wrap } 
   */
`