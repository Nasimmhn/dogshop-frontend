import React from 'react'
import { Redirect } from 'react-router'

import { useDispatch } from 'react-redux'

// Reducer
import { userdata } from '../reducers/userdata'


export const Logout = () => {
  const dispatch = useDispatch()
  dispatch(userdata.actions.clearUser())
  window.sessionStorage.clear()
  return (
    <Redirect to="/" />
  )
}