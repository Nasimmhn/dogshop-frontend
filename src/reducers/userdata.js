import { createSlice } from '@reduxjs/toolkit'


export const userdata = createSlice({
  name: 'users',
  initialState: {
    user: {}
  },

  reducers: {
    setUserName: (state, action) => {
      state.user.name = action.payload.user.name
    },
    setUserEmail: (state, action) => {
      state.user.email = action.payload.user.email
    },
    setUserPassword: (state, action) => {
      state.user.password = action.payload.user.password
    },
    setAccessToken: (state, action) => {
      state.user.accessToken = action.payload.user.accessToken
    },
  }
})

// THUNK MIDDLEWARE FOR SIGN UP
export const RegisterUser = (SignUpValues) => {
  return dispatch => {
    fetch(`http://localhost:8080/register/${SignUpValues}`, {
      method: 'POST',
      body: JSON.stringify(SignUpValues),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        dispatch(userdata.actions.setUserName(json.name))
        dispatch(userdata.actions.setUserEmail(json.email))
        dispatch(userdata.actions.setUserPassword(json.password))
        dispatch(userdata.actions.setAccessToken(json.accessToken))
      })
      .catch(err => console.log('error', err))
  }
}