import { createSlice } from '@reduxjs/toolkit'


export const ui = createSlice({
  name: 'ui',
  initialState: {
    showProfile: false,
    showCreateDogForm: false,
    showDogList: false
  },

  reducers: {

    setShowCreateDogForm: (state, action) => {
      state.showDogList = false
      state.showProfile = false
      state.showCreateDogForm = true
    },
    setShowProfile: (state, action) => {
      state.showDogList = false
      state.showProfile = true
      state.showCreateDogForm = false
    },
    setShowDogList: (state, action) => {
      state.showDogList = true
      state.showProfile = false
      state.showCreateDogForm = false
    }
  }
})
