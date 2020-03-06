import { createSlice } from '@reduxjs/toolkit'

export const dogdata = createSlice({
  name: "dogdata",
  initialState: {
    dogRaceItems: [],
    dogs: [],
    dog: null,
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

    setDog: (state, action) => {
      state.dog = action.payload
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

export const fetchDog = (dogId) => {
  console.log("fetchDog", dogId)
  return dispatch => {
    fetch(`http://localhost:8080/dog/id/${dogId}`)
      .then(res => res.json())
      .then(dog => {
        console.log("dog", dog)
        dispatch(dogdata.actions.setDog(dog))
      })
  }
}
