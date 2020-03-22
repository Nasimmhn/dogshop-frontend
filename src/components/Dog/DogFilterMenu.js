import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

// React-Select
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

// Material UI 
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Typography, Slider } from '@material-ui/core'

// Global color theme
import { mainTheme } from 'lib/GlobalStyle'

// Reducer
import { dogdata } from '../../reducers/dogdata'




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

  const [sex, setSex] = useState({ value: "" })
  const [breed, setBreed] = useState('')
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
    setQuery(`?sex=${sex.value}&breed=${breed}&group=${groupQuery.toString()}&size=${sizeQuery.toString()}&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}`)

    dispatch(dogdata.actions.setDogFilter(query))
  }, [dispatch, query, sex, breed, group, priceRange, size])





  return (
    <FilterWrapper>
      <div>
        <StyledInput
          placeholder="Search by breed ..."
          type="text"
          onInput={(e) => setBreed(e.target.value)}
        />
      </div>

      <Select
        components={makeAnimated()}
        theme={selectCustomTheme}
        placeholder={"Select Group(s)"}
        options={groupOptions}
        onChange={setGroup}
        noOptionsMessage={() => "No other groups"}
        isMulti
        isSearchable
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
        placeholder={"Select Size"}
        options={sizeOptions}
        onChange={setSize}
        noOptionsMessage={() => "No other sizes"}
        isMulti

      />

      <div className={classes.priceRange}>
        <Typography id="range-slider" gutterBottom>
          Price Range
          </Typography>
        <PriceSlider
          value={priceRange}
          onChange={handlePriceChange}
          aria-labelledby="range-slider"
          min={0}
          max={40000}
          step={500}
          marks={priceRangeMarks}
          valueLabelDisplay="off"
        />
      </div >

    </FilterWrapper>
  )
}


/* ------ STYLING ------ */


// Styling selectors
const selectCustomTheme = (theme) => {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary: mainTheme.secondary, // selected bg
      primary50: mainTheme.secondary, // highliht after selection bg
      neutral80: mainTheme.blackish, // selected text
      neutral10: mainTheme.secondary, // selected in multiselector
      dangerLight: mainTheme.tertiary, // remove button 
      danger: mainTheme.whiteish, // remove button 
    },

  }
}
// Price Range custom style 
const useStyles = makeStyles({
  priceRange: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: mainTheme.blackish,
  },

});

const FilterWrapper = styled.div`
  background-color: ${mainTheme.whiteish};
  color: ${mainTheme.blackish};
  -webkit-box-shadow: 0px 0px 15px -4px rgba(186,174,170,1);
  -moz-box-shadow: 0px 0px 15px -4px rgba(186,174,170,1);
  box-shadow: 0px 0px 15px -4px rgba(186,174,170,1);
  padding: 35px;
  width: 400px !important;

  & > * {
    margin: 20px 0px;
  }
  /* Tablet */
  @media (min-width: 0px) and (max-width: 668px) {
    width: 100% !important;
    }
  /* Mobile */
  @media (max-width: 375px) {  
    padding: 35px 10px; 
  }
`



const StyledInput = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 0px 8px;
  border: 1px solid ${mainTheme.secondary};
  outline: none;
  box-sizing:border-box;
  color: ${mainTheme.blackish};
  border-radius: 5px;
  height:38px;
  & :focus {
    box-shadow: 0 0 4px ${mainTheme.secondary};
    border: 1px solid ${mainTheme.secondary};
  }
`


const PriceSlider = withStyles({
  root: {
    color: mainTheme.quaternary, // color of slider
    height: 0,
    width: 'calc(100% - 20px)',
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: mainTheme.quaternary, // bg color of thumb
    border: `2px solid ${mainTheme.secondary}`, // border of thumb
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
      backgroundColor: mainTheme.quaternary, // bg color of thumb
      border: `2px solid ${mainTheme.blackish}`, // border of thumb
    },
  },
  active: {
    color: "transparent",
  },
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,

  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);


