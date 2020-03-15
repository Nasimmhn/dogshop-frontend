import React from 'react'
import { Redirect } from 'react-router'

import { useDispatch } from 'react-redux'

// Reducer
import { logoutUser } from '../reducers/userdata'


export const Logout = () => {
  const dispatch = useDispatch()
  dispatch(logoutUser())

  return (
    <Redirect to="/login" />
  )
}