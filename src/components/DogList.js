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
      {allDogs.map((item) => (
        <Link key={item._id} to={`/dog/${item._id}`}>
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
            owner={item.owner}
            description={item.description}
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