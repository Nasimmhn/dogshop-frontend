import { createSlice } from '@reduxjs/toolkit'


export const userdata = createSlice({
  name: 'userdata',
  initialState: {
    user: {},
    isRegistered: false,
    isLoggedin: false,
    isAuthenticated: false,
    // isLoginFailed: false,

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
      state.user = {
        _id: action.payload._id,
        name: action.payload.name,
        accessToken: action.payload.accessToken,
        role: action.payload.role
      }
    },
    authenticating: (state, action) => {
      state.isAuthenticated = true
    },
    clearUser: (state, action) => {
      state.user = {}
      state.isRegistered = false
      state.isLoggedin = false
      state.isAuthenticated = false
    },
    // setLoginFailed: (state, action) => {
    //   state.isLoginFailed = action.payload
    // }

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
      .then(user => {
        // if (json === true) {
        dispatch(userdata.actions.loggingIn(user))
        window.sessionStorage.setItem('accessToken', user.accessToken)
        // }
        // else {
        // dispatch(userdata.actions.setLoginFailed(true))
        // }
      })
      .catch(err => console.error('error', err))
  }
}


export const authUser = (accessToken) => {
  return dispatch => {
    fetch(`http://localhost:8080/auth`, {
      method: 'GET',
      headers: {
        Authorization: accessToken
      }
    })
      .then(res => res.json())
      .then(user => {
        console.log("authUser (reducer) - user:", user)
        dispatch(userdata.actions.authenticating(user))
      })
      .catch(err => console.error('error', err))
  }
}


export const logoutUser = () => {
  return dispatch => {
    window.sessionStorage.clear()
    dispatch(userdata.actions.clearUser())

  }
}