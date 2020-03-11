import { createSlice } from '@reduxjs/toolkit'

export const dogdata = createSlice({
  name: "dogdata",
  initialState: {
    dog: null,
    dogs: [],
    dogFilter: "",
    dogBreed: null,
    dogBreeds: [],
    dogBreedFilter: "",

  },

  reducers: {
    // Dog
    setDog: (state, action) => {
      state.dog = action.payload
    },
    setDogs: (state, action) => {
      state.dogs = action.payload
    },

    setDogFilter: (state, action) => {
      state.dogFilter = action.payload
    },

    // Dog breed
    setDogBreed: (state, action) => {
      state.dogBreed = action.payload
    },
    setDogBreeds: (state, action) => {
      state.dogBreeds = action.payload
    },
    setDogBreedFilter: (state, action) => {
      state.dogBreedFilter = action.payload
    },
  }
})





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

export const fetchDogs = (query) => {
  return dispatch => {
    fetch(`http://localhost:8080/dogs/${query}`)
      .then(res => res.json())
      .then(doggies => {
        dispatch(dogdata.actions.setDogs(doggies))
      })
  }
}


export const fetchDogBreed = (breedId) => {
  return dispatch => {
    fetch(`http://localhost:8080/dogbreed/${breedId}`)
      .then(res => res.json())
      .then(dogBreed => {
        dispatch(dogdata.actions.setDogBreed(dogBreed))
      })
  }
}
export const fetchDogBreeds = (query) => {
  return dispatch => {
    fetch(`http://localhost:8080/dogbreeds/${query}`)
      .then(res => res.json())
      .then(dogBreeds => {
        dispatch(dogdata.actions.setDogBreeds(dogBreeds))
      })
  }
}