import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

// React-Select
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

// Reducer
import { dogdata } from '../reducers/dogdata'

// Global color theme
import { mainTheme } from 'lib/GlobalStyle'


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
      <div>
        <StyledInput
          placeholder="Search by breed ..."
          type="text"
          onInput={(e) => setRace(e.target.value)}
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
        placeholder={"Select Size"}
        options={sizeOptions}
        onChange={setSize}
        noOptionsMessage={() => "No other sizes"}
        isMulti
      />

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
      primary25: mainTheme.secondary, // hovering
      primary: mainTheme.secondary, // selected bg
      primary50: mainTheme.secondary, // highliht after selection bg
      neutral80: mainTheme.blackish, // selected text
      neutral10: mainTheme.secondary, // selected in multiselector
      dangerLight: mainTheme.tertiary, // remove button 
      danger: mainTheme.whiteish, // remove button 
    },


  }
}


const FilterWrapper = styled.div`
  color: ${mainTheme.blackish};
  background-color: ${mainTheme.whiteish};
  -webkit-box-shadow: 0px 0px 15px -4px rgba(186,174,170,1);
  -moz-box-shadow: 0px 0px 15px -4px rgba(186,174,170,1);
  box-shadow: 0px 0px 15px -4px rgba(186,174,170,1);
  padding: 30px;
  width: 100%;
  min-width: 200px;
  max-width: 350px;

  & > * {
    margin: 20px 0px;
  }
  /* Tablet */
  @media (min-width: 0px) and (max-width: 668px) {
    max-width: unset;
    padding: 50px 10px 35px 10px;
    width: 100% !important;
    margin-right:0px;
    max-width: 100%;
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



