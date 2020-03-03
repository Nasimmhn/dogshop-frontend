import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchAllDogs } from 'reducers/dogdata'
import { DogRaceItem } from 'components/DogRaceItem'
import { SectionWrapper, FilterWrapper, DogItemWrapper } from '../lib/MainSectionStyle'



export const Dogs = () => {
  const dispatch = useDispatch()
  const allDogs = useSelector((state) => state.dogdata.dogs)

  const [age, setAge] = useState('')
  const [price, setPrice] = useState('')
  const [sex, setSex] = useState('')
  const [location, SetLocation] = useState('')
  const [query, setQuery] = useState('')


  console.log("Dogs.js serachQuery", query)


  useEffect(() => {
    setQuery(`?age=${age}&aprice=${price}&sex=${sex}&location=${location}`)
    dispatch(fetchAllDogs(query))


  }, [query])

  //map over the dogs here
  return (
    <SectionWrapper>
      <FilterWrapper>
        filter
      </FilterWrapper>
      <DogItemWrapper>
        {allDogs.map((item) => (
          <DogRaceItem
            key={item._id}
            age={item.age}
            sex={item.sex}
            location={item.location}
          />
        ))}
      </DogItemWrapper>
    </SectionWrapper>
  )
}