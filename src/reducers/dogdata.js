import { createSlice } from '@reduxjs/toolkit'

import { API } from '../App'

export const dogdata = createSlice({
  name: "dogdata",
  initialState: {
    dog: null,
    dogs: [],
    dogFilter: "",
    breed: null,
    breeds: [],
    breedFilter: "",
    filename: null,
    message: {
      success: null,
      error: null,
    },
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
    setBreed: (state, action) => {
      state.breed = action.payload
    },
    setBreeds: (state, action) => {
      state.breeds = action.payload
    },
    setBreedFilter: (state, action) => {
      state.breedFilter = action.payload
    },
    setMessage: (state, action) => {
      // Takes all form values from adsForm and adds to array of dogs
      state.message = action.payload
    },
    setFilename: (state, action) => {
      // Takes all form values from adsForm and adds to array of dogs
      state.filename = action.payload
    },
  }
})





export const fetchDog = (dogId) => {
  console.log("fetchDog", dogId)
  return dispatch => {
    fetch(`${API}/dog/id/${dogId}`)
      .then(res => res.json())
      .then(dog => {
        console.log("dog", dog)
        dispatch(dogdata.actions.setDog(dog))
      })
  }
}

export const fetchDogs = (query) => {
  console.log("QUERY:", query)
  return dispatch => {
    fetch(`${API}/dog${query}`)
      .then(res => res.json())
      .then(doggies => {
        console.log("doggies:", doggies)

        dispatch(dogdata.actions.setDogs(doggies))
      })
  }
}


export const fetchBreed = (breedId) => {
  return dispatch => {
    fetch(`${API}/breed/id/${breedId}`)
      .then(res => res.json())
      .then(breed => {
        dispatch(dogdata.actions.setBreed(breed))
      })
  }
}

export const fetchBreeds = (query) => {
  return dispatch => {
    fetch(`${API}/breed${query}`)
      .then(res => res.json())
      .then(breeds => {
        dispatch(dogdata.actions.setBreeds(breeds))
      })
  }
}

// dogAd = the formvalues from dispatch on adsform submit
export const createDogAd = (newDog, user) => {
  console.log("createDogAd - newDog:", newDog)
  console.log("user:", user)
  return dispatch => {
    fetch(`${API}/dog`, {
      method: 'POST',
      body: JSON.stringify(newDog),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': user.accessToken
      }
    })
      .then(res => res.json())
      .then((json) => {
        console.log("createDogAd - response:", json)
        dispatch(dogdata.actions.setMessage({ success: `Successfully saved` }))
      })
      .catch((err) => {
        console.error("ERROR:", err)
        dispatch(dogdata.actions.setMessage({ error: `Error! Failed to save` }))

      })
  }
}

// export const uploadFile = (image) => {
//   console.log(image)
//   const formData = new FormData
//   formData.append('file', image)
//   return dispatch => {
//     fetch(`${API}/upload`, {
//       method: 'POST',
//       body: formData
//     })
//       .then(res => res.json())
//       .then(json => {
//         console.log(json)
//       })
//       .catch(err => {
//         console.error('error', err)
//       })
//   }
// }

export const uploadFile = (image) => {
  console.log("image", image)
  const formData = new FormData
  formData.append('file', image)
  return dispatch => {
    fetch(`${API}/upload`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(json => {
        console.log("JSON", json)
        dispatch(dogdata.actions.setFilename(json.file.filename))
      })
      .catch(err => {
        console.error('error', err)
      })
  }
}

