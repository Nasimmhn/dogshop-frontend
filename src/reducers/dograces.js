import { createSlice } from '@reduxjs/toolkit'



export const dograces = createSlice({
  name: "dograces",
  initialState: {
    items: [],
  },

  reducers: {
    setDogRaces: (state, action) => {
      state.items = action.payload
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
        dispatch(dograces.actions.setDogRaces(dogRaces))
      })
  }
}


