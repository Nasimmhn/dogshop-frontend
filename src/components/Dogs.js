import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchAllDogs } from 'reducers/dogdata'

import { DogItem } from 'components/DogItem'
import { ItemWrapperInner } from '../lib/MainSectionStyle'



export const Dogs = () => {
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
    <ItemWrapperInner>
      {allDogs.map((item) => (
        <DogItem
          key={item._id}
          age={item.age}
          price={item.price}
          sex={item.sex}
          location={item.location}
          race={item.race}
          imageUrl={"assets/dog_races/".concat(item.images.url)}
        />
      ))}
    </ItemWrapperInner>
  )
}