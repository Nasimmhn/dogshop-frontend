import { createSlice } from '@reduxjs/toolkit'


export const userdata = createSlice({
  name: 'userdata',
  initialState: {
    user: {},
    isRegistered: false
  },
  reducers: {
    registerUser: (state, action) => {
      state.isRegistered = true
      state.user = {
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        accessToken: action.payload.accessToken,
      }
    }
  }
})

// THUNK MIDDLEWARE FOR SIGN UP
export const registerNewUser = (name, email, password) => {
  console.log("USER", name, email, password)
  return dispatch => {
    fetch(`http://localhost:8080/register`, {
      method: 'POST',
      body: JSON.stringify({
        'name': name,
        'email': email,
        'password': password,
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        console.log("json", json)
        dispatch(userdata.actions.registerUser(json))
      })
      .catch(err => console.log('error', err))
  }
}