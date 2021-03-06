import { createSlice } from '@reduxjs/toolkit'


export const ui = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false,
    showProfile: true,
    showCreateDogForm: false,
    showDogList: false,
    isDeletingAd: false,
    message: {
      success: null,
      error: null,
    },
  },

  reducers: {

    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
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
    setDeletingAd: (state, action) => {
      state.isDeletingAd = action.payload
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
