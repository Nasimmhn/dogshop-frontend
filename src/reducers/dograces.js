import { createSlice } from '@reduxjs/toolkit'



export const dograces = createSlice({
  name: "dograces",
  initialState: {
    races: [],
  },

  reducers: {
    setRaces: (state, action) => {
      state.races = action.payload
    }

  }
})

export const fetchDogRaces = (name, description, activity, group, size) => {

  return dispatch => {
    // dispatch(ui.actions.setLoading(true))
    fetch(`http://localhost:8080/dograces?name=${name}&description=${description}&activity=${activity}&size=${size}&group=${group}`,
      {
        method: 'GET'
      })
      .then(res => res.json())
      .then(json => {
        console.log("json", json)
        dispatch(dograces.actions.setRaces(json))
        // dispatch(ui.actions.setLoading(false))
        // dispatch(ui.actions.setShowProduct(true))
      })
  }
}


