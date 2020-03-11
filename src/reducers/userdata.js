import { createSlice } from '@reduxjs/toolkit'


export const userdata = createSlice({
  name: 'userdata',
  initialState: {
    user: {},
    isRegistered: false,
    isLoggedin: false,
    ShowUserDashboard: false,

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
    },
    loggingIn: (state, action) => {
      state.isLoggedin = true
      state.ShowUserDashboard = true
      state.user = {
        _id: action.payload._id,
        accessToken: action.payload.accessToken,
        role: action.payload.role
      }
    },
    UserDashboard: (state, action) => {
      state.ShowUserDashboard = true
      state.user = {
        accessToken: action.payload.accessToken,
        data: action.payload.data,

      }
    }
  }
})

// THUNK MIDDLEWARE FOR SIGN UP
export const registerNewUser = (name, email, password) => {

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
      .catch(err => console.error('error', err))
  }
}

export const loginUser = (email, password) => {

  return dispatch => {
    fetch(`http://localhost:8080/login`, {
      method: 'POST',
      body: JSON.stringify({
        'email': email,
        'password': password,
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        dispatch(userdata.actions.loggingIn(json))
      })
      .catch(err => console.error('error', err))
  }
}


export const AuthUser = (accessToken, data) => {
  return dispatch => {
    fetch(`http://localhost:8080/auth`, {
      method: 'GET',
      headers: {
        Authorization: accessToken, data
      }
    })
      .then(res => res.json())
      .then(json => {
        console.log("json", json)
        dispatch(userdata.actions.UserDashboard(json))
      })
      .catch(err => console.error('error', err))
  }
}