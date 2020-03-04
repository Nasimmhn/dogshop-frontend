import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from "styled-components/macro"

import { fetchAllDogs } from 'reducers/dogdata'

// Components
import { DogCard } from 'components/DogCard'



export const DogsList = () => {
  const dispatch = useDispatch()
  const allDogs = useSelector((state) => state.dogdata.dogs)

  // const [age, setAge] = useState('')
  // const [price, setPrice] = useState('')
  const [sex, setSex] = useState('')
  // const [location, SetLocation] = useState('')
  const [query, setQuery] = useState('')


  console.log("Dogs.js query", query)


  useEffect(() => {
    // setQuery(`?age=${age}&aprice=${price}&sex=${sex}&location=${location}`)
    setQuery(`?sex=${sex}`)

    dispatch(fetchAllDogs(query))


  }, [query])
  console.log("allDogs", allDogs)
  //map over the dogs here
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