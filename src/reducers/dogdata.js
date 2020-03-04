import { createSlice } from '@reduxjs/toolkit'

export const dogdata = createSlice({
  name: "dogdata",
  initialState: {
    dogRaceItems: [],
    dogs: [],
    dogFilter: "",
  },

  reducers: {
    setDogRaceItems: (state, action) => {
      state.dogRaceItems = action.payload
    },

    setDogs: (state, action) => {
      state.dogs = action.payload
    },

    setDogFilter: (state, action) => {
      state.dogFilter = action.payload
    },

  }
})



export const fetchDogRaces = (searchQuery) => {
  return dispatch => {
    fetch(`http://localhost:8080/dograces/${searchQuery}`)
      .then(res => res.json())
      .then(dogRaces => {
        console.log("query", searchQuery)
        console.log("dogRaces:", dogRaces)
        dispatch(dogdata.actions.setDogRaceItems(dogRaces))
      })
  }
}


export const fetchDogs = (query) => {
  return dispatch => {
    fetch(`http://localhost:8080/dogs/${query}`)
      .then(res => res.json())
      .then(doggies => {
        dispatch(dogdata.actions.setDogs(doggies))
      })
  }
}
