import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
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

const sexOptions = [
  { value: '', label: 'Both' },
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
]


export const FilterMenu = () => {
  const dispatch = useDispatch()

  // // const [age, setAge] = useState('')
  // // const [price, setPrice] = useState('')
  const [sex, setSex] = useState({ value:"" })
  const [race, setRace] = useState('')



  const [group, setGroup] = useState([])
  // // const [location, SetLocation] = useState('')
  const [query, setQuery] = useState('')




  useEffect(() => {
    
    let groupQuery = []
    if (group === null) { groupQuery="" }
    else { groupQuery = group.map(item => item.value)}

    setQuery(`?sex=${sex.value}&race=${race}&group=${groupQuery.toString()}`)

    console.log("FilterMenu -> useEffect - query:", query)
    dispatch(dogdata.actions.setDogFilter(query))
  }, [dispatch, query, sex, race, group])


  
  const customTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ... theme.colors,
        primary25: '#a6b1e1',
        primary: '#a6b1e1',
      }
    }
  }
 
  return (
    <FilterWrapper>
      <h3> Filter </h3>

      <StyledInput
        placeholder="Search by breed ..."
        type="text"
        onInput={(e) => setRace(e.target.value)} 
      />
      
      <Select
        theme={customTheme}
        placeholder={"Select Gender"}
        options={sexOptions}
        onChange={setSex}
      />

      <Select
        theme={customTheme}
        placeholder={"Select Group(s)"}
        options={groupOptions}
        onChange={setGroup}
        noOptionsMessage={() => "No other groups"}
        isMulti
        autoFocus
        isSearchable
      />


    </FilterWrapper>
  )
}


/* ------ STYLING ------ */

const FilterWrapper = styled.div`
  width: 300px;
  background: lightblue;
  color: #333;
  padding: 10px;
  display: flex;
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

const StyledInput = styled.input `
  font-size: 16px;
  padding-bottom:2px;
  padding-left:8px;
  padding-right:8px;
  padding-top:2px;
  background-color:rgb(255, 255, 255);
  border-bottom-color:rgb(204, 204, 204);
  border-bottom-left-radius:4px;
  border-bottom-right-radius:4px;
  border-bottom-style:solid;
  border-bottom-width:0.994318px;
  border-left-color:rgb(204, 204, 204);
  border-left-style:solid;
  border-left-width:0.994318px;
  border-right-color:rgb(204, 204, 204);
  border-right-style:solid;
  border-right-width:0.994318px;
  border-top-color:rgb(204, 204, 204);
  border-top-left-radius:4px;
  border-top-right-radius:4px;
  border-top-style:solid;
  border-top-width:0.994318px;
  box-sizing:border-box;
  color:rgb(51, 51, 51);
  font-family:Roboto;
  height:37.9972px;
  justify-content:space-between;
  min-height:38px;
  outline-color:rgb(51, 51, 51);
  outline-style:none;
  outline-width:0px;
  position:relative;
  transition-delay:0s;
  transition-duration:0.1s;
  transition-property:all;
  transition-timing-function:ease;
  width:225.838px;
  -webkit-box-align:center;
  -webkit-box-pack:justify;
  -webkit-font-smoothing:antialiased;
`


