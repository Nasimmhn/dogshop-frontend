import { createSlice } from '@reduxjs/toolkit'

import { API } from '../App'
import { ui } from './ui'


export const userdata = createSlice({
  name: 'userdata',
  initialState: {
    user: {},
    isRegistered: false,
    isLoggedin: false,
    isAuthenticated: false,
    messages: {
      error: null,
      success: null
    },

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
      state.isLoggedin = false
      state.isAuthenticated = false
      state.isRegistered = false
    }
  }
})

// THUNK MIDDLEWARE FOR SIGN UP
export const registerNewUser = (name, email, password) => {

  return dispatch => {
    fetch(`${API}/register`, {
      method: 'POST',
      body: JSON.stringify({
        'name': name,
        'email': email,
        'password': password,
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        console.log("res", res)
        if (res.status !== 201) { throw new Error(res.status) }
        else { return res.json() }
      })
      .then(json => {
        dispatch(ui.actions.setSuccessMessage('User created!'))
        dispatch(userdata.actions.registerUser(json))
      })
      .catch(err => {
        dispatch(ui.actions.setErrorMessage('User already exist'))
      })
  }
}

export const loginUser = (email, password) => {

  return dispatch => {
    fetch(`${API}/login`, {
      method: 'POST',
      body: JSON.stringify({
        'email': email,
        'password': password,
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(user => {
        window.sessionStorage.setItem('userId', user._id)
        window.sessionStorage.setItem('name', user.name)
        window.sessionStorage.setItem('email', user.email)
        window.sessionStorage.setItem('isAuthenticated', true)
        window.sessionStorage.setItem('accessToken', user.accessToken)
        dispatch(userdata.actions.loggingIn(user))
      })
      .catch(err => {
        console.error('error', err)
        dispatch(ui.actions.setErrorMessage('Failed to login'))
      })
  }
}


export const authUser = (accessToken) => {
  return dispatch => {
    fetch(`${API}/auth`, {
      method: 'GET',
      headers: {
        Authorization: accessToken
      }
    })
      .then(res => res.json())
      .then(auth => {
        console.log("authUser (true/false):", auth)
        dispatch(userdata.actions.authenticating(auth))
      })
      .catch(err => console.error('error', err))
  }
}



export const getUser = (userId, accessToken) => {
  return dispatch => {
    fetch(`${API}/user/id/${userId}`, {
      method: 'GET',
      headers: {
        Authorization: accessToken
      }
    })
      .then(res => res.json())
      .then(auth => {

      })
      .catch(err => console.error('error', err))
  }
}

