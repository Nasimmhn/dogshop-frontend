import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'


import { fetchAllDogs } from 'reducers/dogdata'




export const FilterMenu = () => {
  // const dispatch = useDispatch()
  // const allDogs = useSelector((state) => state.dogdata.dogs)

  // // const [age, setAge] = useState('')
  // // const [price, setPrice] = useState('')
  const [sex, setSex] = useState('')
  // // const [location, SetLocation] = useState('')
  // const [query, setQuery] = useState('')


  // console.log("Dogs.js query", query)


  // useEffect(() => {
  //   // setQuery(`?age=${age}&aprice=${price}&sex=${sex}&location=${location}`)
  //   setQuery(`?sex=${sex}`)
  //   dispatch(fetchAllDogs(query))
  // }, [query])

  // console.log("allDogs", allDogs)
  //map over the dogs here

  const handleSexChange = (e) => {
    setSex(e.target.value)
    console.log("e", e.target.value)
  }

  return (
    <FilterWrapper>
      <h3> FILTER </h3>
      <label> Gender:
      <select onChange={(e) => { handleSexChange(e) }}>
          <option selected value="">Both</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>

    </FilterWrapper>
  )
}


/* ------ STYLING ------ */

const FilterWrapper = styled.div`
  width: 300px;
  background: yellow;
  color: #333;
  padding: 10px;
  display: flex;
  flex-direction: column;
  /* @media (min-width: 668px) {
    width: 48%;
  }
  @media (min-width: 800px) {
    width: 32%;
  }
  @media (min-width: 992px) {
    width: 23%;
  } */
`

