import { createSlice } from '@reduxjs/toolkit'


export const userdata = createSlice({
  name: 'userdata',
  initialState: {
    users: {}
  },
  reducers: {
    userRegistered: (state, action) => {
      state.users = {
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        accessToken: action.payload.accessToken,
        role: action.payload.role
      }
    }
  }
})

// THUNK MIDDLEWARE FOR SIGN UP
export const registerFetch = (signupValues) => {
  return dispatch => {
    fetch(`http://localhost:8080/register/${signupValues}`, {
      method: 'POST',
      body: JSON.stringify({
        signupValues
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        dispatch(userdata.actions.userRegistered(json))

      })
      .catch(err => console.log('error', err))
  }
}