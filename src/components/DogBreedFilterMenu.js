import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

// React-Select
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

// Reducer
import { dogdata } from '../reducers/dogdata'


const groupOptions = [
  { value: 'Sport', label: 'Sport' },
  { value: 'Working', label: 'Working' },
  { value: 'Toy', label: 'Toy' },
  { value: 'Mixed breed', label: 'Mixed breed' },
  { value: 'Terrier', label: 'Terrier' },
  { value: 'Hound', label: 'Hound' },
  { value: 'Herding', label: 'Herding' },
]
const sizeOptions = [
  { value: 'XSmall', label: 'XSmall' },
  { value: 'Small', label: 'Small' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Large', label: 'Large' },
  { value: 'XLarge', label: 'XLarge' },
]


export const DogBreedFilterMenu = () => {
  const dispatch = useDispatch()

  const [race, setRace] = useState('')
  const [size, setSize] = useState([])
  const [group, setGroup] = useState([])
  const [query, setQuery] = useState('')





  useEffect(() => {

    let groupQuery = []
    if (group === null) { groupQuery = "" }
    else { groupQuery = group.map(item => item.value) }

    let sizeQuery = []
    if (size === null) { sizeQuery = "" }
    else { sizeQuery = size.map(item => item.value) }

    setQuery(`?&race=${race}&group=${groupQuery.toString()}&size=${sizeQuery.toString()}`)

    dispatch(dogdata.actions.setDogBreedFilter(query))
  }, [dispatch, query, race, group, size])





  return (
    <FilterWrapper>
      <h3> Filter </h3>

      <StyledInput
        placeholder="Search by breed ..."
        type="text"
        onInput={(e) => setRace(e.target.value)}
      />

      <Select
        components={makeAnimated()}
        theme={selectCustomTheme}
        placeholder={"Select Group(s)"}
        options={groupOptions}
        onChange={setGroup}
        noOptionsMessage={() => "No other groups"}
        isMulti
        autoFocus
        isSearchable
      />

      <Select
        components={makeAnimated()}
        theme={selectCustomTheme}
        placeholder={"Select Size"}
        options={sizeOptions}
        onChange={setSize}
        noOptionsMessage={() => "No other sizes"}
        isMulti
        autoFocus
      />

    </FilterWrapper>
  )
}


/* ------ STYLING ------ */


// Select custom Theme 
const selectCustomTheme = (theme) => {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: '#a6b1e1',
      primary: '#a6b1e1',
    }
  }
}


const FilterWrapper = styled.div`
  width: 300px;
  background: lightblue;
  color: #333;
  padding: 10px;
  display: flex;
  margin-top: 15px;
  flex-direction: column;
  & > * {
    margin: 8px 0px;
  }
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

const StyledInput = styled.input`
  font-size: 16px;
  padding: 2px 8px;
  box-sizing:border-box;
  color:rgb(51, 51, 51);
  font-family:Roboto;
  height:38px;
  min-height:38px;

`


