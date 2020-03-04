import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'


// Reducer
import { dogdata } from '../reducers/dogdata'


export const FilterMenu = () => {
  const dispatch = useDispatch()

  // // const [age, setAge] = useState('')
  // // const [price, setPrice] = useState('')
  const [sex, setSex] = useState('')
  const [race, setRace] = useState('')
  // // const [location, SetLocation] = useState('')
  const [query, setQuery] = useState('')




  useEffect(() => {
    setQuery(`?sex=${sex}&race=${race}`)
    console.log("FilterMenu -> useEffect - query:", query)
    dispatch(dogdata.actions.setDogFilter(query))
  }, [dispatch, query, sex, race])



  return (
    <FilterWrapper>
      <h3> FILTER </h3>
      <label> Breed:
        <input type="text" onInput={(e) => setRace(e.target.value)} />
      </label>
      <label> Gender:
        <select onChange={(e) => { setSex(e.target.value) }}>
          <option defaultValue value="">Both</option>
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

