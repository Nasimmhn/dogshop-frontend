import { createSlice } from '@reduxjs/toolkit'



export const dogdata = createSlice({
  name: "dogdata",
  initialState: {
    dogRaceItems: [],
    dogs: {},
  },

  reducers: {
    setDogRaceItems: (state, action) => {
      state.dogRaceItems = action.payload
    }

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


