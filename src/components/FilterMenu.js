import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import Select from 'react-select'


// Reducer
import { dogdata } from '../reducers/dogdata'





export const FilterMenu = () => {
  const dispatch = useDispatch()

  // // const [age, setAge] = useState('')
  // // const [price, setPrice] = useState('')
  const [sex, setSex] = useState('')
  const [race, setRace] = useState('')

  const [group, setGroup] = useState('')
  // // const [location, SetLocation] = useState('')
  const [query, setQuery] = useState('')

  const options = [
    { value: 'All', label: 'All' },
    { value: 'Sport', label: 'Sport' },
    { value: 'Working', label: 'Working' },
    { value: 'Toy', label: 'Toy' },
    { value: 'Mixed breed', label: 'Mixed breed' },
    { value: 'Miscellaneous', label: 'Miscellaneous' },
    { value: 'Non-sporting', label: 'Non-sporting' },
    { value: 'Terrier', label: 'Terrier' },
    { value: 'Hound', label: 'Hound' },
    { value: 'Foundation stock', label: 'Foundation Stock' },
    { value: 'Herding', label: 'Herding' },
  ]




  useEffect(() => {
    setQuery(`?sex=${sex}&race=${race}&group=${group}`)
    console.log("FilterMenu -> useEffect - query:", query)
    dispatch(dogdata.actions.setDogFilter(query))
  }, [dispatch, query, sex, race, group])


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
      <Select
        defaultValue
        onChange={() => { setGroup(options) }}
        options={options}
        isMulti
      />


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

