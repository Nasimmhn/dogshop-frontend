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

const sexOptions = [
  { value: '', label: 'Both' },
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
]
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
const priceRangeMarks = [
  { value: 0, label: '0' },
  { value: 10000, label: '10k' },
  { value: 20000, label: '20k' },
  { value: 30000, label: '30k' },
  { value: 40000, label: '40k+' }
]


export const DogFilterMenu = () => {
  const dispatch = useDispatch()

  // // const [age, setAge] = useState('')
  const [sex, setSex] = useState({ value: "" })
  const [race, setRace] = useState('')
  const [size, setSize] = useState([])
  const [priceRange, setPriceRange] = useState([0, 9999999])
  const [group, setGroup] = useState([])
  // // const [location, SetLocation] = useState('')
  const [query, setQuery] = useState('')



  const classes = useStyles();

  const handlePriceChange = (event, newRange) => {
    setPriceRange(newRange);
  };


  useEffect(() => {

    let groupQuery = []
    if (group === null) { groupQuery = "" }
    else { groupQuery = group.map(item => item.value) }

    let sizeQuery = []
    if (size === null) { sizeQuery = "" }
    else { sizeQuery = size.map(item => item.value) }

    if (priceRange[1] === 40000) { priceRange[1] = 999999 }  // To query prices over 40000SEK
    setQuery(`?sex=${sex.value}&race=${race}&group=${groupQuery.toString()}&size=${sizeQuery.toString()}&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}`)

    dispatch(dogdata.actions.setDogFilter(query))
  }, [dispatch, query, sex, race, group, priceRange, size])





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
      <div className={classes.priceRange}>
        <Typography id="range-slider" gutterBottom>
          Select Price Range
        </Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={40000}
          step={500}
          marks={priceRangeMarks}
        />
      </div>
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

// Price Range custom style 
const useStyles = makeStyles({
  priceRange: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },

});

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


