import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
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
    console.log("DogList -> dogFilter", dogFilter)
    dispatch(fetchDogs(dogFilter))

  }, [dispatch, dogFilter])


  // Map over the dogs here
  return (
    <CardsWrapper>
      {allDogs.map((dog) => (
        <Link key={dog._id} to={`/dog/${dog._id}`}>
          <DogCard
            key={dog._id}
            age={dog.age}
            price={dog.price}
            sex={dog.sex}
            location={dog.location}
            race={dog.race}
            group={dog.race.group}
            addedAt={dog.addedAt}
            size={dog.race.size}
            images={dog.images}
            owner={dog.owner}
            description={dog.description}
          />
        </Link>
      ))}
    </CardsWrapper>
  )
}

/* ------ STYLING ------ */

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  /* @media (max-width: 628px) {
    flex-wrap:wrap } 
   */
`