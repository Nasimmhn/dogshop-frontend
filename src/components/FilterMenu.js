import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

// React-Select
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

// Material UI 
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Slider } from '@material-ui/core';
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

const priceRangeMarks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 10000,
    label: '10k',
  },
  {
    value: 20000,
    label: '20k',
  },
  {
    value: 30000,
    label: '30k',
  },
  {
    value: 40000,
    label: '40k+',
  }
];


export const FilterMenu = () => {
  const dispatch = useDispatch()

  // // const [age, setAge] = useState('')
  const [sex, setSex] = useState({ value: "" })
  const [race, setRace] = useState('')
  const [priceRange, setPriceRange] = useState([0, 9999999])
  const [group, setGroup] = useState([])
  // // const [location, SetLocation] = useState('')
  const [query, setQuery] = useState('')




  const handlePriceChange = (event, newRange) => {
    setPriceRange(newRange);
  };


  useEffect(() => {

    let groupQuery = []
    if (group === null) { groupQuery = "" }
    else { groupQuery = group.map(item => item.value) }

    if (priceRange[1] == 40000) { priceRange[1] = 999999 }  // To query prices over 40000SEK
    setQuery(`?sex=${sex.value}&race=${race}&group=${groupQuery.toString()}&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}`)

    console.log("FilterMenu -> useEffect - query:", query)
    dispatch(dogdata.actions.setDogFilter(query))
  }, [dispatch, query, sex, race, group, priceRange])



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
        placeholder={"Select Gender"}
        options={sexOptions}
        onChange={setSex}
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
      <Typography gutterBottom>
        Select Price Range
      </Typography>
      <Slider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={0}
        max={40000}
        valueLabelDisplay="auto"
        step={500}
        marks={priceRangeMarks}
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
  min-height:38px;
  outline-color:red;
  outline-style:none;
  outline-width:0px;
  transition-delay:0s;
  transition-duration:0.1s;
  transition-property:all;
  transition-timing-function:ease;
  width:230px;
  -webkit-box-align:center;
  -webkit-box-pack:justify;
  -webkit-font-smoothing:antialiased;
`


