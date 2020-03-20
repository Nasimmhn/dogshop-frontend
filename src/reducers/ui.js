import { createSlice } from '@reduxjs/toolkit'


export const ui = createSlice({
  name: 'ui',
  initialState: {
    showProfile: true,
    showCreateDogForm: false,
    showDogList: false,
    message: {
      success: null,
      error: null,
    },
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
    },
    setSuccessMessage: (state, action) => {
      state.message.error = null
      state.message.success = action.payload
    },
    setErrorMessage: (state, action) => {
      state.message.success = null
      state.message.error = action.payload
    },
    resetUI: (state, action) => {
      state.message.success = null
      state.message.error = null
      state.showProfile = true
      state.showCreateDogForm = false
      state.showDogList = false
    },
  }
})
